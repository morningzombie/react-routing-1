import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { getHash } from './utils';
import Nav from './components/Nav';
import Users from './components/Users';
import Home from './components/Home';

const API = 'https://acme-users-api-rev.herokuapp.com/api';

function App() {
  const [params, setParams] = useState(qs.parse(getHash()));
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(`${API}/users`).then(response => {
      setCount(response.data.count);
      setUsers([...response.data.users]);
    });
  }, []);

  console.log(users);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);
  return (
    <div className="container">
      <Nav users={users} />
      {params.view === undefined && <Home />}
      {params.view === 'users' && (
        <Users users={users} count={count} params={params} />
      )}
    </div>
  );
}

export default App;
