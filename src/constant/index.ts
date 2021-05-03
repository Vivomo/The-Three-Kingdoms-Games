import {RoundRecord} from '../typings';

export const RoundLoop: RoundRecord = {
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

export const MapPoints = Array(6).fill(0).map(_ => Array(4).fill(0));