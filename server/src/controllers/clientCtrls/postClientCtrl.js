const Client = require('../../collections/Client.js');

const postClientCtrl = async (name, lastname, email, phone) => {
    const newClient = {
        name,
        lastname,
        email,
        phone
    };

    const clientCreated = await Client.create(newClient);
    return clientCreated;
};

module.exports = postClientCtrl;