const Counter = require('./counterSchema.js');

async function getNextOrderNumber() {
    const counter = await Counter.findOneAndUpdate(
        { name: 'orderNumber' },
        { $inc: { value: 1 } },
        { new: true, upsert: true } // upsert: true creates the document if it does not exist
    );
    return counter.value.toString().padStart(5, '0'); // Fill with leading zeros to make it 5 digits
}

module.exports = getNextOrderNumber;