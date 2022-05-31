const express = require('express')
const Item = require('../models/Item')
const router = express.Router()


// Return all items in database

router.get('/get-all-items', async (req, res) => {
    try {
        const items = await Item.find()
        res.send(items)
    }
    catch (error) {
        res.status(400).json(error)
    }
})

//Return spesific item with id

router.get('/:id', async (req,res) =>{

  try{
      const item = await Item.findById(req.params.id)
      res.send(item)
    
  }
  catch (error){
      res.status(400).json(error)
  }
})

//Delete route 


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

//Update item with id


router.post('/update/:id',async (req,res)=>{
    await Item.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/')
})

//Create new item 

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