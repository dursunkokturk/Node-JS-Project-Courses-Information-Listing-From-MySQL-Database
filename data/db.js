// Kurulumu Yapilan MySQL Server i Projeye Library Olarak Ekliyoruz.
const mysql = require("mysql2");

// Database Baglanti Bilgilerini Paket Olarak Projeye Ekliyoruz
const config = require("../config");

// config.js Dosyasini Parametre Olarak Kullanarak
// Proje Ve Database Arasindaki Baglantiyi Kuruyoruz
let connection = mysql.createConnection(config.db);

connection.connect(function(err) {

    // Database Baglantisi Asamasinda Hata Olursa
    if(err) {

        // Hatayi Yazdiriyoruz
        return console.log(err);
    }

    console.log("mysql server connected");
});

module.exports = connection.promise();

// promise, async-await => async