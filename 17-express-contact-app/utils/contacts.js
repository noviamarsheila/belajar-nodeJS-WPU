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

const loadContact = () => {
	const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
	const contacts = JSON.parse(fileBuffer);
	return contacts;
};

module.exports = { loadContact };
