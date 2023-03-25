const { tulisPertanyaan, simpanContact } = require("./contacts");

// fungsi utama program
const main = async () => {
	const nama = await tulisPertanyaan("Masukkan nama anda : ");
	const email = await tulisPertanyaan("Masukkan email anda : ");
	const noHP = await tulisPertanyaan("Masukkan noHP anda : ");

	simpanContact(nama, email, noHP);
};

main();
