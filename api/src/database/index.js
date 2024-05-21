const { Sequelize } = require('sequelize');

// importar modelos



// vamos a crear una instancia de sequelize
const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
    host: config.dbHost,
    dialect: "mysql",
    port: config.dbPort,
    logging: false,
    define: {
        timestamps: false,
    },
});

