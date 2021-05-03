import React, {useState, useEffect, useContext} from 'react';

import BattleMap from '../battle-map';
import City from '../city';
import CardList from '../card-list';
import {CardProps} from '../card';
import './style.scss';
import {ROUND, RoundRecord} from '../../typings';
import GameCtx, {ICtx} from '../../context';


const Battleground = () => {

    const [myCard, setMyCard] = useState<CardProps[]>([]);
    const [enemyCard, setEnemyCard] = useState<CardProps[]>([]);

    const [ctxData, setCtxData] = useState<ICtx>({
        round: 'init',
        draggingId: 0,
        setDraggingId: (id) => {
            setCtxData({
                ...ctxData,
                draggingId: id,
            })
        }
    })

    const roundLoop: RoundRecord = {
        init: {
            next: 'beforeBlueAttack'
        },
        beforeBlueAttack: {
            next: 'blueAttacking'
        },
        blueAttacking: {
            next: 'afterBlueAttack'
        },
        afterBlueAttack: {
            next: 'beforeRedAttack'
        },
        beforeRedAttack: {
            next: 'redAttacking'
        },
        redAttacking: {
            next: 'afterRedAttack'
        },
        afterRedAttack: {
            next: 'beforeBlueAttack'
        }
    }

    const creatRandomCard = (num: number): CardProps[] => {
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
        let nextRound = roundLoop[ctxData.round].next;
        setCtxData({
            ...ctxData,
            round: nextRound
        })
    }

    const execRound = (round: ROUND) => {
        switch (round) {
            case 'init':
                console.log('游戏开始');
                nextRound();
            break;
            default:
        }
    };


    const startGame = () => {
        execRound(ctxData.round);
    }

    const init = () => {
        setMyCard(creatRandomCard(4));
        setEnemyCard(creatRandomCard(4));
        startGame();
    };

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        execRound(ctxData.round);
    }, [ctxData.round])

    return (
        <div className="battleground">
            <GameCtx.Provider value={ctxData}>
                <City/>
                <CardList data={enemyCard} side="red"/>
                <BattleMap/>
                <CardList data={myCard} side="blue"/>
                <City/>
            </GameCtx.Provider>
        </div>
    );
};

export default Battleground;