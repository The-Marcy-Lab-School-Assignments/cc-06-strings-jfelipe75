//write your code here
const reverseString = (str) => {
    let newStr = '';
    for (let i = str.length -1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString('hello'));


const reverseZigZagString = (str) => {
    let newStr = '';
    for (let i =str.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            newStr += str[i];
           
        }  else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
};

console.log(reverseZigZagString('hello'));