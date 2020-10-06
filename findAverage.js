let input = [
  3,
  2.5,
  1.25,
  3,
  ];
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  let x= +gets();
  let s=0;
  for(i=1; i<=x; i++)
  {
    s = s + ( +gets() );
  }
  print((s/x).toFixed(2));

  
