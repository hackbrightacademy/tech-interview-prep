/* Solution for More Evens or Odds?. */

function moreEvensOrOdds(nums) {
  let countEvens = 0;
  let countOdds = 0;

  for (let num of nums) {
    if (num % 2 === 0) {
      countEvens += 1;
    } else {
      countOdds += 1;
    }
  }

  if (countEvens > countOdds) {
    return 'even';
  } else if (countEvens < countOdds) {
    return 'odd';
  } else {
    return 'even and odd';
  }
}