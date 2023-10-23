/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`. 
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      73%                    100%
 */
let n = 36.6;
let m = 50;
let progressBar = ""
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/

let percent = (n/m) * 100;

let numHashes = Math.round((percent / 100) * 50);

let hashes = "#".repeat(numHashes);
let spaces = " ".repeat(50 - numHashes);
progressBar += "|" + hashes + spaces + "|\n";

let middlePercent = " ".repeat(24) + Math.round(percent) + "%" + " ".repeat(24);
progressBar += "0 %" + middlePercent.slice(0, -4) + "100%";

console.log(progressBar);