<script lang="ts">
    import type {Challenge} from "./ChallengeUtils";
    import {millisToTime} from "./utils";

    export let chall: Challenge

</script>

{chall.name}:
Words: {chall.params.finalWords}
Time: {millisToTime(chall.params.time)}