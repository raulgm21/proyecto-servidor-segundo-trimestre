// ********************************************************************** //
// ********************* grafica_paginacion ***************************** //
// ********************************************************************** //

    // ---------------------------------------------------- //
    // Paginacion de los 100 resultados de la estatidista   //
    // en 10 secciones de 10.                               //
    // ---------------------------------------------------- //

    window.onload = function(){
        
        document.getElementById("refresh").addEventListener("click", () => {
            window.location.reload();
        })
        document.getElementById("buscar-submit").addEventListener("click",formREST);

        
        //Mostra Tabla Pagina 1 por defecto
        borrarTabla();
        crearTabla();
        var tabla = document.getElementById("tablaAdmin");
        var min = 0;
        var max = 10;
        no_elegido("pagina1");

        for(i = min ; i < max ; i++){
            
            let fila = document.createElement("tr");
            fila.setAttribute("id","filaTabla");
            
            let nombre = document.createElement("td");
            nombre.innerHTML = array_NOMBRE[i];

            let region = document.createElement("td");
            region.innerHTML = array_REGION[i];

            let provincia = document.createElement("td");
            provincia.innerHTML = array_PROVINCIA[i];

            let direccion = document.createElement("td");
            direccion.innerHTML = array_DIRECCION[i];

            let comida = document.createElement("td");
            comida.innerHTML = array_COMIDA[i];

            let precio = document.createElement("td");
            precio.innerHTML = array_PRECIO[i];

            let servicio = document.createElement("td");
            servicio.innerHTML = array_SERVICIO[i];

            let ambiente = document.createElement("td");
            ambiente.innerHTML = array_AMBIENTE[i];


            tabla.appendChild(fila);
            fila.appendChild(nombre);
            
            let pais = document.createElement("img");
            pais.setAttribute("src",`../img/banderas/${array_PAIS[i]}.png`);
            fila.appendChild(pais);
            
            //fila.appendChild(pais);
            fila.appendChild(region);
            fila.appendChild(provincia);
            fila.appendChild(direccion);
            fila.appendChild(comida);
            fila.appendChild(precio);
            fila.appendChild(servicio);
            fila.appendChild(ambiente);
        }
    }


    // Declaración Arrays
    array_NOMBRE        = [];
    array_PAIS          = [];
    array_VEGETARIANO   = [];
    array_VEGANO        = [];
    array_SINGLUTEN     = [];
    array_COMIDA        = [];
    array_PRECIO        = [];
    array_SERVICIO      = [];
    array_AMBIENTE      = [];
    array_PROVINCIA     = [];
    array_DIRECCION     = [];
    array_REGION        = [];

    // Rellenar array_PROVINCIA
    var provincia= document.querySelectorAll("p.texto_provincia");
        for(provincia_seleccionado of provincia){    
            array_PROVINCIA.push(provincia_seleccionado.innerHTML);
        }

    // Rellenar array_REGION
    var region= document.querySelectorAll("p.texto_region");
        for(region_seleccionado of region){    
            array_REGION.push(region_seleccionado.innerHTML);
        }

    // Rellenar array_DIRECCION
    var direccion= document.querySelectorAll("p.texto_direccion");
        for(direccion_seleccionado of direccion){    
            array_DIRECCION.push(direccion_seleccionado.innerHTML);
        }

    // Rellenar array_NOMBRE
    var nombre_restaurante = document.querySelectorAll("p.texto_restaurante");
        for(nombre_seleccionado of nombre_restaurante){    
            array_NOMBRE.push(nombre_seleccionado.innerHTML);
        }
            
    // Rellenar array_PAIS
    var pais = document.querySelectorAll("p.texto_pais");
        for(pais_seleccionado of pais){    
            array_PAIS.push(pais_seleccionado.innerHTML);
        }

    // Rellenar array_VEGETARIANO
    var vegetariano = document.querySelectorAll("p.texto_vegetariano");
        for(vegetariano_seleccionado of vegetariano){    
            array_VEGETARIANO.push(vegetariano_seleccionado.innerHTML);
        }

    // Rellenar array_VEGANO
    var vegano = document.querySelectorAll("p.texto_vegano");
        for(vegano_seleccionado of vegano){    
            array_VEGANO.push(vegano_seleccionado.innerHTML);
        }

    // Rellenar array_SINGLUTEN
    var singluten = document.querySelectorAll("p.texto_singluten");
        for(singluten_seleccionado of singluten){    
            array_SINGLUTEN.push(singluten_seleccionado.innerHTML);
        }

    // Rellenar array_COMIDA
    var comida = document.querySelectorAll("p.texto_comida");
        for(comida_seleccionado of comida){    
            array_COMIDA.push(comida_seleccionado.innerHTML);
        }

    // Rellenar array_PRECIO
    var precio = document.querySelectorAll("p.texto_precio");
        for(precio_seleccionado of precio){    
            array_PRECIO.push(precio_seleccionado.innerHTML);
        }

    // Rellenar array_SERVICIO
    var servicio = document.querySelectorAll("p.texto_servicio");
        for(servicio_seleccionado of servicio){    
            array_SERVICIO.push(servicio_seleccionado.innerHTML);
        }

    // Rellenar array_AMBIENTE
    var ambiente = document.querySelectorAll("p.texto_ambiente");
        for(ambiente_seleccionado of ambiente){    
            array_AMBIENTE.push(ambiente_seleccionado.innerHTML);
        }


    // Rellenamos

    function borrarTabla(){
        var cuerpo = document.querySelector("body");
        var tabla = document.getElementById("tablaAdmin");
        if(tabla){
            cuerpo.removeChild(tabla);
        }
        
    }

    function crearTabla(){
        var cuerpo = document.querySelector("body");
        var tabla = document.createElement("table");
        tabla.setAttribute("id","tablaAdmin");

        var fila = document.createElement("tr");

        var Nombre = document.createElement("th");
        Nombre.innerHTML = "Nombre de Restaurante";

        var Pais = document.createElement("th");
        Pais.innerHTML = "País";

        var Region = document.createElement("th");
        Region.innerHTML = "Región";

        var Provincia = document.createElement("th");
        Provincia.innerHTML = "Provincia";

        var Direccion = document.createElement("th");
        Direccion.innerHTML = "Dirección";

        var Comida = document.createElement("th");
        Comida.innerHTML = "Comida";

        var Precio = document.createElement("th");
        Precio.innerHTML = "Precio";

        var Servicio = document.createElement("th");
        Servicio.innerHTML = "Servicio";

        var Ambiente = document.createElement("th");
        Ambiente.innerHTML = "Ambiente";

        cuerpo.appendChild(tabla);

        tabla.appendChild(fila);

        fila.appendChild(Nombre);
        fila.appendChild(Pais);
        fila.appendChild(Region);
        fila.appendChild(Provincia);
        fila.appendChild(Direccion);
        fila.appendChild(Comida);
        fila.appendChild(Precio);
        fila.appendChild(Servicio);
        fila.appendChild(Ambiente);

    }

    function no_elegido(elegido){

        for(var i = 1 ; i <= 10 ; i++){
            var pagina = document.getElementById("pagina"+i);
            pagina.style.color = "black";
            pagina.style.backgroundColor = "rgb(240,240,240)"
        }

        var pagina = document.getElementById(elegido);
        pagina.style.color = "white";
        pagina.style.backgroundColor = "rgb(152, 13, 41)";

    }

    var boton = document.querySelectorAll("button.botonPagina");
        for(boton_seleccionado of boton){    
            boton_seleccionado.addEventListener("click", (e) => {
                
                // Resetear tabla
                borrarTabla();
                crearTabla();
                var tabla = document.getElementById("tablaAdmin");

                var hijo = e.target;
                var elegido = hijo.getAttribute("id");

                // Presionas Página 1
                if(hijo.getAttribute("id") == "pagina1"){
                    var min = 0;
                    var max = 10;

                    no_elegido(elegido);                

                }

                // Presionas Página 2
                if(hijo.getAttribute("id") == "pagina2"){
                    var min = 10;
                    var max = 20;

                    no_elegido(elegido); 
                }

                // Presionas Página 3
                if(hijo.getAttribute("id") == "pagina3"){
                    var min = 20;
                    var max = 30;

                    no_elegido(elegido); 
                }

                // Presionas Página 4
                if(hijo.getAttribute("id") == "pagina4"){
                    var min = 30;
                    var max = 40;

                    no_elegido(elegido); 
                }

                // Presionas Página 5
                if(hijo.getAttribute("id") == "pagina5"){
                    var min = 40;
                    var max = 50;
                    
                    no_elegido(elegido); 
                }

                // Presionas Página 6
                if(hijo.getAttribute("id") == "pagina6"){
                    var min = 50;
                    var max = 60;

                    no_elegido(elegido); 
                }

                // Presionas Página 7
                if(hijo.getAttribute("id") == "pagina7"){
                    var min = 60;
                    var max = 70;
                
                    no_elegido(elegido); 
                }

                // Presionas Página 8
                if(hijo.getAttribute("id") == "pagina8"){
                    var min = 70;
                    var max = 80;

                    no_elegido(elegido); 
                }

                // Presionas Página 9
                if(hijo.getAttribute("id") == "pagina9"){
                    var min = 80;
                    var max = 90;

                    no_elegido(elegido); 
                }

                // Presionas Página 10
                if(hijo.getAttribute("id") == "pagina10"){
                    var min = 90;
                    var max = 100;

                    no_elegido(elegido); 
                }


                // Mostrar Resultado
                for(i = min ; i < max ; i++){
            
                    let fila = document.createElement("tr");
                    fila.setAttribute("id","filaTabla");
                    
                    let nombre = document.createElement("td");
                    nombre.innerHTML = array_NOMBRE[i];

                    let region = document.createElement("td");
                    region.innerHTML = array_REGION[i];

                    let provincia = document.createElement("td");
                    provincia.innerHTML = array_PROVINCIA[i];

                    let direccion = document.createElement("td");
                    direccion.innerHTML = array_DIRECCION[i];

                    let comida = document.createElement("td");
                    comida.innerHTML = array_COMIDA[i];

                    let precio = document.createElement("td");
                    precio.innerHTML = array_PRECIO[i];

                    let servicio = document.createElement("td");
                    servicio.innerHTML = array_SERVICIO[i];

                    let ambiente = document.createElement("td");
                    ambiente.innerHTML = array_AMBIENTE[i];

                    tabla.appendChild(fila);
                    fila.appendChild(nombre);
                    
                    let pais = document.createElement("img");
                    pais.setAttribute("src",`../img/banderas/${array_PAIS[i]}.png`);
                    fila.appendChild(pais);
                    
                    fila.appendChild(region);
                    fila.appendChild(provincia);
                    fila.appendChild(direccion);
                    fila.appendChild(comida);
                    fila.appendChild(precio);
                    fila.appendChild(servicio);
                    fila.appendChild(ambiente);
                }

            })
        } 