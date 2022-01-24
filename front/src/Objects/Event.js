export default class Event {
  name = null;
    endTime = null;
    date = null;
    startTime = 0;
    customAttribute = null;

    constructor (id, date, end, start, name) {
      this.startTime = start
      this.endTime = end
      this.customAttribute = id
      this.name = name
      this.date = date
    }

    getName () {
      return this.name
    }

    getEnd () {
      return this.endTime
    }

    getId () {
      return this.customAttribute
    }

    getStart () {
      return this.startTime
    }

    setEnd (end) {
      this.endTime = end
    }

    setId (id) {
      this.customAttribute = id
    }

    setName (name) {
      this.name = name
    }

    setStart (start) {
      this.startTime = start
    }

    setDate (date) {
      this.date = date
    }
}
