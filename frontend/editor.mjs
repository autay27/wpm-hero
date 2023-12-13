 
import {basicSetup} from "codemirror"
import {EditorView, keymap} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"

const exampleCode = "Write Here\nand here "

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

function wordCount(text) {
  return text.split(/\s+/).filter(word => word !== '').length
}

var count = wordCount(exampleCode)
var totalwords = 0

function howManyWordsAdded(viewUpdate) {
  let newCount = wordCount(cm.state.doc.toString())
  let difference = newCount - count
  count = newCount

  return difference
}

let updateListenerExtension = EditorView.updateListener.of((viewUpdate) => {
  if (viewUpdate.docChanged) {
    // Handle the event here

      let lastevent = viewUpdate.changes.toJSON()
      let added = howManyWordsAdded(viewUpdate)
      if (added > 0) totalwords += added


      document.getElementById("charcount").innerHTML =
      `I think you added how many words: ${added}
      current wordcount: ${count}
      total words typed: ${totalwords}
      last event: ${lastevent}`

  }
});

export function getLength() {
  return cm.state.doc.length
}
