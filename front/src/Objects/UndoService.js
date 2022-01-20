import { DayPilot } from '@daypilot/daypilot-lite-vue'

export default class UndoService {
  _items = []
  _history = []
  _position = 0

  get history () {
    return this._history
  }

  get position () {
    return this._position
  }

  get canUndo () {
    return this._position > 0
  }

  get canRedo () {
    return this._position < this._history.length
  }

  initialize (items) {
    // deep copy using JSON serialization/deserialization
    this._items = []
    items.forEach(i => {
      const str = JSON.stringify(i)
      const key = this.keyForItem(i)
      if (this._items[key]) {
        throw new Error('Duplicate IDs are not allowed.')
      }
      this._items[key] = str
    })
    this._history = []
  }

  update (item, text) {
    const key = this.keyForItem(item)
    const stringified = JSON.stringify(item)
    if (!this._items[key]) {
      throw new Error('The item to be updated was not found in the list.')
    }
    if (this._items[key] === stringified) {
      throw new Error('The item to be updated has not been modified.')
    }
    const record = {
      id: item.id,
      time: new DayPilot.Date(),
      previous: JSON.parse(this._items[key]),
      current: JSON.parse(stringified),
      text: text,
      type: 'update'
    }

    this._items[key] = stringified
    this.addToHistory(record)

    return record
  }

  add (item, text) {
    const key = this.keyForItem(item)
    if (this._items[key]) {
      throw new Error('Item is already in the list')
    }
    const record = {
      id: item.id,
      time: new DayPilot.Date(),
      previous: null,
      current: item,
      text: text,
      type: 'add'
    }

    this._items[key] = JSON.stringify(item)
    this.addToHistory(record)

    return record
  }

  remove (item, text) {
    const key = this.keyForItem(item)
    if (!this._items[key]) {
      throw new Error('The item to be removed was not found in the list.')
    }
    if (this._items[key] !== JSON.stringify(item)) {
      throw new Error('The item to be removed has been modified.')
    }
    const record = {
      id: item.id,
      time: new DayPilot.Date(),
      previous: item,
      current: null,
      text: text,
      type: 'remove'
    }

    this._items[key] = null
    this.addToHistory(record)

    return record
  }

  undo () {
    if (!this.canUndo) {
      throw new Error('Cant undo')
    }

    this._position -= 1
    const record = this._history[this._position]

    const key = this.keyForId(record.id)
    switch (record.type) {
      case 'add':
        this._items[key] = null
        break
      case 'remove':
        this._items[key] = JSON.stringify(record.previous)
        break
      case 'update':
        this._items[key] = JSON.stringify(record.previous)
        break
    }

    return record
  }

  redo () {
    if (!this.canRedo) {
      throw new Error('Cant redo')
    }

    const record = this._history[this._position]
    this._position += 1

    const key = this.keyForId(record.id)
    switch (record.type) {
      case 'add':
        this._items[key] = JSON.stringify(record.current)
        break
      case 'remove':
        this._items[key] = null
        break
      case 'update':
        this._items[key] = JSON.stringify(record.current)
        break
    }

    return record
  }

  keyForItem (item) {
    return this.keyForId(item.id)
  }

  keyForId (id) {
    return '_' + id
  }

  addToHistory (record) {
    while (this.canRedo) {
      this._history.pop()
    }
    this._history.push(record)
    this._position += 1
  }
}
