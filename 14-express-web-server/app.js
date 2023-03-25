const express = require("express");
const app = express();
const port = 3000;

// route
app.get("/", (req, res) => {
	// res.json({
	// 	nama: "Novia Marsheila",
	// 	email: "noviasheila@gmail.com",
	// 	noHP: "098763542653",
	// });
	res.sendFile("./index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
	// res.send("Ini adalah halaman about");
	res.sendFile("./about.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
	// res.send("Ini adalah halaman contact");
	res.sendFile("./contact.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
	res.send(`Product ID :   ${req.params.id} <br/> Category ID : ${req.query.category}`);
});

app.use("/", (req, res) => {
	res.status(404);
	res.send("<h1>404</h1>");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
