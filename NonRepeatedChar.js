//Using hash
console.log(solve("a green apple"));

function solve(sentence){
    const obj = {};
    let len = sentence.length;
    
    for(let i = 0; i < len; i++){
        if (sentence[i]== " "){
            continue;
        }
        if(obj[sentence[i]]){
            obj[sentence[i]]++;
        }
        else{
            obj[sentence[i]] = 1;
        }
    }
    for(let char in sentence){
        if (obj[sentence[char]] === 1){
            return char;
        }
    }
    return -1;
}
