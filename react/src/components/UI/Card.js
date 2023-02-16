import React from "react";
import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;
    return (
        <>
            <div className={classes}>
                {props.children} {/* children is a reserved word */}
            </div>
        </>
    );
}

export default Card;
