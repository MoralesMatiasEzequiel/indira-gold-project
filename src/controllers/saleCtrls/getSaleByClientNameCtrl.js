require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Client = require('../../collections/Client.js');

const getSaleByClientNameCtrl = async (clientName) => {
    const normalize = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    if (clientName) {
        const normalizedClientName = normalize(clientName);
        const regex = new RegExp(`.*${normalizedClientName}.*`, 'i');

        const clients = await Client.find().populate({
            path: 'purchases'
        });

        const filteredClients = clients.filter(client =>
            normalize(client.name).match(regex) || normalize(client.lastname).match(regex)
        );

        const clientIds = filteredClients.map(client => client._id);

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
