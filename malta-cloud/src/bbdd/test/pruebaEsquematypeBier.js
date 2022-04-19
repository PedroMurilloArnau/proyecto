(async () => {
    const db = require('../dbConfig');
    const Type = require('../typeBier');

    const type = new Type();

    type.type = "wheat";

    
    await type.save();
})();