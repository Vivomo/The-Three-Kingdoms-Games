import React from 'react';

import './style.scss';

interface IProps {
    name?: string;
    initHP?: number;
    HP?: number;
}

const City = ({name = '主城', HP = 300}: IProps) => {
    return (
        <div className="battle-city">
            <div>{name}</div>
            <div>❤️{HP}</div>
        </div>
    );
};

export default City;