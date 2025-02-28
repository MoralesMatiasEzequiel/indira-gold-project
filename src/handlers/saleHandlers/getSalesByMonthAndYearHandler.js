const getSalesByMonthAndYearCtrl = require('../../controllers/saleCtrls/getSalesByMonthAndYearCtrl.js');

const getSalesByMonthAndYearHandler = async (req, res) => {

    const { month, year } = req.query;

    try {
        const salesByMonthAndYear = await getSalesByMonthAndYearCtrl(month, year);

        if (!salesByMonthAndYear) {
            return res.status(404).send(`No sales found for month ${month} and year ${year}`);
        }

        res.status(200).send(salesByMonthAndYear);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getSalesByMonthAndYearHandler;