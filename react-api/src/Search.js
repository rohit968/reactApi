import React, { useState } from 'react';
import Card from './Card.js';

const Search = ({users}) => {
    const [name, setName] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        let searchResult = event.target.value;
        setName(searchResult);
    };

    const filteredUser = users.filter( user => {
        return user.name.toLowerCase().startsWith(name.toLowerCase())
    })

    return (
        <div>
            <div className="realtive mr-6 my-2">
                <input onChange={handleSearch} name={name} type="search" className="bg-purple-white shadow rounded border-0 p-3" placeholder="Search by name..." />
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-5 gap-5">
                    {filteredUser.map((user) => (
                    <Card
                        key = {user.id} 
                        imgsrc = {`https://robohash.org/${user.id}?set=set2&size=180x180`}
                        name = {user.name}
                        email = {user.email}
                    />
                ))}
                </div>
            </div>
        </div>
    );
};

export default Search;