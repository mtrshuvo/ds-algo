function mergesort(array){
    if (array.length < 2){
        return array;
    }
    
    let mid = Math.floor(array.length / 2);
    let left_array = array.slice(0, mid);
    let right_array = array.slice(mid, array.length);
    let sorted_l = mergesort(left_array); 
    let sorted_r = mergesort(right_array); 
    return merge(sorted_l, sorted_r);
}

function merge(a, b){
    const c = [];

    while(a.length && b.length){
        c.push(a > b ? b.shift() : a.shift());
    }
    while(a.length){
        c.push(a.shift())
    }
    while(b.length){
        c.push(b.shift())
    }
  return c
}

console.log(mergesort([4,3,1,5,0]));