const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?effect=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png">
            alt="${pokemon.name}"
        </div>
    </li>
`
}

fetch(url)
.then((response) => response.json())
.then( (jsonBody)=> jsonBody.results)
.then( (pokemonsList)=>{ 
    for (let i = 0; i < pokemonsList.length; i++) {
        const pokemon = pokemonsList[i];
        console.log(convertPokemonToLi(pokemon))
        
    }
})
.catch((error)=> {console.log(error)})


// fetch(url)
// .then(function(response){
//     response
//         .json()
//         .then(function(responseBody){
//             console.log(responseBody)
//         })
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("Operação concluida")
// })