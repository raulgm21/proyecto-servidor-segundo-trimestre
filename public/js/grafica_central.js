// ************************************************************************************** //      
// ************************************************************************************** //   
// ************************************************************************************** //   
//                                   GRAFICA CENTRAL
// ************************************************************************************** //   
// ************************************************************************************** //   
// ************************************************************************************** //   

var España = 0;
var Portugal = 0;
var France = 0;
var England = 0;
var Ireland = 0;
var Iceland = 0;
var Belgium = 0;
var Netherlands = 0;
var Switzerland = 0;
var Germany = 0;
var Denmark = 0;
var Italy = 0;
var Austria = 0;
var CzechRepublic = 0;
var Norway = 0;
var Sweden = 0;
var Finland = 0;
var Estonia = 0;
var Latvia = 0;
var Lithuania = 0;
var Lithuania = 0;
var Belarus = 0;
var Ukraine = 0;
var Moldova = 0;
var Romania = 0;
var Bulgaria = 0;
var Georgia = 0;
var Armenia = 0;
var Turkey = 0;
var Poland = 0;
var Slovakia = 0;
var Hungary = 0;
var Serbia = 0;
var Greece = 0;
var Macedonia = 0;
var Kosovo = 0;
var Albania = 0;
var Montenegro = 0;
var BosniaandHerzegovina = 0;
var Croatia = 0;
var Slovenia = 0;
var Wales = 0;
var Scotland = 0;

                            for(i = 0 ; i < 100 ; i++){
                            var pais_estadistica = document.getElementsByClassName("texto_pais")[i].textContent;
                                switch(pais_estadistica){
                                    case "Spain":
                                        España++;
                                        break;
                                    case "Scotland":
                                        Scotland++;
                                        break;
                                    case "Portugal":                      
                                        Portugal++;
                                        break;
                                    case "France":                                    
                                        France++;
                                        break;
                                    case "England":             
                                        England++;
                                        break;
                                    case "Ireland":                                      
                                        Ireland++;
                                        break;
                                    case "Iceland":                                        
                                        Iceland++;
                                        break;
                                    case "Belgium":                                       
                                        Belgium++;
                                        break;
                                    case "The Netherlands":                                        
                                        Netherlands++;
                                        break;
                                    case "Switzerland":                                       
                                        Switzerland++;
                                        break;
                                    case "Germany":                                        
                                        Germany++;
                                        break;
                                    case "Denmark":                                       
                                        Denmark++;
                                        break;
                                    case "Italy":                                       
                                        Italy++;
                                        break;
                                    case "Austria":                                       
                                        Austria++;
                                        break;
                                    case "Czech Republic":                                       
                                        CzechRepublic++;
                                        break;
                                    case "Wales":                                       
                                        Wales++;
                                        break;
                                    case "Slovenia":                                                                              
                                        Slovenia++;
                                        break;
                                    case "Croatia":                                                                              
                                        Croatia++;
                                        break;
                                    case "Bosnia and Herzegovina":                                                                              
                                        BosniaandHerzegovina++;
                                        break;
                                    case "Montenegro":                                                                              
                                        Montenegro++;
                                        break;
                                    case "Albania":                                                                              
                                        Albania++;
                                        break;
                                    case "Kosovo":                                                                     
                                        Kosovo++;
                                        break;
                                    case "Macedonia":                                                                             
                                        Macedonia++;
                                        break;
                                    case "Greece":                                                                             
                                        Greece++;
                                        break;
                                    case "Serbia":                                                                
                                        Serbia++;
                                        break;
                                    case "Hungary":                                                                  
                                        Hungary++;
                                        break;
                                    case "Slovakia":                                                                             
                                        Slovakia++;
                                        break;
                                    case "Poland":                                                                            
                                        Poland++;
                                        break;
                                    case "Turkey":                                                                 
                                        Turkey++;
                                        break;
                                    case "Armenia":                                                                   
                                        Armenia++;
                                        break;
                                    case "Georgia":                                                               
                                        Georgia++;
                                        break;
                                    case "Bulgaria":                                                                       
                                        Bulgaria++;
                                        break;
                                    case "Romania":                                                                         
                                        Romania++;
                                        break;
                                    case "Moldova":                                                                           
                                         Moldova++;
                                        break;
                                    case "Ukraine":                                                                             
                                        Ukraine++;
                                        break;
                                    case "Belarus":                                                                            
                                        Belarus++;
                                        break;
                                    case "Lithuania":                                                                            
                                        Lithuania++;
                                        break;
                                    case "Latvia":                                                                          
                                        Latvia++;
                                        break;
                                    case "Estonia":                                                                         
                                        Estonia++;
                                        break;
                                    case "Finland":                                                                         
                                        Finland++;
                                        break;
                                    case "Sweden":                                                                         
                                        Sweden++;
                                        break;
                                    case "Norway":                                                                         
                                        Norway++;
                                        break;
                                    default: 
                                        break;
                                }
                            }

                            let miCanvas   = document.getElementById("MiGrafica").getContext("2d");
                            var chart = new Chart(miCanvas, {
                                type:"doughnut",
                                data:{
                                    labels:[
                                        "España",
                                        "Portugal",
                                        "Francia",
                                        "Reino Unido",
                                        "Irlanda",
                                        "Islandia",
                                        "Bélgica",
                                        "Países Bajos",
                                        "Suiza",
                                        "Alemania",
                                        "Dinamarca",
                                        "Italia",
                                        "Austria",
                                        "República Checa",
                                        "Eslovenia",
                                        "Croacia",
                                        "Bosnia y Herzegovina",
                                        "Montenegro",
                                        "Albania",
                                        "Kosovo",
                                        "Macedonia del Norte",
                                        "Grecia",
                                        "Serbia",
                                        "Hungría",
                                        "Eslovaquia",
                                        "Polonia",
                                        "Turquía",
                                        "Armenia",
                                        "Georgia",
                                        "Bulgaria",
                                        "Rumanía",
                                        "Moldavia",
                                        "Ucrania",
                                        "Bielorrusia",
                                        "Lituania",
                                        "Letonia",
                                        "Estonia",
                                        "Finlandia",
                                        "Suecia",
                                        "Noruega",
                                        "Gales",
                                        "Escocia"

                                        ],

                                    datasets:[
                                        {
                                            label:"Total de Restaurantes",
                                            backgroundColor:[
                                                "rgb(239,37,77)",
                                                "rgb(32,210,22)",
                                                "rgb(22,143,210)",
                                                "rgb(27,110,155)",
                                                "rgb(233,186,72)",
                                                "rgb(43,72,162)",
                                                "rgb(247,243,28)",
                                                "rgb(50,65,126)",
                                                "rgb(250,12,12)",
                                                "rgb(175,96,15)",
                                                "rgb(201,16,87)",
                                                "rgb(165,251,71)",
                                                "rgb(248,121,95)",
                                                "rgb(119,168,191)",
                                                "rgb(100,134,248)",
                                                "rgb(186,114,102)",
                                                "rgb(21,0,123)",
                                                "rgb(94,3,34)",
                                                "rgb(255,13,6)",
                                                "rgb(5,67,105)",
                                                "rgb(231,255,0)",
                                                "rgb(45,253,240)",
                                                "rgb(85,94,200)",
                                                "rgb(53,118,50)",
                                                "rgb(106,169,194)",
                                                "rgb(220,91,137)",
                                                "rgb(188,71,91)",
                                                "rgb(245,203,63)",
                                                "rgb(245,63,200)",
                                                "rgb(23,155,21)",
                                                "rgb(248,231,141)",
                                                "rgb(232,141,5)",
                                                "rgb(252,241,29)",
                                                "rgb(26,248,96)",
                                                "rgb(63,186,103)",
                                                "rgb(103,8,66)",
                                                "rgb(11,11,11)",
                                                "rgb(8,15,102)",
                                                "rgb(255,241,100)",
                                                "rgb(213,83,67)",
                                                "rgb(149,231,51)",
                                                "rgb(138,239,18)"
                                            ],
                                            data:[
                                                España,
                                                Portugal,
                                                France,
                                                England,
                                                Ireland,
                                                Iceland,
                                                Belgium,
                                                Netherlands,
                                                Switzerland,
                                                Germany,
                                                Denmark,
                                                Italy,
                                                Austria,
                                                CzechRepublic,
                                                Slovenia,
                                                Croatia,
                                                BosniaandHerzegovina,
                                                Montenegro,
                                                Albania,
                                                Kosovo,
                                                Macedonia,
                                                Greece,
                                                Serbia,
                                                Hungary,
                                                Slovakia,
                                                Poland,
                                                Turkey,
                                                Armenia,
                                                Georgia,
                                                Bulgaria,
                                                Romania,
                                                Moldova,
                                                Ukraine,
                                                Belarus,
                                                Lithuania,
                                                Latvia,
                                                Estonia,
                                                Finland,
                                                Sweden,
                                                Norway,
                                                Wales,
                                                Scotland
                                            ]
                                        }
                                    ]
                                    
                                },
                                options: {
                                    responsive: false
                                }
                            })



