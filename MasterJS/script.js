let h1 = document.querySelector("h1");
// console.dir(h1);
// //h1.innerText ="I am fine!"; // change inner text that is Hey,How are you??
// // or 
// h1.innerHtml = "<i>Thats great!</>"; // change html you may add different html tags 
// //or
// //h1.textContent = "well!"; // same as innerText change text content

// //h1.hidden = true; // It some addition properties that prent in h1 that we can change

// // Attribute manupliation
// let a = document.querySelector("a");
// console.dir(a);
// a.href = "https://www.google.com";
// // another way 
// a.setAttribute("href","https://www.goole.com");
// console.log(a.getAttribute("href"));
// a.removeAttribute("href");
// console.log(a.getAttribute("href"));

// //DOM manipulication wuth create , append ,prepend and remove elements

// let h2 = document.createElement("h2");
// console.log(h2);
// h2.textContent = "Hey, here I am!";
// document.body.prepend(h2);
// // or document.append(h2); or document.querySelector("body").append(h2);
// // Style changes

// console.dir(h2);
// h2.style.color = "blue";
// h2.style.fontFamily = "Gilroy";
// h2.style.textTransform = "Capitalize";

// // add class to html element
// h1.classList.add("holo");

// // for remove h1.classList.remove("holo")
// // or element.classList.toggle(); tp remove if used or add if alredy not added

// //Event Handling
// let element = document.querySelector(".eventElement");
// console.dir(element);
// let remover = document.createElement("h1");
// remover.textContent="Reset";
// remover.classList.add("removeElement");


// element.addEventListener("click",()=>{
//     document.querySelector("body").style.background="black";
//     document.querySelector(".hide").hidden=true;
//     document.body.append(remover);
// });

// remover.addEventListener("click",()=>{
//         document.querySelector("body").style.background="white";
//         document.querySelector(".hide").hidden=false;
//         remover.remove();
// });

// document.querySelector("input").addEventListener("input",(data)=>{
//     console.log(data);
//     if(data !== null) document.querySelector(".inputData").textContent=data.data;
// });

// document.querySelector("select").addEventListener("change",(data)=>{
//     console.log(data.target.value);
//     let selected = data.target.value;
//     document.querySelector(".deviceStatus").textContent=`${selected} device selected`;
// });

window.addEventListener("keydown",(data)=>{
    console.log(data);
    if(data.code ==="Space") h1.textContent="SPC";
    else h1.textContent=data.key;
});

let file = document.querySelector("#fileInp");

document.querySelector("#btn").addEventListener("click",()=>{
    file.click();
})

file.addEventListener("change",(data)=>{
    let fileData= data.target.files[0].name;
    if(fileData) document.querySelector("#btn").textContent=`${fileData}`;
})
