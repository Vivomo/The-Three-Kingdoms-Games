import React, {DragEvent, useContext} from 'react';

import './style.scss';
import GameCtx from '../../context';

interface IProps {
    width?: number;
    height?: number;
}

const BattleMap = ({width = 4, height = 6}: IProps) => {

    const ctx = useContext(GameCtx);

    const onDragOver = (e: DragEvent) => {
        e.nativeEvent.preventDefault();
    }

    const onDrop = (trIndex: number, tdIndex: number) => {
        if (ctx.round === 'beforeBlueAttack' && trIndex > 2) {
            console.log(ctx.draggingId, trIndex, tdIndex);
        } else if (ctx.round === 'beforeRedAttack' && trIndex < 3) {
            console.log(ctx.draggingId, trIndex, tdIndex);
        } else {
            console.log('位置无效');
        }
    }

    return (
        <div className="battle-map">
            <table >
                <tbody>
                {
                    Array(height).fill(0).map((_, trIndex) => {
                        return <tr key={trIndex}>
                            {
                                Array(width).fill(0).map((_, tdIndex) =>
                                    <td
                                        key={tdIndex}
                                        className="battle-cell"
                                        onDragOver={onDragOver}
                                        onDrop={() => {
                                            onDrop(trIndex, tdIndex);
                                        }}
                                    />
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