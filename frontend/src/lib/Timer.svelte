<script lang="ts">

    var started = false
    var endTime = new Date
    export var finished = false

    function remaining(): Date | null {
        let elapsed = endTime.getTime() - new Date().getTime()
        if (started && elapsed > 0) {
            return new Date(elapsed)
        } else {
            started = false
            return null
        }
    }

    var trstring = ""

    function formatAsTime(d: Date): string {
        console.assert(d < new Date(24 * 60 * 60 * 1000), "Can't handle times greater than 1 day yet" + d.getHours())
        return d.toISOString().substring(11, 19);
    }

    // Start & stop the timer

    var interval: number

    function start() {
        
        console.assert(!started, "Restarting an already started timer")
        let battleTime = 0.1
        let timeUnitsToMs = 1000 * 60 //minutes

        endTime = new Date(new Date().getTime() + (battleTime * timeUnitsToMs))
        started = true
        finished = false

        const r = remaining()
        if (r) trstring = formatAsTime(r)
        interval = setInterval(() => {
            const r = remaining()
            if (r) {
                trstring = formatAsTime(r)
            } else {
                trstring = "Challenge Over"
                stop()
            }
        }, 900);
    }

    function stop() {
        clearInterval(interval);
        finished = true;
    }


</script>


{#if started}
Time Remaining: {trstring}
{:else if finished}
Time's Up!
{:else}
<button on:click={start}>Start Writing</button>
{/if}