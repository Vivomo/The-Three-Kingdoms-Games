import React from 'react';
import {ROUND} from '../typings';

export interface ICtx {
    round: ROUND;
}

const GameCtx = React.createContext<ICtx>({
    round: 'init'
});

export default GameCtx;