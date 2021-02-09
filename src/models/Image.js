const { Model, DataTypes } = require('sequelize')

class Image extends Model {
   static init(connection) {
      super.init({
         url_image: DataTypes.STRING,
         description: DataTypes.STRING
      }, { sequelize: connection })
   }
   //criando relacionamento entre os modelos
   static associate(models) {
      this.belongsTo(models.Ong, { foreignKey: 'ong_id', as: 'ong' })
   }
}

module.exports = Image
