<script lang="ts">

import type { Millis, ChallengeParams } from './ChallengeUtils';

    export let chall: ChallengeParams

    var started = false
    export let finished = false
    var endTimeMs: Millis
    export let elapsedMs: Millis
    export let timeStarted: Date | null = null
    function updateElapsed() {
        elapsedMs = endTimeMs - new Date().getTime()
    }

    function remaining(): Date | null {
        updateElapsed()
        if (started && elapsedMs > 0) {
            return new Date(elapsedMs)
        } else {
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
        let timeUnitsToMs = 1000 * 60 //minutes

        timeStarted = new Date()
        endTimeMs = timeStarted.getTime() + chall.time
        started = true
        finished = false

        const r = remaining()
        if (r) trstring = formatAsTime(r)
        interval = setInterval(() => {
            const r = remaining()
            if (r && !finished) {
                trstring = formatAsTime(r)
            } else {
                trstring = "Challenge Over"
                stop()
            }
        }, 900);
    }

    function stop() {
        clearInterval(interval);
        elapsedMs = chall.time;
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