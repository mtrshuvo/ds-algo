function singleelementinarray(params) {
    let obj = {};

    for(let item of params){
        if (obj[item]){
            obj[item]++;
        }
        else{
            obj[item] = 1;
        }
    }
    for(let i in obj){
        if (obj[i] === 1){
            return obj[i];
        }
        else return false;
    }
}

console.log(singleelementinarray([2, 1, 4, 4, 2]));