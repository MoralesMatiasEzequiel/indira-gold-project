const getBalanceSalesByMonthAndYearCtrl = require('../../controllers/saleCtrls/getBalanceSalesByMonthAndYearCtrl.js');

const getBalanceSalesByMonthAndYearHandler = async (req, res) => {

    const { month, year } = req.query;

    try {
        const balanceSalesByMonthAndYear = await getBalanceSalesByMonthAndYearCtrl(month, year);

        if (!balanceSalesByMonthAndYear) {
            return res.status(404).send(`No balance sales found for month ${month} and year ${year}`);
        }

        res.status(200).send(balanceSalesByMonthAndYear);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getBalanceSalesByMonthAndYearHandler;