document.getElementById("newProject").onclick = () => {

document.body.innerHTML = `

<header>
<h1>PRVEFX Editor</h1>
</header>

<div class="editor">

<div class="preview">
<video id="videoPlayer" controls width="100%" height="100%"></video>
</div>

<div style="padding:15px;text-align:center;">
<input type="file" id="videoInput" accept="video/*">
</div>

<div class="timeline">
<h2>⏱ Timeline (Coming Soon)</h2>
</div>

</div>

`;

const input = document.getElementById("videoInput");
const player = document.getElementById("videoPlayer");

input.onchange = function () {
const file = this.files[0];

if(file){
player.src = URL.createObjectURL(file);
player.play();
}
};

};
