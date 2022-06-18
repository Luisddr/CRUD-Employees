const { Router } = require("express");
const {Empleado, Cargo} = require("../../db");



const router = Router();


router.post('/', async(req, res)=>{
    const empleado = await Empleado.create(req.body);
    const {cargo} = req.body;

   let workerPosition  = await Cargo.findOne({
        where: {name : cargo}
    })

    await empleado.addCargo(workerPosition)
    res.json(empleado)
})


router.get('/', async (req, res)=>{
    const empleados = await Empleado.findAll({include: Cargo})

    res.send(empleados)
})


router.put('/:id', async (req, res)=>{
    await Empleado.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({ success: "Employee has been modiefied" });
})


router.delete("/:id", async (req, res) => {
    await Empleado.destroy({
      where: { id: req.params.id },
    });
    res.json({ success: "item has been deleted" });
  });


  module.exports= router;