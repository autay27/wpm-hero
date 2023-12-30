<script lang="ts">
import { onMount } from 'svelte';

import {basicSetup} from "codemirror"
import {EditorView, keymap} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"

import {wordCount, howManyWordsAdded} from "./EditorUtils"


const exampleCode = "Write Here\nand here "

export var wordcount = wordCount(exampleCode);
export var totalwritten = 0;

let updateListenerExtension = EditorView.updateListener.of((viewUpdate) => {
  if (viewUpdate.docChanged) {
    // Handle the event here
      let added;
      [added, wordcount] = howManyWordsAdded(ev.state.doc.toString(), wordcount)
      if (added > 0) totalwritten += added
  }
});

let container: HTMLDivElement;
let ev: EditorView;

onMount(async () => {
  ev = new EditorView({
  extensions: [
    basicSetup,
    keymap.of([indentWithTab]),
    updateListenerExtension
  ],
  parent: container
  })


  ev.dispatch({
    changes: {from: 0, to: 0, insert: exampleCode}
  })
})

</script>

<div bind:this={container}></div>
