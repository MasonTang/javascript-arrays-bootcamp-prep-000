var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return array = [element, ...array]
}

addElementToBeginningOfArray(chocolateBars, "hershey")

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

destructivelyAddElementToBeginningOfArray(chocolateBars, "candy")

function addElementToEndOfArray (array, element){
  return array = [...array, element]
}

addElementToEndOfArray(array, "bars")

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

destructivelyAddElementToEndOfArray(chocolateBars, "payDay")

