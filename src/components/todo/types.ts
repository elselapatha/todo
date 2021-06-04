import { Moment } from 'moment';
export default interface TodoItem {
  id: String;
  done: Boolean;
  title: String;
  timestamp: Moment;
}
