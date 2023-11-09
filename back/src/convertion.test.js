const { convertArabicNumberToRomanNumber } = require("./utility/convertToRoman");

test('1 in arabic should be I to Roman', () => {
    expect(convertArabicNumberToRomanNumber('1')).toBe("I");
  });
test('3 in arabic should be III to',()=>{
    expect (convertArabicNumberToRomanNumber('3')).toBe("III")
})
test('string into our fuction should return veuillez "rentrer un nombre valide"',()=>{
    expect (convertArabicNumberToRomanNumber('bonjour')).toBe("veuillez rentrer un nombre valide")
})
