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

    const pacientes = await Paciente.find()

res.json({ pacientes });
}

const deletePaciente =  async(req, res = response) =>{
    const { id } = req.body;
    const paciente = await Paciente.findByIdAndDelete(id);
    res.json(paciente);
}

const getPaciente = async(req, res = response) =>{

    const { id } = req.params;
    const pacientes = await Paciente.find(id);
    res.json(pacientes);
}

const updatePaciente = async(req, res) => {

    const { __v,id, ...resto} = req.body;
    res.json(resto);
    const paciente = await Paciente.findByIdAndUpdate( id, resto)
}

module.exports = {
    addPacientePost,
    pacientesGet,
    deletePaciente,
    getPaciente,
    updatePaciente
}