const User = require('./user.js');
const Article = require('./article');
const Comment = require(./comment);

User.hasMany(article, {
  foreignKey: 'user_id',
});

Artilce.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Article,Comment };
