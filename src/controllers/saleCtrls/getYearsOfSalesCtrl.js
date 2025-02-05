require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getYearsOfSalesCtrl = async () => {

    const years = new Set();  // Usamos un Set para evitar duplicados
    const sales = await Sale.find(); 

    sales.forEach(sale => {
        const year = new Date(sale.date).getFullYear(); 
        years.add(year);  // Añadimos el año al Set
    });

    // Convertimos el Set en un array y lo retornamos
    return Array.from(years); 
};

module.exports = getYearsOfSalesCtrl;