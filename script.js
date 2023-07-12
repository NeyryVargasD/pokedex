const pokedex = document.getElementById('poke-container');
const promesas =[];


for(let i=1; i<=150; i++){
	const url =`https://pokeapi.co/api/v2/pokemon/${i}`
	promesas.push(fetch(url) .then(res => res.json()));

	     
}

Promise.all(promesas).then(resultados =>{
	const pokemons = resultados.map((result) =>  ({
		name :result.name,
		id : result.id,
		img : result.sprite. front_defoult,
		type : result.types.map(type => type.type.name)

	}))

	sPokemons()
})

const sPokemons = pokemon =>