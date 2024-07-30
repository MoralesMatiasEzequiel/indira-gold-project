require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Product = require('../../collections/Product.js');


const postSaleCtrl = async (paymentMethod, soldAt, discount, products, client, paymentFee) => {

     // Obtengo los productos desde la base de datos usando sus IDs
     const productsFromDB = await Product.find({ '_id': { $in: products } });
 
     // Calculo el precio total sumando los precios de los productos considerando las repeticiones
     const subTotal = products.reduce((total, productId) => {
         const productFromDB = productsFromDB.find(p => p._id.toString() === productId);
         return total + (productFromDB ? productFromDB.price : 0);
     }, 0);

    //Acá declaro la variable totalPrice por fuera del if y la igual al subtotal en el caso que no haya ningún descuento
    //Lo mismo con discountApplied
    let totalPrice = subTotal;
    let discountApplied = 0;
     

    //Acá envolví toda la lógica de descuento aplicado solo en caso de que haya descuento

    if(discount){
        // Calculo el descuento aplicado
        discountApplied = (subTotal * discount) / 100;

        // Calculo el precio total después de aplicar el descuento
        totalPrice = subTotal - discountApplied;
    }

    //Acá declaro la variable totalWithFee por fuera del if y la igual al totalPrice en el caso que no haya ninguna comisión de MP
    //Lo mismo con paymentFeeApplied

    let totalWithFee = totalPrice;
    let paymentFeeApplied = 0;

    //Acá envolví toda la lógica de comisión aplicado solo en caso de que haya comisión

    if(paymentFee){
        // Calculo la comisión aplicada
        paymentFeeApplied = (totalPrice * paymentFee) / 100;

        // Calculo el precio con comisión
        totalWithFee = totalPrice - paymentFeeApplied;
    }

    const newSale = {
        paymentMethod,
        soldAt,
        discount,
        products,
        subTotal,
        discountApplied,
        totalPrice,
        paymentFee,
        paymentFeeApplied,
        totalWithFee,
        client: client || null //acá lo manda en null si client viene vacío
    }

    const saleCreated = await Sale.create(newSale);

    return saleCreated;
};

module.exports = postSaleCtrl;


// Obtengo los productos desde la base de datos usando sus IDs
// const productsID = await Product.find({ '_id': { $in: products } });

// Calculo el precio total sumando los precios de los productos
// const subTotal = productsID.reduce((total, product) => total + product.price, 0);