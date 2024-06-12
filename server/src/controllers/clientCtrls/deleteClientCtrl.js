require('../../db.js');
const Client = require('../../collections/Client.js');

const deleteClientCtrl = async (id) => {
    const deleted = await Client.deleteOne({id})
    
    return deleted;
}

module.exports = deleteClientCtrl;