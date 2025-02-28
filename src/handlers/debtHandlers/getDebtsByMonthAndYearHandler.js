const getDebtsByMonthAndYearCtrl = require('../../controllers/debtCtrls/getDebtsByMonthAndYearCtrl.js');

const getDebtsByMonthAndYearHandler = async (req, res) => {

    const { month, year } = req.query;

    try {
        const debtsByMonthAndYear = await getDebtsByMonthAndYearCtrl(month, year);

        if (!debtsByMonthAndYear) {
            return res.status(404).send(`No debts found for month ${month} and year ${year}`);
        }

        res.status(200).send(debtsByMonthAndYear);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getDebtsByMonthAndYearHandler;