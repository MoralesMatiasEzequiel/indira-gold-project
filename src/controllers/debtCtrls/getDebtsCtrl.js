require('../../db.js');
const Debt = require('../../collections/Debt.js');

const getDebtsCtrl = async () => {
    const debts = await Debt.find()
    .populate({
        path: 'client'
    })
    .populate({
        path: 'sale'
    })

    return debts;
};

module.exports = getDebtsCtrl;