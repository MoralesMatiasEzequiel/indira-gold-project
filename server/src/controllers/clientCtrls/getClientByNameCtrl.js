require('../../db.js');
const Client = require('../../collections/Client.js');

const getClientByNameCtrl = async (name) => {
  if (name) {
    const clientByName = await Client.find({ name: { $regex: name, $options: 'i' } });
    return clientByName;
  }
};

module.exports = getClientByNameCtrl;    