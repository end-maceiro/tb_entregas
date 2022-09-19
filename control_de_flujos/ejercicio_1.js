let n1 = prompt("Dime un numero");
let n2 = prompt ("Dime otro numero");
let n3 = prompt ("Dime el ultimo numero");

if ( n1 < n2 && n1 < n3) {
    alert("El número menor es" + n1)
} 
else if ( n2 < n1 && n2 < n3) {
    alert("El número menor es" + n2)
}
else if ( n3 < n1 && n3 < n2) {
    alert("el número menor es" + n3)
}