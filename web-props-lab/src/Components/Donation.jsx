import React from 'react';

const Donation = (props) => {
    return (
        <li>
            <strong>{props.name}</strong> donated $ {props.amount} <br></br>{props.message}
        </li>
    )
}

export default Donation;