/**
 * Zdefiniuj funkcję, która zwróci najdłuższy wyraz łańcucha
 * Przykład
 * let word = longestWord("Programowanie w JavaScript jest super")
 * w word powinno być słowo "Programowanie"
 * Załóż, że w łańcuchu są słowa oddzielone tylko spacją (brak kropek, przecinków itd.)
 */

function longestWord(sentence){
    
if (!sentence)
{
    return "";
}

return sentence.split(" ")
.reduce((longest, word) => word.length > longest.length ? word : longest,"")



    /*let words = sentence.split(" ");
    let longest = "";
    for (let word of words ){
        if (word.length > longest.length){
            longest = word;
        }
    }
    return longest; */
   
}



//Testy
if (longestWord("Is this a fox") === "this"){
    console.log("Test 41 passed")
} else {
    console.log("Test 41 failed")
}
if (longestWord("") === ""){
    console.log("Test 42 passed")
} else {
    console.log("Test 42 failed")
}
if (longestWord() === ""){
    console.log("Test 43 passed")
} else {
    console.log("Test 43 failed")
}