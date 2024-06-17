require('../../db.js');
const Client = require('../../collections/Client.js');

const getClientByEmailCtrl = async (email) => {
  if (email) {
    const clientByEmail = await Client.findOne({ email: email });
    // console.log(email);
    return clientByEmail;
  }
};

module.exports = getClientByEmailCtrl;    