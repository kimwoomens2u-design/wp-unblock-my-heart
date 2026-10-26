// HP CAYRA — INTERACTIVE AU
const CORRECT_PASSCODE = "202508";
const $ = id => document.getElementById(id);

let currentApp = "";
let currentThread = null;
let passcode = "";
let xAccount = "private";

const whatsappChats = {
  "mnyt🐵": [
    ["mnyt🐵","woy","16:32"],["mnyt🐵","woy","16:32"],
    ["mnyt🐵","jamet","16:32"],["mnyt🐵","WOY","16:32"],
    ["Aku","aoa si mnyt","16:40"],["Aku","brisik","16:40"],
    ["mnyt🐵","dah sampe rumah?","16:42"],["Aku","sypa","16:43"],
    ["mnyt🐵","anjing gue","16:43"],["Aku","🖕","16:43"],
    ["mnyt🐵","ya lo lah bego","16:44"],["Aku","udah","16:44"],
    ["mnyt🐵","woy","16:46"],["mnyt🐵","WOYYYYYYYYY","16:46"],
    ["Aku","gausah woy woy","16:47"],["Aku","gw punya nama anjig","16:47"],
    ["mnyt🐵","hehe","16:47"],["Aku","lo bener2 ya","16:48"],
    ["Aku","pengen gw patahin tuh tangan rasanya","16:48"],
    ["Aku","ini lagi, kapan aja lo buka hp gw. Lo hack ya","16:48"],
    ["Aku","perasaan kontak lo gue block","16:48"],
    ["mnyt🐵","lagian lo lebay bgt pake segala block gue segala","16:49"],
    ["mnyt🐵","atau lo masih belom bisa move on ya dari gue? makanya lo blok gue 🤭","16:49"],
    ["Aku","[Stiker: Ngomong sama pantat]","16:50"],
    ["mnyt🐵","sorry, tadi gw panik banget sumpah","16:51"],
    ["mnyt🐵","gue ga liat-liat siapa yang gue tarik, eh taunya Mak Lampir awokawok","16:51"],
    ["Aku","[Stiker: Foto tidur]","16:52"],
    ["Aku","serah lo dah anjing","16:52"],
    ["mnyt🐵","ini typo lo kok makin menjadi-jadi ya","16:53"],
    ["Aku","sksk gw","16:53"],
    ["Aku","asal lo tau, padahal gw lagi mode ninja ya, eh main lu tarik-tarik aja","16:54"],
    ["Aku","kalo semisal ada yang nyiduk gw gimana bangsat","16:54"],
    ["Aku","bisa hancur reputasi gw","16:54"],
    ["mnyt🐵","alah","16:55"],
    ["mnyt🐵","emang masih ada yang mau nge-fans sama artis rewel kayak lo?","16:55"],
    ["mnyt🐵","harusnya lo bangga dikit lah, secara gak langsung gue akuin jadi pacar lagi","16:55"],
    ["mnyt🐵","vokalis band nomor satu nih yang ngomong","16:56"],
    ["Aku","NAJIS","16:56"],["Aku","NAJIS","16:56"],
    ["mnyt🐵","heh, kaca di rumah lo pecah ya?","16:57"],
    ["mnyt🐵","sok najis najis","16:57"],
    ["mnyt🐵","dulu lo yang nembak gue pake surat warna pink bau parfum malaikat subuh itu ya!","16:57"],
    ["mnyt🐵","jangan amnesia lo","16:57"],
    ["mnyt🐵","gue sebenernya juga heran, kenapa dulu mau-mauan sama cewe yang kalo ketawa suaranya kayak knalpot racing","16:58"],
    ["Aku","ITU SURAT DITITIPIN TEMEN GUE YA, GUE CUMA BANTU NGASIHIN","16:58"],
    ["Aku","pokonya bsik lw hris klrif k ntokap lw kalw qta gda apa2","16:59"],
    ["Aku","ga dudi gw msuk k silasih klrga lw","16:59"],
    ["mnyt🐵","gak bisa","17:00"],
    ["mnyt🐵","nyokap gue udah terlanjur suka sama lo","17:00"],
    ["mnyt🐵","katanya, 'wah pacar kamu kalem ya, pendiem walaupun pake masker'","17:00"],
    ["mnyt🐵","awokawok","17:01"],
    ["mnyt🐵","nyokap gatau aja, kalo lo ga pake masker mungkin meja cafe abis lo lalapin","17:01"],
    ["Aku","JIAZ ANJING","17:02"],
    ["Aku","gw lapor ya iji","17:02"],
    ["mnyt🐵","jangan diblok dong, ntar kalo gue disuruh bawa lo makan bareng keluarga gimana?","17:03"],
    ["Aku","[Kontak diblokir]","17:03"]
  ],

  "Stezi · Manajer": [
    ["Stezi","Cayra","09:12"],["Stezi","Cayraa","09:13"],
    ["Stezi","JAWAB WOI","09:14"],["Aku","ap sih, baru juga melek","09:20"],
    ["Stezi","LO DI MANA?","09:21"],["Aku","di puncak monas","09:22"],
    ["Stezi","serius monyet, gue jemput ke monas beneran nih","09:22"],
    ["Stezi","SYUTING JAM 10 JANGAN LUPA","09:23"],
    ["Aku","iya iya tau","09:25"],
    ["Stezi","jangan iya iya doang. kemarin lo bilang gitu terus ngilang satu jam","09:25"],
    ["Aku","gw kan artis sibuk","09:26"],
    ["Stezi","artis sibuk apaan, bangun tidur aja harus gue spam dulu","09:26"],
    ["Aku","iri bilang bos","09:27"],
    ["Stezi","gue manajer lo, bukan babysitter lo","09:27"],
    ["Aku","beda tipis","09:27"],
    ["Stezi","CAYRA. mobil jemputan udah di bawah","09:28"],
    ["Aku","gausah gw mau nyetir sendiri","09:28"],
    ["Stezi","enggak. SIM lo bukan tiket buat bikin gue kena serangan jantung","09:29"],
    ["Aku","lebay bgt hidup lw","09:29"],
    ["Stezi","yang lebay itu lo. kemarin ban mobil bermasalah, sekarang mau nyetir sendiri lagi?","09:30"],
    ["Aku","itu ban tiba-tiba kempes, bukan gw sengaja","09:30"],
    ["Stezi","makanya tunggu driver. lokasi syuting gue kirim dari tadi","09:31"],
    ["Aku","iya nyonya besar","09:31"],
    ["Stezi","Cayra, jangan bikin gue naik darah pagi-pagi.","09:32"],
    ["Aku","minum es dulu biar adem","09:32"],
    ["Stezi","GUE HITUNG SAMPAI TIGA.","09:33"],
    ["Aku","satu","09:33"],
    ["Stezi","CAYRAAAAA","09:33"],
    ["Aku","HAHAHAHA OTW WOI","09:34"],
    ["Stezi","bagus. langsung ke lokasi syuting, jangan mampir beli kopi dulu.","09:34"],
    ["Aku","kalo gue beli roti?","09:34"],
    ["Stezi","CAYRA. CEPAT. LOKASI SYUTING. SEKARANG.","09:35"]
  ],

  "Yebi": [
    ["Yebi","Cay, besok jadi nonton bareng?","22:15"],
    ["Aku","Liat besok deh","22:20"],
    ["Yebi","Jangan liat-liat besok mulu, tiketnya bukan nungguin mood lo","22:21"],
    ["Aku","kalo mood gue belum hadir gimana","22:22"],
    ["Yebi","gue seret pake karpet merah","22:22"],
    ["Aku","lu sahabat apa debt collector","22:23"],
    ["Yebi","dua-duanya, tergantung kebutuhan","22:23"]
  ],

  "Mama": [
    ["Mama","Sayang, besok makan malam di rumah ya. Mama kangen.","18:02"],
    ["Aku","kalau ga ada kamera wartawan aku pikirin","18:03"],
    ["Mama","Cayraaa. Mama cuma mau makan sama anak sendiri","18:04"],
    ["Aku","iya iya ma, bercanda. aku usahain pulang","18:05"]
  ],

  "Sutradara": [
    ["Sutradara","Cayra, besok scene emosionalnya kita ambil pagi ya. Mohon datang 09.30 untuk make-up.","20:45"],
    ["Aku","Siap, Kak. Aku usahakan datang lebih awal.","20:50"],
    ["Sutradara","Terima kasih. Tolong istirahat cukup, besok adegannya cukup berat.","20:52"]
  ],

  "Publicist": [
    ["Publicist","Cay, story kamu tadi ramai. Tim sudah melihat beberapa komentar aneh. Kalau ada DM yang mengganggu, jangan dibalas dulu ya.","14:32"],
    ["Aku","udah ada yang nyebelin banget, Kak. kayaknya orang random","14:33"],
    ["Publicist","Screenshot dulu untuk dokumentasi. Kalau ada ancaman atau menyebut lokasi, kabari aku dan Stezi.","14:34"],
    ["Aku","siap. aku ga bakal posting lokasi dulu","14:35"]
  ]
};

