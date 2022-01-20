export default class Event {
    Text = null;
    End = null;
    Start = 0;
    Id = null;

    constructor (id, end, start, text) {
      this.Start = start
      this.End = end
      this.Id = id
      this.Text = text
    }

    getText () {
      return this.Text
    }

    getEnd () {
      return this.End
    }

    getId () {
      return this.Id
    }

    getStart () {
      return this.Start
    }

    setEnd (end) {
      this.End = end
    }

    setId (id) {
      this.Id = id
    }

    setText (text) {
      this.Text = text
    }

    setStart (start) {
      this.Start = start
    }}
