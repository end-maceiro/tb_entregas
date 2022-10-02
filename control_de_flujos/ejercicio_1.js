let n1 = parseInt(prompt("Dime un número"));
let n2 = parseInt(prompt("Dime otro número"));
let n3 = parseInt(prompt("Dime el ultimo número"));
let nmenor;

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