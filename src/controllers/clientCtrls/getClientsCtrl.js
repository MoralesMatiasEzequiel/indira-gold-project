require('../../db.js');
const Client = require('../../collections/Client.js');

const getClientsCtrl = async () => {
    const clients = await Client.find();
    
    return clients;
};

module.exports = getClientsCtrl;