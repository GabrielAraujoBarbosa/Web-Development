
async function getPokemonsList() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
    const data = await res.json();
    console.log(data);
}

getPokemonsList();

// sprites > other >  oficial-artwork > front_default