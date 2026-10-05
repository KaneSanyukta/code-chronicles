//Saves changes on loacl storage 
if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"));
}else{
    setDarkOrLight();
}


// Control by system mode
function setDarkOrLight(){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.body.classList.remove("light"); 
        document.body.classList.add("dark");
    }else{
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        document.querySelector("#themeText").textContent="Dark Mode";
    }
}

setDarkOrLight();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{
    if(!localStorage.getItem("theme")) setDarkOrLight();
});

// Control by Button
let btn = document.querySelector("#themeToggle");

btn.addEventListener("click",()=>{
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        document.body.classList.add("light"); 
        document.querySelector("#themeText").textContent="Dark Mode";
        localStorage.setItem("theme","light");
    }else{
        document.body.classList.remove("light"); 
        document.body.classList.add("dark");
        localStorage.setItem("theme","dark");
    }
});


