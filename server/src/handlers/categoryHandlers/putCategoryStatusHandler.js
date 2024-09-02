const putCategoryStatusCtrl = require('../../controllers/categoryCtrls/putCategoryStatusCtrl.js');

const putCategoryStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const categoryUpdate = await putCategoryStatusCtrl(id)
    
      return res.status(200).send(`The category changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putCategoryStatusHandler;