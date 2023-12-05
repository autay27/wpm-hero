 
var battleStarted = false
var endTime
var targetCharacters = 5

function startBattle() {
    let battleTime = 0.05
    let timeUnitsToMs = 1000 * 60 //minutes

    endTime = new Date().getTime() + (battleTime * timeUnitsToMs)
    battleStarted = true

    updateTimer()
}

function updateTimer() {
    if (battleStarted) {
        let elapsed = endTime - new Date().getTime()
        if (elapsed > 0) {
            document.getElementById("timer").innerHTML = elapsed
        } else {
            endBattle(elapsed)
        }
    }
}

function endBattle(elapsed) {

    battleStarted = false

    let written = codemirror.getLength()

    if (written  > targetCharacters){
        document.getElementById("timer").innerHTML = "You Win!"

        postBattleOutcome(true, targetCharacters, elapsed)
    } else {
        document.getElementById("timer").innerHTML = "You Lose! Better luck next time"

        postBattleOutcome(false, written, elapsed)

    }

}

async function postBattleOutcome(outcome, charsWritten, timeSpent) {

    const newOutcome = {
        outcome: outcome,
        wordsWritten: charsWritten,
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


setInterval(updateTimer, 1000)

// We can use nodejs event emitter to avoid checking every second
