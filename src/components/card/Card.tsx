import React from 'react';

import {CardProps} from './typings';
import './style.scss';


const Card = ({name = '士兵', attack = 0, HP = 1}: CardProps) => {
    return (
        <div className="card-item" draggable>
            <div className="name">{name}</div>
            <div className="attack">攻击:{attack}</div>
            <div className="HP">HP:{HP}</div>
        </div>
    );
};

export default Card;