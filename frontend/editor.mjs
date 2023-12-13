 
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

function wordCount(textArray) {
  let wordCount = 0;

  textArray.forEach(line => {
    // Split each line into words using whitespace as delimiter
    const words = line.trim().split(/\s+/).filter(word => word !== '');
    wordCount += words.length;
  });

  return wordCount;
}

function containsBlanks(textArray){
  return textArray.length > 1 || textArray[0].includes(" ")
}

function howManyWordsAdded(viewUpdate) {
  //TODO: Need to handle backspace

  // Let "Blank" refer to a space, newline, start of line, or end of line.

  let startPos = viewUpdate.changedRanges[0].fromB
  let startLine = viewUpdate.state.doc.lineAt(startPos)
  let contextLeftBlank = (startLine.from == startPos) || (viewUpdate.state.doc.sliceString(startPos-1, startPos) == " ")

  let endPos = viewUpdate.changedRanges[0].toB
  let endLine = viewUpdate.state.doc.lineAt(endPos)
  let contextRightBlank = (endLine.to == endPos) || ((viewUpdate.state.doc.sliceString(endPos, endPos+1) == " "))

  let text = viewUpdate.changes.inserted[Math.min(startPos, 1)].text
  // If the text includes newlines, it gets split into multiple elements in text, which is an array

  let addedLeftBlank = (text[0][0] == ' ') || (text[0] == "")
  let addedRightBlank = (text[text.length-1][text[text.length-1].length-1] == ' ') || (text[text.length-1] == "")



  var internalCount = wordCount(text)

  if (!contextLeftBlank && !contextRightBlank){  // Inserted a white/space/newline between two characters
    if (containsBlanks(text)){
      internalCount += 1
    }

  }
  if (!contextLeftBlank && !addedLeftBlank){
    internalCount -= 1
  }

  if (!addedRightBlank && !contextRightBlank){
    internalCount -= 1
  }


    console.log(`${contextLeftBlank}, ${addedLeftBlank}, ${addedRightBlank}, ${contextRightBlank} -> ${Math.max(internalCount, 0)}`)
  //Handle the case of a sandwiched spaceless addition with max
  return Math.max(internalCount, 0)


}

let updateListenerExtension = EditorView.updateListener.of((viewUpdate) => {
  if (viewUpdate.docChanged) {
    // Handle the event here

      let lastevent = viewUpdate.changes.toJSON()
      let wordcount = "unknown"
      let totalwords = "unknown" //Start at 0 and increment

      document.getElementById("charcount").innerHTML =
      `current wordcount: ${wordcount}
      total words typed: ${totalwords}
      last event: ${lastevent}
      I think you added how many words: ${howManyWordsAdded(viewUpdate)}`

  }
});

export function getLength() {
  return cm.state.doc.length
}
