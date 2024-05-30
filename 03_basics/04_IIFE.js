// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution problem solve krne ke liye IIEF ka use krna pada.

(function one () {
    // name IIFE
    console.log(`DB CONNECTED`);
})();

((name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Aarti')