// ************************************************************************************** //      
// ************************************************************************************** //   
// ************************************************************************************** //   
//                                   VEGETARIANO
// ************************************************************************************** //   
// ************************************************************************************** //   
// ************************************************************************************** //

var siVegetariano = 0;
var noVegetariano = 0;

for(i = 0 ; i < 100 ; i++){
    
    var vegetariano = document.getElementsByClassName("texto_vegetariano")[i].textContent;
    switch(vegetariano){
        case "Y":                                                                         
            siVegetariano++;
            break;
        case "N":                                                                         
            noVegetariano++;
            break;
        default: 
            break;
    }
}


let vegetarianoCanvas   = document.getElementById("CanvasVegetariano").getContext("2d");
var chart = new Chart(vegetarianoCanvas, {
    type:"doughnut",
    data:{
        labels:[
            "SI",
            "NO",
        ],

        datasets:[
            {
                label:"Total de Veganos",
                backgroundColor:
                [
                    "rgb(51,184,43)",
                    "rgb(184,51,43)",                           
                ],
                data:
                [
                    siVegetariano,
                    noVegetariano,                            
                ]
            }
        ]
                                    
        },
    options: {
        responsive: false
    }
})

// ************************************************************************************** //      
// ************************************************************************************** //   
// ************************************************************************************** //   
//                                   Vegano
// ************************************************************************************** //   
// ************************************************************************************** //   
// ************************************************************************************** //

