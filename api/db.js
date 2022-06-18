const Sequelize = require('sequelize');


const EmpleadoModel = require('./models/empleado');
const CargoModel = require('./models/cargos');




const sequelize = new Sequelize('DVqLdqXT4K', 'DVqLdqXT4K', 'BRSES4bLna',{
    host: 'remotemysql.com',
    dialect: 'mysql'

})


const Empleado = EmpleadoModel(sequelize, Sequelize);
const Cargo = CargoModel(sequelize, Sequelize);



Empleado.belongsToMany(Cargo,{
    through: 'Empleado_Cargo'
});

Cargo.belongsToMany(Empleado,{
    through: 'Empleado_Cargo'
})



sequelize.sync({force: false})
    .then(()=>{
        console.log('tables sync')
    });




module.exports={
    Empleado,
    Cargo
}