const { Model, DataTypes } = require('sequelize')

class Ong extends Model {
   static init(connection) {
      super.init({
         name: DataTypes.STRING,
         email: DataTypes.STRING,
         whatsapp: DataTypes.STRING,
         city: DataTypes.STRING,
         uf: DataTypes.STRING,
      }, { sequelize: connection })
   }
}

module.exports = Ong
