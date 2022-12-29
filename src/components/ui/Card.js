import React from 'react';
import "./Card.css"

/***
 * 1. Custom components by default do not wrap children, so to wrap children in custom component, add {props.children} to wrapper.
 * 2. To apply styles where custom component is imported. add classes to the custom component
 * */
const Card = (props) => {
    const classes = 'card '+ props.className
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};

export default Card;
