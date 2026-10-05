localStorage.setItem("name","Harshita");
console.log(localStorage.getItem("name"));
localStorage.clear();
console.log(localStorage.getItem("name"));


sessionStorage.setItem("key","dtfkgnt342ccvgb$cxvv..");
console.log(sessionStorage.getItem("key")); // just like local storage but it will goen after page reload.

document.cookie = "harshita@test.com";   // pass data to server less capacity of storage

// Issues with loacal storage 
localStorage.setItem("friends",["Amit","Sumit","Harsh","Reema","Vihaan"]);
console.log(localStorage.getItem("friends")); // Insead of showing array it will display data in string format ... Api are design in suach a way

localStorage.setItem("obj",{name:"Harsh",email:"test@test.com",age:21});
console.log(localStorage.getItem("obj")); // show object Object

//Solution
localStorage.setItem("obj",JSON.stringify({name:"Harsh",email:"test@test.com",age:21})); // covert data into string
console.log(JSON.parse(localStorage.getItem("obj"))); //while retriving back to original object
