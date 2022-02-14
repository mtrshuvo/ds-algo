//array problem 
//move all zero to right
//time O(n)
//aux O(1)

const arr = [1,2,4,0,8,62,0,67,0];

function  moveToLeft(params) {
    let count = 0;
    let len = params.length;
    for (let i = 0; i < len; i++){
        if (params[i] !== 0){
            params[count++] = params[i]
        }
        
    }

    while(count < len){
        params[count++] = 0;
    }
    return params;
}

function  moveToright(params) {

    let len = params.length;
    let count = len-1;
    for(let i = len-1; i >= 0; i--){
        if(params[i] !== 0){
            params[count] = params[i];
            count--;
        }
    }
    while(count >= 0){
        params[count] = 0;
        count--;
    }
    return params;
}

// console.log(moveToLeft(arr))
console.log(moveToright(arr))

