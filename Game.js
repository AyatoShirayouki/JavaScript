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
    '185'
];
 
const gets = this.gets || getGets(test);
const print = this.print || console.log;

//let input = gets().split(',').map(Number);
let n = +gets();
let output = 1;

while (n) {
    if(n % 10 == 1 || n % 10 == 0){
        output += n % 10;
        //print(output);
    }
    else{
        output *= n % 10;
        //print(output);
    }
    n = Math.floor(n / 10);
}

print(output);
