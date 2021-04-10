import React from 'react';

import './style.scss';

interface IProps {
    width?: number;
    height?: number;
}

const BattleMap = ({width = 4, height = 6}: IProps) => {
    return (
        <div className="battle-map">
            <div className="row-line-wrap line-wrap">
            {
                Array(height - 1).fill(0).map((_, index) => {
                    return <div className="battle-map-line" key={`r${index}`}/>
                })
            }
            </div>
            <div className="col-line-wrap line-wrap">
            {
                Array(width - 1).fill(0).map((_, index) => {
                    return <div className="battle-map-line" key={`c${index}`}/>
                })
            }
            </div>
        </div>
    );
};

export default BattleMap;