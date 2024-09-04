require('../../db.js');
const Client = require('../../collections/Client.js');

const getClientByDniCtrl = async (dni) => {

  const regex = new RegExp(`.*${dni}.*`, 'i');

  if (dni) {
    const clients = await Client.find({ dni: regex })
    .populate({
        path: 'purchases'
    });
    return clients;
  };
};

module.exports = getClientByDniCtrl;    