import React, { useState, useEffect } from 'react';
import Card from './Card.js';

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
        <Card
          key = {user.id} 
          imgsrc = 'https://robohash.org/{user.id}?set=set2&size=180x180'
          name = {user.name}
          email = {user.email}
        />
      ))}
      <span>Has Error: {JSON.stringify(errors)}</span>
    </div>
  );
};

export default App;