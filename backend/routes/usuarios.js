const { Router } = require('express');


const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,

} = require('../controllers/usuarioController');
const { getInitialPage} = require('../controllers/pagesControllers');
const router = Router();


router.get('/', getInitialPage );
router.get('/api/get-usuarios', usuariosGet );
router.put('/api/put-usuarios/:id', usuariosPut );
router.post('/api/nuevo-usuario',usuariosPost );
router.delete('/api/delete-usuario/:id',usuariosDelete );

module.exports = router;