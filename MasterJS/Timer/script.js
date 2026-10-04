let h1 = document.querySelector("h1");
let count = 0;

let interval = setInterval(()=>{
    if(count<=10){
        count++;
        h1.textContent = count;
        console.log(count);
    }else{
        clearInterval(interval);
    }
},3000);