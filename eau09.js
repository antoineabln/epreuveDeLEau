let x = 30;
let y = 25;

function valeurs(x,y){
  
  let result = 0;
  
  let ecart = Math.max(x,y) - Math.min(x,y);
  
  for(let i = 0; i<ecart; i++){
    
    result = Math.min(x,y)+i;
    console.log(result);
  }
}

function affichage(x,y){
  
  if(isNaN(x) === true || isNaN(y) === true ){
    
    console.log("erreur");
    
  }else{
    valeurs(x,y);
  }
}
affichage(x,y);