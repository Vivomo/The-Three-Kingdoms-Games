import React, {useContext} from 'react';

import {CardProps} from './typings';
import './style.scss';
import GameCtx from '../../context';


const Card = ({name = '士兵', attack = 0, HP = 1, id, draggable}: CardProps) => {

    const ctx = useContext(GameCtx);

    return (
        <div className="card-item" draggable={draggable} onDragStart={() => {
            console.log(id);
            ctx?.setDraggingId(id);
        }
        }>
            <div className="name">{name}</div>
            <div className="attack">攻击:{attack}</div>
            <div className="HP">HP:{HP}</div>
        </div>
    );
};

export default Card;