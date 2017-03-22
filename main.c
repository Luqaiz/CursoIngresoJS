#include <stdio.h>
#include <stdlib.h>

int main()

{
    int contador = 0;
    int acumulador = 0;
    int numero;
    float promedio;

        while (contador < 5)
            {
                printf ("Ingrese un numero: ");
                scanf ("%d", &numero);
                acumulador = acumulador + numero;
                contador++;
            }
    promedio = (float) acumulador / 5;

    printf ("el promedio es %.2f", promedio);

    system ("pause");

    return 0;

}