var siVegano = 0;
var noVegano = 0;

for(i = 0 ; i < 100 ; i++){
    
    var Vegano = document.getElementsByClassName("texto_vegano")[i].textContent;
    switch(Vegano){
        case "Y":                                                                         
            siVegano++;
            break;
        case "N":                                                                         
            noVegano++;
            break;
        default: 
            break;
    }
}


let VeganoCanvas   = document.getElementById("CanvasVegano").getContext("2d");
var chart = new Chart(VeganoCanvas, {
    type:"doughnut",
    data:{
        labels:[
            "SI",
            "NO",
        ],

        datasets:[
            {
                label:"Total de Veganos",
                backgroundColor:
                [
                    "rgb(51,184,43)",
                    "rgb(184,51,43)",                           
                ],
                data:
                [
                    siVegano,
                    noVegano,                            
                ]
            }
        ]
                                    
        },
    options: {
        responsive: false
    }
})

// ************************************************************************************** //      
// ************************************************************************************** //   
// ************************************************************************************** //   
//                                    SIN GLUTEN
// ************************************************************************************** //   
// ************************************************************************************** //   
// ************************************************************************************** //

var siSinGluten = 0;
var noSinGluten = 0;

for(i = 0 ; i < 100 ; i++){
    
    var SinGluten = document.getElementsByClassName("texto_singluten")[i].textContent;
    switch(SinGluten){
        case "Y":                                                                         
            siSinGluten++;
            break;
        case "N":                                                                         
            noSinGluten++;
            break;
        default: 
            break;
    }
}


