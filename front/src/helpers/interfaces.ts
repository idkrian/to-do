export interface TaskProps {
  _id: string;
  title: string;
  description: string;
  done?: boolean;
  date: Date;
  list: string;
}
