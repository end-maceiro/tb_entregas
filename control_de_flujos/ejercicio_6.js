

function burbuja() {
    var lista = ["pedro", "maria", "pablo", "jose", "izan", "zayra"];
                /* 0         1       2         3       4        5 */
    var i, j, n, aux;

    n = lista.length;

    for (i = 0; i < n - 1; i++){                /*Volvemos a iterar, n-1 veces*/
        for (j=0; j < ( n - i )-1; j++){              /*Bucle interno pero aun no quedaran ordenadas*/
            if (lista[j] > lista[j + 1]){       /*Si la palabra en posición [i] es mayor que la de posición [i +1], tenemos que proceder al cambio.*/
                aux = lista[j]                  /*creamos una variable temporal igual a la posicion que estamos evaluando*/
                lista[j] = lista[j+1];          /*le asignamos nuevo valor*/
                lista[1+j] = aux;               /*Se produce el intercambio, ahora [1+i] tiene el valor de aux*/
            }                                     
        }
    }

   console.log(lista);
}
burbuja() /*LLamar a la funcion*/


/* EL j y i tienen que ser 0, aunque puedo empezar en 1 pero serian naturales. lo unico
que cambia es la posicion que analizo. 

array < .length 
      <= . length -

la "i" se incrementa con cada pasada => j va disminuyendo
en "i" es n-1 porque los valores de posicion en JS empiezan en O*/
