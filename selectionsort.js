function selectionsort(array){
    const len = array.length;
    for(let i = 0; i < len-1; i++){
        let min_index = i;
        let s = false;
        for(let j = i + 1; j < len; j++){
            if (array[min_index] > array[j]){
                min_index = j;
                swap(array,i, min_index);
                s = true
            }
        }
        if (!s) break;

    }
    return array;
}
function swap(array,i,j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const array = [1,2,3,4, 0];
console.log(selectionsort(array));
//o(n^2) t
//o(1) s