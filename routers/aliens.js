const express = require('express')
const router =express.Router()
const Alien =require('../models/alien')

router.get('/',async(req,res)=>{
   // res.send('GET request')
   try{
         const aliens =await Alien.find()
         res.json(aliens)
   }
   catch(err){
       res.send('Error'+err)
   }
})

router.get('/:id',async(req,res)=>{
    // res.send('GET request')
    try{
          const alien =await Alien.findById(req.params.id)
          res.json(alien)
    }
    catch(err){
        res.send('Error'+err)
    }
 })
 

router.post('/',async(req,res)=>{
    const alien =new Alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub

    })
    try{
      const a1=await alien.save()
      res.json(a1)
    }catch(err){
        console.log(err)
        res.send('Error')
    }
    
})
// router.pacth('/:id',async(req,res)=>{

router.post('/:id',async(req,res)=>{
    try{
       const alien=await Alien.findById(req.params.id)
       alien.name=req.body.name,
       alien.tech=req.body.tech,
       alien.sub=req.body.sub
       const a1 =await alien.save()
       res.json(a1)


    }catch(err){
        console.log(err)
        res.send('Error')
    }
})

router.post('/delete/:id',async(req,res)=>{
    try{
       const alien=await Alien.findByIdAndDelete(req.params.id)
     // alien.id=req.body.id
      
      //yyyyy const a1 =await alien.save()
       res.json(alien)



    }catch(err){
        console.log(err)
        res.send('Error')
    }
})

module.exports=router
