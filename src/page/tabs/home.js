window["home"] = async (id,documents,documentTabs,moduleid) => {
if(documents.innerHTML){} else {
await ariSet(id,`
<tab-content id="content-${id}">
<all-content>
<virtual-scroller pointerevents="auto" data-virtualid="0" data-scrollheight="0" data-lasttranslatey="0" data-totalitemheight="0" data-lastitemid="0" data-servergetstart="false" data-servergetinfine="false">
<header data-disabled="false" data-infinityscrollerloader="false">
<toolbar>
<flex>
<button class="clear-btn" id="changeStatusBarColor">${isun}</button>  
</flex>
<flex>
<titlebar><div id="animlogo" class="animlogo">${CetinJSLogo}</div></titlebar>
</flex>
<flex>
<button class="clear-btn" id="fpsOnBtns">${ichartUpLine}</button>
</flex>
</toolbar>
</header>

<header-blanks></header-blanks>

<pull-to-refresh><loader class="spinners-3"></loader></pull-to-refresh>

<infinity-scroller></infinity-scroller>
<infinity-scroller-loader></infinity-scroller-loader>

<tabbar-blanks></tabbar-blanks>

</virtual-scroller>
</all-content>

</tab-content>
`);

//içeri yükle veya biraz geçikmeli yükle
oneWellLoad(0,async function(){

const tabBars = documentTabs.querySelector('tab-bars');
const allContent = documents.querySelector('all-content');
const virtualScroller = documents.querySelector('virtual-scroller');
const infinityScroller = virtualScroller.querySelector('infinity-scroller');
const infinityScrollerLoader = virtualScroller.querySelector('infinity-scroller-loader');
const header = documents.querySelector('header');
const headerBlanks = documents.querySelector('header-blanks');
const tabBarBlanks = documents.querySelector('tabbar-blanks');

if(header){if(headerBlanks){headerBlanks.style.height = header.offsetHeight+'px';}}
if(tabBars){if(tabBarBlanks){tabBarBlanks.style.height = tabBars.offsetHeight+'px';}}
//if(virtualScroller){virtualScroller.style.height = window.innerHeight+"px";/*-header?.offsetHeight-tabBars?.offsetHeight+'px';*/}


//tab-bars icon tıklandığında yapılacaklar.
const cTabsPage = documentTabs.querySelector(`#i${id}`);
let cTabsPageClick = 0;
cTabsPage.addEventListener("click", () =>  {
//300milisaniye sonra sıfırla
setTimeout(() => {cTabsPageClick = 0;}, 300);
if(cTabsPage.className){
cTabsPageClick = cTabsPageClick+1;
if(cTabsPageClick == 2){
scrollToTop();
cTabsPageClick = 0;
}
}
});



// İlk sayfa yüklemesinde içeriği oluştur
const virtualItemClass = 'virtual-items';
const virtualItemMinHeight = 50; //100// min öğe yüksekliği px cinsinden
const virtualItemLoadMultiplier = 2; // yükleme çarpanı
const virtualItemLoadCount = Math.floor(virtualScroller.clientHeight*virtualItemLoadMultiplier/virtualItemMinHeight);
let rendererData = [];


//isMobileDevice();
let isScrollType;
if(getItem('isScrollType')){
isScrollType = getItem('isScrollType');
} 
if(!getItem('isScrollType')){
isScrollType = "scroll1";  
setItem('isScrollType', isScrollType);
}



// Tıklama Olayılarını Yönetin Ve Ayırın
documents.addEventListener("click", function(event) {
// Tıklanan öğeyi alın
var clickedElement = event?.target;

if(clickedElement.id){

// #pwachangebtns Tıklanan elementin id'sini kontrol et
if (clickedElement.id === "scroll1Change") {
toast('woww 🎉🎉🎉 Teşekkürler',1500,'bottom');
} 

if (clickedElement.id === "scroll2Change") {
toast('📣 Yapım Aşamasında!',1500,'bottom');
}

}




/*
// Tıklanan öğe üzerinde yukarı doğru çıkarak en yakın feed-box öğesini bulun
var feedBoxElement = clickedElement.closest('.virtual-items');

// Eğer feed-box öğesi bulunursa
if (feedBoxElement) {
console.log("Feed-box öğesinin bilgileri:", feedBoxElement);
}
*/



});




// IntersectionObserver'ı oluşturun ve izlenmesini istediğiniz öğe seçicisini belirtin
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {


/*/
if (entry.isIntersecting){
const images = entry.target.querySelectorAll('.item-images img');
images.forEach(image => { 
if(image.dataset.src && !image.src){ image.src = image.dataset.src; image.removeAttribute('data-src'); }
});   
} else {
const images = entry.target.querySelectorAll('.item-images img');
images.forEach(image => { 
if(!image.dataset.src && image.src){image.setAttribute('data-src', image.src); image.removeAttribute('src'); }
});   
}
*/


});
}, { threshold: 0.1 }); // threshold, ne kadar görünür olması gerektiğini belirler (0.5, yarısı göründüğünde)

    

/**
 * Feed verilerini almak için kullanılan fonksiyon.
 * Feed verilerini alır ve addData fonksiyonunu kullanarak sayfaya ekler.
 */
async function getFeed() {
// Global değişkenleri sıfırla
rendererData = [];
infinityScroller.innerHTML = "";
virtualScroller.dataset.lasttranslatey = 0;
virtualScroller.dataset.totalitemheight = 0;

virtualScroller.dataset.servergetstart = false;
virtualScroller.dataset.servergetinfine = false;
virtualScroller.dataset.lastitemid = 0;
virtualScroller.dataset.virtualid = 0;

// Feed verilerini al ve sayfaya ekle
let data = await feeddata;
addData(data.slice(0, virtualItemLoadCount), "bottom", virtualItemClass, rendererData);
}

// İlk sayfa yüklemesinde feed verilerini al
getFeed();

/**
 * Yeni feed verilerini almak için kullanılan fonksiyon.
 * Server tarafından yeni veri getirildikten sonra çağrılır.
 * @param {number} lastItemID - Sunucuya gönderilecek olan son ID
 */
async function getFeedServerNew(lastItemID){
// Feed verilerini al
let data = await feeddata;

// Virtual scroller'ın görünürlüğünü geri getir
//virtualScroller.style.pointerEvents = "auto";
// infinity Scroller Loader 'ı kaldır
infinityScrollerLoader.innerHTML = '';
// Infinity scroller'ın yüksekliğini güncelle
infinityScroller.style.height = Number(virtualScroller.dataset.scrollheight) + "px";

// Sunucudan yeni veriyi al
let nextData = await getNextDataById(lastItemID, data, virtualItemLoadCount);
// Yeni veriyi sayfaya ekle ve ekranı kaydır
if (nextData.length > 0) {
await addData(nextData, "bottom", virtualItemClass, rendererData);
itemsLoaderScroll("renderview"); header.dataset.infinityscrollerloader = false; 
} else {
// Eğer yeni veri yoksa, servergetinfine flag'ini true yap
virtualScroller.dataset.servergetinfine = true;
setTimeout(() => { header.dataset.infinityscrollerloader = false; }, 200);
}
}


/**
 * Sayfanın sanal kaydırma alanında gerçekleşen scroll olaylarını dinleyen fonksiyon.
 * 
 * @event virtualScroller#scroll
 * @param {number} scrollTop - Sanal kaydırma alanının üstünden itibaren yükseklik.
 * @param {number} scrollHeight - Sanal kaydırma alanının toplam yüksekliği.
 * @param {number} clientHeight - Sanal kaydırma alanının görünür yüksekliği.
 * @param {Object} rendererData - Renderer verileri.
 * 
 * @description
 * Bu fonksiyon, sanal kaydırma alanındaki scroll olaylarını dinler ve kaydırma hızına bağlı olarak
 * belirli işlemleri gerçekleştirir. Ayrıca, `rendererViews` fonksiyonunu çağırarak değerleri
 * iletilen fonksiyona aktarır.
*/


/** 
 * Sanal kaydırma işlevleriyle ilgili fonksiyonlar ve olay dinleyicileri.
 *
 * @param {number} lastScrollPosition - Sayfanın son toplam yüksekliği.
 * @param {number} lastScrollPosition2 - Sayfanın son işlem yaptığı toplam yüksekliği.
 * @param {boolean} scrollDirection - Sayfanın kaydığı yön.
 * @param {number} speed - Sayfanın kayma hızı.
 * @param {number} offsetY - Sayfanın Scroll Y Değeri.
 * @param {number} offsetYLast - Sayfanın Son Scroll Y Değeri.
*/

if(isScrollType == "scroll1"){virtualScroller.style.overflow = "auto";}

let lastScrollPosition = 0; let lastScrollPosition2 = 0; let scrollDirection = false;   let aFrameScrolling = null; 



virtualScroller.addEventListener('scroll', function(event) {  

if(!aFrameScrolling){
aFrameScrolling = requestAnimationFrame(() => {
// Scroll ve diğer değerleri al
const scrollTop = virtualScroller.scrollTop; 
const clientHeight = virtualScroller.clientHeight; 
const gradualOperationHeight = (Math.floor(clientHeight))-virtualItemMinHeight*virtualItemLoadMultiplier;
if (Math.abs(scrollTop - lastScrollPosition2) >= (gradualOperationHeight)) {     

// İşlem yapmak istediğiniz kodu buraya ekleyin
itemsLoaderScroll("renderview");
// Son scroll konumunu güncelle
lastScrollPosition2 = scrollTop;
}
itemsLoaderScroll("renderscroll");  
aFrameScrolling = null; 
});
}

});       



function itemsLoaderScroll(type){
// eğer sayfa terk edilir yani sanal kaydırma etiket görünümden çıkarsa kaydırma iptal et
const isLayerVisible = virtualScroller.offsetParent !== null;
if(isLayerVisible){
// Scroll ve diğer değerleri al
const scrollTop = virtualScroller.scrollTop;//Math.floor(Math.abs(offsetY)); 
const scrollHeight = virtualScroller.scrollHeight;
const clientHeight = virtualScroller.clientHeight; 
if(type == "renderview"){
// rendererViews fonksiyonunu çağır ve değerleri iletilen fonksiyona aktar
rendererViews(scrollTop, scrollHeight, clientHeight, rendererData);
}
if(type == "renderscroll"){
// scroll diğer işleler sayfa en alt geldimi , menuler gizlensinmi
rendererScroll(scrollTop, scrollHeight, clientHeight, rendererData);
}
}
}



if(isScrollType == "scroll2"){
let scrollLogs;
function scrollLogsf() {
if(!scrollLogs){
// Create a new div element
scrollLogs = document.createElement('div');
scrollLogs.id = 'scroll-log';
scrollLogs.textContent = 'No Scrolling';
scrollLogs.style.position = 'fixed';
scrollLogs.style.top = '0px';
scrollLogs.style.right = '0px';
scrollLogs.style.background = 'rgb(0 0 0 / 53%)';
scrollLogs.style.padding = '2px 5px';
scrollLogs.style.fontSize = '0.8rem';
scrollLogs.style.color = 'white';
document.body.appendChild(scrollLogs);
}
}
//setTimeout(() => {scrollLogsf();}, 120);


let isScrolling = false; 
let touchStartY = 0; let touchStartX = 0; let deltaY = 0; let velocityY = 0; 

let currentSpeed = 0; let defaultSpeed = 1.2;  let nowSpeed = defaultSpeed; 

let touchStartTimestamp;
let isTouching = false;
let cancelResumeScroll = false;
let bFrameScrolling = null;


infinityScroller.addEventListener('touchstart', function (event) { 
if(virtualScroller.getAttribute('pointerevents') == "none") return; 
//velocityY = 1; currentSpeed = 0;
touchStartTimestamp = Date.now();
isTouching = true;


deltaY = 0;
touchStartY = event.touches[0].clientY;
touchStartX = event.touches[0].clientX;
if(scrollLogs){ scrollLogs.textContent = 'TS / nowSpeed:'+nowSpeed+' / CF:'+currentSpeed/10*nowSpeed; }
}, { passive: true });



infinityScroller.addEventListener('touchmove', function (event) {
if(virtualScroller.getAttribute('pointerevents') == "none") return; 

const currentTop  = event.touches[0].clientY;
deltaY = currentTop  - touchStartY;

/*
const deltaXx = event.touches[0].clientX - touchStartX;
const deltaYy = event.touches[0].clientY - touchStartY;

// Yatay kaydırma olduğunda dokunma olayını iptal et
if (Math.abs(deltaXx) > Math.abs(deltaYy)) {
 console.log("d");  return
}
*/


velocityY = deltaY;
//currentSpeed += velocityY;
if(!currentSpeed){ currentSpeed = velocityY; } else { currentSpeed += velocityY; }
touchStartY = currentTop;

velocityY > 0 ? scrollDirection = false : scrollDirection = true; 


// Normal İle Hızlı Animasyonlu Kaydırma Ayırma
cancelResumeScroll = false;
const touchEndTimestamp = Date.now();
const touchDuration = touchEndTimestamp - touchStartTimestamp; 
if (isTouching && touchDuration >= 140 || Math.abs(deltaY) <= 2) {  

// kaydırma iptal et
if(isScrolling) { animateCancelScroll(); }  

// Normal kaydırma
if(!isScrolling && !animationFrameScroll && !bFrameScrolling){ 
bFrameScrolling = requestAnimationFrame(() => {
//console.log("New frame requested...");
// Sınırları Ve Hızı Belirle
let ndvelocityY = Math.min(200.0, Math.max(0.0, Math.abs(velocityY)*1.2));
let nvelocityY = velocityY > 0 ? -ndvelocityY : ndvelocityY;

// Scroll değerini sınırla (min ve max değerler arasında tut)
let nTop = Math.max(0, Math.min(Math.floor(virtualScroller.scrollTop + nvelocityY), virtualScroller.scrollHeight - virtualScroller.clientHeight));
// Yukarı veya aşağı kaydırmayı gerçekleştir
virtualScroller.scrollTo({top: nTop,behavior: 'instant'});
//virtualScroller.scrollBy(0, nvelocityY);
bFrameScrolling = null; 

if(scrollLogs){ scrollLogs.textContent = 'TM / nowSpeed:'+nowSpeed+' / CF:'+Math.floor(currentSpeed/10*nowSpeed); }
});
}
cancelResumeScroll = true;
// kaydırma iptal et
if(isScrolling) { animateCancelScroll(); }  
//return;
}



// Animasyonlu Kaydırma
if(!isScrolling && !animationFrameScroll && !bFrameScrolling && !cancelResumeScroll){ animateScroll(); }



}, { passive: true });




infinityScroller.addEventListener('touchend', function () { 
if(virtualScroller.getAttribute('pointerevents') == "none") return;

isTouching = false;
if(cancelResumeScroll){ animateCancelScroll(); }

if(scrollLogs){ scrollLogs.textContent = 'TE / nowSpeed:'+nowSpeed+' / CF:'+currentSpeed/10*nowSpeed; }
});


let animationFrameScroll = null;
let startScrollSpeed = 0.94;
let endScrollSpeed = 0.94;

function animateScroll() {
// eğer sayfa terk edilir yani sanal kaydırma etiket görünümden çıkarsa kaydırma iptal et
const isLayerVisible = virtualScroller.offsetParent !== null;

isScrolling = true;
currentSpeed *=startScrollSpeed;

let cspeedY = Math.min(500.0, Math.max(0.0, Math.abs(currentSpeed))); 
nowSpeed = Math.min(5.0, Math.max(defaultSpeed, Math.abs(Math.floor(cspeedY)/10)));
let ndvelocityY = Math.min(170.0, Math.max(0.0, Math.abs(currentSpeed/8*nowSpeed)));//8


let nvelocityY = velocityY > 0 ? -ndvelocityY : ndvelocityY;

velocityY > 0 ? scrollDirection = false : scrollDirection = true; 


if (isLayerVisible) {
// Scroll değerini sınırla (min ve max değerler arasında tut)
let nTop = Math.max(0, Math.min(Math.floor(virtualScroller.scrollTop + nvelocityY), virtualScroller.scrollHeight - virtualScroller.clientHeight));
//sayfa kayma üst ve alt limir sınırı taşma önleme  
if(nTop == 0 || nTop == virtualScroller.scrollHeight - virtualScroller.clientHeight){
animateCancelScroll(); 
}

// Yukarı veya aşağı kaydırmayı gerçekleştir
virtualScroller.scrollTo({
top: nTop,
behavior: 'instant'
});
}


if ((Math.abs(ndvelocityY.toFixed(1)) > endScrollSpeed.toFixed(1)) && isLayerVisible) { //if (Math.abs(velocityY) > 0.1) {
animationFrameScroll = requestAnimationFrame(animateScroll); 
if(scrollLogs){ scrollLogs.innerHTML = 'YesScroll / nowSpeed:'+nowSpeed+' ndvelocityY:'+Math.abs(ndvelocityY.toFixed(2)); }
} else {
animateCancelScroll(); 
}
}


function animateCancelScroll(){
cancelAnimationFrame(animationFrameScroll);
velocityY = 0;
currentSpeed = 0;
nowSpeed = defaultSpeed;
animationFrameScroll = null; 
isScrolling = false;
if(scrollLogs){ scrollLogs.textContent = 'NoScroll / nowSpeed:'+nowSpeed+' / CF:'+currentSpeed/10*nowSpeed; }
}

}










/**
 * Yeni feed verilerini sayfaya eklemek için kullanılan fonksiyon.
* @param {Array} data - Eklenecek olan veri dizisi
* @param {string} position - Ekleme pozisyonu ('bottom' veya 'top')
* @param {string} virtualItemClass - Feed item'ları için kullanılan sınıf adı
* @param {number} totalItemHeight - Toplam yükseklik verisi
* @param {Array} rsData - Eklenecek olan veri dizisi
*/

//const addData = async (data, position, virtualItemClass, rsData) => { console.log("sızıntı");
async function addData(data, position, virtualItemClass, rsData){ 
let autonumbs = 0;
for(let itemData of data){
// Sanal id oluştur
let virtualid = Number(virtualScroller.dataset.virtualid);
virtualid++; autonumbs++;
virtualScroller.dataset.virtualid = virtualid;

// Yeni bir item oluştur
const item = await document.createElement(itemData.virtualtype);
let translateY = calculateTranslateY(rsData);

// Item'ın CSS özelliklerini ayarla
//item.style.transform = `translateY(${translateY}px)`;
item.style.transform = `translate3d(0,${translateY}px,0)`;
item.style.position = 'absolute';
item.style.left = '0';
item.style.right = '0';
item.style.right = '0';
item.style.minHeight = virtualItemMinHeight+"px";
itemData.virtualItemMinHeight = virtualItemMinHeight;

// Item'ın ID'sini ve sınıfını ayarla
item.setAttribute('data-virtualid', virtualid);
let randidcreat = Math.floor(Math.random() * 99) +""+  Math.floor(Math.random() * 50);
if(itemData.id > 0){ item.id = `${itemData.virtualtype}-${itemData.id}`; } else { item.id = `${itemData.virtualtype}-${randidcreat}`; }
item.className = virtualItemClass;

// Sayfa Yönlendirme Ve useHash
if(itemData.id > 0){ item.setAttribute('data-router', `post/id:${itemData.id}/tab:${moduleid}:${id}`); }

// Item'ın içeriğini templateViewPost fonksiyonu ile doldur
item.innerHTML = await templateViewPost(itemData);

// Sayfaya itemi yönüne göre ekle
if (position === "bottom") {
infinityScroller.insertAdjacentElement('beforeend', item);
} else if (position === "top") {
infinityScroller.insertAdjacentElement('afterbegin', item);
}

// Yeni eklenen item'ın DOM öğesini al
let currentElement = await infinityScroller.querySelector(`#${item.id}`);

// sanal kaydırma id tanımla
itemData.virtualid = virtualid;
// Item'ın veri objesine gerekli bilgileri ekle
itemData.dom = currentElement;
itemData.offsetHeight = currentElement.offsetHeight;
itemData.topOffsetLie = translateY;
itemData.allOffsetLie = translateY + currentElement.offsetHeight;

// Infinity scroller'ın yüksekliğini güncelle
totalItemHeight = Number(virtualScroller.dataset.totalitemheight);
totalItemHeight += currentElement.offsetHeight;
virtualScroller.dataset.totalitemheight = totalItemHeight;
infinityScroller.style.height = totalItemHeight + "px";
//if(autonumbs == data.length) 
virtualScroller.dataset.scrollheight = totalItemHeight;

// Veri dizisine yeni item'ı ekle
rsData.push(itemData);
if(observer){observer.observe(currentElement);}

// Server işlemi tamamlandı
virtualScroller.dataset.servergetstart = false;

//burayı kontrol ett sonra / post olmayan bir gönderi ıd çakışmasın
// Server tarafından son post ID'sini güncelle
if(rsData[rsData.length - 1].id > 0) virtualScroller.dataset.lastitemid = rsData[rsData.length - 1].id;

await sleep(0);
}
}


/**
 * TranslateY değerini hesaplayan fonksiyon
 * @param {Array} rsData - Eklenecek olan veri dizisi
 * @param {number} lastTranslateY - Y yükseklik verisi
* @returns {number} - Hesaplanan TranslateY değeri
*/
function calculateTranslateY(rsData) {
lastTranslateY = Number(virtualScroller.dataset.lasttranslatey);
if (rsData.length > 0 && rsData[rsData.length - 1]?.offsetHeight) {
let scrollHeight = rsData[rsData.length - 1].offsetHeight;
lastTranslateY += scrollHeight; virtualScroller.dataset.lasttranslatey = lastTranslateY;
return lastTranslateY;
} else {
return 0;
}
}







/**
 * Sayfanın altına ulaşıldığını kontrol eden fonksiyon.
 * 
 * @param {number} scrollTop - Sayfanın üstünden itibaren yükseklik.
 * @param {number} scrollHeight - Sayfanın toplam yüksekliği.
 * @param {number} clientHeight - Sayfa görünür yüksekliği.
 * @returns {boolean} - Sayfanın altına ulaşıldıysa true, aksi takdirde false.
*/
function isPageBottom(scrollTop, scrollHeight, clientHeight) {  
return scrollTop + clientHeight + 50 >= scrollHeight;
}

/**
 * Sayfayı en üstüne kaydıran fonksiyon (behavior: 'smooth' kayma).
*/
async function scrollToTop() {
await virtualScroller.scrollTo({ top: 0, behavior: 'instant' });
}

/**
 * ID'ye göre büyükten küçüğe sıralama yapan fonksiyon.
 * 
 * @param {object} a - Karşılaştırılacak nesne 1.
 * @param {object} b - Karşılaştırılacak nesne 2.
 * @returns {number} - Sıralama sonucu.
*/
function sortByVirtualIDDescending(a, b) {
return b.virtualid - a.virtualid;
}

/**
 * Scroll değerine en yakın öğe bulan fonksiyon.
 * 
 * @param {number} scroll - Sayfa üzerindeki scroll değeri.
 * @returns {Array} - Scroll değerine en yakın sayfaların dizisi.
*/

/* 009 update:22.12.2023 - started: 01:11:2023 */
function findNearestPages(scroll, rData, innerHeight) {
// Tüm öğe allOffsetLie değerine göre sırala
const sortedPages = rData.slice().sort((a, b) => a.allOffsetLie - b.allOffsetLie);
// Scroll değerine en yakın virtualItemLoadCount sayısı kadar öğe al
let nearestPages = sortedPages
.map(page => ({ page, diff: Math.abs(page.allOffsetLie - scroll-(Math.floor(innerHeight/2))) }))
.sort((a, b) => a.diff - b.diff)
.slice(0, virtualItemLoadCount)
.map(item => item.page)
.sort((a, b) => a.virtualid - b.virtualid); // Küçükten büyüğe sıralama;
return nearestPages;
}


/* 100*//*
function findNearestPages(scroll, rData, innerHeight) {
// Tüm öğe allOffsetLie değerine göre sırala
const sortedPages = rData.slice().sort((a, b) => a.allOffsetLie - b.allOffsetLie);
// Scroll değerine en yakın virtualItemLoadCount = 10 öğe al
let nearestPages = sortedPages
.map(page => ({ page, diff: Math.abs(page.allOffsetLie - scroll) }))
.sort((a, b) => a.diff - b.diff)
.slice(0, virtualItemLoadCount)
.map(item => item.page)
.sort((a, b) => a.virtualid - b.virtualid); // Küçükten büyüğe sıralama;
let newNearestPages = getNextDataByVirtualId(nearestPages[nearestPages.length - 1].virtualid, rData, virtualItemLoadCount); 
nearestPages = nearestPages.concat(newNearestPages);
console.log(nearestPages);
return nearestPages;
}
*/


/* 101*//*
function findNearestPages(scroll, rData, innerHeight) {
const screenHeight = Math.floor(innerHeight*2.6); // Ekran yüksekliği

// Tüm öğeleri allOffsetLie değerine göre sırala
const sortedPages = rData.slice().sort((a, b) => a.allOffsetLie - b.allOffsetLie);
console.log(scrollDirection ? innerHeight : innerHeight/3);
// Scroll değerine en yakın ve ekrana sığacak kadar öğe al
let nearestPages = sortedPages
.map(page => ({ page, diff: Math.abs(page.allOffsetLie - scroll) })) //-(Math.floor(innerHeight/1.7))
.sort((a, b) => a.diff - b.diff)
.reduce((acc, curr) => {
const totalHeight = acc.totalHeight + curr.page.offsetHeight;
if (totalHeight <= screenHeight) {
acc.pages.push(curr.page);
acc.totalHeight = totalHeight;
}
return acc;
}, { pages: [], totalHeight: 0 })
.pages
.sort((a, b) => a.virtualid - b.virtualid); // Küçükten büyüğe sıralama
console.log(nearestPages);
return nearestPages;
}
*/

/* v102 */
/*
function findNearestPages(scroll, rData, innerHeight) {
const sortedPages = rData.slice().sort((a, b) => a.allOffsetLie - b.allOffsetLie);

// Scroll değerine en yakın virtualItemLoadCount = 10 öğe al
let nearestPages = sortedPages
.map(page => ({ page, diff: Math.abs(page.allOffsetLie - scroll) }))
.sort((a, b) => a.diff - b.diff)
.slice(0, 1)
.map(item => item.page)
.sort((a, b) => a.virtualid - b.virtualid); // Küçükten büyüğe sıralama;

// En yakın sayıdan daha düşük ve daha yüksek verileri topla
let newloadcoun = virtualItemLoadCount+10;
let newdricwa = Math.floor(scrollDirection ? 2 : 2);
console.log( newloadcoun/newdricwa);

const indexOfNearest = sortedPages.indexOf(nearestPages[0]);
const upperPages = sortedPages.slice(indexOfNearest - newloadcoun/newdricwa, indexOfNearest);
const lowerPages = sortedPages.slice(indexOfNearest + 1, indexOfNearest +1  + newloadcoun/newdricwa);

// Ortadaki veriyi ekleyin
const finalPages = [...upperPages, ...nearestPages, ...lowerPages];

console.log(finalPages);

return finalPages;
}
*/


/**
 * Belirli bir ID'den sonraki nextItemLoadCount veriyi getirme fonksiyonu
 * @param {number} startId - Başlangıç ID'si
 * @param {Array} data - Veri dizisi
 * @returns {Array} - Başlangıç ID'sinden sonraki nextItemLoadCount veri
 */
function getNextDataById(startId, data, nextItemLoadCount) {
const startIndex = data.findIndex(item => item.id === startId);
if (startIndex === -1) {return [];}
const endIndex = Math.min(startIndex + nextItemLoadCount+1, data.length);
return data.slice(startIndex + 1, endIndex);
}
/**
 * Belirli bir virtualid'den sonraki nextItemLoadCount veriyi getirme fonksiyonu
 * @param {number} startId - Başlangıç ID'si
* @param {Array} data - Veri dizisi
* @returns {Array} - Başlangıç ID'sinden sonraki nextItemLoadCount veri
*/
function getNextDataByVirtualId(startId, data, nextItemLoadCount) {
const startIndex = data.findIndex(item => item.virtualid === startId);
if (startIndex === -1) {return [];}
const endIndex = Math.min(startIndex + nextItemLoadCount+1, data.length);
return data.slice(startIndex + 1, endIndex);
}


/**
 * Belirli bir ID'den önceki prevItemLoadCount veriyi getirme fonksiyonu
 * @param {number} startId - Başlangıç ID'si
 * @param {Array} data - Veri dizisi
 * @returns {Array} - Başlangıç ID'sinden önceki prevItemLoadCount veri
 */
function getPrevDataById(startId, data, prevItemLoadCount) {
const startIndex = data.findIndex(item => item.virtualid === startId);
if (startIndex === -1 || startIndex === 0) {
return [];
}
const endIndex = Math.max(startIndex - prevItemLoadCount, 0);
return data.slice(endIndex, startIndex);
}

/**
 * Belirli bir parent içindeki belirli elementleri kaldıran fonksiyon.
 * 
 * @param {HTMLElement} parent - Elementin içinde bulunduğu parent element.
 * @param {Array} elements - Kaldırılacak elementlerin listesi.
*/
function removeElements(parent, elements) {
elements.forEach((element) => {
if (element.parentNode === parent) {
parent.removeChild(element);
}
});
}

/**
 * Sanal kaydırma olaylarına tepki gösteren ve gerekli işlemleri yapan ana fonksiyon.
 * 
 * @param {number} scroll - Sayfa üzerindeki scroll değeri.
 * @param {number} scrollHeight - Sayfanın toplam yüksekliği.
 * @param {number} clientHeight - Sayfa görünür yüksekliği.
 * @param {array} rData - İşlenmiş Veriler.
*/
async function rendererViews(scroll,scrollHeight,clientHeight,rData) { 
//requestAnimationFrame(function() {});

// kaydırma esnasında verileri ekle çıkar anlık olarak güncelleme fonksiyonu
const addFlag = scrollDirection ? 'beforeend' : 'afterbegin'; // scroll aşşağı yukarı hareketine göre divlerin ekleniş yönü
const existingElements = Array.from(infinityScroller.children);
const nearestPages = findNearestPages(scroll,rData,clientHeight);

// Silinmesi gereken elementleri belirle
const elementsToRemove = existingElements.filter((element) => {
return !nearestPages.some((page) => page.dom === element);
});
// Silinmesi gereken elementleri infinityScroller'dan kaldır
removeElements(infinityScroller, elementsToRemove);
// Yeni elementleri ekleyin

nearestPages.sort(sortByVirtualIDDescending).forEach((i) => {
if (i.dom && !existingElements.includes(i.dom)) {
infinityScroller.insertAdjacentElement(addFlag, i.dom);
}
});
}


let viseLaydi = 0;

async function rendererScroll(scroll,scrollHeight,clientHeight,rData){ 
// Sayfanın altına ulaşıldıysa ve belirli koşullar sağlandıysa
if(isPageBottom(scroll,scrollHeight,clientHeight)){ 
const servergetinfine = JSON.parse(virtualScroller.dataset.servergetinfine); 
if(!servergetinfine){ 
const servergetstart = JSON.parse(virtualScroller.dataset.servergetstart); 
if(!servergetstart){ 
const virtualLoaders = infinityScrollerLoader.querySelector('virtual-loader');
if(!virtualLoaders){ 
//loader oluştur
infinityScrollerLoader.innerHTML = '<virtual-loader><loader class="spinners-3"></loader></virtual-loader>';
infinityScrollerLoader.style.bottom = "0px"; 
//header etiketine yükleme başladığını bildir
header.dataset.infinityscrollerloader = true;
if(isScrollType == "scroll2"){ animateCancelScroll(); }
//en alta git / 
virtualScroller.scrollTo({top: Number(scrollHeight),behavior: 'instant'}); 
//yükleme adımında ekran hareketi kapat / virtualScroller.style.pointerEvents = "none";
//virtualScroller etiketine yükleme başladığını bildir
virtualScroller.dataset.servergetstart = true;
//sunucu bağlantısı // delay 1s
setTimeout(() => { 
getFeedServerNew(Number(virtualScroller.dataset.lastitemid)); 
}, 1000);
}
}
}
}


// scroll aşşağı belli bir px kaydıktan sonra header,tabBars gizle
//if(JSON.parse(header.dataset.infinityscrollerloader) == false){} // yeni veri yükleme sırasında gizleme gösterme kısmını kapat
if(scroll - lastScrollPosition > 0){
if(isScrollType == "scroll1"){ scrollDirection = true }
} else {
if(isScrollType == "scroll1"){ scrollDirection = false }
}

if(scroll <= 70){
header.style.transform = 'translateY(0px)';
tabBars.style.transform = 'translateY(0px)';
header.dataset.disabled = false;
viseLaydi = 70;
scrollDirection = false;
}

if(scrollDirection){
if(JSON.parse(header.dataset.disabled) != true){ 
header.style.transform = `translateY(-${header.clientHeight}px)`;
tabBars.style.transform = `translateY(${tabBars.clientHeight}px)`;
header.dataset.disabled = true;
//tabBars.style.opacity = '0.3';
}
viseLaydi = 0;
} else {
if(JSON.parse(header.dataset.disabled) == true && viseLaydi < 70){ 
viseLaydi++;
}

if(viseLaydi >= 70){ 
if(JSON.parse(header.dataset.disabled) != false){
header.style.transform = 'translateY(0px)';
tabBars.style.transform = 'translateY(0px)';
header.dataset.disabled = false;
viseLaydi = 0;
//tabBars.style.opacity = '1';
}
}
}

// scroll son veri kaydet, scroll yönünü anlamak için
// Scroll değeri en üstteyken sıfırla, aksi takdirde güncelle
lastScrollPosition =scroll;
}


//Initialize the pull-to-refresh feature by calling the function
const pullToRefresh = setupPullToRefresh(documents);

//refresh event callback
pullToRefresh.refresh(() => {
console.log('Refreshing data command');

setTimeout(() => {
//complete event callback
pullToRefresh.complete(() => {
console.log('data refresh finished / this event ends the refresh process');
getFeed();
});
}, 1000);

});





documents.querySelector('#changeStatusBarColor').addEventListener("click", async function() { 
if(await isDarkMode()){
toast('Light Mode Activated',2000,'bottom');
darkModeSet(false);
AndroidChangeStatusBarColor('#ffffff'); 
} else {
toast('Dark Mode Activated',2000,'bottom');
darkModeSet(true);
AndroidChangeStatusBarColor('#101010'); 
}
});

documents.querySelector('#fpsOnBtns').addEventListener("click", async function() { 
if(JSON.parse(getItem("fps")) == true){
setItem("fps",false); toast('FPS Not Activated',2000,'bottom');
} else {
setItem("fps",true); toast('FPS Activated',2000,'bottom');
}
fpsMeter.toggleFPSCounter();
});



});




/*
documents.querySelector('#openGallery').addEventListener("click", function() {
documents.style.background = "blue";
AndroidBridge.openGallery();
});
function AndroidBridgeUpdateImage(imageUri) {console.log("Seçilen resim URI: " + imageUri);}
*/
}
}