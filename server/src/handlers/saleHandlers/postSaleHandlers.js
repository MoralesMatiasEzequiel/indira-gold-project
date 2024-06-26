const postSaleCtrl = require('../../controllers/saleCtrls/postSaleCtrl.js');

const postSalesHandler = async (req, res) => {
  const { orderNumber, paymentMethod, soldIn, discount, products } = req.body;

  try {
    if (!orderNumber || !paymentMethod || !soldIn || !discount || !products) {
      return res.status(400).send({ error: 'Missing data' });
    }

    if (typeof orderNumber !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - orderNumber' });
    }

    // if (client && !Array.isArray(client)) {
    //   return res.status(400).send({ error: 'Incorrect DataType - client' });
    // }

    if (paymentMethod && !Array.isArray(paymentMethod)) {
      return res.status(400).send({ error: 'Incorrect DataType - paymentMethod' });
    }

    if (soldIn && !Array.isArray(soldIn)) {
      return res.status(400).send({ error: 'Incorrect DataType - soldIn' });
    }    

    if (typeof discount !== 'number') {
      return res.status(400).send({ error: 'Incorrect DataType - discount' });
    }
    
    if (products && !Array.isArray(products)) {
      return res.status(400).send({ error: 'Incorrect DataType - products' });
    }

    const newSale = await postSaleCtrl(orderNumber, paymentMethod, soldIn, discount, products);

    res.status(200).send(newSale);

  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = postSalesHandler;