// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category One-Many
Product.belongsTo(Category, {
  foreignKey : 'category_id',
  onDelete: 'CASCADE' // Parent record - chid records dropped
})
// Categories have many Products
Category.belongsTo(Product, {
  foreignKey : 'category_id',
  
})
//P - T many-many
// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  foreignKey : 'product_id',
  through: ProductTag
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  foreignKey : 'tag_id',
  through: ProductTag
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
