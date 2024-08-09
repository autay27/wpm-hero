<script lang="ts">
import { onMount } from 'svelte';
import type { Challenge, ChallengeAttempt } from './ChallengeUtils';
import {formatCustomDate} from "./utils";

interface Outcome {
    outcome : boolean,
    challenge : Challenge,
    attempt: ChallengeAttempt
}
   

let outcomes: Outcome[] = []

function printOutcome(o: Outcome): string {
    console.assert(o.challenge.type == 0, "Only doing total wordcount challenges right now - target wc should not be null")
    let words = o.challenge.finalWords
    let time = o.challenge.time
    let outcome = o.outcome ? "Success" : "Failure"
    let dateString = o.attempt.timeStarted !== null ? formatCustomDate(new Date(o.attempt.timeStarted)) : "Error: No date on record"

    return `${dateString}: Challenge: Write ${words} words in ${time/1000} seconds. Result: ${outcome}`
}

onMount(async () =>{

    try {
        outcomes = await fetch("http://localhost:8080/alloutcomes",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(res => res.json())
        .then(res => {return res as Outcome[]})
        
        console.log("success: " + outcomes.length + " entries")
        console.log(outcomes)

    } catch (error) {
        console.log("failure: " + error)
    }

})

</script>

<h1>Challenges completed so far...</h1>
<ul>
    {#each outcomes as o}
    <li>{printOutcome(o)}</li>
    {/each}
</ul>