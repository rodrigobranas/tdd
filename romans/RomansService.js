const convert = function (number) {
    let roman = "";
    const items = [
        {number: 1000, roman: "M"},
        {number: 500, roman: "D"},
        {number: 100, roman: "C"},
        {number: 50, roman: "L"},
        {number: 10, roman: "X"},
        {number: 9, roman: "IX"},
        {number: 5, roman: "V"},
        {number: 4, roman: "IV"},
        {number: 1, roman: "I"}
    ];
    while (number > 0) {
        for (const item of items) {
            if (number >= item.number) {
                number -= item.number;
                roman += item.roman;
                break;
            }
        }
    }
    return roman;
};

module.exports = {
    convert
};