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
    const [round, setRound] = useState<ROUND>('beforeBlueAttack');

    // const ctx = useContext(GameCtx);
    const [ctxData, setCtxData] = useState<ICtx>({
        round: 'init'
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
        switch (round) {
            case 'afterBlueAttack':
                break;
        }
    }

    const startGame = () => {
        nextRound();
    }

    const init = () => {
        setMyCard(creatRandomCard(4));
        setEnemyCard(creatRandomCard(4));
        setRound('beforeBlueAttack');

        startGame();
    };

    useEffect(() => {
        init();
    }, []);

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