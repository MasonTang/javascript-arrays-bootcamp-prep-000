var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return array = [element, ...array]
}

addElementToBeginningOfArray(chocolateBars, "hershey")

function destructivelyAddElementToBeginningOfArray(array, element){
  [element, ...array]
}

destructivelyAddElementToBeginningOfArray(array, "butterfinger")
