require('../../db.js');
const Debt = require('../../collections/Debt.js');

const getDebtsCtrl = async () => {
    const debts = await Debt.find();

    return debts;
};

module.exports = getDebtsCtrl;