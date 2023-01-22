import React from 'react'

import './style.css'

const Image = (props) => {
    return(
        <div>
            <img src={props.img} alt="/" style={{height:props.height,width:props.width}}/>
        </div>
    );

}
export default Image;