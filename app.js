// user
const {homepage,daftar,login,detail,postDaftar,isAuth,store,postLogin,admin} = require('./user/script')

// MongoDb
const {listProdukDatabases, loginDatabases} = require('./mongoDb/script')

// Seting Express
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static((__dirname, 'public')))

// Setting express Session
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
    store: store
  }))

// Setting Template Enggine
const ejs = require('ejs')
app.set('view engine', 'ejs')

// Setting Express Validasi
const { body, validationResult,check } = require('express-validator');


// function find data login
const dataLogin = async(objValue) => {
    return await loginDatabases.findOne(objValue)
}

// method get
app.get('/', homepage)
app.get('/daftar', isAuth, daftar)
app.get('/login', isAuth, login)
app.get('/detail', detail)
app.get('/admin', admin)

//method post
app.post('/daftar', [
    body('nama').custom(async (value,{req}) => {
        const dataLoginValidasi = await dataLogin({nama : value})
        console.log(dataLoginValidasi);
        if(dataLoginValidasi) {
            throw new Error('nama yang anda masukkan tidak valid');
        }
        return true
    }),
    body('email').custom(async (value) => {
        const dataLoginValidasi = await dataLogin({email : value})
        if(dataLoginValidasi) {
            throw new Error('email yang anda masukkan tidak valid');
        }
        return true
    }),
    check('password')
    .isLength({ min: 8 })
    .withMessage('pasword harus 8 karakter')
] , postDaftar)

app.post('/login', [
    body('email').custom(async (value,{req}) => {
        const dataLoginValidasi = await dataLogin({email : value})
        if(!dataLoginValidasi) {
            throw new Error('nama yang anda masukkan tidak valid');
        }
        return true
    }),
    body('password').custom(async (value) => {
        const dataLoginValidasi = await dataLogin({password : value})
        if(!dataLoginValidasi) {
            throw new Error('email yang anda masukkan tidak valid');
        }
        return true
    }),
] , postLogin)


app.listen(3000, () => {
    console.log('server berjalan di port 3000');
})
