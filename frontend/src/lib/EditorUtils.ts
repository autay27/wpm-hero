
export function wordCount(text: string): number {
    return text.split(/\s+/).filter(word => word !== '').length
  }

export function howManyWordsAdded(newDoc: string, oldCount: number): [number, number] {
    let newCount = wordCount(newDoc.toString())
    let difference = newCount - oldCount

    return [difference, newCount]
  }