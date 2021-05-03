import React, {useContext, useEffect} from 'react';

import Card, {CardProps} from '../card';
import './style.scss';
import GameCtx from '../../context';

interface IProps {
    data: CardProps[];
    side: 'blue' | 'red';
}

const CardList = ({data, side}: IProps) => {

    const ctx = useContext(GameCtx);
    console.log(ctx);

    const draggable = (side === 'blue' && ctx.round === 'beforeBlueAttack') ||
                      (side === 'red' && ctx.round === 'beforeRedAttack');


    useEffect(() => {
        if (data.length > 0) {

        }
    }, [data]);

    return (
        <div className="card-list-wrap">
            {
                data.map(item => <Card draggable={draggable} key={item.id} {...item}/>)
            }
        </div>
    );
};

export default CardList;