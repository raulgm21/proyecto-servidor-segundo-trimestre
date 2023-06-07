//------------------------------------------------------------------------------------------------------//
//      ********          ******        **      **      **********      **********      ********        //
//      ********          ******        **      **      **********      **********      ********        //
//      **      **      **      **      **      **          **          **              **      **      //
//      **      **      **      **      **      **          **          **              **      **      //
//      **      **      **      **      **      **          **          ********        **      **      //
//      **      **      **      **      **      **          **          ********        **      **      //
//      ********        **      **      **      **          **          **              ********        //
//      ********        **      **      **      **          **          **              ********        //
//      **      **        ******          ******            **          **********      **      **      //
//      **      **        ******          ******            **          **********      **      **      //
//------------------------------------------------------------------------------------------------------//

    //----------------------------------------------------------------------//
    // El fichero router.js es uno de los puntos fuertes de Express, es     //
    // quien gestiona todo el enturado de nuestra Aplicación, todas las     //
    // rutas del enturador se encontrarán en el directorio 'views'          //
    // aplicación.                                                          //
    //----------------------------------------------------------------------//

    // Creamos una variable para el Framework Express, y otra variable para su módulo Router.
    
    var Controller = require('../controllers/controller'),
        express = require('express'),
        router  = express.Router()

// ********************************************************************* //
//                       Router de nuestra Aplicación                    //
// ********************************************************************* //

    router

        // ******************************* INDEX ******************************* //

        .get('/', Controller.index)

        .post('/home', Controller.session)

        .post('/correo', Controller.correo)

        .post('/registro',Controller.registro)
        
        // **************************** VISUALIZAR **************************** //

        .post('/elegirPais',Controller.elegirPais)

        .post('/elegirRegion', Controller.elegirRegion)

        .post('/elegirProvincia', Controller.elegirProvincia)

        // ***************************** API REST ***************************** //

        .post('/insertarRestaurante', Controller.insertarRestaurante)
    
        .put('/editarRestaurante', Controller.editarRestaurante)

        .delete('/eliminarRestaurante', Controller.eliminarRestaurante)




        // Uso del Error 404
        .use(Controller.error404)

// ********************************************************************* //
//                         Exportación del Módulo.                       //
// ********************************************************************* //

module.exports = router