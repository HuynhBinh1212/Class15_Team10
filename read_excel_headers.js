const XLSX = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, 'test-data', 'Bản sao của Test Management Template.xls.xlsx');
try {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets['Test Cases'];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    
    // Print rows that have data to see columns and last IDs
    const validRows = data.filter(row => row && row.length > 0 && row.some(cell => cell !== undefined && cell !== null && cell !== ''));
    
    console.log("First 5 valid rows:");
    console.log(JSON.stringify(validRows.slice(0, 5), null, 2));

    console.log("Last 5 valid rows:");
    console.log(JSON.stringify(validRows.slice(-5), null, 2));

} catch (e) {
    console.error(e);
}
