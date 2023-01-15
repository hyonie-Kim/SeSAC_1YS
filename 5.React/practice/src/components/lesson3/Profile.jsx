import React from 'react';
import ChangeObjArr from './ChangeObjArr';

export default function Profile() {
  const friendObjArr = [
    { name: '지수', age: '20', nickName: '츄' },
    {
      name: '지선',
      age: '19',
      nickName: '지블리',
    },
    {
      name: '은지',
      age: '20',
      nickName: '20',
    },
  ];
  return (
    <div>
      <ChangeObjArr objArr={friendObjArr} />
    </div>
  );
}
