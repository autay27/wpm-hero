
export function handleOutcome(wc: number, target: number) {
    if (wc < target){
        postBattleOutcome(false, wc, 0)
        return false
    } else {
        postBattleOutcome(true, wc, 0)
        return true
    }
    
}

async function postBattleOutcome(outcome: boolean, wc: number, timeSpent: number) {

    const newOutcome = {
        outcome: outcome,
        wordsWritten: wc,
        timeSpent: timeSpent
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
