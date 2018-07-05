function cambia1()
{
	var url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1571.8339406028306!2d-57.58631927533808!3d-38.00820649720849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dece46acafb1%3A0xfb7ec5aaaf8a2879!2sLucciano&#39;s+F%C3%A1brica!5e0!3m2!1ses!2sar!4v1523901693573";
	document.getElementById('google').src=url;
}

function cambia2()
{
	var url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.495512752369!2d-57.58089953147555!3d-38.01222612851394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a201849dd878504!2sEscuela+de+Educaci%C3%B3n+T%C3%A9cnica+N%C2%B0+5!5e0!3m2!1ses!2sar!4v1523903990773"
	document.getElementById('google').src=url;
}

function cambia3()
{
	var url = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12574.53498548436!2d-57.59291674999999!3d-38.00900255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dec51c47afef%3A0x92791be7ee62a49c!2sCervecer%C3%ADa+Antares!5e0!3m2!1ses!2sar!4v1523904147044"
	document.getElementById('google').src=url;
}

document.addEventListener('DOMContentLoaded', function(event) //carga el documento y ejecuta algunas funciones
{
	var gustosDeHelado = [
	{ 
		nombre: "americana",
		stock: 20
	},
	{ 
		nombre: "frutilla",
		stock: 15
	},
	{ 
		nombre: "chocolate",
		stock: 10
	},
	{ 
		nombre: "banana split",
		stock: 5
	},
	{ 
		nombre: "kinotos al whisky",
		stock: 1
	}];

	var list = document.getElementById("listaDeGustos");

	for(var i = 0; i < gustosDeHelado.length; i++)
	{
		var nuevoLi = document.createElement("option");
		nuevoLi.setAttribute("value", gustosDeHelado[i].nombre);
		nuevoLi.textContent = gustosDeHelado[i].nombre;
		list.appendChild(nuevoLi);
	}

});

/* <!DOCTYPE html>
<html>
<body>

<p>Select a new car from the list.</p>

<select id="mySelect" onchange="myFunction()">
  <option value="Audi">Audi
  <option value="BMW">BMW
  <option value="Mercedes">Mercedes
  <option value="Volvo">Volvo
</select>

<p>When you select a new car, a function is triggered which outputs the value of the selected car.</p>

<p id="demo"></p>

<script>
function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
}
</script>

</body>
</html> */