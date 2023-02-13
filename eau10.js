
let tab =["Ceci", "est", "le", "monde", "qui", "contient", "Charlie", "un", "homme", "sympa", "Charlie"];

function index(){
  
  let dernierElement = tab[tab.length-1];
  let c = [];
  
  for(let i = 0; i<tab.length-1; i++){
    
    if(tab[i] === dernierElement){
       
      c.push(i);
      
    }
  }
  
  if(c.length === 0){
    
    console.log(-1);
    
  }else{
    
    console.log(c[0]);
  }

}

index(tab);