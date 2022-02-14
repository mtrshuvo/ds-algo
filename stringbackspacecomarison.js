function backespaceproblem(str1, str2) {
    let result1=""; let result2="";
    for(let i=0; i < str1.length; i++){
        if (str1[i] === "#"){
            result1[result1.length-1] = "";
        }
        else{
            result1+=str1[i]
        }

    }
    return result1;
    // for(let i=0; i < str2.length; i++){
    //     if(result2 === "" && !str2[i] === "#"){
    //         result2 = str2[i]
    //     };
    //     if (str2[i] === "#"){
    //         result2[result2.length-1] = "";
    //     }

    // }
    // if (result1 === result2){
    //     return true;
    // }
    // return false;
    
}
console.log(backespaceproblem("ab#cd", "acb#"));