(async () => {
    const db = require('../dbConfig');
    const Purchase = require('../purchase');

    const purchasesd = new Purchase();

    purchasesd.id = 1;
    purchasesd.date = new Date();
    purchasesd.biling = 32131;
    purchasesd.biers = [{name:"carolina bien",amount:2},{name:"Fortaleza rica",amount:2 }];
    purchasesd.price = 45.5;

    await purchasesd.save();

})();