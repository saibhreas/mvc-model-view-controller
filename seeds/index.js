const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedarticles = require('./articlesData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPaintings();

  process.exit(0);
};

seedAll();
