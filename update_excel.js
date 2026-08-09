const ExcelJS = require('exceljs');
const path = require('path');

async function update() {
    const filePath = path.join(__dirname, 'test-data', 'Bản sao của Test Management Template.xls.xlsx');
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    
    const sheet = workbook.getWorksheet('Test Cases');
    
    // Find last ID
    let lastRowIndex = 1;
    let lastId = null;
    let lastIdNum = 0;
    let prefix = 'D_';

    sheet.eachRow((row, rowNumber) => {
        const val = row.getCell(1).text || row.getCell(1).value;
        if (typeof val === 'string' && val.match(/^[A-Z]+_\d+$/)) {
            lastId = val;
            lastRowIndex = rowNumber;
            const parts = val.split('_');
            prefix = parts[0] + '_';
            lastIdNum = parseInt(parts[1], 10);
        }
    });

    console.log("Last ID found:", lastId, "at row", lastRowIndex);
    
    const newCases = [
        {
            feature: "News Section",
            subFeature: "Tin tức - Điện ảnh 24h",
            testCase: "Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Điện ảnh 24h",
            preconditions: "Đã đăng nhập vào hệ thống CyberSoft",
            steps: "1. Đăng nhập.\n2. Cuộn màn hình tới khu vực Tin Tức.\n3. Bấm nút 'XEM THÊM'.\n4. Lấy tất cả thuộc tính src của các thẻ img.\n5. Bắn Request kiểm tra HTTP.",
            expected: "Tất cả các link hình ảnh phải tồn tại (trả về status HTTP 2xx). Không có ảnh nào bị chết link (ENOTFOUND) hoặc lỗi 404/500.",
            status: "Automated",
            results: "Failed",
            note: "MUI_01"
        },
        {
            feature: "News Section",
            subFeature: "Tin tức - Review",
            testCase: "Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Review",
            preconditions: "Đã đăng nhập vào hệ thống CyberSoft",
            steps: "1. Đăng nhập.\n2. Bấm sang tab 'Review'.\n3. Bấm nút 'XEM THÊM'.\n4. Lấy thuộc tính src và kiểm tra HTTP.",
            expected: "Tương tự, các ảnh tải thành công, không vỡ.",
            status: "Automated",
            results: "Failed",
            note: "MUI_02"
        },
        {
            feature: "News Section",
            subFeature: "Tin tức - Khuyến Mãi",
            testCase: "Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Khuyến Mãi",
            preconditions: "Đã đăng nhập vào hệ thống CyberSoft",
            steps: "1. Đăng nhập.\n2. Bấm sang tab 'Khuyến Mãi'.\n3. Bấm nút 'XEM THÊM'.\n4. Lấy thuộc tính src và kiểm tra HTTP.",
            expected: "Tương tự, tất cả ảnh khuyến mãi không bị chết link.",
            status: "Automated",
            results: "Failed",
            note: "MUI_03"
        }
    ];

    let currentRow = lastRowIndex + 1;
    
    // Insert new feature row
    const featureRow = sheet.getRow(currentRow++);
    featureRow.getCell(2).value = "2. News Section (MUI_01 - MUI_03)";
    featureRow.getCell(2).font = { bold: true };
    
    for (const tc of newCases) {
        lastIdNum++;
        const idStr = prefix + lastIdNum.toString().padStart(2, '0');
        console.log("Writing ID:", idStr);
        
        const row = sheet.getRow(currentRow++);
        row.values = [
            idStr,
            tc.feature,
            tc.subFeature,
            null,
            tc.testCase,
            tc.preconditions,
            tc.steps,
            tc.expected,
            tc.status,
            tc.results,
            null,
            tc.note
        ];
        
        // Copy styling from the last valid row
        const sourceRow = sheet.getRow(lastRowIndex);
        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
            const sourceCell = sourceRow.getCell(colNumber);
            if (sourceCell) {
                cell.style = sourceCell.style;
                // exceljs borders can be tricky but this copies fonts/alignment/wrapText
            }
        });
    }

    await workbook.xlsx.writeFile(filePath);
    console.log("File updated successfully.");
}

update().catch(console.error);
