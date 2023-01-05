// Sequelize links that mapped to each FK
const User = require('./User');
const Product = require('./Product');
const OrderItem = require('./OrderItem');

User.hasMany(OrderItem, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

OrderItem.belongsTo(User, {
  foreignKey: 'user_id'
});

Product.hasMany(OrderItem, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});

OrderItem.belongsTo(Product, {
  foreignKey: 'product_id'
});

module.exports = { User, Product, OrderItem };