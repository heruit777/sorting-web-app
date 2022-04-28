// variable declaration
let graph = document.querySelector(".graph");

const arr = [5, 5, 4, 8, 2, 6];
document.onload = function () {

}

function bblSort(arr) {

  for (var i = 0; i < arr.length; i++) {

    // Last i elements are already in place  
    for (var j = 0; j < (arr.length - i - 1); j++) {

      // Checking if the item at present iteration 
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {

        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  // Print the sorted array
  return arr;
}

function maxNumber(arr) {
  return arr.reduce((acc, curr) => {
    let max = -Infinity;
    if (max < curr) {
      max = curr;
      acc = max;
    }
    return acc;
  }, 0)
}

function percent(number, total) {
  return number * 100 / total;
}