//
function convertArabicNumberToRomanNumber (numberToConvert) {
    if (isNaN(numberToConvert)){
        return "veuillez rentrer un nombre";
    }
    let numerical_symbol = String(+numberToConvert).split("");
     let keytables = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"];
        let romanNumber = "";
        let i = 3;
    for(let i =2;i>-1;i--){
        romanNumber = (keytables[+numerical_symbol.pop() + (i * 10)] || "") + romanNumber;
    }
    return Array(+numerical_symbol.join("") + 1).join("M") + romanNumber;
}


