require('../../db.js');
const Client = require('../../collections/Client.js');

const postClientCtrl = async (name, lastname, email, telephone, paymentMethod, sale) => {
    const client = new Client({
        name,
        lastname,
        email,
        telephone,
        paymentMethod,
        sale
    })

    const newClient = await Client.create(client);

    return newClient;
};

module.exports = postClientCtrl;