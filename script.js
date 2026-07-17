/* =========================
   PRVEFX VIDEO EDITOR
   SCRIPT JS PART 1
========================= */


const video = document.getElementById("videoPreview");

const timeline = document.getElementById("timeline");

const playBtn = document.getElementById("playBtn");

const pauseBtn = document.getElementById("pauseBtn");

const forwardBtn = document.getElementById("forwardBtn");

const backwardBtn = document.getElementById("backwardBtn");

const currentTime = document.getElementById("currentTime");

const endTime = document.getElementById("endTime");





/* =========================
      VIDEO UPLOAD
========================= */


const videoInput = document.createElement("input");

videoInput.type = "file";

videoInput.accept = "video/*";


videoInput.style.display = "none";


document.body.appendChild(videoInput);



document.querySelector(".video-card")
.addEventListener("click",()=>{

    videoInput.click();

});




videoInput.addEventListener("change",(e)=>{


const file = e.target.files[0];


if(file){

const url = URL.createObjectURL(file);

video.src = url;

video.load();

}


});





/* =========================
      TIME UPDATE
========================= */


video.addEventListener("loadedmetadata",()=>{


timeline.max = video.duration;


endTime.innerText =
formatTime(video.duration);


});




video.addEventListener("timeupdate",()=>{


timeline.value = video.currentTime;


currentTime.innerText =
formatTime(video.currentTime);


});





timeline.addEventListener("input",()=>{


video.currentTime =
timeline.value;


});





function formatTime(time){


let min =
Math.floor(time / 60);


let sec =
Math.floor(time % 60);



if(sec < 10)
sec = "0"+sec;



return min + ":" + sec;


}





/* =========================
      CONTROLS LOGIC
========================= */



// PLAY BUTTON

playBtn.addEventListener("click",()=>{

    video.play();

});




// PAUSE BUTTON

pauseBtn.addEventListener("click",()=>{

    video.pause();

});





// FORWARD 5 SECONDS

forwardBtn.addEventListener("click",()=>{


    video.currentTime += 5;


});





// BACKWARD 5 SECONDS

backwardBtn.addEventListener("click",()=>{


    video.currentTime -= 5;


});






/* =========================
        TRIM SYSTEM
========================= */


let trimStartTime = 0;

let trimEndTime = 0;




const trimStartBtn =
document.getElementById("trimStart");

const trimEndBtn =
document.getElementById("trimEnd");





trimStartBtn.addEventListener("click",()=>{


trimStartTime = video.currentTime;


console.log(
"Trim Start:",
trimStartTime
);


});






trimEndBtn.addEventListener("click",()=>{


trimEndTime = video.currentTime;


console.log(
"Trim End:",
trimEndTime
);


});






/* Prevent playing after trim end */


video.addEventListener("timeupdate",()=>{


if(trimEndTime > 0 && video.currentTime >= trimEndTime){


video.pause();


}


});






/* =========================
   BOTTOM TOOLBAR + PANEL
========================= */


const toolButtons =
document.querySelectorAll(".tool-btn");


const toolPanel =
document.getElementById("toolPanel");


const closePanel =
document.getElementById("closePanel");


const toolContent =
document.getElementById("toolContent");





// OPEN PANEL FROM TOOLBAR


toolButtons.forEach(button=>{


button.addEventListener("click",()=>{


let tool =
button.dataset.tool;



toolPanel.classList.add("active");



toolContent.innerHTML = `

<h3>${tool.toUpperCase()}</h3>

<p>
${tool} tools will appear here.
</p>

`;



});


});





// CLOSE PANEL


closePanel.addEventListener("click",()=>{


toolPanel.classList.remove("active");


});






/* =========================
      PANEL CATEGORY
========================= */


const categoryButtons =
document.querySelectorAll(".tool-category button");



categoryButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


toolContent.innerHTML = `

<h3>
${btn.innerText}
</h3>

<p>
${btn.innerText} options loading...
</p>

`;


});


});
