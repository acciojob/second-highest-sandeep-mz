function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity; // Return to exit the function
    }

    let firstMax = -Infinity;
    let secondMax = -Infinity;

    for (let num = 0; num < arr.length; num++) {
        if (arr[num] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[num];
        } else if (arr[num] > secondMax) {
            secondMax = arr[num];
        }
    }

    if (secondMax === -Infinity) {
        return -Infinity;
    } else {
        return secondMax;
    }
}
// secondHighest(arr);
