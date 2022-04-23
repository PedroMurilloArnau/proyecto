(async () =>{
    const db = require('../dbConfig');
    const Docu = require('../documentation');

    const docudb = new Docu();

    docudb.id = 1;
    docudb.title = "Colores";
    docudb.author = "Pedro";
    docudb.anonimus = false;
    docudb.articleTitle = "Primicia del color";
    docudb.articleImage = "https://cervezaartesana.com/wp-content/uploads/2020/04/color-cerveza-2.png";
    docudb.articleText = `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
     been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
     also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in 
     the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
     with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
     docudb.bibliography = "https://cervezaartesana.com/";

    await docudb.save();
})();