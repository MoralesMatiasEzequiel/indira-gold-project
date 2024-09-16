const postClientCtrl = require('../../controllers/clientCtrls/postClientCtrl.js');

const postClientHandler = async (req, res) => {
    
    const { dni, name, lastname, email, phone } = req.body;

    try {
        if (!dni || !name || !lastname || !email || !phone) {
            return res.status(400).json({ error: 'Missing required data' });
        }

        const client = await postClientCtrl(dni, name, lastname, email, phone);
        res.status(200).send(client);  //

    } catch (error) {
        if (error.message === 'Ya existe un cliente registrado con este DNI') {
            return res.status(409).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
    }
};

module.exports = postClientHandler;