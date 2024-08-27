<script lang="ts">
    import Editor from './Editor.svelte'
    import Timer from './Timer.svelte'
    import {handleOutcome, challengeType, type Challenge, menuOptions} from './ChallengeUtils'
    import type { ChallengeParams, ChallengeAttempt } from './ChallengeUtils';
    import ChallengeMenu from "./ChallengeMenu.svelte";
    
    let selectedChallenge: Challenge = menuOptions[0]
    
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
            haveYouWon = handleOutcome(selectedChallenge.params, attempt)
        } else if (selectedChallenge.params.type == challengeType.Final && attempt.finalWords >= selectedChallenge.params.finalWords){
            finished = true
            haveYouWon = handleOutcome(selectedChallenge.params, attempt)
        }

        return haveYouWon
    }


</script>


<br>

{#if !att.timeStarted}
<ChallengeMenu bind:selectedChallenge></ChallengeMenu>
{/if}

<Timer bind:finished bind:elapsedMs={att.timeSpent}
       bind:timeStarted={att.timeStarted}
       bind:chall={selectedChallenge.params} />

{#if finished && won}
You Win!
{:else if finished}
You Lose!
{/if}
<hr>
<div style="display: flex;"><p>Your wordcount is...</p><p id="final">{att.finalWords}</p><p>/</p><p id="target">{selectedChallenge.params.finalWords}</p></div>
<p>Your total words written is...{att.total}</p>

<Editor bind:wordcount={att.finalWords} bind:totalwritten={att.total} />