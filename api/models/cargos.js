const {DataTypes} = require("sequelize");


module.exports = ((sequelize)=>{
    return sequelize.define('cargo',{
        name:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    })
    
}) 