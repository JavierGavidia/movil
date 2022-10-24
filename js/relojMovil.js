// (function () {

'use strict'

let encendido = false;

let $btnPrin = $("#btnPrin");
let $btnOnOff = $(".cont-btnOnOff");

let intervalo = null;
let intervaloImg = null;


let $encenderMovil = function () {

    $apagarMovil();
    encendido = true;

    let contenidoInicio = "";

    if ($(".contentPantallaOn").length === 0) {
        contenidoInicio = '<div class="contentPantallaOn">';
        $(".pantalla").append(contenidoInicio);
    }

    let $pantallaOn = $(".contentPantallaOn");

    // $pantallaOn.css("width", "100%")
    //            .css("height","100%")
    //            .css("padding-top", "20px")
    //            .css("background-position", "top")
    //            .css("background-size", "cover");


    contenidoInicio = "";
    contenidoInicio += '    <div class="pantallaInicio">';
    contenidoInicio += '        <div class="widget">';
    contenidoInicio += '            <div class="fecha">';
    contenidoInicio += '                <p class="diaSemana" id="diaSemana"></p>';
    contenidoInicio += '                <p class="dia" id="dia"></p>';
    contenidoInicio += '                <p>de </p>';
    contenidoInicio += '                <p class="mes" id="mes"></p>';
    contenidoInicio += '                <p>del </p>';
    contenidoInicio += '                <p class="year" id="year"></p>';
    contenidoInicio += '            </div>';
    contenidoInicio += '            <div class="reloj">';
    contenidoInicio += '                <p class="horas" id="horas"></p>';
    contenidoInicio += '                <p>:</p>';
    contenidoInicio += '                <p class="minutos" id="minutos"></p>';
    contenidoInicio += '                <p>:</p>';
    contenidoInicio += '                <div class="caja-segundos">';
    contenidoInicio += '                    <p class="ampm" id="ampm"></p>';
    contenidoInicio += '                    <p class="segundos" id="segundos"></p>';
    contenidoInicio += '                </div>';
    contenidoInicio += '            </div>';
    contenidoInicio += '        </div>';
    contenidoInicio += '        <div class="espacioApps">';
    contenidoInicio += '             <div class="appTiempo" id="appTiempo"></div>';
    contenidoInicio += '             <div class="appCalculadora1" id="appCalculadora1"></div>';
    contenidoInicio += '             <div class="appFotos" id="appFotos"></div>';
    contenidoInicio += '             <div class="appVacio" id="appVacioId"></div>';
    contenidoInicio += '             <div class="appCalculadora2" id="appCalculadora2"></div>';
    contenidoInicio += '             <div class="appReloj" id="appReloj"></div>';
    contenidoInicio += '        </div>';
    contenidoInicio += '    </div>';
    contenidoInicio += '</div>';

    // $pantallaOn.attr({'style' : 'color: red', 'style' : "height:100%"});
    $pantallaOn.append(contenidoInicio);

    toolTip($("#appCalculadora2"), "Calculadora sencilla");
    toolTip($("#appReloj"), "Reloj");
    toolTip($("#appVacioId"), "Vacio");
    toolTip($("#appTiempo"), "Tiempo");

    // Actualizar la Hora con Date

    let actualizarHora = function () {
        let fecha = new Date();

        let horas = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            ampm,
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        // Seleccionar de distintas maneras los parrafos del DOM
        let pHoras = document.querySelector("#horas"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementsByClassName("segundos")[0],
            pAMPM = document.querySelector(".ampm"),
            pDiaSemana = document.getElementById("diaSemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");

        //Mostramos la información en pantalla
        // Fecha
        let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        pMes.textContent = meses[mes];
        pYear.textContent = year;

        // Reloj
        if (horas >= 12) {
            horas = horas - 12;
            ampm = "PM";
        } else {
            ampm = "AM";
        }
        if (horas == 0) {
            horas = 12;
        }
        if (horas < 10) { horas = "0" + horas; }

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        if (segundos < 10) { segundos = "0" + segundos; }

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
    };

    // Actualizamos la pantalla con una imagen aleatoria

    let actualizarFondo = function () {

        // let pantalla = document.querySelector("#pantalla");

        // con floor() redondeamos el número a entero
        // let imgAzar = Math.floor(Math.random() * 5) + 1;
        // con trunc() cogemos unicamente la parte entera del número
        let imgAzar = Math.trunc(Math.random() * 5) + 1;
        // console.log(imgAzar);

        let numText = imgAzar.toString();

        //Con JQuery
        // $(".pantallaOn").attr("src", "img/img-resized/fondoMobile_0" + numText + ".jpg"); No funciona ????
        $pantallaOn.css("background-image", "url(img/img-resized/fondoMobile_0" + numText + ".jpg)");

        //Con JavaScript
        // pantalla.style.backgroundImage = "url(img/img-resized/fondoMobile_0" + numText + ".jpg)";
        // document.getElementById("pantalla").src = "img/img-resized/fondoMobile_0" + numText + ".jpg";
        // console.log(pantalla.src); Con SRC no funciona

    }

    actualizarFondo();
    actualizarHora();

    intervalo = setInterval(actualizarHora, 1000);
    intervaloImg = setInterval(actualizarFondo, 10000);

}

// Funcion Apgar Movil
let $apagarMovil = function () {
    let $pantallaOn = $(".contentPantallaOn");
    $pantallaOn.remove();

    clearInterval(intervalo);
    clearInterval(intervaloImg);

    encendido = false;
};

let $borrarPantalla = function () {
    let $pantallaOn = $(".contentPantallaOn");
    $(".pantallaInicio").remove();
    clearInterval(intervalo);
    clearInterval(intervaloImg);
    $pantallaOn.css("background-image", "none");

    // La ponemos en false para que se vuelva a la ventana de inicio con los botones principales
    encendido = false;

}

// ---------------------------------------

let appTiempo = function() {

    $borrarPantalla();

    mostrarTiempo();

    let $pantallaOn = $(".contentPantallaOn");
    let contenidoTiempoApp = "";
    contenidoTiempoApp += '<div class="climaAPP">';
    // Cargando
    contenidoTiempoApp +=   '<div class="climaLoading">';
	contenidoTiempoApp +=       '<i class="fa fa-spin fa-refresh"></i>';
    contenidoTiempoApp +=       '<br>';
    contenidoTiempoApp +=       '<span>Cargando</span>';
	contenidoTiempoApp +=   '</div>';
    
    // Información
    contenidoTiempoApp +=   '<div class="climaInfo">';
	contenidoTiempoApp +=       '<img src="img/img_clima/02d.png" class="imgClima">';
	contenidoTiempoApp +=       '<br>';
	contenidoTiempoApp +=       '<span class="infoTemperatura">35&#176;</span>';
	contenidoTiempoApp +=       '<br>';
	contenidoTiempoApp +=       '<span class="infoCiudad">San Isidro Coronado, Costa Rica</span>';
    contenidoTiempoApp +=   '</div>';

    contenidoTiempoApp +=   '<div class="climaVolver">';
    contenidoTiempoApp +=       '<i class="far fa-hand-point-left" onclick="encenderApagar()"></i>';
    contenidoTiempoApp +=   '</div>';
    
    contenidoTiempoApp += '</div>';

    $pantallaOn.append(contenidoTiempoApp);

    toolTip($(".climaVolver"), "Volver");

};

// ---------------------------------------

function appCalculadora1() {

    $borrarPantalla();
    let $pantallaOn = $(".contentPantallaOn");
    let contenidoCalculadora = "";
    contenidoCalculadora += '<div class="calculadoraAPP">';

    contenidoCalculadora += '    <div class="form-floating">';
    contenidoCalculadora += '        <input type="text" class="form-control altura" name="operando1" id="operando1" placeholder="Operando 1" onblur="validarCampo(this)" >';
    contenidoCalculadora += '        <label for="floatingPassword" style="margin-top:-5px">Operando 1:</label>';
    contenidoCalculadora += '    </div>';
    contenidoCalculadora += '    <div class="form-floating">';
    contenidoCalculadora += '        <input type="text" class="form-control altura" name="operando2" id="operando2" placeholder="Operando 2" onblur="validarCampo(this)" >';
    contenidoCalculadora += '        <label for="floatingInput" style="margin-top:-5px">Operando 2</label>';
    contenidoCalculadora += '    </div>';
    contenidoCalculadora += '    <hr>';
    contenidoCalculadora += '    <div class="form-floating">';
    contenidoCalculadora += '        <input type="text" class="form-control" name="resultado" id="resultado" placeholder="Resultado" disabled>';
    contenidoCalculadora += '        <label for="floatingPassword">Resultado:</label>';
    contenidoCalculadora += '    </div>';
    contenidoCalculadora += '    <div class="operadores">';
    contenidoCalculadora += '       <button class="btn btn-lg btn-primary botones" type="button" id="botonSumar" onclick="sumar()">Sumar</button>';
    contenidoCalculadora += '       <button class="btn btn-lg btn-primary botones" type="button" id="botonRestar" onclick="restar()">Restar</button>';
    contenidoCalculadora += '       <button class="btn btn-lg btn-primary botones" type="button" id="botonMultiplicar" onclick="multiplicar()">Multiplicar</button>';
    contenidoCalculadora += '       <button class="btn btn-lg btn-primary botones" type="button" id="botonDividir" onclick="dividir()">Dividir</button>';
    contenidoCalculadora += '       <p class="textInfo" id="textInfo">Info</p>';
    contenidoCalculadora += '       <button class="btn btn-lg btn-secondary botones" type="button" id="botonVolver" onclick="encenderApagar()"><i class="fas fa-caret-square-left"></i></button>';
    contenidoCalculadora += '    </div>';

    contenidoCalculadora += '</div>'

    $pantallaOn.append(contenidoCalculadora);

    toolTip($("#botonVolver"), "Volver");
    toolTip($("#botonSumar"), "Operación");

    // $("#botonVolver").mouseenter(function(){console.log("Volver")});
    // $("#botonVolver").on("mouseenter",function(){console.log("Volver")});

    // let $pantallaCalculadora = $(".calculadoraAPP");

    // Solo funciona en un servidor
    // $pantallaCalculadora.load('./calculadora/operacionesMat.html');

};

// ------------------ APP Calculadora 2 ---------------------

function appCalculadora2(){

    $borrarPantalla();
    let $pantallaOn = $(".contentPantallaOn");
    let contenidoCalculadora2 = "";
    contenidoCalculadora2 += '<div class="calculadora2APP">';

    contenidoCalculadora2 += '</div>'

    $pantallaOn.append(contenidoCalculadora2);
}

// ----------------------------------------

// Función para apagar o encender el movil

function encenderApagar() {

    if (encendido == false) {
        $encenderMovil();
        // console.log(encendido);
        // Animamos los botones de las aplicaciones
        let $apps = $(".espacioApps").find("div");
        $apps.on("mouseenter", function () {
            gsap.to(this, { duration: 1, ease: "elastic.out( 1, 0.3)", scale: 1.2 });
        });

        $apps.on("mouseout", function () {
            gsap.to(this, { duration: 1, ease: "elastic.out( 1, 0.3)", scale: 1 });
        });

        let reloj = true;

        $apps.on("click", function () {
            let idApp = ($(this).attr('id'));
            console.log(idApp);
            if (idApp === "appReloj") {
                // .toogle, para mostrar o no un elemento (no lo elímina del DOM, pero no ocupa lugar),..
                // .toogle(velocidad(opcional), funcion de aceleración(opc),devolución de llamada(función)(opc))
                $(".widget").toggle('slow', "swing", function () {

                    if (reloj === true) {
                        console.log("Reloj apagado");
                        reloj = false;
                    } else {
                        console.log("Reloj encendido");
                        reloj = true;
                    }
                });
            }
        });

        // Asignar funciones a cada boton de APPs
        // APP Tiempo
        let $btnAppTiempo = $(".appTiempo");
        $btnAppTiempo.on("click", appTiempo);

        // APP Calculadora 1
        let $btnAppCalculadora1 = $(".appCalculadora1");
        $btnAppCalculadora1.on("click", appCalculadora1);

        // APP Calculadora 2
        let $btnAppCalculadora2 = $(".appCalculadora2");
        $btnAppCalculadora2.on("click", appCalculadora2);

    } else {
        $apagarMovil();
        // console.log(encendido);
    }
}

// ---------------------------------------

function toolTip(elemento,texto){

    $('.toolTip').remove();

    elemento.mouseenter(function () {

        // Creamos el atributo title
        elemento.attr('title' , texto);
        let titulo = $(this).attr('title');
        console.log(titulo);
        // Guardamos el titulo en atributo data- y eliminamos el titulo original,
        // para que no salga el tooltip nativo
        $(this).data('titulo',titulo).removeAttr('title');

        // Añadir nuestro propio tooltip
        $('<p class="toolTip"></p>')
            .text(titulo)
            .appendTo('body')
            .fadeIn('slow');

        // setInterval(intervalo);
    });

    elemento.mouseleave(function () { 
        $(this).attr('title', $(this).data('titulo'));
        // Eliminamos el tooltip
        $(".toolTip").fadeOut('slow');
        $('.toolTip').remove();
        // clearInterval(intervalo);
    });

    elemento.mousemove(function(e){
        // console.log('Moviendo',e);
        // Capturar posición X e Y del ratón sobre el elemento que lanza el tooltip
        let ratonX = e.pageX - 8,
            ratonY = e.pageY - 20,
        // Ancho y Alto del tooltip para posicionarlo mejor
            anchoElemento = $('.toolTip').width() / 2,
            altoElemento = ($('.toolTip').height() * 2) - $('.toolTip').height() +10;

        // Hacer que el elemento se mueva junto al puntero  
        $('.toolTip').css({
            top: ratonY - altoElemento,
            left: ratonX - anchoElemento
            // top: ratonY,
            // left: ratonX
        });
    });

    elemento.on("click", function(){
        $('.toolTip').remove();
    })

    // let intervalo = setInterval(function(){
    //     $(".toolTip").fadeOut('slow');
    //     $(".toolTip").remove();
    // }, 7000);

};


// ------------------------------------------------


// -----------------------------------------------


// function toolTip(elemento,texto){

//     $(elemento).hover(function(){
//         // HOVER IN

//         // Creamos el atributo title
//         elemento.attr('title' , texto);
//         let titulo = $(this).attr('title');
//         console.log(titulo);
//         // Guardamos el titulo en atributo data- y eliminamos el titulo original,
//         // para que no salga el tooltip nativo
//         $(this).data('titulo',titulo).removeAttr('title');

//         // Añadir nuestro propio tooltip
//         $('<p class="toolTip"></p>')
//             .text(titulo)
//             .appendTo('body')
//             .fadeIn('slow');

//     }, function(){
//         // HOVER OUT

//         // Reponemos de nuevo el title nativo
//         $(this).attr('title', $(this).data('titulo'));
//         // Eliminamos el tooltip
//         $('.toolTip').remove();

//     }).mousemove(function(e){
//         // console.log('Moviendo',e);
//         // Capturar posición X e Y del ratón sobre el elemento que lanza el tooltip
//         let ratonX = e.pageX - 8,
//             ratonY = e.pageY - 20,
//         // Ancho y Alto del tooltip para posicionarlo mejor
//             anchoElemento = $('.toolTip').width() / 2,
//             altoElemento = $('.toolTip').height() * 2;

//         // Hacer que el elemento se mueva junto al puntero  
//         $('.toolTip').css({
//             top: ratonY - altoElemento,
//             left: ratonX - anchoElemento
//             // top: ratonY,
//             // left: ratonX
//         });
        
//     });

// }

// ---------------------------------------------


//     $("#btnPrin").on("blur",function() {
//         console.log("Hola Caracola");
//    });

    // $btnPrin.on("click", encenderApagar);
	// $btnOnOff.on("click", encenderApagar);

// }())