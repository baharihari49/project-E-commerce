const { loginDatabases } = require("../mongoDb/script")
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/ecommerce',
    collection: 'mySessions'
  });
const isAuth = (req,res,next) => {
    if(req.session.isAuth){
        res.redirect('/')
    }else{
        next()
    }
}

// Setting Express Validasi
const { body, validationResult,check } = require('express-validator');

const homepage = (req,res,next) => {
    res.render('homepage')
}
const daftar = (req,res,next) => {
    res.render('daftar',{
        errors: '',
        value : req.body,
    })
}
const login = (req,res,next) => {
    res.render('login',{
        errors: '',
        value: req.body
    })
}
const detail = (req,res,next) => {
   res.render('detail')
}
const admin = (req,res,next) => {
    res.render('admin')
}

const postDaftar = (req,res,next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
        return res.render('daftar', {
            errors: errors.array(),
            value : req.body
        })
        
    }
    const {nama, email, password} = req.body
    const sessionId = req.session.id
    loginDatabases.insertMany({nama,email,password,sessionId})
    req.session.isAuth = true
    res.redirect('/')
    
}

const postLogin = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
        return res.render('login', {
            errors: errors.array(),
            value : req.body
        })
        
    }
    req.session.isAuth = true
    res.redirect('/')
}

module.exports ={ homepage,daftar,login,detail,postDaftar,isAuth,store,postLogin,admin}