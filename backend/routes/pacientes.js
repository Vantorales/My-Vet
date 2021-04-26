const { Router } = require ('express');

const{

    addPacientePost, 
    pacientesGet, 
    deletePaciente,
    getPaciente,
    updatePaciente

} = require('../controllers/pacienteControllers');

const router = Router ();

router.post('/api/addPaciente', addPacientePost );
router.get('/api/getPacientes', pacientesGet );
router.delete('/api/deletePaciente', deletePaciente );
router.get('/api/get-paciente/:id', getPaciente);
router.put('/api/updatePaciente', updatePaciente);

module.exports = router;