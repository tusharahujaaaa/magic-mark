export interface User {
  id: number;
  username: string;
  fullname: string;
  email: string;
  profileimageurl?: string;
  department?: string;
}
export interface Course {
  id: number;
  shortname: string;
  fullname: string;
  summary?: string;
  categoryid?: number;
}
