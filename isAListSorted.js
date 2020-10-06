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
    '5',
    '1,2,3,2,5',
    '1,2,8,3,9',
    '1,2,2,3,2',
    '1,2,3,4,5',
    '1,2,3,4,5'
    
];
 
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let N = gets().split(',').map(Number);
for(let i = 1;i <= N;i++){
    let input = gets().split(',').map(Number);
    let bool = true;
    for(let j = 0;j < input.length-1;j++){
        if (input[j] > input[j + 1] ){
            bool = false;
            break;
        }
    }
        print(bool);
}