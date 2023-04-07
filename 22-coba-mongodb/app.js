const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "sheila";

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect((error, client) => {
	if (error) {
		return console.log("Koneksi gagal");
	}

	// pilih database
	const db = client.db(dbName);

	// menambahkan 1 data ke collection mahasiswa
	// db.collection("mahasiswa").insertOne(
	// 	{
	// 		nama: "Lalisa Manoban",
	// 		email: "lalisa@gmail.com",
	// 		nohp: "082367465746",
	// 	},
	// 	(error, result) => {
	// 		if (error) {
	// 			return console.log("Gagal menambahkan data");
	// 		}
	// 		console.log(result);
	// 	}
	// );

	// menambahkan lebih dari satu data
	// db.collection("mahasiswa").insertMany(
	// 	[
	// 		{
	// 			nama: "Lalisa Manoban",
	// 			email: "lalisamanoban@gmail.com",
	// 			nohp: "082374653674",
	// 		},
	// 		{
	// 			nama: "Jisoo",
	// 			email: "jisoo@gmail.com",
	// 			nohp: "082367847637",
	// 		},
	// 	],
	// 	(error, result) => {
	// 		if (error) {
	// 			return console.log("Data gagal ditambahkan");
	// 		}
	// 		console.log(result);
	// 	}
	// );

	// menampilkan semua data yang ada di collection mahasiswa
	// console.log(
	// 	db
	// 		.collection("mahasiswa")
	// 		.find()
	// 		.toArray((error, result) => {
	// 			console.log(result);
	// 		})
	// );

	// menampilkan data berdasarkan kriteria yang ada di collection mahasiswa
	// console.log(
	// 	db
	// 		.collection("mahasiswa")
	// 		.find({ _id: ObjectID("642fb0134d957963ba98f9bc") })
	// 		.toArray((error, result) => {
	// 			console.log(result);
	// 		})
	// );

	// mengubah data
	// const updatePromise = db.collection("mahasiswa").updateOne(
	// 	{
	// 		nama: "Novia Marsheila Louisyana",
	// 	},
	// 	{
	// 		$set: {
	// 			email: "louisyana@yahoo.com",
	// 		},
	// 	}
	// );

	// updatePromise
	// 	.then((result) => {
	// 		console.log(result);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});

	// mengubah data lebih dari satu berdasarkan kriteria
	// db.collection("mahasiswa").updateMany(
	// 	{
	// 		nama: "Jisoo",
	// 	},
	// 	{
	// 		$set: {
	// 			nama: "Jisoo Blackpink",
	// 		},
	// 	}
	// );

	// menghapus satu data
	// db.collection("mahasiswa")
	// 	.deleteOne({ nama: "Lalisa Manoban" })
	// 	.then((result) => {
	// 		console.log(result);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});

	// menghapus banyak data
	db.collection("mahasiswa")
		.deleteMany({ nama: "Lisa" })
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
});
