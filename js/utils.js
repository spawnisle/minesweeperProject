'use strict'

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }    

    return txt
}    

function getPosOfRandomCell(mat, value) {
    var cellsPos = []
    for (var i = 0; i < mat.length; i++) {

        for (var j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === value) {
                cellsPos.push({
                    i,
                    j,
                })
            }
        }
    }
    if (cellsPos.length === 0) return null
    // const randomCellPos =cellsPos.splice(getRandomInteger(0, cellsPos.length), 1)[0]
    const randomCellPos = cellsPos.splice(Math.floor(Math.random() * cellsPos.length), 1)[0]

    return randomCellPos
}

function findEmptyCell() {
    var emptyCells = []
    for (let i = 0; i < gBoard.length; i++) {
        for (let j = 0; j < gBoard[i].length; j++) {
            if (gBoard[i][j] === EMPTY) {
                emptyCells.push({
                    i,
                    j,
                })
            }
        }
    }
    if (emptyCells.length === 0) return null
    return emptyCells.splice(getRandomInteger(0, emptyCells.length), 1)[0]
}

function sortNums(nums) {
    var arrSize = nums.length
    for (var i = 0; i < arrSize - 1; i++) {
        for (var j = 0; j < arrSize - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                var temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums
}

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

function countNeighbors(idxI, idxJ, mat, iRange = 1, jRange = 1, value = '') {
    var count = 0
    for (let i = idxI - iRange; i < idxI + iRange; i++) {
      if (i < 0 || i >= mat.length) continue
      for (let j = idxJ - jRange; j < idxJ + jRange; j++) {
        if (j < 0 || j >= mat[i].length) continue
        if (i === idxI && j === idxJ) continue
        if (value) {
          if (mat[i][j] === value) count++
          continue
        }
        if (mat[i][j] !== '') count++
      }
    }
    return count
  }

  function createMat(ROWS, COLS) {
    const mat = []
    for (var i = 0; i < ROWS; i++) {
        const row = []
        for (var j = 0; j < COLS; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}

function getRandomInt(min, max) {
    var diff = max - min
    var res = Math.floor(Math.random() * diff + min)
    return res
}