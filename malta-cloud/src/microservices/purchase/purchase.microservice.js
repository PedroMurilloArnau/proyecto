
const addPurchase = (req,res) => {
    const  beer = req.body;
    console.log(beer)

    if(req.session.purchase === undefined){
        const final = [];
        final.push(beer)
        req.session.purchase = final;
        }
        else{
        this.final = req.session.purchase;
        this.final.push(beer);
        }
        console.log(req.session.purchase);

        return res.status(201).json({
            ok:true,
            name: "Beer added in Purchase",
            lista: req.session.purchase,
          })

}

module.exports = {
    addPurchase,
}