function formREST(){
   
        var BODY   = document.querySelector("body");
        var cuerpo = document.getElementById("adminREST");
        let pais   = document.getElementById("pais-input").value;

        // *********************************************************************** //
        // ***************** BORRAR ELEMENTOS EN CASO DE CAMBIOS ***************** //
        // *********************************************************************** //
        
        if(document.getElementById("formu_region")){
            
            formu_region.setAttribute("id","formu_region");
            cuerpo.removeChild(formu_region);
            if(document.getElementById("formu_provincia")){
                
                let formu_provincia = document.getElementById("formu_provincia");
                cuerpo.removeChild(formu_provincia);
            }
            
        }
       
        // *********************************************************************** //
        // *********************************************************************** //
        // ******************* ELEGIR PAIS --> CONSEGUIR REGIÓN ****************** //
        // *********************************************************************** //
        // *********************************************************************** //

        if(pais.length != 0){

            DATOS = {
                pais : pais,
            }
    
            // Consulta FETCH para SELECCIONAR una REGIÓN, mediante la elección de un PAÍS.
            fetch('/elegirPais', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(DATOS)
            })
            
            .then(response => response.json())
            .then(data => {

                // *********************************************************************** //
                //                          Contenido de Región
                // *********************************************************************** //
                
                    let formu_region = document.createElement("form");
                    formu_region.setAttribute("id","formu_region");
                    cuerpo.appendChild(formu_region);

                    let label = document.createElement("label");
                    label.setAttribute("id","label_region");
                    label.setAttribute("class","rest-label");
                    label.innerHTML = "Región";
                    formu_region.appendChild(label)

                    let select = document.createElement("select");
                    select.setAttribute("id","select_region");
                    select.setAttribute("class","rest-input");
                    formu_region.appendChild(select);
                
                    // Rellenar el Select
                    for(i = 0 ; i < data.length ; i++){
                        let option = document.createElement("option");
                        option.setAttribute("id","option_region");
                        option.setAttribute("value",data[i]);
                        option.innerHTML = data[i];
                        select.appendChild(option);
                    }

                    let submit = document.createElement("input");
                    submit.setAttribute("type","button");
                    submit.setAttribute("class","rest-input");
                    submit.setAttribute("id","buscar_region");
                    submit.setAttribute("value","Buscar");
                    formu_region.appendChild(submit);

                // *********************************************************************** //
                // *********************************************************************** //
                // *********************************************************************** //

                document.getElementById("buscar_region").addEventListener("click",() => {

                    var region = document.getElementById("select_region").value;

                    // *********************************************************************** //
                    // ***************** BORRAR ELEMENTOS EN CASO DE CAMBIOS ***************** //
                    // *********************************************************************** //

                    if(document.getElementById("formu_provincia")){
            
                        formu_provincia.setAttribute("id","formu_provincia");
                        cuerpo.removeChild(formu_provincia);
                        if(document.getElementById("tabla_rest")){
                            let tabla_rest = document.getElementById("tabla_rest");
                            cuerpo.removeChild(tabla_rest);
                        }
                        
                    }

                    document.getElementById("select_region").addEventListener("change", ()=> {
                        
                        if(document.getElementById("formu_provincia")){
            
                            formu_provincia.setAttribute("id","formu_provincia");
                            cuerpo.removeChild(formu_provincia);
                            if(document.getElementById("tabla_rest")){
                                let tabla_rest = document.getElementById("tabla_rest");
                                BODY.removeChild(tabla_rest);
                            }
                        }

                    })
                    
                    // *********************************************************************** //
                    // *********************************************************************** //
                    // **************** ELEGIR REGIÓN --> CONSEGUIR PROVINCIA **************** //
                    // *********************************************************************** //
                    // *********************************************************************** //

                    DATOS = {
                        pais   : pais,
                        region : region,
                    }
                 
                    fetch('/elegirRegion', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(DATOS)
                    })

                    .then(response => response.json())
                    .then(data => {

                        // *********************************************************************** //
                        //                         Contenido de Provincia
                        // *********************************************************************** //

                        let formu_provincia = document.createElement("form");
                        formu_provincia.setAttribute("id","formu_provincia");
                        cuerpo.appendChild(formu_provincia);

                        let label = document.createElement("label");
                        label.setAttribute("id","label_provincia");
                        label.setAttribute("class","rest-label");
                        label.innerHTML = "Provincia y Ciudad/Pueblo";
                        formu_provincia.appendChild(label)

                        let select = document.createElement("select");
                        select.setAttribute("id","select_provincia");
                        select.setAttribute("class","rest-input");
                        formu_provincia.appendChild(select);
                    
                        // Rellenar el Select
                        for(i = 0 ; i < data.length ; i++){
                            let option = document.createElement("option");
                            option.setAttribute("id","option_provincia");
                            option.setAttribute("value",data[i]);
                            option.innerHTML = data[i];
                            select.appendChild(option);
                        }

                        let input = document.createElement("input");
                        input.setAttribute("type","text");
                        input.setAttribute("id","input_pueblo");
                        input.setAttribute("class","rest-input");
                        input.setAttribute("placeholder","Escriba la ciudad o pueblo.")
                        formu_provincia.appendChild(input);

                        let submit = document.createElement("input");
                        submit.setAttribute("type","button");
                        submit.setAttribute("class","rest-input");
                        submit.setAttribute("id","buscar_provincia");
                        submit.setAttribute("value","Buscar");
                        formu_provincia.appendChild(submit);

                        // *********************************************************************** //
                        // *********************************************************************** //
                        // *********************************************************************** //

                        document.getElementById("buscar_provincia").addEventListener("click", () => {

                            var provincia = document.getElementById("select_provincia").value;
                            var ciudad = document.getElementById("input_pueblo").value;

                            // *********************************************************************** //
                            // ***************** BORRAR ELEMENTOS EN CASO DE CAMBIOS ***************** //
                            // *********************************************************************** //

                            document.getElementById("select_provincia").addEventListener("change", ()=> {
                                
                                if(document.getElementById("formu_provincia")){
                    
                                    if(document.getElementById("tabla_rest")){
                                        let tabla_rest = document.getElementById("tabla_rest");
                                        cuerpo.removeChild(tabla_rest);
                                    }
                                }

                            })

                            // *********************************************************************** //
                            // *********************************************************************** //
                            // ************* ELEGIR PROVINCIA Y PUEBLO --> MOSTRAR TABLA ************* //
                            // *********************************************************************** //
                            // *********************************************************************** //

                                DATOS = {
                                    pais   : pais,
                                    region : region,
                                    provincia : provincia,
                                    ciudad : ciudad
                                }
                            
                                fetch('/elegirProvincia', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(DATOS)
                                })

                                .then(response => response.json())
                                .then(data => {
                                    
                                    // *********************************************************************** //
                                    // ***************** BORRAR ELEMENTOS EN CASO DE CAMBIOS ***************** //
                                    // *********************************************************************** //

                                    if(document.getElementById("tabla_rest")){
                                        let tabla = document.getElementById("tabla_rest");
                                        BODY.removeChild(tabla);
                                    }

                                    // *********************************************************************** //
                                    // *********************************************************************** //
                                    // ******************************* R.E.S.T ******************************* //
                                    // *********************************************************************** //
                                    // *********************************************************************** //

                                        // *********************************************************************** //
                                        // ********* CREAR TABLA CON EL PAIS, REGION, PROVINCIA Y PUEBLO ********* //
                                        // *********************************************************************** //
                                        
                                        crearTablaREST(data);
                                    
                                        // *********************************************************************** //
                                        // ************************* EVENTOS PARA AÑADIR ************************* //
                                        // *********************************************************************** //

                                        document.getElementById("rest_nuevo").addEventListener("click",() => {
                                            
                                            REST_Insertar(pais, region, provincia, ciudad);

                                        })

                                        // *********************************************************************** //
                                        // ************************* EVENTOS PARA EDITAR ************************* //
                                        // *********************************************************************** //

                                            // ----------------------------------- //
                                            //  modal_eliminar() -> Mostrar Modal  //
                                            //  REST_Eliminar()  -> Acción DELETE  //
                                            // ----------------------------------- //
                                        
                                            var botonEditar = document.querySelectorAll("button.rest_editar");
                                            for(botoEditar_seleccionado of botonEditar){
                                                botoEditar_seleccionado.addEventListener("click",(e) => {
                                                    var hijo = e.target;
                                                    var id = hijo.value;
                                                    REST_Editar(id)
                                                })
                                            }

                                        // *********************************************************************** //
                                        // ************************ EVENTOS PARA ELIMINAR ************************ //
                                        // *********************************************************************** //

                                            // ----------------------------------- //
                                            //  modal_eliminar() -> Mostrar Modal  //
                                            //  REST_Eliminar()  -> Acción DELETE  //
                                            // ----------------------------------- //
                                        
                                            var botonEliminar = document.querySelectorAll("button#rest_eliminar");
                                            for(botonEliminar_seleccionado of botonEliminar){    
                                                botonEliminar_seleccionado.addEventListener("click",(e) => {
                                                    var hijo = e.target;
                                                    modal_eliminar(hijo);    
                                                })

                                            }
                                                                                                                                                                                                                
                                })
                                .catch(error => console.error(error));

                        })

                    })
                    .catch(error => console.error(error));
                    
                })
                
            })
            .catch(error => console.error(error));

        }else{
            alert("Debes elegir un País");
        }
        
}