const instagramDMs = {
  "PremRajveeeKumar_Real": [
    ["PremRajveeeKumar_Real","Halah, sok cantik lo","14:05"],
    ["PremRajveeeKumar_Real","Padahal aslinya kayak remah rengginang kalo ga pake filter","14:05"],
    ["PremRajveeeKumar_Real","Artis sombong","14:06"],
    ["PremRajveeeKumar_Real","Sok jual mahal banget","14:06"],
    ["PremRajveeeKumar_Real","Rasain tuh, ban mobilnya kempes kan tadi? awokawok","14:07"],
    ["PremRajveeeKumar_Real","Mending liat hidung gue, asli dari lahir","14:07"],
    ["PremRajveeeKumar_Real","Ga kaya hidung lo hasil vermak","14:08"],
    ["PremRajveeeKumar_Real","Lebih cakepan juga gue kemana-mana","14:08"],
    ["PremRajveeeKumar_Real","Liat nih foto gue pas lagi senyum, manis kan? 😎","14:09"],
    ["PremRajveeeKumar_Real","Pantesan tadi di jalan banyak pohon","14:09"],
    ["PremRajveeeKumar_Real","Ternyata ada titisan reog mobilnya mogok awokawok","14:10"],
    ["PremRajveeeKumar_Real","Lo kalo marah mukanya kaya aspal baru ya","14:10"],
    ["PremRajveeeKumar_Real","Kasar-kasar gimana gitu","14:11"],
    ["Aku","HEH","14:15"],["Aku","lw syp?","14:15"],
    ["Aku","beraninya lw ngatain gue reog","14:16"],
    ["Aku","Lw gk faw gw syaapa?","14:16"],
    ["PremRajveeeKumar_Real","waduh, mbak artis marah","14:17"],
    ["PremRajveeeKumar_Real","Takuttt...","14:17"],
    ["PremRajveeeKumar_Real","Eh ga deng, lebih takut liat filter lo yang tebelnya kayak bedak nyonya-nyonya","14:18"],
    ["PremRajveeeKumar_Real","Lagian siapa yang ga kenal lo, si artis yang hobinya akting nangis padahal aslinya galak kayak herder","14:18"],
    ["Aku","BNGKE ORG MANA SIH LU MNYT","14:20"],
    ["Aku","(Mencoba menelepon Instagram...)","14:21"],
    ["PremRajveeeKumar_Real","📞 Panggilan suara masuk","14:21"],
    ["PremRajveeeKumar_Real","...","14:22"],
    ["Aku","WOI NGOMONG LAH, JANGAN NAPAS DOANG DI SANA","14:22"],
    ["PremRajveeeKumar_Real","suara gue mahal, bayar dulu","14:23"],
    ["Aku","ih najis, gue mau nanya lu siapa bukan mau konser","14:23"],
    ["PremRajveeeKumar_Real","rahasia negara, mbak. fokus syuting aja sono","14:24"]
  ],

  "Nadin Putri ✓": [
    ["Nadin Putri ✓","Hai Cayra! Aku baru lihat cuplikan scene kamu yang kemarin. Akting kamu di bagian terakhir itu bagus banget—ekspresinya dapet, apalagi pas kamu berusaha nahan nangis. Semoga proses syuting hari ini lancar ya! 🤍","13:47"],
    ["Aku","AAAA makasih Kak Nadin 😭🤍 aku malah ngerasa take itu kurang banget","13:49"],
    ["Nadin Putri ✓","Enggak kok, justru kelihatan natural. Jangan terlalu keras sama diri sendiri, ya. Makan siang juga jangan dilewatkan cuma karena ngejar satu take lagi.","13:50"],
    ["Aku","ketahuan banget ya aku suka lupa makan 😭 Stezi pasti udah kirim laporan ke satu industri hiburan","13:51"],
    ["Nadin Putri ✓","HAHAHA manajer yang baik memang harus sedikit galak. Semangat, Cay! Kalau nanti ada waktu, semoga kita bisa ketemu di acara minggu depan.","13:52"],
    ["Aku","siap kak!! makasih udah nyapa, semoga jadwal Kakak juga lancar 🫶","13:53"]
  ],

  "Studio Mawar ✓": [
    ["Studio Mawar ✓","Halo, Kak Cayra. Kami dari tim Studio Mawar ingin mengucapkan terima kasih atas kerja sama di proyek terbaru. Tim produksi sangat mengapresiasi profesionalitas Kakak selama proses reading dan shooting.","12:08"],
    ["Studio Mawar ✓","Kami juga ingin mengundang Kakak untuk menghadiri screening terbatas pada Jumat mendatang. Detail acara dan undangan resmi akan dikirim melalui email oleh tim publikasi.","12:09"],
    ["Aku","Halo, Kak! Terima kasih banyak atas undangannya. Boleh dibantu kirim detail jam dan dress code-nya juga ya, supaya bisa aku koordinasikan dengan manajerku.","12:12"],
    ["Studio Mawar ✓","Tentu, Kak. Acara dimulai pukul 18.30 WIB dengan dress code formal evening. Kami akan mengirimkan undangan digital dan informasi lokasi secara terpisah.","12:13"],
    ["Aku","Baik, Kak. Nanti aku konfirmasi lagi setelah cek jadwal syuting. Terima kasih sudah menghubungi! 🤍","12:14"]
  ],

  "randomfan_1908": [
    ["randomfan_1908","KAK CAYRAAA aku mau bilang makasih 😭 Aku lagi capek banget akhir-akhir ini, terus nonton drama kamu pas malam dan entah kenapa jadi ngerasa ditemenin. Aku tahu ini mungkin cuma pesan random dari orang yang nggak kamu kenal, tapi akting kamu bikin aku bisa nangis setelah berhari-hari nahan semuanya. Semoga kamu juga punya orang-orang yang bikin kamu merasa ditemenin, ya. Jangan lupa istirahat, Kak. Kami dukung kamu selalu 🤍","14:01"],
    ["Aku","aduhh dek 😭🤍 makasih udah cerita ke aku. aku seneng banget kalau karya aku bisa nemenin kamu walaupun cuma sedikit. kamu juga jangan maksa diri buat selalu kuat yaa. istirahat kalau capek, nangis kalau memang pengen nangis. peluk jauh dari Cayra 🫂","14:06"],
    ["randomfan_1908","AKU DIBALES 😭😭 makasih banyak kak, aku screenshot buat kenang-kenangan boleh kan","14:07"],
    ["Aku","BOLEH BANGET HAHAHA tapi jangan dijual ya, nanti aku minta royalti 😭🤏","14:08"]
  ],

  "hater_404": [
    ["hater_404","Sok terkenal banget. Baru juga jadi pemeran utama udah berasa paling hebat.","14:10"],
    ["hater_404","Senyum di kamera doang ramahnya. Aslinya pasti nyebelin.","14:10"],
    ["Aku","kak, aku bahkan ga kenal kamu 😭 kalau ada yang bikin kamu ga suka sama aku, boleh ngomong baik-baik. tapi jangan asal nebak kepribadian orang ya","14:13"],
    ["hater_404","cieee jawab DM. pencitraan banget.","14:14"],
    ["Aku","kalau aku diem dibilang sombong, kalau jawab dibilang pencitraan. aku harus jawab pake bahasa apa lagi nih 😭","14:15"],
    ["hater_404","udah lah ga usah sok bijak.","14:16"],
    ["Aku","oke. semoga hari kamu membaik ya. aku lanjut kerja dulu.","14:17"]
  ],

  "fashionbyrara": [
    ["fashionbyrara","Kak Cayra, maaf mengganggu! Aku Rara dari tim styling. Kami ingin mengirimkan beberapa opsi outfit untuk acara premiere minggu depan. Apakah Kakak lebih nyaman dengan warna navy, ivory, atau dusty blue?","11:02"],
    ["Aku","Hai Kak Rara! Wah, aku suka dusty blue sama ivory. Tapi aku cek jadwal dulu ya biar bisa fitting tanpa bentrok syuting.","11:05"],
    ["fashionbyrara","Siap, Kak. Nanti aku koordinasikan dengan Mbak Stezi. Semoga hari ini shooting-nya lancar!","11:06"],
    ["Aku","makasih kak! titip salam buat tim styling yaa 🤍","11:07"]
  ],

  "cayra_fanbase": [
    ["cayra_fanbase","KAKK, kita mau bikin project kecil buat ulang tahun debut drama kamu. Boleh minta satu pesan singkat untuk teman-teman yang selalu dukung kamu?","10:20"],
    ["Aku","YA AMPUN KALIAN GERCEP BANGET 😭🤍 makasih udah mau bikin sesuatu buat aku. pesanku: jangan lupa bahagia di hidup kalian sendiri juga ya. aku seneng kalian ada di sini, tapi aku juga pengen kalian punya banyak alasan buat senyum di luar layar.","10:25"],
    ["cayra_fanbase","KAMI SAYANG CAYRAAAA 😭🫶","10:26"],
    ["Aku","aku juga sayang kalian, tapi tolong jangan spam stezi ya, dia gampang panik HAHAHA","10:27"]
  ]
};

