function maxsubarrayvalue(array) {
    let maxsub = array[0];
    let currsum = 0;
    for(let i = 0; i < array.length; i++){
        if(currsum < 0){
            currsum = 0;
        }
        currsum += array[i];
        maxsub = Math.max(currsum, maxsub);

    }
    return maxsub;
}
const arr = [2,1,-2,3,2]
console.log(maxsubarrayvalue(arr));