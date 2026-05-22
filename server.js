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

<button style="
padding:15px 25px;
font-size:18px;
background:red;
color:white;
border:none;
border-radius:10px;
">
Upload Video
</button>
</body>
</html>
`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Server started");
});