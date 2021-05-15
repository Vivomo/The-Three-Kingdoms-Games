import React from 'react';
import {ROUND} from '../typings';
import {ICard} from '../components/card';

type mapPoint = ICard | null;
export type MapRow = mapPoint[];

export interface ICtx {
    round: ROUND;
    nextRound: () => void;
    draggingId?: number;
    mapDetail: MapRow[];
    setDraggingId: (id: number) => void;
    setMapPointDetail: (row: number, col: number) => void;
}

const noop = () => {};

export const defaultCtx: ICtx = {
    round: 'init',
    draggingId: 0,
    mapDetail: Array(6).fill(0).map(_ => Array(4).fill(null)),
    nextRound: noop,
    setDraggingId: noop,
    setMapPointDetail: noop,
}

const GameCtx = React.createContext<ICtx>(defaultCtx);

export default GameCtx;