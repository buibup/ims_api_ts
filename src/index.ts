
import { DatabaseProvider } from './database/index';
import { ApiServer } from './server/index';


DatabaseProvider.configure({
    type: process.env.DATABASE_TYPE as any || 'mysql',
    database: process.env.DATABASE_NAME || 'ims_api',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    host: process.env.DATABASE_HOST || 'localhost',
    port: +process.env.DATABASE_PORT || 3306,
    ssl: !!process.env.USE_SSL
});

const server = new ApiServer();
server.start(+process.env.PORT || 8080);
