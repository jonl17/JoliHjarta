/**
 * Binary search for correct day
 */
export const findDayWithID = (id, allDaysInfo) => {
  let recursiveOne = function(arr, x, start, end) {
    const DEBUG_MODE = true

    if (start > end) return -1

    let mid = Math.floor((start + end) / 2)
    if (DEBUG_MODE) {
      console.log("LOOKING FOR: " + x)
      console.log(
        "COMPARING TO: " +
          arr[mid].node.frontmatter.dagsetning
            .replace("12/", "")
            .replace("/19", "")
      )
    }

    if (parseInt(arr[mid].node.frontmatter.dagsetning) === parseInt(x)) {
      if (DEBUG_MODE) console.log("FOUND ITEM AT INDEX:" + mid)
      return mid
    }

    if (arr[mid].node.frontmatter.dagsetning > x)
      return recursiveOne(arr, x, start, mid - 1)
    else return recursiveOne(arr, x, mid + 1, end)
  }

  let result
  const properID = id.replace("dagur", "")
  result = recursiveOne(allDaysInfo, properID, 0, allDaysInfo.length - 1)
  if (result !== -1) return allDaysInfo[result].node.frontmatter
  else return undefined
}
