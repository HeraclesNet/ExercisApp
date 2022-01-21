export default class Event {
    Text = null;
    endTime = null;
    date = null;
    startTime = 0;
    customAttribute = null;

    constructor (id, date, end, start, text) {
      this.startTime = start
      this.endTime = end
      this.customAttribute = id
      this.Text = text
      this.date = date
    }

    getText () {
      return this.Text
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

    setText (text) {
      this.Text = text
    }

    setStart (start) {
      this.startTime = start
    }

    setDate (date) {
      this.date = date
    }
}
