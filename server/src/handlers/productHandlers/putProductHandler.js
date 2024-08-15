const putProductCtrl = require('../../controllers/productCtrls/putProductCtrl.js');

const putProductHandler = async (req, res) => {
    try {
        const { _id, name, color, supplier, price, description, category, active } = req.body;

        if (!_id) return res.status(400).json({ error: 'Missing ID' });

        if (name && typeof name !== 'string') {
            return res.status(400).send({ error: 'Incorrect DataType name' });
        };
        if (color && !Array.isArray(JSON.parse(color))) {
            return res.status(400).send({ error: 'Incorrect DataType color' });
        };
        if (supplier && typeof JSON.parse(supplier) !== 'object') {
            return res.status(400).send({ error: 'Incorrect DataType supplier' });
        };

        if (price && typeof Number(price) !== 'number') {
            return res.status(400).send({ error: 'Incorrect DataType price' });
        };
        if (description && typeof description !== 'string') {
            return res.status(400).send({ error: 'Incorrect DataType description' });
        };
        if (category && !Array.isArray(JSON.parse(category))) {
            return res.status(400).send({ error: 'Incorrect DataType category' });
        };
        if (active && typeof JSON.parse(active) !== 'boolean') {
            return res.status(400).send({ error: 'Incorrect DataType active' });
        };

        // Procesar las imágenes subidas
        const imagePaths = req.files['images'] ? req.files['images'].map(file => file.path) : [];
        const imageGlobalPath = req.files['imageGlobal'] ? req.files['imageGlobal'][0].path : null;

        const parsedColor = JSON.parse(color);
        parsedColor.forEach((c, index) => {
            if (imagePaths[index]) {
                c.image = imagePaths[index];
            }
        });

        const productUpdate = await putProductCtrl(
            _id, 
            name, 
            parsedColor, 
            JSON.parse(supplier), 
            Number(price), 
            JSON.parse(category), 
            description, 
            JSON.parse(active),
            imageGlobalPath
        );

        return res.status(200).send('Product has been updated');

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = putProductHandler;