require('../../db.js');
const Client = require('../../collections/Client.js');

const putClientCtrl = async (_id, dni, name, lastname, email, phone, purchases) => {
    const update = {};

    if (dni !== null && dni !== false) {
        update.dni = dni;
    }

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

    if (purchases && purchases.length > 0) {
        update.$push = { purchases: { $each: purchases } };
    }

    const updated = await Client.updateOne({ _id }, update, { new: true });

    return updated;
};

module.exports = putClientCtrl;