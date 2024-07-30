const postSaleCtrl = require('../../controllers/saleCtrls/postSaleCtrl.js');

const postSalesHandler = async (req, res) => {
  const { paymentMethod, soldAt, discount, products, client, paymentFee } = req.body;

  try {
    if (!paymentMethod || !soldAt || !products) {
      return res.status(400).send({ error: 'Missing data' });
    }

    if (typeof paymentMethod !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - paymentMethod' });
    }

    if (typeof soldAt !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - soldAt' });
    }

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
        typeof product.sizeId !== 'string'
      ) {
        return res.status(400).send({ error: 'Incorrect DataType in products array' });
      }
    }

    if (client && typeof client !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - client' });
    }

    if (paymentFee && typeof paymentFee !== 'number') {
      return res.status(400).send({ error: 'Incorrect DataType - paymentFee' });
    }

    const newSale = await postSaleCtrl(paymentMethod, soldAt, discount, products, client, paymentFee);

    res.status(200).send(newSale);

  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = postSalesHandler;