let input = [4, 3, 1, 2, 11];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let x= +gets();
let even = 1;
let odd = 1;
//print(x);
let arr = [];

let first; let second; let third;

for (let i = 0; i < x; i++) {
    arr.push( +gets() );
}

//print(Math.max.apply(null, arr));

arr.sort(function(a, b){return a - b});
//print(arr);
first = arr.pop();
second = arr.pop();
third = arr.pop();


print(first + ", " + second + " and " + third);