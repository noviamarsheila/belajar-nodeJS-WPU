const fs = require("fs");

// membuat folder data jika beulm ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath);
}

//membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
	fs.writeFileSync(dataPath, "[]", "utf-8");
}

// ambil semua data di contacts.json
const loadContact = () => {
	const file = fs.readFileSync("data/contacts.json", "utf-8"); // string
	const contacts = JSON.parse(file); // ubah string jadi object
	return contacts;
};

// cari contact berdasarkan nama
const findContact = (nama) => {
	const contacts = loadContact();
	const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
	return contact;
};

// method untuk menuliskan data atau menimpa file contacts.json dengan data yang baru
const saveContacts = (contacts) => {
	//contacts->object
	fs.writeFileSync("data/contacts.json", JSON.stringify(contacts)); // ubah object jadi string
};

// function untuk menambahkan data contact baru
const addContact = (contact) => {
	//ambil isi semua data json
	const contacts = loadContact();
	//ubah string jadi object
	contacts.push(contact);
	saveContacts(contacts);
};

// cek nama kontak yang duplikat
const cekDuplikat = (nama) => {
	const contacts = loadContact();
	return contacts.find((contact) => contact.nama === nama);
};

module.exports = { loadContact, findContact, addContact, cekDuplikat };
