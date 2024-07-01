const postSaleCtrl = require('../../controllers/saleCtrls/postSaleCtrl.js');

const postSalesHandler = async (req, res) => {
  const { paymentMethod, soldAt, discount, products, client } = req.body;

  try {
    
    //saqué discount de esta comprobación porque no siempre va a haber un descuento, entonces si el descuento es 0, siempre va a faltar data porque 0 es igual a null
    if (!paymentMethod || !soldAt || !products) {
      return res.status(400).send({ error: 'Missing data' });
    }

    //corregí esta comprobación para estar acorde a cómo es el modelo Sale ahora

    if (typeof paymentMethod !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - paymentMethod' });
    }

    //lo mismo acá

    if (typeof soldAt !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - soldAt' });
    }    

    if (typeof discount !== 'number') {
      return res.status(400).send({ error: 'Incorrect DataType - discount' });
    }
    
    if (products && !Array.isArray(products)) {
      return res.status(400).send({ error: 'Incorrect DataType - products' });
    }

    //y agregué esta comprobación para asegurarme que client es un string

    if (client && typeof client !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - client' });
    }

    const newSale = await postSaleCtrl(paymentMethod, soldAt, discount, products, client);

    res.status(200).send(newSale);

  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = postSalesHandler;