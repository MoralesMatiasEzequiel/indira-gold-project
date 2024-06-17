require('../../db.js');
const Client = require('../../collections/Client.js');

const deleteClientCtrl = async (_id) => {
    const deleted = await Client.deleteOne({_id})
    
    return deleted;
}

module.exports = deleteClientCtrl;