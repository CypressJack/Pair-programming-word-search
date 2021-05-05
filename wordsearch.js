const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
    let reversed = l.split("").reverse("").join("");
    if (l.includes(word)) return true
    if (reversed.includes(word)) return true;
  };
  const verticalRows = transpose(letters);
  for (x of verticalRows) {
    let reversed = x.split("").reverse("").join("");
    if (x.includes(word)) return true
    if (reversed.includes(word)) return true;
  };
  return false;
}

const transpose = function (matrix) {
  let finalArray = [];
  let singleArray = [];
  if (matrix.length === 1) {
    let newArray = [];
    for (const item of matrix[0]) {
      newArray.push([item]);
    }
    return newArray;
  } else {
    if (matrix.length !== matrix[0].length) {
      for (let y = 0; y < matrix[0].length; y++) {
        let newArray = [];
        for (let i = 0; i < matrix.length; i++) {
          if (typeof matrix[i][y] !== "undefined") {
            newArray.push(matrix[i][y]);
          }
        }
        finalArray.push(newArray.join(""));
      }
    } else {
      for (let y = 0; y < matrix.length; y++) {
        let newArray = [];
        for (let i = 0; i < matrix.length; i++) {
          if (typeof matrix[i][y] !== "undefined") {
            newArray.push(matrix[i][y]);
          }
        }
        finalArray.push(newArray.join(''));
      }
    }
  }
  return finalArray;
};

module.exports = wordSearch