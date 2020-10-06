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
    '3,-12,0,0,13,5,1,0,-2'
];
 
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let input = gets().split(',').map(Number);

let negative = [];
let zero = [];
let positive = [];

let output = [];

for (let i = 0; i < input.length; i++) {
    //const element = input[i];
    if(input[i] < 0){
        negative.push(input[i]);
    }
    else if(input[i] == 0){
        zero.push(input[i]);
    }
    else if(input[i] > 0){
        positive.push(input[i]);
    }
}

output = negative.concat(zero, positive);

let str = "";

 for (let i = 0; i < output.length; i++) {
     if(i != output.length - 1){
        str += output[i] + ",";
     }
     else{
         str += output[i];
     }
 }
 print(str);

 


