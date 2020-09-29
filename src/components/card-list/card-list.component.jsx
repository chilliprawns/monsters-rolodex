import React from 'react';
import {Card} from '../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => (
    //console.log(props);
    //console.log(props.children);
    //return <div className='card-list'>{props.children}</div>;
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
    //return <div className='card-list'>{props.children}</div>;
);