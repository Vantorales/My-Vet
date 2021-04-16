const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario');



const usuariosGet = async(req = request, res = response) => {

        const Usuarios = await Usuario.find()

    res.json({ Usuarios });
}

const usuariosPost = async(req, res = response) => {
    
    const { nombre, correo, password, especialidad } = req.body;
    const usuario = new Usuario({ nombre, correo, password, especialidad});

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await usuario.save();

    res.json({
        usuario,
        msg:"Usuario registrado."
    });
}

const verificarUsuario = async(req, res = response) => {
    
    const {correo, password} = req.body;
    const dataUser = await Usuario.find({correo:correo});

    console.log(dataUser);

    //estas condiciones dicen que tienen que ser distinto de null y de vacio
    if(dataUser !== null || dataUser !== "")
    {
        bcryptjs.compare(password, dataUser[0].password).then(function(result) {
            if(result == true){
                res.json({
                usuarioverificado:true,
                nombre: dataUser[0].nombre,
                msg:"Login success."
            });
            } else{
                res.json({
                    usuarioverificado:false,
                    nombre:"",
                    msg:"Login fail. Incorrect password."
                });
            }
        })
        // if(password === dataUser.password){
        //     res.json({
        //         usuarioverificado:true,
        //         msg:"Login success."
        //     });
        // } else{
        //     res.json({
        //         usuarioverificado:false,
        //         msg:"Login fail. Incorrect password."
        //     });
        // }
    } else{
        res.json({
            usuarioverificado:false,
            msg:"Login fail. User not found."
        })
    }

    // Encriptar la contraseña
    // const salt = bcryptjs.genSaltSync();
    // usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    // await usuario.save();

    // res.json({
    //     usuario,
    //     msg:"Usuario registrado."
    // });
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, correo, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json(usuario);
}

const usuariosDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );


    res.json(usuario);
}




module.exports = {
    usuariosGet,
    usuariosPost,
    verificarUsuario,
    usuariosPut,
    usuariosDelete,
}