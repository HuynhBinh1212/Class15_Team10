const xlsx = require('xlsx');
const fs = require('fs');
const workbook = xlsx.readFile('f:/Class15_Team10/test-data/Bản sao của Test Management Template.xls.xlsx');
if (workbook.SheetNames.includes('Test Cases')) {
    const xlData = xlsx.utils.sheet_to_json(workbook.Sheets['Test Cases']);
    fs.writeFileSync('testcases_utf8.json', JSON.stringify(xlData, null, 2), 'utf-8');
    console.log("Success");
} else {
    console.log("Not found");
}
