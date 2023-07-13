const pokedex = document.getElementById('pokedex');

const promesas =[];

for(let i=1; i<=150; i++){
	const url =`https://pokeapi.co/api/v2/pokemon/${i}`
	promesas.push(fetch(url).then(res => res.json()));

	     
}

Promise.all(promesas).then(resultados =>{
	const pokemons = resultados.map((result) =>  ({
		name :result.name,
		id : result.id,
		img : result.sprites.front_default,
		type : result.types.map(type => type.type.name),
	}));


	showPokemon(pokemons);
});
let colors = {
	fire: '#FFA05D',
	grass: '#8FD594',
	electric: '#FFE43B',
	water: '#7E97C0',
	ground: '#CAAC4D',
	rock: '#90642D',
	poison: '#9D5B9B',
	bug: '#EAFD71',
	dragon: '#97b3e6',
	psychic: '#FF96B5',
	flying: '#CDCDCD',
	fighting: '#FF5D5D',
	normal: '#FFFFFF'
  };

const showPokemon = pokemon =>{
	const pokemonHTML=
	pokemon.map((poke)=>
	 `<li class="card" id="card" style="background-color: ${colors[poke.type]}">
		<img class="card-img" src="${poke.img}"/>
		<h2 class="card-subtitle">name: ${poke.name}</h2>
		<p class=" card-text">type: ${poke.type}</p>
	 </li>`
	).join('');
	
	pokedex.innerHTML = pokemonHTML;
}

document.addEventListener("keyup", e=>{

	if (e.target.matches("#search")){
  
		if (e.key ==="Escape")e.target.value = ""
  
		document.querySelectorAll(".card").forEach(pokemo =>{
  
			pokemo.textContent.toLowerCase().includes(e.target.value.toLowerCase()) 
			  ?pokemo.classList.remove("filtro")
			  :pokemo.classList.add("filtro")
		})
	}
  })

