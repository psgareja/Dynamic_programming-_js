const canConstruct(target,wordBank,memo={}){
    if(target in memo) return memo[target];
     if(target===""){
         return true;
     }
     for (let word of wordBank){
         if(target.indexof(word)==0){
             const suffix=target.slice(word.length);
             
                if(canConstruct(suffix,wordBank,memo)==true){
                    memo[target]=true;
                    return true;
                }
         }

     }
memo[taget]=false;
return false;
}