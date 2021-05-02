import create, { SetState, GetState } from 'zustand';
import {MyUserState} from './types';

export default create<MyUserState>(
  (setState: SetState<MyUserState>, getState: GetState<MyUserState>): MyUserState => {
    return {
      users: [],
      userDetail: undefined,
      getUsers: async () => {
        setState({ loading: true });
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        setState({ users, loading: false });
      },

      getUserDetail: async ({userId}: any) => {
        setState({loading: true});
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userDetail = await res.json();
        setState({userDetail})
      },
      loading: false,
    };
  }
);
