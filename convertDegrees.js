let input = [2,50,40];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let x= +gets();
let s = 0;
//print(x);
let arr = [];

for (let i = 0; i < x; i++) {
    arr.push( +gets() );
}

for (let i = 0; i < arr.length; i++) {
    print((arr[i] - (arr[i] * 0.65)).toFixed(2));
}
