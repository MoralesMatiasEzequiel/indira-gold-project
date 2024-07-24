require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getSalesOnlineCtrl = async () => {
    
    const salesOnline = await Sale.find({soldAt: "Online", active: true})
    .populate({
        path: 'client'
    })
    .populate({
        path: 'products'
    });;

    return salesOnline;
}

module.exports = getSalesOnlineCtrl;