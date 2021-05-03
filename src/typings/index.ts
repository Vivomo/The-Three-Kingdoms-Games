export type ROUND = 'blueAttacking' | 'afterBlueAttack' | 'beforeRedAttack' | 'redAttacking' | 'afterRedAttack' | 'beforeBlueAttack';

interface RoundValue {
    next: ROUND;
}

export type RoundRecord = Record<ROUND, RoundValue>

export interface RoundLoop {

}