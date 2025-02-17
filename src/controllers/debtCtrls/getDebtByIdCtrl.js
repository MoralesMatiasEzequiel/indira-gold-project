require('../../db.js');
const Debt = require('../../collections/Debt.js');

const getDebtByIdCtrl = async (_id) => {

    if (_id) {    
        const debtById = await Debt.findOne({_id})
        .populate({
            path: 'client'
        })
        .populate({
            path: 'sale',
            populate: {
                path: 'products', 
                model: 'Product'
            }
        });
        
        return debtById;
    };    
};

module.exports = getDebtByIdCtrl;