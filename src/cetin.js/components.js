//Root Get
const root = document.getElementsByTagName('cetin')[0];
const html = document.getElementsByTagName('html')[0];
const body = document.getElementsByTagName('body')[0];

// Cache Pages Settings
let cachePages = []; let cachePagesNo = 0; let activeCachePage = "";

// Ortam türünü belirle
function isMobileDevice() {
// 1. Kullanıcı Tarayıcı Ayarları
if (window.innerWidth <= 800 && window.innerHeight <= 600) {
return true;
}
// 2. User-Agent String'i
const userAgent = navigator.userAgent.toLowerCase();
const mobileKeywords = ['iphone', 'ipod', 'android', 'blackberry', 'windows phone', 'iemobile'];
return mobileKeywords.some(keyword => userAgent.indexOf(keyword) !== -1);
}

async function ariPush(id,param,popstate){
if(systemPages.filter(page => page.path === id)[0]){
// Sayfa Sayısı Say
cachePagesNo++;
// ID oluştur
let creteID = Math.floor(Math.random() * 99) +""+  Math.floor(Math.random() * 50)+""+  Math.floor(Math.random() * 88);
// Açık Sayfa Kısmi Kapat, Gizle
const activeCachePages = cachePages.find(i => i.active === true);
if(activeCachePages){
let cdom = root.querySelector(`#${activeCachePages.path}-${activeCachePages.creteid}`);
activeCachePages.active = false; 
// Yeni sayfa açılırken; geçikme (300:ms Animasyon Süresi) bekle, aktif sayfa kapat-kaldır
setTimeout(() => { 
//cdom.classList.remove("animation-direction-none");
activeCachePages.dom = cdom; 
cdom.remove();
}, 0); 
}
// Veriyi cachePages array'ine ekle
let pathAlls = (id) + (param.id ? "/"+param.id : "");
cachePages.push({no: cachePagesNo, tabsmoduleid: param.tabsmoduleid, tabsmoduletabid: param.tabsmoduletabid, path: id, path2: param.id, pathALL: pathAlls, creteid: creteID, active: true, dom: ""});
if(typeof window[id] === 'function') { window[id](id,param,creteID); } 
if(!popstate){
if(param.id){
changeHistoryState(id+"/"+param.id); 
} else {
changeHistoryState(id); 
}
}
activeCachePage=id;
} else {
toast('Page Does Not Exist!',2000,'bottom');
}
}

async function ariGoBack(popstate){
const activeCachePages = cachePages.find(i => i.active === true); 
// Silinecek öğenin dizideki indeksini bulun
let indexToRemove = cachePages.indexOf(activeCachePages);
// Önceki Öğe Bul
let previousElement = cachePages[indexToRemove - 1];
if(previousElement){ 
previousElement.active = true;
// tabs içinde yönlendirilen sayfalar
if(previousElement.tabsmoduleid && previousElement.tabsmoduletabid){
let gtabs = document.querySelector(`#${previousElement.tabsmoduleid}`);
if(gtabs){
let gtab = gtabs.querySelector(`#${previousElement.tabsmoduletabid}`);
 //setTimeout(() => {  previousElement.dom.classList.add("animation-direction-none"); }, 100);
gtab.insertAdjacentElement('beforeend', previousElement.dom);
} else {
  root.insertAdjacentElement("beforeend",previousElement.dom);
}
} else {
// setTimeout(() => { previousElement.dom.classList.add("animation-direction-none");  }, 100);
root.insertAdjacentElement("beforeend",previousElement.dom);
}
// Aktif Sayfa Kaldırın
if(indexToRemove !== -1) { 
let qact = root.querySelector(`#${activeCachePages.path}-${activeCachePages.creteid}`);
// Aktif sayfa kapanırken; geçikme (300:ms Animasyon Süresi) bekle, aktif sayfa kapat-kaldır
 //qact.classList.remove("animation-direction-none"); 
 setTimeout(() => { qact.remove(); }, 0);
cachePages.splice(indexToRemove, 1); 
}
if(previousElement.path2){
if(!popstate){changeHistoryState(previousElement.path+"/"+previousElement.path2); }
activeCachePage=previousElement.path+"/"+previousElement.path2; 
} else {
if(!popstate){changeHistoryState(previousElement.path); }
activeCachePage=previousElement.path; 
}
cachePagesNo--;
} else {
if(indexToRemove !== -1) { 
let qact = root.querySelector(`#${activeCachePages.path}-${activeCachePages.creteid}`);
// Aktif sayfa kapanırken; geçikme (300:ms Animasyon Süresi) bekle, aktif sayfa kapat-kaldır.
 //qact.classList.remove("animation-direction-none"); 
 setTimeout(() => { qact.remove(); }, 0); 
cachePages.splice(indexToRemove, 1); 
// tabs içinde açılan sayfa için geri tabs dönüş
if(activeCachePages?.tabsmoduleid){
let gtabs = document.querySelector(`#${activeCachePages.tabsmoduleid}`);
let gtab = gtabs.querySelector(`#${activeCachePages.tabsmoduletabid}`);
let gContentTab = gtab.querySelector(`#content-${activeCachePages.tabsmoduletabid}`);
gContentTab.style.display = "";
if(!popstate){changeHistoryState(activeCachePages.tabsmoduletabid);}
} 
}
}
}

