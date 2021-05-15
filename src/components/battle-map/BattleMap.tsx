import React, {DragEvent, useContext} from 'react';

import './style.scss';
import GameCtx from '../../context';
import Card from '../card';
import {MapPoints} from '../../constant';

interface IProps {
    width?: number;
    height?: number;
}

const BattleMap = ({width = 4, height = 6}: IProps) => {

    const ctx = useContext(GameCtx);

    const onDragOver = (e: DragEvent) => {
        e.nativeEvent.preventDefault();
    }

    const onDrop = (row: number, col: number) => {
        if (ctx.mapDetail[row][col] !== null) {
            console.log('位置无效');
        }
        if (ctx.round === 'beforeBlueAttack' && row > 2) {
            ctx.setMapPointDetail(row, col)
            console.log(ctx.draggingId, row, col);
            ctx.nextRound();
        } else if (ctx.round === 'beforeRedAttack' && row < 3) {
            console.log(ctx.draggingId, row, col);
            ctx.setMapPointDetail(row, col);
            ctx.nextRound();
        } else {
            console.log('位置无效');
        }
    }

    return (
        <div className="battle-map">
            <table >
                <tbody>
                {
                    MapPoints.map((row, trIndex) => {
                        return <tr key={trIndex}>
                            {
                                row.map((_, tdIndex) =>
                                    <td
                                        key={tdIndex}
                                        className="battle-cell"
                                        onDragOver={onDragOver}
                                        onDrop={() => {
                                            onDrop(trIndex, tdIndex);
                                        }}
                                    >
                                        {
                                            ctx.mapDetail[trIndex][tdIndex] &&
                                                // @ts-ignore
                                                <Card {...ctx.mapDetail[trIndex][tdIndex]}/>
                                        }
                                    </td>
                                )
                            }
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default BattleMap;