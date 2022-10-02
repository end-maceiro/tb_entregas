let frase = prompt("Dime una frase");
let letra = prompt("Dime una letra");
let contador = 0;

for (let i = 0; i < frase.length; i++);
    if (letra == frase.charAt(i)) {   /*.charAt(i) --> devuelve un caracter que exista en un index especifico de una string.*/
        contador++;
    }

if (contador == 0) {
    alert("Tu letra no está en la frase!")
}

else if (contador == 1) {
    alert(`Tu letra aparece ${contador} vez en la frase`)
}

else if (contador > 1) {
    alert(`Tu letra aparece ${contador} veces en la frase`)
}