async function ariCreate(id,data,params,creteID){
const item = document.createElement(id);
item.id = `${id}-${creteID}`; 
item.className = params?.push ? "goback":"no_goback";
item.className += " page"; //animation-direction-"+getItem('animationdirection');
item.style.opacity = params?.push ? "0" : "1";
item.style.display = "block"; item.style.height = "100vh";
item.innerHTML = await data;
if(params.tabsmoduleid && params.tabsmoduletabid){
let gtabs = document.querySelector(`#${params.tabsmoduleid}`);

if(gtabs){
let gtab = gtabs.querySelector(`#${params.tabsmoduletabid}`);
let gContentTab = gtab.querySelector(`#content-${params.tabsmoduletabid}`);
setTimeout(() => { gContentTab.style.display = "none"; }, 0);
gtab.insertAdjacentElement('beforeend', item);
} else {
root.insertAdjacentElement('beforeend', item);
}

} else {
root.insertAdjacentElement('beforeend', item);
}
setTimeout(() => {
item.classList.add("animation-direction-none");
}, 0);
}

async function ariSet(id,data){
document.getElementById(id).innerHTML = safes(data);
}

async function ariRoot(data){
root.innerHTML = safes(data);
}


async function ariViseble(id,status){
if(status){
document.getElementById(id).classList.add("ariactive");
} else {
document.getElementById(id).classList.remove("ariactive");
}
}


function router() {
// Tıklama Olayılarını Yönetin Ve Ayırın
document.addEventListener("click", function(event) {

// Tıklanan öğeyi alın
var clickedElement = event?.target;

// Tıklanan öğe üzerinde yukarı doğru çıkarak en yakın öğeyi bulun
var dataRouter = clickedElement.closest('[data-router]');

// Eğer öğe bulunursa ve data-router özelliği doluysa
if (dataRouter && dataRouter.getAttribute('data-router')) {
let rotudata = dataRouter.getAttribute('data-router');

// / karakterine göre böl  
var parts = rotudata.split('/');

// id kısmını alın 
var idPart = parts.find(part => part.includes('id:'));
var id = idPart ? idPart.split(':')[1] : null;

// tab kısmını alın 
var tabPart = parts.find(part => part.includes('tab:'));
var tabsmoduleid = tabPart ? tabPart.split(':')[1] : null;
var tabsmoduletabid = tabPart ? tabPart.split(':')[2] : null;

// push kısmını alın 
var pushPart = parts.find(part => part.includes('push:'));
var push = pushPart ? pushPart.split(':')[1] : true;

if(parts[0] == "back"){
ariGoBack(false);
} else {
ariPush(parts[0], { push: push, id: id, tabsmoduleid: tabsmoduleid, tabsmoduletabid: tabsmoduletabid });
}

}
});
}

function getLastSegments(urls) {
var lastSegments = [];

for (var i = 0; i < urls.length; i++) {
var url = urls[i];

// URL'i '/' karakterine göre bölüyoruz
var pathSegments = url.split('/').filter(function(segment) {
return segment.trim() !== '';
});

// Başlangıçtan gelen kısımları temizliyoruz
var startIndex = pathSegments.findIndex(segment => segment.includes('.html')) + 1;
var segments = pathSegments.slice(startIndex);

// Son segmentleri '/' ile birleştirip diziye ekliyoruz
var lastSegment = segments.join('/');
lastSegments.push(lastSegment || ''); // Sonuç boşsa boş string ekliyoruz
}

return lastSegments;
}

