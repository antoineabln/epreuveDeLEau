let str1 = "bonjour";
let str2 = "jour";

function imbrique(){
   let c = 0;
  let error = "error";
    
  if(str1.length < str2.length){
    
    return error;
    
  }else{
  
  for(let i = 0; i<=str1.length-str2.length+1; i++){
    
    if(str1.substring(i, str2.length+i) == str2){
      
      c++;
    }
    }
  
  if(c >0){
    
    return true;
  }else{
    return false;
  }
  }
  
}

console.log(imbrique(str1,str2));