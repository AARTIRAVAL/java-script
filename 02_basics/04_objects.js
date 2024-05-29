//const tinderUser = new Object()    // single Tum object
const tinderUser = {}       // Non single Tum

tinderUser.id = "123abc"
tinderUser.name = "Aarti"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
       userfullname: {
        firstname: "Aarti",
        lastname: "Raval"
       }     
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);


const users = [
   {

   },
   {

   },
   {

   },
   {

   },
   {

   },
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Aarti"
}

const {courseInstructor: Instructor} = course

//console.log(courseInstructor);
console.log(Instructor);

// {
//    "name": "Aarti",
//    "coursename": "js in hindi",
//    "price": "free"
//}

[
    {},
    {},
    {}
]