const fs =require('fs');
const path =require('path');
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const users = require('../data/users.json');

module.exports={
register:(req,res) =>{
    return res.render('users/register');
},
processRegister: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let { first_name,last_name, email, password} = req.body;
      let lastID = usuarios.length !== 0 ? usuarios[usuarios.length - 1].id : 0;
      let nuevoUsuario = {
        id: +lastID + 1,
        first_name: first_name.trim(),
        last_name: last_name.trim(),
        email,
        password : bcryptjs.hashSync(password, 10),
        rol : "user"
      };

      users.push(nuevoUsuario);

      fs.writeFileSync(
        path.resolve(__dirname, "..", "data", "users.json"),
        JSON.stringify(users, null, 3),
        "utf-8"
      );

      //levantar sesión
      const {id, rol} = nuevoUsuario
      req.session.userLogin = {
        id,
        first_name :first_name.trim(),
        rol
    }

      return res.redirect("/");

    }else{
        return res.render("/users/register",{
            old : req.body,
            errores : errors.mapped()
        });

    }
  },
login: (req, res) => {
    return res.render('users/login');
},
processLogin: (req, res) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){
        const{id,first_name,avatar,rol} =users.find(user =>user.email === req.body.email)
        
        req.session.user = {
            id,
            first_name,
            avatar,
            rol
        }

        if (req.body.remember) {
            res.cookie("paginasCookie", req.session.userlogin,{maxAge:1000*60*2});
        } 

        res.redirect('/')
} else {
    return res.sender("userlogin",{
        old:req.body,
        errors: errors.mapped(),
    })
}
},


}