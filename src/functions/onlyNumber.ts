export function onlyNumber(
  event: any,
  mask?: {
    length: number
    caracter: string
  },
) {
  const maskControlledFunction = {
    [mask!.length]() {
      event.target.value += mask!.caracter
    },
  }

  const realeseMaskFunction = maskControlledFunction[event.target.value.length]
  if (realeseMaskFunction) {
    realeseMaskFunction()
  }

  const theEvent = event || window.event
  let key = theEvent.keyCode || theEvent.which
  key = String.fromCharCode(key)
  const regex = /^[0-9. ]+$/
  if (!regex.test(key)) {
    theEvent.returnValue = false
    if (theEvent.preventDefault) theEvent.preventDefault()
  }
}
