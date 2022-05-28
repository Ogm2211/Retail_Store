const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {type:String, required: true},
    image: {type:String , default:"https://raindropro.co/wp-content/uploads/2016/08/why-need.jpg"},
    price: {type:Number, required:true},
    quantity: {type:Number,required:true},
    category: String
})

const Item = mongoose.model('Item',itemSchema)

module.exports = Item