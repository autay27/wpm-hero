<script lang="ts">
    import Editor from './Editor.svelte'
    import { Timer } from './Timer'

    let timer = new Timer

    let wordcount = 0
    let totalwritten = 0
    
    var trstring = ""

    function formatAsTime(d: Date): string {
        console.assert(d < new Date(24 * 60 * 60 * 1000), "Can't handle times greater than 1 day yet" + d.getHours())
        return d.toISOString().substring(11, 19);
    }

    // Start & stop the timer

    var active = false
    var interval: number

    function startTimer() {
        timer.start()
        const r = timer.remaining()
        active = true
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

    function stopTimer() {
        active = false
        clearInterval(interval);
    }


</script>

{#if active}
    Time Remaining: {trstring}
{:else}
    <button on:click={startTimer}>Start Writing</button>
{/if}

<p>Your wordcount is...{wordcount}</p>
<p>Your total words written is...{totalwritten}</p>

<Editor bind:wordcount={wordcount} bind:totalwritten={totalwritten}/>