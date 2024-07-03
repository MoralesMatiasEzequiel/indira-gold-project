require('../../db.js');
const Client = require('../../collections/Client.js');

const getClientByLastnameCtrl = async (lastname) => {

  const regex = new RegExp(`.*${lastname}.*`, 'i');

  if (lastname) {
    const clients = await Client.find({ lastname: regex })
    .populate({
        path: 'shopping'
    });
    return clients;
  };
};

module.exports = getClientByLastnameCtrl;    