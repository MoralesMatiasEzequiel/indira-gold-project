require('../../db.js');
const Sale = require('../../collections/Sale.js');

const postSaleCtrl = async (totalAmount, orderNumber, sale, client, product) => {
  
    const sale = {
        totalAmount,
        orderNumber,
        sale, 
        client, 
        product
    }

    const newSale = await Sale.create(sale);

    return newSale;
};

module.exports = postSaleCtrl;