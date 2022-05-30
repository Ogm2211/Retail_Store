require('dotenv').config()
const express = require('express')
const {connect, connection} = require('mongoose')
const method = require('method-override')
const app = express()
const PORT = process.env.PORT
const Item = require('./models/Item')
const itemsRoute = require('./routes/itemsRoute')


connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.once('open',()=> console.log('Connected to MongoDB'))

app.use(express.json())
app.use('/api/items',itemsRoute)

// const doc = new Item({
//     name: "Grapes",
//     image: "https://cf.ltkcdn.net/wine/images/std/165373-800x532r1-grapes.jpg",
//     price: 7,
//     quantity:10,
//     category: "fruits",
// })

//  doc.save().then(console.log("Saved"))


// router.delete('Items/:_id', (req,res)=>{
//     Item.findByIdAndDelete(req.params._id ,(err)){
//         if(!err){
//             res.status(200).redirect('/')
//         }
//         else{
//             res.status(400).json(err)
    
//         }
//     }
// })

app.get('/', async (req,res) => {
    try{
        // const items = await Item.find()
        // res.send(items)
        console.log("insede of app.get / router")
    }
    catch(error){
        res.status(400).json(error)
    }
})
app.listen(PORT,() => console.log(`Node JS Server Runnig at port ${PORT}`))