<script lang="ts">
    import Editor from './Editor.svelte'
    import Timer from './Timer.svelte'
    import {handleOutcome, challengeType } from './ChallengeUtils'
    import type { ChallengeParams, ChallengeAttempt } from './ChallengeUtils';
    
    let chall: ChallengeParams = // Make it a parameter later
        {
            finalWords: 5,
            total: 0,
            type: challengeType.Final,
            time: 5000
        }
    
    let att: ChallengeAttempt = 
        {
            finalWords: 0,
            total: 0,
            timeSpent: 0,
            timeStarted: null,
        }

    let finished = false
    var haveYouWon = false
    $: won = haveYouWon || outcome(finished, att)

    function outcome(fin: boolean, attempt: ChallengeAttempt): boolean {
        if (fin){
            haveYouWon = handleOutcome(chall, attempt)
        } else if (chall.type == challengeType.Final && attempt.finalWords >= chall.finalWords){
            finished = true
            haveYouWon = handleOutcome(chall, attempt)
        }

        return haveYouWon
    }


</script>


<br>
<Timer bind:finished bind:elapsedMs={att.timeSpent}
       bind:timeStarted={att.timeStarted}
       bind:chall />

{#if finished && won}
You Win!
{:else if finished}
You Lose!
{/if}
<hr>
<p>Your wordcount is...{att.finalWords}/{chall.finalWords}</p>
<p>Your total words written is...{att.total}</p>

<Editor bind:wordcount={att.finalWords} bind:totalwritten={att.total} />