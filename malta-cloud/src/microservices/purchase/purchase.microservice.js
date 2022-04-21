
const addPurchase = (req,res) => {
    req.session.cuenta = req.session.cuenta ? req.session.cuenta +1 :1;
    const  beer = req.body;
        console.log(req.session.cuenta )

        return res.status(201).json({
            ok:true,
            name: "Beer added in Purchase",
            lista: req.session.purchase,
            cuenta: req.session.cuenta,
          })
}


module.exports = {
    addPurchase,
}