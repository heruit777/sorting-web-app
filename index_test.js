let bblsortArr = [];
let arr = [5,5,4,3,2,1]; // 6

function bblSort(array) {
    let newArr = array;
    for (let i = 0; i < newArr.length - 1; i++) {
        for (let j = 0; j < newArr.length - i - 1; j++) {
            if (newArr[j] > newArr[j + 1]) {
                let temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
        bblsortArr.push(newArr.concat());
    }
    // return array;
}
bblSort(arr);
console.log(bblsortArr);