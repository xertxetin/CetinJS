// Router Page
const systemPages = [
{ path: "home", icon: ihouse, label: "", type: "tabs" },
{ path: "search", icon: isearch, label: "", type: "tabs" },
{ path: "upload", icon: igridplus, label: "", type: "tabs" },
{ path: "notification", icon: iheart, label: "", type: "tabs" },
{ path: "profile", icon: iperson, label: "", type: "tabs" },
{ path: "login", type: "page" },
{ path: "singup", type: "page" },
{ path: "post", type: "page" }
];

// fps ölçer - Varsayılan olarak etkin mi yoksa bu özellik daha önce etkinleştirildiyse çalıştırılıyor mu?
const fpsMeter = createFPSMeter(); // Örnek olarak FPS sayacını aç/kapat : fpsMeter.toggleFPSCounter();

// karanlık mod - Varsayılan olarak etkin mi yoksa bu özellik daha önce etkinleştirildiyse çalıştırılıyor mu?
darkMode();

// Sayfa Gezinme Yönlendirme Aktif Et
router();

// SEO URL Router Aktif Et / URL Boş işe sayfa path tanımlayın
ApplicationPages(systemPages[0].path);
//ApplicationPages(systemPages[5].path);

if(getItem("session")){

} else {

}