const notesData = [
  {
    title: "Hari ini berantakan",
    date: "23 Oktober 2026",
    body: "Jiaza masih aja bikin ulah. Udah diblok tapi masih kepikiran. Besok syuting, harus fokus. Jangan lupa makan siang sebelum Stezi ngamuk."
  },
  {
    title: "Stezi marah lagi",
    date: "22 Oktober 2026",
    body: "Stezi bilang jangan ulangi kejadian kemarin. Aku janji sih... tapi ya susah. Dia manajer apa alarm berjalan?"
  },
  {
    title: "Reminder",
    date: "23 Oktober 2026",
    body: "Bawa naskah, charger, air minum, dan jangan sampai ketemu orang aneh lagi. Fokus kerja, Cayra."
  }
];

const playlists = {
  "Hearts2Hearts": [
    "The Chase","Butterflies","STYLE","Focus","Pretty Please",
    "Apple Pie","Flutter","RUDE!","Heart Tea","Blue Moon"
  ],
  "BABYMONSTER": [
    "DRIP","SHEESH","FOREVER","Really Like You","BILLIONAIRE",
    "CLIK CLAK","Love In My Heart","PSYCHO","HOT SAUCE"
  ],
  "LE SSERAFIM": [
    "ANTIFRAGILE","EASY","Perfect Night","Smart","CRAZY",
    "UNFORGIVEN","FEARLESS","Eve, Psyche & The Bluebeard's wife"
  ],
  "Lagu Minang": [
    "Cando Tiado Paguno — Rayola",
    "Hilang Baru Taraso — Rayola",
    "Caia-Caia — Zhifanna"
  ],
  "Lagu Galau": [
    "Tuhan Tahu Kita Sama","Mangu","Tak Pernah Usai"
  ],
  "Arab": [
    "Bitiba'id Lih — Hamzawy","Shooq"
  ],
  "Indonesia & Dangdut": [
    "Nadia — Organik","No Comment — Tuty Wibowo",
    "Goyang Dumang","Aku Mah Apa","Sambalado"
  ]
};

