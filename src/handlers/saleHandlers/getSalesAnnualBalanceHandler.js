const getSalesAnnualBalanceCtrl = require('../../controllers/saleCtrls/getSalesAnnualBalanceCtrl.js');

const getSalesAnnualBalanceHandler = async (req, res) => {

    const { year } = req.query;

    try {
        const annualBalance = await getSalesAnnualBalanceCtrl(year);
        
        res.status(200).send(annualBalance);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getSalesAnnualBalanceHandler;