const app = require('./app');
const port = 4000;
require('./database');

async function init(){
    await app.listen(port);
    console.log(`Servidor en el puerto ${port} ....!!!`);
}

init();