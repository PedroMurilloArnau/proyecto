
const game = require('../../bbdd/game');
const Questions = require('../../bbdd/quest');
const Games = require('../../bbdd/game')

// const createNewGame = async(req,res) => {
//     try{
//         var list=[];
//         var listgo=[];
//         const info = await Questions.find();
//         const lung = info.length;
//         console.log(lung);
//         while(list.length < 4) {
//         // var existe = false;
//             const result = Math.ceil(Math.random() * (lung - 0));
//             console.log(result);
//         // for(var i=0;i<list.length;i++){
//         //   if(list.length === 0 || list [i] === result){
//         //       console.log(result);
//         //       existe = true;
//         //       break;
//         //   }
//         // }
//         // const existe = list.some(iListElement => iListElement === result);
//         // if(existe === false){
//             if (!list.includes(result)) {
//                 list.push(result);
//             }
//             console.log(list);
//         }
//         const listGoManu = list.map(iElement => info.find(iInfo => iInfo.id === iElement));
//         // for(let ids of list){
//         //     listgo.push(await Questions.findOne({id:ids}));
//         // }
//         // console.log(listgo);


const createNewGame = async(req,res) => {
    try{
    var list=[];
    var listgo=[];
    const lung = await (await Questions.find()).length
    console.log(lung);
     while(list.length < 4){
    var existe = false;
    const result = Math.ceil(Math.random() * (lung - 0));
    console.log(result);
    for(var i=0;i<list.length;i++){
      if(list.length === 0 || list [i] === result){
          console.log(result);
          existe = true;
          break;
      }
    }
    if(existe === false){
        list[list.length] = result;
    }
    console.log(list);
}
    for(let ids of list){
        listgo.push(await Questions.findOne({id:ids}));
    }
    console.log(listgo);

    return res.status(201).json({
        ok: true,
        game:listgo,
    })
}
catch(err) {
    return res.json({error: err.message});
}
}

const finishGame = async(req,res) => {
    try{
        const gameadd = new Games()
        gameadd.id =  (await Games.find()).length + 1;
        gameadd.date = new Date();
        gameadd.gamer = req.body.gamer;
        gameadd.puntuation = req.body.puntuation;

        await gameadd.save();
        

    }
    catch (err) {
        return res.json({error: err.message});
    }
}

const addQuestion = async(req,res) => {
    const questions = req.body.question;
    try{
        const quest = await Questions.findOne({question: questions});
        if(quest) {
            return res.status(400).json({
                ok: false,
                msg:'We have that question try to add an other.'
            })
        }
        let final = [];
        let question = {};
        let question1 = {};
        let question2 = {};
        let questuin3 = {};
        let suri = 0;
        
        question.name = req.body.CorrectAnswer;
        question.value = true;
        final.push(question);
        question1.name = req.body.AnswerSecond;
        question1.value = false;
        final.push(question1);
        if(req.body.AnswerThird !== undefined){
            question2.name = req.body.AnswerThird;
            question2.value = false;
            final.push(question2);
        }
        if(req.body.AnswerFourth !== undefined){
            questuin3.name = req.body.AnswerFourth;
            questuin3.value = false;
            final.push(questuin3);
        }
        
        const questadd = new Questions();
        questadd.date = new Date();
        questadd.creator = req.body.creator;
        questadd.status = true;
        questadd.question = req.body.question;
        questadd.id = (await Questions.find()).length + 1;
        questadd.questions = final;

        await questadd.save();

        return res.status(201).json({
            ok:true,
            name: "Question added",
          })
        }
    catch (err) {
        return res.json({error: err.message});
    }
}
const yourQuest = async(req,res) => {
    const creator = req.params.tip;
    try{
        const questions = await Questions.find({creator:creator})
        return res.json(questions)
    }
    catch (err) {
        return res.json({error: err.message});
    }
}

const yourGame = async(req,res) => {
    const gamer = req.params.tip;
    try{
        const games = await Games.find({gamer:gamer});
        return  res.json(games);
    }
    catch (err) {
        return res.json({error: err.message});
    }
}

const yourAnswers = async(req,res) => {
    const id = req.params.tip;
    console.log(id);
    try{
        const answers = await Questions.findOne({id:id});
        return  res.json(answers.questions);
    }
    catch (err) {
        return res.json({error: err.message});
    }
}

module.exports = {
    addQuestion,
    createNewGame,
    finishGame,
    yourGame,
    yourQuest,
    yourAnswers
    
}