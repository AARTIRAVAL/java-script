const name = "Aarti"
const repoCount = 50

//console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('Aarti-Raval')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotheString = gameName.slice(-8, 4)
console.log(anotheString);

const newStringOne ="     Aarti     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aarti.com/aarti%20raval"
console.log(url.replace('%20', '-'))

console.log(url.includes('Aarti'))
console.log(url.includes('aarti'))

console.log(gameName.split('-'));

