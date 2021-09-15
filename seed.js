const mongoose = require('mongoose');

const Pokemon = require('./models/Pokemon');

mongoose.connect('mongodb+srv://Canerunus:gandaswike12@cluster0.sumwm.mongodb.net/Pokemania?retryWrites=true&w=majority');
console.log('test')
const pokemonsTest = [
	{
		name: "aquaman",
		type: ["fire", "ice"],
		abilities: ["firy", "icy"],
        basestats: {
            hp: 100,
            att: 100,
            def: 200,
            satt: 100,
            sdef: 205,
            spe: 124
        }
	},
	{
		name: "bibbolo",
		type: ["fairy", "ice"],
		abilities: ["powder", "icy"],
        basestats: {
            hp: 100,
            att: 110,
            def: 120,
            satt: 100,
            sdef: 205,
            spe: 124
        }
	},
    {
		name: "bsad",
		type: ["ground"],
		abilities: ["Weooos", "powedsss"],
        basestats: {
            hp: 100,
            att: 110,
            def: 120,
            satt: 120,
            sdef: 225,
            spe: 124
        }
	},
    {
		name: "familo",
		type: ["ghost"],
		abilities: ["boouih", "baaah"],
        basestats: {
            hp: 120,
            att: 110,
            def: 120,
            satt: 100,
            sdef: 205,
            spe: 124
        }
	},
    {
		name: "fumi",
		type: ["smokey"],
		abilities: ["powder", "icy"],
        basestats: {
            hp: 100,
            att: 110,
            def: 120,
            satt: 100,
            sdef: 205,
            spe: 124
        }
	},
    {
		name: "fuggolo",
		type: ["fpaso"],
		abilities: ["shishsihs", "shoosho"],
        basestats: {
            hp: 100,
            att: 110,
            def: 120,
            satt: 121,
            sdef: 205,
            spe: 124
        }
	},
    {
		name: "fabobofoaoa",
		type: ["fairy", "ice"],
		abilities: ["powder", "icy"],
        basestats: {
            hp: 100,
            att: 110,
            def: 120,
            satt: 100,
            sdef: 205,
            spe: 124
        }
	},
    {
		name: "xysyuatys",
		type: ["asdasd", "asdasd"],
		abilities: ["asdasd", "asdasd"],
        basestats: {
            hp: 1212,
            att: 1212,
            def: 1212,
            satt: 1212,
            sdef: 1212,
            spe: 1212
        }
	},
    {
		name: "ACAB",
		type: ["BCAA", "ice"],
		abilities: ["Aminosäure", "icy"],
        basestats: {
            hp: 100,
            att: 110,
            def: 120,
            satt: 100,
            sdef: 205,
            spe: 124
        }
	},
    {
		name: "sushisuhsi",
		type: ["fsushi", "fish"],
		abilities: ["fishu", "icy"],
        basestats: {
            hp: 100,
            att: 110,
            def: 120,
            satt: 100,
            sdef: 205,
            spe: 124
        }
	}
]


Pokemon.insertMany(pokemonsTest)
.then(result => {
    console.log('seed successfull');
    mongoose.connection.close();
})
.catch(err => {
    console.log('error')
})


// Book.insertMany(books)
// 	.then(books => {
// 		console.log(`Success - ${books.length} books seeded to the database`);
// 		mongoose.connection.close();
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	})

// Pokemon.insertMany(pokemonsTest)
// 	.then( pokemonsTest => {
// 		console.log(`Success - ${pokemonsTest.length} pokemon seeded to the database`);
// 		mongoose.connection.close();
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	})

        // 🚨 - for async await only use for loops
// bonus: iife - immediatley invoked function expression