// ********************************************************************************************************************************************** //
// ********************************************************************************************************************************************** //
// ********************************************************************************************************************************************** //
// ********************************************************************************************************************************************** //
// ********************************************************************************************************************************************** //
// ********************************************************************************************************************************************** //

    // ------------------------------------------------------- //
    // No crea la tabla cuando hayamos seleccionado todo: País,//
    // Región, Provincia y Ciudad,                             //
    // ------------------------------------------------------- //

    function crearTablaREST(data){

        let tabla = document.createElement("tabla_rest");
        tabla.setAttribute("id","tabla_rest");
        cuerpo.appendChild(tabla);

        // *********************************************************************** //
        // *********************** ENCABEZADO DE LA TABLA ************************ //
        // *********************************************************************** //                         
        
        var tr = document.createElement("tr");
        tr.setAttribute("id","tr_rest")
        tabla.appendChild(tr);

        var th = document.createElement("th");
        th.setAttribute("id","th_rest")
        th.innerHTML = "Nombre de Restaurante";
        tr.appendChild(th);

        var th = document.createElement("th");
        th.setAttribute("id","th_rest")
        th.innerHTML = "Dirección";
        tr.appendChild(th);

        var th = document.createElement("th");
        th.setAttribute("id","th_rest")
        th.innerHTML = "Comida";
        tr.appendChild(th);

        var th = document.createElement("th");
        th.setAttribute("id","th_rest")
        th.innerHTML = "Precio";
        tr.appendChild(th);

        var th = document.createElement("th");
        th.setAttribute("id","th_rest")
        th.innerHTML = "Servicio";
        tr.appendChild(th);

        var th = document.createElement("th");
        th.setAttribute("id","th_rest")
        th.innerHTML = "Ambiente";
        tr.appendChild(th);

        var th = document.createElement("th");
        th.setAttribute("id","th_rest")
        th.innerHTML = "Vegetariano";
        tr.appendChild(th);

        var th = document.createElement("th");
        th.setAttribute("id","th_rest")
        th.innerHTML = "Vegano";
        tr.appendChild(th);

        var th = document.createElement("th");
        th.setAttribute("id","th_rest")
        th.innerHTML = "Sin Gluten";
        tr.appendChild(th);

        var nuevo = document.createElement("button");
        nuevo.setAttribute("id","rest_nuevo");
        nuevo.setAttribute("colspan","2")
        nuevo.setAttribute("class","rest_button");
        nuevo.innerHTML = "Nuevo";
        tr.appendChild(nuevo);

        // *********************************************************************** //
        // ******************* INSERCIÓN DE FILAS EN LA TABLA ******************** //
        // *********************************************************************** //

            // -------------------------------------------------- //
            // Su ID, tienen la _id de cada fila, para poder ser 
            // identificada para UPDATE o DELETE.
            // -------------------------------------------------- //

            for(i = 0 ; i < data.length ; i++){

                var tr = document.createElement("tr");
                tr.setAttribute("id","fila"+data[i]._id)
                tr.setAttribute("value",data[i]._id);
                tabla.appendChild(tr);

                var td = document.createElement("td");
                td.setAttribute("id","nombre"+data[i]._id)
                td.setAttribute("value",data[i].nombre_restaurante);
                td.innerHTML = data[i].nombre_restaurante;
                tr.appendChild(td);

                var td = document.createElement("td");
                td.setAttribute("id","direccion"+data[i]._id)
                td.setAttribute("value",data[i].direccion);
                td.innerHTML = data[i].direccion;
                tr.appendChild(td);

                var td = document.createElement("td");
                td.setAttribute("id","comida"+data[i]._id);
                td.setAttribute("value",data[i].comida);
                td.innerHTML = data[i].comida;
                tr.appendChild(td);

                var td = document.createElement("td");
                td.setAttribute("id","precio"+data[i]._id);
                td.setAttribute("value",data[i].precio);
                td.innerHTML = data[i].precio;
                tr.appendChild(td);

                var td = document.createElement("td");
                td.setAttribute("id","servicio"+data[i]._id);
                td.setAttribute("value",data[i].servicio);
                td.innerHTML = data[i].servicio;
                tr.appendChild(td);

                var td = document.createElement("td");
                td.setAttribute("id","ambiente"+data[i]._id);
                td.setAttribute("value",data[i].ambiente);
                td.innerHTML = data[i].ambiente;
                tr.appendChild(td);

                var td = document.createElement("td");
                td.setAttribute("id","vegetariano"+data[i]._id);
                td.setAttribute("value",data[i].vegetariano);
                td.innerHTML = data[i].vegetariano;
                tr.appendChild(td);

                var td = document.createElement("td");
                td.setAttribute("id","vegano"+data[i]._id);
                td.setAttribute("value",data[i].vegano);
                td.innerHTML = data[i].vegano;
                tr.appendChild(td);

                var td = document.createElement("td");
                td.setAttribute("id","singluten"+data[i]._id);
                td.setAttribute("value",data[i].sin_gluten);
                td.innerHTML = data[i].sin_gluten;
                tr.appendChild(td);

                var editar = document.createElement("button");
                editar.setAttribute("id","rest_editar"+data[i]._id);
                editar.setAttribute("class","rest_editar");
                editar.setAttribute("value",data[i]._id)
                editar.innerHTML = "Editar";
                tr.appendChild(editar);

                var eliminar = document.createElement("button");
                eliminar.setAttribute("id","rest_eliminar");
                eliminar.setAttribute("class","rest_button");
                eliminar.setAttribute("value",data[i].direccion)
                eliminar.innerHTML = "Eliminar";
                tr.appendChild(eliminar);


            }
    }

    // ------------------------------------------------------- //
    // Cuando seleccionemos un botón de Eliminar en cualquier  //
    // fila, nos saldrá un modal para confirmar o denegar.     //
    // ------------------------------------------------------- //

    function modal_eliminar(hijo){
        
        var BODY = document.querySelector("body");

        // *********************************************************************** //
        // *************************** CREACIÓN MODAL **************************** //
        // *********************************************************************** //

        var modal = document.createElement("dialog");
        modal.setAttribute("id","confirmar_eliminar");
        BODY.appendChild(modal);
        
        modal.showModal();
        
        let titulo = document.createElement("h1");
        titulo.setAttribute("id","titulo_modal");
        titulo.innerHTML = " ¿Estás Seguro de Eliminarlo? ";

        let parrafo = document.createElement("h1");
        parrafo.setAttribute("id","parrafo_modal_eliminar");
        parrafo.innerHTML = " Una vez hecho, no se podrá volver atrás. ";
        parrafo.style.textAlign = "center";
        parrafo.style.fontFamily = "monospace";
        parrafo.style.fontSize = "18px";

        let aceptar = document.createElement("button");
        aceptar.setAttribute("id","modal_aceptar_eliminar");
        aceptar.innerHTML = "Aceptar";
        
        let atras = document.createElement("button");
        atras.setAttribute("id","modal_atras_eliminar");
        atras.innerHTML = "Atrás";
        
        modal.appendChild(titulo);
        modal.appendChild(parrafo);
        modal.appendChild(aceptar);
        modal.appendChild(atras);

        // *********************************************************************** //
        // *********************************************************************** //
        // *********************************************************************** //

        // ACEPTAR ELIMINAR -> Elimina un Registro de la BDD
        document.getElementById("modal_aceptar_eliminar").addEventListener("click", () => {
            REST_Eliminar(hijo)
        });

        // ATRÁS ELIMINAR -> Deniega la Eliminación
        document.getElementById("modal_atras_eliminar").addEventListener("click",() => {
            modal.close();
            BODY.removeChild(modal);
        });

    }

    // ------------------------------------------------------- //
    // Nos comunica con el servidor si le dimos al modal en    //
    // Aceptar, por lo cual nos lo borrará de la Base de Datos //
    // ------------------------------------------------------- //

    function REST_Eliminar(hijo){

        var BODY = document.querySelector("body");
        var modal = document.getElementById("confirmar_eliminar");

        DATOS = {
            direccion : hijo.value
        }

        modal.close();
        BODY.removeChild(modal);

        fetch('/eliminarRestaurante', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DATOS)
        })
        .then(response => response.text())
        .then(data => {
            
        })
        .catch(error => console.error(error));

    }

    // ------------------------------------------------------- //
    // Nos INSERTA un nuevo restaurante a la Base de Datos.
    // ------------------------------------------------------- //

    function REST_Insertar(pais, region, provincia, ciudad){

        var BODY = document.querySelector("body");

        // Creación del Modal
        var modal = document.createElement("dialog");
        modal.setAttribute("id","modal_insertar");
        BODY.appendChild(modal); 

        modal.showModal();
        BODY.style.overflowY = "hidden";
        BODY.style.opacity = "0.1";

        // ********************************************************* //
        // ************************* ATRAS ********+**************** //
        // ********************************************************* //

        let atras_modal = document.createElement("img");
            atras_modal.setAttribute("src","../img/atras.png");
            atras_modal.setAttribute("id","atras_modal");
            atras_modal.innerHTML = "Atrás";
            modal.appendChild(atras_modal);  
    
        document.getElementById("atras_modal").addEventListener("click",() => { 
            modal.close(); 
            BODY.style.overflowY = "visible";
            BODY.style.opacity = "1";
            modal.removeChild(atras_modal);
            BODY.removeChild(modal);
            
        })

        // ********************************************************* //
        // ********************************************************* //
        // ********************************************************* //

        let titulo = document.createElement("h1");
        titulo.setAttribute("id","titulo_modal");
        titulo.innerHTML = " Insertar ";
        modal.appendChild(titulo);

        var texto = document.createElement("p");
        texto.setAttribute("id","texto_insertar");
        texto.innerHTML = "¡ Rellene este formulario para insertar un nuevo restarurante !";

        modal.appendChild(texto);

        // ********************************************************* //
        //            Creación del Formulario + Inputs               //
        // ********************************************************* //

        var formu = document.createElement("formu");
        formu.setAttribute("id","formu_insertar");
        modal.appendChild(formu);

        // Pais
        var label = document.createElement("label");
        label.setAttribute("id","label_pais");
        label.setAttribute("class","insertar_1");
        label.innerHTML = "País";
        formu.appendChild(label);

        var input = document.createElement("input");
        input.setAttribute("id","insertar_pais");
        input.setAttribute("class","insertar_1");
        input.setAttribute("type","text");
        input.readOnly = true;
        input.setAttribute("value",pais);
        formu.appendChild(input);

        // Region
        var label = document.createElement("label");
        label.setAttribute("id","label_region_insertar");
        input.setAttribute("class","insertar_1");
        label.innerHTML = "Región";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("id","insertar_region");
        input.setAttribute("class","insertar_1");
        input.setAttribute("type","text");
        input.readOnly = true;
        label.innerHTML = "Región";
        input.setAttribute("value",region);
        formu.appendChild(input);

        // Provincia
        var label = document.createElement("label");
        label.setAttribute("id","label_provincia_insertar");
        label.setAttribute("class","insertar_1");
        label.innerHTML = "Provincia";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("id","insertar_provincia");
        input.setAttribute("class","insertar_1");
        input.setAttribute("type","text");
        input.readOnly = true;
        label.innerHTML = "Provincia";
        input.setAttribute("value",provincia);
        formu.appendChild(input);

        // Ciudad
        var label = document.createElement("label");
        label.setAttribute("id","label_ciudad");
        label.setAttribute("class","insertar_1");
        label.innerHTML = "Ciudad";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","insertar_1");
        input.setAttribute("id","insertar_ciudad");
        input.setAttribute("type","text");
        input.setAttribute("value",ciudad);
        formu.appendChild(input);

        // Nombre Restaurante
        var label = document.createElement("label");
        label.setAttribute("id","label_restaurante");
        label.setAttribute("class","insertar_1");
        label.innerHTML = "Nombre Restaurante";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","insertar_1");
        input.setAttribute("id","insertar_restaurante");
        input.setAttribute("type","text");
        formu.appendChild(input);

        // Ambiente
        var label = document.createElement("label");
        label.setAttribute("id","label_ambiente");
        label.setAttribute("class","insertar_2");
        label.innerHTML = "Ambiente";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","insertar_2");
        input.setAttribute("id","insertar_ambiente");
        input.setAttribute("type","number");
        input.setAttribute("min","0");
        input.setAttribute("max","5");
        formu.appendChild(input);

        // Comida
        var label = document.createElement("label");
        label.setAttribute("id","label_comida");
        label.setAttribute("class","insertar_2");
        label.innerHTML = "Comida";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","insertar_2");
        input.setAttribute("id","insertar_comida");
        input.setAttribute("type","number");
        input.setAttribute("min","0");
        input.setAttribute("max","5");
        formu.appendChild(input);

        // precio
        var label = document.createElement("label");
        label.setAttribute("id","label_precio");
        label.setAttribute("class","insertar_2");
        label.innerHTML = "Precio";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","insertar_2");
        input.setAttribute("id","insertar_precio");
        input.setAttribute("type","number");
        input.setAttribute("min","0");
        input.setAttribute("max","5");
        formu.appendChild(input);

        // servicio
        var label = document.createElement("label");
        label.setAttribute("id","label_servicio");
        label.setAttribute("class","insertar_2");
        label.innerHTML = "Servicio";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","insertar_2");
        input.setAttribute("id","insertar_servicio");
        input.setAttribute("type","number");
        input.setAttribute("min","0");
        input.setAttribute("max","5");
        formu.appendChild(input);

        // vegetariano
        var label = document.createElement("label");
        label.setAttribute("id","label_vegetariano");
        label.setAttribute("class","insertar_3");
        label.innerHTML = "Vegetariano";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("id","insertar_vegetariano");
        input.setAttribute("class","insertar_3");
        input.setAttribute("type","text");
        formu.appendChild(input);

        // vegano
        var label = document.createElement("label");
        label.setAttribute("id","label_vegano");
        label.setAttribute("class","insertar_3");
        label.innerHTML = "Vegano";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("id","insertar_vegano");
        input.setAttribute("class","insertar_3");
        input.setAttribute("type","text");
        formu.appendChild(input);

        // singluten
        var label = document.createElement("label");
        label.setAttribute("id","label_singluten");
        label.setAttribute("class","insertar_3");
        label.innerHTML = "Sin Gluten";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","insertar_3");
        input.setAttribute("id","insertar_singluten");
        input.setAttribute("type","text");
        formu.appendChild(input);

        // SUBMIT
        var input = document.createElement("input");
        input.setAttribute("id","insertar_enviar");
        input.setAttribute("type","button");
        input.setAttribute("value","Enviar");
        input.style.width = "512px";
        formu.appendChild(input);

        // ********************************************************* //
        // ********************************************************* //
        // ********************************************************* //

        // ****************************************************************** //

       
        // ********************************************************* //
        //                          ENVIAR                           //
        // ********************************************************* //
        document.getElementById("insertar_enviar").addEventListener("click",() => {

            // Recogo los valores de los inputs
            var ciudad      = document.getElementById("insertar_ciudad").value;
            var nombre      = document.getElementById("insertar_restaurante").value;
            var comida      = document.getElementById("insertar_comida").value;
            var servicio    = document.getElementById("insertar_servicio").value;
            var precio      = document.getElementById("insertar_precio").value;
            var ambiente    = document.getElementById("insertar_ambiente").value;
            var vegetariano = document.getElementById("insertar_vegetariano").value;
            var vegano      = document.getElementById("insertar_vegano").value;
            var singluten   = document.getElementById("insertar_singluten").value;

            // Edito los colores de los que no se pueden editar
            var labelpais   = document.getElementById("label_pais");
            labelpais.style.color = "green";
            labelpais.style.fontWeight = "bold";
            var labelregion   = document.getElementById("label_region_insertar");
            labelregion.style.color = "green";
            labelregion.style.fontWeight = "bold";
            var labelprovincia   = document.getElementById("label_provincia_insertar");
            labelprovincia.style.color = "green";
            labelprovincia.style.fontWeight = "bold";

            // ********************************************************* //
            //                      Comprobaciones                       //
            // ********************************************************* //

            var ciudadLabel = document.getElementById("label_ciudad");
            if(ciudad.length > 0){
                ciudadLabel.style.color = "green";
                ciudadLabel.style.fontWeight = "bold";
            }else{
                ciudadLabel.style.color = "red";
                ciudadLabel.style.fontWeight = "bold";
            }
            // Si no tiene un caracter
            var nombreLabel = document.getElementById("label_restaurante");
            if(nombre.length > 0){
                nombreLabel.style.color = "green";
                nombreLabel.style.fontWeight = "bold";
            }else{
                nombreLabel.style.color = "red";
                nombreLabel.style.fontWeight = "bold";
            }

            // Si esta entre 0 y 5
            var comidaLabel = document.getElementById("label_comida");
            if(comida >= 0 && comida <= 5){
                comidaLabel.style.color = "green";
                comidaLabel.style.fontWeight = "bold";
                if(comida == 0){
                    var comida2 = document.getElementById("insertar_comida");
                    comida2.setAttribute("value","0");
                }
            }else{
                comidaLabel.style.color = "red";
                comidaLabel.style.fontWeight = "bold";
            }

            // Si esta entre 0 y 5
            var servicioLabel = document.getElementById("label_servicio");
            if(servicio >= 0 && servicio <= 5){
                servicioLabel.style.color = "green";
                servicioLabel.style.fontWeight = "bold";
                if(servicio == 0){
                    var servicio2 = document.getElementById("insertar_servicio");
                    servicio2.setAttribute("value","0");
                }
            }else{
                servicioLabel.style.color = "red";
                servicioLabel.style.fontWeight = "bold";
            }

            // Si esta entre 0 y 5
            var precioLabel = document.getElementById("label_precio");
            if(precio >= 0 && precio <= 5){
                precioLabel.style.color = "green";
                precioLabel.style.fontWeight = "bold";
                if(precio == 0){
                    var precio2 = document.getElementById("insertar_precio");
                    precio2.setAttribute("value","0");
                }
            }else{
                precioLabel.style.color = "red";
                precioLabel.style.fontWeight = "bold";
            }

            // Si esta entre 0 y 5
            var ambienteLabel = document.getElementById("label_ambiente");
            if(ambiente >= 0 && ambiente <= 5){
                ambienteLabel.style.color = "green";
                ambienteLabel.style.fontWeight = "bold";
                if(ambiente == 0){
                    var ambiente2 = document.getElementById("insertar_ambiente");
                    ambiente2.setAttribute("value","0");
                }
            }else{
                ambienteLabel.style.color = "red";
                ambienteLabel.style.fontWeight = "bold";
            }

            // Tiene que ser Y o N
            var vegetarianoLabel = document.getElementById("label_vegetariano");
            if(vegetariano == "Y" || vegetariano == "N"){
                vegetarianoLabel.style.color = "green";
                vegetarianoLabel.style.fontWeight = "bold";
            }else{
                vegetarianoLabel.style.color = "red";
                vegetarianoLabel.style.fontWeight = "bold";
            }

            // Tiene que ser Y o N
            var veganoLabel = document.getElementById("label_vegano");
            if(vegano == "Y" || vegano == "N"){
                veganoLabel.style.color = "green";
                veganoLabel.style.fontWeight = "bold";
            }else{
                veganoLabel.style.color = "red";
                veganoLabel.style.fontWeight = "bold";
            }

            // Tiene que ser Y o N
            var singlutenLabel = document.getElementById("label_singluten");
            if(singluten == "Y" || singluten == "N"){
                singlutenLabel.style.color = "green";
                singlutenLabel.style.fontWeight = "bold";
            }else{
                singlutenLabel.style.color = "red";
                singlutenLabel.style.fontWeight = "bold";
            }

            // ********************************************************* //
            // ********************************************************* //
            // ********************************************************* //

            if
            (
                ciudad.length > 0 && nombre.length > 0 && comida >= 0 && comida <= 5 && servicio >= 0 && servicio <= 5 &&
                ambiente >= 0 && ambiente <= 5 && precio >= 0 && precio <= 5 && (vegetariano == "Y" || vegetariano == "N") &&
                (vegano == "Y" || vegano == "N") && (singluten == "Y" || singluten == "N")
            ){
                
                // Rellenamos Objeto con Datos
                DATOS = {

                    pais                : pais,
                    region              : region,
                    provincia           : provincia,
                    ciudad              : ciudad,
                    nombre_restaurante  : nombre,
                    comida              : comida,
                    servicio            : servicio,
                    ambiente            : ambiente,
                    precio              : precio,
                    vegetariano         : vegetariano,
                    vegano              : vegano,
                    sin_gluten          : singluten

                }
                
                fetch('/insertarRestaurante', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(DATOS)
                })
                
                .then(response => response.text())
                .then(data => {
                    // Se inserto correctamente el Restaurante
                    if(data == "Correcto"){
                        
                        modal.close(); 
                        BODY.style.overflowY = "visible";
                        BODY.style.opacity = "1";
                        modal.removeChild(atras_modal);
                        BODY.removeChild(modal);
                    }

                })
                .catch(error => console.error(error));

            }

        })
    }

    // ------------------------------------------------------- //
    // Nos EDITA un restaurante elegido en la Base de Datos.
    // ------------------------------------------------------- //

    function REST_Editar(id){

        var BODY = document.querySelector("body");

        // Creación del Modal
        var modal = document.createElement("dialog");
        modal.setAttribute("id","modal_editar");
        BODY.appendChild(modal); 

        modal.showModal();
        BODY.style.overflowY = "hidden";
        BODY.style.opacity = "0.1";

        // ********************************************************* //
        // ************************* ATRAS ********+**************** //
        // ********************************************************* //

        let atras_modal = document.createElement("img");
            atras_modal.setAttribute("src","../img/atras.png");
            atras_modal.setAttribute("id","atras_modal");
            atras_modal.innerHTML = "Atrás";
            modal.appendChild(atras_modal);  
    
        document.getElementById("atras_modal").addEventListener("click",() => { 
            modal.close(); 
            BODY.style.overflowY = "visible";
            BODY.style.opacity = "1";
            modal.removeChild(atras_modal);
            BODY.removeChild(modal);
            
        })

        var nombre      = document.getElementById("nombre"+id).textContent;
        var comida      = document.getElementById("comida"+id).textContent;
        var precio      = document.getElementById("precio"+id).textContent;
        var servicio    = document.getElementById("servicio"+id).textContent;
        var ambiente    = document.getElementById("ambiente"+id).textContent;
        var vegetariano = document.getElementById("vegetariano"+id).textContent;
        var vegano      = document.getElementById("vegano"+id).textContent;
        var singluten   = document.getElementById("singluten"+id).textContent;

        // ********************************************************* //
        // ********************************************************* //
        // ********************************************************* //

        let titulo = document.createElement("h1");
        titulo.setAttribute("id","titulo_modal");
        titulo.innerHTML = " Editar ";
        modal.appendChild(titulo);

        var texto = document.createElement("p");
        texto.setAttribute("id","texto_insertar");
        texto.innerHTML = "¡ Modifique este formulario para editar él restarurante !";

        modal.appendChild(texto);

        // ********************************************************* //
        //            Creación del Formulario + Inputs               //
        // ********************************************************* //

        var formu = document.createElement("formu");
        formu.setAttribute("id","formu_editar");
        modal.appendChild(formu);

        // Nombre Restaurante
        var label = document.createElement("label");
        label.setAttribute("id","label_restaurante");
        label.setAttribute("class","editar_1");
        label.innerHTML = "Nombre Restaurante";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","editar_1");
        input.setAttribute("id","editar_restaurante");
        input.setAttribute("type","text");
        input.setAttribute("value",nombre);
        formu.appendChild(input);

        // Comida
        var label = document.createElement("label");
        label.setAttribute("id","label_comida");
        label.setAttribute("class","editar_2");
        label.innerHTML = "Comida";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","editar_2");
        input.setAttribute("id","editar_comida");
        input.setAttribute("type","number");
        input.setAttribute("min","0");
        input.setAttribute("max","5");
        input.setAttribute("value",comida);
        formu.appendChild(input);

        // precio
        var label = document.createElement("label");
        label.setAttribute("id","label_precio");
        label.setAttribute("class","editar_2");
        label.innerHTML = "Precio";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","editar_2");
        input.setAttribute("id","editar_precio");
        input.setAttribute("type","number");
        input.setAttribute("min","0");
        input.setAttribute("max","5");
        input.setAttribute("value",precio);
        formu.appendChild(input);

        // servicio
        var label = document.createElement("label");
        label.setAttribute("id","label_servicio");
        label.setAttribute("class","editar_2");
        label.innerHTML = "Servicio";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","editar_2");
        input.setAttribute("id","editar_servicio");
        input.setAttribute("type","number");
        input.setAttribute("min","0");
        input.setAttribute("max","5");
        input.setAttribute("value",servicio);
        formu.appendChild(input);

        // Ambiente
        var label = document.createElement("label");
        label.setAttribute("id","label_ambiente");
        label.setAttribute("class","editar_2");
        label.innerHTML = "Ambiente";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","editar_2");
        input.setAttribute("id","editar_ambiente");
        input.setAttribute("type","number");
        input.setAttribute("min","0");
        input.setAttribute("max","5");
        input.setAttribute("value",ambiente);
        formu.appendChild(input);
        
        // vegetariano
        var label = document.createElement("label");
        label.setAttribute("id","label_vegetariano");
        label.setAttribute("class","editar_3");
        label.innerHTML = "Vegetariano";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("id","editar_vegetariano");
        input.setAttribute("class","editar_3");
        input.setAttribute("type","text");
        input.setAttribute("value",vegetariano);
        formu.appendChild(input);

        // vegano
        var label = document.createElement("label");
        label.setAttribute("id","label_vegano");
        label.setAttribute("class","editar_3");
        label.innerHTML = "Vegano";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("id","editar_vegano");
        input.setAttribute("class","editar_3");
        input.setAttribute("type","text");
        input.setAttribute("value",vegano);
        formu.appendChild(input);

        // singluten
        var label = document.createElement("label");
        label.setAttribute("id","label_singluten");
        label.setAttribute("class","editar_3");
        label.innerHTML = "Sin Gluten";
        formu.appendChild(label);
        
        var input = document.createElement("input");
        input.setAttribute("class","editar_3");
        input.setAttribute("id","editar_singluten");
        input.setAttribute("type","text");
        input.setAttribute("value",singluten);
        formu.appendChild(input);

        // SUBMIT
        var input = document.createElement("input");
        input.setAttribute("id","editar_enviar");
        input.setAttribute("type","button");
        input.setAttribute("value","Enviar");
        input.style.width = "512px";
        formu.appendChild(input);

        // ********************************************************* //
        // ********************************************************* //
        // ********************************************************* //

        // ****************************************************************** //

        // ********************************************************* //
        //                          ENVIAR                           //
        // ********************************************************* //

        document.getElementById("editar_enviar").addEventListener("click",() => {

            // Recogo los valores de los inputs
            var nombre2      = document.getElementById("editar_restaurante").value;
            var comida2      = document.getElementById("editar_comida").value;
            var servicio2    = document.getElementById("editar_servicio").value;
            var precio2      = document.getElementById("editar_precio").value;
            var ambiente2    = document.getElementById("editar_ambiente").value;
            var vegetariano2 = document.getElementById("editar_vegetariano").value;
            var vegano2      = document.getElementById("editar_vegano").value;
            var singluten2   = document.getElementById("editar_singluten").value;

            // ********************************************************* //
            //                      Comprobaciones                       //
            // ********************************************************* //

            // Si no tiene un caracter
            var nombreLabel = document.getElementById("label_restaurante");
            if(nombre2.length != 0){
                nombreLabel.style.color = "green";
                nombreLabel.style.fontWeight = "bold";
            }else{
                nombreLabel.style.color = "red";
                nombreLabel.style.fontWeight = "bold";
            }

            // Si esta entre 0 y 5
            var comidaLabel = document.getElementById("label_comida");
            if(comida2 >= 0 && comida2 <= 5){
                comidaLabel.style.color = "green";
                comidaLabel.style.fontWeight = "bold";
                if(comida2 == 0){
                    var comida3 = document.getElementById("editar_comida");
                    comida3.setAttribute("value","0");
                }
            }else{
                comidaLabel.style.color = "red";
                comidaLabel.style.fontWeight = "bold";
            }

            // Si esta entre 0 y 5
            var servicioLabel = document.getElementById("label_servicio");
            if(servicio2 >= 0 && servicio2 <= 5){
                servicioLabel.style.color = "green";
                servicioLabel.style.fontWeight = "bold";
                if(servicio2 == 0){
                    var servicio3 = document.getElementById("editar_servicio");
                    servicio3.setAttribute("value","0");
                }
            }else{
                servicioLabel.style.color = "red";
                servicioLabel.style.fontWeight = "bold";
            }

            // Si esta entre 0 y 5
            var precioLabel = document.getElementById("label_precio");
            if(precio2 >= 0 && precio2 <= 5){
                precioLabel.style.color = "green";
                precioLabel.style.fontWeight = "bold";
                if(precio2 == 0){
                    var precio3 = document.getElementById("editar_precio");
                    precio3.setAttribute("value","0");
                }
            }else{
                precioLabel.style.color = "red";
                precioLabel.style.fontWeight = "bold";
            }

            // Si esta entre 0 y 5
            var ambienteLabel = document.getElementById("label_ambiente");
            if(ambiente2 >= 0 && ambiente2 <= 5){
                ambienteLabel.style.color = "green";
                ambienteLabel.style.fontWeight = "bold";
                if(ambiente2 == 0){
                    var ambiente3 = document.getElementById("editar_ambiente");
                    ambiente3.setAttribute("value","0");
                }
            }else{
                ambienteLabel.style.color = "red";
                ambienteLabel.style.fontWeight = "bold";
            }

            // Tiene que ser Y o N
            var vegetarianoLabel = document.getElementById("label_vegetariano");
            if(vegetariano2 == "Y" || vegetariano2 == "N"){
                vegetarianoLabel.style.color = "green";
                vegetarianoLabel.style.fontWeight = "bold";
            }else{
                vegetarianoLabel.style.color = "red";
                vegetarianoLabel.style.fontWeight = "bold";
            }

            // Tiene que ser Y o N
            var veganoLabel = document.getElementById("label_vegano");
            if(vegano2 == "Y" || vegano2 == "N"){
                veganoLabel.style.color = "green";
                veganoLabel.style.fontWeight = "bold";
            }else{
                veganoLabel.style.color = "red";
                veganoLabel.style.fontWeight = "bold";
            }

            // Tiene que ser Y o N
            var singlutenLabel = document.getElementById("label_singluten");
            if(singluten2 == "Y" || singluten2 == "N"){
                singlutenLabel.style.color = "green";
                singlutenLabel.style.fontWeight = "bold";
            }else{
                singlutenLabel.style.color = "red";
                singlutenLabel.style.fontWeight = "bold";
            }

            // ********************************************************* //
            // ********************************************************* //
            // ********************************************************* //

            if
            (
                nombre2.length != 0 && comida2 >= 0 && comida2 <= 5 && servicio2 >= 0 && servicio2 <= 5 &&
                ambiente2 >= 0 && ambiente2 <= 5 && precio2 >= 0 && precio2 <= 5 && (vegetariano2 == "Y" || vegetariano2 == "N") &&
                (vegano2 == "Y" || vegano2 == "N") && (singluten2 == "Y" || singluten2 == "N")
            ){

                // Rellenamos Objeto con Datos
                DATOS = {

                    _id                 : id,
                    nombre_restaurante  : nombre2,
                    comida              : comida2,
                    servicio            : servicio2,
                    ambiente            : ambiente2,
                    precio              : precio2,
                    vegetariano         : vegetariano2,
                    vegano              : vegano2,
                    sin_gluten          : singluten2

                }
                
                fetch('/editarRestaurante', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(DATOS)
                })
                
                .then(response => response.text())
                .then(data => {
                    // Se inserto correctamente el Restaurante
                    if(data == "Correcto"){
                        
                        modal.close(); 
                        BODY.style.overflowY = "visible";
                        BODY.style.opacity = "1";
                        modal.removeChild(atras_modal);
                        BODY.removeChild(modal);
                    }

                })
                .catch(error => console.error(error));

            }
 
        })

    }