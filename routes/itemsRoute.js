const express = require('express')
const Item = require('../models/Item')
const router = express.Router()

router.get('/get-all-items', async (req, res) => {
    try {
        const items = await Item.find()
        res.send(items)
    }
    catch (error) {
        res.status(400).json(error)
    }
})

router.get('/:id', async (req,res) =>{

  try{
      const item = await Item.findById(req.params.id)
      res.send(item)
    
  }
  catch (error){
      res.status(400).json(error)
  }
})
router.delete('/Delete/:id', (req, res) => {
    console.log('Inside of delete request', req.params.id)
    Item.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).redirect('http/localhost:3000/items')
        } else {
            res.status(400).json(err)
        }
    })
})
router.post('/update/:id',async (req,res)=>{
    await Item.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/')
})

router.post('/add-item', async (req, res) => {
    try {
        const newItem = new Item(req.body)
        await newItem.save();
        res.send("Item Added succesfully")
    }
    catch (error) {
        res.status(400).json(error)
    }
})



module.exports = router