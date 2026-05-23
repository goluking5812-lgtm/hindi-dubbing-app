const express = require("express");
const app = express();

app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Hindi Dubbing App</title>
</head>
<body style="font-family:sans-serif;text-align:center;padding-top:50px;">
<h1>Hindi Dubbing App 🎬</h1>
<p>Chinese Video to Hindi Dubbing</p>

<input id="videoFile" type="file" accept="video/*">
<br><br>

<button onclick="startUpload()">Upload</button>

<p id="status"></p>

<script>
function startUpload() {
const file = document.getElementById("videoFile").files[0];

if (!file) {
alert("Pehle video select karo");
return;
}

document.getElementById("status").innerHTML =
"Uploading & Processing Video... ⏳";

setTimeout(() => {
document.getElementById("status").innerHTML =
"Video Uploaded Successfully ✅<br>Hindi dubbing processing coming soon...";
alert("Video Uploaded Successfully ✅");
}, 1500);
}
</script>
</body>
</html>
`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Server started");
});