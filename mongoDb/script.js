const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://localhost:27017/ecommerce')
const Schema = mongoose.Schema;
const listProdukSchema = new Schema({
    nama:{
        type: String,
        required: true
    },
    deskripsi:{
        type: String,
        required: true
    },
    gambar:{
        type: String,
        required: true
    },
    harga: {
        type: String,
        required: true
    },
    kategori: {
        type: String,
        required: true
    },
    komentar: [
        {
            nama: {
                type: String,
                required: true
            },
            Ratting: {
                type: String,
                required: true
            },
            varianWarna: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            },
        }
    ]
})
const loginSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sessionId: {
        type: String,
        required: true
    }
})

const listProdukDatabases = mongoose.model('list produks', listProdukSchema)
const loginDatabases = mongoose.model('logins', loginSchema)

module.exports = {listProdukDatabases, loginDatabases}