//Binary search
let arr = [1,2,3,4,5,6,8];

function bs(arr, target){
    let len = arr.length;
    let left = 0;
    let right = len-1;
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target){
            return mid;
        }
        if (arr[mid] < target){
            left = mid + 1;
        }
        if(arr[mid] > target){
            right = mid - 1;
        }
    }
    return "not found"
    
}

console.log(bs(arr, 8));