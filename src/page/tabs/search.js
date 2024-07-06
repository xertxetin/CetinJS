window["search"] = async (id,documents,documentTabs,moduleid) => {
if(!documents.innerHTML){ 
ariSet(id,`
<tab-content id="content-${id}">
<all-content>
<virtual-scroller>
<infinity-scroller></infinity-scroller>
</virtual-scroller>
</all-content>
</tab-content>
`);


//içeri yükle veya biraz geçikmeli yükle
oneWellLoad(0,async function(){
const virtualScroller = documents.querySelector('virtual-scroller');
const infinityScroller = documents.querySelector('infinity-scroller');
virtualScroller.style.overflow = "auto";

// Feed verilerini al ve sayfaya ekle
let data = await feeddata;
addData(data.slice(0, 300), "bottom", "virtual-items");



/**
 * Yeni feed verilerini sayfaya eklemek için kullanılan fonksiyon.
* @param {Array} data - Eklenecek olan veri dizisi
* @param {string} position - Ekleme pozisyonu ('bottom' veya 'top')
* @param {string} virtualItemClass - Feed item'ları için kullanılan sınıf adı
* @param {number} totalItemHeight - Toplam yükseklik verisi
* @param {Array} rsData - Eklenecek olan veri dizisi
*/


async function addData(data, position, virtualItemClass){ 
for(let itemData of data){
// Yeni bir item oluştur
const item = await document.createElement(itemData.virtualtype);
item.className = virtualItemClass;
// Item'ın içeriğini templateViewPost fonksiyonu ile doldur
itemData.virtualItemMinHeight = 0;
item.innerHTML = await templateViewPost(itemData);
// Sayfaya itemi yönüne göre ekle
if (position === "bottom") {
infinityScroller.insertAdjacentElement('beforeend', item);
} else if (position === "top") {
infinityScroller.insertAdjacentElement('afterbegin', item);
}
await sleep(0);
}
}


});
}
}