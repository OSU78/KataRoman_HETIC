const NodeCache = require('node-cache');
const utilities = require('../utility/convertToRoman')
const cache = new NodeCache();
module.exports.convertToRoman = async (req, res) => {
    const { roman } = req.body
    const cachedData = cache.get(roman);
    if (cachedData) {
       return res.status(200).json({
            data: cachedData
        })
    } else {
        if (!isNaN(roman)) {
            const convertedNumber = utilities.convertArabicNumberToRomanNumber(roman)
            cache.set(roman, convertedNumber);
            return res.status(200).json({
                data: convertedNumber
            })
        }else{
            const convertedNumber = utilities.convertRomanNumberToArabicNumber(roman)
            cache.set(roman, convertedNumber);
            return res.status(200).json({
                data: convertedNumber
            })
        }
    }
}
