const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sheila");

// // menambah 1 data
// const contact1 = new Contact({
// 	nama: "Lavenia Berlian Nurfadila",
// 	nohp: "085674653653",
// 	email: "berlian@gmail.com",
// });

// // simpan ke collection
// contact1.save().then((contact) => {
// 	console.log(contact);
// });
