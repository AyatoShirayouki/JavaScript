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

let sum = 0;
let average = 0;

let output = [];
let c = [];
let v = [];

for (let i = 0; i < input.length; i++) {
    //const element = input[i];
    if(input[i] < 0){
        negative.push(input[i]);
        sum += input[i];
    }
    else if(input[i] == 0){
        zero.push(input[i]);
        sum += input[i];
    }
    else if(input[i] > 0){
        positive.push(input[i]);
        sum += input[i];
    }
}


output = negative.concat(zero, positive);
average = (sum / output.length).toFixed(2);


 let str2 = "";

 for (let i = 0; i < positive.length; i++) {
     if(positive[i] > average){
        if(i != positive.length - 1){
            str2 += positive[i] + ",";
         }
         else{
             str2 += positive[i];
         }
     }
     
 }
 

 print("avg: " + average);
 const half = Math.ceil(negative.length / 2);    

const firstHalf = negative.splice(0, half)
const secondHalf = negative.splice(-half)

c = firstHalf.concat(zero, secondHalf);

let str = "";

 for (let i = 0; i < c.length; i++) {
     if(c[i] < average){
        if(i != c.length - 1){
            str += c[i] + ",";
         }
         else{
             str += c[i];
         }
     }
     
 }
 if(str[str.length - 1] == ","){
    str = str.substring(0, str.length - 1);
    print("below: " + str);
 }
 else if(str2[str2.length - 1] == ","){
    str2 = str2.substring(0, str2.length - 1);
    print("above: " + str2);
 }
 else{
    print("below: " + str);
    print("above: " + str2);
 }

 
 

 


