let nbr = 5;

function estPremier(nbr) {
 
 

  if (nbr === 2 || nbr === 3) {
    return true;
  }

  if (nbr % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(nbr); i += 2) {
    if (nbr % i === 0) {
      return false;
    }
  }

  return true;
}

function premierSuivant(){

    if (nbr <= 1) {
        return -1;
      }else{
  
  for(let y = 1; y<1000; y++){
    
    if(estPremier(nbr+y)=== true){
      return nbr+y;
    }
  }
}
}

console.log(premierSuivant(nbr));