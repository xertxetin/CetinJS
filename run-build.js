const express = require('express');
const path = require('path');
const opn = require('opn');
const colors = require('colors');
const os = require('os');

const app = express();
const port = process.env.PORT || 3000;

// IP adresini otomatik olarak al
const getIPAddress = () => {
const interfaces = os.networkInterfaces();
for (const dev in interfaces) {
const iface = interfaces[dev].filter((details) => details.family === 'IPv4' && !details.internal);
if (iface.length > 0) return iface[0].address;
}
return 'localhost';
};

const ipAddress = getIPAddress();


app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
console.log(`Server is running on http://${ipAddress}:${port}`.green);
opn(`http://${ipAddress}:${port}`); // Tarayıcıyı aç
});