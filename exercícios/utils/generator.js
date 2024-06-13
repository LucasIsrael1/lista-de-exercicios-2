function randomArray(length, minValue = 0, maxValue = 20) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (maxValue - minValue + 1) + minValue));
    };
    return array;
};

function randomTextArray(length, letters = []) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(letters[Math.floor(Math.random() * letters.length)]);
    };
    return array;
}

function randomMatrix(width, height, minValue = 0, maxValue = 20) {
    const matrix = [];
    for (let i = 0; i < width; i++) {
        matrix.push([]);
        for (let j = 0; j < height; j++) {
            const value = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            matrix[i].push(value);
        };
    };
    return matrix;
};

module.exports = {
    randomArray,
    randomTextArray,
    randomMatrix
};