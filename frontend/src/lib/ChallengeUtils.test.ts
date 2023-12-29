import {handleOutcome, challengeType } from './ChallengeUtils'
import type { Challenge, ChallengeAttempt } from './ChallengeUtils';

import { expect, test } from 'vitest'

test('fail test when not enough final', () => {

    let chall: Challenge = 
    {
        final: 5,
        total: 0,
        type: challengeType.Final,
        time: 5000
    }

    let att: ChallengeAttempt = 
    {
        final: 0,
        total: 0,
        timeSpent: 0
    }

    expect(handleOutcome(chall, att))

})

test('pass test when enough final', () => {

    let chall: Challenge = 
    {
        final: 5,
        total: 0,
        type: challengeType.Final,
        time: 5000
    }

    let att: ChallengeAttempt = 
    {
        final: 5,
        total: 0,
        timeSpent: 0
    }

    expect(handleOutcome(chall, att))

})