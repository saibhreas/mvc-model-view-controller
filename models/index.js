const User = require('./user.js');
const Gallery = require('./article');


User.hasMany(article, {
  foreignKey: 'user_id',
});

Artilce.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Gallery, Painting };
