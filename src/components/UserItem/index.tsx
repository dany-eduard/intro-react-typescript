import React from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../../store/types';

export default React.memo(function UserItem({ email, id, name, phone }: User) {
  const history = useHistory();
  const handleClick = (): void => {
    history.push(`/user-detail/${id}`);
  };

  return (
    <div
      style={{
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        padding: 10,
      }}
      onClick={handleClick}>
      <label> {name} </label>
      <label> {email} </label>
      <label> {phone} </label>
      <button style={{ width: 200, marginTop: 10 }}>Ver detalles</button>
    </div>
  );
});