const xPosts = {
  private: [
    {name:"cayra",handle:"@cayraafterhours",time:"2 menit",text:"capek jadi manusia yang harus menjelaskan kenapa dirinya capek.",replies:0,reposts:0,likes:0},
    {name:"cayra",handle:"@cayraafterhours",time:"18 menit",text:"hari ini pengen menghilang sebentar. bukan karena misterius, tapi karena males ditanya 'kenapa?' terus harus jawab 'gapapa'.",replies:2,reposts:4,likes:17},
    {name:"cayra",handle:"@cayraafterhours",time:"1 jam",text:"aku tuh bisa sabar. cuma kapasitas sabarku kadang kayak baterai 1% yang dipaksa buka maps.",replies:5,reposts:17,likes:82}
  ],
  public: [
    {name:"Cayra",handle:"@cayraofficial",time:"12 menit",text:"niatnya hari ini mau produktif. ternyata produktif mikirin mau produktifnya kapan.",replies:23,reposts:89,likes:1204},
    {name:"Cayra",handle:"@cayraofficial",time:"45 menit",text:"orang lain kalau jatuh bangkit lagi. aku kalau jatuh malah mikir, siapa yang naruh lantai di situ.",replies:41,reposts:156,likes:2831},
    {name:"Cayra",handle:"@cayraofficial",time:"3 jam",text:"selamat pagi untuk semua orang, kecuali alarm yang bunyi pas mimpinya lagi bagus-bagusnya.",replies:18,reposts:104,likes:1942}
  ]
};

