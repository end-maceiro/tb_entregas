var userOK = "Estudiante";
var passwordOK = "batman17";
var user, password, contador = 3;
var validation = false;


do {
    user = prompt("Usuario");
    password = prompt("Password");
    // los booleanos pueden almacenar operaciones
    // validation = user == userOK && password == passwordOK; 
    if (user == userOK && password == passwordOK) {
        validation = true;
    } else {
        contador--;
        alert("Usuario o password incorrecto.");
    }
    if (contador > 1 && validation == false) {
        alert("Piensa mejor, todavía tienes " + contador + " intentos.");
    } else if (contador == 1 && validation == false) {
        alert("Piensa mejor, todavía tienes " + contador + " intento.");
    }
} while (!validation && contador > 0);
if (validation) {
    alert("Usuario y password correctos.");
} else {
    alert("Has agotado tus tres intentos");
}


