
// this is the test
const input = [
    '275',
    '693',
    '110',
    '742'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

//let input = gets().split(',').map(Number);
//let n = gets();


function balanced(num){
    
        let first = 0;
        let second = 0;
        let third = 0;

        third = num % 10;
        num = Math.floor(num / 10);

        second = num % 10;
        num = Math.floor(num / 10);

        first = num % 10;

        if(second == (first + third)){
            return true;
        }
        else{
            return false;
        }
    
    
}

function check(n)
{
    let sum = 0, r, x = 0;
    while (n > 0){
        r = n % 10;
        sum = sum + r;
        n = n / 10;
        x++;
    }
    return x;
}

let number;
let sum = 0;
while (number = +gets()) {
    let arr = number.toString();
    arr = arr.split('').map(Number);
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    if (a + c !==b) {
        break;
    }
    sum += number;
}
print(sum);