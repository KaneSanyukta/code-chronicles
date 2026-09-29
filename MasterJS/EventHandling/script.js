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

let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let button = document.querySelector("button");

a.addEventListener("click",()=>{
    console.log("Clicked on a");
}, true); // Second called
b.addEventListener("click",()=>{
    console.log("Clicked on b");
}); // Skip and follow bubbling
c.addEventListener("click",()=>{
    console.log("Clicked on c");
}); // Skipped and follow bubbling
button.addEventListener("click",()=>{
    console.log("Clicked on button");
},true); // first called
