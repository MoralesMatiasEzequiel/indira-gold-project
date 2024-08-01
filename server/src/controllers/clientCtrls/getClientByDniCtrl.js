require('../../db.js');
const Client = require('../../collections/Client.js');

const getClientByDniCtrl = async (dni) => {
  if (dni) {
    const clientByDni = await Client.findOne({ dni: dni }).populate({
      path: 'purchases'
  })
    return clientByDni;
  }
};

module.exports = getClientByDniCtrl;    