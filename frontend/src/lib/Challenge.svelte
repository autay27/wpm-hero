<script lang="ts">
    import Editor from './Editor.svelte'
    import Timer from './Timer.svelte'
    import {handleOutcome} from './ChallengeUtils'
    
    let wordcount = 0
    let totalwritten = 0
    let finished = false
    $: won = outcome(finished, wordcount, totalwritten)

    function outcome(fin: boolean, wc: number, tw: number): boolean {
        const target = 5 //What I really want is to have a Challenge datastructure with the time limit and params to determind win
        //also a Performance(?) data structure with the word count, target words, time spent, whatever else might be relevant
        var haveYouWon = false
        if (fin){
            haveYouWon = handleOutcome(wc, target)
        }

        return haveYouWon
    }


</script>



<Timer bind:finished />

{#if finished && won}
You Win!
{:else if finished}
You Lose!
{/if}
<hr>
<p>Your wordcount is...{wordcount}</p>
<p>Your total words written is...{totalwritten}</p>

<Editor bind:wordcount bind:totalwritten />