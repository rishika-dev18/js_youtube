const tinderUser = new Object()  //ye ek singleton object h niche bala non singleton
// const tinderUser = {}
// console.log(tinderUser);

tinderUser.name = "rishi"
tinderUser.isLoggedIn = false
tinderUser.id = "123abc"
// console.log(tinderUser);

const regularUser = {
    email: "rishi@google.com",
    fullname: {
        userfullname: {
            firstname: "rishi",
            lastname: "anuragi"
        }

    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: 'r@gmail.com'
    },
    {
        id: 1,
        email: 'r@gmail.com'
    },
    {
        id: 1,
        email: 'r@gmail.com'
    }
]
user[1].email
// console.log(user);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js from utube",
    price: 999,
    courseInstructor: "rishi"
}
// course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor);

console.log(instructor);

// {
//     "name": "rishi"
//     "coursename": "js"
//     "price": 999
// }






