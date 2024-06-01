function myFunctionTest(expected, found) {
    if (expected === found()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED. Expected " + expected + " found " + found();
    }
}

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function testMax() {
    const num1 = parseFloat(document.getElementById("maxInput1").value);
    const num2 = parseFloat(document.getElementById("maxInput2").value);
    const result = max(num1, num2);
    document.getElementById("maxOutput").innerText = `Result: ${result}`;
}

function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

function testMaxOfThree() {
    const num1 = parseFloat(document.getElementById("maxThreeInput1").value);
    const num2 = parseFloat(document.getElementById("maxThreeInput2").value);
    const num3 = parseFloat(document.getElementById("maxThreeInput3").value);
    const result = maxOfThree(num1, num2, num3);
    document.getElementById("maxThreeOutput").innerText = `Result: ${result}`;
}

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

function testIsVowel() {
    const char = document.getElementById("isVowelInput").value;
    const result = isVowel(char);
    document.getElementById("isVowelOutput").innerText = `Result: ${result}`;
}

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function testSum() {
    const input = document.getElementById("sumInput").value;
    const arr = input.split(',').map(Number);
    const result = sum(arr);
    document.getElementById("sumOutput").innerText = `Result: ${result}`;
}

function multiply(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}

function testMultiply() {
    const input = document.getElementById("multiplyInput").value;
    const arr = input.split(',').map(Number);
    const result = multiply(arr);
    document.getElementById("multiplyOutput").innerText = `Result: ${result}`;
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function testReverse() {
    const str = document.getElementById("reverseInput").value;
    const result = reverse(str);
    document.getElementById("reverseOutput").innerText = `Result: ${result}`;
}

function findLongestWord(arr) {
    return arr.reduce((maxLen, word) => Math.max(maxLen, word.length), 0);
}

function testFindLongestWord() {
    const input = document.getElementById("findLongestWordInput").value;
    const arr = input.split(',');
    const result = findLongestWord(arr);
    document.getElementById("findLongestWordOutput").innerText = `Result: ${result}`;
}

function filterLongWords(arr, i) {
    return arr.filter(word => word.length > i);
}

function testFilterLongWords() {
    const input = document.getElementById("filterLongWordsInput").value;
    const arr = input.split(',');
    const length = parseInt(document.getElementById("filterLongWordsLength").value);
    const result = filterLongWords(arr, length);
    document.getElementById("filterLongWordsOutput").innerText = `Result: ${result}`;
}
