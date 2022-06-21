const { Router } = require("express");
const {Empleado, Cargo} = require("../../db");



const router = Router();


router.post('/', async(req, res)=>{
  try{

    const empleado = await Empleado.create(req.body);
    const {cargo} = req.body;
    
    let workerPosition  = await Cargo.findOne({
      where: {name : cargo}
    })
    
    await empleado.addCargo(workerPosition)
    res.json(empleado)
  }
  catch(err){
    console.error(err)
  }
})


router.get('/', async (req, res)=>{
  try{

    const empleados = await Empleado.findAll({include: Cargo})
    
    res.send(empleados)
  }
  catch(err){
    console.error(err)
  }
})

router.get('/:id', async(req, res)=>{
  try{
    const {id} = req.params;
    const employee = await Empleado.findOne({
      where: {
        id: id
      },
      include: Cargo

    })
    res.send(employee)

  }
  catch(err){
    console.error(err)
  }
})


router.put('/:id', async (req, res)=>{
  try{

   await Empleado.update(req.body, {
      where: { id: req.params.id },
    });
    const {cargo} = req.body
    const {id} = req.params.id
    
    const employee = await Empleado.findOne({where:{id: req.params.id}})

    
     


    let workerPosition  = await Cargo.findOne({
      where: {name : cargo}
    })

    let currentCargo = await Cargo.findAll()

    

    await employee.removeCargo(currentCargo)
    await employee.addCargo(workerPosition)

   // message: "succes"
    res.json({message: "succes"});
  }
  catch(err){
    console.error(err)
  }
})


router.delete("/:id", async (req, res) => {
  try{

    await Empleado.destroy({
      where: { id: req.params.id },
    });
    res.json({ success: "item has been deleted" });
  }
  catch(err){
    console.error(err)
  }
  });


  module.exports= router;