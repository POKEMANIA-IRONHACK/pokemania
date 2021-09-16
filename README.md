
*** POKEMANIA: A POKEMON TEAM PLANNER TOOL ***

Description; 

The Pokemon team planner tool is a project made by Ironhack students enrolled in the web-dev Bootcamp Aug 2021. The aim of this website is for the user to create an interactive pokemon team planner. 

We used the PokeApi(https://pokeapi.co/) to fetch all the data of the 111


Pokemon Team Planner Tool


       <div class="cardContainer">
                {{#each pokemonList}}
                <div class="card" id="card">
                <h1 class="name">{{name.english}}</h1>
                <h1 class="type"> {{type}} </h1>
                <h1 class="base-hp"> HP: {{base.HP}} </h1>
                <h1 class="base-attack"> Attack: {{base.Attack}} </h1>
                <h1 class="base-defense"> Defense: {{base.Defense}} </h1>
                <h1 class="base-spattack"> Special Attack: {{base.SpecialAttack}} </h1>
                <h1 class="base-spdefense"> Special Defense: {{base.SpecialDefense}} </h1>
                <h1 class="base-speed"> Speed: {{base.Speed}} </h1>
                <div class="id" style="visibility: hidden">
                {{_id}}
                </div>
                </div>
                 {{/each}}
