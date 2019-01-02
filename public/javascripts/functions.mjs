module.exports = function calculate(A, B, C) {
    var output = 0;
    switch (B) {
        case "add":
            output = parseFloat(A) + parseFloat(C)
            break;
        case "subtract":
            output = parseFloat(A) - parseFloat(C)
            break;
        case "multiply":
            output = parseFloat(A) * parseFloat(C)
            break;
        case "divide":
            output = parseFloat(A) / parseFloat(C)
            break;
        default:
            break;
    }
    return output.toString()
}