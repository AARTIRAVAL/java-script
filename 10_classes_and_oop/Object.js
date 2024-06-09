 function multipleBye5(num){
    return num*5
 }

 multipleBye5.power = 2

 console.log(multipleBye5(5));
 console.log(multipleBye5.power);
 console.log(multipleBye5.prototype);

 function craeteUser(username, prize){
    this.username = username
    this.prize = prize
 }

 craeteUser.prototype.increment = function(){
    this.prize++
 }

 craeteUser.prototype.printMe = function(){
    console.log(`prize is ${this.prize}`);
 }

 const tea = new craeteUser("tea", 25)
 const coffee = new craeteUser("coffee", 250)

 tea.printMe()

 /*

Here's What happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new
Javascript object.

A prototype is linked: The newly created object gets linked to the prototype
property of the constructor function. This means that it has access to
properties and methods defind on the constructor's prototype.

The constructor is called: The constructor function is called with the
specified arguments and this is bound to the newly created object. If no
explicit return value is specified from the constructor, javascript
assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called,
if it doen't return a non-promitive value (object, array, function, etc),
the newly created object is returned.

*/

