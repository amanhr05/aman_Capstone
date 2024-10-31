const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const pokedexElement = document.getElementById('pokedex');
const loadMoreButton = document.getElementById('load-more');
const modal = document.getElementById('pokemon-modal');
const modalContent = document.getElementById('pokemon-details');
const catchButton = document.getElementById('catch-button');
const closeModalButton = document.querySelector('.close');

let offset = 0;
let caughtPokemon = JSON.parse(localStorage.getItem('caughtPokemon')) || [];

// Fetch and display initial Pokemon
async function fetchAndDisplayPokemon() {
    const response = await fetch(`${POKE_API_URL}?offset=${offset}&limit=20`);
    const data = await response.json();
    data.results.forEach(async (pokemon) => {
        const pokemonData = await fetchPokemonData(pokemon.url);
        displayPokemon(pokemonData);
    });
    offset += 20;
}

async function fetchPokemonData(url) {
    const response = await fetch(url);
    return await response.json();
}

// Display Pokemon in the grid
function displayPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    if (caughtPokemon.includes(pokemon.id)) {
        card.classList.add('caught');
    }
    card.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
        <p>${pokemon.name}</p>
    `;
    card.addEventListener('click', () => showPokemonDetails(pokemon));
    pokedexElement.appendChild(card);
}

// Show Pokemon details in modal
function showPokemonDetails(pokemon) {
    modalContent.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}">
        <p><strong>Abilities:</strong> ${pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        <p><strong>Types:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</p>
    `;
    catchButton.textContent = caughtPokemon.includes(pokemon.id) ? 'Release' : 'Catch';
    catchButton.onclick = () => toggleCatchStatus(pokemon);
    modal.style.display = 'block';
}

// Toggle catch status and update local storage
function toggleCatchStatus(pokemon) {
    if (caughtPokemon.includes(pokemon.id)) {
        caughtPokemon = caughtPokemon.filter(id => id !== pokemon.id);
    } else {
        caughtPokemon.push(pokemon.id);
    }
    localStorage.setItem('caughtPokemon', JSON.stringify(caughtPokemon));
    modal.style.display = 'none';
    pokedexElement.innerHTML = '';
    offset = 0;
    fetchAndDisplayPokemon();
}

// Event Listeners
loadMoreButton.addEventListener('click', fetchAndDisplayPokemon);
closeModalButton.addEventListener('click', () => (modal.style.display = 'none'));
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Initial Load
fetchAndDisplayPokemon();
