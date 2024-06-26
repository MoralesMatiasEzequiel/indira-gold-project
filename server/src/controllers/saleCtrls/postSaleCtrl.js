require('../../db.js');
const Sale = require('../../collections/Sale.js');

const postSaleCtrl = async (orderNumber, paymentMethod, soldIn, discount, products) => {
  
    const newSale = {
        orderNumber,
        paymentMethod,
        soldIn,
        discount,
        products
    }

    const saleCreated = await Sale.create(newSale);

    return saleCreated;
};

module.exports = postSaleCtrl;