function esc(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  })[ch]);
}

function avatar(name) {
  const colors = {
    "mnyt🐵":"linear-gradient(135deg,#efb6a4,#74504b)",
    "Stezi · Manajer":"linear-gradient(135deg,#c8b6e9,#765baf)",
    "Stezi":"linear-gradient(135deg,#c8b6e9,#765baf)",
    "Yebi":"linear-gradient(135deg,#b9d8c5,#43826c)",
    "Mama":"linear-gradient(135deg,#e9c9a5,#ae8062)",
    "Sutradara":"linear-gradient(135deg,#b7c7d9,#5d718a)",
    "Publicist":"linear-gradient(135deg,#e8aebd,#bd6988)",
    "PremRajveeeKumar_Real":"linear-gradient(135deg,#bda38f,#62483b)",
    "Nadin Putri ✓":"linear-gradient(135deg,#a9d7fa,#3e7eb9)",
    "Studio Mawar ✓":"linear-gradient(135deg,#b9d8c5,#43826c)",
    "randomfan_1908":"linear-gradient(135deg,#f3c2d9,#d56f9b)",
    "hater_404":"linear-gradient(135deg,#999,#444)",
    "fashionbyrara":"linear-gradient(135deg,#e9c7e4,#a26da2)",
    "cayra_fanbase":"linear-gradient(135deg,#b9d8f7,#6788c7)",
    "Cayra":"linear-gradient(135deg,#e9b6c7,#a55f82)"
  };

  const initial = name === "mnyt🐵" ? "J" :
    name === "PremRajveeeKumar_Real" ? "P" :
    name === "Nadin Putri ✓" ? "N" :
    name === "Studio Mawar ✓" ? "M" :
    name.charAt(0).toUpperCase();

  return `<span class="avatar" style="background:${colors[name] || "linear-gradient(135deg,#b6c7e9,#776baf)"}">${esc(initial)}</span>`;
}

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("id-ID", {
    hour:"2-digit", minute:"2-digit"
  });
  const date = now.toLocaleDateString("id-ID", {
    weekday:"long", day:"numeric", month:"long"
  });

  ["lock-time","lock-clock","home-time"].forEach(id => {
    if ($(id)) $(id).textContent = time;
  });

  ["lock-date","home-date"].forEach(id => {
    if ($(id)) $(id).textContent = date;
  });

  if ($("widget-day")) $("widget-day").textContent = now.getDate();
}

