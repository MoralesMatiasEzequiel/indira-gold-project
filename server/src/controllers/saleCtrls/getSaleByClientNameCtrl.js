require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Client = require('../../collections/Client.js');

const getSaleByClientNameCtrl = async (clientName) => {

    const regex = new RegExp(clientName, 'i');
    
    if (clientName) {
        const clients = await Client.find({
            $or: [
                { name: regex },
                { lastname: regex }
            ]
        });

        //Obtengo los IDs de los clientes encontrados:
        const clientIds = clients.map(client => client._id);

        const sales = await Sale.find({
            client: { $in: clientIds },
            active: true
        })
        .populate('client')
        .populate('products');
        return sales;
    }
}

module.exports = getSaleByClientNameCtrl;