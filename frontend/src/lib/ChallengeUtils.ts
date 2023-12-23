export type Millis = number

export type Challenge = {
    wordcount: null | number
    totalwritten: null | number
    time: Millis
}

export type ChallengeAttempt = {
    wordcount: number
    totalwritten: number
    timeSpent: Millis
}

export function handleOutcome(challenge: Challenge, attempt: ChallengeAttempt) {

    console.assert(challenge.wordcount, "Only doing total wordcount challenges right now - target wc should not be null")

    if (challenge.wordcount != null && attempt.wordcount < challenge.wordcount){
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
        challenge: challenge,
        attempt: attempt
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
