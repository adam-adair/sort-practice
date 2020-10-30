const bubbleSort = (arr) => {
  if (arr.length <= 1) return arr;

  let didSwap = true;
  while (didSwap) {
    didSwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        didSwap = true;
      }
    }
  }
  return arr;
}
