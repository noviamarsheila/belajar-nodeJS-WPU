function cetakNama(nama) {
	return `Halo nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
	nama: "Novia Sheila",
	umur: 19,
	cetakMhs() {
		return `nama saya ${this.nama}, umur ${this.umur} tahun `;
	},
};

class Orang {
	constructor() {
		console.log("Objek orang telah dibuat");
	}
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = {
	cetakNama,
	PI,
	mahasiswa,
	Orang,
};
