// ************************************************************** //
// ********************* scroll_index *************************** //
// ************************************************************** //

    // -------------------------------------------------------------- //
    // Nos va mostrando información cada vez que bajamos por la página
    // -------------------------------------------------------------- //

    // Variables para Reiniciar el Scroll
    var imagen_uno = 0;
    var imagen_dos = 0;
    var imagen_tres = 0;

    var texto_europa = 0;
    var imagen_login = 0;

    window.onscroll = function() {

        // Recogemos el Valor del eje Y
        var ejey = window.scrollY;
        
        var parrafo = document.getElementById("borrar");
        parrafo.style.display = "none";
        parrafo.innerHTML = ejey;

        var cuerpo = document.getElementById("cuerpo");
        var formulario = document.getElementById("form-imagen-login");
        
        // Reiniciar Animacion
        if(ejey < 100){
            imagen_uno = 0;
            imagen_dos = 0;
            imagen_tres = 0;
            texto_europa = 0;
            imagen_login = 0;

            while(cuerpo.firstChild){                                                                 
                cuerpo.removeChild(cuerpo.firstChild);
                        
            }

            while(formulario.firstChild){                                                                 
                formulario.removeChild(formulario.firstChild);
                        
            }
        }

        // Primera Seccion -> Bienvenida
        if(ejey >=  95 && imagen_uno == 0){

            imagen_uno++;

            let imagen = document.createElement("img");
            imagen.setAttribute("id","primera_imagen");
            imagen.setAttribute("src","../img/ciudad_uno.png")

            let texto = document.createElement("h1");
            texto.setAttribute("id","primer_texto");
            texto.innerHTML = "¡ Bienvenido a Ur-Rest !"
            
        
            cuerpo.appendChild(imagen);
            cuerpo.appendChild(texto);
            
        }

        // Segunda Seccion -> Asistente de Restaurantes
        if(ejey > 590 && imagen_dos == 0){
            imagen_dos++;

            let imagen = document.createElement("img");
            imagen.setAttribute("id","segunda_imagen");
            imagen.setAttribute("src","../img/ciudad_dos.png")

            let texto = document.createElement("h1");
            texto.setAttribute("id","segundo_texto");
            texto.innerHTML = "¡ Tu gran asistente de restaurantes !"
            
        
            cuerpo.appendChild(imagen);
            cuerpo.appendChild(texto);

        }

        // Tercera Seccion -> Cantidad de Restaurantes
        if(ejey >= 1100 && imagen_tres == 0){
            imagen_tres++;

            let imagen = document.createElement("img");
            imagen.setAttribute("id","tercera_imagen");
            imagen.setAttribute("src","../img/mapa_dibujo.png")

            let texto = document.createElement("h1");
            texto.setAttribute("id","tercer_texto");
            texto.innerHTML = "¡Más de Un Millón de Restaurantes Disponibles!"
            
            cuerpo.appendChild(imagen);
            
            cuerpo.appendChild(texto);
        }


        // Quinta Seccion -> Login / Registro + RRSS
        if(ejey >= 1600 && imagen_login == 0){

            imagen_login++;

            let texto = document.createElement("h1");
            texto.setAttribute("id","texto_form");
            texto.innerHTML = "¡Accede ahora mismo, tus Restaurantes están esperando!"

            let imagen = document.createElement("img");
            imagen.setAttribute("id","login_imagen");
            imagen.setAttribute("src","../img/torre_eiffel.png")

            let estrella1 = document.createElement("img");
            estrella1.setAttribute("id","estrella1");
            estrella1.setAttribute("src","../img/estrellas.png")

            let estrella2 = document.createElement("img");
            estrella2.setAttribute("id","estrella2");
            estrella2.setAttribute("src","../img/estrellas.png")

            let footer = document.createElement("img");
            footer.setAttribute("id","footer");
            footer.setAttribute("src","../img/footer.png")
            
            // ********************************************************** //
            // ********************** RRSS ****************************** //
            // ********************************************************** //

            let instagram = document.createElement("img");
            instagram.setAttribute("id","instagram");
            instagram.setAttribute("class","rrss");
            instagram.setAttribute("src","../img/instagram.png") 

            let facebook = document.createElement("img");
            facebook.setAttribute("id","facebook");
            facebook.setAttribute("class","rrss");
            facebook.setAttribute("src","../img/facebook.png")

            let twitter = document.createElement("img");
            twitter.setAttribute("id","twitter");
            twitter.setAttribute("class","rrss");
            twitter.setAttribute("src","../img/twitter.png")

            let whatsapp = document.createElement("img");
            whatsapp.setAttribute("id","whatsapp");
            whatsapp.setAttribute("class","rrss");
            whatsapp.setAttribute("src","../img/whatsapp.png")

            formulario.appendChild(imagen);
            formulario.appendChild(texto);
            formulario.appendChild(estrella1);
            formulario.appendChild(estrella2);
            formulario.appendChild(footer);

            formulario.appendChild(instagram);
            formulario.append(twitter);
            formulario.appendChild(facebook);
            formulario.appendChild(whatsapp);

            document.getElementById("instagram").addEventListener("click", () => {
                window.location.href = "https://www.instagram.com/";
            })
            document.getElementById("twitter").addEventListener("click", () => {
                window.location.href = "https://www.twitter.com/";
            })
            document.getElementById("facebook").addEventListener("click", () => {
                window.location.href = "https://www.facebook.com/";
            })
            document.getElementById("whatsapp").addEventListener("click", () => {
                window.location.href = "https://www.whatsapp.com/";
            })

        }

    };