const getYearsOfSalesCtrl = require('../../controllers/saleCtrls/getYearsOfSalesCtrl.js');

const getYearsOfSalesHandler = async (req, res) => {

    try {
        const yearsOfSales = await getYearsOfSalesCtrl();

        res.status(200).send(yearsOfSales);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getYearsOfSalesHandler;