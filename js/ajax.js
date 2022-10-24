// (function () {

	function mostrarTiempo(){


	let Latitude = 38.711461;
	let Longitude = -4.175321;


	// Petición Ajax
	$.ajax({
		// Primero de que tipo si es un GET traer info o POST enviar
		type: 'GET',
		// de donde recogeremos esa información, esto dará error
		// al no estar subido a la red
		// url: "json/registro.json",
		// Utilizamos una API del tiempo para recoger los datos
		url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + Latitude + '&lon=' + Longitude + "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
		
		// dataType , que fornato es el archivo que esperamos
		dataType: 'jsonp',
	})
	// Cuando termines de cargar correctamente .done, ejecutamos una función
	.done(function (data) {
		console.log("Correcto");

		// console.log(data);

		mostrar_data(data);
	})
	// Si falla,... .fail
	.fail(function () {
		console.log("Algo ha fallado");
	})
	// .allways ---- de todos modos haz esto
	.always(function () {
		console.log("Completo!");
	})

	function mostrar_data(data){
		//Imagen
		let url = "img/img_clima/" + data.weather[0].icon + ".png";
		$(".imgClima").attr('src', url);

		let temperatura = Math.round(data.main.temp);
		$(".infoTemperatura").html(temperatura + "&#176;");

		let ciudad = data.name;
		$(".infoCiudad").html(ciudad);

		$(".climaLoading").fadeOut(200, function(){
			$(".climaInfo").fadeIn(200);
		})

		console.log("Entra");
	}
}

	$btnPrin.on("click", encenderApagar);
	$btnOnOff.on("click", encenderApagar);
		
// })();