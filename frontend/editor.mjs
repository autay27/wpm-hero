 
import {basicSetup} from "codemirror"
import {EditorView, keymap} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"

const exampleCode = `Write Here`

var cm;

window.onload = function() {
  cm = new EditorView({
  extensions: [
    basicSetup,
    keymap.of([indentWithTab]),
    updateListenerExtension
  ],
  parent: document.getElementById("editor")
  })

  cm.dispatch({
    changes: {from: 0, to: 0, insert: exampleCode}
  })

}

let updateListenerExtension = EditorView.updateListener.of((update) => {
  if (update.docChanged) {
    // Handle the event here
      document.getElementById("charcount").innerHTML = getLength()
  }
});

export function getLength() {
  return cm.state.doc.length
}
