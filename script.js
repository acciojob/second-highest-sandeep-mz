
function secondHighest(arr) {
    if (arr.length < 2 || new Set(arr).size === 1) {
      return -Infinity;
    }
  
    let firstMax = -Infinity;
    let secondMax = -Infinity;
  
    for (let num = 0; num < arr.length; num++) {
      if (arr[num] > firstMax) {
        secondMax = firstMax;
        firstMax = arr[num];
      } else if (arr[num] < firstMax && arr[num] > secondMax) {
        secondMax = arr[num];
      }
    }
    return secondMax;
  }
  