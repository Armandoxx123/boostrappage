function prov(){
	if(document.fprov.empresa.value.length == 0){
		alert('Ingresa el nombre de la empresa');
		document.fprov.empresa.focus();
		return 0;
	}
	if(document.fprov.nombre.value.length == 0){
		alert('ingresa el nombre del proveedor');
		document.fprov.nombre.focus();
		return 0;
	}
	var numeros = /^[0-9]+$/;
	var t = document.fprov.telefono.value; 
	var er_tlfono = /^([0-9\s\+\-])+$/; //comprueba campo teléfono de formulario //usa el método test de expresión regular
		if(!er_tlfono.test(t)||!numeros.test(t)||t.length > 10||t.length<=9) {
			alert('Campo TELEFONO no válido.');
			document.fprov.teléfono.focus(); 
			return 0; //no submit
		}
	var s = document.fprov.email.value;
	var filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
		if (!filtro.test(s)) {
			alert('Introduzca un email válido'); 
			document.fvalida.email.focus();
			return 0; 
		}
	alert('Has ingresado un nuevo proveedor');
	document.fprov.submit();
}
function prov2(){
	if(document.fprov.empresa.value.length == 0){
		alert('Ingresa el nombre de la empresa');
		document.fprov.empresa.focus();
		return 0;
	}
	if(document.fprov.nombre.value.length == 0){
		alert('ingresa el nombre del proveedor');
		document.fprov.nombre.focus();
		return 0;
	}
	var t = document.fprov.telefono.value; 
	var er_tlfono = /^([0-9\s\+\-])+$/; //comprueba campo teléfono de formulario //usa el método test de expresión regular
		if(!er_tlfono.test(t)) {
			alert('Campo TELEFONO no válido.') 
			return 0; //no submit
		}
	var s = document.fprov.email.value;
	var filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
		if (!filtro.test(s)) {
			alert('Introduzca un email válido'); 
			document.fvalida.correo.focus();
			return 0; 
		}
	alert('Has ingresado un nuevo proveedor');
	document.fprov.submit();
}
function cambio(elemento){
    if(document.fprov.empresa.value.length == 0){
		$(document.fprov.empresa).css("background-color", "#FA5858");
	}else{
		$(document.fprov.empresa).css("background-color", "#00FF40");
	}

	
}
function cambio1(elemento){
	var letras = /^[a-zA-Z]+$/;
	var l =  document.fprov.nombre.value;
	if (document.fprov.nombre.value.length == 0 || !letras.test(l)) {
		$(document.fprov.nombre).css("background-color", "#FA5858");
	}else{
		$(document.fprov.nombre).css("background-color", "#00FF40");
	}
}
function cambio2(elemento){
	var numeros = /^[0-9]+$/;
	var t = document.fprov.telefono.value; 
	var er_tlfono = /^([0-9\s\+\-])+$/; //comprueba campo teléfono de formulario //usa el método test de expresión regular
		if(!er_tlfono.test(t)||!numeros.test(t)||t.length > 10||t.length<=9) {
			$(document.fprov.telefono).css("background-color", "#FA5858");
		}else{
			$(document.fprov.telefono).css("background-color", "#00FF40");
		}
}
function cambio3(elemento){
	var s = document.fprov.email.value;
	var filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
		if (!filtro.test(s)) {
			$(document.fprov.email).css("background-color", "#FA5858");
		}else{
			$(document.fprov.email).css("background-color", "#00FF40");
		}
}
function buscar(){
	codigo = document.bus.codigo.value; 
	codigo = validarEntero(codigo);
	document.bus.codigo.value=codigo; 
	if (codigo==""){
		alert("Tiene que introducir un codigo bara buscar") 
		document.bus.codigo.focus();
		return 0;
	}
	function validarEntero(valor){
	/* Mediante parseInt intentaremos transformar el valor a número entero. Si el dato fue ingresado bien y ya lo era, no hará nada */				valor = parseInt(valor)
					/* Se comprobará si el valor es un número */
	if (isNaN(valor)) {
	/* Si no lo es, se devuelve una cadena vacía */ return "";
	}else{
/* De lo contrario se devuelve el número */ return valor;
		}
	}

	alert("Elemento buscado"); 
	document.bus.submit();
}
function cambiobuscar(elemento){
	codigo = document.bus.codigo.value; 
	codigo = validarEntero(codigo);
	document.bus.codigo.value=codigo; 
	if (codigo==""){
		$(document.bus.codigo).css("background-color","#FA5858");
	}else{
		$(document.bus.codigo).css("background-color","#00FF40");
	}
	function validarEntero(valor){
	/* Mediante parseInt intentaremos transformar el valor a número entero. Si el dato fue ingresado bien y ya lo era, no hará nada */				valor = parseInt(valor)
					/* Se comprobará si el valor es un número */
	if (isNaN(valor)) {
	/* Si no lo es, se devuelve una cadena vacía */ return "";
	}else{
/* De lo contrario se devuelve el número */ return valor;
		}
	}
}
function modificar(){
	codigo = document.bus.codigo.value; 
	codigo = validarEntero(codigo);
	document.bus.codigo.value=codigo; 
	if(codigo == ""){
		alert("Tiene que introducir un codigo para modificar") 
		document.bus.codigo.focus();
		return 0;
	}
	function validarEntero(valor){
	/* Mediante parseInt intentaremos transformar el valor a número entero. Si el dato fue ingresado bien y ya lo era, no hará nada */				valor = parseInt(valor)
					/* Se comprobará si el valor es un número */
	if (isNaN(valor)) {
	/* Si no lo es, se devuelve una cadena vacía */ return "";
	}else{
/* De lo contrario se devuelve el número */ return valor;
		}
	}

	alert("Elemento modificado"); 
	document.bus.submit();
}

function eliminar(){
	codigo = document.bus.codigo.value; 
	codigo = validarEntero(codigo);
	document.bus.codigo.value=codigo; 
	if(codigo == ""){
		alert("Tiene que introducir un codigo para eliminar") 
		document.bus.codigo.focus();
		return 0;
	}
	function validarEntero(valor){
	/* Mediante parseInt intentaremos transformar el valor a número entero. Si el dato fue ingresado bien y ya lo era, no hará nada */				valor = parseInt(valor)
					/* Se comprobará si el valor es un número */
	if (isNaN(valor)) {
	/* Si no lo es, se devuelve una cadena vacía */ return "";
	}else{
/* De lo contrario se devuelve el número */ return valor;
		}
	}

	alert("Elemento eliminado"); 
	document.bus.submit();
}
function bnombre(){
	if(document.busc.nombre.value.length == 0){
		alert('tienes que ingresar un producto para buscar');
		document.busc.nombre.focus();
		return 0;
	}
	alert("elemento buscado");
	document.busc.submit();
}
function bnombremo(elemento){
	if(document.busc.nombre.value.length == 0){
		$(document.busc.nombre).css("background-color","#FA5858");
	}else{
		$(document.busc.nombre).css("background-color","#00FF40");
	}
}