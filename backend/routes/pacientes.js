const { Router } = require ('express');

const{

    addPacientePost, pacientesGet

} = require('../controllers/pacienteControllers');

const router = Router ();

router.post('/api/addPaciente', addPacientePost );
router.get('/api/getPaciente', pacientesGet );

module.exports = router;