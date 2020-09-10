import React from 'react';

const Card = (i) => {
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={i.imgsrc} alt="Users Pic" />
            <div className="px-6 py-4">
                <h2 className="font-bold text-black-500 text-xl mb-2">{i.name}</h2>
                <p className="font-light text-gray-500 text-l mb-2">{i.email}</p>
            </div>
        </div>
    )
}

export default Card;