let arr = [16, 51, 20, 41, 61, 83, 103, 67, 91, 50, 23, 34, 67, 76, 45, 58];
function findMinMax(arr) {
    console.log(`Original Array : ${arr}`)
    arr.sort((a, b) => a - b);
    min = arr[1];
    max = arr[arr.length - 2];
    //console.log(`Sorted Array : ${arr}`)
    console.log(`2nd Min Value : ${min} & 2nd Max Value : ${max}`);
}
findMinMax(arr);

// make your Own Array and pass it in Function 
// to run :- node 'filename.extension' 