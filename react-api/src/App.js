import React, { useState, useEffect } from 'react';

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
  
  

  //const data = () => {
   // for (let user of Users) {
    //  return {
      //  (user.name),
        //(user.email)
      //}
  //}};

  return(
    <div>
      {users.map((user) => (
        <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <hr />
        </div>
      ))}
      <span>Has Error: {JSON.stringify(errors)}</span>
    </div>
  );
};

export default App;