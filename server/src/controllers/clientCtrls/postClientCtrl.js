const Client = require('../../collections/Client.js');

const postClientCtrl = async (name, lastname, email, phone, shopping) => {
    const newClient = {
        name,
        lastname,
        email,
        phone,
        shopping
    };

    const clientCreated = await Client.create(newClient);
    return clientCreated;
};

module.exports = postClientCtrl;