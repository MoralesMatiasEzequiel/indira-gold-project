const putClientCtrl = require('../../controllers/clientCtrls/putClientCtrl.js');

const putClientHandler = async (req, res) => {
    const { _id, dni, name, lastname, email, phone, addresses, purchases } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if (
        (dni && typeof dni !== 'string') ||
        (name && typeof name !== 'string') ||
        (lastname && typeof lastname !== 'string') ||
        (email && typeof email !== 'string') ||
        (phone && typeof phone !== 'string') ||
        (addresses && !Array.isArray(addresses)) || 
        (purchases && !Array.isArray(purchases))
      ){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }

      const userUpdate = await putClientCtrl(_id, dni, name, lastname, email, phone, addresses, purchases)
    
      res.status(200).send(`The client has been updated`);

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

module.exports = putClientHandler;