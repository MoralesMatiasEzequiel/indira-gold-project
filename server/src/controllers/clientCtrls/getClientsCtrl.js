require('../../db.js');
const Client = require('../../collections/Client.js');

const getClientsCtrl = async () => {
    const clients = await Client.find().populate({
        path: 'shopping'
    });
    
    return clients;
};

module.exports = getClientsCtrl;