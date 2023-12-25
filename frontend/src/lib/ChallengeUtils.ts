export type Millis = number

export enum challengeType {
    Final, Total
}

export type Challenge = {
    final: number
    total: number
    type: challengeType
    time: Millis
}

export type ChallengeAttempt = {
    final: number
    total: number
    timeSpent: Millis
}

export function handleOutcome(challenge: Challenge, attempt: ChallengeAttempt) {

    console.assert(challenge.type == challengeType.Final, "Only doing total wordcount challenges right now - target wc should not be null")

    if (attempt.final < challenge.final){
        postBattleOutcome(false, challenge, attempt)
        return false
    } else {
        postBattleOutcome(true, challenge, attempt)
        return true
    }
    
}

async function postBattleOutcome(outcome: boolean, challenge: Challenge, attempt: ChallengeAttempt) {

    const newOutcome = {
        outcome: outcome,
        challFinal: challenge.final,
        challTotal: challenge.total,
        challType: challenge.type,
        challTime: challenge.time,
        attFinal: attempt.final,
        attTotal: attempt.total,
        attTimeSpent: attempt.timeSpent
    }

    try {
        const response = await fetch("http://localhost:8080/outcome",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newOutcome)
            }
        )

        const result = await response.json()
        console.log("success: " + result)
    } catch (error) {
        console.log("failure: " + error)
    }
}
