const putProductCtrl = require('../../controllers/productCtrls/putProductCtrl.js');

const putProductHandler = async (req, res) => {
    // console.log('Incoming files:', req.files);
    // console.log('req.files:', req.files);
    const { _id, name, color, supplier, price, description, category, active, imageGlobal } = req.body;

    try {
        if (!_id) return res.status(400).json({ error: 'Missing ID' });

        if (name && typeof name !== 'string') {
            return res.status(400).send({ error: 'Incorrect DataType name' });
        };

        // // Manejo de color opcional
        // let parsedColor = [];
        // if (color) {
        //     try {
        //         parsedColor = JSON.parse(color);
        //         if (!Array.isArray(parsedColor)) {
        //             return res.status(400).send({ error: 'Incorrect DataType color' });
        //         }
        //     } catch (e) {
        //         return res.status(400).send({ error: 'Invalid JSON format for color' });
        //     }
        // }

        // // Manejo de supplier opcional
        // let parsedSupplier = {};
        // if (supplier) {
        //     try {
        //         parsedSupplier = JSON.parse(supplier);
        //         if (typeof parsedSupplier !== 'object') {
        //             return res.status(400).send({ error: 'Incorrect DataType supplier' });
        //         }
        //     } catch (e) {
        //         return res.status(400).send({ error: 'Invalid JSON format for supplier' });
        //     }
        // }

        // Otros campos opcionales
        if (price && typeof Number(price) !== 'number') {
            return res.status(400).send({ error: 'Incorrect DataType price' });
        }
        if (description && typeof description !== 'string') {
            return res.status(400).send({ error: 'Incorrect DataType description' });
        }
        // let parsedCategory = [];
        // if (category) {
        //     try {
        //         parsedCategory = JSON.parse(category);
        //         if (!Array.isArray(parsedCategory)) {
        //             return res.status(400).send({ error: 'Incorrect DataType category' });
        //         }
        //     } catch (e) {
        //         return res.status(400).send({ error: 'Invalid JSON format for category' });
        //     }
        // }
        // let isActive = false;
        // if (active) {
        //     try {
        //         isActive = JSON.parse(active);
        //         if (typeof isActive !== 'boolean') {
        //             return res.status(400).send({ error: 'Incorrect DataType active' });
        //         }
        //     } catch (e) {
        //         return res.status(400).send({ error: 'Invalid JSON format for active' });
        //     }
        // }

        // // Procesar las imágenes subidas
        // const imagePaths = req.files['images'] ? req.files['images'].map(file => file.path) : [];
        // // console.log('Processed image paths:', imagePaths);
        // const imageGlobalPath = req.files['imageGlobal'] ? req.files['imageGlobal'][0].path : null;
        // // console.log('Processed global image path:', imageGlobalPath);

        // parsedColor.forEach((c, index) => {
        //     if (imagePaths[index]) {
        //         c.image = imagePaths[index];
        //     }
        // });

        // const productUpdate = await putProductCtrl(
        //     _id, 
        //     name, 
        //     parsedColor, 
        //     parsedSupplier, 
        //     Number(price), 
        //     parsedCategory, 
        //     description, 
        //     active,
        //     imageGlobalPath
        // );

        const productUpdate = await putProductCtrl(
            _id, 
            name, 
            color, 
            supplier, 
            price, 
            category, 
            description, 
            active,
            imageGlobal
        );

        return res.status(200).send('Product has been updated');

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = putProductHandler;

// const putProductHandler = async (req, res) => {
//     try {
//         const { _id, name, color, supplier, price, description, category, active } = req.body;

//         if (!_id) return res.status(400).json({ error: 'Missing ID' });

//         if (name && typeof name !== 'string') {
//             return res.status(400).send({ error: 'Incorrect DataType name' });
//         };
//         if (color && !Array.isArray(JSON.parse(color))) {
//             return res.status(400).send({ error: 'Incorrect DataType color' });
//         };
//         if (supplier && typeof JSON.parse(supplier) !== 'object') {
//             return res.status(400).send({ error: 'Incorrect DataType supplier' });
//         };

//         if (price && typeof Number(price) !== 'number') {
//             return res.status(400).send({ error: 'Incorrect DataType price' });
//         };
//         if (description && typeof description !== 'string') {
//             return res.status(400).send({ error: 'Incorrect DataType description' });
//         };
//         if (category && !Array.isArray(JSON.parse(category))) {
//             return res.status(400).send({ error: 'Incorrect DataType category' });
//         };
//         if (active && typeof JSON.parse(active) !== 'boolean') {
//             return res.status(400).send({ error: 'Incorrect DataType active' });
//         };

//         // Procesar las imágenes subidas
//         const imagePaths = req.files['images'] ? req.files['images'].map(file => file.path) : [];
//         const imageGlobalPath = req.files['imageGlobal'] ? req.files['imageGlobal'][0].path : null;

//         const parsedColor = JSON.parse(color);
//         parsedColor.forEach((c, index) => {
//             if (imagePaths[index]) {
//                 c.image = imagePaths[index];
//             }
//         });

//         const productUpdate = await putProductCtrl(
//             _id, 
//             name, 
//             parsedColor, 
//             JSON.parse(supplier), 
//             Number(price), 
//             JSON.parse(category), 
//             description, 
//             JSON.parse(active),
//             imageGlobalPath
//         );

//         return res.status(200).send('Product has been updated');

//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };