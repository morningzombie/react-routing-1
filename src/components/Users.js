import React from 'react';
import Pager from './Pager';


export default function Users({ users, count }) {

  console.log(count);

  return (
    <div>
      <h1>Users Page</h1>
      <Pager count={count} />
      <ul>
        {users.map((user, index) => {
          return <li key={index}> {user.fullName}</li>;
        })}
      </ul>
    </div>
  );
}
