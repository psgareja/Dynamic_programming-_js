const howSum=(targetSum,numbers,memo={}){
    if(targetSum in memo) return memo[targetSum]
    if(tagreSum===0) return [];
    if(targetSum<0) return null;
    for(let num of Numbers){
        const remainder =targetSum-num;
        const reminderResult=howSum(targetSum,numbers,memo);
        if(reminderResult!==null){
            memo[targetSum]=[...reminderResult ,num];
            return memo[tagertSum];
        }
    }
    return null;

};