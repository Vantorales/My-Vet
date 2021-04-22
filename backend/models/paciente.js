const { Schema, model } = require('mongoose');

const PacienteSchema = Schema({
    DNIdueño: {
        type: String,
        required: [true, 'El DNI es obligatorio']    
    },
    nameDueño: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    nombreMascota: {
        type: String,
        required: [true, 'El nombre de mascota es obligatorio']
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es obligatoria']
    },
    infoMascota: {
        type: String,
        required: [true, 'La información es obligatoria']
    },
    telefono: {
        type: String,
        required: [true, 'El teléfono es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio']
    }
});

module.exports = model( 'Paciente', PacienteSchema );