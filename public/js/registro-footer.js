// **************************************************** //
// ****************** registro.js ********************* //
// **************************************************** //

    // ------------------------------------------------------- //
    // Este archivo contiene todos los eventos producidos a
    // la hora deL REGISTRO
    // ------------------------------------------------------- //

// **************************************************** //
// ********************* footer *********************** //
// ***************************************************** //

    // ------------------------------------------------------- //
    // Este archivo contiene todos los eventos producidos a
    // la hora de actuar con el FOOTER
    // ------------------------------------------------------- //

    window.onload = () => {

        document.getElementById("texto-registro").addEventListener("click", () => {
            
            
            // Creación del Modal
            let titulo = document.createElement("h1");
            titulo.setAttribute("id","titulo_modal");
            titulo.innerHTML = " Registro ";

            var modal = document.createElement("dialog");
            modal.setAttribute("id","modal_registro");
            BODY.appendChild(modal);
            
            let atras_modal = document.createElement("img");
            atras_modal.setAttribute("src","../img/atras.png");
            atras_modal.setAttribute("id","atras_modal");
            atras_modal.innerHTML = "Atrás";
            
            modal.showModal();
            
            BODY.style.overflowY = "hidden";
            BODY.style.opacity = "0.1";

            modal.appendChild(titulo);

            var texto = document.createElement("p");
            texto.setAttribute("id","texto_contacto");
            texto.innerHTML = "¡ Rellene este Simple formulario para así poder acceder a la Página !";

            modal.appendChild(texto);

            var formulario = document.createElement("form");
            formulario.setAttribute("id","formulario_registro");
            modal.appendChild(formulario);

            // Correo
            var label1 = document.createElement("label");
            label1.setAttribute("id","label_correo_registro");
            label1.setAttribute("class","label_registro");
            label1.innerHTML = "Correo"
            formulario.appendChild(label1);

            var input1 = document.createElement("input");
            input1.setAttribute("type","text");
            input1.setAttribute("name","correo");
            input1.setAttribute("id","registro_correo");
            input1.setAttribute("class","input_registro");
            input1.setAttribute("placeholder","Inserte su correo.")
            formulario.appendChild(input1);

            // Nombre
            var label2 = document.createElement("label");
            label2.setAttribute("id","label_nombre_registro");
            label2.setAttribute("class","label_registro");
            label2.innerHTML = "Nombre"
            formulario.appendChild(label2);

            var input2 = document.createElement("input");
            input2.setAttribute("type","text");
            input2.setAttribute("name","nombre");
            input2.setAttribute("id","registro_nombre");
            input2.setAttribute("class","input_nombre");
            input2.setAttribute("placeholder","Inserte su nombre. (min 3 caracteres)")
            formulario.appendChild(input2);

            // Password
            var label3 = document.createElement("label");
            label3.setAttribute("id","label_contraseña_registro");
            label3.setAttribute("class","label_registro");
            label3.innerHTML = "Contraseña"
            formulario.appendChild(label3);

            var input3 = document.createElement("input");
            input3.setAttribute("type","password");
            input3.setAttribute("name","password");
            input3.setAttribute("id","registro_contraseña");
            input3.setAttribute("class","input_contraseña");
            input3.setAttribute("placeholder","Inserte su contraseña. (min 8 caracteres)")
            formulario.appendChild(input3);

            // Edad
            var label4 = document.createElement("label");
            label4.setAttribute("id","label_edad_registro");
            label4.setAttribute("class","label_registro");
            label4.innerHTML = "Edad"
            formulario.appendChild(label4);

            var input4 = document.createElement("input");
            input4.setAttribute("type","number");
            input4.setAttribute("name","edad");
            input4.setAttribute("id","registro_edad");
            input4.setAttribute("class","input_edad");
            input4.setAttribute("placeholder","Inserte su edad.")
            formulario.appendChild(input4);

            // Enviar
            var submit = document.createElement("input");
            submit.setAttribute("type","submit");
            submit.setAttribute("id","submit_contacto");
            submit.setAttribute("class","input_contacto");
            submit.value = "Registrarse";
            formulario.appendChild(submit);

            let imagen = document.createElement("img");
            imagen.setAttribute("id","imagen_contacto");
            imagen.style.height = "490px";
            imagen.style.position = "absolute";
            imagen.style.left = "47%";
            imagen.setAttribute("src","../img/arco_triunfo.png")
            modal.appendChild(imagen);

            // Salir del Modal
            modal.appendChild(atras_modal);
            document.getElementById("atras_modal").addEventListener("click",() => { 
                modal.close(); 
                BODY.style.overflowY = "visible";
                BODY.style.opacity = "1";
                modal.removeChild(atras_modal);
                BODY.removeChild(modal);
                
            })

            var formu = document.getElementById("formulario_registro");

            formu.onsubmit = e => {

                e.preventDefault();

                // Inputs
                var correo = document.getElementById("registro_correo").value;
                var nombre = document.getElementById("registro_nombre").value;
                var contra = document.getElementById("registro_contraseña").value;
                var edad   = document.getElementById("registro_edad").value;

                // Labels
                var label_correo = document.getElementById("label_correo_registro");
                var label_nombre = document.getElementById("label_nombre_registro");
                var label_contra = document.getElementById("label_contraseña_registro");
                var label_edad   = document.getElementById("label_edad_registro");

                function validarGmail(correo) {
                    var regexGmail = /^[\w.-]+@gmail\.com$/;
                    return regexGmail.test(correo);
                }

                // xxx@gmail.com
                if(validarGmail(correo) && correo.length > 12){
                    // Bien
                    label_correo.style.background = "green";
                    label_correo.style.color = "white";
                    label_correo.style.fontWeight = "bold";
                }else{
                    // Mal
                    label_correo.style.background = "red";
                    label_correo.style.color = "white";
                    label_correo.style.fontWeight = "bold";
                }
                
                if(nombre.length >= 3){
                    // Bien
                    label_nombre.style.color = "green";
                    label_nombre.style.fontWeight = "bold";
                }else{
                    // Mal
                    label_nombre.style.color = "red";
                    label_nombre.style.fontWeight = "bold";
                    let input = document.getElementById("registro_nombre");
                    input.innerHTML = "";
                }

                if(contra.length >= 8){
                    // Bien
                    label_contra.style.color = "green";
                    label_contra.style.fontWeight = "bold";
                }else{
                    // Mal
                    label_contra.style.color = "red";
                    label_contra.style.fontWeight = "bold";
                    let input = document.getElementById("registro_contraseña");
                    input.innerHTML = "";
                }

                if(edad > 0 && edad < 120){
                    // Bien
                    label_edad.style.color = "green";
                    label_edad.style.fontWeight = "bold";
                }else{
                    // Mal
                    label_edad.style.color = "red";
                    label_edad.style.fontWeight = "bold";
                    let input = document.getElementById("registro_edad");
                    input.innerHTML = "";
                }

                // Registrarse
                if(validarGmail(correo) && correo.length > 12 && nombre.length >= 3 && contra.length >= 8 && edad > 0 && edad < 120){
                   
                    DATOS = {
                        correo : correo,
                        nombre : nombre,
                        contra : contra,
                        edad   : edad
                    }

                    fetch('/registro', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(DATOS)
                    })
                    
                    .then(response => {
    
                        if (response.ok){return response.text();}
                        else{console.log("Error");}
                          
                      })
                      
                    .then(textoRespuesta => {
    
                        // Correo Existe en la BDD
                        if (textoRespuesta === 'Correcto') {
                          
                            var enviado = document.createElement("p");
                            enviado.innerHTML = "¡Se has registrado con éxito!"
                            enviado.setAttribute("id","correo_enviado");
                            enviado.style.color = "green"
                            enviado.style.position = "relative";
                            enviado.style.top = "24px";
                            enviado.style.left = "180px";
                            enviado.style.display = "block";
                            enviado.style.textDecoration = "underline";
                            formulario.appendChild(enviado);
    
                            var submit = document.getElementById("submit_contacto");
                            submit.style.pointerEvents = "none";
                            submit.style.opacity = "0.5";
                            submit.style.cursor = "crosshair";
                        }
                        // El correo Existe en la BDD 
                        else {

                            label_correo.style.color = "red";
                            label_correo.style.fontWeight = "bold";
                            let input = document.getElementById("registro_correo");
                            input.innerHTML = "";
                        }

                      })
    
                    .catch(error => {
                    console.error('Error al enviar los datos:' + error);
                    });

                }

            }

        })

        var BODY = document.querySelector("body");

        // --------------- EVENTO Acerca de ------------------ //
        document.getElementsByClassName("acerdade")[0].addEventListener("click", () => {

            // Insercción del Modal
            var modal = document.createElement("dialog");
            modal.setAttribute("id","modal_acercade");
            BODY.appendChild(modal);

            let titulo = document.createElement("h1");
            titulo.setAttribute("id","titulo_modal");
            titulo.innerHTML = " Acerda de ";

            let texto = document.createElement("p");
            texto.setAttribute("id","ACERCADE_parrafo_modal");
            texto.innerHTML = " Soy Raúl, tengo 20 años, soy estudiante de 2º año de Desarrollo de Aplicaciones Web. Estos son algunos de mis proyectos realizados este año:"

            var imagen1 = document.createElement("img");
            imagen1.setAttribute("id","proyecto1");
            imagen1.setAttribute("class","acercade_img");
            imagen1.setAttribute("src","../img/proyecto1.png");

            var imagen2 = document.createElement("img");
            imagen2.setAttribute("id","proyecto2");
            imagen2.setAttribute("class","acercade_img");
            imagen2.setAttribute("src","../img/proyecto2.png");

            var imagen3 = document.createElement("img");
            imagen3.setAttribute("id","proyecto3");
            imagen3.setAttribute("class","acercade_img");
            imagen3.setAttribute("src","../img/proyecto3.png");

            var imagen4 = document.createElement("img");
            imagen4.setAttribute("id","proyecto4");
            imagen4.setAttribute("class","acercade_img");
            imagen4.setAttribute("src","../img/proyecto4.png");

            let atras_modal = document.createElement("img");
            atras_modal.setAttribute("src","../img/atras.png");
            atras_modal.setAttribute("id","atras_modal");
            atras_modal.innerHTML = "Atrás";

            modal.showModal();
            
            BODY.style.overflowY = "hidden";
            BODY.style.opacity = "0.1";

            modal.appendChild(titulo);
            modal.appendChild(texto);

            modal.appendChild(imagen1);
            modal.appendChild(imagen2);
            modal.appendChild(imagen3);
            modal.appendChild(imagen4);

            modal.appendChild(atras_modal);

            // Salir de Acerca de

            document.getElementById("atras_modal").addEventListener("click",() => { 
                modal.close(); 
                BODY.style.overflowY = "visible";
                BODY.style.opacity = "1";
                modal.removeChild(atras_modal);
                BODY.removeChild(modal);
                
            })

        });

        // --------------- EVENTO Terminos y Condiciones ------------------ //
        document.getElementsByClassName("terminosycondiciones")[0].addEventListener("click",() => {

            // Creación del Modal
            let titulo = document.createElement("h1");
            titulo.setAttribute("id","titulo_modal");
            titulo.innerHTML = " Terminos y Condiciones ";

            var modal = document.createElement("dialog");
            modal.setAttribute("id","modal_terminoscondiciones");
            BODY.appendChild(modal);
            
            let atras_modal = document.createElement("img");
            atras_modal.setAttribute("src","../img/atras.png");
            atras_modal.setAttribute("id","atras_modal");
            atras_modal.innerHTML = "Atrás";

            modal.showModal();
            
            BODY.style.overflowY = "hidden";
            BODY.style.opacity = "0.1";

            modal.appendChild(titulo);

            // Cargar el Contenido del Fichero
            fetch('../privacity/terminos_condiciones.txt',{})

                .then (respuesta => respuesta.text())

                .then ((respuestaJSON) => {
                
                    let texto = document.createElement("p");
                    texto.setAttribute("id","textoFICHEROS_modal")
                    texto.innerHTML = respuestaJSON;
                    modal.appendChild(texto);

                })
                                
                .catch (() => {
                    console.log("@Fetch : Error ")
                })

            modal.appendChild(atras_modal);

            // Salir del Modal
            document.getElementById("atras_modal").addEventListener("click",() => { 
                modal.close(); 
                BODY.style.overflowY = "visible";
                BODY.style.opacity = "1";
                modal.removeChild(atras_modal);
                BODY.removeChild(modal);
                
            })

        });

        // --------------- EVENTO Privacidad de Datos ------------------ //
        document.getElementsByClassName("privacidaddedatos")[0].addEventListener("click",() => {

            // Creación del Modal
            let titulo = document.createElement("h1");
            titulo.setAttribute("id","titulo_modal");
            titulo.innerHTML = " Privacidad de Datos ";

            var modal = document.createElement("dialog");
            modal.setAttribute("id","modal_privacidaddatos");
            BODY.appendChild(modal);
            
            let atras_modal = document.createElement("img");
            atras_modal.setAttribute("src","../img/atras.png");
            atras_modal.setAttribute("id","atras_modal");
            atras_modal.innerHTML = "Atrás";

            modal.showModal();
            
            BODY.style.overflowY = "hidden";
            BODY.style.opacity = "0.1";

            modal.appendChild(titulo);

            // Carga el fichero.txt
            fetch('../privacity/privacidad_datos.txt',{})

                .then (respuesta => respuesta.text())

                .then ((respuestaJSON) => {
                
                    let texto = document.createElement("p");
                    texto.setAttribute("id","textoFICHEROS_modal")
                    texto.innerHTML = respuestaJSON;
                    modal.appendChild(texto);

                })
                                
                .catch (() => {
                    console.log("@Fetch : Error ")
                })

            modal.appendChild(atras_modal);

            // Cerrar el Modal
            document.getElementById("atras_modal").addEventListener("click",() => { 
                modal.close(); 
                BODY.style.overflowY = "visible";
                BODY.style.opacity = "1";
                modal.removeChild(atras_modal);
                BODY.removeChild(modal);
                
            })

        });

        // --------------- EVENTO Aviso Legal ------------------ //
        document.getElementsByClassName("avisolegal")[0].addEventListener("click",() => {

            // Creación del Modal
            let titulo = document.createElement("h1");
            titulo.setAttribute("id","titulo_modal");
            titulo.innerHTML = " Aviso Legal ";

            var modal = document.createElement("dialog");
            modal.setAttribute("id","modal_avisolegal");
            BODY.appendChild(modal);
            
            let atras_modal = document.createElement("img");
            atras_modal.setAttribute("src","../img/atras.png");
            atras_modal.setAttribute("id","atras_modal");
            atras_modal.innerHTML = "Atrás";

            modal.showModal();
            
            BODY.style.overflowY = "hidden";
            BODY.style.opacity = "0.1";

            modal.appendChild(titulo);

            // Lectura del fichero.txt
            fetch('../privacity/aviso_legal.txt',{})

                .then (respuesta => respuesta.text())

                .then ((respuestaJSON) => {
                
                    let texto = document.createElement("p");
                    texto.setAttribute("id","textoFICHEROS_modal")
                    texto.innerHTML = respuestaJSON;
                    modal.appendChild(texto);

                })
                                
                .catch (() => {
                    console.log("@Fetch : Error ")
                })

            modal.appendChild(atras_modal);

            // Salir del Modal
            document.getElementById("atras_modal").addEventListener("click",() => { 
                modal.close(); 
                BODY.style.overflowY = "visible";
                BODY.style.opacity = "1";
                modal.removeChild(atras_modal);
                BODY.removeChild(modal);
                
            })

            
        });

        // --------------- EVENTO Contactanos & Correos ------------------ //
        document.getElementsByClassName("contactanos")[0].addEventListener("click",() => {

            // Creación del Modal
            let titulo = document.createElement("h1");
            titulo.setAttribute("id","titulo_modal");
            titulo.innerHTML = " Contáctanos ";

            var modal = document.createElement("dialog");
            modal.setAttribute("id","modal_avisolegal");
            BODY.appendChild(modal);
            
            let atras_modal = document.createElement("img");
            atras_modal.setAttribute("src","../img/atras.png");
            atras_modal.setAttribute("id","atras_modal");
            atras_modal.innerHTML = "Atrás";
            

            modal.showModal();
            
            BODY.style.overflowY = "hidden";
            BODY.style.opacity = "0.1";

            modal.appendChild(titulo);

            var texto = document.createElement("p");
            texto.setAttribute("id","texto_contacto");
            texto.innerHTML = "¡Tus comentarios siempre son importantes!, escriba cualquier duda, sugerencia o inconventiene que desee.";

            modal.appendChild(texto);

            var formulario = document.createElement("form");
            formulario.setAttribute("id","formulario_contacto");
            modal.appendChild(formulario);

            // Identificación --> Correo
            var label1 = document.createElement("label");
            label1.setAttribute("id","label_correo_contacto");
            label1.setAttribute("class","label_contacto");
            label1.innerHTML = "Correo"
            formulario.appendChild(label1);

            var input1 = document.createElement("input");
            input1.setAttribute("type","text");
            input1.setAttribute("name","correo");
            input1.setAttribute("id","correo_contacto");
            input1.setAttribute("class","input_contacto");
            input1.setAttribute("placeholder","Inserte su correo.")
            formulario.appendChild(input1);

            // Asunto
            var label2 = document.createElement("label");
            label2.setAttribute("id","label_asunto_contacto");
            label2.setAttribute("class","label_contacto");
            label2.innerHTML = "Asunto";
            formulario.appendChild(label2);

            var input2 = document.createElement("select");
            input2.setAttribute("name","asunto");
            input2.setAttribute("id","asunto_contacto");
            input2.setAttribute("class","input_contacto");
            formulario.appendChild(input2);

            // Opciones
            var option1 = document.createElement("option");
            option1.setAttribute("value","Sugerencia");
            option1.innerHTML = "Sugerencias";
            input2.appendChild(option1);
            var option2 = document.createElement("option");
            option2.setAttribute("value","Incovenientes");
            option2.innerHTML = "Incovenientes";
            input2.appendChild(option2);
            var option3 = document.createElement("option");
            option3.setAttribute("value","Dudas");
            option3.innerHTML = "Dudas";
            input2.appendChild(option3);

            // Textarea
            var label3 = document.createElement("label");
            label3.setAttribute("id","label_descripcion_contacto");
            label3.setAttribute("class","label_contacto");
            label3.innerHTML = "Descripción";
            formulario.appendChild(label3);

            var input3 = document.createElement("textarea");
            input3.setAttribute("type","text");
            input3.setAttribute("name","descripcion");
            input3.setAttribute("id","descripcion_contacto");
            input3.setAttribute("class","input_contacto");
            input3.setAttribute("placeholder","Inserte más información sobre el asunto.")
            formulario.appendChild(input3);

            // Enviar
            var submit = document.createElement("input");
            submit.setAttribute("type","submit");
            submit.setAttribute("id","submit_contacto");
            submit.setAttribute("class","input_contacto");
            formulario.appendChild(submit);

            let imagen = document.createElement("img");
            imagen.setAttribute("id","imagen_contacto");
            imagen.setAttribute("src","../img/big_ben.png")
            modal.appendChild(imagen);

            // Salir del Modal
            modal.appendChild(atras_modal);
            document.getElementById("atras_modal").addEventListener("click",() => { 
                modal.close(); 
                BODY.style.overflowY = "visible";
                BODY.style.opacity = "1";
                modal.removeChild(atras_modal);
                BODY.removeChild(modal);
                
            })

            var formu = document.getElementById("formulario_contacto");

            formu.onsubmit = e => {

                e.preventDefault();

                // Objeto de los valores del formulario
                DATOS = {
                    correo      : document.getElementById("correo_contacto").value,
                    asunto      : document.getElementById("asunto_contacto").value,
                    descripcion : document.getElementById("descripcion_contacto").value
                }

                // No estan vacios
                if(DATOS.correo.length != 0 && DATOS.asunto.length != 0 && DATOS.descripcion.length != 0){
                    
                    var correcto  = document.getElementById("label_correo_contacto");
                    var correcto2 = document.getElementById("label_asunto_contacto");
                    var correcto3 = document.getElementById("label_descripcion_contacto");

                    let input1 = document.getElementById("correo_contacto");
                    let input2 = document.getElementById("asunto_contacto");
                    let input3 = document.getElementById("descripcion_contacto");

                    let correo = document.getElementById("correo_contacto").value;
                    let asunto = document.getElementById("asunto_contacto").value;
                    let descripcion = document.getElementById("descripcion_contacto").value;

                    input1.value = "";
                    input3.value = "";

                    correcto.style.color = "green";
                    correcto.style.fontWeight = "bold";
                    correcto2.style.color = "green";
                    correcto2.style.fontWeight = "bold";
                    correcto3.style.color = "green";
                    correcto3.style.fontWeight = "bold";

                        // Conexión al servidor para enviar correo
                        fetch('/correo', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(DATOS)
                        })
                        
                        .then(response => {

                            if (response.ok){return response.text();}
                            else{console.log("Error");}
                              
                          })
                          
                        .then(textoRespuesta => {

                            // Correo Existe en la BDD
                            if (textoRespuesta === 'Existe') {
                              
                                var enviado = document.createElement("p");
                                enviado.innerHTML = "Se ha envíado correctamente su correo."
                                enviado.setAttribute("id","correo_enviado");
                                enviado.style.color = "green"
                                enviado.style.position = "relative";
                                enviado.style.top = "24px";
                                enviado.style.left = "148px";
                                enviado.style.display = "block";
                                enviado.style.textDecoration = "underline";
                                formulario.appendChild(enviado);

                                var submit = document.getElementById("submit_contacto");
                                submit.style.pointerEvents = "none";
                                submit.style.opacity = "0.5";
                                submit.style.cursor = "crosshair";
                            }
                            // Correo no existe en la BDD 
                            else {

                                if(input1.length != 0) {
                                    input1.value = correo; 
                                    correcto.style.color = "red";
                                    correcto.style.fontWeight = "bold";
                                }
                                
                                if(input2.length != 0) {input2.value = asunto; }
                                if(input3.length != 0) {input3.value = descripcion; }

                            }
                          })

                        .catch(error => {
                        console.error('Error al enviar los datos:' + error);
                        });

                }else{
                    
                    var enviado = document.getElementById("correo_enviado");
                    if(enviado){
                        formulario.removeChild(enviado);
                    }
                    

                    var error = document.getElementById("label_correo_contacto");
                    var error2 = document.getElementById("label_asunto_contacto");
                    var error3 = document.getElementById("label_descripcion_contacto");

                    if(DATOS.correo.length == 0){
                        
                        error.style.color = "red";
                        error.style.fontWeight = "bold";
                        let input = document.getElementById("correo_contacto");
                        input.innerHTML = "";
                    }else{
                        error.style.color = "green";
                        error.style.fontWeight = "bold";
                    }

                    if(DATOS.asunto.length == 0){
                        
                        error2.style.color = "red";
                        error2.style.fontWeight = "bold";
                        let input = document.getElementById("asunto_contacto");
                        input.innerHTML = "";
                    }else{
                        error2.style.color = "green";
                        error2.style.fontWeight = "bold";
                    }

                    if(DATOS.descripcion.length == 0){
                        
                        error3.style.color = "red";
                        error3.style.fontWeight = "bold";
                        let input = document.getElementById("descripcion_contacto");
                        input.innerHTML = "";
                    }else{
                        error3.style.color = "green";
                        error3.style.fontWeight = "bold";
                    }
                }

            }

        });

    }
    