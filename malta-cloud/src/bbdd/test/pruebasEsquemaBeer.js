(async () => {
    const db = require('../dbConfig');
    const Beer = require('../beer');

    const beersd = new Beer();

    beersd.name = "Piña Colada";
    beersd.stock = 5000;
    beersd.priceUni = 12.54;
    beersd.image = 'https://m.media-amazon.com/images/I/71UciFRS6TL._AC_SL1500_.jpg';
    beersd.biertype = 'ipa';
    await beersd.save();
})();