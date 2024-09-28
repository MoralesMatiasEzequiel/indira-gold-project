const postProductCtrl = require('../../controllers/productCtrls/postProductCtrl.js');

const postProductHandler = async (req, res) => {
    const { name, color, supplier, price, salePrice, category, description, imageGlobal } = req.body;

    try {
        if (!name || !color || !price || !category) {
            return res.status(400).send({ error: 'Missing data' });
        };

        if (typeof name !== 'string') {
            return res.status(400).send({ error: 'Incorrect DataType - name' });
        }

        if (typeof price !== 'number') {
            return res.status(400).send({ error: 'Incorrect DataType - price' });
        }

        if (salePrice && typeof Number(salePrice) !== 'number') {
            return res.status(400).send({ error: 'Incorrect DataType salePrice' });
        }

        if (description && typeof description !== 'string') {
            return res.status(400).send({ error: 'Incorrect DataType description' });
        }

        // Procesar las imágenes subidas
        // const imagePaths = req.files['images'] ? req.files['images'].map(file => file.path) : [];
        // const imageGlobalPath = req.files['imageGlobal'] ? req.files['imageGlobal'][0].path : null;

        // const parsedColor = JSON.parse(color);
        // parsedColor.forEach((c, index) => {
        //     if (imagePaths[index]) {
        //         c.image = imagePaths[index];
        //     }
        // });

        //Este código es para verificar si ya existe el producto creado:
        // let existingProduct = await Product.findOne({ name, active: false });

        // if (existingProduct) {
        //   existingProduct.active = true;
        //   await existingProduct.save();
        //   const _id = existingProduct._id;
        //   await putProductCtrl(_id, name, color, price, category);
        //   return res.status(200).send(`The product ${existingProduct.name} has been reactivated and updated`);
        // }
        
        //const newProduct = await postProductCtrl(name, parsedColor, JSON.parse(supplier), price, JSON.parse(category), description, imageGlobalPath);
        const newProduct = await postProductCtrl(name, color, supplier, price, category, description, imageGlobal);
        res.status(200).send(newProduct);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postProductHandler;

// const postProductHandler = async (req, res) => {
//   const { name, color, price, category, description } = req.body;
//   const images = req.files;

//   try {
//     if (!name || !color || !price || !category) {
//       return res.status(400).send({ error: 'Missing data' });
//     }
//     if (
//       typeof name !== 'string') {
//       return res.status(400).send({ error: 'Incorrect DataType - name' });
//     }
//     if (color && !Array.isArray(JSON.parse(color))) {
//       return res.status(400).send({ error: 'Incorrect DataType - color' });
//     }
    
//     if (typeof price !== 'number') {
//       return res.status(400).send({ error: 'Incorrect DataType - price' });
//     }
//     if (category && !Array.isArray(JSON.parse(category))) {
//       // if (category && !Array.isArray(category)) {
//       return res.status(400).send({ error: 'Incorrect DataType - category' });
//     }

//      // Agregar las rutas de las imágenes a los colores
//      const updatedColors = JSON.parse(color).map((color, index) => {
//       color.image = images[index] ? `/uploads/${images[index].filename}` : color.image;
//       return color;
//     });

//     //Este código es para verificar si ya existe el producto creado:
//     // let existingProduct = await Product.findOne({ name, active: false });

//     // if (existingProduct) {
//     //   existingProduct.active = true;
//     //   await existingProduct.save();
//     //   const _id = existingProduct._id;
//     //   await putProductCtrl(_id, name, color, price, category);
//     //   return res.status(200).send(`The product ${existingProduct.name} has been reactivated and updated`);
//     // }

//     const newProduct = await postProductCtrl(name, updatedColors, price, JSON.parse(category), description);
//     // const newProduct = await postProductCtrl(name, updatedColors, price, category, description);

//     res.status(200).send(newProduct);

//   } catch (error) {
//     //CATCH en caso de haber producto existente:
//     // if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
//     //   return res.status(409).send({ error: 'Product with the same name already exists' });
//     // }

//     return res.status(500).send(error.message);
//   }
// };

// module.exports = postProductHandler;