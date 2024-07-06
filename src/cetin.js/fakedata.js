const feeddata = [
{ 
id: 0, 
icon: '',
title: 'Sanal Kaydırma', 
titlelong: 'En hızlı ve en rahat çalışan bir sistemdir.',
button: [{id:"scroll1Change", text: "Test Alert", classname: "dark textBold"},{id:"scroll2Change", text: "Test Modal", classname: "blue textBold"}],
virtualtype: 'alert-box'
},
{
id: 1, 
username: 'JamesHilto', 
date: '2023-06-19T12:30:45.678Z', 
text: 'Güzellik içeridedir. Hayatın güzellikleri küçük anlamlarda gizlidir.', 
image: [{url: "https://picsum.photos/230/400"},{url: "https://picsum.photos/420/300"},{url: "https://picsum.photos/230/300"}],
video: '',
avatar: 'https://picsum.photos/30'
,virtualtype: 'feed-box'
},
{
id: 2, 
username: 'JaneSmith', 
date: '2023-06-20T03:15:20.123Z', 
text: 'Hayatta olumlu olmak, hayatı olumluya çevirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/31'
,virtualtype: 'feed-box'
},
{
id: 3, 
username: 'MichaelJordan', 
date: '2023-06-21T18:42:10.555Z', 
text: '',
image: [],
video: '',
avatar: 'https://picsum.photos/32'
,virtualtype: 'feed-box'
},
{
id: 4, 
username: 'EmilyJones', 
date: '2023-06-22T09:05:35.789Z', 
text: 'Basit şeylerin tadını çıkarın, çünkü onlar aslında büyük anlamlar taşır.',
image: [],
video: 'https://www.w3schools.com/tags/movie.mp4',
avatar: 'https://picsum.photos/33'
,virtualtype: 'feed-box'
},
{
id: 5, 
username: 'ChrisHemsworth', 
date: '2023-06-23T15:55:12.345Z', 
text: 'Hayat, şu anda sahip olduklarınızla güzeldir. Şükretmek, huzurun anahtarıdır.',
image: [{url: "https://picsum.photos/420/400"},{url: "https://picsum.photos/400/510"}],
video: '',
avatar: 'https://picsum.photos/34'
,virtualtype: 'feed-box'
},
{
id: 6, 
username: 'EmmaWatson', 
date: '2023-06-24T21:20:17.932Z', 
text: 'Güzel olmak, kalbin güzelliğinden kaynaklanır. İyi kalpli olmak her zaman önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/35'
,virtualtype: 'feed-box'
},
{ 
id: 0, 
icon: '',
title: 'Esnek Kullanım', 
titlelong: 'Yükseklik Derdi Yok Rahat Tasarım.',
button: [],
virtualtype: 'alert-box'
},
{
id: 7, 
username: 'TomHanks', 
date: '2023-06-25T06:12:56.211Z', 
text: 'Yaptığınız işi sevin ve sevgiyle yapın. Başarı, sevgi ve tutkuyla elde edilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/36'
,virtualtype: 'feed-box'
},
{
id: 8, 
username: 'NataliePortman', 
date: '2023-06-26T11:45:32.987Z', 
text: 'Küçük şeylere değer verin, çünkü onlar büyük mutluluklar getirebilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/37'
,virtualtype: 'feed-box'
},
{
id: 9, 
username: 'LeonardoDiCaprio', 
date: '2023-06-27T17:33:44.567Z', 
text: 'Doğaya saygı gösterin, çünkü doğa bizim en değerli varlığımızdır.',
image: [],
video: 'https://www.w3schools.com/html/mov_bbb.mp4',
avatar: 'https://picsum.photos/38'
,virtualtype: 'feed-box'
},
{
id: 10, 
username: 'AliciaKeys', 
date: '2023-06-28T08:20:21.876Z', 
text: 'Müzikle ruhunuzu besleyin. Müzik, duygularımızı ifade etmenin harika bir yoludur.',
image: [{url: "https://picsum.photos/220/200"},{url: "https://picsum.photos/300/330"}],
video: '',
avatar: 'https://picsum.photos/39'
,virtualtype: 'feed-box'
},
{
id: 11, 
username: 'MatthewMcConaughey', 
date: '2023-07-05T14:10:37.542Z', 
text: 'Zaman geçerken hayatın tadını çıkarın. Her anın kıymetini bilin.', 
image: [],
video: '',
avatar: 'https://picsum.photos/30'
,virtualtype: 'feed-box'
},
{
id: 12, 
username: 'ScarlettJohansson', 
date: '2023-07-06T19:25:44.789Z', 
text: 'Güçlü olun, çünkü zorluklar sizi güçlendirir. Her zorluk bir fırsattır.',
image: [{url: "https://picsum.photos/210/400"},{url: "https://picsum.photos/300/210"}],
video: '',
avatar: 'https://picsum.photos/31'
,virtualtype: 'feed-box'
},
{
id: 13, 
username: 'WillSmith', 
date: '2023-07-07T09:40:12.356Z', 
text: 'Başarı, elde ettiğiniz değerlere ve etkilediğiniz insanlara dayanır.',
image: [],
video: '',
avatar: 'https://picsum.photos/32'
,virtualtype: 'feed-box'
},
{
id: 14, 
username: 'EllenDeGeneres', 
date: '2023-07-08T16:55:30.123Z', 
text: 'Gülümseme, dünyanın en güzel aksesuarıdır. İnsanları gülümsetin.',
image: [],
video: '',
avatar: 'https://picsum.photos/33'
,virtualtype: 'feed-box'
},
{
id: 15, 
username: 'KeanuReeves', 
date: '2023-07-09T22:30:18.987Z', 
text: 'İyi bir insan olmak, dünyayı daha iyi bir yer haline getirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/34'
,virtualtype: 'feed-box'
},
{
id: 16, 
username: 'JenniferAniston', 
date: '2023-07-10T11:15:47.654Z', 
text: 'Sevdiklerinize zaman ayırın. Hayat, güzel anılarla dolu olmalıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/35'
,virtualtype: 'feed-box'
},
{
id: 17, 
username: 'RobertDowneyJr', 
date: '2023-07-11T04:20:55.987Z', 
text: 'Her gün bir adım atın. Başarı, küçük adımların birleşiminden gelir.',
image: [],
video: '',
avatar: 'https://picsum.photos/36'
,virtualtype: 'feed-box'
},
{
id: 18, 
username: 'Zendaya', 
date: '2023-07-12T14:45:33.222Z', 
text: 'Hayalinizdeki kişi olun. Kendinizi keşfedin ve sevin.',
image: [],
video: '',
avatar: 'https://picsum.photos/37'
,virtualtype: 'feed-box'
},
{
id: 19, 
username: 'ChrisEvans', 
date: '2023-07-13T20:05:41.555Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, güçtür.',
image: [],
video: '',
avatar: 'https://picsum.photos/38'
,virtualtype: 'feed-box'
},
{
id: 20, 
username: 'GalGadot', 
date: '2023-07-14T09:55:18.789Z', 
text: 'Dünya, iyilik ve sevgiyle daha güzel bir yer olabilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/39'
,virtualtype: 'feed-box'
},
{
id: 21, 
username: 'SamuelLJackson', 
date: '2023-07-15T15:10:37.542Z', 
text: 'Hayatın zorluklarına meydan okuyun. Zorluklar, başarıya giden yolda birer fırsattır.', 
image: [{url: "https://picsum.photos/210/250"},{url: "https://picsum.photos/340/320"}],
video: '',
avatar: 'https://picsum.photos/30'
,virtualtype: 'feed-box'
},
{
id: 22, 
username: 'CharlizeTheron', 
date: '2023-07-16T20:25:44.789Z', 
text: 'Hayatınızın kontrolünü elinizde tutun. Siz kendi kaptanınızdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/31'
,virtualtype: 'feed-box'
},
{
id: 23, 
username: 'DenzelWashington', 
date: '2023-07-17T09:40:12.356Z', 
text: 'Daima adaletli olun. Adalet, toplumun temel direğidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/32'
,virtualtype: 'feed-box'
},
{
id: 24, 
username: 'NicoleKidman', 
date: '2023-07-18T16:55:30.123Z', 
text: 'İlham alın ve başkalarına ilham verin. Değişimi başlatan küçük bir adım atın.',
image: [],
video: '',
avatar: 'https://picsum.photos/33'
,virtualtype: 'feed-box'
},
{
id: 25, 
username: 'TomCruise', 
date: '2023-07-19T22:30:18.987Z', 
text: 'Her gün küçük bir gelişme kaydedin. Sürekli ilerleme, büyük başarıya yol açar.',
image: [],
video: '',
avatar: 'https://picsum.photos/34'
,virtualtype: 'feed-box'
},
{
id: 26, 
username: 'AnneHathaway', 
date: '2023-07-20T11:15:47.654Z', 
text: 'Doğa ile bağlantı kurun. Doğa, ruhunuzu yeniler ve enerji verir.',
image: [],
video: '',
avatar: 'https://picsum.photos/35'
,virtualtype: 'feed-box'
},
{
id: 27, 
username: 'HughJackman', 
date: '2023-07-21T04:20:55.987Z', 
text: 'Başkalarına yardım edin. İyilik yapmak, toplumunuzu güzelleştirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/36'
,virtualtype: 'feed-box'
},
{
id: 28, 
username: 'CateBlanchett', 
date: '2023-07-22T14:45:33.222Z', 
text: 'Güçlü olun, ancak nazik kalın. Güçlü olmak, nazik olmanızı engellemez.',
image: [],
video: '',
avatar: 'https://picsum.photos/37'
,virtualtype: 'feed-box'
},
{
id: 29, 
username: 'EddieRedmayne', 
date: '2023-07-23T20:05:41.555Z', 
text: 'Kendinizi keşfedin ve kendiniz olun. Gerçek güzellik, gerçek kişiliktedir.',
image: [],
video: '',
avatar: 'https://picsum.photos/38'
,virtualtype: 'feed-box'
},
{
id: 30, 
username: 'JuliaRoberts', 
date: '2023-07-24T09:55:18.789Z', 
text: 'Her gün gülümseyin. Gülümseme, ruhunuzu ve çevrenizi aydınlatır.',
image: [],
video: '',
avatar: 'https://picsum.photos/39'
,virtualtype: 'feed-box'
},
{
id: 31, 
username: 'MilaKunis', 
date: '2023-07-25T15:10:37.542Z', 
text: 'Hayal etmek, başarının ilk adımıdır. Büyük hayaller kurun ve onlara ulaşın.', 
image: [],
video: '',
avatar: 'https://picsum.photos/31'
,virtualtype: 'feed-box'
},
{
id: 32, 
username: 'BradPitt', 
date: '2023-07-26T20:25:44.789Z', 
text: 'Geçmişe takılı kalmayın. Geleceğe odaklanın ve yeni başlangıçlar yapın.',
image: [],
video: '',
avatar: 'https://picsum.photos/32'
,virtualtype: 'feed-box'
},
{
id: 33, 
username: 'JenniferLawrence', 
date: '2023-07-27T09:40:12.356Z', 
text: 'Bir şeyi gerçekten istiyorsanız, onun için çalışın. Azim, başarının anahtarıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/33'
,virtualtype: 'feed-box'
},
{
id: 34, 
username: 'RyanGosling', 
date: '2023-07-28T16:55:30.123Z', 
text: 'Hayat kısa, kucaklayın. Sevdiklerinize ve tutkularınıza zaman ayırın.',
image: [],
video: '',
avatar: 'https://picsum.photos/34'
,virtualtype: 'feed-box'
},
{
id: 35, 
username: 'Adele', 
date: '2023-07-29T22:30:18.987Z', 
text: 'Mücadeleler sizi güçlendirir. Hayatın zorluklarına göğüs germek, karakterinizi inşa eder.',
image: [],
video: '',
avatar: 'https://picsum.photos/35'
,virtualtype: 'feed-box'
},
{
id: 36, 
username: 'MarkWahlberg', 
date: '2023-07-30T11:15:47.654Z', 
text: 'Her gün bir şey öğrenin. Bilgi, sürekli gelişimin anahtarıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/36'
,virtualtype: 'feed-box'
},
{
id: 37, 
username: 'EmmaStone', 
date: '2023-07-31T04:20:55.987Z', 
text: 'Küçük zaferleri kutlayın. Her başarı, bir adım daha ileri gitmenizi simgeler.',
image: [],
video: '',
avatar: 'https://picsum.photos/37'
,virtualtype: 'feed-box'
},
{
id: 38, 
username: 'ChrisPratt', 
date: '2023-08-01T14:45:33.222Z', 
text: 'Doğaya saygılı olun. Doğa, yaşam kaynağımızdır ve korunmalıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/38'
,virtualtype: 'feed-box'
},
{
id: 39, 
username: 'HalleBerry', 
date: '2023-08-02T20:05:41.555Z', 
text: 'Kendinizi ifade edin. Düşüncelerinizi ve duygularınızı paylaşın.',
image: [],
video: '',
avatar: 'https://picsum.photos/39'
,virtualtype: 'feed-box'
},
{
id: 40, 
username: 'ZacEfron', 
date: '2023-08-03T09:55:18.789Z', 
text: 'Eğlenceli olun. Hayatın tadını çıkarın ve gülümsemeyi unutmayın.',
image: [],
video: '',
avatar: 'https://picsum.photos/40'
,virtualtype: 'feed-box'
},
{
id: 41, 
username: 'JessicaAlba', 
date: '2023-08-04T15:10:37.542Z', 
text: 'Küçük mutlulukları takdir edin. Hayat, küçük anlamlarla doludur.', 
image: [{url: "https://picsum.photos/210/220"},{url: "https://picsum.photos/380/310"}],
video: '',
avatar: 'https://picsum.photos/30'
,virtualtype: 'feed-box'
},
{
id: 42, 
username: 'JakeGyllenhaal', 
date: '2023-08-05T20:25:44.789Z', 
text: 'Her gün bir adım daha ileri gidin. Yavaş ilerleme bile ilerlemedir.',
image: [],
video: '',
avatar: 'https://picsum.photos/31'
,virtualtype: 'feed-box'
},
{
id: 43, 
username: 'SandraBullock', 
date: '2023-08-06T09:40:12.356Z', 
text: 'Daima nezaket gösterin. İyi davranışlar, güçlü ilişkiler kurmanın anahtarıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/32'
,virtualtype: 'feed-box'
},
{
id: 44, 
username: 'ChrisHemsworth', 
date: '2023-08-07T16:55:30.123Z', 
text: 'Fiziksel sağlığınıza dikkat edin. Sağlıklı bir beden, sağlıklı bir zihinle birleşir.',
image: [],
video: '',
avatar: 'https://picsum.photos/33'
,virtualtype: 'feed-box'
},
{
id: 45, 
username: 'Zendaya', 
date: '2023-08-08T22:30:18.987Z', 
text: 'Her gün yeni bir şey deneyin. Yeni deneyimler, yaşamınızı zenginleştirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/34'
,virtualtype: 'feed-box'
},
{
id: 46, 
username: 'TomHolland', 
date: '2023-08-09T11:15:47.654Z', 
text: 'Başkalarına yardım eli uzatın. İyilik, dünyayı daha iyi bir yer haline getirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/35'
,virtualtype: 'feed-box'
},
{
id: 47, 
username: 'NataliePortman', 
date: '2023-08-10T04:20:55.987Z', 
text: 'Kendinizi geliştirin. Her gün bir şeyler öğrenmek, kişisel büyüme sağlar.',
image: [],
video: '',
avatar: 'https://picsum.photos/36'
,virtualtype: 'feed-box'
},
{
id: 48, 
username: 'ChrisPratt', 
date: '2023-08-11T14:45:33.222Z', 
text: 'Doğa ile bağlantı kurun. Doğa, ruhunuzu yeniler ve enerji verir.',
image: [],
video: '',
avatar: 'https://picsum.photos/37'
,virtualtype: 'feed-box'
},
{
id: 49, 
username: 'EmmaStone', 
date: '2023-08-12T20:05:41.555Z', 
text: 'Başkalarına yardım edin. İyilik yapmak, toplumunuzu güzelleştirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/38'
,virtualtype: 'feed-box'
},
{
id: 50, 
username: 'BradleyCooper', 
date: '2023-08-13T09:55:18.789Z', 
text: 'Kendi içsel huzurunuzu bulun. İçsel huzur, dışsal koşullara bağlı değildir.',
image: [],
video: '',
avatar: 'https://picsum.photos/39'
,virtualtype: 'feed-box'
},
{
id: 51, 
username: 'MeganFox', 
date: '2023-08-14T15:10:37.542Z', 
text: 'Doğa yürüyüşleri yapın. Taze hava ve doğanın güzelliği ruhunuzu canlandırır.', 
image: [{url: "https://picsum.photos/230/290"},{url: "https://picsum.photos/380/370"}],
video: '',
avatar: 'https://picsum.photos/40'
,virtualtype: 'feed-box'
},
{
id: 52, 
username: 'HenryCavill', 
date: '2023-08-15T20:25:44.789Z', 
text: 'Güçlü olun, ancak mütevazı kalın. Güç ve tevazu, bir arada olmalıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/41'
,virtualtype: 'feed-box'
},
{
id: 53, 
username: 'AngelinaJolie', 
date: '2023-08-16T09:40:12.356Z', 
text: 'Hayatta sevdiklerinize zaman ayırın. Onlar, gerçek değerinizdir.',
image: [],
video: '',
avatar: 'https://picsum.photos/42'
,virtualtype: 'feed-box'
},
{
id: 54, 
username: 'ChrisEvans', 
date: '2023-08-17T16:55:30.123Z', 
text: 'Her gün bir gülümseme saçın. Gülümseme, hayatı güzelleştirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/43'
,virtualtype: 'feed-box'
},
{
id: 55, 
username: 'EmmaWatson', 
date: '2023-08-18T22:30:18.987Z', 
text: 'Kitap okuma alışkanlığı edinin. Kitaplar, bilgi ve hayal gücünüzü geliştirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/44'
,virtualtype: 'feed-box'
},
{
id: 56, 
username: 'TomBrady', 
date: '2023-08-19T11:15:47.654Z', 
text: 'Spor yapın. Fiziksel aktivite, hem bedeninizi hem de zihninizi güçlendirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/45'
,virtualtype: 'feed-box'
},
{
id: 57, 
username: 'CharlizeTheron', 
date: '2023-08-20T04:20:55.987Z', 
text: 'Daima nezaket gösterin. İyi davranışlar, güçlü ilişkiler kurmanın anahtarıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/46'
,virtualtype: 'feed-box'
},
{
id: 58, 
username: 'RyanReynolds', 
date: '2023-08-21T14:45:33.222Z', 
text: 'Eğlenmeyi unutmayın. Hayat, eğlenceli anlarla dolu olmalıdır.',
image: [{url: "https://picsum.photos/260/320"},{url: "https://picsum.photos/200/330"}],
video: '',
avatar: 'https://picsum.photos/47'
,virtualtype: 'feed-box'
},
{
id: 59, 
username: 'GalGadot', 
date: '2023-08-22T20:05:41.555Z', 
text: 'İyilik yapın. Küçük bir iyilik, büyük bir fark yaratabilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/48'
,virtualtype: 'feed-box'
},
{
id: 60, 
username: 'JohnnyDepp', 
date: '2023-08-23T09:55:18.789Z', 
text: 'Kendi hayalinizi yaratın. Hayal kurmak, sizi ileri taşır.',
image: [],
video: '',
avatar: 'https://picsum.photos/49'
,virtualtype: 'feed-box'
},
{
id: 61, 
username: 'RobertPattinson', 
date: '2023-08-24T15:10:37.542Z', 
text: 'Sanatla ilgilenin. Sanat, duygusal zenginliğinizi artırabilir.', 
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 62, 
username: 'GigiHadid', 
date: '2023-08-25T20:25:44.789Z', 
text: 'Yaratıcı olun. Yaratıcılık, hayatın renklerini keşfetmenin bir yoludur.',
image: [],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 63, 
username: 'MatthewMcConaughey', 
date: '2023-08-26T09:40:12.356Z', 
text: 'Doğaya saygılı olun. Doğa, yaşam kaynağımızdır ve korunmalıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 64, 
username: 'JenniferAniston', 
date: '2023-08-27T16:55:30.123Z', 
text: 'Her gün küçük bir gelişme kaydedin. Sürekli ilerleme, büyük başarıya yol açar.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 65, 
username: 'ChrisHemsworth', 
date: '2023-08-28T22:30:18.987Z', 
text: 'Hayatta sevdiklerinize zaman ayırın. Onlar, gerçek değerinizdir.',
image: [{url: "https://picsum.photos/280/200"},{url: "https://picsum.photos/300/340"}],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 66, 
username: 'DwayneJohnson', 
date: '2023-08-29T11:15:47.654Z', 
text: 'Her anın tadını çıkarın. Hayat kısa, anı yaşayın.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 67, 
username: 'MargotRobbie', 
date: '2023-08-30T04:20:55.987Z', 
text: 'Yeni insanlarla tanışın. Farklı bakış açıları, sizi zenginleştirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 68, 
username: 'LeonardoDiCaprio', 
date: '2023-08-31T14:45:33.222Z', 
text: 'Sürdürülebilirlik önemlidir. Gelecek nesillere temiz bir dünya bırakmalıyız.',
image: [],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 69, 
username: 'EmmaStone', 
date: '2023-09-01T20:05:41.555Z', 
text: 'Başkalarına yardım eli uzatın. İyilik, dünyayı daha iyi bir yer haline getirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 70, 
username: 'ZacEfron', 
date: '2023-09-02T09:55:18.789Z', 
text: 'Eğlenceli olun. Hayatın tadını çıkarın ve gülümsemeyi unutmayın.',
image: [],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 71, 
username: 'JenniferLopez', 
date: '2023-09-03T15:10:37.542Z', 
text: 'Dans edin. Müzikle uyumlu hareket etmek, ruhunuzu özgürleştirir.', 
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 72, 
username: 'RobertDowneyJr', 
date: '2023-09-04T20:25:44.789Z', 
text: 'Daima açık fikirli olun. Farklı görüşleri anlamak, gelişmenize yardımcı olur.',
image: [{url: "https://picsum.photos/260/200"},{url: "https://picsum.photos/300/310"}],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 73, 
username: 'ScarlettJohansson', 
date: '2023-09-05T09:40:12.356Z', 
text: 'Hayal kurun. Büyük hayaller, büyük başarılar getirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 74, 
username: 'KeanuReeves', 
date: '2023-09-06T16:55:30.123Z', 
text: 'Saygılı olun. Saygı, sağlıklı ilişkilerin temelidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 75, 
username: 'NataliePortman', 
date: '2023-09-07T22:30:18.987Z', 
text: 'Kendinizi ifade edin. Düşüncelerinizi ve duygularınızı paylaşın.',
image: [{url: "https://picsum.photos/220/230"},{url: "https://picsum.photos/260/350"}],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 76, 
username: 'WillSmith', 
date: '2023-09-08T11:15:47.654Z', 
text: 'Başarı için çalışın. Başarı, planlı ve sürekli çaba gerektirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 77, 
username: 'EmmaWatson', 
date: '2023-09-09T04:20:55.987Z', 
text: 'Kitap okuma alışkanlığı edinin. Kitaplar, bilgi ve hayal gücünüzü geliştirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 78, 
username: 'ChrisPratt', 
date: '2023-09-10T14:45:33.222Z', 
text: 'Doğa ile bağlantı kurun. Doğa, ruhunuzu yeniler ve enerji verir.',
image: [],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 79, 
username: 'HalleBerry', 
date: '2023-09-11T20:05:41.555Z', 
text: 'Kendinizi ifade edin. Düşüncelerinizi ve duygularınızı paylaşın.',
image: [],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 80, 
username: 'ChrisHemsworth', 
date: '2023-09-12T09:55:18.789Z', 
text: 'Her gün küçük bir gelişme kaydedin. Sürekli ilerleme, büyük başarıya yol açar.',
image: [{url: "https://picsum.photos/210/200"},{url: "https://picsum.photos/330/300"}],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 81, 
username: 'TomCruise', 
date: '2023-09-13T15:10:37.542Z', 
text: 'Risk alın. Büyük başarılar, büyük riskler almayı gerektirir.', 
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 82, 
username: 'MargotRobbie', 
date: '2023-09-14T20:25:44.789Z', 
text: 'Yeni şeyler öğrenin. Bilgi, güç demektir.',
image: [],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 83, 
username: 'BradleyCooper', 
date: '2023-09-15T09:40:12.356Z', 
text: 'Daima pozitif kalın. Olumlu düşünce, olumlu sonuçlar doğurur.',
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 84, 
username: 'GalGadot', 
date: '2023-09-16T16:55:30.123Z', 
text: 'Yürüyüşe çıkın. Hareket etmek, sağlıklı bir yaşam için önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 85, 
username: 'ChrisEvans', 
date: '2023-09-17T22:30:18.987Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 86, 
username: 'Zendaya', 
date: '2023-09-18T11:15:47.654Z', 
text: 'Kendinizi geliştirin. Her gün bir şeyler öğrenmek, kişisel büyüme sağlar.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 87, 
username: 'KeanuReeves', 
date: '2023-09-19T04:20:55.987Z', 
text: 'Herkesi anlamaya çalışın. Empati, güçlü ilişkilerin temelidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 88, 
username: 'CharlizeTheron', 
date: '2023-09-20T14:45:33.222Z', 
text: 'Daima dürüst olun. İlkelerinizden ödün vermeyin.',
image: [],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 89, 
username: 'JakeGyllenhaal', 
date: '2023-09-21T20:05:41.555Z', 
text: 'Hayal kurun. Büyük hayaller, büyük başarılar getirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 90, 
username: 'MargotRobbie', 
date: '2023-09-22T09:55:18.789Z', 
text: 'Başkalarına yardım edin. İyilik yapmak, toplumunuzu güzelleştirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 91, 
username: 'TaylorSwift', 
date: '2023-09-23T15:10:37.542Z', 
text: 'Müzik dinleyin. Güzel melodiler, ruhunuzu iyileştirir.', 
image: [{url: "https://picsum.photos/200/200"},{url: "https://picsum.photos/300/300"}],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 92, 
username: 'DenzelWashington', 
date: '2023-09-24T20:25:44.789Z', 
text: 'Kitap okuma alışkanlığı edinin. Kitaplar, bilgi ve hayal gücünüzü geliştirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 93, 
username: 'EmmaStone', 
date: '2023-09-25T09:40:12.356Z', 
text: 'Spor yapın. Fiziksel aktivite, hem bedeninizi hem de zihninizi güçlendirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 94, 
username: 'ChrisHemsworth', 
date: '2023-09-26T16:55:30.123Z', 
text: 'Herkesi anlamaya çalışın. Empati, güçlü ilişkilerin temelidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 95, 
username: 'JenniferAniston', 
date: '2023-09-27T22:30:18.987Z', 
text: 'Doğaya saygılı olun. Doğa, yaşam kaynağımızdır ve korunmalıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 96, 
username: 'RyanGosling', 
date: '2023-09-28T11:15:47.654Z', 
text: 'Her gün bir gülümseme saçın. Gülümseme, hayatı güzelleştirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 97, 
username: 'MargotRobbie', 
date: '2023-09-29T04:20:55.987Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 98, 
username: 'ChrisPratt', 
date: '2023-09-30T14:45:33.222Z', 
text: 'Daima pozitif kalın. Olumlu düşünce, olumlu sonuçlar doğurur.',
image: [{url: "https://picsum.photos/300/200"},{url: "https://picsum.photos/200/300"}],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 99, 
username: 'AngelinaJolie', 
date: '2023-10-01T20:05:41.555Z', 
text: 'Kendinizi ifade edin. Düşüncelerinizi ve duygularınızı paylaşın.',
image: [],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 100, 
username: 'LeonardoDiCaprio', 
date: '2023-10-02T09:55:18.789Z', 
text: 'Her gün küçük bir gelişme kaydedin. Sürekli ilerleme, büyük başarıya yol açar.',
image: [],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 101, 
username: 'TomHanks', 
date: '2023-10-03T15:10:37.542Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.', 
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 102, 
username: 'NataliePortman', 
date: '2023-10-04T20:25:44.789Z', 
text: 'Hayalinizdeki yerlere gitmek için bir plan yapın. Hedefler, sizi motive eder.',
image: [],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 103, 
username: 'JohnnyDepp', 
date: '2023-10-05T09:40:12.356Z', 
text: 'Empati kurun. Başkalarının duygularını anlamak, ilişkileri güçlendirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 104, 
username: 'EmmaWatson', 
date: '2023-10-06T16:55:30.123Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 105, 
username: 'ChrisHemsworth', 
date: '2023-10-07T22:30:18.987Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 106, 
username: 'GalGadot', 
date: '2023-10-08T11:15:47.654Z', 
text: 'Sağlıklı beslenin. Vücudunuzun ihtiyaç duyduğu besinleri alın.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 107, 
username: 'RyanReynolds', 
date: '2023-10-09T04:20:55.987Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 108, 
username: 'CharlizeTheron', 
date: '2023-10-10T14:45:33.222Z', 
text: 'Doğayı koruyun. Çevre dostu alışkanlıklar edinin.',
image: [],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 109, 
username: 'Zendaya', 
date: '2023-10-11T20:05:41.555Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 110, 
username: 'BradPitt', 
date: '2023-10-12T09:55:18.789Z', 
text: 'Müzik dinleyin. Ruhsal denge için melodik seslere kulak verin.',
image: [],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 111, 
username: 'MargotRobbie', 
date: '2023-10-13T15:10:37.542Z', 
text: 'Hobi edinin. Yaratıcı aktiviteler, zihinsel sağlığınızı güçlendirir.', 
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 112, 
username: 'RobertDowneyJr', 
date: '2023-10-14T20:25:44.789Z', 
text: 'İlginç yerlere seyahat edin. Farklı kültürler keşfetmek, geniş bir bakış açısı sunar.',
image: [],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 113, 
username: 'EmmaStone', 
date: '2023-10-15T09:40:12.356Z', 
text: 'Sağlıklı bir yaşam tarzı benimseyin. Düzenli egzersiz ve beslenme önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 114, 
username: 'LeonardoDiCaprio', 
date: '2023-10-16T16:55:30.123Z', 
text: 'Gökyüzüne bakın. Doğanın güzellikleri, içsel huzur sağlar.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 115, 
username: 'JenniferAniston', 
date: '2023-10-17T22:30:18.987Z', 
text: 'Hayal kurun. Büyük hayaller, büyük başarılar getirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 116, 
username: 'ChrisHemsworth', 
date: '2023-10-18T11:15:47.654Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 117, 
username: 'ScarlettJohansson', 
date: '2023-10-19T04:20:55.987Z', 
text: 'Daima olumlu düşünün. Pozitif enerji, çevrenizi etkiler.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 118, 
username: 'TomCruise', 
date: '2023-10-20T14:45:33.222Z', 
text: 'Duygusal zekanızı geliştirin. Empati kurma becerisi, güçlü ilişkiler için önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 119, 
username: 'Zendaya', 
date: '2023-10-21T20:05:41.555Z', 
text: 'Çevrenizdeki güzellikleri fark edin. Küçük detaylar, hayatı renklendirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 120, 
username: 'DwayneJohnson', 
date: '2023-10-22T09:55:18.789Z', 
text: 'Sevdiklerinize zaman ayırın. Aile ve arkadaşlarınızla bağlantı kurun.',
image: [],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 121, 
username: 'NicoleKidman', 
date: '2023-10-23T15:10:37.542Z', 
text: 'Kendinizi ifade edin. Düşüncelerinizi ve duygularınızı paylaşın.', 
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 122, 
username: 'WillSmith', 
date: '2023-10-24T20:25:44.789Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 123, 
username: 'AngelinaJolie', 
date: '2023-10-25T09:40:12.356Z', 
text: 'Yoga yapın. Bedeninizi ve zihninizi dengelemek için yoga önerilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 124, 
username: 'ChrisPratt', 
date: '2023-10-26T16:55:30.123Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 125, 
username: 'EmmaWatson', 
date: '2023-10-27T22:30:18.987Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 126, 
username: 'RyanGosling', 
date: '2023-10-28T11:15:47.654Z', 
text: 'Müzik dinleyin. Ruhsal denge için melodik seslere kulak verin.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 127, 
username: 'GalGadot', 
date: '2023-10-29T04:20:55.987Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 128, 
username: 'ChrisEvans', 
date: '2023-10-30T14:45:33.222Z', 
text: 'İlginç kitaplar okuyun. Bilgi dünyanızı genişletir.',
image: [],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 129, 
username: 'JenniferLopez', 
date: '2023-10-31T20:05:41.555Z', 
text: 'Kendinizi geliştirin. Her gün bir şeyler öğrenmek, kişisel büyüme sağlar.',
image: [],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 130, 
username: 'TomHanks', 
date: '2023-11-01T09:55:18.789Z', 
text: 'Hayalinizdeki yerlere gitmek için bir plan yapın. Hedefler, sizi motive eder.',
image: [],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 131, 
username: 'RobertPattinson', 
date: '2023-11-02T15:10:37.542Z', 
text: 'Farklı kültürleri keşfedin. Yeni insanlarla tanışmak, bakış açınızı genişletir.', 
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 132, 
username: 'ScarlettJohansson', 
date: '2023-11-03T20:25:44.789Z', 
text: 'Empati kurun. Başkalarının duygularını anlamak, ilişkileri güçlendirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 133, 
username: 'BradleyCooper', 
date: '2023-11-04T09:40:12.356Z', 
text: 'Sosyal medya kullanımını sınırlayın. Dijital detoks yapmak önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 134, 
username: 'EmmaWatson', 
date: '2023-11-05T16:55:30.123Z', 
text: 'Sağlıklı ilişkiler kurun. İyi iletişim, sağlıklı ilişkilerin anahtarıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 135, 
username: 'ChrisHemsworth', 
date: '2023-11-06T22:30:18.987Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 136, 
username: 'Zendaya', 
date: '2023-11-07T11:15:47.654Z', 
text: 'Kendinizi ifade edin. Düşüncelerinizi ve duygularınızı paylaşın.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 137, 
username: 'JohnnyDepp', 
date: '2023-11-08T04:20:55.987Z', 
text: 'Gökyüzüne bakın. Doğanın güzellikleri, içsel huzur sağlar.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 138, 
username: 'EmmaStone', 
date: '2023-11-09T14:45:33.222Z', 
text: 'Sağlıklı bir yaşam tarzı benimseyin. Düzenli egzersiz ve beslenme önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 139, 
username: 'ChrisPratt', 
date: '2023-11-10T20:05:41.555Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 140, 
username: 'JenniferAniston', 
date: '2023-11-11T09:55:18.789Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 141, 
username: 'TomHanks', 
date: '2023-11-12T18:30:47.123Z', 
text: 'Farklı kültürleri anlamaya çalışın. Hoşgörü, daha güçlü bir dünya yaratır.',
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 142, 
username: 'NataliePortman', 
date: '2023-11-13T15:10:37.542Z', 
text: 'Sağlıklı bir diyet benimseyin. Doğru beslenme, enerji seviyenizi artırır.', 
image: [],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 143, 
username: 'RobertDowneyJr', 
date: '2023-11-14T20:25:44.789Z', 
text: 'Fiziksel aktiviteyi ihmal etmeyin. Egzersiz, bedeninizi güçlendirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 144, 
username: 'Zendaya', 
date: '2023-11-15T09:40:12.356Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 145, 
username: 'ChrisHemsworth', 
date: '2023-11-16T16:55:30.123Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 146, 
username: 'EmmaStone', 
date: '2023-11-17T22:30:18.987Z', 
text: 'Doğaya saygılı olun. Doğa, yaşam kaynağımızdır ve korunmalıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 147, 
username: 'DwayneJohnson', 
date: '2023-11-18T11:15:47.654Z', 
text: 'Kendinizi ifade edin. Düşüncelerinizi açıkça paylaşmak önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 148, 
username: 'GalGadot', 
date: '2023-11-19T04:20:55.987Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 149, 
username: 'TomCruise', 
date: '2023-11-20T14:45:33.222Z', 
text: 'Sevdiklerinizle vakit geçirin. Aile ve arkadaşlar, hayatın anlamını güçlendirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 150, 
username: 'JenniferLopez', 
date: '2023-11-21T20:05:41.555Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 151, 
username: 'BradPitt', 
date: '2023-11-22T09:55:18.789Z', 
text: 'Kendinizi geliştirin. Her gün bir şeyler öğrenmek, kişisel büyüme sağlar.',
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 152, 
username: 'TaylorSwift', 
date: '2023-11-23T18:30:47.123Z', 
text: 'İyi bir uyku alışkanlığı edinin. Yeterli uyku, sağlıklı bir yaşam için önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 153, 
username: 'MargotRobbie', 
date: '2023-11-24T15:10:37.542Z', 
text: 'Kitap okuyun. Farklı türleri keşfetmek, zihinsel gelişime katkı sağlar.', 
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 154, 
username: 'ChrisEvans', 
date: '2023-11-25T20:25:44.789Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 155, 
username: 'EmmaWatson', 
date: '2023-11-26T09:40:12.356Z', 
text: 'Yürüyüşe çıkın. Doğa yürüyüşleri, hem fiziksel hem de zihinsel sağlığınıza iyi gelir.',
image: [{ url: 'https://picsum.photos/202' }, { url: 'https://picsum.photos/302' }],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 156, 
username: 'TomHanks', 
date: '2023-11-27T16:55:30.123Z', 
text: 'Yeni bir dil öğrenin. Dil becerilerinizi geliştirmek, faydalı bir hobi olabilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 157, 
username: 'JenniferAniston', 
date: '2023-11-28T22:30:18.987Z', 
text: 'Sanatla ilgilenin. Resim yapmak veya enstrüman çalmak, yaratıcılığı teşvik eder.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 158, 
username: 'JohnnyDepp', 
date: '2023-11-29T11:15:47.654Z', 
text: 'Doğayla iç içe olun. Kamp yapmak veya doğa yürüyüşleri yapmak rahatlatıcıdır.',
image: [{ url: 'https://picsum.photos/205' }, { url: 'https://picsum.photos/305' }],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 159, 
username: 'Zendaya', 
date: '2023-11-30T04:20:55.987Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [{ url: 'https://picsum.photos/206' }, { url: 'https://picsum.photos/306' }],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 160, 
username: 'RobertDowneyJr', 
date: '2023-12-01T14:45:33.222Z', 
text: 'Güzel anılar biriktirin. Seyahat edin ve yeni yerler keşfedin.',
image: [],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 161, 
username: 'EmmaStone', 
date: '2023-12-02T09:55:18.789Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 162, 
username: 'BradleyCooper', 
date: '2023-12-03T18:30:47.123Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [{ url: 'https://picsum.photos/209' }, { url: 'https://picsum.photos/309' }],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 163, 
username: 'GalGadot', 
date: '2023-12-04T03:45:15.456Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 164, 
username: 'RyanGosling', 
date: '2023-12-05T12:10:34.789Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [{ url: 'https://picsum.photos/211' }, { url: 'https://picsum.photos/311' }],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 165, 
username: 'TomCruise', 
date: '2023-12-06T15:10:37.542Z', 
text: 'Sağlıklı bir diyet benimseyin. Doğru beslenme, enerji seviyenizi artırır.', 
image: [{ url: 'https://picsum.photos/212' }, { url: 'https://picsum.photos/312' }],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 166, 
username: 'JenniferLopez', 
date: '2023-12-07T20:25:44.789Z', 
text: 'Fiziksel aktiviteyi ihmal etmeyin. Egzersiz, bedeninizi güçlendirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 167, 
username: 'BradPitt', 
date: '2023-12-08T09:40:12.356Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [{ url: 'https://picsum.photos/214' }, { url: 'https://picsum.photos/314' }],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 168, 
username: 'MargotRobbie', 
date: '2023-12-09T16:55:30.123Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 169, 
username: 'ChrisEvans', 
date: '2023-12-10T22:30:18.987Z', 
text: 'Doğayla iç içe olun. Kamp yapmak veya doğa yürüyüşleri yapmak rahatlatıcıdır.',
image: [{ url: 'https://picsum.photos/216' }, { url: 'https://picsum.photos/316' }],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 170, 
username: 'EmmaStone', 
date: '2023-12-11T11:15:47.654Z', 
text: 'Kendinizi ifade edin. Düşüncelerinizi açıkça paylaşmak önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 171, 
username: 'DwayneJohnson', 
date: '2023-12-12T04:20:55.987Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [{ url: 'https://picsum.photos/218' }, { url: 'https://picsum.photos/318' }],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 172, 
username: 'Zendaya', 
date: '2023-12-13T14:45:33.222Z', 
text: 'Sevdiklerinizle vakit geçirin. Aile ve arkadaşlar, hayatın anlamını güçlendirir.',
image: [{ url: 'https://picsum.photos/219' }, { url: 'https://picsum.photos/319' }],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 173, 
username: 'RobertDowneyJr', 
date: '2023-12-14T20:05:41.555Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [{ url: 'https://picsum.photos/220' }, { url: 'https://picsum.photos/320' }],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 174, 
username: 'ChrisHemsworth', 
date: '2023-12-15T09:55:18.789Z', 
text: 'İyi bir uyku alışkanlığı edinin. Yeterli uyku, sağlıklı bir yaşam için önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 175, 
username: 'EmmaWatson', 
date: '2023-12-16T18:30:47.123Z', 
text: 'Farklı kültürleri keşfedin. Yeni insanlarla tanışmak, bakış açınızı genişletir.',
image: [{ url: 'https://picsum.photos/222' }, { url: 'https://picsum.photos/322' }],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 176, 
username: 'RyanGosling', 
date: '2023-12-17T03:45:15.456Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 177, 
username: 'GalGadot', 
date: '2023-12-18T12:10:34.789Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [{ url: 'https://picsum.photos/224' }, { url: 'https://picsum.photos/324' }],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 178, 
username: 'NataliePortman', 
date: '2023-12-19T21:25:03.123Z', 
text: 'Sağlıklı ilişkiler kurun. İyi iletişim, sağlıklı ilişkilerin anahtarıdır.',
image: [{ url: 'https://picsum.photos/225' }, { url: 'https://picsum.photos/325' }],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 179, 
username: 'TaylorSwift', 
date: '2023-12-20T15:10:37.542Z', 
text: 'Kendinizi geliştirin. Her gün bir şeyler öğrenmek, kişisel büyüme sağlar.', 
image: [],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 180, 
username: 'JohnnyDepp', 
date: '2023-12-21T20:25:44.789Z', 
text: 'İyi bir uyku alışkanlığı edinin. Yeterli uyku, sağlıklı bir yaşam için önemlidir.',
image: [{ url: 'https://picsum.photos/227' }, { url: 'https://picsum.photos/327' }],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 181, 
username: 'MargotRobbie', 
date: '2023-12-22T09:40:12.356Z', 
text: 'Sağlıklı bir diyet benimseyin. Doğru beslenme, enerji seviyenizi artırır.',
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 182, 
username: 'ChrisEvans', 
date: '2023-12-23T16:55:30.123Z', 
text: 'Fiziksel aktiviteyi ihmal etmeyin. Egzersiz, bedeninizi güçlendirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 183, 
username: 'EmmaWatson', 
date: '2023-12-24T22:30:18.987Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [{ url: 'https://picsum.photos/230' }, { url: 'https://picsum.photos/330' }],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 184, 
username: 'TomHanks', 
date: '2023-12-25T11:15:47.654Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [{ url: 'https://picsum.photos/231' }, { url: 'https://picsum.photos/331' }],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 185, 
username: 'JenniferAniston', 
date: '2023-12-26T04:20:55.987Z', 
text: 'Doğayla iç içe olun. Kamp yapmak veya doğa yürüyüşleri yapmak rahatlatıcıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 186, 
username: 'Zendaya', 
date: '2023-12-27T14:45:33.222Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [{ url: 'https://picsum.photos/233' }, { url: 'https://picsum.photos/333' }],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 187, 
username: 'RobertDowneyJr', 
date: '2023-12-28T20:05:41.555Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 188, 
username: 'ChrisHemsworth', 
date: '2023-12-29T09:55:18.789Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [{ url: 'https://picsum.photos/235' }, { url: 'https://picsum.photos/335' }],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 189, 
username: 'EmmaStone', 
date: '2023-12-30T18:30:47.123Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 190, 
username: 'BradleyCooper', 
date: '2023-12-31T03:45:15.456Z', 
text: 'Farklı kültürleri keşfedin. Yeni insanlarla tanışmak, bakış açınızı genişletir.',
image: [{ url: 'https://picsum.photos/237' }, { url: 'https://picsum.photos/337' }],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 191, 
username: 'GalGadot', 
date: '2024-01-01T12:10:34.789Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 192, 
username: 'RyanGosling', 
date: '2024-01-02T21:25:03.123Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [{ url: 'https://picsum.photos/239' }, { url: 'https://picsum.photos/339' }],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 193, 
username: 'NataliePortman', 
date: '2024-01-03T15:10:37.542Z', 
text: 'Sağlıklı bir diyet benimseyin. Doğru beslenme, enerji seviyenizi artırır.', 
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 194, 
username: 'TomCruise', 
date: '2024-01-04T20:25:44.789Z', 
text: 'Fiziksel aktiviteyi ihmal etmeyin. Egzersiz, bedeninizi güçlendirir.',
image: [{ url: 'https://picsum.photos/241' }, { url: 'https://picsum.photos/341' }],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 195, 
username: 'JenniferLopez', 
date: '2024-01-05T09:40:12.356Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 196, 
username: 'BradPitt', 
date: '2024-01-06T16:55:30.123Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [{ url: 'https://picsum.photos/243' }, { url: 'https://picsum.photos/343' }],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 197, 
username: 'TaylorSwift', 
date: '2024-01-07T22:30:18.987Z', 
text: 'Doğayla iç içe olun. Kamp yapmak veya doğa yürüyüşleri yapmak rahatlatıcıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 198, 
username: 'JohnnyDepp', 
date: '2024-01-08T11:15:47.654Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 199, 
username: 'MargotRobbie', 
date: '2024-01-09T04:20:55.987Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [{ url: 'https://picsum.photos/246' }, { url: 'https://picsum.photos/346' }],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 200, 
username: 'ChrisEvans', 
date: '2024-01-10T14:45:33.222Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 201, 
username: 'EmmaWatson', 
date: '2024-01-11T20:05:41.555Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [{ url: 'https://picsum.photos/248' }, { url: 'https://picsum.photos/348' }],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 202, 
username: 'TomHanks', 
date: '2024-01-12T09:55:18.789Z', 
text: 'Farklı kültürleri keşfedin. Yeni insanlarla tanışmak, bakış açınızı genişletir.',
image: [],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 203, 
username: 'JenniferAniston', 
date: '2024-01-13T18:30:47.123Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [{ url: 'https://picsum.photos/250' }, { url: 'https://picsum.photos/350' }],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 204, 
username: 'Zendaya', 
date: '2024-01-14T03:45:15.456Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 205, 
username: 'RobertDowneyJr', 
date: '2024-01-15T12:10:34.789Z', 
text: 'Sağlıklı ilişkiler kurun. İyi iletişim, sağlıklı ilişkilerin anahtarıdır.',
image: [{ url: 'https://picsum.photos/252' }, { url: 'https://picsum.photos/352' }],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 206, 
username: 'ChrisHemsworth', 
date: '2024-01-16T21:25:03.123Z', 
text: 'İyi bir uyku alışkanlığı edinin. Yeterli uyku, sağlıklı bir yaşam için önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 207, 
username: 'NataliePortman', 
date: '2024-01-17T15:10:37.542Z', 
text: 'Sağlıklı bir diyet benimseyin. Doğru beslenme, enerji seviyenizi artırır.', 
image: [{ url: 'https://picsum.photos/254' }, { url: 'https://picsum.photos/354' }],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 208, 
username: 'TomCruise', 
date: '2024-01-18T20:25:44.789Z', 
text: 'Fiziksel aktiviteyi ihmal etmeyin. Egzersiz, bedeninizi güçlendirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 209, 
username: 'JenniferLopez', 
date: '2024-01-19T09:40:12.356Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [{ url: 'https://picsum.photos/255' }, { url: 'https://picsum.photos/355' }],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 210, 
username: 'BradPitt', 
date: '2024-01-20T16:55:30.123Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 211, 
username: 'TaylorSwift', 
date: '2024-01-21T22:30:18.987Z', 
text: 'Doğayla iç içe olun. Kamp yapmak veya doğa yürüyüşleri yapmak rahatlatıcıdır.',
image: [{ url: 'https://picsum.photos/256' }, { url: 'https://picsum.photos/356' }],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 212, 
username: 'JohnnyDepp', 
date: '2024-01-22T11:15:47.654Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 213, 
username: 'MargotRobbie', 
date: '2024-01-23T04:20:55.987Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [{ url: 'https://picsum.photos/257' }, { url: 'https://picsum.photos/357' }],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 214, 
username: 'ChrisEvans', 
date: '2024-01-24T14:45:33.222Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 215, 
username: 'EmmaWatson', 
date: '2024-01-25T20:05:41.555Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [{ url: 'https://picsum.photos/258' }, { url: 'https://picsum.photos/358' }],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 216, 
username: 'TomHanks', 
date: '2024-01-26T09:55:18.789Z', 
text: 'Farklı kültürleri keşfedin. Yeni insanlarla tanışmak, bakış açınızı genişletir.',
image: [],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 217, 
username: 'JenniferAniston', 
date: '2024-01-27T18:30:47.123Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [{ url: 'https://picsum.photos/259' }, { url: 'https://picsum.photos/359' }],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 218, 
username: 'Zendaya', 
date: '2024-01-28T03:45:15.456Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 219, 
username: 'RobertDowneyJr', 
date: '2024-01-29T12:10:34.789Z', 
text: 'Sağlıklı ilişkiler kurun. İyi iletişim, sağlıklı ilişkilerin anahtarıdır.',
image: [{ url: 'https://picsum.photos/260' }, { url: 'https://picsum.photos/360' }],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 220, 
username: 'NataliePortman', 
date: '2024-01-31T15:10:37.542Z', 
text: 'Sağlıklı bir diyet benimseyin. Doğru beslenme, enerji seviyenizi artırır.', 
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 221, 
username: 'TomCruise', 
date: '2024-02-01T20:25:44.789Z', 
text: 'Fiziksel aktiviteyi ihmal etmeyin. Egzersiz, bedeninizi güçlendirir.',
image: [{ url: 'https://picsum.photos/261' }, { url: 'https://picsum.photos/361' }],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 222, 
username: 'JenniferLopez', 
date: '2024-02-02T09:40:12.356Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 223, 
username: 'BradPitt', 
date: '2024-02-03T16:55:30.123Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [{ url: 'https://picsum.photos/262' }, { url: 'https://picsum.photos/362' }],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{
id: 224, 
username: 'TaylorSwift', 
date: '2024-02-04T22:30:18.987Z', 
text: 'Doğayla iç içe olun. Kamp yapmak veya doğa yürüyüşleri yapmak rahatlatıcıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/54'
,virtualtype: 'feed-box'
},
{
id: 225, 
username: 'JohnnyDepp', 
date: '2024-02-05T11:15:47.654Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [{ url: 'https://picsum.photos/263' }, { url: 'https://picsum.photos/363' }],
video: '',
avatar: 'https://picsum.photos/55'
,virtualtype: 'feed-box'
},
{
id: 226, 
username: 'MargotRobbie', 
date: '2024-02-06T04:20:55.987Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [],
video: '',
avatar: 'https://picsum.photos/56'
,virtualtype: 'feed-box'
},
{
id: 227, 
username: 'ChrisEvans', 
date: '2024-02-07T14:45:33.222Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [{ url: 'https://picsum.photos/264' }, { url: 'https://picsum.photos/364' }],
video: '',
avatar: 'https://picsum.photos/57'
,virtualtype: 'feed-box'
},
{
id: 228, 
username: 'EmmaWatson', 
date: '2024-02-08T20:05:41.555Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [],
video: '',
avatar: 'https://picsum.photos/58'
,virtualtype: 'feed-box'
},
{
id: 229, 
username: 'TomHanks', 
date: '2024-02-09T09:55:18.789Z', 
text: 'Farklı kültürleri keşfedin. Yeni insanlarla tanışmak, bakış açınızı genişletir.',
image: [{ url: 'https://picsum.photos/265' }, { url: 'https://picsum.photos/365' }],
video: '',
avatar: 'https://picsum.photos/59'
,virtualtype: 'feed-box'
},
{
id: 230, 
username: 'JenniferAniston', 
date: '2024-02-10T18:30:47.123Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/50'
,virtualtype: 'feed-box'
},
{
id: 231, 
username: 'Zendaya', 
date: '2024-02-11T03:45:15.456Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [{ url: 'https://picsum.photos/266' }, { url: 'https://picsum.photos/366' }],
video: '',
avatar: 'https://picsum.photos/51'
,virtualtype: 'feed-box'
},
{
id: 232, 
username: 'RobertDowneyJr', 
date: '2024-02-12T12:10:34.789Z', 
text: 'Sağlıklı ilişkiler kurun. İyi iletişim, sağlıklı ilişkilerin anahtarıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/52'
,virtualtype: 'feed-box'
},
{
id: 233, 
username: 'ChrisHemsworth', 
date: '2024-02-13T21:25:03.123Z', 
text: 'İyi bir uyku alışkanlığı edinin. Yeterli uyku, sağlıklı bir yaşam için önemlidir.',
image: [{ url: 'https://picsum.photos/267' }, { url: 'https://picsum.photos/367' }],
video: '',
avatar: 'https://picsum.photos/53'
,virtualtype: 'feed-box'
},
{ 
id: 234, 
username: 'NataliePortman', 
date: '2024-02-14T15:10:37.542Z', 
text: 'Sağlıklı bir diyet benimseyin. Doğru beslenme, enerji seviyenizi artırır.', 
image: [{ url: 'https://picsum.photos/268' }, { url: 'https://picsum.photos/368' }],
video: '',
avatar: 'https://picsum.photos/40',
virtualtype: 'feed-box'
},
{ 
id: 235, 
username: 'TomCruise', 
date: '2024-02-15T20:25:44.789Z', 
text: 'Fiziksel aktiviteyi ihmal etmeyin. Egzersiz, bedeninizi güçlendirir.',
image: [{ url: 'https://picsum.photos/269' }, { url: 'https://picsum.photos/369' }],
video: '',
avatar: 'https://picsum.photos/41',
virtualtype: 'feed-box'
},
{ 
id: 236, 
username: 'JenniferLopez', 
date: '2024-02-16T09:40:12.356Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [],
video: '',
avatar: 'https://picsum.photos/42',
virtualtype: 'feed-box'
},
{ 
id: 237, 
username: 'BradPitt', 
date: '2024-02-17T16:55:30.123Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [{ url: 'https://picsum.photos/270' }, { url: 'https://picsum.photos/370' }],
video: '',
avatar: 'https://picsum.photos/43',
virtualtype: 'feed-box'
},
{ 
id: 238, 
username: 'TaylorSwift', 
date: '2024-02-18T22:30:18.987Z', 
text: 'Doğayla iç içe olun. Kamp yapmak veya doğa yürüyüşleri yapmak rahatlatıcıdır.',
image: [{ url: 'https://picsum.photos/271' }, { url: 'https://picsum.photos/371' }],
video: '',
avatar: 'https://picsum.photos/44',
virtualtype: 'feed-box'
},
{ 
id: 239, 
username: 'JohnnyDepp', 
date: '2024-02-19T11:15:47.654Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/45',
virtualtype: 'feed-box'
},
{ 
id: 240, 
username: 'MargotRobbie', 
date: '2024-02-20T04:20:55.987Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [{ url: 'https://picsum.photos/272' }, { url: 'https://picsum.photos/372' }],
video: '',
avatar: 'https://picsum.photos/46',
virtualtype: 'feed-box'
},
{ 
id: 241, 
username: 'ChrisEvans', 
date: '2024-02-21T14:45:33.222Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/47',
virtualtype: 'feed-box'
},
{ 
id: 242, 
username: 'EmmaWatson', 
date: '2024-02-22T20:05:41.555Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [{ url: 'https://picsum.photos/273' }, { url: 'https://picsum.photos/373' }],
video: '',
avatar: 'https://picsum.photos/48',
virtualtype: 'feed-box'
},
{ 
id: 243, 
username: 'TomHanks', 
date: '2024-02-23T09:55:18.789Z', 
text: 'Farklı kültürleri keşfedin. Yeni insanlarla tanışmak, bakış açınızı genişletir.',
image: [],
video: '',
avatar: 'https://picsum.photos/49',
virtualtype: 'feed-box'
},
{ 
id: 244, 
username: 'JenniferAniston', 
date: '2024-02-24T18:30:47.123Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [{ url: 'https://picsum.photos/274' }, { url: 'https://picsum.photos/374' }],
video: '',
avatar: 'https://picsum.photos/50',
virtualtype: 'feed-box'
},
{ 
id: 245, 
username: 'Zendaya', 
date: '2024-02-25T03:45:15.456Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [{ url: 'https://picsum.photos/275' }, { url: 'https://picsum.photos/375' }],
video: '',
avatar: 'https://picsum.photos/51',
virtualtype: 'feed-box'
},
{ 
id: 246, 
username: 'RobertDowneyJr', 
date: '2024-02-26T12:10:34.789Z', 
text: 'Sağlıklı ilişkiler kurun. İyi iletişim, sağlıklı ilişkilerin anahtarıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/52',
virtualtype: 'feed-box'
},
{ 
id: 247, 
username: 'NataliePortman', 
date: '2024-02-28T15:10:37.542Z', 
text: 'Sağlıklı bir diyet benimseyin. Doğru beslenme, enerji seviyenizi artırır.', 
image: [],
video: '',
avatar: 'https://picsum.photos/54',
virtualtype: 'feed-box'
},
{ 
id: 248, 
username: 'TomCruise', 
date: '2024-02-29T20:25:44.789Z', 
text: 'Fiziksel aktiviteyi ihmal etmeyin. Egzersiz, bedeninizi güçlendirir.',
image: [{ url: 'https://picsum.photos/277' }, { url: 'https://picsum.photos/377' }],
video: '',
avatar: 'https://picsum.photos/55',
virtualtype: 'feed-box'
},
{ 
id: 249, 
username: 'JenniferLopez', 
date: '2024-03-01T09:40:12.356Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [{ url: 'https://picsum.photos/278' }, { url: 'https://picsum.photos/378' }],
video: '',
avatar: 'https://picsum.photos/56',
virtualtype: 'feed-box'
},
{ 
id: 250, 
username: 'BradPitt', 
date: '2024-03-02T16:55:30.123Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/57',
virtualtype: 'feed-box'
},
{ 
id: 251, 
username: 'TaylorSwift', 
date: '2024-03-03T22:30:18.987Z', 
text: 'Doğayla iç içe olun. Kamp yapmak veya doğa yürüyüşleri yapmak rahatlatıcıdır.',
image: [{ url: 'https://picsum.photos/279' }, { url: 'https://picsum.photos/379' }],
video: '',
avatar: 'https://picsum.photos/58',
virtualtype: 'feed-box'
},
{ 
id: 252, 
username: 'JohnnyDepp', 
date: '2024-03-04T11:15:47.654Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [{ url: 'https://picsum.photos/280' }, { url: 'https://picsum.photos/380' }],
video: '',
avatar: 'https://picsum.photos/59',
virtualtype: 'feed-box'
},
{ 
id: 253, 
username: 'MargotRobbie', 
date: '2024-03-05T04:20:55.987Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [],
video: '',
avatar: 'https://picsum.photos/60',
virtualtype: 'feed-box'
},
{ 
id: 254, 
username: 'ChrisEvans', 
date: '2024-03-06T14:45:33.222Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [{ url: 'https://picsum.photos/281' }, { url: 'https://picsum.photos/381' }],
video: '',
avatar: 'https://picsum.photos/61',
virtualtype: 'feed-box'
},
{ 
id: 255, 
username: 'EmmaWatson', 
date: '2024-03-07T20:05:41.555Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [],
video: '',
avatar: 'https://picsum.photos/62',
virtualtype: 'feed-box'
},
{ 
id: 256, 
username: 'TomHanks', 
date: '2024-03-08T09:55:18.789Z', 
text: 'Farklı kültürleri keşfedin. Yeni insanlarla tanışmak, bakış açınızı genişletir.',
image: [{ url: 'https://picsum.photos/282' }, { url: 'https://picsum.photos/382' }],
video: '',
avatar: 'https://picsum.photos/63',
virtualtype: 'feed-box'
},
{ 
id: 257, 
username: 'JenniferAniston', 
date: '2024-03-09T18:30:47.123Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [{ url: 'https://picsum.photos/283' }, { url: 'https://picsum.photos/383' }],
video: '',
avatar: 'https://picsum.photos/64',
virtualtype: 'feed-box'
},
{ 
id: 258, 
username: 'Zendaya', 
date: '2024-03-10T03:45:15.456Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [{ url: 'https://picsum.photos/284' }, { url: 'https://picsum.photos/384' }],
video: '',
avatar: 'https://picsum.photos/65',
virtualtype: 'feed-box'
},
{ 
id: 259, 
username: 'RobertDowneyJr', 
date: '2024-03-11T12:10:34.789Z', 
text: 'Sağlıklı ilişkiler kurun. İyi iletişim, sağlıklı ilişkilerin anahtarıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/66',
virtualtype: 'feed-box'
},
{ 
id: 260, 
username: 'NataliePortman', 
date: '2024-03-13T15:10:37.542Z', 
text: 'Sağlıklı bir diyet benimseyin. Doğru beslenme, enerji seviyenizi artırır.', 
image: [{ url: 'https://picsum.photos/286' }, { url: 'https://picsum.photos/386' }],
video: '',
avatar: 'https://picsum.photos/68',
virtualtype: 'feed-box'
},
{ 
id: 261, 
username: 'TomCruise', 
date: '2024-03-14T20:25:44.789Z', 
text: 'Fiziksel aktiviteyi ihmal etmeyin. Egzersiz, bedeninizi güçlendirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/69',
virtualtype: 'feed-box'
},
{ 
id: 262, 
username: 'JenniferLopez', 
date: '2024-03-15T09:40:12.356Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [{ url: 'https://picsum.photos/287' }, { url: 'https://picsum.photos/387' }],
video: '',
avatar: 'https://picsum.photos/70',
virtualtype: 'feed-box'
},
{ 
id: 263, 
username: 'BradPitt', 
date: '2024-03-16T16:55:30.123Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [{ url: 'https://picsum.photos/288' }, { url: 'https://picsum.photos/388' }],
video: '',
avatar: 'https://picsum.photos/71',
virtualtype: 'feed-box'
},
{ 
id: 264, 
username: 'TaylorSwift', 
date: '2024-03-17T22:30:18.987Z', 
text: 'Doğayla iç içe olun. Kamp yapmak veya doğa yürüyüşleri yapmak rahatlatıcıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/72',
virtualtype: 'feed-box'
},
{ 
id: 265, 
username: 'JohnnyDepp', 
date: '2024-03-18T11:15:47.654Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [{ url: 'https://picsum.photos/289' }, { url: 'https://picsum.photos/389' }],
video: '',
avatar: 'https://picsum.photos/73',
virtualtype: 'feed-box'
},
{ 
id: 266, 
username: 'MargotRobbie', 
date: '2024-03-19T04:20:55.987Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [{ url: 'https://picsum.photos/290' }, { url: 'https://picsum.photos/390' }],
video: '',
avatar: 'https://picsum.photos/74',
virtualtype: 'feed-box'
},
{ 
id: 267, 
username: 'ChrisEvans', 
date: '2024-03-20T14:45:33.222Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/75',
virtualtype: 'feed-box'
},
{ 
id: 268, 
username: 'EmmaWatson', 
date: '2024-03-21T20:05:41.555Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [{ url: 'https://picsum.photos/291' }, { url: 'https://picsum.photos/391' }],
video: '',
avatar: 'https://picsum.photos/76',
virtualtype: 'feed-box'
},
{ 
id: 269, 
username: 'TomHanks', 
date: '2024-03-22T09:55:18.789Z', 
text: 'Farklı kültürleri keşfedin. Yeni insanlarla tanışmak, bakış açınızı genişletir.',
image: [{ url: 'https://picsum.photos/292' }, { url: 'https://picsum.photos/392' }],
video: '',
avatar: 'https://picsum.photos/77',
virtualtype: 'feed-box'
},
{ 
id: 270, 
username: 'JenniferAniston', 
date: '2024-03-23T18:30:47.123Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/78',
virtualtype: 'feed-box'
},
{ 
id: 271, 
username: 'Zendaya', 
date: '2024-03-24T03:45:15.456Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [{ url: 'https://picsum.photos/293' }, { url: 'https://picsum.photos/393' }],
video: '',
avatar: 'https://picsum.photos/79',
virtualtype: 'feed-box'
},
{ 
id: 272, 
username: 'RobertDowneyJr', 
date: '2024-03-25T12:10:34.789Z', 
text: 'Sağlıklı ilişkiler kurun. İyi iletişim, sağlıklı ilişkilerin anahtarıdır.',
image: [{ url: 'https://picsum.photos/294' }, { url: 'https://picsum.photos/394' }],
video: '',
avatar: 'https://picsum.photos/80',
virtualtype: 'feed-box'
},
{ 
id: 273, 
username: 'ChrisHemsworth', 
date: '2024-03-26T21:25:03.123Z', 
text: 'İyi bir uyku alışkanlığı edinin. Yeterli uyku, sağlıklı bir yaşam için önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/81',
virtualtype: 'feed-box'
},
{ 
id: 274, 
username: 'ScarlettJohansson', 
date: '2024-03-27T10:40:21.456Z', 
text: 'Kendinizi geliştirin. Yeni beceriler edinmek, yaşamınıza değer katar.',
image: [{ url: 'https://picsum.photos/295' }, { url: 'https://picsum.photos/395' }],
video: '',
avatar: 'https://picsum.photos/82',
virtualtype: 'feed-box'
},
{ 
id: 275, 
username: 'NataliePortman', 
date: '2024-03-29T15:10:37.542Z', 
text: 'Sağlıklı bir diyet benimseyin. Doğru beslenme, enerji seviyenizi artırır.', 
image: [],
video: '',
avatar: 'https://picsum.photos/84',
virtualtype: 'feed-box'
},
{ 
id: 276, 
username: 'TomCruise', 
date: '2024-03-30T20:25:44.789Z', 
text: 'Fiziksel aktiviteyi ihmal etmeyin. Egzersiz, bedeninizi güçlendirir.',
image: [{ url: 'https://picsum.photos/297' }, { url: 'https://picsum.photos/397' }],
video: '',
avatar: 'https://picsum.photos/85',
virtualtype: 'feed-box'
},
{ 
id: 277, 
username: 'JenniferLopez', 
date: '2024-03-31T09:40:12.356Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [{ url: 'https://picsum.photos/298' }, { url: 'https://picsum.photos/398' }],
video: '',
avatar: 'https://picsum.photos/86',
virtualtype: 'feed-box'
},
{ 
id: 278, 
username: 'BradPitt', 
date: '2024-04-01T16:55:30.123Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [{ url: 'https://picsum.photos/299' }, { url: 'https://picsum.photos/399' }],
video: '',
avatar: 'https://picsum.photos/87',
virtualtype: 'feed-box'
},
{ 
id: 279, 
username: 'TaylorSwift', 
date: '2024-04-02T22:30:18.987Z', 
text: 'Doğayla iç içe olun. Kamp yapmak veya doğa yürüyüşleri yapmak rahatlatıcıdır.',
image: [{ url: 'https://picsum.photos/300' }, { url: 'https://picsum.photos/400' }],
video: '',
avatar: 'https://picsum.photos/88',
virtualtype: 'feed-box'
},
{ 
id: 280, 
username: 'JohnnyDepp', 
date: '2024-04-03T11:15:47.654Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/89',
virtualtype: 'feed-box'
},
{ 
id: 281, 
username: 'MargotRobbie', 
date: '2024-04-04T04:20:55.987Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [{ url: 'https://picsum.photos/301' }, { url: 'https://picsum.photos/401' }],
video: '',
avatar: 'https://picsum.photos/90',
virtualtype: 'feed-box'
},
{ 
id: 282, 
username: 'ChrisEvans', 
date: '2024-04-05T14:45:33.222Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [{ url: 'https://picsum.photos/302' }, { url: 'https://picsum.photos/402' }],
video: '',
avatar: 'https://picsum.photos/91',
virtualtype: 'feed-box'
},
{ 
id: 283, 
username: 'EmmaWatson', 
date: '2024-04-06T20:05:41.555Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [],
video: '',
avatar: 'https://picsum.photos/92',
virtualtype: 'feed-box'
},
{ 
id: 284, 
username: 'TomHanks', 
date: '2024-04-07T09:55:18.789Z', 
text: 'Farklı kültürleri keşfedin. Yeni insanlarla tanışmak, bakış açınızı genişletir.',
image: [{ url: 'https://picsum.photos/303' }, { url: 'https://picsum.photos/403' }],
video: '',
avatar: 'https://picsum.photos/93',
virtualtype: 'feed-box'
},
{ 
id: 285, 
username: 'JenniferAniston', 
date: '2024-04-08T18:30:47.123Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [{ url: 'https://picsum.photos/304' }, { url: 'https://picsum.photos/404' }],
video: '',
avatar: 'https://picsum.photos/94',
virtualtype: 'feed-box'
},
{ 
id: 286, 
username: 'Zendaya', 
date: '2024-04-09T03:45:15.456Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [{ url: 'https://picsum.photos/305' }, { url: 'https://picsum.photos/405' }],
video: '',
avatar: 'https://picsum.photos/95',
virtualtype: 'feed-box'
},
{ 
id: 287, 
username: 'RobertDowneyJr', 
date: '2024-04-10T12:10:34.789Z', 
text: 'Sağlıklı ilişkiler kurun. İyi iletişim, sağlıklı ilişkilerin anahtarıdır.',
image: [{ url: 'https://picsum.photos/306' }, { url: 'https://picsum.photos/406' }],
video: '',
avatar: 'https://picsum.photos/96',
virtualtype: 'feed-box'
},
{ 
id: 288, 
username: 'ChrisHemsworth', 
date: '2024-04-11T21:25:03.123Z', 
text: 'İyi bir uyku alışkanlığı edinin. Yeterli uyku, sağlıklı bir yaşam için önemlidir.',
image: [],
video: '',
avatar: 'https://picsum.photos/97',
virtualtype: 'feed-box'
},
{ 
id: 289, 
username: 'ScarlettJohansson', 
date: '2024-04-12T10:40:21.456Z', 
text: 'Kendinizi geliştirin. Yeni beceriler edinmek, yaşamınıza değer katar.',
image: [{ url: 'https://picsum.photos/307' }, { url: 'https://picsum.photos/407' }],
video: '',
avatar: 'https://picsum.photos/98',
virtualtype: 'feed-box'
},
{ 
id: 290, 
username: 'LeonardoDiCaprio', 
date: '2024-04-13T19:55:39.789Z', 
text: 'Çevrenizi temiz tutun. Doğa, yaşamımızın bir parçasıdır, ona saygı gösterin.',
image: [{ url: 'https://picsum.photos/308' }, { url: 'https://picsum.photos/408' }],
video: '',
avatar: 'https://picsum.photos/99',
virtualtype: 'feed-box'
},
{ 
id: 291, 
username: 'TomCruise', 
date: '2024-04-15T20:25:44.789Z', 
text: 'Fiziksel aktiviteyi ihmal etmeyin. Egzersiz, bedeninizi güçlendirir.',
image: [],
video: '',
avatar: 'https://picsum.photos/101',
virtualtype: 'feed-box'
},
{ 
id: 292, 
username: 'JenniferLopez', 
date: '2024-04-16T09:40:12.356Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [{ url: 'https://picsum.photos/310' }, { url: 'https://picsum.photos/410' }],
video: '',
avatar: 'https://picsum.photos/102',
virtualtype: 'feed-box'
},
{ 
id: 293, 
username: 'BradPitt', 
date: '2024-04-17T16:55:30.123Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [{ url: 'https://picsum.photos/311' }, { url: 'https://picsum.photos/411' }],
video: '',
avatar: 'https://picsum.photos/103',
virtualtype: 'feed-box'
},
{ 
id: 294, 
username: 'TaylorSwift', 
date: '2024-04-18T22:30:18.987Z', 
text: 'Doğayla iç içe olun. Kamp yapmak veya doğa yürüyüşleri yapmak rahatlatıcıdır.',
image: [{ url: 'https://picsum.photos/312' }, { url: 'https://picsum.photos/412' }],
video: '',
avatar: 'https://picsum.photos/104',
virtualtype: 'feed-box'
},
{ 
id: 295, 
username: 'JohnnyDepp', 
date: '2024-04-19T11:15:47.654Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [],
video: '',
avatar: 'https://picsum.photos/105',
virtualtype: 'feed-box'
},
{ 
id: 296, 
username: 'MargotRobbie', 
date: '2024-04-20T04:20:55.987Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [{ url: 'https://picsum.photos/313' }, { url: 'https://picsum.photos/413' }],
video: '',
avatar: 'https://picsum.photos/106',
virtualtype: 'feed-box'
},
{ 
id: 297, 
username: 'ChrisEvans', 
date: '2024-04-21T14:45:33.222Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [{ url: 'https://picsum.photos/314' }, { url: 'https://picsum.photos/414' }],
video: '',
avatar: 'https://picsum.photos/107',
virtualtype: 'feed-box'
},
{ 
id: 298, 
username: 'EmmaWatson', 
date: '2024-04-22T20:05:41.555Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [],
video: '',
avatar: 'https://picsum.photos/108',
virtualtype: 'feed-box'
},
{ 
id: 299, 
username: 'TomHanks', 
date: '2024-04-23T09:55:18.789Z', 
text: 'Farklı kültürleri keşfedin. Yeni insanlarla tanışmak, bakış açınızı genişletir.',
image: [{ url: 'https://picsum.photos/315' }, { url: 'https://picsum.photos/415' }],
video: '',
avatar: 'https://picsum.photos/20',
virtualtype: 'feed-box'
},
{ 
id: 300, 
username: 'JenniferAniston', 
date: '2024-04-24T18:30:47.123Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [{ url: 'https://picsum.photos/316' }, { url: 'https://picsum.photos/416' }],
video: '',
avatar: 'https://picsum.photos/21',
virtualtype: 'feed-box'
},
{ 
id: 301, 
username: 'Zendaya', 
date: '2024-04-25T03:45:15.456Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [{ url: 'https://picsum.photos/317' }, { url: 'https://picsum.photos/417' }],
video: '',
avatar: 'https://picsum.photos/22',
virtualtype: 'feed-box'
},
{ 
id: 302, 
username: 'RobertDowneyJr', 
date: '2024-04-26T12:10:34.789Z', 
text: 'Sağlıklı ilişkiler kurun. İyi iletişim, sağlıklı ilişkilerin anahtarıdır.',
image: [{ url: 'https://picsum.photos/318' }, { url: 'https://picsum.photos/418' }],
video: '',
avatar: 'https://picsum.photos/23',
virtualtype: 'feed-box'
},
{ 
id: 303, 
username: 'ChrisHemsworth', 
date: '2024-04-27T21:25:03.123Z', 
text: 'İyi bir uyku alışkanlığı edinin. Yeterli uyku, sağlıklı bir yaşam için önemlidir.',
image: [{ url: 'https://picsum.photos/319' }, { url: 'https://picsum.photos/419' }],
video: '',
avatar: 'https://picsum.photos/24',
virtualtype: 'feed-box'
},
{ 
id: 304, 
username: 'ScarlettJohansson', 
date: '2024-04-28T10:40:21.456Z', 
text: 'Kendinizi geliştirin. Yeni beceriler edinmek, yaşamınıza değer katar.',
image: [{ url: 'https://picsum.photos/320' }, { url: 'https://picsum.photos/420' }],
video: '',
avatar: 'https://picsum.photos/25',
virtualtype: 'feed-box'
},
{ 
id: 305, 
username: 'LeonardoDiCaprio', 
date: '2024-04-29T19:55:39.789Z', 
text: 'Çevrenizi temiz tutun. Doğa, yaşamımızın bir parçasıdır, ona saygı gösterin.',
image: [{ url: 'https://picsum.photos/321' }, { url: 'https://picsum.photos/421' }],
video: '',
avatar: 'https://picsum.photos/15',
virtualtype: 'feed-box'
},
{ 
id: 306, 
username: 'TomCruise', 
date: '2024-05-01T20:25:44.789Z', 
text: 'Fiziksel aktiviteyi ihmal etmeyin. Egzersiz, bedeninizi güçlendirir.',
image: [{ url: 'https://picsum.photos/323' }, { url: 'https://picsum.photos/423' }],
video: '',
avatar: 'https://picsum.photos/17',
virtualtype: 'feed-box'
},
{ 
id: 307, 
username: 'JenniferLopez', 
date: '2024-05-02T09:40:12.356Z', 
text: 'Yaratıcı olun. Sanat ve el becerileri geliştirmek, ruhunuzu besler.',
image: [],
video: '',
avatar: 'https://picsum.photos/18',
virtualtype: 'feed-box'
},
{ 
id: 308, 
username: 'BradPitt', 
date: '2024-05-03T16:55:30.123Z', 
text: 'Her gün bir şeyler öğrenin. Bilgi, kişisel gelişim için önemlidir.',
image: [{ url: 'https://picsum.photos/324' }, { url: 'https://picsum.photos/424' }],
video: '',
avatar: 'https://picsum.photos/19',
virtualtype: 'feed-box'
},
{ 
id: 309, 
username: 'TaylorSwift', 
date: '2024-05-04T22:30:18.987Z', 
text: 'Doğayla iç içe olun. Kamp yapmak veya doğa yürüyüşleri yapmak rahatlatıcıdır.',
image: [{ url: 'https://picsum.photos/325' }, { url: 'https://picsum.photos/425' }],
video: '',
avatar: 'https://picsum.photos/20',
virtualtype: 'feed-box'
},
{ 
id: 310, 
username: 'JohnnyDepp', 
date: '2024-05-05T11:15:47.654Z', 
text: 'Meditasyon yapın. Zihinsel sağlığınızı güçlendirmek için meditasyon önerilir.',
image: [{ url: 'https://picsum.photos/326' }, { url: 'https://picsum.photos/426' }],
video: '',
avatar: 'https://picsum.photos/21',
virtualtype: 'feed-box'
},
{ 
id: 311, 
username: 'MargotRobbie', 
date: '2024-05-06T04:20:55.987Z', 
text: 'Gülümseyin. Pozitif enerji yaymak, çevrenizi etkiler.',
image: [],
video: '',
avatar: 'https://picsum.photos/22',
virtualtype: 'feed-box'
},
{ 
id: 312, 
username: 'ChrisEvans', 
date: '2024-05-07T14:45:33.222Z', 
text: 'Kendinize zaman ayırın. Kişisel bakım ve dinlenme önemlidir.',
image: [{ url: 'https://picsum.photos/327' }, { url: 'https://picsum.photos/427' }],
video: '',
avatar: 'https://picsum.photos/23',
virtualtype: 'feed-box'
},
{ 
id: 313, 
username: 'EmmaWatson', 
date: '2024-05-08T20:05:41.555Z', 
text: 'Günlük tutun. Duygusal sağlığınızı anlamak için düşüncelerinizi yazın.',
image: [{ url: 'https://picsum.photos/328' }, { url: 'https://picsum.photos/428' }],
video: '',
avatar: 'https://picsum.photos/24',
virtualtype: 'feed-box'
},
{ 
id: 314, 
username: 'TomHanks', 
date: '2024-05-09T09:55:18.789Z', 
text: 'Farklı kültürleri keşfedin. Yeni insanlarla tanışmak, bakış açınızı genişletir.',
image: [{ url: 'https://picsum.photos/329' }, { url: 'https://picsum.photos/429' }],
video: '',
avatar: 'https://picsum.photos/25',
virtualtype: 'feed-box'
},
{ 
id: 315, 
username: 'JenniferAniston', 
date: '2024-05-10T18:30:47.123Z', 
text: 'Her gün bir iyilik yapın. Küçük jestler, büyük etkiler yaratabilir.',
image: [{ url: 'https://picsum.photos/330' }, { url: 'https://picsum.photos/430' }],
video: '',
avatar: 'https://picsum.photos/26',
virtualtype: 'feed-box'
},
{ 
id: 316, 
username: 'Zendaya', 
date: '2024-05-11T03:45:15.456Z', 
text: 'Hayalinizdeki işi bulun. Tutkulu bir şekilde çalışmak, başarıyı getirir.',
image: [{ url: 'https://picsum.photos/331' }, { url: 'https://picsum.photos/431' }],
video: '',
avatar: 'https://picsum.photos/27',
virtualtype: 'feed-box'
},
{ 
id: 317, 
username: 'RobertDowneyJr', 
date: '2024-05-12T12:10:34.789Z', 
text: 'Sağlıklı ilişkiler kurun. İyi iletişim, sağlıklı ilişkilerin anahtarıdır.',
image: [],
video: '',
avatar: 'https://picsum.photos/28',
virtualtype: 'feed-box'
},
{ 
id: 318, 
username: 'ChrisHemsworth', 
date: '2024-05-13T21:25:03.123Z', 
text: 'İyi bir uyku alışkanlığı edinin. Yeterli uyku, sağlıklı bir yaşam için önemlidir.',
image: [{ url: 'https://picsum.photos/332' }, { url: 'https://picsum.photos/432' }],
video: '',
avatar: 'https://picsum.photos/29',
virtualtype: 'feed-box'
},
{ 
id: 319, 
username: 'ScarlettJohansson', 
date: '2024-05-14T10:40:21.456Z', 
text: 'Kendinizi geliştirin. Yeni beceriler edinmek, yaşamınıza değer katar.',
image: [{ url: 'https://picsum.photos/333' }, { url: 'https://picsum.photos/433' }],
video: '',
avatar: 'https://picsum.photos/30',
virtualtype: 'feed-box'
},
{ 
id: 320, 
username: 'LeonardoDiCaprio', 
date: '2024-05-15T19:55:39.789Z', 
text: 'Çevrenizi temiz tutun. Doğa, yaşamımızın bir parçasıdır, ona saygı gösterin.',
image: [{ url: 'https://picsum.photos/334' }, { url: 'https://picsum.photos/434' }],
video: '',
avatar: 'https://picsum.photos/31',
virtualtype: 'feed-box'
},
{ 
id: 321, 
username: 'NataliePortman', 
date: '2024-05-16T15:10:37.542Z', 
text: 'Sağlıklı bir diyet benimseyin. Doğru beslenme, enerji seviyenizi artırır.', 
image: [],
video: '',
avatar: 'https://picsum.photos/32',
virtualtype: 'feed-box'
}
];