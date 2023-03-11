const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./db.js')());
const middlewares = jsonServer.defaults();
const randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};
server.use((req, res, next) => {
    setTimeout(next, randomInteger(400, 2000));
});
server.use(middlewares);
server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running');
});
