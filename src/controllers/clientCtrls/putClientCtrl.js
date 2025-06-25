require('../../db.js');
const Client = require('../../collections/Client.js');

const putClientCtrl = async (_id, dni, name, lastname, email, phone, addresses, purchases) => {
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

    if (addresses !== null && addresses !== false) {
        update.addresses = addresses;
    }

    // Verifica si `purchases` no es null o false y tiene al menos un ID
    if (purchases && purchases.length > 0) {
        // Usa $push para agregar el ID a purchases sin sobrescribir el array existente
        update.$push = { purchases: { $each: purchases } };
    }

    // Actualiza el cliente en la base de datos
    const updated = await Client.updateOne({ _id }, update, { new: true });

    return updated;
};

module.exports = putClientCtrl;