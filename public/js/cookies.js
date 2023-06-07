// ************************************************** //
// ******************* cookies ********************** //
// ************************************************** //

    // ------------------------------------------ //
    // Apartado de las Cookies, y la creacion y
    // politica. Aunque no las uses 
    // ----------------------------------------- //

    var BODY = document.querySelector("body");

// Si no existe la cookie que nos sale en aceptar, nos saldrá el tipico mensaje de aceptarlas
if(document.cookie.indexOf("COOKIEPRUEBA") == -1){

    // Crear el Modal de las Cookies
    var modal = document.createElement("dialog");
    modal.setAttribute("id","modal_cookies");
    BODY.appendChild(modal);
    modal_cookies.showModal();

    BODY.style.overflowY = "hidden";
    BODY.style.opacity = "0.5";

    let titulo = document.createElement("h1");
    titulo.setAttribute("id","titulo_modal");
    titulo.innerHTML = " Aviso de Cookies ";

    let texto = document.createElement("p");
    texto.setAttribute("id","texto_cookies");
    texto.innerHTML = "Utilizamos Cookies propias y de Terceros para mejorar nuestros servicios. Si continúa con la navegación, consideramos que acepta este uso. Para sabe más sobre nuestra Política de Cookies, presione en Más Información."

    let informacion = document.createElement("button");
    informacion.setAttribute("id","informacion_cookies");
    informacion.setAttribute("class","botones_cookies");
    informacion.innerHTML = "Más Información";

    let aceptar = document.createElement("button");
    aceptar.setAttribute("id","aceptar_cookies");
    aceptar.setAttribute("class","botones_cookies");
    aceptar.innerHTML = "Aceptar";

    modal.appendChild(titulo);
    modal.appendChild(texto);
    modal.appendChild(informacion);
    modal.appendChild(aceptar);

    // ******************************** //
    // Presionas en Información Cookies //
    // ******************************** //

    document.getElementById("informacion_cookies").addEventListener("click",() => {

        // Cerramos el Modal
        modal_cookies.close();

        // Creamos el Modal de Más Info
        var modal2 = document.createElement("dialog");
        modal2.setAttribute("id","modal2_cookies");
        BODY.appendChild(modal2);
        modal2_cookies.showModal();

        let titulo = document.createElement("h1");
        titulo.setAttribute("id","titulo_modal");
        titulo.innerHTML = " Política de Cookies ";

        modal2.appendChild(titulo);

        // Cargar el Contenido del Fichero
        fetch('../privacity/politica_cookies.txt',{})

        .then (respuesta => respuesta.text())

        .then ((respuestaJSON) => {
        
            let texto = document.createElement("p");
            texto.setAttribute("id","textoCOOKIES_modal")
            texto.innerHTML = respuestaJSON;
            modal2.appendChild(texto);

        })
                        
        .catch (() => {
            console.log("@Fetch : Error ")
        })

        let atras_modal = document.createElement("img");
        atras_modal.setAttribute("src","../img/atras.png");
        atras_modal.setAttribute("id","atras_modal");
        atras_modal.innerHTML = "Atrás";
        modal2.appendChild(atras_modal);

        // Salir de Más Información
        document.getElementById("atras_modal").addEventListener("click", () => {
            modal2_cookies.close();
            modal_cookies.showModal();
            modal2.removeChild(atras_modal);
            BODY.removeChild(modal2);
        })

    })

    // ******************************** //
    // Presionas en Aceptar Cookies     //
    // ******************************** //

    document.getElementById("aceptar_cookies").addEventListener("click",() => {

        // Estableceremos una Cookie de Prueba aunque no se le de ningun uso
        document.cookie = "COOKIEPRUEBA=NODEJS; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        modal_cookies.close();
        BODY.style.overflowY = "visible";
        BODY.style.opacity = "1";
    })
}