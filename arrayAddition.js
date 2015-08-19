function arrayAddition(arr){
    //HINTS: sort array
    arr.sort(function(a, b){ return a - b; });
    // get the largest out
    var largest = arr.pop();
    var sum = 0;
    
    
    // more of your code can go here.
    for (i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    if (sum === largest) {
      return true ;
    } else {
      return false;
    }
}


// TODO this should pass i.e. be true
console.log(arrayAddition([4, 6, 23, 10, 1, 3, 5, 45]) === true);