import React, {useState, useEffect, useContext} from 'react';

import BattleMap from '../battle-map';
import City from '../city';
import CardList from '../card-list';
import {ICard} from '../card';
import './style.scss';
import {ROUND} from '../../typings';
import GameCtx, {defaultCtx, MapRow} from '../../context';
import {RoundLoop} from '../../constant';


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

    };

    const execRound = (round: ROUND) => {
        switch (round) {
            case 'init':
                console.log('游戏开始');
                nextRound();
                break;
            case 'blueAttacking':
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