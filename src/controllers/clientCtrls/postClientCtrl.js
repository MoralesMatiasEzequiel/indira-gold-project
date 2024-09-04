const Client = require('../../collections/Client.js');

const postClientCtrl = async (dni, name, lastname, email, phone) => {
    const newClient = {
        dni,
        name,
        lastname,
        email,
        phone
    };

    const clientCreated = await Client.create(newClient);
    return clientCreated;
};

module.exports = postClientCtrl;