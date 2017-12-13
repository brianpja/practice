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


console.log(coordinates([[0,1], [10,12]], 10))
console.log(coordinates([[-3,-1,1], [4,9,13], [15,18,19]], 18))
console.log(coordinates([[-3,-1,1], [4,9,13], [15,18,19]], 24))
