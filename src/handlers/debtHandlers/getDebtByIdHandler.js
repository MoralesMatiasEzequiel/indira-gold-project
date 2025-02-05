const getDebtByIdCtrl = require('../../controllers/debtCtrls/getDebtByIdCtrl.js');

const getDebtByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const debt = await getDebtByIdCtrl(id);

        if (!debt) {
            return res.status(404).send(`No debt found with ID: "${id}"`);
        }

        res.status(200).send(debt);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getDebtByIdHandler;