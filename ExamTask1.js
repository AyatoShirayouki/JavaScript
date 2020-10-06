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
    'Welcome to Chepelare',
];
 
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let input = gets().split(' ');
let arr = [];

let w = "che";
let e = "e";

function toBack(word){
    let str = "";
    let letter = word[0];
    for (let i = 1; i < word.length; i++) {
        str += word[i];
    }
    let output = str + letter;
    return output;
}

let s = "";

for (let i = 0; i < input.length; i++) {
    if(input[i][0] == "a" || input[i][0] == "e" || input[i][0] == "i" || input[i][0] == "o" || input[i][0] == "u" || input[i][0] == "A" || input[i][0] == "E" || input[i][0] == "I" || input[i][0] == "O" || input[i][0] == "U"){
        if(input[i].length % 2 == 0){
            s = toBack(input[i]) + w + e;
            arr.push(s);
        }
        else{
            s = toBack(input[i]) + w;
            arr.push(s);
        }
    }
    else{
        if(input[i].length % 2 == 0){
            s = input[i] + w + e;
            arr.push(s);
        }
        else{
            s = input[i] + w;
            arr.push(s);
        }
    }
    s = "";
}

let output = "";

for (let i = 0; i < arr.length; i++) {
    output += arr[i] + " ";
}

print(output);






