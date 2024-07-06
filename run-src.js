const express = require('express');
const fs = require('fs');
const path = require('path');
const opn = require('opn');
const colors = require('colors');
const os = require('os');

const app = express();
const port = process.env.PORT || 3000;

function goServerLaunch(){
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


app.use(express.static(path.join(__dirname, 'src')));

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
console.log(`Server is running on http://${ipAddress}:${port}`.green);
opn(`http://${ipAddress}:${port}`); // Tarayıcıyı aç
});
}


// Index.html dosyasının yolu
const indexPath = path.join(__dirname, 'src/index.html');

// JS dosyalarının bulunduğu klasörün yolu
const pagesFolderPath = path.join(__dirname, 'src/page');

// JS dosyalarını index.html'e ekleyen fonksiyon
function addJsFilesToHtml() {
// JS dosyalarının bulunduğu klasördeki tüm klasörleri al
const pageFolders = fs.readdirSync(pagesFolderPath);

// Index.html dosyasını oku
let htmlContent = fs.readFileSync(indexPath, 'utf-8');

// Temizleme işlemi: Mevcut eklemeleri sil
htmlContent = htmlContent.replace(/<!-- ADD PAGE START \/ Do not touch -->(.|\n)*<!-- ADD PAGE END \/ Do not touch -->/g, '<!-- ADD PAGE START / Do not touch -->\n<!-- ADD PAGE END / Do not touch -->');

// Her bir klasördeki JS dosyalarını index.html'e ekle
pageFolders.forEach(pageFolder => {
const pageFolderPath = path.join(pagesFolderPath, pageFolder);
const jsFiles = fs.readdirSync(pageFolderPath).filter(file => file.endsWith('.js'));

jsFiles.forEach(jsFile => {
const scriptTag = `<script src="./page/${pageFolder}/${jsFile}"></script>`;
// Eğer scriptTag zaten ekli değilse, ekleyin
if (htmlContent.indexOf(scriptTag) === -1) {
//htmlContent = htmlContent.replace('<!-- ADD PAGE START / Do not touch -->', `<!-- ADD PAGE END / Do not touch -->\n${scriptTag}`);
htmlContent = htmlContent.replace('<!-- ADD PAGE START / Do not touch -->', `<!-- ADD PAGE START / Do not touch -->\n${scriptTag}`);
console.log(`Page JS Added Successfully: ./page/${pageFolder}/${jsFile} - Success`.green);
}
});
});

// Yeniden düzenlenmiş HTML'i kaydet
fs.writeFileSync(indexPath, htmlContent, 'utf-8');

console.log('HTML Packaged. JS Page Added'.yellow);

goServerLaunch();
}

// Fonksiyonu çağır
addJsFilesToHtml();