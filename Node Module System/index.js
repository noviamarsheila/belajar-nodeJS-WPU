// const nama = "Novia Sheila";

// const cetakNama = (nama) => `Hai nama saya ${nama}`;

// console.log(cetakNama("Sheila"));

// const fs = require("fs"); // core module
// const cetakNama = require("./coba.js"); // local module
// const moment = require("moment"); // third party module / npm module / node_modules

const coba = require("./coba");

// console.log(coba);

console.log(coba.cetakNama("Sheila"), coba.PI);
console.log(coba.mahasiswa.cetakMhs());
console.log(new coba.Orang());
