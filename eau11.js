let numbers = [-8, -6, 4];

numbers.sort(function(a, b) {
  return a - b;
});

function distance(){
  
  let tab = [];
  
  for(let i = 0; i<numbers.length-1; i++){
    
    tab.push(numbers[i+1]-numbers[i]);
    
  }
  
  console.log(Math.min(...tab));
  
}

distance(numbers);
