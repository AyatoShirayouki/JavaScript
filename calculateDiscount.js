const getGets = arr => {
    let index = 0
   
    return () => {
      const toReturn = arr[index]
      index += 1
      return toReturn
    }
  }
  // this is the test
   
  const test = ['0 15 30']
  const gets = this.gets || getGets(test)
  const print = this.print || console.log
   
  let degrees = gets().split(' ').map(Number)
   
  for (let i = 0; i < degrees.length; i++) {
    degrees[i] = degrees[i] * 1.8 + 32
  }
   
  degrees.forEach(function (degree, index) {
    print(degree)
  })
