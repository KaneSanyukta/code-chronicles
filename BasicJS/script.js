// console.log(a);
// var a  = 12;
// abc();
// var abc = function(){
//     console.log("Hello");
// }


let obj = {
    name:"Harsha",
    age:20,
    email:"test@test.com",
};
console.log(obj.name);

for(let key in obj){
    console.log(obj.key);
}

// 1
let object ={
    name :"Harshita",
    age: 21,
    isEnrolled: true,
};

// 2
const user = {
    "first-name":"harsh",
};
// destructure the key "first-name" as firstName
const {"first-name":firstName} = user;

console.log(firstName);

for(let key in user){
    console.log(user[key]);
}

// Dynamic key
let key = "rollno";

let stud={
    name :"Harshita",
    age: 21,
    isEnrolled: true,
    [key]:21,
};

console.log(stud);

// print latitute

const userData ={
    name:"Harsh",
    age:23,
    email:"test@test.com",
    address:{
        city:"Bhopal",
        lat:23.34,
        latitude:23.34,
        lng:21.3,
    }
};

console.log(userData.address.lat); 
//Or
const {lat} = userData.address.lat; //error when lat=> latitude
console.log(lat);
//or optional chaining
console.log(userData?.address?.lat); // after lat=> latitude gives undefined


//Use object.enteries to print key value pair
Object.entries(stud);
//each pair treated as array lets itrate it
Object.entries(stud).forEach(function(val){
    console.log(val[0]+":"+val[3]);
});

// copy object using spread operator
const original = {a: 1,b:2,arr:{
    1:"a",
    2:"b",
}}
const copyObj ={...original};

for(let val in copyObj){
    console.log(copyObj[val]);
}

// What is issue with this its do reference cloning for sub object
// solution Deep cloning
const Copy = JSON.parse(JSON.stringify(original));





