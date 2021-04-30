import create, { GetState, SetState } from "zustand";

interface MyState {
  users: object;
  getUsers: () => void;
}

export default create((setState, getState) => {
  return {
    users: [],
    getUsers: async () => {
      const result = fetch("https://jsonplaceholder.typicode.com/users");
      const users = (await result).json();
      console.log(users);
    },
  };
});
