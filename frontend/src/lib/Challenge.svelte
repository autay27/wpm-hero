<script lang="ts">
    import Editor from './Editor.svelte'
    import Timer from './Timer.svelte'
    import {handleOutcome} from './ChallengeUtils'
    import type { Challenge, ChallengeAttempt } from './ChallengeUtils';
    
    let chall: Challenge = // Make it a parameter later
        {
            wordcount: 5,
            totalwritten: null,
            time: 5000
        }

    let att: ChallengeAttempt = 
        {
            wordcount: 0,
            totalwritten: 0,
            timeSpent: 0
        }

    let finished = false
    $: won = outcome(finished, att)

    function outcome(fin: boolean, att: ChallengeAttempt): boolean {
        var haveYouWon = false
        if (fin){
            haveYouWon = handleOutcome(chall, att)
        }

        return haveYouWon
    }


</script>



<Timer bind:finished bind:elapsed={att.timeSpent} bind:chall />

{#if finished && won}
You Win!
{:else if finished}
You Lose!
{/if}
<hr>
<p>Your wordcount is...{att.wordcount}</p>
<p>Your total words written is...{att.totalwritten}</p>

<Editor bind:wordcount={att.wordcount} bind:totalwritten={att.totalwritten} />