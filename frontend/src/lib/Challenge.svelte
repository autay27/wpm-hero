<script lang="ts">
    import Editor from './Editor.svelte'

    let wordcount = 0
    let totalwritten = 0
</script>

<p>Your wordcount is...{wordcount}</p>
<p>Your total words written is...{totalwritten}</p>

<Editor bind:wordcount={wordcount} bind:totalwritten={totalwritten}/>