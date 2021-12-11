function fact(num){
    if (num == 1){
        return num;
    }
    return num + fact(num-1)
}
console.log(fact(3));