function moreEvensOrOdds(arr) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }

  if (evenCount > oddCount) {
    return 'even';
  } else if (oddCount > evenCount) {
    return 'odd';
  } else {
    return 'even and odd'
  }
}