function updateDots() {
  $("pass-dots").querySelectorAll("i").forEach((dot,index) => {
    dot.classList.toggle("filled", index < passcode.length);
  });
}

function submitCode() {
  if (passcode === CORRECT_PASSCODE) {
    $("dial-screen").classList.add("hidden");
    $("lockscreen").classList.add("hidden");
    $("homescreen").classList.remove("hidden");
    $("pass-error").textContent = "";
  } else {
    $("pass-error").textContent = "Kode sandi salah. Coba lagi.";
    passcode = "";
    updateDots();
  }
}

$("unlock-open").addEventListener("click", () => {
  $("dial-screen").classList.remove("hidden");
  passcode = "";
  updateDots();
});

$("lockscreen").addEventListener("dblclick", () => {
  $("dial-screen").classList.remove("hidden");
  passcode = "";
  updateDots();
});

$("dial-cancel").addEventListener("click", () => {
  $("dial-screen").classList.add("hidden");
  passcode = "";
  updateDots();
  $("pass-error").textContent = "";
});

$("dial-pad").addEventListener("click", event => {
  const digit = event.target.closest("[data-digit]");
  if (digit && passcode.length < 6) {
    passcode += digit.dataset.digit;
    updateDots();
    if (passcode.length === 6) setTimeout(submitCode, 160);
  }
});

$("dial-delete").addEventListener("click", () => {
  passcode = passcode.slice(0,-1);
  updateDots();
  $("pass-error").textContent = "";
});

$("emergency-btn").addEventListener("click", () => {
  $("pass-error").textContent = "Panggilan darurat tidak tersedia di simulasi AU.";
});

$("flash-btn").addEventListener("click", () => {
  alert("Senter iPhone Cayra (simulasi).");
});

$("camera-shortcut").addEventListener("click", () => openApp("camera"));

document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => openApp(button.dataset.open));
});

$("app-back").addEventListener("click", () => {
  if (currentThread) {
    currentThread = null;
    renderApp(currentApp);
  } else {
    closeApp();
  }
});

$("home-indicator").addEventListener("click", () => {
  if (!$("homescreen").classList.contains("hidden")) return;
  closeApp();
});

$("app-more").addEventListener("click", () => {
  if (currentApp === "instagram") {
    alert("Instagram AU · DM dan notifikasi bersifat fiktif.");
  } else {
    alert("HP Cayra · simulasi AU.");
  }
});

function closeApp() {
  $("app-screen").classList.add("hidden");
  $("homescreen").classList.remove("hidden");
  currentThread = null;
  currentApp = "";
}

function openApp(name) {
  currentApp = name;
  currentThread = null;
  $("homescreen").classList.add("hidden");
  $("app-screen").classList.remove("hidden");
  renderApp(name);
}

function header(title, subtitle = "Cayra") {
  $("app-title").textContent = title;
  $("app-subtitle").textContent = subtitle;
}

