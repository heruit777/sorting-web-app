// variable declaration
let graph = document.querySelector(".graph");

const arr = [5,5,4,2,3,1];
let bblsortArr = [];

window.addEventListener("DOMContentLoaded", (e) => {
  bblSort(arr.concat());
  displayBars(arr.concat()); // notSorted
  // console.log(bblsortArr);
  // bblsortArr = checkIfDouble(bblsortArr);
  // console.log(bblsortArr);
  for (let i = 1; i <= bblsortArr.length; i++) {
    setTimeout(() => {
      // start sorting the bars
      graph.innerHTML = ``;
      displayBars(bblsortArr[i - 1]);
    }, 1000 * i);
  }
})

function displayBars(array) {
  let maxOfBar = maxNumberInArr(array);
  array.forEach((val, index) => {
    graph.innerHTML += `<div class="bar" id=${index}bar>`;
    document.getElementById(`${index}bar`).style.height = `${percent(val, maxOfBar)}%`;
    document.getElementById(`${index}bar`).style.width = `${100 / array.length}%`;
  })
}

function bblSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < (array.length - i - 1); j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        bblsortArr.push(array.concat());
      }
    }
  }
}

function maxNumberInArr(arr) {
  let max = -Infinity;
  return arr.reduce((acc, curr) => {
    if (curr >= max) {
      max = curr;
      acc = max;
    }
    return acc;
  }, 0)
}

function percent(number, total) {
  return number * 100 / total;
}

function checkIfDouble(arr2d) {
  const res = [];
  for(let i = 0;i < arr2d.length; i++){
    let oneArr = arr2d[i];
    if(!check_If_arr_present(res, oneArr)){
      res.push(oneArr);
    }
  }
  return res;
}

function check_If_arr_present(search2dArr, queryArr){
  for(let i = 0;i < search2dArr.length;i++){
    if(search2dArr[i].join(",") === queryArr.join(",")){
      return true;
    }
  }
  return false;
}