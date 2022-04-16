(async () => {
    const db = require('../dbConfig');
    const TasteNote = require('../tasteNote');

    const tasteNote = new TasteNote();

    tasteNote.beername = "Piña Colada";
    tasteNote.color = "dorado";
    tasteNote.smell = "afrutado";
    tasteNote.tasteMoth = "ligeramente afrutado"
    tasteNote.bitterness = "poco amargo";
    tasteNote.aftertaste = "sueve";
    await tasteNote.save();
})();