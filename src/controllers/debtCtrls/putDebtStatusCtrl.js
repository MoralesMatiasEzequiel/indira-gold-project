require('../../db.js');
const Debt = require('../../collections/Debt.js');

const putDebtStatusCtrl = async (_id) => {

    const debt = await Debt.findById(_id);
    const newStatus = !debt.active;

    const updatedStatus = await Debt.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putDebtStatusCtrl;