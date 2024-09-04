require('../../db.js');
const Client = require('../../collections/Client.js');

const putClientStatusCtrl = async (_id) => {

    const client = await Client.findById(_id);
    const newStatus = !client.active;

    const updatedStatus = await Client.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putClientStatusCtrl;