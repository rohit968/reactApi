import React from 'react';

const Card = (i) => {
    return(
        <div>
            <div>
                <p>{i.id}</p>
                <img src={i.imgsrc} alt="User Pic" />
                <h2>{i.name}</h2>
                <p>{i.email}</p>
                <hr /> 
            </div>
        </div>
    )
}

export default Card;