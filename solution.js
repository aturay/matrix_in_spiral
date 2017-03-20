"use strict";
(function () {

// Тестовое №2 Есть матрица 2n-1 x 2n-1, заполненная случайными значениями.
// Надо вывести их на экран в ряд, начиная из центра по спирали: влево - вниз - вправо - вверх и т.д.

// Пример

// Если матрица:
// 1 2 3
// 4 5 6
// 7 8 9

// То результат:
// 5 4 7 8 9 6 3 2 1

// Решение должно быть для общего случая с любым n, написано на простом JavaScript


getMatrixInSpiral( 2 );

//=> [ ... ]
function getMatrixInSpiral( n ) {
  n = +n
  var count_matrix = 2 * n -1 || 0
  var i = 0;
  var j = 0;
  var step = 0;
  var result = [];

  var arrMatrix = generateMatrix( count_matrix );
  var arrMatrix = arr;


  while (true) {
    // move_right
    while (j < count_matrix) {
      result.push( arrMatrix[i][j] );
      j++;
    }

    if (step == n - 1) break;

    // move_down
    i++;
    j--;
    while (i < count_matrix) {
      result.push( arrMatrix[i][j] );
      i++;
    }

    // move_left
    i--;
    while (j != step) {
      j--;
      result.push( arrMatrix[i][j] );
    }

    // move_up
    step++;
    while (i != step) {
      i--;
      result.push( arrMatrix[i][j] );
    }

    j = i;
    count_matrix--
  } // end while

  // comments
  console.log(arrMatrix, result.reverse());

  return result.reverse();
}


// functions
//=> int
function getRandomInt( min, max ) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Generate array for Matrix
//=> [[],[],[],...]
function generateMatrix( n ){
  n = +n || 0;
  var r, result = [];

  for( var j = 0; j < n; j++){
    var arr = [];

    for( var i = 0; i < n; i++){
      r = getRandomInt(0, 10);
      arr.push(r);
    }

    result.push(arr)
  }

  return result;
}


})();
