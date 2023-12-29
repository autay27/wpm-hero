<script lang="ts">
    import Editor from './Editor.svelte'
    import Timer from './Timer.svelte'
    import {handleOutcome, challengeType } from './ChallengeUtils'
    import type { Challenge, ChallengeAttempt } from './ChallengeUtils';
    
    let chall: Challenge = // Make it a parameter later
        {
            final: 5,
            total: 0,
            type: challengeType.Final,
            time: 5000
        }
    
    let att: ChallengeAttempt = 
        {
            final: 0,
            total: 0,
            timeSpent: 0
        }

    let finished = false
    $: won = outcome(finished, att)

    function outcome(fin: boolean, attempt: ChallengeAttempt): boolean {
        var haveYouWon = false
        if (fin){
            haveYouWon = handleOutcome(chall, attempt)
        } else if (chall.type == challengeType.Final && attempt.final >= chall.final){
            finished = true
            haveYouWon = handleOutcome(chall, attempt)
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
<p>Your wordcount is...{att.final}</p>
<p>Your total words written is...{att.total}</p>

<Editor bind:wordcount={att.final} bind:totalwritten={att.total} />