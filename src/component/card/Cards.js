import React from 'react'

import './style.css'

const Cards = (props) => {
    return(
        <div>
            <div className='cards'>
                <img src={props.img} alt="Connecting.." />
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
            </div>
        </div>
    );
}

export default Cards;