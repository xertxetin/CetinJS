const { spawn } = require('child_process');
const path = require('path');
const colors = require('colors');

// Android Studio'nun tam yolunu bul
const androidStudioPath = process.platform === 'win32'
? spawn('where', ['studio64.exe'], { shell: true, stdio: 'pipe' })
: spawn('which', ['studio64'], { stdio: 'pipe' });

let androidStudioPathResult = '';

androidStudioPath.stdout.on('data', (data) => {
androidStudioPathResult += data.toString();
});

androidStudioPath.on('close', (code) => {
androidStudioPathResult = androidStudioPathResult.trim();

if (!androidStudioPathResult) {
console.error('Android Studio not found. Make sure it is installed and added to your PATH.'.red);
console.error('Trying to find Android Studio in PATH...'.red);
process.exit(1);
}

console.log('Android Studio found in PATH.'.green);

// Android proje dizinini belirle
const androidProjectPath = path.join(__dirname, 'android'); // 'android' kısmını kendi projenizin adıyla değiştirin

console.log(('Opening Android Studio with the following project:'+ androidProjectPath).yellow);

// Android Studio'yu belirli proje dizini ile aç
const openCommand = `"${androidStudioPathResult}" "${androidProjectPath}"`;
console.log((`Executing command: ${openCommand}`).yellow);

// exec fonksiyonu ile Android Studio'yu başlat
const childProcess = spawn(openCommand, { shell: true });

// İşlem başlatıldıktan sonra hemen mesaj göster
console.log('Android Studio has been successfully opened.'.green);

// İşlem kapatıldığında
childProcess.on('close', (code) => {
console.log('Android Studio has been closed.'.red);
});
});
