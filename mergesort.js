function split(wholeArray) {
  const firstHalf = []
  const secondHalf = []
  for(let i = 0; i < wholeArray.length; i++) {
    if(i < Math.floor(wholeArray.length/2)) firstHalf.push(wholeArray[i])
    else secondHalf.push(wholeArray[i])
  }
  return [firstHalf, secondHalf];
}

function merge(arrayOne, arrayTwo) {
  const returnArray = []
  let ptr1 = 0
  let ptr2 = 0
  while( ptr1 < arrayOne.length || ptr2 < arrayTwo.length) {
    if(ptr2 === arrayTwo.length || arrayOne[ptr1] <= arrayTwo[ptr2]) {
      returnArray.push(arrayOne[ptr1])
      ptr1++
    }
    else if(ptr1 === arrayOne.length || arrayOne[ptr1] > arrayTwo[ptr2]) {
      returnArray.push(arrayTwo[ptr2])
      ptr2++
    }
  }
  return returnArray
}

function mergeSort(array) {
  if(array.length === 1 ) return array
  let [left, right] = split(array)
  left = mergeSort(left)
  right = mergeSort(right)
  return merge(left, right)
}
