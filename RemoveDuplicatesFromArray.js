var containsDuplicate = function(nums) {

    let obj = {};
    for (let i of nums){
        if (obj[i]){
            obj[i]++;
        }else{
            obj[i] = 1
        }
    }
    for (let i in obj){
        if (obj[i] > 1){
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,2,1]));