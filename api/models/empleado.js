const {DataTypes} = require("sequelize");

module.exports = ((sequelize)=>{
    return sequelize.define('empleado',{
        name:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        birthday:{
            type: DataTypes.STRING,
            
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
    
}) 
