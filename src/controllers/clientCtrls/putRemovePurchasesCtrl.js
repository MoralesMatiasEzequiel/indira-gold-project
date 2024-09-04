require('../../db.js');
const Client = require('../../collections/Client.js');

const putRemovePurchasesCtrl = async (_id, purchasesToRemove) => {
    try {
        // Buscar el cliente por su ID
        const client = await Client.findById(_id);
        if (!client) {
            throw new Error('Client not found');
        }

        // Filtrar las compras para eliminar las que coincidan con purchasesToRemove
        client.purchases = client.purchases.filter(purchase => {
            return !purchasesToRemove.some(item =>
                item.productId.toString() === purchase.productId.toString() &&
                item.colorId.toString() === purchase.colorId.toString() &&
                item.sizeId.toString() === purchase.sizeId.toString()
            );
        });

        // Guardar los cambios
        await client.save();

        return "Ok";
    } catch (error) {
        throw new Error(`Error removing purchases: ${error.message}`);
    }
};

module.exports = putRemovePurchasesCtrl;
