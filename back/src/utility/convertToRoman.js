function isValidRomanNumber(romanNumber) {
    console.log(romanNumber);
    // Expression régulière pour valider un nombre romain
    const romanRegex = /^(?=[MDCLXVI])(M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))$/i;

    
    return romanRegex.test(romanNumber);
}



module.exports.convertArabicNumberToRomanNumber =(numberToConvert)=> {
    console.log("arabic number to convert romain")
    if (isNaN(numberToConvert)){
        return "veuillez rentrer un nombre valide";
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

module.exports.convertRomanNumberToArabicNumber=(romanNumber) =>{
    console.log("convertRomanNumberToArabicNumber")
    if (!isValidRomanNumber(romanNumber)){
        return "veuillez rentrer un nombre valide";
    }
    // Map des valeurs des chiffres romains
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let arabicNumber = 0;
    let previousValue = 0;

    for (let i = romanNumber.length - 1; i >= 0; i--) { 
        const currentValue = romanMap[romanNumber.charAt(i).toUpperCase()];

        if (currentValue < previousValue) {
            // Si la valeur actuelle est inférieure à la précédente
            arabicNumber -= currentValue;
        } else {
            // Sinon, ajoutez-la
            arabicNumber += currentValue;
        }

        previousValue = currentValue;
    }

    return arabicNumber;
}






