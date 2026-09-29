let boll = document.querySelector(".boll");
boll.style.backgroundColor="red";

boll.addEventListener("mouseover",()=>{
    boll.style.backgroundColor = "yellow";
});

boll.addEventListener("mouseout",()=>{
    boll.style.backgroundColor = "red";
});