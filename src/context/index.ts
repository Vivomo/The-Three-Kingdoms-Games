import React from 'react';
import {ROUND} from '../typings';

export interface ICtx {
    round: ROUND;
    draggingId?: number;
    setDraggingId: (id: number) => void;
}

const GameCtx = React.createContext<ICtx>({
    round: 'init',
    setDraggingId: () => {},
});

export default GameCtx;