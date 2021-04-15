export type ROUND = 'leftAttacking' | 'afterLeftAttack' | 'beforeRightAttack' | 'rightAttacking' | 'afterRightAttack' | 'beforeLeftAttack';

interface RoundValue {
    next: ROUND;
}

export type RoundRecord = Record<ROUND, RoundValue>

export interface RoundLoop {

}