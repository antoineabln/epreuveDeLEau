let tab = [4, 2, 9, 6, 23, 12, 34, 0, 1];

function triSelection(tab) {
  
  for (let i = 0; i < tab.length; i++) {
    
    let minIndex = i;
    
    for (let j = i + 1; j < tab.length; j++) {
      
      if (tab[j] < tab[minIndex]) {
        
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let n = tab[i];
      tab[i] = tab[minIndex];
      tab[minIndex] = n;
    }
  }
  return tab;
}


console.log(triSelection(tab));