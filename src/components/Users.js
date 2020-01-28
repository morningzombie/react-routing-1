import React from 'react';

export default function Users({ users }) {
  console.log(users);
  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        {users.map((user, index) => {
          return <li key={index}> {user.fullName}</li>;
        })}
      </ul>
    </div>
  );
}