function renderApp(name) {
  const content = $("app-content");
  content.innerHTML = "";

  if (name === "whatsapp") {
    header("WhatsApp","Pesan");
    renderChatList(content,whatsappChats,"whatsapp");
  } else if (name === "instagram") {
    header("Instagram","cayraofficial");
    renderIGList(content);
  } else if (name === "xapp") {
    header("X","Cayra");
    renderX(content);
  } else if (name === "spotify" || name === "music") {
    header(name === "spotify" ? "Spotify" : "Music","Musik favorit Cayra");
    renderSpotify(content);
  } else if (name === "notes") {
    header("Notes","iCloud");
    content.innerHTML = '<div class="section-title">Catatan</div>' +
      notesData.map(note => `
        <article class="note-card">
          <h3>${esc(note.title)}</h3>
          <small>${esc(note.date)}</small>
          <p>${esc(note.body)}</p>
        </article>
      `).join("");
  } else if (name === "photos") {
    header("Photos","Library");
    content.innerHTML = '<div class="section-title">Foto</div><div class="empty">Album AU Cayra<br><br>Tambahkan foto ke repository untuk menampilkan galeri karakter.</div>';
  } else if (name === "camera") {
    header("Camera","Simulasi");
    content.innerHTML = '<div class="empty">📷<br><br>Kamera AU belum terhubung ke kamera perangkat.</div>';
  } else if (name === "settings") {
    header("Settings","Cayra’s iPhone");
    content.innerHTML = `
      <div class="section-title">Pengaturan</div>
      <div class="setting-row">Wallpaper · Sky & clouds</div>
      <div class="setting-row">Face ID & Kode Sandi · Aktif</div>
      <div class="setting-row">Apple ID · Cayra</div>
      <div class="setting-row">Mode Fokus · Syuting</div>
      <div class="setting-row">Penyimpanan · 128 GB</div>`;
  } else if (name === "phoneapp") {
    header("Phone","Favorit");
    content.innerHTML = '<div class="section-title">Favorit</div>' +
      ["Stezi · Manajer","Mama","Yebi"].map(name =>
        `<div class="setting-row">${esc(name)}</div>`
      ).join("");
  }
}

function renderChatList(container,data,app) {
  container.innerHTML = `
    <div class="section-title">${app === "whatsapp" ? "Chats" : "Pesan"}</div>
    <div class="search">⌕　Cari nama atau pesan</div>`;

  Object.entries(data).forEach(([name,messages]) => {
    const last = messages[messages.length - 1];
    const row = document.createElement("button");
    row.className = "chat-row";
    row.innerHTML = `
      ${avatar(name)}
      <span class="chat-copy">
        <strong>${esc(name)}</strong>
        <p>${esc(last[1])}</p>
      </span>
      <span class="chat-meta">${esc(last[2])}</span>`;

    row.addEventListener("click", () => openThread(app,name));
    container.appendChild(row);
  });
}

function renderIGList(container) {
  container.innerHTML = `
    <div class="section-title">Pesan</div>
    <div class="search">⌕　Cari DM</div>
    <div class="ig-profile">
      ${avatar("Cayra")}
      <div>
        <b>cayraofficial</b>
        <p>Artis · akun AU</p>
        <small>Pesan dan percakapan Instagram</small>
      </div>
    </div>`;

  Object.entries(instagramDMs).forEach(([name,messages]) => {
    const last = messages[messages.length - 1];
    const row = document.createElement("button");
    row.className = "chat-row";

    const verified = name.includes("✓") ?
      ' <span class="verified">✓</span>' : "";

    row.innerHTML = `
      ${avatar(name)}
      <span class="chat-copy">
        <strong>${esc(name)}${verified}</strong>
        <p>${esc(last[1])}</p>
      </span>
      <span class="chat-meta">${esc(last[2])}</span>`;

    row.addEventListener("click", () => openThread("instagram",name));
    container.appendChild(row);
  });
}

