

// document.addEventListener(
//   "DOMContentLoaded",
//   () => {
//     console.log("Pokemania JS imported successfully!");
//   },
//   false
// );
//Picked Teams
const pickedTeam = [];

//

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", e => {
    const pickedPokemon = {
 
    name: e.currentTarget.querySelector(".name").innerText,
    type: e.currentTarget.querySelector(".type").innerText,
    baseHP: e.currentTarget.querySelector(".base-hp").innerText,
    baseAttack: e.currentTarget.querySelector(".base-attack").innerText,
    baseDefense: e.currentTarget.querySelector(".base-defense").innerText,
    baseSpecialAttack: e.currentTarget.querySelector(".base-spattack").innerText,
    baseSpecialDefense: e.currentTarget.querySelector(".base-spdefense").innerText,
    baseSpeed: e.currentTarget.querySelector(".base-speed").innerText,
    id: e.currentTarget.querySelector(".id").innerText
  }

  pickedTeam.push(pickedPokemon);
  //   pickedTeam.push(e.currentTarget.querySelector(".name").innerText);
  //   pickedTeam.push(e.currentTarget.querySelector(".type").innerText);
  //   pickedTeam.push(e.currentTarget.querySelector(".abilities").innerText);
  //   pickedTeam.push(e.currentTarget.querySelector(".basestats").innerText);
  //   pickedTeam.push(e.currentTarget.querySelector(".id").innerText);
  
  console.clear()
  console.log(`current target type is ${typeof e.currentTarget}`)
  console.log(`current Target contains ${e.currentTarget}`)
  console.log(`type of picked team is ${typeof pickedTeam}`)
  console.log(`picked Pokemon is ${pickedPokemon}`)
  console.log(`picked Pokemon name is ${pickedPokemon.name}`)
  console.log(`type of picked Pokemon is ${typeof pickedPokemon}`)
  console.log(`type of picked Team is ${typeof pickedTeam}`)
  console.log(`picked Team contains ${pickedTeam}`)
  console.log(`the length of the team is ${pickedTeam.length}`)
    //console.log(e.currentTarget.innerText)
    //console.log(pickedTeam)
    //console.log(pickedPokemon)
    // console.log(document.querySelector(".id").innerHTML)
    // console.log(pickedTeam)
   
    render();
  })
})

// Render function
function render() {
  let list = ""
  pickedTeam.forEach(pokemon =>
    list += `${pokemon.name} Type: ${pokemon.type} Base Stats: ${pokemon.baseHP} ${pokemon.baseAttack} ${pokemon.baseDefense} ${pokemon.baseSpecialAttack} ${pokemon.baseSpecialDefense} ${pokemon.baseSpeed}`)
  document.querySelector(".card-picked").innerHTML = list
  console.log("I am rendering")
}

// document.addEventListener('load', () => {
//   const pokePick = document.getElementById('card');
//   pokePick.addEventListener('click', pokePick);
// })