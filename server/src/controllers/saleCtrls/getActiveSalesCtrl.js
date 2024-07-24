require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getActiveSalesCtrl = async () => {

    const activeSales = await Sale.find({ active: true });

    return activeSales;

}

module.exports = getActiveSalesCtrl;