import app from '../app.js';
import env from '../config/env.js';
import loadDatabase from '../database/loadData.js';


const startServer = async () => {
    try {
        await loadDatabase();
        app.listen(env.PORT, () => {
            console.log(`Server listening on port ${env.PORT}`);
            console.log(`http://localhost:${env.PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};

startServer();