function openThread(app,name) {
  currentThread = {app,name};

  const content = $("app-content");
  const data = app === "whatsapp" ? whatsappChats : instagramDMs;
  const messages = data[name] || [];

  header(name, app === "whatsapp" ?
    (name === "mnyt🐵" ? "terakhir dilihat baru-baru ini" : "online") :
    "Instagram · Pesan"
  );

  content.innerHTML = `
    <div class="thread">
      <div class="thread-top">
        ${avatar(name)}
        <div>
          <strong>${esc(name)}</strong>
          <small>${app === "instagram" ? "Pesan Instagram AU" : "online"}</small>
        </div>
      </div>
      <div class="thread-messages" id="thread-messages">
        ${messages.map(bubble).join("")}
      </div>
      <form class="chat-compose" id="chat-compose">
        <input id="chat-input" autocomplete="off" placeholder="Ketik pesan..." aria-label="Ketik pesan">
        <button type="submit" aria-label="Kirim pesan">➤</button>
      </form>
    </div>`;

  const messageBox = $("thread-messages");
  messageBox.scrollTop = messageBox.scrollHeight;

  $("chat-compose").addEventListener("submit",event => {
    event.preventDefault();

    const input = $("chat-input");
    const text = input.value.trim();
    if (!text) return;

    const now = new Date().toLocaleTimeString("id-ID", {
      hour:"2-digit",minute:"2-digit"
    });

    data[name].push(["Aku",text,now]);
    openThread(app,name);
  });
}

function bubble(message) {
  const [sender,text,time] = message;
  return `
    <div class="bubble ${sender === "Aku" ? "me" : "them"}">
      ${esc(text)}
      <time>${esc(time)}${sender === "Aku" ? " ✓✓" : ""}</time>
    </div>`;
}

function renderX(container) {
  container.innerHTML = `
    <div class="section-title">Beranda</div>
    <div class="account-tabs">
      <button data-account="private" class="${xAccount === "private" ? "active" : ""}">🔒 Akun privat</button>
      <button data-account="public" class="${xAccount === "public" ? "active" : ""}">🌐 Akun publik</button>
    </div>
    <form class="composer" id="x-form">
      <textarea id="x-text" rows="2" placeholder="Apa yang terjadi?!"></textarea>
      <button class="primary" type="submit">Post</button>
    </form>
    <div id="x-feed"></div>`;

  container.querySelectorAll("[data-account]").forEach(button => {
    button.addEventListener("click",() => {
      xAccount = button.dataset.account;
      renderX(container);
    });
  });

  $("x-form").addEventListener("submit",event => {
    event.preventDefault();

    const input = $("x-text");
    const text = input.value.trim();
    if (!text) return;

    xPosts[xAccount].unshift({
      name:xAccount === "private" ? "cayra" : "Cayra",
      handle:xAccount === "private" ? "@cayraafterhours" : "@cayraofficial",
      time:"sekarang",text,likes:0,reposts:0,replies:0
    });

    renderX(container);
  });

  const feed = $("x-feed");

  xPosts[xAccount].forEach(post => {
    const card = document.createElement("article");
    card.className = "post-card";
    card.innerHTML = `
      <div class="post-head">
        ${avatar("Cayra")}
        <div>
          <b>${esc(post.name)}</b>
          <div>${esc(post.handle)} · ${esc(post.time)}</div>
        </div>
      </div>
      <p class="post-text">${esc(post.text)}</p>
      <div class="post-actions">
        <span>♡ ${post.replies}</span>
        <span>↻ ${post.reposts}</span>
        <span>♥ ${post.likes}</span>
        <span>•••</span>
      </div>`;
    feed.appendChild(card);
  });
}

function renderSpotify(container) {
  container.innerHTML = `
    <div class="spotify-banner">
      <h2>Good evening, Cayra ✦</h2>
      <p>Playlist campur aduk: K-pop, dangdut, lagu galau, sampai lagu yang bikin lupa waktu.</p>
    </div>
    <div class="section-title">Playlist kamu</div>`;

  Object.entries(playlists).forEach(([playlist,tracks]) => {
    const box = document.createElement("section");
    box.className = "playlist";

    box.innerHTML = `<h3>♫ ${esc(playlist)}</h3>` +
      tracks.map((track,index) => `
        <div class="track">
          <span class="track-num">${index + 1}</span>
          <span class="track-info">
            <b>${esc(track)}</b>
            <small>Playlist Cayra · cari lagu</small>
          </span>
          <button type="button" aria-label="Cari lagu ${esc(track)}" data-track="${esc(track)}">▶</button>
        </div>
      `).join("");

    box.querySelectorAll("[data-track]").forEach(button => {
      button.addEventListener("click",() => {
        const query = encodeURIComponent(button.dataset.track + " official audio");
        window.open(
          "https://www.youtube.com/results?search_query=" + query,
          "_blank",
          "noopener,noreferrer"
        );
      });
    });

    container.appendChild(box);
  });

  container.insertAdjacentHTML("beforeend",`
    <div class="empty">
      Daftar lagu ini merupakan playlist simulasi.
      Tombol putar membuka pencarian lagu di YouTube karena
      pemutaran Spotify langsung belum terhubung.
    </div>`);
}

updateClock();
setInterval(updateClock,15000);
