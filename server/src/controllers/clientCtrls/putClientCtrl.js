require('../../db.js');
const Client = require('../../collections/Client.js');

const putClientCtrl = async (_id, name, lastname, email, phone, purchases) => {
    const update = {};

    if (name !== null && name !== false) {
        update.name = name;
    }

    if (lastname !== null && lastname !== false) {
        update.lastname = lastname;
    }

    if (email !== null && email !== false) {
        update.email = email;
    }

    if (phone !== null && phone !== false) {
        update.phone = phone;
    }

    if (purchases !== null && purchases !== false) {
        update.purchases = purchases;
    }

    // const updated = await Client.findOneAndUpdate({ _id }, { $set: { active } }, { new: true });
    const updated = await Client.updateOne({_id}, {$set: {name, lastname, email, phone, purchases}});

    return updated;
};

module.exports = putClientCtrl;