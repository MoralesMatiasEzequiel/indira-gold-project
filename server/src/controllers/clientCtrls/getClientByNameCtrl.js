require('../../db.js');
const Client = require('../../collections/Client.js');

const getClientByNameCtrl = async (name) => {

  const normalize = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  if(name){
    const normalizedName = normalize(name);
    const regex = new RegExp(`.*${normalizedName}.*`, 'i');
  
    const clients = await Client.find().populate({
      path: 'purchases'
    });

    const filteredClients = clients.filter(client => normalize(client.name).match(regex));
  
    return filteredClients;
  }

  
};

module.exports = getClientByNameCtrl;    


// const getClientByNameCtrl = async (name) => {

//   const regex = new RegExp(`.*${name}.*`, 'i');

//   if (name) {
//     const clients = await Client.find({
//         $or: [
//             { name: regex },
//             { lastname: regex }
//         ]
//     }).populate({
//         path: 'shopping'
//     });
//     return clients;
//   };
// };