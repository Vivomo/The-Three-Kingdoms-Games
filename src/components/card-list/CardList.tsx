import React, {useEffect} from 'react';

import Card, {CardProps} from '../card';
import './style.scss';

interface IProps {
    data: CardProps[];
    side: 'blue' | 'red';
}

const CardList = ({data}: IProps) => {

    useEffect(() => {
        if (data.length > 0) {

        }
    }, [data]);

    return (
        <div className="card-list-wrap">
            {
                data.map(item => <Card key={item.id} {...item}/>)
            }
        </div>
    );
};

export default CardList;