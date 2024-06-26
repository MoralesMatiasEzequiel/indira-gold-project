require('../../db.js');
const Client = require('../../collections/Client.js');

const getClientByNameCtrl = async (name) => {

  const regex = new RegExp(`.*${name}.*`, 'i');

  if (name) {
    const clients = await Client.find({
        $or: [
            { name: regex },
            { lastname: regex }
        ]
    }).populate({
        path: 'shopping'
    });
    return clients;
  };
};

module.exports = getClientByNameCtrl;    