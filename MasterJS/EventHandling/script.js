// let boll = document.querySelector(".boll");
// boll.style.backgroundColor="red";

// boll.addEventListener("mouseover",()=>{
//     boll.style.backgroundColor = "yellow";
// });

// boll.addEventListener("mouseout",()=>{
//     boll.style.backgroundColor = "red";
// });

// window.addEventListener("mousemove",(dets)=>{
//     //console.log(dets);
//     boll.style.top = dets.clientY + "px";
//     boll.style.left = dets.clientX + "px";
// });

// let  ul = document.querySelector("ul");

// ul.addEventListener("click",(dets)=>{
//     // alert("Clicked");
//     // console.log(dets);
//     dets.target.classList.toggle("line");
// });

// Bubbling working

// let a = document.querySelector("#a");
// let b = document.querySelector("#b");
// let c = document.querySelector("#c");
// let button = document.querySelector("button");

// a.addEventListener("click",()=>{
//     console.log("Clicked on a");
// }, true); // Second called
// b.addEventListener("click",()=>{
//     console.log("Clicked on b");
// }); // Skip and follow bubbling
// c.addEventListener("click",()=>{
//     console.log("Clicked on c");
// }); // Skipped and follow bubbling
// button.addEventListener("click",()=>{
//     console.log("Clicked on button");
// },true); // first called


// Letter calculator
// let input = document.querySelector("input");
// let p = document.querySelector("p");
// let span = document.querySelector("span");

// input.addEventListener("input",(dets)=>{
//     let val = input.value;
//     span.textContent = input.value.length;
//     if(val.length>=50){
//         p.style.color ="red";
//         p.textContent = "You exceed you letter limit.";
//         span.style.color = "red";
//     }else{
//         p.style.color ="#ffff";
//         p.textContent = "Letters limit 50.";
//         span.style.color = "#fff";
//     }
// });

// Simple form validation

// let username = document.querySelector("#name");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let c_password = document.querySelector("#confirm_password");
// let p = document.querySelectorAll("p");
// let form = document.querySelector("form");
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// form.addEventListener("submit",(dets)=>{
//     dets.preventDefault();
//     console.log(dets);
//     console.log(p);

//     if(username.value.length<=2){
//         p[0].style.display ="initial";
//     }else{
//         p[0].style.display = "none";
//     }
//     if(!emailRegex.test(email.value)){
//         p[1].style.display ="initial";
//     }else{
//         p[1].style.display = "none";
//     }
//     if(c_password.value!==password.value){
//         p[2].style.display ="initial";
//     }else{
//         p[2].style.display = "none";
//     }
    
// });


