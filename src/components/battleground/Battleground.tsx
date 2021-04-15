import React, {useState, useEffect} from 'react';

import BattleMap from '../battle-map';
import City from '../city';
import CardList from '../card-list';
import {CardProps} from '../card';
import './style.scss';
import {ROUND, RoundRecord} from '../../typings';

const Battleground = () => {

    const [myCard, setMyCard] = useState<CardProps[]>([]);
    const [enemyCard, setEnemyCard] = useState<CardProps[]>([]);
    const [round, setRound] = useState<ROUND>('beforeLeftAttack');

    const roundLoop:RoundRecord = {
        beforeLeftAttack: {
            next: 'leftAttacking'
        },
        leftAttacking: {
            next: 'afterLeftAttack'
        },
        afterLeftAttack: {
            next: 'beforeRightAttack'
        },
        beforeRightAttack: {
            next: 'rightAttacking'
        },
        rightAttacking: {
            next: 'afterRightAttack'
        },
        afterRightAttack: {
            next: 'beforeLeftAttack'
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
            case 'afterLeftAttack':
                break;
        }
    }

    const startGame = () => {
        nextRound();
    }

    const init = () => {
        setMyCard(creatRandomCard(4));
        setEnemyCard(creatRandomCard(4));
        setRound('beforeLeftAttack');

        startGame();
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div className="battleground">
            <City/>
            <CardList data={enemyCard}/>
            <BattleMap/>
            <CardList data={myCard}/>
            <City/>
        </div>
    );
};

export default Battleground;