function ApplicationPages(startnames){
// Sayfa yüklendiğinde başlangıç içeriği
window.addEventListener('load', () => {
const urlGet = encodeURIComponent(window.location.pathname);
const urlSafes = decodeURIComponent(urlGet); 
const urlConvert = getLastSegments([urlSafes]);
const urlSplit = urlConvert[0].split("/");
const firstSegment = urlSplit[0];
const ruw = firstSegment ? firstSegment : startnames;

// System Pages içinde eşleşen öğeyi bul
const matchingPage = systemPages.find(page => page.path === ruw);
// Eğer eşleşen bir sayfa bulunduysa, bilgilerini göster
if (matchingPage) {
//console.log('Eşleşen Sayfa:', matchingPage);
if(matchingPage.type != "page"){
createTabsGeneral(matchingPage.path,matchingPage.type);
}
if(matchingPage.type == "page"){
//console.log("page: "+matchingPage.path + "/"+ urlSplit[1]);
ariPush(matchingPage.path,{push: false, id:urlSplit[1] ? urlSplit[1] : ''});
}
} else {
//console.log('Eşleşen Sayfa Bulunamadı.');
ariRoot(`
<center style="color: var(--black);">404<br>Eşleşen Sayfa Bulunamadı!</center>
`);
}


/*
// Eğer "page" parametresi varsa, ona göre içeriği değiştir
if (firstSegment && firstSegment !== undefined){
  */

/*
}
} else {
// Varsayılan olarak "home" Sayfasını Tab Başlatarak Aç içeriğini göster
//createTabsGeneral("home","tabs");
//ariPush(startnames,{push: false});
// System Pages içinde eşleşen öğeyi bul
const matchingPage = systemPages.find(page => page.path === startnames);
// Eğer eşleşen bir sayfa bulunduysa, bilgilerini göster
if (matchingPage) {
//console.log('Eşleşen Sayfa:', matchingPage);
if(matchingPage.type != "page"){
createTabsGeneral(matchingPage.path,matchingPage.type);
}
if(matchingPage.type == "page"){
//console.log("page: "+matchingPage.path + "/"+ urlSplit[1]);
ariPush(matchingPage.path,{push: false, id:urlSplit[1] ? urlSplit[1] : ''});
}
} else {
  //console.log('Eşleşen Sayfa Bulunamadı.');
  ariRoot(`
  <center style="color: var(--black);">404<br>Eşleşen Sayfa Bulunamadı!</center>
  `);
  }
*/

});
}

// Tarayıcı geri ve ileri butonlarına tepki verme
window.addEventListener('popstate', (event) => {
const state = event.state;
if(state?.no || state?.url){
    
const getCachePages = cachePages.find(i => i.no === state.no);
if(getCachePages?.path){  
if(cachePages.length > 1){ ariGoBack(true); console.log('1111'); }
} else {
const tabChechk = systemPages.filter(page => page.path === state.url)[0];
const checkNo = cachePages.filter(i => i.no === cachePagesNo)[0];
const parts = state.url.split('/');
if(tabChechk){
if(tabChechk?.type != "page"){
window[tabChechk.type].tabchange(tabChechk.path,true);
if(checkNo?.tabsmoduletabid == state?.url){
ariGoBack(true); console.log('222');
} else { 
  ariGoBack(false); 
  console.log("nolduuuu") 
}
} else {
//ariPush(state.url,{push: true},true); 
ariPush(parts[0], { push: true, id: parts[1], tabsmoduleid: checkNo?.tabsmoduleid , tabsmoduletabid: checkNo?.tabsmoduletabid  },true);
console.log('3333');
}
} else {
//ariPush(state.url,{push: true},true); 
ariPush(parts[0], { push: true, id: parts[1], tabsmoduleid: checkNo?.tabsmoduleid , tabsmoduletabid: checkNo?.tabsmoduletabid  },true);
console.log(checkNo);
console.log('4444');
}
}

}
});

