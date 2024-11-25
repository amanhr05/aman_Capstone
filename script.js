document.addEventListener('DOMContentLoaded', () => {
    const loginPage = document.getElementById('login-page');
    const header = document.getElementById('header');
    const mainContent = document.getElementById('main-content');
    const loginForm = document.querySelector('.login-container form');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const validUsername = 'admin';
    const validPassword = 'admin';
  
    const searchBar = document.getElementById('search-bar');
    const searchBtn = document.getElementById('search-btn');
    const pokemonGallery = document.getElementById('pokemon-gallery');
    const loadMoreButton = document.getElementById('load-more');
    const pokemonDetails = document.getElementById('pokemon-details');
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonInfo = document.getElementById('pokemon-info');
    const pokemonAbilities = document.getElementById('pokemon-abilities');
    const closeModalButton = document.getElementById('close-modal');
    const caughtPokemonGallery = document.getElementById('caught-pokemon-gallery');
  
    let pokemonOffset = 0;
    const pokemonLimit = 12;
    const caughtPokemonList = [];
  
   
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      if (username === validUsername && password === validPassword) {
        loginPage.style.display = 'none';
        header.style.display = 'block';
        mainContent.style.display = 'block';
        fetchPokemonData(pokemonOffset, pokemonLimit);
      } else {
        alert('Invalid username or password!');
      }
    });
  
    async function fetchPokemonData(offset, limit) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
      const data = await response.json();
      displayPokemon(data.results);
    }
  
 
    async function displayPokemon(pokemonList) {
      pokemonGallery.innerHTML = '';
  
      for (const pokemon of pokemonList) {
        const response = await fetch(pokemon.url);
        const details = await response.json();
        
        const div = document.createElement('div');
        div.className = 'pokemon';
        div.innerHTML = `
          <img src="${details.sprites.front_default}" alt="${details.name}" />
          <h3>${details.name}</h3>
          <button class="view-details" data-id="${details.id}">View Details</button>
          <button class="catch-btn" data-id="${details.id}">Catch</button>
        `;
        pokemonGallery.appendChild(div);
      }
  
      
      document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
          const pokemonId = e.target.dataset.id;
          viewPokemonDetails(pokemonId);
        });
      });
  
      document.querySelectorAll('.catch-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          const pokemonId = e.target.dataset.id;
          catchPokemon(pokemonId);
        });
      });
    }
  
   
    async function viewPokemonDetails(pokemonId) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      
      pokemonName.textContent = data.name;
      pokemonInfo.textContent = `Height: ${data.height} | Weight: ${data.weight}`;
      
      pokemonAbilities.innerHTML = '';
      data.abilities.forEach(ability => {
        const li = document.createElement('li');
        li.textContent = ability.ability.name;
        pokemonAbilities.appendChild(li);
      });
  
      pokemonDetails.style.display = 'block';
    }
  
    closeModalButton.addEventListener('click', () => {
      pokemonDetails.style.display = 'none';
    });
  
  
    function catchPokemon(pokemonId) {
      const pokemonName = document.querySelector(`button[data-id="${pokemonId}"]`).parentElement.querySelector('h3').textContent;
      if (!caughtPokemonList.includes(pokemonName)) {
        caughtPokemonList.push(pokemonName);
        alert(`${pokemonName} has been caught!`);
        displayCaughtPokemon();
      } else {
        alert(`${pokemonName} is already in your collection!`);
      }
    }
  
   
    function displayCaughtPokemon() {
      caughtPokemonGallery.innerHTML = '<h3>Caught Pokémon</h3>';
  
      if (caughtPokemonList.length > 0) {
        const table = document.createElement('table');
        table.innerHTML = `
          <thead>
            <tr><th>Name</th><th>Action</th></tr>
          </thead>
          <tbody>
            ${caughtPokemonList.map(name => 
              `<tr><td>${name}</td><td><button class="release-btn">Release</button></td></tr>`
            ).join('')}
          </tbody>
        `;
        caughtPokemonGallery.appendChild(table);
  
        
        document.querySelectorAll('.release-btn').forEach(button => {
          button.addEventListener('click', (e) => {
            const row = e.target.parentElement.parentElement;
            const pokemonName = row.querySelector('td').textContent;
            releasePokemon(pokemonName);
          });
        });
      } else {
        caughtPokemonGallery.innerHTML += '<p>No Pokémon caught yet!</p>';
      }
    }
  
    
    function releasePokemon(pokemonName) {
      const index = caughtPokemonList.indexOf(pokemonName);
      if (index !== -1) {
        caughtPokemonList.splice(index, 1);
        alert(`${pokemonName} has been released!`);
        displayCaughtPokemon();
      }
    }
  
    
    loadMoreButton.addEventListener('click', () => {
      pokemonOffset += pokemonLimit;
      fetchPokemonData(pokemonOffset, pokemonLimit);
    });
  
   
    searchBtn.addEventListener('click', () => {
      const searchTerm = searchBar.value.toLowerCase();
      const pokemonItems = document.querySelectorAll('.pokemon');
  
      pokemonItems.forEach(pokemon => {
        const name = pokemon.querySelector('h3').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
          pokemon.style.display = 'block';
        } else {
          pokemon.style.display = 'none';
        }
      });
    });
  });
  