const putProductCtrl = require('../../controllers/productCtrls/putProductCtrl.js');

const putProductHandler = async (req, res) => {
    const { _id, name, color, supplier, imageGlobal, price, description, category, active } = req.body;
    try {
        if(!_id) return res.status(400).json({ error: 'Missing ID' });

        // Validación de los campos opcionales
        if (
            (name && typeof name !== 'string') ||
            (color && !Array.isArray(color)) ||
            (supplier && typeof supplier !== 'object') ||
            (imageGlobal && typeof imageGlobal !== 'string') ||
            (price && typeof price !== 'number') ||
            (description && typeof description !== 'string') ||
            (category && !Array.isArray(category)) ||
            (active && typeof active !== 'boolean')
        ) {
            return res.status(400).send({ error: 'Incorrect DataType' });
        };

        // Validar la estructura del objeto `color` si se proporciona
        if (color) {
            for (const c of color) {
                if (typeof c.colorName !== 'string' || !Array.isArray(c.size)) {
                    return res.status(400).send({ error: 'Incorrect Color Structure' });
                }

                for (const s of c.size) {
                    if (typeof s.sizeName !== 'string' || typeof s.stock !== 'number') {
                        return res.status(400).send({ error: 'Incorrect Size Structure' });
                    }

                    for (const m of s.measurements) {
                        if (typeof m.width !== 'string' || typeof m.long !== 'string' || typeof m.rise !== 'string') {
                            return res.status(400).send({ error: 'Incorrect Measurement Structure' });
                        }
                    }
                }
            }
        };

        const productUpdate = await putProductCtrl(_id, { name, color, supplier, imageGlobal, price, description, category, active });

        return res.status(200).send(`Product has been updated`);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = putProductHandler;