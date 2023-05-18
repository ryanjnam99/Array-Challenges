function alwaysHungry(arr) {
    var foodcount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            foodcount ++;
        }
        }
    if (foodcount == 0){
        console.log("I'm hungry");
    }
    }


alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for (var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum/arr.length;
    for (var i=0; i<arr.length; i++) {
        if (avg<arr[i]) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function reverse(arr) {
    for (var i=0; i<=arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//another of reversing the arrays is this

function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while(left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    // your code here
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var arr = [0, 1];
    for (var i=2; i<10; i++) {
        var sum= arr[i-2]+arr[i-1];
        arr.push(sum);
    }
    // your code here
    return arr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


