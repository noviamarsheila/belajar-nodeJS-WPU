// Core Module
// File System
const fs = require("fs");
// console.log(fs);

// Menuliskan String ke file secara synchronous
// try {
// 	fs.writeFileSync("data/contacts.json", "Hello World!!! secara synchronous");
// } catch (e) {
// 	console.log(e);
// }

// Menuliskan String ke file secara Asynchronous
// fs.writeFile("data/test.txt", "Hello World secara Asynchronous", (err) => {
// 	console.log(err);
// });

// Membaca isi file secara Synchronous
// const data = fs.readFileSync("data/test.txt", "utf8");
// console.log(data);

// Membaca file secara Asynchronous
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

// Readline
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Masukkan nama anda : ", (nama) => {
	rl.question("Masukkan No HP anda : ", (noHP) => {
		// Siapkan data yang akan ditangkap dari cmd langsung sebuah object
		// Siapkan data json nya
		const contact = { nama, noHP };

		// Baca isi file
		// isi dari file masih String
		const file = fs.readFileSync("data/contacs.json", "utf-8");

		// ubah string menjadi JSON
		// apapun isi dari variabel file diubah menjadi JSON
		const contacs = JSON.parse(file);

		// masukkan object kedalam array
		contacs.push(contact);

		// Tulis
		// contacts bentuknya JSON , sedangkan file nya harus ditulis menjadi String
		// ubah JSON jadi String
		fs.writeFileSync("data/contacs.json", JSON.stringify(contacs));

		console.log("Terimakasih sudah memasukkan data");

		rl.close();
	});
});
