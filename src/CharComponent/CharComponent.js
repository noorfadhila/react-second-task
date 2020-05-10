import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return(
        <div>
            <p className='char-print' onClick={props.clicked}>{props.txt}</p>
        </div>
    )
}

export default charComponent;