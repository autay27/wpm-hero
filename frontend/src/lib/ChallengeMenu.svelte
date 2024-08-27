<script lang="ts">
    import {type Challenge, challengeType, menuOptions} from "./ChallengeUtils";
    import ChallengeComponent from "./ChallengeComponent.svelte";

    let localMenuOptions = [...menuOptions]

    export let selectedChallenge: Challenge = localMenuOptions[0]

</script>

Choose your challenge

<div style="display: flex; flex-direction: column;">
{#each localMenuOptions as menuOption}
    <div>
        <ChallengeComponent bind:chall={menuOption}/>
        <button
            on:click={() => selectedChallenge = menuOption}
    >Select</button>
    </div>
{/each}
</div>