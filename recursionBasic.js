
//print number from 1 to n number

function printNumber(start, end) {
    if(start >= end){
        console.log(start);
        return;
    }

        console.log(start);
        printNumber(start+1, end)
    
}
// printNumber(1, 5);
function fibo(num) {
    if(num < 2){
        return num
    }
    return fibo(num-1)+fibo(num-2)
}
console.log(fibo(7));