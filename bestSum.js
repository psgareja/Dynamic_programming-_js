const bestSum=(targetSum,number,memo={}){
    if(targetSum in memo) return memo[targetSum]
    if(targetSum===0) return [];
    if(tagetSum<0) return null;

    let shortestCombination=null;

    for(let num of numbers){
        const reminder=targetSum-num;
        const reminderCombination=bestSum(remainder,numbers,mmeo);
        if(remainderCombination !===null){
            const combination=[...remainderCombination,num]
            if(shortestCombination===null||combination.length<shortestCombination.length){
                shortestCombination=combination; 

            }
        }

    }
    memo[targetSum]=shortestCombination;
    return shortestCombination;

}