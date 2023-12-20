<script lang="ts">
    import Editor from './Editor.svelte'
    import { Timer } from './Timer'

    let timer = new Timer

    let wordcount = 0
    let totalwritten = 0

    var trstring = ""
    var targetWords = 5

    function formatAsTime(d: Date): string {
        console.assert(d < new Date(24 * 60 * 60 * 1000), "Can't handle times greater than 1 day yet" + d.getHours())
        return d.toISOString().substring(11, 19);
    }

    // Start & stop the timer

    var interval: number

    function startTimer() {
        timer.start()
        const r = timer.remaining()
        if (r) trstring = formatAsTime(r)
        interval = setInterval(() => {
            const r = timer.remaining()
            if (r) {
                trstring = formatAsTime(r)
            } else {
                trstring = "Challenge Over"
                stopTimer()
            }
        }, 900);
    }

    // Stop the interval when the component is destroyed
    function stopTimer() {
        clearInterval(interval);
    }

</script>

<button id="startbutton" on:click={startTimer}>Start Writing</button>

<div>{trstring}</div>
<p>Your wordcount is...{wordcount}</p>
<p>Your total words written is...{totalwritten}</p>

<Editor bind:wordcount={wordcount} bind:totalwritten={totalwritten}/>