const express = require("express");
const { loadContact } = require("./utils/contacts");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");

// gunakan ejs
app.set("view engine", "ejs");

// Third party middleware
app.use(expressLayouts);

// Built in middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
	// const mahasiswa = [];
	const mahasiswa = [
		{
			nama: "Sheila",
			email: "sheila@gmail.com",
		},
		{
			nama: "Berlian",
			email: "berlian@gmail.com",
		},
		{
			nama: "Novi",
			email: "novi@gmail.com",
		},
	];
	res.render("index", {
		nama: "Sheila",
		title: "Halaman Home",
		mahasiswa,
		layout: "layouts/main-layout",
	});
});
app.get("/about", (req, res) => {
	res.render("about", {
		layout: "layouts/main-layout",
		title: "Halaman About",
	});
});
app.get("/contact", (req, res) => {
	const contacts = loadContact();
	res.render("contact", {
		layout: "layouts/main-layout",
		title: "Halaman Contact",
		contacts,
	});
});

app.use((req, res) => {
	res.status(404);
	res.send("<h1>404</h1>");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
