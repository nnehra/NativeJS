function prefill(number, value) {
    if (!/^\d+$/.test(number)) {
        throw new TypeError(number + ' is invalid');
    } else {
        var array = [];
        for (var i = 0; i < number; i++) {
            array.push(value);
        }
        return array;
    }
}
