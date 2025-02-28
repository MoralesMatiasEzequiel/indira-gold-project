require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getSalesByMonthAndYearCtrl = async (month, year) => {
    
    const filter = { active: true };

    if (year && month) {
        // Convertimos los valores a enteros
        const parsedYear = parseInt(year);
        const parsedMonth = parseInt(month);

        const startOfMonth = new Date(parsedYear, parsedMonth, 1);
        const endOfMonth = new Date(parsedYear, parsedMonth + 1, 1); // El primer día del mes siguiente

        filter.date = { 
            $gte: startOfMonth, 
            $lt: endOfMonth 
        };
    } else if (year) {
        // Filtro solo por año si no hay mes
        const startOfYear = new Date(year, 0, 1);
        const endOfYear = new Date(parseInt(year) + 1, 0, 1);
        filter.date = { $gte: startOfYear, $lt: endOfYear };
    }

    const salesByMonthAndYear = await Sale.find(filter)
        .populate('client')
        .populate('products');

    return salesByMonthAndYear;
};

module.exports = getSalesByMonthAndYearCtrl;