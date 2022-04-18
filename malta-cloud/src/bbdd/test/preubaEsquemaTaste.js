(async () => {
    const db = require('../dbConfig');
    const Taste = require('../taste')

    const tastesd = new Taste();

    tastesd.name = "Cata Rompeolas";
    tastesd.type = "InicialIpa";
    tastesd.taster = "JuanDiego@gmail.com";
    tastesd.students = 20;
    tastesd.placesAvailable = 20;
    tastesd.studient= [{name:"juanchPadilla@filo.com"},{name:"juanchPadilla@filo.com"}];
    tastesd.bier1Name = "Fresquta deliciosa";
    tastesd.bier2Name = "Fresquta gracios";
    tastesd.bier3Name = "Fresquta entrada";
    tastesd.bier4Name = "Fresquta tostada";
    tastesd.date = new Date();    
    tastesd.duration = 1;
    tastesd.state = false;
    await tastesd.save();
})();