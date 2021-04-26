const { Router } = require('express');


const { usuariosGet,
        usuariosPut,
        verificarUsuario,
        usuariosPost,
        usuariosDelete

} = require('../controllers/usuarioController');
const { getInitialPage} = require('../controllers/pagesControllers');
const router = Router();


router.get('/', getInitialPage );
router.get('/api/get-usuarios', usuariosGet );
router.post('/api/login-user', verificarUsuario );
router.put('/api/put-usuarios/:id', usuariosPut );
router.post('/api/nuevo-usuario',usuariosPost );
router.delete('/api/delete-usuario',usuariosDelete );



module.exports = router;