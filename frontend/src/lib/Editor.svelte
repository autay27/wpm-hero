<script lang="ts">

import {basicSetup} from "codemirror"
import {EditorView, keymap} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"

const exampleCode = "Write Here\nand here "


let updateListenerExtension = EditorView.updateListener.of((viewUpdate) => {
  if (viewUpdate.docChanged) {
    // Handle the event here

  }
});

let container: HTMLDivElement;
var ev;

window.onload = function() {
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


}

</script>

<div bind:this={container}></div>
