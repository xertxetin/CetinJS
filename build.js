const fs = require('fs');
const path = require('path');
const minify = require('html-minifier').minify;
const UglifyJS = require('uglify-js');
const JavaScriptObfuscator = require('javascript-obfuscator');
const CleanCSS = require('clean-css');
const colors = require('colors');
const spinner = require('simple-spinner');


const srcDir = 'src'; // Kaynak klasörü
const buildDir = 'build'; // Çıktı klasörü
const androidAssetsDir = 'android\\app\\src\\main\\assets'; // Android assets klasörü

//spinner.start('Loading...');
console.log('Welcome Cetin.JS Builder'.bgMagenta); 
console.log('Please Be Patient, The Process May Take Some Time.'.bgMagenta);  
console.log('');

async function startedFunc() {
let successCount = 0;
let errorCount = 0;
let allCount = 0;



//html modüller sayfaları ekle
function modulerHTMLJS(){
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

jsFiles.forEach(jsFile => { allCount++;
const scriptTag = `<script src="./page/${pageFolder}/${jsFile}"></script>`;
// Eğer scriptTag zaten ekli değilse, ekleyin
if (htmlContent.indexOf(scriptTag) === -1) {
successCount++;
console.log(`Page JS Added Successfully: ./page/${pageFolder}/${jsFile} - Success`.green);
htmlContent = htmlContent.replace('<!-- ADD PAGE START / Do not touch -->', `<!-- ADD PAGE START / Do not touch -->\n${scriptTag}`);
} else {
errorCount++;
console.log(`Could Not Be Created And Not Added: ./page/${pageFolder}/${jsFile} - Fail`.red);
}
});
});

// Yeniden düzenlenmiş HTML'i kaydet
fs.writeFileSync(indexPath, htmlContent, 'utf-8');

console.log('HTML Packaged. JS Page Added'.yellow);
}
addJsFilesToHtml();
}
modulerHTMLJS();



// Fonksiyon: Klasör ve alt dosyaları sıkıştırma
console.log('');
console.log('Build: Compression and Rendering Started'.yellow);
function minifyFilesDir(src, dest) {

// Build klasörünü temizle
if (fs.existsSync(dest)) {
deleteFolderRecursive(dest);
}

// Build klasörünü oluştur
//fs.mkdirSync(dest, { recursive: true });
function createBuildFolder(dest) {
try {
allCount++;
// Build klasörünü oluştur
fs.mkdirSync(dest, { recursive: true });
successCount++;
console.log(`Build folder created successfully at: ${dest} - Success`.green);
} catch (error) {
errorCount++;
console.error((`Error creating build folder: ${error.message || error}`).red);
}
}
createBuildFolder(dest);


const files = fs.readdirSync(src);
files.forEach((file) => {
const srcPath = path.join(src, file);
const destPath = path.join(dest, file);
const stats = fs.statSync(srcPath);

if (stats.isDirectory()) {
minifyFilesDir(srcPath, destPath);
} else {
const extname = path.extname(srcPath).toLowerCase();

if (extname === '.html') {
processHTMLFile(srcPath, destPath); allSpaceDelete(destPath);
} else if (extname === '.js') {
processJSFile(srcPath, destPath); allSpaceDelete(destPath); obfuscateAndWriteToFile(destPath);
} else if (extname === '.css') {
processCSSFile(srcPath, destPath); allSpaceDelete(destPath);
} else {
copyFile(srcPath, destPath);
}
}
});
}

// Fonksiyon: HTML dosyasını sıkıştır
function processHTMLFile(srcPath, destPath) {
allCount++;
try {
const fileContent = fs.readFileSync(srcPath, 'utf8');
const minified = minify(fileContent, { collapseWhitespace: true, removeComments: true });
fs.writeFileSync(destPath, minified, 'utf8');
console.log(`Minified ${srcPath} and saved to ${destPath}`.green);
successCount++;
} catch (error) {
console.error(`Error minifying ${srcPath}: ${error}`.red);
errorCount++;
}
}

// Fonksiyon: JavaScript dosyasını sıkıştır 2
function processJSFile(srcPath, destPath) {
const fileContent = fs.readFileSync(srcPath, 'utf8');
const minified = UglifyJS.minify(fileContent);
allCount++;
if (minified.error) {
console.error(`Error minifying ${srcPath}: ${minified.error}`.red);
errorCount++;
} else {
fs.writeFileSync(destPath, minified.code, 'utf8');
console.log(`Minified -UglifyJS- ${srcPath} and saved to ${destPath}`.green);
successCount++;
}
}

// Fonksiyon: JavaScript dosyasını obfuscate et ve üzerine yaz
function obfuscateAndWriteToFile(filePath) {
try {
allCount++;
const fileContent = fs.readFileSync(filePath, 'utf8');
const obfuscated = JavaScriptObfuscator.obfuscate(fileContent, {
compact: true,
disableConsoleOutput: true
});
fs.writeFileSync(filePath, obfuscated.getObfuscatedCode(), 'utf8');
console.log(`Obfuscated ${filePath} and saved. - Success`.green);
successCount++;
} catch (error) {
console.error(`Error obfuscating ${filePath}: ${error.message}`.red);
errorCount++;
}
}


