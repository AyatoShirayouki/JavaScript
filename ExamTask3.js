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
    '1,100,50,-51,1,1',
];
 
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let input = gets().split(',').map(Number);

let index = -1;

let leftSum = 0;
let rightSum = 0;

let num = 0;
let b = false;

for (let i = 0; i < input.length; i++) {
    if(i > 1){
        let num = i;
        for (let j = 0; j < i - 1; j++) {
            //print("--" + input[j] + " :" + num);
            leftSum += input[j];
        }
        for (let x = i; x < input.length; x++) {
            //print(num +" :" + input[x] + "--");
            rightSum += input[x];
        }
        //print("-----" + leftSum + "-------" + rightSum);
        if(leftSum == rightSum){
            index = num;
            b = true;
            break;
        }
        leftSum = 0;
        rightSum = 0;
    }
}
if(b == true){
    print(index - 1);
}
else{
    print(index)
}
