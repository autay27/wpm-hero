<script lang="ts">

    var timerStarted = false
    var endTime = new Date

    function remaining(): Date | null {
        let elapsed = endTime.getTime() - new Date().getTime()
        if (timerStarted && elapsed > 0) {
            return new Date(elapsed)
        } else {
            timerStarted = false
            return null
            //endBattle(elapsed)
        }
    }

    var trstring = ""

    function formatAsTime(d: Date): string {
        console.assert(d < new Date(24 * 60 * 60 * 1000), "Can't handle times greater than 1 day yet" + d.getHours())
        return d.toISOString().substring(11, 19);
    }

    // Start & stop the timer

    var interval: number

    function startTimer() {
        
        console.assert(!timerStarted, "Restarting an already started timer")
        let battleTime = 0.1
        let timeUnitsToMs = 1000 * 60 //minutes

        endTime = new Date(new Date().getTime() + (battleTime * timeUnitsToMs))
        timerStarted = true

        const r = remaining()
        if (r) trstring = formatAsTime(r)
        interval = setInterval(() => {
            const r = remaining()
            if (r) {
                trstring = formatAsTime(r)
            } else {
                trstring = "Challenge Over"
                stopTimer()
            }
        }, 900);
    }

    function stopTimer() {
        clearInterval(interval);
    }


</script>


{#if timerStarted}
Time Remaining: {trstring}
{:else}
<button on:click={startTimer}>Start Writing</button>
{/if}