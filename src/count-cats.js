const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  if(matrix.length == 0) return false;
    for(let i = 0; i < matrix.length; i++){

      for(let u = 0; u < matrix[i].length; u++){
        if(matrix[i]){
        if(matrix[i][u] == '^^') count++;
      }else{return false}
    }
    }
    return count;
}

module.exports = {
  countCats
};
