const { $where } = require('../../bbdd/taste');
const Taste = require('../../bbdd/taste');

const findYourtasting = async(req,res)=>{
    const email = req.body.email;


    try{
         const tastes = await Taste.find({"studient.name":email});
        if(!tastes){
            return res.status(400).json({
                ok:false,
                msg: 'Taste no exist.'
            });
        }
        return res.status(201).json({
            tastes
        });
    }
    catch (error){
        return res.status(500).json({
            ok:false,
            msg: 'Ask for tecnical asistance.'
        })

    }
}

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
        let final = []
        if(taste.studient.length !== undefined){
            final = taste.studient;
            final.push({name:email});

        }
        else{
            //final = taste.studient;
            //final.push({name:email});
        }
        const total = final.length;
       
        await Taste.findOneAndUpdate({name: name},{studient:final});
        console.log(taste);
        return res.status(201).json({
            ok: true,
            name: name,
            msg: `Se ha incorporado al taste ${name}. `,
            message: final.length,
            studient: final.name,
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
    addClient,
    findYourtasting,
}