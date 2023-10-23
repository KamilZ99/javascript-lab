/**
 * Napisz skrypt, który na podstawie zmiennych rectWidth i rectHeight stworzy łańcuch rectString zawierający pustą rankę o podanych wymiarach.
 * Ramka ma być zbudowana ze znaków w zmienej rectBorderSymbol.
 * Dodaj kod, który sprawdzi poprawność wszystkich zmiennych:
 * rectWidth i rectHeight - większe od -1 i mniejsze od 81
 * rectBorderSymbol - jeden dowolny znak oprócz znaków białych (spacja, tabulator, nowy wiersz itd.)
 * Dla przykładowych danych wyświetlenie rectString na konsoli powinno dać poniższy efekt:
 * #######
 * #     #
 * #     #
 * #     #
 * #######  
 */
let rectWidth = 7;
let rectHeight = 3;
let rectBorderSymbol = '#';
let rectString = '';



if (rectWidth > 0 && rectWidth < 81 && rectHeight > 0 && rectHeight < 81 && rectBorderSymbol.trim().length === 1)

{
    let topBottom = rectBorderSymbol.repeat(rectWidth) + "\n"
    let middle = rectBorderSymbol + " ".repeat(rectWidth - 2) + rectBorderSymbol + "\n";

    rectString += topBottom;
    for (let i = 2; i < rectHeight; i++)
        {
        rectString += middle;
    }
    rectString += topBottom;
}else {
    console.log ("Invalid input values");
}


console.log(rectString);

