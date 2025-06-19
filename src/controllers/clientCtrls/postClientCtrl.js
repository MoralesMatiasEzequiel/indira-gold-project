const Client = require('../../collections/Client.js');

const postClientCtrl = async (dni, name, lastname, email, phone, addresses) => {

    const clientFound = await Client.findOne({ dni });

    if (clientFound) {
        throw new Error('Ya existe un cliente registrado con este DNI');
    }

    const newClient = {
        dni,
        name,
        lastname,
        email,
        phone,
        addresses
    };

    const clientCreated = await Client.create(newClient);
    return clientCreated;
};

module.exports = postClientCtrl;