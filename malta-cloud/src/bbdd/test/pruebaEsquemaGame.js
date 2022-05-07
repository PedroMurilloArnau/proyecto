(async () => {
    const db = require('../dbConfig');
    const Game = require('../game');

    const gamesd = new Game();

    gamesd.id = 1;
    gamesd.date = new Date();
    gamesd.gamer = "PedroElGrande";
    gamesd.puntuation = 100;

    await gamesd.save();

})();