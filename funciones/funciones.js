/* Ejercicio 1 */

function menor() {

    var n1 = parseInt(prompt("Dime un número"));
    var n2 = parseInt(prompt("Dime otro número"));
    var n3 = parseInt(prompt("Dime el ultimo número"));
    var nmenor;

    if (n1 <= n2 && n1 <= n3) {
        nmenor = n1;
        alert(`El número menor es ${n1}`);
    }

    else if (n2 <= n1 && n2 <= n3) {
        nmenor = n2;
        alert(`El número menor es ${n2}`);
    }

    else  {
        nmenor = n3;
        alert(`El número menor es ${n3}`);
    }
    console.log(nmenor)
}
menor() /*llamarla desde el boton*/