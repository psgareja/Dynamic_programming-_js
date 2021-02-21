const allConstruct=(target,wordBank,memo={})=>{
    if(target in memo) return memo[target];
    if(target===''){
        return [[]];
    }
    const result=[]
    for(let word of wordBank){
        if(target.indexof(word)==0){
            const suffix=target.slice(word.length);
            const suffixWay=allConstruct(suffix,wordBank);
            const targetWays=suffixWays.map(way=>[word,..way]);
            result.push(...targetWays)
        }
    }
    memo[target]=result;
    return result;
}