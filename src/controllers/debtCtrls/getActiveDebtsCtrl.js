require('../../db.js');
const Debt = require('../../collections/Debt.js');

const getActiveDebtsCtrl = async () => {
    const activeDebts = await Debt.find({ active: true, remainingBalance: { $gt: 0 } })
    .populate({
        path: 'client'
    })
    .populate({
        path: 'sale'
    })

    return activeDebts;
};

module.exports = getActiveDebtsCtrl;