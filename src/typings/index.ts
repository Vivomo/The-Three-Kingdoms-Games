export type ROUND = 'blueAttacking' | 'afterBlueAttack' | 'beforeRedAttack' | 'redAttacking' | 'afterRedAttack' | 'beforeBlueAttack' | 'init';

interface RoundValue {
    next: ROUND;
}

export type RoundRecord = Record<ROUND, RoundValue>
