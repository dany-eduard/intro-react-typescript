import React, { useEffect } from 'react';
import useMyStore from '../../store';
import UserItem from '../../components/UserItem';
const useStore = useMyStore;

const Home: React.FC<{}> = () => {
  const users = useStore((state) => state.users);
  console.log(users);
  const getUsers = useStore((state) => state.getUsers);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    (async function (): Promise<void> {
      await getUsers();
    })();
  }, [getUsers]);

  const renderUsers = (): undefined | JSX.Element[] | string => {
    if (users) {
      return users.map((user: any, index: number) => <UserItem key={index} {...user} />);
    } else if (loading) {
      return 'Cargando';
    }
  };

  return (
    <div>
      <h1>Inicio</h1>
      {loading && 'Cargando...'}
      {renderUsers()}
    </div>
  );
};

export default Home;
