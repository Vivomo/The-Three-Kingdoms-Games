import React, {DragEvent} from 'react';

import './style.scss';

interface IProps {
    width?: number;
    height?: number;
}

const BattleMap = ({width = 4, height = 6}: IProps) => {

    const onDragOver = (e: DragEvent) => {
        // console.log(e);
        e.nativeEvent.preventDefault();
    }

    const onDrop = (e: DragEvent) => {
        console.log(e)
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
                                    <td key={tdIndex} className="battle-cell" onDrop={onDrop} onDragOver={onDragOver}/>
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