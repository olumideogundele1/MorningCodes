const {performance} = require('perf_hooks');
const nemo = ['nemo'];

const large = new Array(10000).fill('nemo');

function findNemo(arr) {
  let t0 = performance.now();
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'nemo')
      console.log('Found Nemo!!!');
  }
  let t1 = performance.now();

  console.log("Call to find nemo took  " + (t1 - t0) + " milliseconds");
}

//findNemo(large);

function printAllNumbersThenAllPairs(numbers){
  console.log('these are the numbers');
  numbers.forEach(function(number){
    console.log(number)
  });

  console.log('and these are their numbers');
  numbers.forEach(function(firstNumber){
    numbers.forEach(function(secondNumber){
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairs([1,2,3,4,5]);