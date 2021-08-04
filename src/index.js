module.exports = function reverse (n) {
    const numPositive = Math.abs(n);
    const numArray = numPositive.toString().split('');
    numArray.reverse();

    return +numArray.join('');
}
