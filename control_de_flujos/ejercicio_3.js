var n1= parseInt(prompt("Dime un número:"));
var operacion = prompt("Sumar o Restar (+/-): ");

/* if (operacion != "+ || -") {/
    alert("La selección es incorrecta");} */

var n2= parseInt(prompt("Dime otro número"));

console.log()

if (operacion == `+`) {
        alert("El resultado es: " + (n1 + n2));
    }

if (operacion == `-`) {
    alert("El resultado es: " + (n1 - n2));
}

if (operacion != `+`&& operacion != `-`) {
    alert("La selección de operacion es incorrecta");
}


