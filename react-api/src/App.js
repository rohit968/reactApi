import React, { useState, useEffect } from 'react';
import Search from './Search.js';

const App = () => {
  const [errors, setErrors] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();
    setUsers(data);
    }

    fetchData();
  }, []);
  
  
  return(
    <Search users = {users}/>  
  );
};

export default App;