// Tarayıcı geçmişini değiştirme
function changeHistoryState(page) {
// Tarayıcı geçmişi değiştiriliyor

let way = ""; let wayend = "";
/*
if (typeof AndroidBridge !== 'undefined') {
way = "file:///android_asset";  wayend = ".html"; 
}*/

//history.pushState({ page }, null, way+`/${page}`+wayend);
let creteID = Math.floor(Math.random() * 99) +""+  Math.floor(Math.random() * 50)+""+  Math.floor(Math.random() * 88);
history.pushState({ page: creteID, no: Number(cachePagesNo), url:  page }, "Page "+cachePagesNo, "/"+page);
}


async function setItem(key,data){
return localStorage.setItem(key,data);
}
function getItem(key){
return localStorage.getItem(key);
}
async function getItemWait(key){
return localStorage.getItem(key);
}
async function removeItem(key){
return localStorage.removeItem(key);
}
async function allClear(){
return localStorage.clear();
}

async function darkMode(){
if(await getItem('darkMode') == "true"){
if(html.classList.contains('light')) html.classList.remove('light');
html.classList.add('dark');
AndroidChangeStatusBarColor('#101010'); 
} else {
if(html.classList.contains('dark')) html.classList.remove('dark');
html.classList.add('light');
AndroidChangeStatusBarColor('#ffffff'); 
}
}
async function darkModeSet(type){
if (type) {
if(html.classList.contains('light')) html.classList.remove('light');
if(!html.classList.contains('light')) html.classList.add('dark');
await setItem('darkMode', "true");
} else {
if(html.classList.contains('dark')) html.classList.remove('dark');
if(!html.classList.contains('dark')) html.classList.add('light');
await setItem('darkMode', "false");
}
}
async function isDarkMode(){
return html.classList.contains('dark');
}

async function toast(text,duration,position,backgroundColor,textColor){
let toastcontainner = document.getElementsByClassName('toastcontainner'+position)[0];
if(!toastcontainner){
toastcontainner = document.createElement('div');
toastcontainner.classList.add('toastcontainner');
toastcontainner.classList.add(position ? 'toastcontainner'+position : 'toastcontainnertop');
root.appendChild(toastcontainner);
}
const toast = document.createElement('div');
toast.classList.add('toast');
toast.textContent = text;
toast.style.display = 'block';
backgroundColor ? toast.style.backgroundColor = backgroundColor : '';
textColor ? toast.style.color = textColor : '';
toastcontainner.appendChild(toast);
toast.time = setTimeout(() => {
toast.style.display = 'none';
toastcontainner.removeChild(toast);
}, duration ? duration : 2000); 
}

// uyu
async function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

// Sayfa yüklendimi
function oneWellLoad(time,callback) {
setTimeout(() => {
callback();
}, time ? time:0);
}


async function onloadIMG(item){
console.log(item);
}

async function templateViewPost(items){ 
if(items.id > 0 && items.virtualtype == 'feed-box'){



return safes(`
<div class="virtual-safe-container" style="min-height: ${items.virtualItemMinHeight}px">
<div class="item-left">
<div class="item-avatar"><img src="${items.avatar}" loading="lazy"></div>
</div>

<div class="item-right">
<div class="item-middle">

<div class="item-middle-top-bar">
<div class="item-middle-left">${items.username} #${items.id}</div>
<div class="item-middle-right">${imore}</div>
</div>

<div class="item-middle-content">

${items.text ? `
<div class="item-texts">
${items.text} 
</div>
` : ''}

${items.image.length ? `
<div class="item-media item-images" scroll="true">
${items.image.map(item => `<img src="${item.url}" loading="lazy" />`).join('')}
</div>
` : ''}

${items.video ? `
<div class="item-media item-videos" scroll="true">
<video preload="none" controls>
<source src="${items.video}" type="video/mp4">
</video>
</div>
` : ''}

</div>
</div>

<div class="item-bottom">
<div class="acc-btn">${iheart}</div>
<div class="acc-btn">${ibubble}</div>
<div class="acc-btn">${ishare}</div>
<div class="acc-btn">${iexternal}</div>
</div>
</div>
</div>`);
}

if(items.id == 0 && items.virtualtype == 'alert-box'){
return safes(`

${items.title ? `
<div class="title">
${items.title}
</div>
` : ''}

${items.titlelong ? `
<div class="titlelong">
${items.titlelong}
</div>
` : ''}

${items.button.length ? `
<div class="buttons">
${items.button.map(item => `<button id="${item.id}" class="${item.classname}">${item.text}</button>`).join('')}
</div>
` : ''}

`);
}
}



