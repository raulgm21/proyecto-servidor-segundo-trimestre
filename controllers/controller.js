// Requiere la Lógica del Modelo para establecer conexión a la BDD

var Model = require('../models/model'),
    Controller = () => {} 

    const bcrypt = require('bcrypt');               // Módulo para encriptación de contraseñas
    const nodemailer = require('nodemailer');       // Módulo para mandar correos

// ******************************************************************************************** //
//                                             Modelos
// ******************************************************************************************** //

    // ------------------------------------------------------ //
    // Modelo de Inicio de sesión mediante el Login:
    //      -*-> Acceso Mediante Admin
    //      -*-> Acceso Mediante User
    //      -*-> Acceso Incorrecto
    // ------------------------------------------------------ //

    Controller.session = (req, res, next) => {
   
        // Recoge los valores del formulario.
        sesion = {
            correo   : req.body.correo,
            password : req.body.password
        }

        Model.correo(sesion , (docs) => {
            
            // Si no existe en la BDD
            if(docs != null){

                // Obtengo las contraseña de la BDD
                var contraseña = docs.password;

                // Comparo la contraseña encriptada con la contraseña del formulario
                bcrypt.compare(req.body.password, contraseña, (err, result) => {

                    if(err){
                        console.log(err);

                    }else if (result) {

                        // Recoge la Información de los 100 Restaurantes, y del Usuario
                        Model.mostrarTodos((restaurantes) => {
                                
                            let locals = {
                                title : 'Ur-Rest ~ Home',
                                description : '',
                                usuario : docs,
                                restaurantes : restaurantes
                            }
                            
                            res.render('home', locals)
                                    
                        })
                            

                    }else{
                        // Contraseñas no Coinciden
                        res.render('index')
                    }

                })

            }else{
                // No existe en la BDD
                res.render('index')
            }

        })
        
    }

    // ------------------------------------------------------ //
    // Funcionalidad para mandar correos en la sección Contáctanos.
    // ------------------------------------------------------ //

    Controller.correo = (req, res, next) => {

        const datos = req.body;
           
        var correo = datos.correo.trim();
        var asunto = datos.asunto.trim();
        var descripcion = datos.descripcion.trim();
        
        // Verificación desde servidor
        if(correo.length != 0 && asunto.length != 0 && descripcion.length != 0){

            Model.correo(datos , (docs) => {
                
                console.log(docs)
                if(docs != null){
                    
                    res.send("Existe");

                    const transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'raulgomeeez21@gmail.com',
                            pass: 'frnslfimulbxfdbr'
                        }
                    });
                    
                    const mailOptions = {
                        from: 'raulgomeeez21@gmail.com',
                        to: 'raulgomeeez21@gmail.com',
                        subject: `Ur-Rest: ${correo} - ${asunto}`,
                        html: 
                        `
                        <h1>Más información sobre el correo recibido:</h1> 
                        ${descripcion}
                        `
                    };
        
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Correo electrónico enviado: ' + info.response);
                            
                        }
                    });


                }else{
                    res.send("No existe");
                }
                
            })

        }else{
            res.send("No existe");
        }
 
    }

    // ------------------------------------------------------ //
    // Funcionalidad para registro en la BBD, de un correo que no existe.
    // ------------------------------------------------------ //

    Controller.registro = (req, res, next) => {

        const datos = req.body;
        
        var correo = datos.correo.trim();
        var nombre = datos.nombre.trim();
        var contra = datos.contra.trim();
        var edad   = datos.edad.trim();

        const salting = 10;

        bcrypt.hash(contra,salting, (err,hashedContra) => {

            if(err){
                console.log(err);
            }else{
                console.log("Hash: " + hashedContra)
                
                // Objeto Actualizado
                datosActu = {
                    correo : correo,
                    contra : hashedContra,
                    nombre : nombre,
                    edad   : edad,
                }

                function validarGmail(correo) {
                    var regexGmail = /^[\w.-]+@gmail\.com$/;
                    return regexGmail.test(correo);
                }
        
                // Validando desde Servidor
                if(validarGmail(correo) && correo.length > 12 && nombre.length >= 3 && contra.length >= 8 && edad > 0 && edad < 120){
        
                
                    Model.correo(datosActu , (docs) => {
                        
                        console.log(docs)
                        // No existe el correo en la BDD, por lo cual es correcto
                        if(docs == null){
        
                            Model.registro(datosActu, () => {
                                res.send("Correcto");
                               
                            }) 
        
                        }else{
                            res.send("Error");
                        }
                        
                    })
        
                }else{
                    var modal = document.getElementById("modal_registro");
                    modal.close();
                    modal.showModal();
                }
            }
        })

    }

    // ------------------------------------------------------ //
    // Funcionalidad para sacarnos las Regiones de un País seleccionado.
    // ------------------------------------------------------ //
    
    Controller.elegirPais = (req, res, next) => {

        const datos = req.body;
        
        var pais = datos.pais.trim();

        OBJDATOS = {
            pais : pais
        }

        Model.elegirPais(OBJDATOS , (docs) => {
            
            res.send(docs);

        })

    }

    // ------------------------------------------------------ //
    // Funcionalidad para sacarnos las Provincias de una Región seleccionada.
    // ------------------------------------------------------ //

    Controller.elegirRegion = (req, res, next) => {
        
        const datos = req.body;
        
        var pais = datos.pais.trim();
        var region = datos.region.trim();

        
        OBJDATOS = {
            pais : pais,
            region : region
        }

        Model.elegirRegion(OBJDATOS , (docs) => {
            
            res.send(docs);

        })

    }

    // ------------------------------------------------------ //
    // Funcionalidad para sacarnos la tabla dependiente de la Provincia y Ciudad
    // ------------------------------------------------------ //

    Controller.elegirProvincia = (req, res, next) => {
        
        const datos = req.body;
       
        var pais = datos.pais.trim();
        var region = datos.region.trim();
        var provincia = datos.provincia.trim();
        var ciudad = datos.ciudad.trim();
        
        OBJDATOS = {
            pais : pais,
            region : region,
            provincia : provincia,
            ciudad : ciudad
        }

        Model.elegirProvincia(OBJDATOS , (docs) => {
            
            res.send(docs);

        })

    }

    // ------------------------------------------------------ //
    // Funcionalidad nos borra un restaurante de la Base de Datos
    // ------------------------------------------------------ //

    Controller.eliminarRestaurante = (req, res, next) => {
        
        const datos = req.body;
       
        var direccion = datos.direccion.trim();
        
        OBJDATOS = {
            direccion : direccion
        }

        Model.eliminarRestaurante(OBJDATOS , (docs) => {
            
            res.send("Borrado");

        })

    }

    // ------------------------------------------------------ //
    // Funcionalidad nos inserta un restaurante de la Base de Datos
    // ------------------------------------------------------ //

    Controller.insertarRestaurante = (req, res, next) => {

        const datos = req.body;

        var pais               = datos.pais.trim();
        var region             = datos.region.trim();
        var provincia          = datos.provincia.trim();
        var ciudad             = datos.ciudad.trim();
        var nombre_restaurante = datos.nombre_restaurante.trim();
        var comida             = datos.comida.trim();
        var servicio           = datos.servicio.trim();
        var precio             = datos.precio.trim();
        var ambiente           = datos.ambiente.trim();
        var vegetariano        = datos.vegetariano.trim();
        var vegano             = datos.vegano.trim();
        var sin_gluten         = datos.sin_gluten.trim();
        
        
        OBJDATOS = {

            pais                : pais,
            region              : region,
            provincia           : provincia,
            direccion           : ciudad,
            nombre_restaurante  : nombre_restaurante,
            comida              : comida,
            servicio            : servicio,
            ambiente            : ambiente,
            precio              : precio,
            vegetariano         : vegetariano,
            vegano              : vegano,
            sin_gluten          : sin_gluten

        }

        if
        (
            ciudad.length != 0 && nombre_restaurante.length != 0 && comida >= 0 && comida <= 5 && servicio >= 0 && servicio <= 5 &&
            ambiente >= 0 && ambiente <= 5 && precio >= 0 && precio <= 5 && vegetariano == "Y" || vegetariano == "N" &&
            vegano == "Y" || vegano == "N" && sin_gluten == "Y" || sin_gluten == "N"
        )
            {
                Model.insertarRestaurante(OBJDATOS , (docs) => {
            
                    res.send("Correcto");
        
                })

            }
        
        else{
            res.send("Error");
        }
        
    }

    // ------------------------------------------------------ //
    // Funcionalidad nos edita un restaurante de la Base de Datos
    // ------------------------------------------------------ //

    Controller.editarRestaurante = (req, res, next) => {

        const datos = req.body;

        var _id                = datos._id.trim();
        var nombre_restaurante = datos.nombre_restaurante.trim();
        var comida             = datos.comida.trim();
        var servicio           = datos.servicio.trim();
        var precio             = datos.precio.trim();
        var ambiente           = datos.ambiente.trim();
        var vegetariano        = datos.vegetariano.trim();
        var vegano             = datos.vegano.trim();
        var sin_gluten         = datos.sin_gluten.trim();

        OBJDATOS = {

            _id                 : _id,
            nombre_restaurante  : nombre_restaurante,
            comida              : comida,
            servicio            : servicio,
            ambiente            : ambiente,
            precio              : precio,
            vegetariano         : vegetariano,
            vegano              : vegano,
            sin_gluten          : sin_gluten

        }

        if
        (
            nombre_restaurante.length != 0 && comida >= 0 && comida <= 5 && servicio >= 0 && servicio <= 5 &&
            ambiente >= 0 && ambiente <= 5 && precio >= 0 && precio <= 5 && vegetariano == "Y" || vegetariano == "N" &&
            vegano == "Y" || vegano == "N" && sin_gluten == "Y" || sin_gluten == "N"
        )
            {
                Model.editarRestaurante(OBJDATOS , (docs) => {
            
                    res.send("Correcto");
        
                })

            }
        
        else{
            res.send("Error");
        }
    }

// ******************************************************************************************** //
//                                              Vistas
// ******************************************************************************************** //

    // ------------------------------------------------------ //
    // Vista del Index, que es la vista por defecto.
    // ------------------------------------------------------ //
    
    Controller.index = (req, res, next) => {
        
        let locals = {
            title : 'Ur-Rest ~ Inicio',
            description : ''
        }
        
        res.render('index', locals)
                
    }

    // ------------------------------------------------------ //
    // Vista del Error, que es cuando no se produce un error404
    // ------------------------------------------------------ //
    
    Controller.error404 = (req, res, next) => {

        // Declaración del Objeto Error, es un módulo de Node.js
        let error  = new Error(),
        locals = {

            title : 'Página no Encontrada',
            error : error

        }
        // Cómo el error es un NOT_FOUND deberemos de poner 404
        error.status = 404
        
        res.render('error', locals)

    }


// ******************************************************************************************** //
//                                      Exportación del Modulo
// ******************************************************************************************** //

module.exports = Controller