const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const {dbConnection} = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            uploads: '/api/uploads',
            extractions: '/api/extractions',

        }

        this.middlewares();

        this.routes();

        this.dbConnect();

    }

    async dbConnect() {
        await dbConnection();
    }

    middlewares() {
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );

        this.app.use( fileupload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));
    }

    routes() {
        this.app.use( this.paths.uploads, require('../routes/uploads') );
        this.app.use( this.paths.extractions, require('../routes/extractions') );

    }

    listen() {
        this.app.listen( this.port, () => {
            console.info(`Server is running on port ${this.port}`);
        })
    }

}


module.exports = Server;


