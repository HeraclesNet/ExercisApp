export default class Event {
  text = null;
  endT = null;
  date = null;
  startT = 0;

  constructor (date, start, end, name) {
    this.start_t = start
    this.end_t = end
    this.text = name
    this.date = date
  }
}
