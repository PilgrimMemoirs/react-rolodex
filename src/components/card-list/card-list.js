import React from 'react';
import { Card } from '../card/card'
import './card-list.css';

export const CardList = props => {
    return <div className="card-list">
        {props.contacts.map(contact => (
            <Card key={ contact.id } contact={contact} />
        ))}
    </div>
};