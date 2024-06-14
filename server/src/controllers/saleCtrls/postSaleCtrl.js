require('../../db.js');
const Sale = require('../../collections/Sale.js');

const postSaleCtrl = async (totalAmount, orderNumber, sale, client, product) => {
  
    const newSale = {
        totalAmount,
        orderNumber,
        sale, 
        client, 
        product
    }

    const saleCreated = await Sale.create(newSale);

    return saleCreated;
};

module.exports = postSaleCtrl;