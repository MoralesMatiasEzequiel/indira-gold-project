const putClientCtrl = require('../../controllers/clientCtrls/putClientCtrl.js');

const putClientHandler = async (req, res) => {
    const { _id, name, lastname, email, phone, paymentMethod, sale, active } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if (
        (name && typeof name !== 'string') ||
        (lastname && typeof lastname !== 'string') ||
        (email && typeof email !== 'string') ||
        (phone && typeof phone !== 'number') ||   
        (paymentMethod && typeof paymentMethod !== 'string') ||
        // (sale && !Array.isArray(sale) && sale.length <= 0) ||  //Qué iria aquí?
        (active && typeof active !== 'boolean')
      ){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }

      const userUpdate = await putClientCtrl(_id, name, lastname, email, phone, paymentMethod, active, sale)
    
      res.status(200).send(`The client has been updated: ${userUpdate}`);

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

module.exports = putClientHandler;