// Fonksiyon: CSS dosyasını sıkıştır
function processCSSFile(srcPath, destPath) {
const fileContent = fs.readFileSync(srcPath, 'utf8');
const minified = new CleanCSS().minify(fileContent);
allCount++;
if (minified.errors.length > 0) {
console.error(`Error minifying ${srcPath}: ${minified.errors.join(', ')}`.red);
errorCount++;
} else {
fs.writeFileSync(destPath, minified.styles, 'utf8');
console.log(`Minified ${srcPath} and saved to ${destPath}`.green);
successCount++;
}
}

// Sıkıştır Boşluk Sil
function allSpaceDelete(srcPath) {
allCount++;
const data = fs.readFileSync(srcPath, 'utf8');
if (!data) {
console.error(`File read error: ${readError}`.red);
errorCount++;
}
// Satır ve paragraf boşluklarını temizle
const cleanData = data.replace(/(\r\n|\r|\n)+/g, '');
// Temizlenmiş veriyi dosyaya yaz
fs.writeFileSync(srcPath, cleanData, 'utf8');
successCount++;
console.log(`Line spaces cleared ${srcPath} - Success`.green);
}


// Fonksiyon: Dosyayı kopyala
function copyFile(srcPath, destPath) {
allCount++;
try {
fs.copyFileSync(srcPath, destPath);
console.log(`Copied ${srcPath} to ${destPath} - Success`.green);
successCount++;
} catch (error) {
console.error(`Error copying ${srcPath} to ${destPath}: ${error}`.red);
errorCount++;
}
}

// Fonksiyon: Klasörü recursive olarak sil
function deleteFolderRecursive(folderPath) {
try {
if (fs.existsSync(folderPath)) { allCount++;
fs.readdirSync(folderPath).forEach((file) => {
const curPath = path.join(folderPath, file);
if (fs.lstatSync(curPath).isDirectory()) {
// Recursive olarak alt klasörleri sil
deleteFolderRecursive(curPath);
} else {
// Dosyaları sil
fs.unlinkSync(curPath);
}
});
fs.rmdirSync(folderPath);

console.log(`Deleted folder ${folderPath} - Success`.green);
successCount++;
}
} catch (error) {
console.error(`Error deleting folder ${folderPath}: ${error}`.red);
errorCount++;
}
}
  

// Fonksiyon: Klasör içeriğini başka bir klasöre kopyala
function copyFolderContents(src, dest) {
try {
allCount++;

// Hedef klasörü temizle
deleteFolderRecursive2(dest);

// Hedef klasörü oluştur
fs.mkdirSync(dest, { recursive: true });

// Klasör içeriğini kopyala
fs.readdirSync(src).forEach((file) => {
const srcPath = path.join(src, file);
const destPath = path.join(dest, file);

if (fs.lstatSync(srcPath).isDirectory()) {
copyFolderContents(srcPath, destPath);
} else {
fs.copyFileSync(srcPath, destPath);
}
});

console.log(`Copying contents from ${src} to ${dest} - Success`.green);
successCount++;
} catch (error) {
console.error(`Error copying contents from ${src} to ${dest}: ${error}`.red);
errorCount++;
}
}

// Fonksiyon: Klasörü recursive olarak sil
function deleteFolderRecursive2(folderPath) {
try {

if (fs.existsSync(folderPath)) {  allCount++;
fs.readdirSync(folderPath).forEach((file) => {
const curPath = path.join(folderPath, file);
if (fs.lstatSync(curPath).isDirectory()) {
// Recursive olarak alt klasörleri sil
deleteFolderRecursive2(curPath);
} else {
// Dosyaları sil
fs.unlinkSync(curPath);
}
});
fs.rmdirSync(folderPath);

console.log(`Deleted folder ${folderPath} - Success`.green);
successCount++;
}
} catch (error) {
console.error(`Error deleting folder ${folderPath}: ${error}`.red);
errorCount++;
}
}

// uyu
async function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}


// Ana işlem
await minifyFilesDir(srcDir, buildDir);
console.log("Build: Compression and Rendering process completed Build Successful!".yellow);

console.log("");

//biraz dinlen await sleep(1000); 

// Klasör içeriğini android\app\src\main\assets'e kopyala
console.log(('Android: Copying all files to '+androidAssetsDir).yellow);
await copyFolderContents(buildDir, androidAssetsDir);
console.log(('Android: Copy completed  to '+androidAssetsDir).yellow);

console.log("");console.log("");

console.log(`All Work: ${allCount} Is Done`.blue);
console.log(`Success: ${successCount}`.green);
console.log(`Error: ${errorCount}`.red);


//spinner.stop(true); // İşlem başarıyla tamamlandı
}

startedFunc();