let GlutenCanvas   = document.getElementById("CanvasGluten").getContext("2d");
var chart = new Chart(GlutenCanvas, {
    type:"doughnut",
    data:{
        labels:[
            "SI",
            "NO",
        ],

        datasets:[
            {
                label:"Total de Sin Gluten",
                backgroundColor:
                [
                    "rgb(51,184,43)",
                    "rgb(184,51,43)",                           
                ],
                data:
                [
                    siSinGluten,
                    noSinGluten,                            
                ]
            }
        ]
                                    
        },
    options: {
        responsive: false
    }
})

// ************************************************************************************** //      
// ************************************************************************************** //   
// ************************************************************************************** //   
//                                     MEDIA
// ************************************************************************************** //   
// ************************************************************************************** //   
// ************************************************************************************** //

var comida = 0;
var precio = 0;
var servicio = 0;
var ambiente = 0;

for(i = 0 ; i < 100 ; i++){
    
    var ValorComida = document.getElementsByClassName("texto_comida")[i].textContent;
    var ValorPrecio = document.getElementsByClassName("texto_precio")[i].textContent;
    var ValorServicio = document.getElementsByClassName("texto_servicio")[i].textContent;
    var ValorAmbiente = document.getElementsByClassName("texto_ambiente")[i].textContent;

    comida = comida + parseInt(ValorComida);
    precio = precio + parseInt(ValorPrecio);
    servicio = servicio + parseInt(ValorServicio);
    ambiente = ambiente + parseInt(ValorAmbiente);
}

// Dividimos entre 100
comida = comida/100;
precio = precio/100;
servicio = servicio/100;
ambiente = ambiente/100;

let MediaCanvas   = document.getElementById("CanvasMedia").getContext("2d");
var chart = new Chart(MediaCanvas, {
    type:"bar",
    data:{
        labels:[
            "Comida",
            "Precio",
            "Servicio",
            "Ambiente"
        ],

        datasets:[
            {
                label:"Media",
                backgroundColor:
                [
                    "rgb(255,0,216)",
                    "rgb(134,255,107)",
                    "rgb(233,97,41)",
                    "rgb(162,31,168)",                           
                ],
                data:
                [
                    comida,
                    precio,
                    servicio,
                    ambiente

                ]
            }
        ]
                                    
        },
    options: {
        responsive: false
    }
})

// IMG

var cuerpo = document.querySelector("body");

let vegetarianoIMG = document.createElement("img");
        vegetarianoIMG.setAttribute("id","vegetariano_img");
        vegetarianoIMG.setAttribute("src","../img/vegetariano_img.png")
let veganoIMG = document.createElement("img");
        veganoIMG.setAttribute("id","vegano_img");
        veganoIMG.setAttribute("src","../img/vegano_img.png")
let glutenIMG = document.createElement("img");
        glutenIMG.setAttribute("id","sin_gluten_img");
        glutenIMG.setAttribute("src","../img/sin_gluten_img.png")

cuerpo.appendChild(vegetarianoIMG);
cuerpo.appendChild(veganoIMG);
cuerpo.appendChild(glutenIMG);

let comidaIMG = document.createElement("img");
        comidaIMG.setAttribute("class","imagenes_barra");
        comidaIMG.setAttribute("id","comida_img");
        comidaIMG.setAttribute("src","../img/comida.png");
let dineroIMG = document.createElement("img");
        dineroIMG.setAttribute("class","imagenes_barra");
        dineroIMG.setAttribute("id","dinero_img");
        dineroIMG.setAttribute("src","../img/dinero.png");
let servicioIMG = document.createElement("img");
        servicioIMG.setAttribute("class","imagenes_barra");
        servicioIMG.setAttribute("id","servicio_img");
        servicioIMG.setAttribute("src","../img/servicio.png");
let ambienteIMG = document.createElement("img");
        ambienteIMG.setAttribute("class","imagenes_barra");
        ambienteIMG.setAttribute("id","ambiente_img");
        ambienteIMG.setAttribute("src","../img/ambiente.png");

cuerpo.appendChild(comidaIMG);
cuerpo.appendChild(dineroIMG);
cuerpo.appendChild(servicioIMG);
cuerpo.appendChild(ambienteIMG);

let banderaIMG = document.createElement("img");
        banderaIMG.setAttribute("id","bandera_img");
        banderaIMG.setAttribute("src","../img/bandera_europa.png");

cuerpo.appendChild(banderaIMG);


