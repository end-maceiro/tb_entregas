var letra = prompt("Dime una letra")

switch (letra) {
    case "a": alert(7);
    break;
    case "b": alert(9);
    break;
    case "c": alert(101);
    break;
    default: alert("Te has equivocado de letra")
    break;
}

if (letra == "a" || "b" || "c") {
    alert("Éxito!");
} 