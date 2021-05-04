import React, {useContext} from 'react';

import {ICard} from './typings';
import './style.scss';
import GameCtx from '../../context';


const Card = ({name = '士兵', attack = 0, HP = 1, id, draggable}: ICard) => {

    const ctx = useContext(GameCtx);

    return (
        <div className="card-item" draggable={draggable} onDragStart={() => {
            console.log(id);
            ctx?.setDraggingId(id);
        }
        }>
            <div className="attack">🗡️{attack}</div>
            <div className="HP">❤️{HP}</div>
            <div className="name">{name}</div>
        </div>
    );
};

export default Card;