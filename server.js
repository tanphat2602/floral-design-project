const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Cấu hình thư mục chứa file tĩnh (HTML, CSS, Images)
app.use(express.static('public'));

// Route chính trả về giao diện
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Máy A đang chạy server tại http://localhost:${PORT}`);
});