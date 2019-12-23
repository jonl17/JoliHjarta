/**
 * Binary search for correct day
 */
export const findDayWithID = (id, allDaysInfo) => {
  let recursiveOne = function(arr, x, start, end) {
    const DEBUG_MODE = false

    if (start > end) return -1

    let mid = Math.floor((start + end) / 2)
    let item = arr[mid].node.frontmatter.dagsetning.replace("12/", "")
    if (DEBUG_MODE) {
      console.log("LOOKING FOR: " + x)
      console.log("COMPARING TO: " + item)
    }

    if (parseInt(item) === parseInt(x)) {
      if (DEBUG_MODE) console.log("FOUND ITEM AT INDEX:" + mid)
      return mid
    }

    if (item > x) return recursiveOne(arr, x, start, mid - 1)
    else return recursiveOne(arr, x, mid + 1, end)
  }

  let result
  const properID = id.replace("dagur", "")
  result = recursiveOne(allDaysInfo, properID, 0, allDaysInfo.length - 1)
  if (result !== -1) return allDaysInfo[result].node.frontmatter
  else return undefined
}

// needs input date on form 12/3, returns 12-3-desember
export const generateSlugFromDate = date => {
  let newDate = date.replace("12/", "")
  newDate += "desember"
  return newDate
}

// countdown to christmass!
export const countdown = () => {
  var christmasEve = new Date(2019, 11, 24, 18).getTime()
  var now = new Date().getTime()
  var distance = christmasEve - now

  if (distance <= 0) {
    return -1 // it's time!
  }

  // do time
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // við viljum eingöngu klst mín sek
  return { hours: days * 24 + 7, minutes: minutes, seconds: seconds }
}

// automatically open windows and make em clickable
export const OpenWindow = (skraut, gluggar) => {
  let d = new Date()
  for (var i = 0; i < skraut.length; i++) {
    if (parseInt(skraut[i].id.replace("desember", "")) <= d.getDate())
      skraut[i].classList.add("opinn-gluggi")
    if (parseInt(gluggar[i].id.replace("dagur", "")) <= d.getDate())
      gluggar[i].classList.add("clickableGluggi")
  }
}
