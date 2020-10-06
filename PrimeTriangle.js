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
    '10'
];
 
const gets = this.gets || getGets(test);
const print = this.print || console.log;

//let input = gets().split(',').map(Number);
let n = gets();

function IsPrime(n){
    if ((n & 1) == 0){
        if (n == 2){
            return true;
        }
        else{
            return false;
        }
    }
            
    for (let i = 3; (i * i) <= n; i += 2){
        if ((n % i) == 0){
            return false;
        }
    }
    return n != 1;
}
let str = "";
for (x = 1; x <= n; x++){
    if (IsPrime(x) == true || x == 1)
    {
        for (k = 1; k <= x; k++){
            if (IsPrime(k) == true || k == 1){
                str += 1;
            }
            else{
                str += 0;
            }

        }
        str += "\n";
    }
                
}

print(str);
        