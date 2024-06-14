require('../../db.js');
const Client = require('../../collections/Client.js');

const postClientCtrl = async (name, lastname, email, phone, paymentMethod, sale) => {
   
    const newClient = new Client({
        name,
        lastname,
        email,
        phone,
        paymentMethod,
        sale
    })

    const clientCreated = await Client.create(newClient);

    return clientCreated;
};

module.exports = postClientCtrl;