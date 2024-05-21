import app from '../app.js';
// import config from '../config/config.js';
import env from '../config/env.js';


const startServer = async () => {
    try {
        app.listen(env.PORT, () => {
            console.log(`Server listening on port ${env.PORT}`);
            console.log(`http://localhost:${env.PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};

startServer();