let str = "bonjour mathilde, comment vas-tu ?!";
let tab = str.split('');


function maj(str, tab){
  
  let tabResult = [];

  
  for(let i = 0; i < str.length; i++){
    
    if(tab[i-1] === " " || i === 0){
      
      tabResult.push(tab[i].toUpperCase());
      
    }
    else{
      
    tabResult.push(tab[i].toLowerCase());

    }
  }
  console.log(tabResult.join(''));
}

maj(str, tab);

