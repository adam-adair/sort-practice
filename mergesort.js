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
  // [1,3,5, 8 , 9] [2, 4, 6, 7]
  const returnArray = []
  let ptr1 = 0
  let ptr2 = 0
  while( ptr1 < arrayOne.length || ptr2 < arrayTwo.length) {
    if(ptr2 > arrayTwo.length || arrayOne[ptr1] < arrayTwo[ptr2]) {
      returnArray.push(arrayOne[ptr1])
      ptr1++
    } else {
      returnArray.push(arrayTwo[ptr2])
      ptr2++
    }
    console.log('ptr1:',ptr1,'ptr2:', ptr2)
  }
  return returnArray
}
