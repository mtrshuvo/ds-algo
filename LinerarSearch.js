function LinearSearch(array, index, target) {
   const res = [];
   
   if(index === array.length){
       return res;
   }
   if(array[index] === target){
       res.push(index);
   }
   
   let answerFromBelow = LinearSearch(array, index + 1, target);
   res.push(...answerFromBelow)
   return res;
}
console.log(LinearSearch([1,2,2,3,4,5,2], 0, 2 ));