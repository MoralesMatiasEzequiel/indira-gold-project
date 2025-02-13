require('../../db.js');
const Debt = require('../../collections/Debt.js');
const Client = require('../../collections/Client.js');

const getDebtByClientNameCtrl = async (clientName) => {
    const normalize = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    if (clientName) {
        const normalizedClientName = normalize(clientName);
        const regex = new RegExp(`.*${normalizedClientName}.*`, 'i'); // Insensible a mayúsculas y minúsculas

        const clients = await Client.find();

        // Filtrar clientes que coincidan con el nombre o el apellido
        const filteredClients = clients.filter(client =>
            normalize(client.name).match(regex) || normalize(client.lastname).match(regex)
        );

        const clientIds = filteredClients?.map(client => client._id);

        const debts = await Debt.find({
            client: { $in: clientIds },
            active: true
        })
        .populate('client')
        .populate('sale');

        return debts;
    }
}

module.exports = getDebtByClientNameCtrl;
