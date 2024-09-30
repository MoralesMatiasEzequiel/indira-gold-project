require('../../db.js');
const Client = require('../../collections/Client.js');

const putRemovePurchasesCtrl = async (_id, purchasesToRemove) => {
    try {

        const client = await Client.findById(_id);
        if (!client) {
            throw new Error('Client not found');
        }

        client.purchases = client.purchases.filter(purchase => {
            return !purchasesToRemove.some(item =>
                item.productId.toString() === purchase.productId.toString() &&
                item.colorId.toString() === purchase.colorId.toString() &&
                item.sizeId.toString() === purchase.sizeId.toString()
            );
        });

        await client.save();

        return "Ok";
    } catch (error) {
        throw new Error(`Error removing purchases: ${error.message}`);
    }
};

module.exports = putRemovePurchasesCtrl;
