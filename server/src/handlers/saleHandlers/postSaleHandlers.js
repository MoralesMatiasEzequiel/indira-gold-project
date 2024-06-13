const postSaleCtrl = require('../../controllers/saleCtrls/postSaleCtrl.js');

const postSalesHandler = async (req, res) => {
  const { totalAmount, orderNumber, sale, client, product } = req.body;

  try {
    if (!totalAmount || !orderNumber || !sale || !client || !product) {
      return res.status(400).send({ error: 'Missing data' });
    }

    if (typeof totalAmount !== 'number') {
      return res.status(400).send({ error: 'Incorrect DataType - totalAmount' });
    }
    if (typeof orderNumber !== 'number') {
        return res.status(400).send({ error: 'Incorrect DataType - orderNumber' });
    }
    if (sale && !Array.isArray(sale)) {
      return res.status(400).send({ error: 'Incorrect DataType - sale' });
    }
    if (client && !Array.isArray(client)) {
      return res.status(400).send({ error: 'Incorrect DataType - client' });
    }
    if (product && !Array.isArray(product)) {
      return res.status(400).send({ error: 'Incorrect DataType - product' });
    }

    const newSale = await postSaleCtrl(totalAmount, orderNumber, sale, client, product);

    res.status(200).send('Sale created');

  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = postSalesHandler;