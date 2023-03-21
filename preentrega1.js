


let boton__registro = document.getElementById("boton_registro");
boton_registro.addEventListener("click" , usuarios_registrados );

let lista_usuarios = [];

function usuarios_registrados(){

    let nombre_usuario = document.getElementById("nombre_usuario");
    let num_usuario= parseInt( document.getElementById("num_usuario"));
    let email_usuario = document.getElementById("email")
    let contrasenia_usuario = document.getElementById("contrasenia");

    
    let usuario = {nombre: nombre_usuario.value, numero:num_usuario.value,contrasenia: contrasenia_usuario.value, email:email_usuario.value};

    lista_usuarios.push(usuario);

    let arreglo_JSON = JSON.stringify(lista_usuarios);

    localStorage.setItem("lista_usuario", arreglo_JSON);


    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'

})

}








function sesion_usuario(){

    let usuario_de_lista = localStorage.getItem("lista_usuarios");

    usuario_de_lista = JSON.parse(usuario_de_lista);

    let nombre_usuario = document.getElementById("nombre_usuario").value;
    let num_usuario = document.getElementById("num_usuario")
    let contrasenia_usuario = document.getElementById("contrasenia");



    for ( let usuario of lista_usuarios){

        if( nombre_usuario ==  usuario.nombre && num_usuario == usuario.num_usuario && contrasenia == usuario.contrasenia){
            
        }
    
    else{
            document.body.innerHTML = `<h1>Usuario no encontrado ${nombre_usuario}</h1>
`
        }
    }
    } 

let boton_registro = document.getElementById("boton_registro");

let boton_de_inicio = document.getElementById(inicio_sesion);

boton_registro.addEventListener( "click", usuarios_registrados);
boton_de_inicio.addEventListener("click", sesion_usuario);






let lista_cuidados = [];



let nombre_mascota = document.getElementById("nombre_mascota");

let estadia = document.getElementById("estadia_mascota"); 
estadia = parseInt(estadia);

let dia_por_tamanio=0;

function monto_por_tamanio(){
    let tamanio_perro = document.getElementById("tamanio_perro");

if( typeof(estadia) == "number" && tamanio_perro == "chico" || tamanio_perro == "Chico"){
    dia_por_tamanio = 2000;
    console.log("Si la mascota es de tamaño chico y la estadia es por", estadia, "dias, el monto total es de", estadia *2000 ,"pesos.");
}
else if( typeof(estadia) == "number" && tamanio_perro == "mediano" || tamanio_perro == "Mediano"){
    dia_por_tamanio = 2500;
    console.log("Si la mascota es de tamaño mediano y la estadia es por", estadia, "dias, el monto total es de", estadia*2500 , "pesos");

}
else if( typeof (estadia) == "number" && tamanio_perro == "grande" || tamanio_perro == "Grande"){
    dia_por_tamanio = 3000;
    console.log("Si la mascota es de tamaño grande y la estadia es por", estadia, "dias, el monto total es de", estadia*3000 , "pesos");
}
else{
    console.log("error, vuelva a intentarlo.");
    monto_por_tamanio();
}
}
monto_por_tamanio();

let monto_total = dia_por_tamanio * estadia;
let monto_descuento=0;

function descuento_estadia(){
if(estadia<10){
    console.log("No tiene descuento.")
    descuento= 0;
    
}
else if( estadia>=10 && estadia<=20){
    let descuento = (monto_total * 10) /100;
    console.log( "El monto de descuento es de", descuento , "pesos.");
    let monto_descuento= monto_total-descuento;
    console.log("El monto total con descuento es de", monto_descuento);
    return descuento        
}
else if(estadia>=20){
    let descuento = (monto_total*20) / 100;
    console.log ("El monto de descuento es de", descuento , "pesos");
    let monto_descuento = monto_total-descuento;
    console.log("El monto total con descuento es de", monto_descuento);
    return descuento;
}
}

descuento_estadia();




let confirmacion = prompt("CONFIRMAR CUIDADO: SI O NO");



function confirmacion_de_cuidados(cuidado_uno){
    
    if( confirmacion == "NO" || confirmacion == "no" && confirmacion != "SI"){
        console.log("El cuidado fue cancelado.")
        console.log("¡Gracias por visitar nuestra página!");
    }
    
    else if ( confirmacion == "SI" || confirmacion == "si" && confirmacion != "NO"){
        
        console.log( "Su reserva fue confirmada." );

        
        let numero_telefono = prompt ("Ingrese su numero de teléfono");
        
    class Resumen{

        constructor(nombre_mascota, estadia, numero_telefono){
            this.nombre_mascota = nombre_mascota;
            this.estadia = estadia;
            this.numero_telefono= numero_telefono;
        }

        get_datos(){
            console.log("<--DATOS DEL CUIDADO-->");
            console.log("Nombre de la mascota:", this.nombre_mascota);
            console.log("Dias de estadia en Pet Hotel:", this.estadia);
            console.log("Número de teléfono:", this.numero_telefono );  
        }
        
    }
    
    let cuidado_uno = new Resumen ( nombre_mascota, estadia , numero_telefono );
    console.log ( cuidado_uno )
    cuidado_uno.get_datos();


    console.log("Muchas gracias por elegirnos");


    let contador=0;
    do{
        console.log("Hoy es el dia", contador, "de tu perrito en Pet Hotel");
        
        contador ++;

        function dias_en_PetHotel(){
            console.log( nombre_mascota, "te manda un perrisaludo!")
        }
        let saludos = [contador];
        saludos.forEach(dias_en_PetHotel)
    }
    while(contador<=estadia)
}

}
confirmacion_de_cuidados()

