const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./db.js')());
const middlewares = jsonServer.defaults({ static: 'public/assets/images' });
router.render = (req, res) => {
    if (req.originalUrl.indexOf('_page') > -1) {
        res.json({
            data: res.locals.data,
            metaData: {
                totalCount: res.get('X-Total-Count'),
            },
        });
    } else {
        res.json(res.locals.data);
    }
};
server.use((req, res, next) => {
    setTimeout(next, 400);
});
server.use(middlewares);
server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running');
});
