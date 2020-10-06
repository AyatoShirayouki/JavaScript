const getGets = (arr) => {
    let index = 0;
 
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    'anagram',
    '6',
    'gramana',
    'aaagrnm',
    'anagra',
    'margana',
    'abc',
    'xy',
];
 
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let w = gets();
let n = gets();

let input = [];
let characters = [];

for (let i = 0; i < n; i++) {
    input.push(gets());
}

let word = "";
word = w;

for (let i = 0; i < word.length; i++) {
    characters.push(word[i]);
}

function sortStrChars(str) {
    if (!str) {
        return;
    }
    str = str.split('');
    str = str.sort();
    str = str.join('');
    return str;
}


let length = word.length;

let contains = false;
let str = "";

for (let i = 0; i < input.length; i++) {
    //const element = input[i];
    str = input[i];
    if (input[i].length == length && sortStrChars(input[i]) == sortStrChars(word)) {
        print("Yes");
    }
    else{
        print("No");
    }
}