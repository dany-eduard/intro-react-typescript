import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useMyStore from '../../store';

const useStore = useMyStore;

const UserDetail = () => {
  const userId = useParams();
  console.log(userId);
  const getUserDetail = useStore((state) => state.getUserDetail);
  const userDetail = useStore((state) => state.userDetail);
  console.log('userDetail', userDetail);

  useEffect(() => {
    (async function () {
      await getUserDetail(userId);
    })();
  }, [userId, getUserDetail]);

  return (
    <div>
      <h2> {userDetail?.name} </h2>
      <p> {userDetail?.email}</p>
    </div>
  );
};

export default UserDetail;
