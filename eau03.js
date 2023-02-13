let a = 0; 
let b =1;
let controle = 4;

function suite(){

    let tab= [a,b];

    if(controle <0 || isNaN(controle) == true){

        console.log(-1);
    }else{

    for(let i = 0; i<=controle-2; i++){

        tab.push(tab[i]+tab[i+1]);

    }
  
  console.log(tab[tab.length-1]);
}
}

suite(a,b,controle);