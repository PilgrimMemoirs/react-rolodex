import React from 'react';
import './card.css'

export const Card = (props) => (
    <div className="card-container">
        <img alt="contact" src={`https://robohash.org/${props.contact.id}?set=set4&size=180x180`} />
        <h2> { props.contact.name } </h2>
        <p> { props.contact.email } </p>
    </div>
)
    