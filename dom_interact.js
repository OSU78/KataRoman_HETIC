
document.querySelector("#update").addEventListener("click", convert);

function convert(){
    var result = document.getElementById("resultat").innerHTML = convertArabicNumberToRomanNumber(document.getElementById("number").value);
    
}
