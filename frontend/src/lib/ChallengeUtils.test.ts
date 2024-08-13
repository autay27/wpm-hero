import {handleOutcome, challengeType } from './ChallengeUtils'
import type { ChallengeParams, ChallengeAttempt } from './ChallengeUtils';
import Challenge from './Challenge.svelte'

import { describe, it, expect, test } from 'vitest'
import * as fc from 'fast-check'

describe("ChallengeParams", () => {
    it("should pass or fail based on the final wordcount", () => {
        fc.assert(
            fc.property(fc.integer({ min: 0 }),
                fc.integer({ min: 0 }),
                (target: number, final: number) => {
                    let chall: ChallengeParams =
                        {
                            finalWords: target,
                            total: 0,
                            type: challengeType.Final,
                            time: 5000
                        }

                    let att: ChallengeAttempt =
                        {
                            finalWords: final,
                            total: 0,
                            timeSpent: 0,
                            timeStarted: new Date()
                        }

                    return (final >= target) == handleOutcome(chall, att)
                }),
            { verbose: 1 },
        )
    })
})

test('UNIT TEST: fail test when not enough final', () => {

    let chall: ChallengeParams =
    {
        finalWords: 5,
        total: 0,
        type: challengeType.Final,
        time: 5000
    }

    let att: ChallengeAttempt = 
    {
        finalWords: 0,
        total: 0,
        timeSpent: 0,
        timeStarted: new Date()
    }

    expect(handleOutcome(chall, att))

})

test('UNIT TEST: pass test when enough final', () => {

    let chall: ChallengeParams =
    {
        finalWords: 5,
        total: 0,
        type: challengeType.Final,
        time: 5000
    }

    let att: ChallengeAttempt = 
    {
        finalWords: 5,
        total: 0,
        timeSpent: 0,
        timeStarted: new Date()
    }

    expect(handleOutcome(chall, att))

})