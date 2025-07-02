require('../../db.js');
const Sale = require('../../collections/Sale.js');

const putSaleCtrl = async (_id, products, discount, paymentFee, subtotal, shipment) => {

    let newSubTotal = 0;

    // Obtener la venta existente para acceder a los productos anteriores
    const existingSale = await Sale.findById(_id);
    if (!existingSale) {
        throw new Error('Sale not found');
    }

    // Mapear productos anteriores para un fácil acceso
    const previousProducts = existingSale.products.reduce((acc, product) => {
        acc[product.productId] = product.price;
        return acc;
    }, {});

    // Ajustar precios de los productos nuevos basados en los anteriores
    const adjustedProducts = products.map(product => {
        if (previousProducts[product.productId]) {
            return {
                ...product,
                price: previousProducts[product.productId]
            };
        }
        return product; // Si no hay coincidencia, mantenemos el precio original
    });

    let subTotalFromProducts = products.reduce((total, product) => {
        return total + (product.price || 0); // Asegúrate de que cada producto tenga una propiedad price
    }, 0);

    if(subtotal) {
        newSubTotal = subtotal;
        products = adjustedProducts;
    } else {
        newSubTotal = subTotalFromProducts;
    }

    let totalPrice = newSubTotal;
    let discountApplied = 0;

    if (discount) {
        discountApplied = (newSubTotal * discount) / 100;
        totalPrice = newSubTotal - discountApplied;
    }

    let totalWithFee = totalPrice;
    let paymentFeeApplied = 0;

    if (paymentFee) {
        paymentFeeApplied = (totalPrice * paymentFee) / 100;
        totalWithFee = totalPrice - paymentFeeApplied;
    }

    const updated = await Sale.updateOne(
        { _id }, 
        {
            $set: {
                shipment,
                products,
                discount,
                subTotal: newSubTotal,
                discountApplied,
                totalPrice,
                paymentFee,
                paymentFeeApplied,
                totalWithFee
            }
        }
    );
    return updated;
};

module.exports = putSaleCtrl;