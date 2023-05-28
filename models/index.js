// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreingKey:'category_id'
});
// Categories have many Products
Category.hasMany(Product,{
  foreingKey:'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through:ProductTag,
  foreingKey:'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through:ProductTag,
  foreingKey:'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
