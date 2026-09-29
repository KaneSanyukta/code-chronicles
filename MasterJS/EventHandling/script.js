let boll = document.querySelector(".boll");
boll.style.backgroundColor="red";

// boll.addEventListener("mouseover",()=>{
//     boll.style.backgroundColor = "yellow";
// });

// boll.addEventListener("mouseout",()=>{
//     boll.style.backgroundColor = "red";
// });

window.addEventListener("mousemove",(dets)=>{
    //console.log(dets);
    boll.style.top = dets.clientY + "px";
    boll.style.left = dets.clientX + "px";
});