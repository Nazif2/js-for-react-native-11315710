function processArray(arr) {
    return arr.map(num => num % 2 === 0)
}
const inputArray= [2,5,6];
const outputArray= processArray(inputArray);
console.log(outputArray);// oputput: [4,15,36]
 
function processArray(arr) {
    return arr.map(num => num % 2 === 0);
}
function formatArrayStrings(stringsArray, numbersArray) {
    let formattedStrings = [];
    for (let i = 0; i < stringsArray.length; i++) {
        const string = stringsArray[i];
        const isEven = numbersArray[i];
        if (isEven) {
            formattedStrings.push(string.toUpperCase());
        } else {
            formattedStrings.push(string.toLowerCase());
        }
    }
    return formattedStrings;
}
const stringsArray = ["Good", "morning", "World"];
const numbersArray = [2, 5, 6];
const formattedArray = formatArrayStrings(stringsArray, processArray(numbersArray));
console.log(formattedArray);