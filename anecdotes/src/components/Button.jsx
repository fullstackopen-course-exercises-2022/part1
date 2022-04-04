import React from 'react';

const Button = (props) =>  {
    return <input type="submit" value={props.title} onClick={props.handleClick} />
}

export default Button;