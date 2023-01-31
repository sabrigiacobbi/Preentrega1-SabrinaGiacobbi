

function saludar(){
    let usuario = prompt ("Ingrese su nombre");
    console.log("Hola", usuario , "!Bienvenido/a a Pet Hotel");
}
saludar()


console.log("Recuerde que si la estadia tiene una duración que supera los 10 días tiene un descuento del 10%, si supera los 20 dias tiene un 20% en el total")
let estadia = prompt("Ingrese la cantidad de dias de estadía");
estadia = parseInt(estadia);

let tamaño_perro = prompt ("Ingrese si su perro es de tamaño chico, mediano o grande");


if( estadia=typeof("number") && tamaño_perro == "chico" || tamaño_perro == "Chico"){
    dia_por_tamaño = 2000;
    console.log("Si la mascota es de tamaño chico y la estadia es por", estadia, "dias, el monto total es de", estadia *2000 ,"pesos.");
    
}
else if( estadia=typeof("number") && tamaño_perro == "mediano" || tamaño_perro == "Mediano"){
    dia_por_tamaño = 2500;
    console.log("Si la mascota es de tamaño mediano y la estadia es por", estadia, "dias, el monto total es de", estadia*2500 , "pesos");

}
else if( estadia=typeof("number") && tamaño_perro == "grande" || tamaño_perro == "Grande"){
    dia_por_tamaño = 3000;
    console.log("Si la mascota es de tamaño mediano y la estadia es por", estadia, "dias, el monto total es de", estadia*3000 , "pesos");

}
else{
    console.log("error, vuelva a intentarlo.");
}


let monto_total = dia_por_tamaño * estadia;

    function descuento_estadia(){
        if( estadia>=10 && estadia<=20){
            let descuento = (monto_total * 10) /100;
            console.log( "El monto de descuento es de", descuento , "pesos");
            console.log("El monto total con descuento es de", monto_total-descuento)
            return descuento
            
        }
        else if(estadia>=20){
            let descuento = (monto_total*20) / 100;
            console.log ("El monto de descuento es de", descuento , "pesos");
            console.log("El monto total con descuento es de", monto_total-descuento)
            return descuento;
        }
    }
    
descuento_estadia();




