function helper(val1, val2) {
  return val1 > val2;
}

function bubbleSort(array) {
  var sorted = [];
  if (!Array.isArray(array)) {
    throw new Error("unexpected argument");
  }

  if (array.length <= 1) {
    return array;
  } else {
    for (var i = 0; i < array.length - 1; i++) {
      var j = i + 1;
      if (helper(array[i], array[j])) {
        var holder;
        if (array[i] > array[j]) {
          holder = array[i];
          array[i] = array[j];
          array[j] = holder;
        }
      }
    }

    sorted.unshift(array.pop());
    return bubbleSort(array).concat(sorted);
  }
}
