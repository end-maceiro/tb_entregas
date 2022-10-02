/*function secuencia(){

    var x = parseInt(prompt("Ingresa una cantidad"));
    var sec = ""; //"" string vacio

    for (let i = 0; i < x; i++) {
        sec = sec + "*"
    }

    console.log(sec)
}
secuencia()*/


/* Una función que permita mostrar la secuencia *+- (se debe construir la cadena de uno en uno):


    inputs:
    > 3

    outputs:

    *+-
    *+-*+-
    *+-*+-*+-

    inputs:
    > 3


    outputs:

    *+-*+-*+-*+-

*/


/*Una función que permita mostrar un triángulo como el siguiente:*/


//triangulo es rectangulo

// *
// **
// ***



// *
// * *
// * * *

//   *
//  * *
// * * *


//     *
//   * *
// * * *

/*
function secuencia(side_length = 3) {

    //altura
    for (let i = 0; i < side_length; i++) {

        //iteración 1 fuera : i = 0; i + 1 = 1; cadena = "*"
        //iteración 2 fuera: i = 1; i + 1 = 2;  cadena = "**"
        

        let cadena = ""

        //ancho
        for(let w = 0; w < (n + 1); w++){
            cadena = cadena + "*"
        }

        console.log(cadena)
    }
}
*/

/* 
    Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)
    formato = "dd/mm"
*/




function diferenciaDeFechas(fecha1 = "31/10", fecha2 = "01/01"){

    const dias_mes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let fecha1_dias  = parseInt(fecha1.split("/")[0]) // 1
    let fecha1_meses = parseInt(fecha1.split("/")[1]) // 8

    let fecha1_meses_a_dias = 0
    let fecha1_dia_del_año = 0

    for (let i = 0; i < fecha1_meses; i ++){
        fecha1_meses_a_dias += dias_mes[i]
    }

    fecha1_dia_del_año = fecha1_meses_a_dias + fecha1_dias //dias que han pasado

    let fecha2_dias  = parseInt(fecha2.split("/")[0]) // 1
    let fecha2_meses = parseInt(fecha2.split("/")[1]) // 8

    let fecha2_meses_a_dias = 0
    let fecha2_dia_del_año = 0

    for (let i = 0; i < fecha2_meses ; i ++ ){
        fecha2_meses_a_dias += dias_mes[i]
    }

    fecha2_dia_del_año = fecha2_meses_a_dias + fecha2_dias //dias que han pasado

    return Math.abs(fecha2_dia_del_año  - fecha1_dia_del_año); //diff between day of the year
        
}


console.log(diferenciaDeFechas("31/10", "01/01"))

// Diferencia de fechas:
    // pasar 01/08 a dos variables 1 y 8
    // pasar los meses a dias enero = 31
    // calcular número de días que han pasado hasta esa fecha 12/31 = 365
    // restar número de día de cada una de las fechas