const { $where } = require('../../bbdd/taste');
const Taste = require('../../bbdd/taste');
const  Users  = require('../../bbdd/users');
const Docu = require('../../bbdd/documentation');

const showAllDocumentation = async(req,res) =>{
    try{
        const docus = await Docu.find();
        return res.json(docus);
    }
    catch (err) {
        return res.json({ error: err.message})
    }
}
const addDocumentation = async(req,res) =>{
    const email = req.body.email;
    const docu = req.body;
    try{
        const user = await Users.findOne({email:email});
        if(!user){
        return res.status(400).json({
            ok:false,
            msg: 'User no exist.'
        });
        }
        const docuadd = new Docu();
        docuadd.id = (await Docu.find()).length + 1;
        docuadd.title = docu.title;
        docuadd.author = user.name;
        docuadd.anonimus = docu.anonimus;
        docuadd.articleTitle = docu.articleTitle;
        docuadd.articleImage = docu.articleImage;
        docuadd.articleText = docu.articleText
        docuadd.bibliography = docu.bibliography;
        
        await docuadd.save();

        return res.status(201).json({
            ok: true,
            msg: `The documnetation has added. `,
        });

    }
    catch (error){
        return res.status(500).json({
            ok:false,
            msg: 'Ask for tecnical asistance.'
        })

    }
}
const showThetasting = async(req,res) =>{
    const id = req.params.tip;
    const tasting = await Taste.findOne({id:id})
    try{
    if(!tasting){
        return res.status(404).json({
            ok:false,
            msg: 'Tasting not found.'
    })
}
return res.status(201).json(tasting);
}
catch (error){
    return res.status(500).json({
        ok:false,
        msg: 'Ask for tecnical asistance.'
    })
}
}
const findYourtasting = async(req,res)=>{
    const email = req.params.tip;

    try{
         const tastes = await Taste.find({"studient.name":email,"studient.status":true});
        if(!tastes){
            return res.status(400).json({
                ok:false,
                msg: 'Taste no exist.'
            });
        }
        return res.status(201).json({
            tastes: tastes
        });
    }
    catch (error){
        return res.status(500).json({
            ok:false,
            msg: 'Ask for tecnical asistance.'
        })

    }
}
const finshYourTasting = async(req,res)=>{
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
        await Taste.findOneAndUpdate({name:name,"studient.name":email},{$set:{ "studient.$.status" : false }});
            
            return res.status(201).json({
                ok:true,
                msg: 'Studiente of taste exist in this tasting.'
            })
           
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
        for(let study of taste.studient){
            if(study.name === email){
            return res.status(400).json({
                ok:false,
                msg: 'Studiente of taste exist in this tasting.'
            })
        }
    }
 
        let final = []
        if(taste.studient.length !== undefined){
            final = taste.studient;
            final.push({name:email,status:true});

        }
        else{
            //final = taste.studient;
            //final.push({name:email});
        }
        const total = final.length;
       
        await Taste.findOneAndUpdate({name: name},{studient:final});
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
        newTaste.id = (await Taste.find()).length + 1;
        newTaste.state = false;
        newTaste.placesAvailable= req.body.students;

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
const showTastingTaster = async(req,res) => {
    const tasterparam = req.params.tip;
    try{
        const tastings = await Taste.find({taster:tasterparam})
        return res.json(tastings);

    }
    catch (error){
        return res.status(500).json({
            ok:false,
            msg: 'Ask for tecnical asistance.'
        })

    }
}

module.exports = {
    addtasting,
    showtasting,
    addClient,
    findYourtasting,
    addDocumentation,
    showAllDocumentation,
    showThetasting,
    finshYourTasting,
    showTastingTaster
}
