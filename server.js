const express = require("express");
const app = express();

app.get("/", (req, res) => {
res.send(`
<html>
<head>
<title>Hindi Dubbing App</title>
</head>
<body style="font-family:sans-serif;text-align:center;padding-top:50px;">
<h1>Hindi Dubbing App 🎬</h1>

<p>Chinese Video to Hindi Dubbing</p>

<form>
<input type="file" accept="video/*">

<br><br>

<button
type="button"
onclick="alert('Video Uploaded Successfully ✅')">

Upload
</button>
</form>

</body>
</html>
`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Server started");
});