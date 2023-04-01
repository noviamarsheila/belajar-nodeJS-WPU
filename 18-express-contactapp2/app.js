const { urlencoded } = require("express");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");

const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// Third party middleware
app.use(expressLayouts);

// Built in middleware
app.use(express.static("public"));
app.use(express.urlencoded());

// route
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

// halaman form tambah data contact
app.get("/contact/add", (req, res) => {
	res.render("add-contact", {
		title: "Form Tambah Data Contact",
		layout: "layouts/main-layout",
	});
});

// proses data contact
app.post("/contact", (req, res) => {
	res.send(req.body);
});

// halaman detail contact
app.get("/contact/:nama", (req, res) => {
	const contact = findContact(req.params.nama);

	res.render("detail", {
		layout: "layouts/main-layout",
		title: "Halaman Detail Contact",
		contact,
	});
});

app.use((req, res) => {
	res.status(404);
	res.send("<h1>404</h1>");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
