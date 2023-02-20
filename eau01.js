
function combinaison(){

    for (let i = 0; i < 100; i++) {

        for (let j = i + 1; j < 100; j++) {

        let premierNombre = i.toString().padStart(2, '0');

        let deuxiemeNombre = j.toString().padStart(2, '0');

        console.log(premierNombre + ' ' + deuxiemeNombre);
        
        }
    }
}

combinaison();