/**
 * Napisz skrypt, który oblicza promień koła na podstawie pola powierzchni w zmiennej area.
 * Wynik zapisz do zmiennej łańuchowej radius z sześcioma miejscami po przecinku.
 * Załóż, że w area jest zawsze liczba nieujemna. Zmienna PI jest w bibliotece Math
 */
let area = 3.14159;
let radius = '';

function CalcRadius(area){
    radius = Math.sqrt(area/Math.PI).toFixed(6)
  
}
CalcRadius(area);
  console.log(area);


console.log(radius)
if (radius === '1.000000'){
    console.log("Test passed");
} else {
    console.log("Test failed");
}


