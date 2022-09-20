let n1 = prompt("Dime un número");
let n2 = prompt ("Dime otro número");
let n3 = prompt ("Dime el ultimo número");

if ( n1 == n2 && n1 == n3)
    alert(`Los 3 números son iguales`);

else if ( n1 < n2 && n1 < n3) {
    alert(`El número menor es ${n1}`);
}

else if ( n2 < n1 && n2 < n3) 
    alert(`El número menor es ${n2}`);

else if ( n3 < n1 && n3 < n2) {
    alert(`El número menor es ${n3}`);
}