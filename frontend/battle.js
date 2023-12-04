 
var battleStarted = false
var endTime

function startBattle() {
    let battleTime = 0.1
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
            endBattle()
        }
    }
}

function endBattle() {

    battleStarted = false
    document.getElementById("timer").innerHTML = "Finished!"

}

setInterval(updateTimer, 1000)

// We can use nodejs event emitter to avoid checking every second
