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
    const pickedPokemon = {};
    pickedTeam.push(e.currentTarget);
    console.log(e.currentTarget.classList)
    // console.log(document.querySelector(".id").innerHTML)
    // console.log(pickedTeam)
    document.querySelector(".card-picked").innerHTML = pickedTeam
    render();
  })
})

// Render function
function render() {
for (pokemon of pickedTeam) {
 
    console.log(newPickedTeam)
}
}
// document.addEventListener('load', () => {
//   const pokePick = document.getElementById('card');
//   pokePick.addEventListener('click', pokePick);
// })