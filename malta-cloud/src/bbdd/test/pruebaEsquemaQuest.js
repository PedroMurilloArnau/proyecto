(async () => {
    const db = require('../dbConfig');
    const Quest = require('../quest');

    const questsd = new Quest();

    questsd.id = 4;
    questsd.date = new Date();
    questsd.creator = "pepamelero@gmail.com";
    questsd.question = "¿ Cual es el aditivo principal de la cerveza?";
    questsd.questions = [{name:"Lupulo",value:true},{name:"Gervera",value:false},{name:"Trigo",value:false},{name:"Calendula",value:false}];
    questsd.status = true;
    questsd.topic = [{name:"basic"}];

    await questsd.save();

})();