
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;text-align:center;padding-top:50px;">
<h1>Hindi Dubbing App 🎬</h1>
<p>Chinese Video to Hindi Dubbing</p>

<form action="/upload" method="POST" enctype="multipart/form-data">
<input name="video" type="file" accept="video/*" required>
<br><br>
<button type="submit">Upload Video</button>
</form>
</body>
</html>
`);
});

app.post("/upload", upload.single("video"), (req, res) => {
res.send(`
<h2>Video Uploaded Successfully ✅</h2>
<p>File name: ${req.file.originalname}</p>
<p>Hindi dubbing processing coming soon...</p>
<a href="/">Upload another video</a>
`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Server started");
});
