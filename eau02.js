let a = 1;
let b = 2;
let c = 3;

function envers(){
  
  let x = arguments.length-1;
  
  for(let i = 0; i<arguments.length; i++){

 console.log(arguments[x]);
    x--;
    
    }

}

envers(a,b,c);