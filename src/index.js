module.exports = function towelSort(matrix) {
  var arr = [];
  var arrNew = [];
  if (matrix == null || matrix == undefined) {
      return [];
  }
  for (i = 0; i < matrix.length; i++) {
      arr = matrix[i];
      if (i % 2 == 0) {
          for (j = 0; j < arr.length; j++) {
              arrNew.push(arr[j]);
          }
      } else {
          var reverse = arr.reverse();
          for (j = 0; j < arr.length; j++) {
              arrNew.push(arr[j]);
          }
      }
  }
  return arrNew;
};