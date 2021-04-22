const express = require('express');
const cors = require('cors');
const path = require("path");

const { dbConnection } = require('./database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        // this.usuariosPath = '/api/usuarios';

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi app
        this.routes();

    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {
    console.log(__dirname,"test");
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static(path.join(__dirname, "../front")) );

    }

    routes(){
        this.app.use( require('./routes/usuarios') );
        this.app.use( require('./routes/pacientes') );
    }
    
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
