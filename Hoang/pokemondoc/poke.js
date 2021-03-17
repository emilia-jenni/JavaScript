(function () {
  window.addEventListener("DOMContentLoaded", executeScript);

  const POKEURL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
  let pokemons = [];

 async function executeScript() {
    let json = await (await fetch(POKEURL)) .json();
        pokemons = json.results;
        pokemons.forEach(addPokeEl);

        document.querySelectorAll(".pokemon .name").forEach((el) => {
          el.addEventListener("click", (e) => {
            let detailsObj = await (await fetch(e.target.getAttribute("data-url"))).json()
              .then((resp) => resp.json())
              .then((json) => {
                console.log(detailsObj.sprites.front_default);
                document
                  .getElementById("current-pokemon")
                  .setAttribute("src", detailsObj.sprites.front_default);
              });
          });
        });
  }

  function addPokeEl(pokemonObj) {
    let pokeEl = document.createElement("div");
    pokeEl.className = "pokemon";
    pokeEl.innerHTML = `
        <div class="name" data-url="${pokemonObj.url}">
            ${pokemonObj.name}
        </div>
        `;
    document.getElementById("list").appendChild(pokeEl);
  }
})();
