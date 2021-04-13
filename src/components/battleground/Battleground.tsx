import React from 'react';

import BattleMap from '../battle-map';
import City from '../city';
import './style.scss';

const Battleground = () => {
    return (
        <div className="battleground">
            <City/>
            <BattleMap/>
            <City/>
        </div>
    );
};

export default Battleground;