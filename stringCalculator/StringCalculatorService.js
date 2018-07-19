const sum = function (text) {
    if (text === null) throw "Invalid text";
    if (text === "") return 0;
    let total = 0;
    for (const number of text.split(",")) {
        total += Number.parseInt(number);
    }
    return total;
};

module.exports = {
    sum
};