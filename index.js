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

//printAllNumbersThenAllPairs([1,2,3,4,5]);

const arr1 = ['a','b','c','x'];
const arr2 = [1,2,3,'c'];

function containsCommonItem(arr1,arr2){
  let t0 = performance.now();
    for(let x of arr1){
      for(let y of arr2){
        if(y === x)
        return true;
      }
    }
    
    let t1 = performance.now();

    console.log("Time complexity is =======> " + (t1 - t0) + " milliseconds");
    return false;
}

//containsCommonItem(arr1, arr2);

function containsCommonItem2(arr1,arr2){
//loop through first arr and create object where properties === items in the array
  let map = {};
  for(let i = 0; i < arr1.length; i++){
    if(!map[arr1[i]]){
      const item = arr1[i];
      map[item] = true;
    }
  }

  //loop through the second aray and check if the item in the second arr exists on the created object.
  //console.log(map);
  for(let j = 0; j < arr2.length; j++){
    if(map[arr2[j]]){
      return true
    }
  }
  return false;
}

//containsCommonItem2(arr1,arr2);

function containsCommonItem3(arr1, arr2){
  return arr1.some(x => arr2.includes(x));
}


//containsCommonItem3(arr1,arr2);



