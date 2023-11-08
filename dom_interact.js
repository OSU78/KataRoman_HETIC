
document.querySelector("#update").addEventListener("click", convert);

function convert(){
    let number = document.getElementById("number").value
    if(!isNaN(document.getElementById("number").value)){
        let result = document.getElementById("resultat").innerHTML = convertArabicNumberToRomanNumber(number);
   
    }
    else{
        let result = document.getElementById("resultat").innerHTML = convertRomanNumberToArabicNumber(number);
    }
    
}
