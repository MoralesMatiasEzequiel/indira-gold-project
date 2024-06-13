require('../../db.js');
const Client = require('../../collections/Client.js');

const putClientCtrl = async (_id, name, lastname, email, phone, paymentMethod, sale, active) => {
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

    if (paymentMethod !== null && paymentMethod !== false) {
        update.paymentMethod = paymentMethod;
    }

    if (sale !== null && sale !== false) {
        update.sale = sale;
    }

    if (active !== null && active !== false) {
        update.active = active;
    }

    const updated = await Client.findOneAndUpdate({ _id }, { $set: { active } }, { new: true });

    return updated;
};

module.exports = putClientCtrl;