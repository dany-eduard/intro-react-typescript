import React, { useEffect, useState } from "react";
import useMyStore from "../../store";

const fakeUsers: object = [{ id: 1, name: "Daniel", lastName: "Almagro", age: 20 }];

type HomeProps = {
  id?: number | string;
  loginStatus?: string | undefined;
};

const Home: React.FC<HomeProps> = ({ id, loginStatus }) => {
  const [users, setUsers] = useState<object>(fakeUsers);
  const [loading, setLoading] = useState<boolean>(true);
  const useStore = useMyStore;
  const users2 = useStore(state => state.users);
  const getUsers: any = useStore(state => state.getUsers);

  useEffect(() => {
    (async function(): Promise<void> {
      await getUsers();
    })()
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {loading && "Cargando..."}
    </div>
  );
};

export default Home;
