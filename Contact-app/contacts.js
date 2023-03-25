//Core Module
//File System
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

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

// instansiasi promise
const tulisPertanyaan = (pertanyaan) => {
	return new Promise((resolve, rejectes) => {
		rl.question(pertanyaan, (nama) => {
			resolve(nama);
		});
	});
};

const simpanContact = (nama, email, noHP) => {
	const contact = { nama, email, noHP };
	const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
	const contacts = JSON.parse(fileBuffer);

	contacts.push(contact);

	fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

	console.log("Terimakasih sudah memasukkan data");

	rl.close();
};

module.exports = {
	tulisPertanyaan,
	simpanContact,
};
