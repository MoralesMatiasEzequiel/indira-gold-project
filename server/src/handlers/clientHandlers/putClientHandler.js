const putClientCtrl = require('../../controllers/clientCtrls/putClientCtrl.js');

const putClientHandler = async (req, res) => {
    const { _id, name, lastname, email, phone, paymentMethod, sale } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if (
        (name && typeof name !== 'string') ||
        (lastname && typeof lastname !== 'string') ||
        (email && typeof email !== 'string') ||
        (phone && typeof phone !== 'string') ||   
        (paymentMethod && !Array.isArray(paymentMethod)) ||
        (sale && !Array.isArray(sale))
      ){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }

      const userUpdate = await putClientCtrl(_id, name, lastname, email, phone, paymentMethod, sale)
    
      res.status(200).send(`The client has been updated`);

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

module.exports = putClientHandler;