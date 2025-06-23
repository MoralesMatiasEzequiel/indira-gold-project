require('../../db.js');
const Client = require('../../collections/Client.js');

const getClientByFullNameCtrl = async (fullName) => {

  const normalize = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  if(fullName){
    const normalizedFullName = normalize(fullName);
    const regex = new RegExp(`.*${normalizedFullName}.*`, 'i');
  
    const clients = await Client.find().populate({
      path: 'purchases'
    });

    const filteredClients = clients.filter(client => 
      normalize(client.name).match(regex) || 
      (client.lastname && normalize(client.lastname).match(regex))
    );
  
    return filteredClients;
  }

  
};

module.exports = getClientByFullNameCtrl;