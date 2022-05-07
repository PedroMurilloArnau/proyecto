const { Router } = require('express');
const { check } = require('express-validator');
const {
    addQuestion,
    createNewGame,
    finishGame,
    yourGame,
    yourQuest,
    yourAnswers
} = require('./game.microservice')

const router = Router();

router.post('/question/add',addQuestion);

router.get('/newgame', createNewGame);

router.post('/finishgame',finishGame);

router.get('/yourgame/:tip', yourGame);

router.get('/yourquest/:tip', yourQuest);

router.get('/youranwsers/:tip', yourAnswers);



module.exports = router;