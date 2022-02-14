function isHappynumber(number) {
    let sum = 0;
    while(number > 0){
        let e = number%10;
        number = Math.floor(number/10);
        sum += e * e;
    }
    if(sum === 1) return true;
    if(sum > 1 && sum <= 4){
        return false;
    }
    
        return isHappynumber(sum);
    
}

console.log(isHappynumber(19));