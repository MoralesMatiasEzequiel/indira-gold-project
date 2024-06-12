require('../../db.js');
const Client = require('../../collections/Client.js');

const getClientByIdCtrl = async (id) => {
  if (id) {
    const clientById = await Client.findOne({ _id: id });
    return clientById;
  }
};

module.exports = getClientByIdCtrl;   