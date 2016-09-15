function split(wholeArray) {

  var midpoint = wholeArray.length / 2;
  var firstHalf = wholeArray.slice(0, midpoint);
  var secondHalf = wholeArray.slice(midpoint);
  return [firstHalf, secondHalf];
}


function mergeSort(array) {

  var splitArray = split(array);
  var left = splitArray[0];
  var right = splitArray[1];
  var result = [];

  while (left || right) {
    left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
  }

  if (array.length <= 1) {
    return array;
  } else {
    mergeSort(array);
  }

  return result;
}
