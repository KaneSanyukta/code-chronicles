let downloadBtn = document.querySelector("#downloadBtn");
let progressText = document.querySelector("#progressText");
let statusText = document.querySelector("#statusText")
let progress = document.querySelector("#progressBar");
let secondes = 10;
let count = 0;
downloadBtn.addEventListener("click",function(){
    startDownload();
});


function startDownload(){
    let intervals = setInterval(()=>{
        document.querySelector("small").textContent ="Double click for stop download.";
        if(count<=99){
            count++;
            statusText.textContent = "Downloading...";
            progress.style.width = `${count}%`;
            progressText.textContent = `${count}%`;
            downloadBtn.textContent="Stop Download";
        }else{
            clearInterval(intervals);
            statusText.textContent = "Download completed";
        }
    },(secondes*1000)/10); 

    downloadBtn.addEventListener("dblclick",()=>{
        document.querySelector("small").style.display = "none";
        clearInterval(intervals);
        statusText.textContent = "Download stopped";
        downloadBtn.textContent="Restart Download";
    });
}

