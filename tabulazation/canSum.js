const canSum=(target,numbers)=>{
const table=Array(targetSum+1).fill(false);
table[0]=true;
for(let i=0;i<=table.length;i++){
    if(table[i]===true){
        for(let num of numbers){
            table[i+num]=true;
        }
    }
}
return table[targetSum];
};
console.log(canSum(7,[5,3,4,7]));