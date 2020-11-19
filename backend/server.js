const express = require('express');
const jose = require('jose');
const path = require('path');
const fs = require('fs')
require('dotenv').config();

//*****Implement seesion tokens to mitigate risk of replay attack*****

const app = express();

const key = process.env.SECRET_KEY;
const jwk = jose.JWK.asKey(key);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/', (req,res) => { //login
  const body = req.body
  if(body.username == process.env.ADMIN_USERNAME && 
    body.password ==process.env.ADMIN_PASSWORD){
    //create jwt and set it in an httpOnly cookie
    const payload = {
      'user': 'Jaiye',
      'admin': true,
    }
     const jwt = jose.JWT.sign(payload, jwk, {
      algorithm: 'HS256',
      expiresIn: '24 hours',
      issuer: 'Jcloud API',
      now: new Date(),
      header: { typ: 'JWT', alg: 'HS256' }
    })
    res.setHeader('Set-Cookie', [`Auth_token=${jwt}; HttpOnly`]);   
    res.json({authenticated: true});
    console.log('admin has logged in at', new Date());
    //record logins in a log file 
  }else{
    res.json({authenticated: false});
  }
  res.end();
});

app.get('/auth-check', (req,res) => {//verify access token
  if(req.headers.cookie){
    const jwt = req.headers.cookie.split("=")[1];
    try{
      const check = jose.JWT.verify(jwt, jwk, {});//logs an error if jwt is not valid
      if(check.admin === true){
        res.json({authenticated: true});
      }else{
        res.json({authenticated: false});
      }
    }catch{
      res.json({authenticated: false});
    }
  } else{
    res.json({authenticated: false});
  }
  res.end();
});

app.get('/logout', (req,res) => {//logout
  res.setHeader('Set-Cookie', ['Auth_token=null; HttpOnly']);   
  res.end();
});

app.post('/get-files', (req,res)=>{//fetching files from user specified folder
  var path = req.body.path;
  fs.readdir(process.env.PATH_PREFIX+path, (err,file_list)=>{
    if(err){
      console.log(err);
    }else{
      if(!file_list){
        res.send('Error');
      }else{
        res.send(file_list);
      }
    }
  });
});



const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}`));