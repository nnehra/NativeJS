function basicOp(operation, value1, value2) {
    var result;
    switch (operation) {
        case '+':
            result = (value1 + value2);
            break;
        case '-':
            result = (value1 - value2);
            break;
        case '*':
            result = (value1 * value2);
            break;
        case '/':
            result = (value1 / value2);
            break;
        default:
            result = 0;
            break;
    }
    return result;
}
