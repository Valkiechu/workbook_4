let number1 = [ 83, 80, 86, 92, 100];

function numSortAsc(a, b){
   return a - b;

}


function getMed(numbers){
    let sorted = numbers.sort(numSortAsc);
    console.log(sorted);
    let even = numbers.length % 2 ==0;
    let half = Math.floor(sorted.length / 2);

}

getMed(number1);

