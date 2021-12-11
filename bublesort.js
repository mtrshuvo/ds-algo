function bubblesort(array){
    const len = array.length;
    for(let i = 0; i < len-1; i++){
        let s = false;
        for (let j = 0; j < len-i-1; j++){
            if (array[j] > array[j + 1]){
                swap(array, j , j+1);
                s=true;
            }
        }
        if(!s) break;
    }
    return array;
}
function swap(array, i,j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const array = [5,3,9,4];
console.log(bubblesort(array));
//o(n^2) t
//o(1) s