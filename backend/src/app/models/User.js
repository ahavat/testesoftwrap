const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      age: DataTypes.STRING,
      maritalStatus: DataTypes.STRING,
      cpf: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}
module.exports = User;