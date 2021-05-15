import React, {useState, useEffect, useContext} from 'react';

import BattleMap from '../battle-map';
import City from '../city';
import CardList from '../card-list';
import {ICard} from '../card';
import './style.scss';
import {ROUND} from '../../typings';
import GameCtx, {defaultCtx, MapRow} from '../../context';
import {RoundLoop, RedAttachList, BlueAttachList} from '../../constant';


const Battleground = () => {

    const [blueCard, setBlueCard] = useState<ICard[]>([]);
    const [redCard, setRedCard] = useState<ICard[]>([]);
    const [draggingId, setDraggingId] = useState(0);
    const [round, setRound] = useState<ROUND>('init');
    const [mapDetail, setMapDetail] = useState<MapRow[]>(defaultCtx.mapDetail)

    const setMapPointDetail = (row: number, col: number) => {
        const list = round === 'beforeBlueAttack' ? blueCard : redCard;
        const index = list.findIndex(item => item.id === draggingId);
        const card = list[index] || null;
        list.splice(index, 1);
        mapDetail[row][col] = card;
        if (round === 'beforeBlueAttack') {
            setBlueCard([...list]);
        } else {
            setRedCard([...list]);
        }
        setMapDetail([...mapDetail])
    }

    const creatRandomCard = (num: number): ICard[] => {
        return Array(num).fill(0).map(() => {
            return {
                attack: Math.random() * 10 | 0,
                HP: Math.random() * 10 | 0,
                id: Math.random()
                // name: ''
            }
        });
    }

    const nextRound = () => {
        setRound(RoundLoop[round].next)
    }

    const blueAttacking = () => {
        const list = BlueAttachList.flat(1);

        const attack = () => {
            const coordinate = list.shift();
            if (coordinate) {
                const {col, row} = coordinate;
                const item = mapDetail[row][col];
                if (item) {
                    console.log(item, 'attach')
                } else {
                    attack();
                }
            } else {
                nextRound();
            }
        };

        attack();
    };

    const execRound = (round: ROUND) => {
        console.log('回合', round);
        switch (round) {
            case 'init':
                console.log('游戏开始');
                nextRound();
                break;
            case 'blueAttacking':
                console.log(' 蓝色方开始攻击');
                blueAttacking();
                break;
            default:
        }
    };


    const startGame = () => {
        execRound(round);
    }

    const init = () => {
        setBlueCard(creatRandomCard(4));
        setRedCard(creatRandomCard(4));
        startGame();
    };

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        execRound(round);
    }, [round])


    return (
        <div className="battleground">
            <GameCtx.Provider value={{
                draggingId,
                setDraggingId,
                round,
                mapDetail,
                nextRound,
                setMapPointDetail
            }}>
                <City/>
                <CardList data={redCard} side="red"/>
                <BattleMap/>
                <CardList data={blueCard} side="blue"/>
                <City/>
            </GameCtx.Provider>
        </div>
    );
};

export default Battleground;