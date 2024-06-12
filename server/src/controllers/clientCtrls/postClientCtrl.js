require('../../db.js');
const Client = require('../../collections/Client.js');

const postClientCtrl = async (name, lastname, email, phone, paymentMethod, sale) => {
    const client = new Client({
        name,
        lastname,
        email,
        phone,
        paymentMethod,
        sale
    })

    const newClient = await Client.create(client);

    return newClient;
};

module.exports = postClientCtrl;