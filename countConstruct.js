const canConstruct=(target,wordbank,memo={})=>{
    if (target in memo) return memo[target];
    if(target=='') return 1;
    let totalCount=0;

    for(let word of wordbank){
        if(target.indexof(word)==0 ){
           const numWaysForRest=  countConstruct(target.slice(word.legth),wordbank,memo);
           const totalCount+=numWaysForRest
        }
    }
    memo[target]=totalcount;
    return totalCount;
}