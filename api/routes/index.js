const {Router} = require('express')

// rutas const apiEmpleadoRouter = require (".api/empleado")

const apiEmpleadoRouter = require('./apiRoutes/empleado')
const apiCargosRouter = require('./apiRoutes/cargo')




const router = Router();


// router.use('/empleados', apiEmpleadoRouter)

router.use('/empleados', apiEmpleadoRouter);
router.use('/cargos', apiCargosRouter);




module.exports = router;