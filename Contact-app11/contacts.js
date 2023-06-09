//Core Module
//File System
const chalk = require("chalk");
const fs = require("fs");

// cek file/folder ada tidak didalam sistem
// jika tidak ada maka buat folder
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync()) {
	fs.writeFileSync(dataPath, "[]", "utf-8");
}

const simpanContact = (nama, email, noHP) => {
	const contact = { nama, email, noHP };
	const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
	const contacts = JSON.parse(fileBuffer);

	// cek duplikat
	const duplikat = contacts.find((contact) => contact.nama === nama);
	if (duplikat) {
		console.log(chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain"));
		return false;
	}

	contacts.push(contact);

	fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

	console.log("Terimakasih sudah memasukkan data");
};

module.exports = {
	simpanContact,
};
