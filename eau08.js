let str = 2 ;

function verifChiffre(){
  
let number = parseInt(str);
let strNumber = number.toString();
  
  if(str.length === strNumber.length || str === number){
    
    return true;
    
  }else{
    
    return false;
  }

}

console.log(verifChiffre(str));