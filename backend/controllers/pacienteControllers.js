const { response, request } = require('express');

const Paciente = require('../models/paciente');


const addPacientePost = async(req, res = response) => {
    
    const { DNIdueño, nameDueño, nombreMascota, direccion, infoMascota, telefono, email } = req.body;
    const paciente = new Paciente({ DNIdueño, nameDueño, nombreMascota, direccion, infoMascota, telefono, email });

    // Guardar en BD
    await paciente.save();

    res.json({
        paciente,
        msg:"Paciente añadido."
    });
}

const pacientesGet = async(req = request, res = response) => {

    const Pacientes = await Paciente.find()

res.json({ Pacientes });
}


module.exports = {
    addPacientePost,
    pacientesGet
}