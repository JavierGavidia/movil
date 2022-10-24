
function validarCampo(elemento) {

    let dato = elemento.value.trim();
    // let numero = parseInt(dato);
    let numero = parseFloat(dato);

    let patron = /^\d+$/;

    if (dato != null && dato != "") {

        if (patron.test(dato)) {
            // console.log("El campo es correcto.");
            $(".textInfo").text(".");
            $(".textInfo").css("opacity" , "0");
            return true;
        } else {
            // console.error("El campo incorrecto.");
            $(".textInfo").text("El campo es incorrecto.");
            $(".textInfo").css("opacity" , "1");
            document.getElementById("resultado").value = "";
            return false;
        }

    } else {
        // console.warn("Rellene el campo, por favor.");
        $(".textInfo").text("Rellene el campo, por favor.");
        $(".textInfo").css("opacity" , "1");
        document.getElementById("resultado").value = "";
        return false;
    }

}

function sumar() {

    var input1 = document.getElementById("operando1").value.trim();
    // var valor1 = parseInt(input1);
    var valor1 = parseFloat(input1);

    var input2 = document.getElementById("operando2").value.trim();
    // var valor2 = parseInt(input2);
    var valor2 = parseFloat(input2);

    if (input1 == null || input1 == "" || input2 == null || input2 == "") {
        // console.warn("Por favor rellene los campos");
        $(".textInfo").text("Por favor rellene los campos.");
        $(".textInfo").css("opacity" , "1");
        
    } else {
        var resultado = valor1 + valor2;
        $(".textInfo").text(".");
        $(".textInfo").css("opacity" , "0");
        document.getElementById("resultado").value = resultado;
    }
}


function restar() {

    var input1 = document.getElementById("operando1").value.trim();
    // var valor1 = parseInt(input1);
    var valor1 = parseFloat(input1);

    var input2 = document.getElementById("operando2").value.trim();
    // var valor2 = parseInt(input2);
    var valor2 = parseFloat(input2);

    if (input1 == null || input1 == "" || input2 == null || input2 == "") {
        // console.warn(); ("Por favor rellene los campos");
    } else {
        var resultado = valor1 - valor2;
        // alert("El valor del campo es: " + resultado);
        // console.log("Perfecto!!! El resultado de la resta es " + resultado);
        document.getElementById("resultado").value = resultado;
    }
}

function multiplicar() {

    var input1 = document.getElementById("operando1").value.trim();
    // var valor1 = parseInt(input1);
    var valor1 = parseFloat(input1);

    var input2 = document.getElementById("operando2").value.trim();
    // var valor2 = parseInt(input2);
    var valor2 = parseFloat(input2);

    if (input1 == null || input1 == "" || input2 == null || input2 == "") {
        // console.warn("Por favor rellene los campos");
    } else {
        var resultado = valor1 * valor2;
        // alert("El valor del campo es: " + resultado);
        // console.log("Perfecto!!! El resultado de la multiplicación es " + resultado);
        document.getElementById("resultado").value = resultado;
    }
}

function dividir() {

    var input1 = document.getElementById("operando1").value.trim();
    // var valor1 = parseInt(input1);
    var valor1 = parseFloat(input1);

    var input2 = document.getElementById("operando2").value.trim();
    // var valor2 = parseInt(input2);
    var valor2 = parseFloat(input2);

    if (input1 == null || input1 == "" || input2 == null || input2 == "") {
        // console.warn("Por favor rellene los campos");

    } else if ( valor2 == 0){


        // console.error("El divisor no puede ser 0");


    } else {
        var resultado = valor1 / valor2;
        
        // console.log("Perfecto!!! El resultado de la división es " + resultado);
        document.getElementById("resultado").value = resultado;
    }
}