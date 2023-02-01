const sequelize = require('../config/connection');
const seedComment = require('./comment');
const seedJob = require('./job');
const seedUser = require('./user');

const seedData = async () => {
    
    await sequelize.sync({ force: true});
    
    await seedUser();
    await seedJob();
    await seedComment();

    process.exit(0);

};

seedData();