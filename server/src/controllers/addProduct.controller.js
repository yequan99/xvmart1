const { db } = require('../configs/firebaseConfig')

function post(req,res) {
    const data = req.body.product
    console.log("received data:", data)
    res.sendStatus(200)
    db.collection("Product").add(data)
}

module.exports = { post }