const { Router } = require("express");
const {Empleado, Cargo} = require("../../db");



const router = Router();


router.post('/', async(req, res)=>{
  try{

    const cargo = await Cargo.create(req.body)
    
    
    res.json(cargo)
  }
  catch(err){
    console.error(err)
  }
})


router.get('/', async (req, res)=>{
  try{

    const cargos = await  Cargo.findAll({include: Empleado})
    
    res.send(cargos)
  }
  catch(err){
    console.error(err)
  }
  })


router.put('/:id', async (req, res)=>{
  try{

    await Cargo.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ success: "Position has been modiefied" });
  }
  catch(err){
    console.error(err)
  }
  })


router.delete("/:id", async (req, res) => {
  try{

    await Cargo.destroy({
      where: { id: req.params.id },
    });
    res.json({ success: "item has been deleted" });
  }
  catch(err){
    console.error(err)
  }
  });


  module.exports= router;