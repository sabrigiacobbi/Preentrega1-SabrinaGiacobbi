

fetch("cuidados.json")
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    data.forEach( data => {
      const imgElement = document.querySelector('.data_imagen');
      imgElement.src = data.imagen;
      document.querySelector('.data_h2').textContent = data.title;
      document.querySelector('.data_parrafo').textContent = data.descripcion;
    });
  })
  .catch(error => console.error(error))



let lista_usuarios = [];

function usuarios_registrados() {
  let nombre_usuario = document.getElementById("nombre_usuario");
  let num_usuario = document.getElementById("num_usuario");
  let contrasenia_usuario = document.getElementById("contrasenia");

  let usuario = {
    nombre: nombre_usuario.value,
    numero: parseInt(num_usuario.value),
    contrasenia: contrasenia_usuario.value,
  };

  if (
    (nombre_usuario.value === "",
    num_usuario.value === "",
    contrasenia_usuario.value === "")
  ) {
    alert("Todos los campos son obligatorios.");
  } else {
    Swal.fire({
      icon: "success",
      title: "FELICITACIONES!",
      text: "Te registraste con éxito",
      footer:"Ya puedes iniciar sesión",
    });
  }

  lista_usuarios.push(usuario);

  let arreglo_JSON = JSON.stringify(lista_usuarios);

  localStorage.setItem("lista_usuario", arreglo_JSON);
}



function sesion_usuario() {
  let lista_usuario = JSON.parse(localStorage.getItem("lista_usuario"));
  console.log(lista_usuario[0].nombre, "traido del local storage");

  let nombre_usuario = document.getElementById("nombre_usuario").value;
  let num_usuario = document.getElementById("num_usuario").value;
  let contrasenia_usuario = document.getElementById("contrasenia").value;

  if (
    (nombre_usuario == lista_usuario[0].nombre,
    num_usuario == lista_usuario[0].numero,
    contrasenia_usuario == lista_usuario[0].contrasenia)
  ) {
    window.location.replace(
      "http://127.0.0.1:5500/secciones/pagina_oficial.html"
    );
    console.log(window.location.href);
  } else {
    Swal.fire({
      icon: "error",
      title: "Usuario no encontrado.",
      text: "Intentelo nuevamente o registrese.",
    });
  }
}

/*PAGINA OFICIAL*/


function monto_por_tamanio() {
	let dia_por_tamanio = 0;
  let estadia = parseInt(document.getElementById("estadia_mascota").value);
  let tamanio_perro = document.getElementById("tamanio_perro").value;

  let resultado_presupuesto_sin_descuento = document.querySelector(
    ".resultado_presupuesto_sin_descuento "
    );
	
  if(typeof(estadia) == "number" && tamanio_perro == "chico" || tamanio_perro == "Chico" && typeof(estadia) == "number") {
    dia_por_tamanio = 2000;
    resultado_presupuesto_sin_descuento = estadia * dia_por_tamanio
    console.log(resultado_presupuesto_sin_descuento, 'resultado')
		descuento_estadia(estadia, resultado_presupuesto_sin_descuento);
  
  } else if( typeof(estadia) == "number" && tamanio_perro == "mediano" || tamanio_perro == "Mediano" && typeof(estadia) == "number" ) {
		dia_por_tamanio = 2500;
    resultado_presupuesto_sin_descuento = estadia * dia_por_tamanio;
    console.log(resultado_presupuesto_sin_descuento, 'resultado');
		descuento_estadia(estadia, resultado_presupuesto_sin_descuento);
	} else if (typeof(estadia) == "number" && tamanio_perro == "grande" || tamanio_perro == "Grande" && typeof(estadia) == "number") {
		dia_por_tamanio = 3000;
    resultado_presupuesto_sin_descuento = estadia * dia_por_tamanio
    descuento_estadia(estadia, resultado_presupuesto_sin_descuento)
	} else {
		alert('Error, vuelva a intentarlo')
	}



}


function descuento_estadia(estadia, presupuesto) {
	let descuento = 0;
	let monto_total = 0;

  if (estadia < 10) {
		console.log(presupuesto)
  } else if (estadia >= 10 && estadia <= 20) {
    descuento = presupuesto * 0.1;
    monto_total = presupuesto - descuento;	
    
    
    console.log("El monto total con descuento es de", monto_total);
  } else if (estadia >= 20) {
    descuento = presupuesto * 0.2;
    console.log("El monto de descuento es de", descuento, "pesos");
    monto_total = presupuesto - descuento;
    console.log("El monto total con descuento es de", monto_total); 
  }
}



function cancelacion_de_cuidados() {
	let cancela_cuidado = document.getElementById("boton_cancela_cuidado").value
  if(cancela_cuidado) {
		console.log("se cancelo")
    alert("EL CUIDADO FUE CANCELADO")
		return false
	}
}

lista_cuidados= [];
function confirmacion_de_cuidados() {
	let confirma_cuidado = document.getElementById("boton_confirma_cuidado").value;
  let nombre_mascota = document.getElementById("nombre_mascota").value;
  let estadia = document.getElementById("estadia_mascota").value;
  let fecha_desde = document.getElementById("fecha_desde").value;
  let fecha_hasta = document.getElementById("fecha_hasta").value;
  let tamanio_mascota = document.getElementById("tamanio_perro").value;

  let cuidados_confirmados = {
    nombre_mascota: nombre_mascota.value,
    estadia: estadia.value,
    fecha_desde: fecha_desde.value,
    fecha_hasta: fecha_hasta.value,
    tamanio_mascota: tamanio_mascota.value,
  };
  if(confirma_cuidado) {
		alert("se reservo el cuidado");
    let card = document.getElementById("seccion_card")
    card.style.backgroundColor= "#cddcc5";
    card.style.borderRadius = "10px";
    card.style.width = "400px"
    card.style.height="500px"


    let titulo_Card = document.createElement("h1");
    titulo_Card.innerText = "CUIDADO CONFIRMADO";
    titulo_Card.style.color= "#99b68a"

    let parrafo_card1 = document.createElement("p");
    parrafo_card1.innerText = "El nombre de la mascota a cuidar es:", nombre_mascota;
    
    let parrafo_card2 = document.createElement("p");
    parrafo_card2.innerText = "El cuidado es desde", fecha_desde ;

    let parrafo_card3 = document.createElement("p");
    parrafo_card3.innerText = "El cuidado es hasta", fecha_hasta;

    let parrafo_card4 = document.createElement("p");
    parrafo_card4.innerText = estadia;
    
    card.appendChild(titulo_Card);
    card.appendChild(parrafo_card1);
    card.appendChild(parrafo_card2);
    card.appendChild(parrafo_card3);
    card.appendChild(parrafo_card4);
    // card.appendChild(parrafo_card5);

	 return true	
	}

  lista_cuidados.push(cuidados_confirmados);
  let arreglo = JSON.stringify(cuidados_confirmados);
  localStorage.setItem("cuidados_confirmados", arreglo)
}

	







