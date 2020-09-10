import React, { useState, useEffect } from 'react';

const App = () => {
  const [Errors, setErrors] = useState(false);
  const [Users, setUsers] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res  = await fetch('https://jsonplaceholder.typicode.com/users')

      res.json()
      .then(res => setUsers(res))
      .catch(err => setErrors(true));
    }

    fetchData();
  });

  const data = () => {
    for (let user of Users) {
      return {
        (user.name),
        (user.email)
      }
  }};

  return(
    <div>
      <h1>{data.name}</h1>
      <hr />
      <span>Has Error: {JSON.stringify(Errors)}</span>
    </div>
  );
};

export default App;