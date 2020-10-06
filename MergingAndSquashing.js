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
    '11',
    '44',
    '69',
    '46',
    '63',
    '83',
    '13',
    '62',
    '14',
    '31',
    '68',
    '87'
];
 
const gets = this.gets || getGets(test);
const print = this.print || console.log;

//let input = gets().split(',').map(Number);
let n = gets();

let input = [];

for (let i = 0; i < n; i++) {
    input.push(+gets());
}
input.map(Number);


function merge(first, second){
    let str = "";
    str += first % 10;

    second = Math.floor(second / 10);
    str += second % 10;

    return str;
}

function squash(first, second){
    let str = "";
    let sum = 0;

    sum += first % 10;
    first = Math.floor(first / 10);
    str += first % 10;

    let rep = second;
    rep = Math.floor(rep / 10);
    sum += rep % 10;

    if(sum => 10){
        sum = sum % 10;
    }

    str += sum;
    str += second % 10;

    return str;
}

let merged = "";
let squashed = "";

for (let i = 0; i < input.length; i++) {
    //print('--' + input[i]);
    //const element = input[i];
    if((i + 1) != input.length){
        merged += merge(input[i], input[i + 1]) + " ";
        squashed += squash(input[i], input[i + 1]) + " ";
    }
    
}

print(merged);
print(squashed);
