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
    'c,c,a,b,a,a,b,c',
    
];
 
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let input = gets().split(',');
let counter = 0;
let output = [];
let trash = [];

for (let i = 0; i < input.length; i++) {
    //const element = input[i];
    for (let j = 0; j < input.length; j++) {
        if(input[i] == input[j]){
            counter++;
        }
    }
    if(counter > 1 && !trash.includes(input[i])){
        trash.push(input[i]);
    }
    else if(counter == 1 || !output.includes(input[i])){
        output.push(input[i]);
    }
    counter = 0;
}
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

