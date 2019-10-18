let tableau = plusGrand([[1,2,3,4] , [123,363,132,872] , [76,65,524,32] , [965,1424,2641,5241]])
let tabPg = []
//function with array
  function plusGrand(arr) {
    //
    var result = [];
    var Pg = 0;
// loop for array of 2 dimension
    for (var i = 0; i < arr.length; i++) {
      Pg = 0;
      for (var j = 0; j < arr[i].length; j++) {
        if (Pg < arr[i][j]) {
          Pg = arr[i][j];
        }
      }
      result.push(Pg);
    }

    return result;


  }

console.table(tableau)
