
/*1. Print 1 - 135
for (let i = 1; i <= 135; i++) { 
    console.log (i)
  }

//2. Print Odd Numbers 1 - 135
*/
for (let i = 0; i < 136; i++) { 
    if(i % 2) {
        console.log(i)
    }
  }
/*
//3. Sum of Printed Numbers
let sum = 0;

for (let i = 0; i < 136; i++) {   
    sum +=i  
    console.log (`Number is: ${i} Sum: ${sum}`)
  }


//4. Print the elements of an array

let x =  [1,4,2,12];
for (let i = 0; i < x.length; i++) {    
    console.log (x[i])
  }

//5. Find Max
let x =  [0,-2,-1,34,10,12]
let max = x[0];
    for (i = 0; i < x.length; i++){
        if (x[i] > max){
            max = x[i];
        }
    }
    console.log (max)

//6.  Get Average


let arr =  [0,-2,-1,34,10,12];
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += i
}
console.log(sum / arr.length)

//7. Eliminate the Negatives

let arr =  [0,-2,-1,34,10,12];
for (let i = 0; i < arr.length; i++){
    if(arr[i]<0){
        arr[i] = 0
    }
}
console.log(arr)


//8. Number to String

let arr =  [0,-2,-1,34,10,12];
for (let i = 0; i < arr.length; i++){
    if(arr[i]<0){
        arr[i] = 'Turing';
    }
}
console.log(arr)


//Monday: Largest Number in Arrays

function largestOfFour(arr) {
    let largestNumber = [0, 0, 0, 0]
    for (let i = 0; i < arr.length; i++) {
        for (var x = 0; x < arr[i].length; x++){
            if (arr[i][x] > largestNumber[i]){
                largestNumber[i] = arr[i][x]
            }
        }
    }
    return largestNumber;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


//Monday: Game of 3s

function gameOfThree(i) {   
    if(i%3 === 0){
        result = 0;
    } else {
        switch(i%3 !== 0) {
            case ((i+1)%3 === 0):
                result = 1;
                break;
            case ((i-1)%3 === 0):
                result = -1;
                break;
            }
        return result
        }
    }

console.log(gameOfThree(20));



//Monday: Bubble Sort
function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
 }
console.log(bubbleSort([7,5,2,4,3,9])); 



//Monday: rFactorial vs iFactorial

var num = prompt("What number do you want to find the factorial of?")
//recursive
var factorial = function(n) {
    if(n >= 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(num));
 */