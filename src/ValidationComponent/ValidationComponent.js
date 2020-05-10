import React from 'react';

const validationComponent = (props) => {
    return(
        <div>
            <p>Input some paragraph </p>
            <input type='text' onChange={props.changed} value={props.txt} />
            <p>Length={props.txtlength}</p>
        </div>
    );
}

export default validationComponent;