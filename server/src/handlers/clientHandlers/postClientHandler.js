const postClientCtrl = require('../../controllers/clientCtrls/postClientCtrl.js');

const postClientHandler = async (req, res) => {
    
    const {name, lastname, email, phone, paymentMethod, sale} = req.body; 

    try {
        if (!name || !lastname || !email || !phone || !paymentMethod || !sale) {
            return res.status(400).json({ error: 'Missing required data' });
        }

        const client = await postClientCtrl(name, lastname, email, phone, paymentMethod, sale)
        res.status(200).send(client);
        
    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = postClientHandler;