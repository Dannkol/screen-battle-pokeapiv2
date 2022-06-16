//Espera a cargar el html
document.addEventListener('DOMContentLoaded' , () => {
    pokemon(numrand(1 , 151));
})

//crear numero aleatorio
const numrand = (min , max) => {
    let poke1 = Math.floor(Math.random() * (max - min)) + min,
        poke2 = Math.floor(Math.random() * (max - min)) + min;
    let id = [poke1, poke2]
    return id ;
}

const numPow = numrand(1 , 51);
const numlvl = numrand(51 , 100);
//api
const pokemon = async (id) => {
    try{
        const poke1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id[0]}`),
              poke2 =await fetch(`https://pokeapi.co/api/v2/pokemon/${id[1]}`);
        const data1 = await poke1.json();
        const data2 = await poke2.json();
        printDom_poke1(data1)
        printDom_poke2(data2)
        fighters(data1, data2)
    }catch(error){
        console.log(error);
    }
}
//render pokemon DOM
const printDom_poke1 = (pokemon_1) =>{
    //llamar los elementos html
    const divimg = document.querySelectorAll('.card-1 .img-card')[0];
    divimg.setAttribute('style', "background-image: url('css/"+numrand(1 , 6)[0]+".svg');");
    const attack = document.querySelectorAll('.card-1 .atack')[0];
    const defense = document.querySelectorAll('.card-1 .defec')[0];
    const name = document.querySelectorAll('.card-1 .name')[0];
    const lvl = document.querySelectorAll('.card-1 .lvl-poke')[0];
    const fragment = document.createDocumentFragment();
    let pokemon_act = {

        name: pokemon_1.name,
        img_poke: pokemon_1.sprites.other.home.front_default,
        atack: pokemon_1.stats[1].base_stat + (numPow[0] +pokemon_1.base_experience),
        def: pokemon_1.stats[2].base_stat + (numPow[0] +pokemon_1.base_experience),
        lvl: numlvl[0]
    }
    //insertar en el html

    //img
    const img = document.createElement('img');
    img.setAttribute('src', pokemon_act.img_poke);
    img.setAttribute('alt','pokemon');
    divimg.appendChild(img)

    //atack
    const h2_attack = document.createElement('h2');
    h2_attack.innerText='Attack: ' + pokemon_act.atack;
    attack.appendChild(h2_attack);

    //defense
    const h2_defense = document.createElement('h2');
    h2_defense.innerText='Defense: ' + pokemon_act.def;
    defense.appendChild(h2_defense);

    //nombre
    const h1_lvl = document.createElement('h1');
    h1_lvl.innerText='LVL: ' + pokemon_act.lvl;
    lvl.appendChild(h1_lvl)

    //nivel
    const h1_name = document.createElement('h1');
    h1_name.innerText= pokemon_act.name;
    name.appendChild(h1_name);

    
    const pokemon_act1 = pokemon_act;

    return pokemon_act1
}

const printDom_poke2 = (pokemon_2) =>{
    //llamar los elementos html
    const divimg = document.querySelectorAll('.card-2 .img-card')[0];
        divimg.setAttribute('style', "background-image: url('css/"+numrand(1 , 6)[1]+".svg');");
    const attack = document.querySelectorAll('.card-2 .atack')[0];
    const defense = document.querySelectorAll('.card-2 .defec')[0];
    const name = document.querySelectorAll('.card-2 .name')[0];
    const lvl = document.querySelectorAll('.card-2 .lvl-poke')[0];

    const fragment = document.createDocumentFragment();
    let pokemon_act = {

        name: pokemon_2.name,
        img_poke: pokemon_2.sprites.other.home.front_default,
        atack: pokemon_2.stats[1].base_stat + (numPow[1] + pokemon_2.base_experience),
        def: pokemon_2.stats[2].base_stat + (numPow[1] + pokemon_2.base_experience),
        lvl: numlvl[1]
    }

    //insertar en el html

    //img
    const img = document.createElement('img');
    img.setAttribute('src', pokemon_act.img_poke);
    img.setAttribute('alt','pokemon');
    divimg.appendChild(img)

    //atack
    const h2_attack = document.createElement('h2');
    h2_attack.innerText='Attack: ' + pokemon_act.atack;
    attack.appendChild(h2_attack);

    //defec
    const h2_defense = document.createElement('h2');
    h2_defense.innerText='Defense: ' + pokemon_act.def;
    defense.appendChild(h2_defense);

    //nombre
    const h1_lvl = document.createElement('h1');
    h1_lvl.innerText='LVL: ' + pokemon_act.lvl;
    lvl.appendChild(h1_lvl)

    //nivel
    const h1_name = document.createElement('h1');
    h1_name.innerText= pokemon_act.name;
    name.appendChild(h1_name);

  
    const pokemon_act2 = pokemon_act;

    return pokemon_act2
}


//logica de combate

const fighters = (pokemon_1 , pokemon_2) => {

    console.log(pokemon_1)
    
    const numrand = (min , max) => {
        let move = Math.floor(Math.random() * (max - min)) + min;
        return move ;
    }

    console.log(numrand(0 , pokemon_1.moves.length))
    console.log(pokemon_1.moves.length)
    //habilidades pokemon 1
    const pokemon_act1 = {
        name: pokemon_1.name,
        img_poke: pokemon_1.sprites.other.home.front_default,
        atack: pokemon_1.stats[1].base_stat + (numPow[0] + pokemon_1.base_experience),
        def: pokemon_1.stats[2].base_stat + (numPow[0] + pokemon_1.base_experience),
        lvl: numlvl[0],
        move1: pokemon_1.moves[numrand(0 , pokemon_1.moves.length)].move.name,
        move2: pokemon_1.moves[numrand(0 , pokemon_1.moves.length)].move.name,
        move3: pokemon_1.moves[numrand(0 , pokemon_1.moves.length)].move.name,
        move4: pokemon_1.moves[numrand(0 , pokemon_1.moves.length)].move.name,
        hp: pokemon_1.stats[0].base_stat
    }
    //habilidades pokemon 2
    const pokemon_act2 = {
        name: pokemon_2.name,
        img_poke: pokemon_2.sprites.other.home.front_default,
        atack: pokemon_2.stats[1].base_stat + (numPow[1] + pokemon_2.base_experience),
        def: pokemon_2.stats[2].base_stat + (numPow[1] + pokemon_2.base_experience),
        lvl: numlvl[1],
        move1: pokemon_2.moves[numrand(0 , pokemon_2.moves.length)].move.name,
        move2: pokemon_2.moves[numrand(0 , pokemon_2.moves.length)].move.name,
        move3: pokemon_2.moves[numrand(0 , pokemon_2.moves.length)].move.name,
        move4: pokemon_2.moves[numrand(0 , pokemon_2.moves.length)].move.name,
        hp: pokemon_2.stats[0].base_stat
    }
    //render moves
    const divbntmove1 = document.querySelectorAll('.flex .boton')[0]
    divbntmove1.innerText = pokemon_act2.move1
    const divbntmove2 = document.querySelectorAll('.flex .boton')[1]
    divbntmove2.innerText = pokemon_act2.move2
    const divbntmove3 = document.querySelectorAll('.flex .boton')[2]
    divbntmove3.innerText = pokemon_act2.move3
    const divbntmove4 = document.querySelectorAll('.flex .boton')[3]
    divbntmove4.innerText = pokemon_act2.move4
    const divtext = document.querySelectorAll('.flex .moves')[0]
    divtext.innerText = pokemon_act2.name + ' moves'
    console.log(pokemon_act1.atack)
    
}