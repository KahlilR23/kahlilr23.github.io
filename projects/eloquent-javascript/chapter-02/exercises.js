
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  
  for (var hashTag = "#"; hashTag.length <= num; hashTag += "#") 
  console.log(hashTag);

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num1 , num2) {
  for (let i = num1; i <= num2; i++) {
  let output = "";
  if (i % 3 == 0) output += "fizz";
  if (i % 5 == 0) output += "buzz";
  console.log(output || i);
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {

var chess = "";
for (let y = 0; y < num; y++) {
  for (let x = 0; x < num; x++) {
    if ((x + y) % 2 == 0) {
      chess += " ";
    } else {
      chess += "#";
    }
  }
  chess += "\n";
}
console.log(chess);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
