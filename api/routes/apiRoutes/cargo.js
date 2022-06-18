const { Router } = require("express");
const {Empleado, Cargo} = require("../../db");



const router = Router();


router.post('/', async(req, res)=>{
    const cargo = await Cargo.create(req.body)

    
    res.json(cargo)
})


router.get('/', async (req, res)=>{
    const cargos = await  Cargo.findAll({include: Empleado})

    res.send(cargos)
})


router.put('/:id', async (req, res)=>{
    await Cargo.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({ success: "Position has been modiefied" });
})


router.delete("/:id", async (req, res) => {
    await Cargo.destroy({
      where: { id: req.params.id },
    });
    res.json({ success: "item has been deleted" });
  });


  module.exports= router;