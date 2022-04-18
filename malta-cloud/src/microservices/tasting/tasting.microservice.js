const Taste = require('../../bbdd/taste');

const addClient = async(req,res) => {
    const name = req.body.name;
    const email = req.body.email;

    try{
        const taste = await Taste.findOne({name: name});

        if(!taste){
            return res.status(400).json({
                ok:false,
                msg: 'Taste name no exist.'
            });
        }
        const final = []
        if(taste.studient.length != 0){
            this.final = taste.studient;
            final.find({name:email});

        }
        else{
            final = taste.studient
            final.push({name:email});
        }

        await Taste.findOneAndUpdate({name: name},{studient:final});
        console.log(taste);
        return res.status(201).json({
            ok: true,
            name: name,
            msg: `Se ha incorporado al taste ${name}. `
        });
    }
    catch (error){
        return res.status(500).json({
            ok:false,
            msg: 'Ask for tecnical asistance.'
        })

    }
}

const addtasting = async(req,res) => {
    const name = req.body.name;

    try{
        const taste = await Taste.findOne({name: name});

        if (taste){
            return res.status(400).json({
                ok:false,
                msg: 'Taste name exist pleace change the name.'
            });
        }
        const newTaste = new Taste(req.body)

        await newTaste.save();

        return res.status(201).json({
            ok: true,
            name: name,
        });
    }
    catch (error){
        return res.status(500).json({
            ok:false,
            msg: 'Ask for tecnical asistance.'
        })

    }
};
const showtasting = async(req,res) => {
    try{
        const testers = await Taste.find();
        return res.json(testers);
    }
    catch (err) {
        return res.json({ error: err.message})
    }
};

module.exports = {
    addtasting,
    showtasting,
    addClient
}