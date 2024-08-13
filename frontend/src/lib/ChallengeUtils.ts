export type Millis = number

export enum challengeType {
    Final, Total
}

export type ChallengeParams = {
    finalWords: number
    total: number
    type: challengeType
    time: Millis
}

export type ChallengeAttempt = {
    finalWords: number
    total: number
    timeSpent: Millis
    timeStarted: Date | null
}

export function handleOutcome(challenge: ChallengeParams, attempt: ChallengeAttempt) {

    console.assert(challenge.type == challengeType.Final, "Only doing total wordcount challenges right now - target wc should not be null")

    if (attempt.finalWords < challenge.finalWords){
        postBattleOutcome(false, challenge, attempt)
        return false
    } else {
        postBattleOutcome(true, challenge, attempt)
        return true
    }
    
}

async function postBattleOutcome(outcome: boolean, challenge: ChallengeParams, attempt: ChallengeAttempt) {

    const newOutcome = {
        outcome: outcome,
        challenge: challenge,
        attempt: attempt
    }

    console.log(newOutcome)

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
