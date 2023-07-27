const { Sequelize } = require('sequelize');

const db = new Sequelize('onboarding', 'admin', 'G6IsIjpruuyJLYGHiyVi', {
    host: 'database-sat.cvzigdego3ea.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
});

const dbConnection = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {dbConnection, db}