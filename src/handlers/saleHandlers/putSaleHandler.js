const putSaleCtrl = require('../../controllers/saleCtrls/putSaleCtrl.js');

const putSaleHandler = async (req, res) => {

    const { _id, products, discount, paymentFee, subtotal, shipment } = req.body;

    try {
        
        if(!_id) res.status(400).json({ error: 'Missing ID' });

        if (discount && typeof discount !== 'number') {
            return res.status(400).send({ error: 'Incorrect DataType - discount' });
          }
      
          if (!Array.isArray(products)) {
            return res.status(400).send({ error: 'Incorrect DataType - products' });
          }
      
          for (const product of products) {
            if (
              typeof product.productId !== 'string' ||
              typeof product.colorId !== 'string' ||
              typeof product.sizeId !== 'string' ||
              typeof product.price !== 'number'
            ) {
              return res.status(400).send({ error: 'Incorrect DataType in products array' });
            }
          }

          if (paymentFee && typeof paymentFee !== 'number') {
            return res.status(400).send({ error: 'Incorrect DataType - paymentFee' });
          }

          if(subtotal && typeof subtotal !== 'number'){
            return res.status(400).send({ error: 'Incorrect DataType - subtotal' });
          }

          if (typeof shipment !== 'object') {
            return res.status(400).send({ error: 'Incorrect DataType - shipment must be an object' });
          }

          const updatedSale = await putSaleCtrl(_id, products, discount, paymentFee, subtotal, shipment);

          res.status(200).send(`La venta ${_id} ha sido actualizada`);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

module.exports = putSaleHandler;