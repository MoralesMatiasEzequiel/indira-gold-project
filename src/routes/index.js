const { Router } = require('express');
const productRouter = require('./productRoutes.js');
const saleRoutes = require('./saleRoutes.js');
const clientRoutes = require('./clientRoutes.js');
const categoryRoutes = require('./categoryRoutes.js');


const router = Router();

router.use('/products', productRouter);
router.use('/sale', saleRoutes);
router.use('/clients', clientRoutes);
router.use('/category', categoryRoutes);
// router.use('/', (req, res) => {res.send('Server Indira Gold OK')});


module.exports = router;