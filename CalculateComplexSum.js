const getGets = arr => {
    let index = 0
   
    return () => {
      const toReturn = arr[index]
      index += 1
      return toReturn
    }
  }
  // this is the test
   
  const test = ['4 3']
  const gets = this.gets || getGets(test)
  const print = this.print || console.log
   
  //let numbers = gets().split(' ').map(Number)
   
  let n = +gets();
  let x = +gets();

  //let factorial = 1;
  let sum = 1;

  for (let i = 1; i <= n; i++) {
      
      //print(i + ' ' + factorial(i) + ' ' + x);
      sum += factorial(i)/Math.pow(x, i);
      //print(sum);
      //factorial = 0;
  }
  print(sum.toFixed(5));

  function factorial(n){
    let factorial = 1;

    while (true) {
      if (n === 1) {
        break;
      }
    
      factorial = factorial * n;
      n--;
    }
    return factorial;
  }
  