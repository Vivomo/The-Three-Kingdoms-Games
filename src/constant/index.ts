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

export const RedAttachList = Array(4).fill(0).map((_, xIndex) => {
    return Array(3).fill(0).map((_, yIndex) => {
        return {
            col: xIndex,
            row: 2 - yIndex
        }
    })
});

export const BlueAttachList = Array(4).fill(0).map((_, xIndex) => {
    return Array(3).fill(0).map((_, yIndex) => {
        return {
            col: xIndex,
            row: 3 + yIndex
        }
    })
});