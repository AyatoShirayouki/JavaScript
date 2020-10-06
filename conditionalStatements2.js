let input = [
    'b', 2
];
  
  // Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let inputOne = +gets();
let inputTwo = +gets();
 
// Process the data
let output = '';

print(inputOne);

if(inputOne == 'a'){
    if(inputTwo % 2 == 0){
        output = 'light';
    }
    else{
        output = 'dark';
    }
}
else if(inputOne == 'c'){
    if(inputTwo % 2 == 0){
        output = 'light';
    }
    else{
        output = 'dark';
    }
}
else if(inputOne == 'e'){
    if(inputTwo % 2 == 0){
        output = 'light';
    }
    else{
        output = 'dark';
    }
}
else if(inputOne == 'g'){
    if(inputTwo % 2 == 0){
        output = 'light';
    }
    else{
        output = 'dark';
    }
}
else{
    print('kdjfgndfkjgnd');
    if(inputTwo % 2 == 0){
        output = 'dark';
    }
    else{
        output = 'light';
    }
}

// Produce an output the system can then check
print(output);
