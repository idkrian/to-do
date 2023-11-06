export interface TaskProps {
  id?: string;
  title: string;
  description: string;
  date: Date;
  list: string;
  userId?: string;
}
export interface UserProps {
  email: string;
  password?: string;
  confirmPassword?: string;
}
