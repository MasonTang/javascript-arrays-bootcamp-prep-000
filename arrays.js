var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return array = [element, ...array]
}

addElementToBeginningOfArray(chocolateBars, "hershey")

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

destructivelyAddElementToBeginningOfArray(chocolateBars, "candy")

