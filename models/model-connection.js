// Lógica para conexión a Mongo

var mongoose = require('mongoose'),
    random   = require('mongoose-query-random') 

    // Crear Coleccion
    Schema = new mongoose.Schema({

        // ---> Parte de Usuarios <--- //
        
        nombre          : "string",
        password        : "string",
        edad            : "string",
        correo          : "string",
        rol             : "string",


        // ---> Parte de Restaurantes <--- //
        
        region              : "string",
        ambiente            : "string",
        caracteristicas     : "string",
        ciudad              : "string",
        comida              : "string",
        direccion           : "string",
        idioma              : "string",
        imagen_restaurante  : "string",
        nombre_restaurante  : "string",
        pais                : "string",
        precio              : "string",
        provincia           : "string",
        rango_precio        : "string",
        reviews             : "string",
        servicio            : "string",
        sin_gluten          : "string",
        vegetariano         : "string",
        vegano              : "string",
        awards              : "string"
        
    },
    {   // Nombre Coleccion
        collection : "restaurantes"
    })

    // Conexión con Mongo
    const conn = mongoose.createConnection(`mongodb://127.0.0.1:27017/RESTAURANTES`)

    const RestauranteModel = conn.model("restaurantes", Schema)
    
    // Exportamos el Módulo
module.exports = RestauranteModel