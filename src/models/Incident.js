const { Model, DataTypes } = require('sequelize')

class Incident extends Model {
   static init(connection) {
      super.init({
         title: DataTypes.STRING,
         description: DataTypes.STRING,
         value: DataTypes.DECIMAL(10, 2),
      }, { sequelize: connection })
   }
   //criando relacionamento entre os modelos
   static associate(models) {
      this.belongsTo(models.Ong, { foreignKey: 'ong_id', as: 'ong' })
   }
}

module.exports = Incident
