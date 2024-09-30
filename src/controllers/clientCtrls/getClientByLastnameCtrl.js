require('../../db.js');
const Client = require('../../collections/Client.js');

const getClientByLastnameCtrl = async (lastname) => {

  const normalize = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Normaliza y elimina acentos
  };

  if (lastname) {
    const normalizedLastname = normalize(lastname);
    const regex = new RegExp(`.*${normalizedLastname}.*`, 'i');

    const clients = await Client.find().populate({
        path: 'purchases'
    });

    const filteredClients = clients.filter(client => normalize(client.lastname).match(regex));
    
    return filteredClients;
  };
};

module.exports = getClientByLastnameCtrl;