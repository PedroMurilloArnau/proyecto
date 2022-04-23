const Purchase = require('../../bbdd/purchase');
const Beer = require('../../bbdd/beer');
const  Users  = require('../../bbdd/users');

const addPurchase = async (req,res) => {
    const email = req.params.tip;
    const purchies = req.body;
    
    try{
       const user = await Users.findOne({email:email});
       if(purchies === undefined ){
        return res.status(404).json({
            ok:false,
            msg: 'Purchase are empty.'
        })
       }
       else{
        let final = [];
        let price = 0;
        let bire = {};
        for(let biers of purchies ){
            const biar = await Beer.findOne({name: biers.name});
             total = biar.stock - biers.cantidad;
             if(total > 0){
            await Beer.findOneAndUpdate({name: biers.name},{stock:total});
            bire.name = biers.name;
            bire.amount = biers.cantidad;
            price = price + biers.price;
            final.push(bire);
        }
            else{
                return res.status(404).json({
                    ok:false,
                    msg: 'Stock of this beer is not enough.'
            })
        }
    }
        const purchaseadd = new Purchase()
        purchaseadd.user = email;
        purchaseadd.price = price;
        purchaseadd.biers = final;
        purchaseadd.date = new Date();
        purchaseadd.biling = Math.floor(Math.random() * (5000 - 100) + 100);;
        purchaseadd.id =  (await Purchase.find()).length + 1;
        
        await purchaseadd.save();

        return res.status(201).json({
            ok:true,
            name: "Beer added in Purchase",
            cuenta: user.name,
          })
        }
    }
    catch (error){
        return res.status(500).json({
            ok:false,
            msg: 'Ask for tecnical asistance.'
        })
    }
}


module.exports = {
    addPurchase,
}