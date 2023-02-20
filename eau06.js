let chaine = ('hello word !');

function majusculeUneLettreSurDeux(chaine) {
  
  let nouvelleChaine = "";
  
  let majuscule = false;
  
  for (let i = 0; i < chaine.length; i++) {
    
    let caractere = chaine.charAt(i);
    
    if (caractere.match(/[a-zA-Z]/)) {
      if (majuscule) {
        
        nouvelleChaine += caractere.toUpperCase();
        
        majuscule = false;
        
      } else {
        
        nouvelleChaine += caractere.toLowerCase();
        
        majuscule = true;
      }
    } else {
      
      nouvelleChaine += caractere;
      
    }
  }
  
  return nouvelleChaine;
}

console.log(majusculeUneLettreSurDeux(chaine));