function createFPSMeter() {
let fpsValue = 0;
let isFPSCounterVisible = JSON.parse(getItem("fps"));

let frameCount = 0;
let lastTime;
let animationFrameId;

let fpsContainer = null;
let fpsTag = null;

function createFPSContainer() {
// Eğer fpsContainer zaten varsa, onu kullan
if (!fpsContainer) {
fpsContainer = document.createElement('div');
fpsContainer.id = 'fpsContainer';
fpsContainer.style.position = 'fixed';
fpsContainer.style.top = '0px';
fpsContainer.style.left = '0px';
fpsContainer.style.background = 'rgb(0 0 0 / 53%)';
fpsContainer.style.padding = '2px 5px';
fpsContainer.style.fontSize = '0.8rem';
fpsContainer.style.display = isFPSCounterVisible ? 'block' : 'none';
document.body.appendChild(fpsContainer);

fpsTag = document.createElement('span');
fpsTag.id = 'fpsTag';
fpsContainer.appendChild(fpsTag);
}

return fpsContainer;
}

function updateFPSCounter() {
const currentTime = performance.now();
const deltaTime = currentTime - lastTime;

const currentFPS = Math.round(1000 / deltaTime);
fpsValue = currentFPS;

fpsTag.textContent = `FPS: ${fpsValue}`;
setFPSColor();

frameCount++;
lastTime = currentTime;

if (isFPSCounterVisible) {
animationFrameId = requestAnimationFrame(updateFPSCounter);
}
}

function setFPSCounterVisibility() {
createFPSContainer(); // fpsContainer ve fpsTag'i oluştur
isFPSCounterVisible = !isFPSCounterVisible;

// FPS sayacının görünürlüğünü ayarla
if (fpsContainer) {
fpsContainer.style.display = isFPSCounterVisible ? 'block' : 'none';

// Animasyonu iptal et ve tekrar başlat
if (isFPSCounterVisible) {
lastTime = performance.now();
animationFrameId = requestAnimationFrame(updateFPSCounter);
} else {
cancelAnimationFrame(animationFrameId);
}
}
}

function setFPSColor() {
// FPS değerine göre renk ayarla
if (fpsTag && isFinite(fpsValue)) {
if (fpsValue > 60) {
// 60 fps üzeri ise yeşil
fpsTag.style.color = 'lime';
} else if (fpsValue >= 40) {
// 40 - 60 fps arası ise yeşil
fpsTag.style.color = 'lime';
} else if (fpsValue >= 30) {
// 30 - 40 fps arası ise turuncu
fpsTag.style.color = 'orange';
} else {
// 30 fps ve altında ise kırmızı
fpsTag.style.color = 'red';
}
}
}

// Toggle butonunu seç ve FPS sayacını aç/kapat
document.addEventListener('DOMContentLoaded', () => {
createFPSContainer();
lastTime = performance.now();
animationFrameId = requestAnimationFrame(updateFPSCounter);
});

return {
toggleFPSCounter: setFPSCounterVisibility
};
}

// Tüm boşlukları ve dönüş karakterlerini sil
function removeAllWhitespace(inputString) {
return inputString.replace(/\s+/g, '');
}
// Satır boşluklarını sil
function removeLineBreaks(inputString) {
return inputString.replace(/\n/g, '');
}
function safes(data) {
return removeLineBreaks(data);
}

