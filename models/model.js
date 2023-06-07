// Requiere la conexión a la BDD

var conn = require('./model-connection'),
    Model = () => {} 

// ******************************************************************************************** //
//                                           Mostrar Todos
// ******************************************************************************************** //

    // ---------------------------------------------------------- //
    // Nos muestra los 100 restaurantes para la sección del admin, 
    // de forma aleatoria.
    // ---------------------------------------------------------- //
    
    Model.mostrarTodos = (cb) => {

        conn
            
            .find().random(100, true, function(err, docs) {
                if(err) throw err
                cb(docs)
            })
            
    }

// ******************************************************************************************** //
//                                           USER
// ******************************************************************************************** //

    // ---------------------------------------------------------- //
    // Nos consulta el correo que le pasamos por formulario. Sirve
    // para mandar correos, inicio de sesión y registro.
    // ---------------------------------------------------------- //

    Model.correo = (data, cb) => {
            
        conn
            .findOne({
                correo   : data.correo,
            })
            .exec((err, docs) => {
                if(err) throw err
                cb(docs)
            })
    }

    // ---------------------------------------------------------- //
    // Nos añade un nuevo usuario en la BDD.
    // ---------------------------------------------------------- //

    Model.registro = (data, cb) => {
        
        conn
            .create(
            {
                correo   : data.correo,
                nombre   : data.nombre,
                password : data.contra,
                edad     : data.edad,
                rol      : 'user'
            }, 
            (err) => {
                if(err) throw err
                cb()
            })
            
    }

// ******************************************************************************************** //
//                                            VISUALIZAR
// ******************************************************************************************** //

    // ------------------------------------------------------ //
    // Funcionalidad para sacarnos las Regiones de un País seleccionado.
    // ------------------------------------------------------ //

    Model.elegirPais = (data, cb) => {
        
        conn
            .distinct('region', { pais: data.pais }, function (err, region) {
                if (err) {
                console.log(err);
                } else {
                console.log(region);
                cb(region)
                }
          });
    }

    // ------------------------------------------------------ //
    // Funcionalidad para sacarnos las Provincias de una Región seleccionada.
    // ------------------------------------------------------ //

    Model.elegirRegion = (data, cb) => {
            
        conn
            .distinct('provincia', { pais: data.pais, region : data.region }, function (err, provincias) {
                if (err) {
                console.log(err);
                } else {
                console.log(provincias);
                cb(provincias)
                }
          });
    }

    // ------------------------------------------------------ //
    // Funcionalidad para sacarnos la tabla dependiente de la Provincia y Ciudad
    // ------------------------------------------------------ //

    Model.elegirProvincia = (data, cb) => {
        
        const puebloBuscado = data.ciudad + " " + data.pais;
        const regexBusqueda = new RegExp(puebloBuscado, "i");

        conn
            .find(
                { pais: data.pais, region : data.region, provincia : data.provincia, direccion : { $regex: regexBusqueda } }
            )
            .exec((err, docs) => {
                
                if(err) throw err
                cb(docs)
            })

    }

// ******************************************************************************************** //
//                                            API REST
// ******************************************************************************************** //

    // ------------------------------------------------------ //
    // Funcionalidad nos inserta un restaurante de la Base de Datos
    // ------------------------------------------------------ //

    Model.insertarRestaurante = (data, cb) => {
        
        conn
            .create(
            {
                pais                : data.pais,
                region              : data.region,
                provincia           : data.provincia,
                direccion           : data.direccion + " " + data.pais,
                nombre_restaurante  : data.nombre_restaurante,
                comida              : data.comida,
                servicio            : data.servicio,
                precio              : data.precio,
                ambiente            : data.ambiente,
                precio              : data.precio,
                vegetariano         : data.vegetariano,
                vegano              : data.vegano,
                sin_gluten          : data.sin_gluten,
            }, 
            (err) => {
                if(err) throw err
                cb()
            })
            
    }

    // ------------------------------------------------------ //
    // Funcionalidad nos borra un restaurante de la Base de Datos
    // ------------------------------------------------------ //

    Model.eliminarRestaurante= (data, cb) => {
            
        conn
            .findOneAndDelete(
                {
                    direccion : data.direccion
                }, 
                (err, docs) =>{
                if(err) throw err
                cb()
            })
    }

    // ------------------------------------------------------ //
    // Funcionalidad nos edita un restaurante de la Base de Datos
    // ------------------------------------------------------ //

    Model.editarRestaurante= (data, cb) => {
            
        conn
            .findOneAndUpdate(
                {
                    _id : data._id
                },

                {
                    nombre_restaurante  : data.nombre_restaurante,
                    comida              : data.comida,
                    servicio            : data.servicio,
                    ambiente            : data.ambiente,
                    precio              : data.precio,
                    vegetariano         : data.vegetariano,
                    vegano              : data.vegano,
                    sin_gluten          : data.sin_gluten
                }, 

                (err, docs) =>{
                if(err) throw err
                cb()
            })
    }

// ******************************************************************************************** //
//                                      Exportación del Modulo
// ******************************************************************************************** //

module.exports = Model