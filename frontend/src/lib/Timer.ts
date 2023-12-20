export class Timer {
    timerStarted: boolean
    endTime: Date
    timeRemaining: Date

    constructor(){
        this.timerStarted = false
        this.endTime = new Date
        this.timeRemaining = new Date
    }
    
    start() {
        console.assert(!this.timerStarted, "Restarting an already started timer")
        let battleTime = 0.1
        let timeUnitsToMs = 1000 * 60 //minutes

        this.endTime = new Date(new Date().getTime() + (battleTime * timeUnitsToMs))
        this.timerStarted = true
    }

    remaining(): Date | null {
        let elapsed = this.endTime.getTime() - new Date().getTime()
        if (this.timerStarted && elapsed > 0) {
            return new Date(elapsed)
        } else {
            this.timerStarted = false
            return null
            //endBattle(elapsed)
        }
    }

}