//tab module
function initializeTabs({id,pages}) {
const moduleid = id;
const tabs = pages;  

let activetabid = ''; 
let documentTabs = '';

async function createTabs(defaultTab) {
await ariRoot(`
<ari id="${moduleid}">
<tabs>
${tabs.map(tab => `<tab data-tabs-id="${moduleid}" id="${tab.path}"></tab>`).join('')}
<tab-bars>
${tabs.map(tab => `
<icon id="i${tab.path}">${tab.icon}<label>${tab.label}</label></icon>
`).join('')}
</tab-bars>
</tabs>
</ari>
`);

documentTabs = document.getElementById(moduleid);

ariViseble(moduleid, true);

addTabClickListeners();

if (defaultTab) {
tabchange(defaultTab); 
}
}

async function tabchange(id,popstate) {
if (activetabid === id) { return; }

if (activetabid) {
toggleTabClasses(activetabid, false, true); //popstate işleme gerek yok true
}

if (id) {
toggleTabClasses(id, true, popstate); 
activetabid = id;

if (typeof window[id] === 'function') { 
window[id](id,documentTabs.querySelector(`#${id}`),documentTabs,moduleid); 
}

}
}

function toggleTabClasses(id, isActive, popstate) {
const tabElement =  documentTabs.querySelector(`#${id}`);
const iconElement = documentTabs.querySelector(`#i${id}`);

if (tabElement) {
tabElement.classList.toggle("tabactive", isActive);
}

if (iconElement) {
iconElement.classList.toggle("tabiactive", isActive);
}

activeCachePage=id; 
if(!popstate){changeHistoryState(id);}
}

function addTabClickListeners() {
tabs.forEach(tab => {
documentTabs.querySelector(`#i${tab.path}`).addEventListener("click", () => tabchange(tab.path));
});
}


/* page include */

return {
createTabs,tabchange
};
}

function createTabsGeneral(path,type){
//"type" özelliği "tabs" olan öğeleri seç
const tabsPage = {id: type, pages: systemPages.filter(page => page.type === type)};
//$tabs modülünü al -> değişken $tabs kimlik adı
window[type] = initializeTabs(tabsPage);
//Varsayılan olarak $path "home" sekmesini etkinleştirir.
window[type].createTabs(path); 
// Cache Pages Settings Reset
cachePages = []; cachePagesNo = 0; activeCachePage = "";
}

function setupPullToRefresh(documents) {
const scrollContainer = documents.querySelector('virtual-scroller');
const infinityScroller = scrollContainer.querySelector('infinity-scroller');
const refreshContainer = documents.querySelector('pull-to-refresh');

let startY;
let isRefreshing = false;
const isDragStop = 75;
let refreshCallback = null;
let completeCallback = null; 

let lastScrollTop = html.scrollTop || scrollContainer.scrollTop;//scrollContainer.scrollTop;

scrollContainer.addEventListener("touchstart", handleTouchStart, { passive: true });
scrollContainer.addEventListener("touchmove", handleTouchMove, { passive: true });
scrollContainer.addEventListener("touchend", handleTouchEnd);

function handleTouchStart(e) {
lastScrollTop =  html.scrollTop || scrollContainer.scrollTop;//scrollContainer.scrollTop;
if (lastScrollTop > 0 || isRefreshing) return;
startY = e.touches[0].clientY;
isRefreshing = false;
}

function setRefreshStyles(distance) {
scrollContainer.style.pointerEvents = distance > 0 ? "none" : "auto";
infinityScroller.style.pointerEvents = distance > 0 ? "none" : "auto";
scrollContainer.setAttribute('pointerevents', distance > 0 ? "none" : "auto");
refreshContainer.style.top = `${distance}px`;
refreshContainer.style.height = `${distance}px`;
body.style.overflow = "hidden";
}

function resetRefreshStyles() {
scrollContainer.style.pointerEvents = "auto";
infinityScroller.style.pointerEvents = "auto";
scrollContainer.setAttribute('pointerevents', 'auto');
refreshContainer.style.top = "-60px";
refreshContainer.style.height = `0px`;
body.style.overflow = "auto";
}

function handleTouchMove(e) {
lastScrollTop =  html.scrollTop || scrollContainer.scrollTop;//scrollContainer.scrollTop;
if (lastScrollTop > 0 || isRefreshing ) return;
const currentY = e.touches[0].clientY;
const distance = currentY - startY;
if (distance <= isDragStop + 10) {
if (distance > 0) {
setRefreshStyles(distance);
}
}
}

function handleTouchEnd() {
if (lastScrollTop > 0 || isRefreshing) return;
if (parseInt(refreshContainer.style.top, 10) >= isDragStop) {
refreshContainer.style.top = "0";
isRefreshing = true;

if (refreshCallback) { 
refreshCallback();
}

} else {
resetRefreshStyles();
}
}

function refresh(callback) {
callback ? refreshCallback = callback : '';
}

function complete(callback) {
callback ? completeCallback = callback : '';
resetRefreshStyles();
isRefreshing = false;
completeCallback();
}

return {
refresh,
complete
};
}


function generateRandomText(length) {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
result += characters.charAt(randomIndex);
}
return result;
}

function getUUID() {
return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
);
}