function coordinates(array, int) {

  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array.length; y++) {
        if (int === array[x][y]) {
          return [x,y];
        }
        else if (int < array[x][y]) {
          return -1;
        }
    }
  }
  return -1;
}


// console.log(coordinates([[0,1], [10,12]], 10))
// console.log(coordinates([[-3,-1,1], [4,9,13], [15,18,19]], 18))
// console.log(coordinates([[-3,-1,1], [4,9,13], [15,18,19]], 24))


// function binarySearch(array, int) {
//   let midVal;
//   let x;
//   let y;
//
//   if (array.length %2 === 1) {
//     x = Math.floor(array.length / 2);
//     y = Math.floor(array.length / 2);
//     midVal = array[x][y];
//     console.log(midVal);
//     if (midVal === int) {
//       return [x,y];
//     }
//   }
//   if (array.length %2 === 0) {
//     x = array.length / 2;
//     y = 0;
//     midVal = array[x][y];
//     console.log(midVal);
//     if (midVal === int) {
//       return [x,y]
//     }
//   }
// }
//
// console.log(binarySearch([[0,1], [10,12]], 10))
// console.log(binarySearch([[-3,-1,1], [4,9,13], [15,18,19]], 18))
// console.log(binarySearch([[-3,-1,1], [4,9,13], [15,18,19]], 24))



function find(array, val) {

  const x = outerSearch(array, val);
  if (!x) return -1;
  if (x) return x;

}

function outerSearch(array, val, left = 0, right = array.length) {
  const midpoint = Math.floor((right - left)/2);
  console.log(midpoint)
  const innerArray = array[midpoint];
  if (innerArray[0] <= val && val <= innerArray[innerArray.length - 1]) {
    return midpoint;
  }
  else if (val < innerArray[0]){
    outerSearch(array, val, left, midpoint - 1);
  }
  else if (val > innerArray[innerArray.length - 1]) {
    outerSearch(array, val, midpoint + 1, right);
  }
}



console.log(find([[0,1], [10,12]], 10))
console.log(find([[-3,-1,1], [4,9,13], [15,18,19]], 18))
console.log(find([[-3,-1,1], [4,9,13], [15,18,19]], 24))
