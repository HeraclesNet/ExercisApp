export default class Event {
  text = null;
  ent = null;
  date = null;
  startt = 0;

  constructor (date, start, end, name) {
    this.startt = start
    this.ent = end
    this.text = name
    this.date = date
  }
}
