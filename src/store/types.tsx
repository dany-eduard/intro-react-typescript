import { State } from 'zustand';

export interface User {
  address: object;
  company: object;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface MyUserState extends State {
  users: User[];
  userDetail: User | undefined;
  getUsers: () => void;
  getUserDetail: (userId: Object) => void;

  loading: boolean;
}
