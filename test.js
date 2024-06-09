const myArr = []
DebugePrint(myArr)

// continious, Holey
// SMI (small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]
// PACKED_DOUBLE_ELEMENT

arrTwo.push('7')
// PAKED_ELEMENT

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[19]);

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes.HOLEY_SIM_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') // PACKED_ELEMENT
arrFive.push('2') // PACKED_ELEMENT
arrFive.push('3') // PACKED_ELEMENT

const arrSix = [1, 2, 3, 4, 5]
arrSix.push(Infinity)

// for, for-of, forEach