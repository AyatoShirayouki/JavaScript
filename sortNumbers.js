const getGets = arr => {
    let index = 0
   
    return () => {
      const toReturn = arr[index]
      index += 1
      return toReturn
    }
  }
  // this is the test
   
  const test = ['2, 3, 1, 5, 6']
  const gets = this.gets || getGets(test)
  const print = this.print || console.log
   
  let numbers = gets().split(', ').map(Number)
  let arr = [];
  let output = "";

  for (let i = 0; i < numbers.length; i++) {
      arr.push(numbers[i]);
  }

  arr.sort(function(a, b){return a - b});
  arr.reverse();

  for (let i = 0; i < arr.length; i++) {
      if(i != arr.length - 1){
        output += arr[i] + ", ";
      }
      else{
        output += arr[i];
      }
      
  }

  print(output);

  