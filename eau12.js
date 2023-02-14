let tab = [6, 50, 4, 3, 2, 1];


function triABulle(){
  
  for(let i = 0; i< tab.length; i++){
    
     for(let j = 0; j<tab.length -i -1; j++){
       
       if(tab[j] > tab[j+1]){
         
         let n = tab[j];
         tab[j ] = tab[j+1];
         tab[j+1] = n;
       }
     }
  }
  
  console.log(tab);
}

triABulle(tab);