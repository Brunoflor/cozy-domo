/**
 * Cozy Domo — all guest-facing text.
 *
 * How to edit
 * - Each sentence has one field per language: it, en, es, fr, de, pt, zh, ja, ar.
 * - A missing language falls back to English (en).
 * - Place names and street addresses are plain strings (they stay the same).
 * - Icons: house, key, pin, parking, wifi, rules, bus, sofa, compass, info,
 *   cup, plate, bag, cross, door, phone, plane, train, ferry.
 * - `type: "notes"` — add sentences to `paragraphs` as language objects.
 *   An empty list shows "Coming soon".
 * - `type: "places"` — add cards to `items` like the parking garages
 *   (`name`, `address`, `text` as a language object, `mapsUrl`).
 *   An empty list shows "Coming soon".
 * - Only add details you have checked. Do not guess passwords, phone
 *   numbers, prices, or opening hours.
 */
window.COZY_CONTENT = {
  "property": {
    "addressLines": [
      "Via Gregorio Mattei 26",
      "80133 Napoli"
    ],
    "addressLine": "Via Gregorio Mattei 26, 80133 Napoli",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Via+Gregorio+Mattei+26%2C+80133+Napoli"
  },
  "ui": {
    "pageTitle": {
      "it": "Cozy Domo — Guida per gli ospiti",
      "en": "Cozy Domo — Guest guide",
      "es": "Cozy Domo — Guía para huéspedes",
      "fr": "Cozy Domo — Guide des voyageurs",
      "de": "Cozy Domo — Gästeratgeber",
      "pt": "Cozy Domo — Guia para hóspedes",
      "zh": "Cozy Domo — 住客指南",
      "ja": "Cozy Domo — ゲストガイド",
      "ar": "Cozy Domo — دليل الضيوف"
    },
    "metaDescription": {
      "it": "Guida digitale per gli ospiti di Cozy Domo, a Napoli.",
      "en": "Digital welcome book for guests of Cozy Domo in Naples.",
      "es": "Guía digital para los huéspedes de Cozy Domo, en Nápoles.",
      "fr": "Guide numérique pour les voyageurs de Cozy Domo, à Naples.",
      "de": "Digitaler Willkommensguide für Gäste von Cozy Domo in Neapel.",
      "pt": "Guia digital para os hóspedes da Cozy Domo, em Nápoles.",
      "zh": "那不勒斯 Cozy Domo 住客数字指南。",
      "ja": "ナポリの Cozy Domo ゲスト向けデジタルガイド。",
      "ar": "دليل رقمي لضيوف Cozy Domo في نابولي."
    },
    "intro": {
      "it": "LIBRO DI BENVENUTO",
      "en": "WELCOME BOOK",
      "es": "LIBRO DE BIENVENIDA",
      "fr": "LIVRE D'ACCUEIL",
      "de": "WILLKOMMENSBUCH",
      "pt": "LIVRO DE BOAS-VINDAS",
      "zh": "欢迎手册",
      "ja": "ウェルカムブック",
      "ar": "كتاب الترحيب"
    },
    "musicLabel": {
      "it": "Musica jazz: attiva/disattiva",
      "en": "Jazz music: on/off",
      "es": "Música jazz: activar/desactivar",
      "fr": "Musique jazz : activer/désactiver",
      "de": "Jazzmusik: ein/aus",
      "pt": "Música jazz: ligar/desligar",
      "zh": "爵士乐：开/关",
      "ja": "ジャズ：オン／オフ",
      "ar": "موسيقى الجاز: تشغيل/إيقاف"
    },
    "musicCredit": {
      "it": "Musica: \"Lobby Time\", \"Night in Venice\", \"In Your Arms\" di Kevin MacLeod (incompetech.com), licenza {license}, tracce accorciate e ricodificate.",
      "en": "Music: \"Lobby Time\", \"Night in Venice\", \"In Your Arms\" by Kevin MacLeod (incompetech.com), licence {license}, tracks shortened and re-encoded.",
      "es": "Música: \"Lobby Time\", \"Night in Venice\", \"In Your Arms\" de Kevin MacLeod (incompetech.com), licencia {license}, pistas acortadas y recodificadas.",
      "fr": "Musique : \"Lobby Time\", \"Night in Venice\", \"In Your Arms\" de Kevin MacLeod (incompetech.com), licence {license}, pistes raccourcies et réencodées.",
      "de": "Musik: \"Lobby Time\", \"Night in Venice\", \"In Your Arms\" von Kevin MacLeod (incompetech.com), Lizenz {license}, Titel gekürzt und neu kodiert.",
      "pt": "Música: \"Lobby Time\", \"Night in Venice\", \"In Your Arms\" de Kevin MacLeod (incompetech.com), licença {license}, faixas encurtadas e recodificadas.",
      "zh": "音乐：\"Lobby Time\"、\"Night in Venice\"、\"In Your Arms\"，Kevin MacLeod (incompetech.com)，许可 {license}，曲目已缩短并重新编码。",
      "ja": "音楽：「Lobby Time」「Night in Venice」「In Your Arms」Kevin MacLeod (incompetech.com)、ライセンス {license}、短縮して再エンコードした音源。",
      "ar": "موسيقى: \"Lobby Time\" و\"Night in Venice\" و\"In Your Arms\" لـ Kevin MacLeod (incompetech.com)، رخصة {license}، مقاطع مختصرة وأعيد ترميزها."
    },
    "languageLabel": {
      "it": "Lingua",
      "en": "Language",
      "es": "Idioma",
      "fr": "Langue",
      "de": "Sprache",
      "pt": "Idioma",
      "zh": "语言",
      "ja": "言語",
      "ar": "اللغة"
    },
    "languageNow": {
      "it": "Italiano",
      "en": "English",
      "es": "Español",
      "fr": "Français",
      "de": "Deutsch",
      "pt": "Português",
      "zh": "中文",
      "ja": "日本語",
      "ar": "العربية"
    },
    "skip": {
      "it": "Vai alle sezioni",
      "en": "Skip to sections",
      "es": "Ir a las secciones",
      "fr": "Aller aux sections",
      "de": "Zu den Abschnitten",
      "pt": "Ir para as secções",
      "zh": "跳到栏目",
      "ja": "セクションへ移動",
      "ar": "انتقل إلى الأقسام"
    },
    "sectionsLabel": {
      "it": "Sezioni della guida",
      "en": "Guide sections",
      "es": "Secciones de la guía",
      "fr": "Sections du guide",
      "de": "Abschnitte des Guides",
      "pt": "Secções do guia",
      "zh": "指南栏目",
      "ja": "ガイドのセクション",
      "ar": "أقسام الدليل"
    },
    "back": {
      "it": "Indietro",
      "en": "Back",
      "es": "Atrás",
      "fr": "Retour",
      "de": "Zurück",
      "pt": "Voltar",
      "zh": "返回",
      "ja": "戻る",
      "ar": "رجوع"
    },
    "openMaps": {
      "it": "Apri in Google Maps",
      "en": "Open in Google Maps",
      "es": "Abrir en Google Maps",
      "fr": "Ouvrir dans Google Maps",
      "de": "In Google Maps öffnen",
      "pt": "Abrir no Google Maps",
      "zh": "在 Google 地图中打开",
      "ja": "Google マップで開く",
      "ar": "فتح في خرائط Google"
    },
    "newTab": {
      "it": "si apre in una nuova scheda",
      "en": "opens in a new tab",
      "es": "se abre en una pestaña nueva",
      "fr": "s'ouvre dans un nouvel onglet",
      "de": "öffnet sich in einem neuen Tab",
      "pt": "abre num novo separador",
      "zh": "在新标签页中打开",
      "ja": "新しいタブで開きます",
      "ar": "يفتح في علامة تبويب جديدة"
    },
    "routeHint": {
      "it": "Indicazioni in Google Maps, si apre in una nuova scheda",
      "en": "Google Maps directions, opens in a new tab",
      "es": "Indicaciones en Google Maps, se abre en una pestaña nueva",
      "fr": "Itinéraire Google Maps, s'ouvre dans un nouvel onglet",
      "de": "Route in Google Maps, öffnet sich in einem neuen Tab",
      "pt": "Indicações no Google Maps, abre num novo separador",
      "zh": "Google 地图路线，在新标签页中打开",
      "ja": "Google マップの経路。新しいタブで開きます",
      "ar": "الاتجاهات في خرائط Google، يفتح في علامة تبويب جديدة"
    },
    "addressLabel": {
      "it": "Indirizzo",
      "en": "Address",
      "es": "Dirección",
      "fr": "Adresse",
      "de": "Adresse",
      "pt": "Morada",
      "zh": "地址",
      "ja": "住所",
      "ar": "العنوان"
    },
    "routesLabel": {
      "it": "Come arrivare",
      "en": "How to get here",
      "es": "Cómo llegar",
      "fr": "Comment venir",
      "de": "Anreise",
      "pt": "Como chegar",
      "zh": "如何到达",
      "ja": "アクセス",
      "ar": "كيفية الوصول"
    },
    "comingSoon": {
      "it": "In arrivo",
      "en": "Coming soon",
      "es": "Próximamente",
      "fr": "Bientôt disponible",
      "de": "Demnächst",
      "pt": "Em breve",
      "zh": "即将更新",
      "ja": "近日公開",
      "ar": "قريبًا"
    },
    "comingSoonBody": {
      "it": "Questa sezione sarà aggiornata a breve.",
      "en": "This section will be updated soon.",
      "es": "Esta sección se actualizará pronto.",
      "fr": "Cette section sera mise à jour prochainement.",
      "de": "Dieser Abschnitt wird in Kürze aktualisiert.",
      "pt": "Esta secção será atualizada em breve.",
      "zh": "本栏目即将更新。",
      "ja": "このセクションは間もなく更新されます。",
      "ar": "سيُحدَّث هذا القسم قريبًا."
    }
  },
  "sections": [
    {
      "id": "welcome",
      "icon": "house",
      "title": {
        "it": "Benvenuti",
        "en": "Welcome",
        "es": "Bienvenidos",
        "fr": "Bienvenue",
        "de": "Willkommen",
        "pt": "Bem-vindos",
        "zh": "欢迎",
        "ja": "ようこそ",
        "ar": "أهلاً بكم"
      },
      "type": "notes",
      "paragraphs": []
    },
    {
      "id": "checkin",
      "icon": "key",
      "title": {
        "it": "Check-in",
        "en": "Check-in",
        "es": "Check-in",
        "fr": "Check-in",
        "de": "Check-in",
        "pt": "Check-in",
        "zh": "入住",
        "ja": "チェックイン",
        "ar": "تسجيل الوصول"
      },
      "type": "notes",
      "paragraphs": []
    },
    {
      "id": "location",
      "icon": "pin",
      "title": {
        "it": "Posizione",
        "en": "Location",
        "es": "Ubicación",
        "fr": "Emplacement",
        "de": "Lage",
        "pt": "Localização",
        "zh": "位置",
        "ja": "場所",
        "ar": "الموقع"
      },
      "type": "directions",
      "routes": [
        {
          "id": "airport",
          "icon": "plane",
          "title": {
            "it": "Aeroporto",
            "en": "Airport",
            "es": "Aeropuerto",
            "fr": "Aéroport",
            "de": "Flughafen",
            "pt": "Aeroporto",
            "zh": "机场",
            "ja": "空港",
            "ar": "المطار"
          },
          "text": {
            "it": "Alibus fino a Piazza Garibaldi (circa 15 minuti), poi metro Linea 1 una fermata fino a Duomo. In taxi circa 25 minuti, traffico permettendo.",
            "en": "Take the Alibus to Piazza Garibaldi (about 15 minutes), then Metro Line 1 one stop to Duomo. By taxi about 25 minutes, depending on traffic.",
            "es": "Alibus hasta Piazza Garibaldi (unos 15 minutos), luego metro Linea 1, una parada hasta Duomo. En taxi unos 25 minutos, según el tráfico.",
            "fr": "Alibus jusqu'à Piazza Garibaldi (environ 15 minutes), puis métro Linea 1, un arrêt jusqu'à Duomo. En taxi environ 25 minutes, selon la circulation.",
            "de": "Alibus bis Piazza Garibaldi (etwa 15 Minuten), dann Metro Linea 1 eine Station bis Duomo. Mit dem Taxi etwa 25 Minuten, je nach Verkehr.",
            "pt": "Alibus até Piazza Garibaldi (cerca de 15 minutos), depois metro Linea 1, uma paragem até Duomo. De táxi cerca de 25 minutos, consoante o trânsito.",
            "zh": "乘坐 Alibus 至 Piazza Garibaldi（约 15 分钟），然后乘地铁 Linea 1 一站到 Duomo。出租车约 25 分钟，视路况而定。",
            "ja": "Alibus で Piazza Garibaldi まで（約15分）。その後、メトロ Linea 1 で Duomo まで1駅。タクシーなら約25分（交通状況によります）。",
            "ar": "استقل Alibus إلى Piazza Garibaldi (حوالي 15 دقيقة)، ثم مترو Linea 1 محطة واحدة حتى Duomo. بالتاكسي حوالي 25 دقيقة، حسب الزحام."
          },
          "mapsUrl": "https://www.google.com/maps/dir/?api=1&origin=Aeroporto+di+Napoli+Capodichino&destination=Via+Gregorio+Mattei+26%2C+80133+Napoli&travelmode=transit"
        },
        {
          "id": "station",
          "icon": "train",
          "title": {
            "it": "Stazione Centrale",
            "en": "Central Station",
            "es": "Estación central",
            "fr": "Gare centrale",
            "de": "Hauptbahnhof",
            "pt": "Estação central",
            "zh": "中央车站",
            "ja": "中央駅",
            "ar": "المحطة المركزية"
          },
          "text": {
            "it": "Metro Linea 1 dalla fermata Garibaldi, direzione Piscinola, una fermata fino a Duomo; poi circa 3 minuti a piedi. In alternativa circa 15 minuti a piedi.",
            "en": "Take Metro Line 1 from Garibaldi (towards Piscinola) one stop to Duomo, then walk about 3 minutes. Or walk about 15 minutes.",
            "es": "Metro Linea 1 desde la parada Garibaldi, dirección Piscinola, una parada hasta Duomo; después unos 3 minutos a pie. También se puede ir a pie en unos 15 minutos.",
            "fr": "Métro Linea 1 depuis l'arrêt Garibaldi, direction Piscinola, un arrêt jusqu'à Duomo, puis environ 3 minutes à pied. Sinon, environ 15 minutes à pied.",
            "de": "Metro Linea 1 ab Haltestelle Garibaldi, Richtung Piscinola, eine Station bis Duomo; danach etwa 3 Minuten zu Fuß. Oder etwa 15 Minuten zu Fuß.",
            "pt": "Metro Linea 1 a partir da paragem Garibaldi, direção Piscinola, uma paragem até Duomo; depois cerca de 3 minutos a pé. Em alternativa, cerca de 15 minutos a pé.",
            "zh": "从 Garibaldi 站乘地铁 Linea 1，开往 Piscinola，坐一站到 Duomo，再步行约 3 分钟。也可以步行约 15 分钟。",
            "ja": "Garibaldi 駅からメトロ Linea 1（Piscinola 方面）で1駅、Duomo へ。そこから徒歩約3分。または徒歩約15分。",
            "ar": "مترو Linea 1 من محطة Garibaldi باتجاه Piscinola، محطة واحدة حتى Duomo، ثم حوالي 3 دقائق سيرًا. أو حوالي 15 دقيقة سيرًا."
          },
          "mapsUrl": "https://www.google.com/maps/dir/?api=1&origin=Stazione+di+Napoli+Centrale&destination=Via+Gregorio+Mattei+26%2C+80133+Napoli&travelmode=transit"
        },
        {
          "id": "port",
          "icon": "ferry",
          "title": {
            "it": "Porto",
            "en": "Port",
            "es": "Puerto",
            "fr": "Port",
            "de": "Hafen",
            "pt": "Porto",
            "zh": "港口",
            "ja": "港",
            "ar": "الميناء"
          },
          "text": {
            "it": "Il sottopasso pedonale porta alla metro Municipio: Linea 1 direzione Centro Direzionale, due fermate fino a Duomo. A piedi circa 20 minuti.",
            "en": "From the port, a pedestrian underpass leads to Municipio metro station: Line 1 towards Centro Direzionale, two stops to Duomo. On foot about 20 minutes.",
            "es": "El paso subterráneo peatonal lleva al metro Municipio: Linea 1 dirección Centro Direzionale, dos paradas hasta Duomo. A pie, unos 20 minutos.",
            "fr": "Le passage souterrain pour piétons mène au métro Municipio : Linea 1 direction Centro Direzionale, deux arrêts jusqu'à Duomo. À pied, environ 20 minutes.",
            "de": "Die Fußgängerunterführung führt zur Metro Municipio: Linea 1 Richtung Centro Direzionale, zwei Stationen bis Duomo. Zu Fuß etwa 20 Minuten.",
            "pt": "A passagem subterrânea para peões leva ao metro Municipio: Linea 1 direção Centro Direzionale, duas paragens até Duomo. A pé, cerca de 20 minutos.",
            "zh": "人行地下通道通往地铁站 Municipio：乘坐 Linea 1 开往 Centro Direzionale，两站到 Duomo。步行约 20 分钟。",
            "ja": "歩行者用の地下道を進むとメトロ Municipio。Linea 1（Centro Direzionale 方面）で2駅、Duomo まで。徒歩なら約20分。",
            "ar": "الممر تحت الأرض للمشاة يؤدي إلى مترو Municipio: Linea 1 باتجاه Centro Direzionale، محطتان حتى Duomo. سيرًا حوالي 20 دقيقة."
          },
          "mapsUrl": "https://www.google.com/maps/dir/?api=1&origin=Molo+Beverello%2C+Napoli&destination=Via+Gregorio+Mattei+26%2C+80133+Napoli&travelmode=transit"
        }
      ]
    },
    {
      "id": "parking",
      "icon": "parking",
      "title": {
        "it": "Parcheggi",
        "en": "Parking",
        "es": "Aparcamiento",
        "fr": "Parking",
        "de": "Parken",
        "pt": "Estacionamento",
        "zh": "停车",
        "ja": "駐車場",
        "ar": "مواقف السيارات"
      },
      "type": "places",
      "notice": {
        "it": "La casa è fuori dalla ZTL del Centro Antico, ma non entrate in auto nel centro storico a nord di Corso Umberto I: i varchi elettronici multano automaticamente. Sulle strisce blu la sosta si paga di norma dalle 8 alle 24 (parcometro o app).",
        "en": "The apartment is outside the 'Centro Antico' ZTL (restricted traffic zone), but do not drive into the old town north of Corso Umberto I: cameras fine you automatically. Blue-line street parking is normally paid 8:00–24:00 (meter or app).",
        "es": "El apartamento está fuera de la ZTL del Centro Antico, pero no entre en coche en el centro histórico al norte de Corso Umberto I: las cámaras multan automáticamente. En las líneas azules el estacionamiento se paga normalmente de 8:00–24:00 (parquímetro o aplicación).",
        "fr": "L'appartement est en dehors de la ZTL du Centro Antico, mais n'entrez pas en voiture dans le centre historique au nord de Corso Umberto I : les caméras verbalisent automatiquement. Sur les lignes bleues, le stationnement se paie en principe de 8:00–24:00 (horodateur ou application).",
        "de": "Die Wohnung liegt außerhalb der ZTL des Centro Antico. Fahren Sie aber nicht in die Altstadt nördlich des Corso Umberto I: Kameras verhängen automatisch ein Bußgeld. An den blauen Linien ist das Parken in der Regel von 8:00–24:00 kostenpflichtig (Parkuhr oder App).",
        "pt": "A casa fica fora da ZTL do Centro Antico, mas não entre de carro no centro histórico a norte de Corso Umberto I: as câmaras multam automaticamente. Nas linhas azuis o estacionamento paga-se normalmente das 8:00–24:00 (parquímetro ou aplicação).",
        "zh": "公寓位于 Centro Antico 的 ZTL 范围之外，但请勿驾车进入 Corso Umberto I 以北的老城区：摄像头会自动开罚单。蓝色标线车位通常在 8:00–24:00 收费（计时器或应用程序）。",
        "ja": "お部屋は Centro Antico の ZTL の外にあります。ただし Corso Umberto I より北の旧市街には車で入らないでください。カメラが自動で反則金を科します。青線の路上駐車は通常 8:00–24:00 が有料です（パーキングメーターまたはアプリ）。",
        "ar": "الشقة خارج نطاق ZTL في Centro Antico، لكن لا تدخلوا بالسيارة إلى البلدة القديمة شمال Corso Umberto I: الكاميرات تغرّم تلقائيًا. الوقوف على الخطوط الزرقاء مدفوع عادة من 8:00–24:00 (عدّاد أو تطبيق)."
      },
      "items": [
        {
          "name": "Parking Rettifilo",
          "address": "Vico Campagnari 3",
          "text": {
            "it": "Garage coperto e custodito a 2 minuti a piedi, aperto 7:00–24:00 (si lasciano le chiavi).",
            "en": "Covered, attended garage 2 minutes' walk away, open 7:00–24:00 (you leave your keys).",
            "es": "Garaje cubierto y vigilado a 2 minutos a pie, abierto 7:00–24:00 (se dejan las llaves).",
            "fr": "Garage couvert et gardé à 2 minutes à pied, ouvert 7:00–24:00 (on laisse les clés).",
            "de": "Überdachte, bewachte Garage, 2 Minuten zu Fuß, geöffnet 7:00–24:00 (Sie geben die Schlüssel ab).",
            "pt": "Garagem coberta e vigiada a 2 minutos a pé, aberta 7:00–24:00 (deixam-se as chaves).",
            "zh": "室内有人看管的车库，步行 2 分钟，开放时间 7:00–24:00（需留下车钥匙）。",
            "ja": "屋根付きの有人ガレージ。徒歩2分。営業 7:00–24:00（鍵を預けます）。",
            "ar": "مرآب مغطى وخاضع للحراسة على بعد دقيقتين سيرًا، مفتوح 7:00–24:00 (تُترك المفاتيح)."
          },
          "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Parking+Rettifilo+Vico+Campagnari+3+Napoli"
        },
        {
          "name": "Parking del Conte",
          "address": "Vico Orto del Conte 18",
          "text": {
            "it": "Garage a circa 3 minuti a piedi, aperto dalla mattina fino a mezzanotte circa.",
            "en": "Garage about 3 minutes' walk away, open from morning until around midnight.",
            "es": "Garaje a unos 3 minutos a pie, abierto desde la mañana hasta alrededor de medianoche.",
            "fr": "Garage à environ 3 minutes à pied, ouvert du matin jusqu'à environ minuit.",
            "de": "Garage etwa 3 Minuten zu Fuß, geöffnet vom Morgen bis gegen Mitternacht.",
            "pt": "Garagem a cerca de 3 minutos a pé, aberta de manhã até cerca da meia-noite.",
            "zh": "车库，步行约 3 分钟，大约从早晨开放到午夜。",
            "ja": "徒歩約3分のガレージ。朝から深夜0時ごろまで営業。",
            "ar": "مرآب على بعد حوالي 3 دقائق سيرًا، مفتوح من الصباح حتى منتصف الليل تقريبًا."
          },
          "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Parking+del+Conte+Vico+Orto+del+Conte+18+Napoli"
        },
        {
          "name": "Parcheggio Low Cost Rinaldi",
          "address": "Via San Cosmo fuori Porta Nolana 91",
          "text": {
            "it": "Garage coperto aperto 24 ore, a circa 13 minuti a piedi, vicino alla Stazione Centrale.",
            "en": "Covered garage open 24 hours, about 13 minutes' walk away, near the Central Station.",
            "es": "Garaje cubierto abierto las 24 horas, a unos 13 minutos a pie, cerca de la Estación Central.",
            "fr": "Garage couvert ouvert 24 heures sur 24, à environ 13 minutes à pied, près de la gare centrale.",
            "de": "Überdachte Garage, 24 Stunden geöffnet, etwa 13 Minuten zu Fuß, in der Nähe des Hauptbahnhofs.",
            "pt": "Garagem coberta aberta 24 horas, a cerca de 13 minutos a pé, perto da Estação Central.",
            "zh": "室内车库，24 小时开放，步行约 13 分钟，靠近中央车站。",
            "ja": "屋根付きガレージ。24時間営業。徒歩約13分。中央駅の近く。",
            "ar": "مرآب مغطى مفتوح 24 ساعة، على بعد حوالي 13 دقيقة سيرًا، قرب المحطة المركزية."
          },
          "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Parcheggio+Low+Cost+Rinaldi+Via+San+Cosmo+fuori+Porta+Nolana+91+Napoli"
        }
      ]
    },
    {
      "id": "wifi",
      "icon": "wifi",
      "title": {
        "it": "Wi-Fi",
        "en": "Wi-Fi",
        "es": "Wi-Fi",
        "fr": "Wi-Fi",
        "de": "Wi-Fi",
        "pt": "Wi-Fi",
        "zh": "Wi-Fi",
        "ja": "Wi-Fi",
        "ar": "Wi-Fi"
      },
      "type": "notes",
      "paragraphs": []
    },
    {
      "id": "rules",
      "icon": "rules",
      "title": {
        "it": "Regole",
        "en": "House rules",
        "es": "Normas",
        "fr": "Règles",
        "de": "Hausregeln",
        "pt": "Regras",
        "zh": "住宿须知",
        "ja": "ハウスルール",
        "ar": "قواعد المنزل"
      },
      "type": "notes",
      "paragraphs": []
    },
    {
      "id": "transport",
      "icon": "bus",
      "title": {
        "it": "Trasporti",
        "en": "Transport",
        "es": "Transporte",
        "fr": "Transports",
        "de": "Verkehr",
        "pt": "Transportes",
        "zh": "交通",
        "ja": "交通",
        "ar": "المواصلات"
      },
      "type": "notes",
      "paragraphs": []
    },
    {
      "id": "amenities",
      "icon": "sofa",
      "title": {
        "it": "Servizi",
        "en": "Amenities",
        "es": "Servicios",
        "fr": "Équipements",
        "de": "Ausstattung",
        "pt": "Comodidades",
        "zh": "设施",
        "ja": "設備",
        "ar": "المرافق"
      },
      "type": "notes",
      "paragraphs": []
    },
    {
      "id": "activities",
      "icon": "compass",
      "title": {
        "it": "Attività",
        "en": "Things to do",
        "es": "Qué hacer",
        "fr": "Activités",
        "de": "Aktivitäten",
        "pt": "O que fazer",
        "zh": "活动",
        "ja": "アクティビティ",
        "ar": "أنشطة"
      },
      "type": "notes",
      "paragraphs": []
    },
    {
      "id": "info",
      "icon": "info",
      "title": {
        "it": "Info",
        "en": "Info",
        "es": "Info",
        "fr": "Info",
        "de": "Info",
        "pt": "Info",
        "zh": "信息",
        "ja": "案内",
        "ar": "معلومات"
      },
      "type": "notes",
      "paragraphs": []
    },
    {
      "id": "bars",
      "icon": "cup",
      "title": {
        "it": "Bar",
        "en": "Bars",
        "es": "Bares",
        "fr": "Bars",
        "de": "Bars",
        "pt": "Bares",
        "zh": "酒吧",
        "ja": "バー",
        "ar": "بارات"
      },
      "type": "places",
      "items": []
    },
    {
      "id": "restaurants",
      "icon": "plate",
      "title": {
        "it": "Ristoranti",
        "en": "Restaurants",
        "es": "Restaurantes",
        "fr": "Restaurants",
        "de": "Restaurants",
        "pt": "Restaurantes",
        "zh": "餐厅",
        "ja": "レストラン",
        "ar": "مطاعم"
      },
      "type": "places",
      "items": []
    },
    {
      "id": "shopping",
      "icon": "bag",
      "title": {
        "it": "Shopping",
        "en": "Shopping",
        "es": "Shopping",
        "fr": "Shopping",
        "de": "Shopping",
        "pt": "Compras",
        "zh": "购物",
        "ja": "ショッピング",
        "ar": "تسوق"
      },
      "type": "places",
      "items": []
    },
    {
      "id": "emergencies",
      "icon": "cross",
      "title": {
        "it": "Emergenze",
        "en": "Emergencies",
        "es": "Emergencias",
        "fr": "Urgences",
        "de": "Notfälle",
        "pt": "Emergências",
        "zh": "紧急",
        "ja": "緊急",
        "ar": "طوارئ"
      },
      "type": "notes",
      "paragraphs": []
    },
    {
      "id": "checkout",
      "icon": "door",
      "title": {
        "it": "Check-out",
        "en": "Check-out",
        "es": "Check-out",
        "fr": "Check-out",
        "de": "Check-out",
        "pt": "Check-out",
        "zh": "退房",
        "ja": "チェックアウト",
        "ar": "تسجيل المغادرة"
      },
      "type": "notes",
      "paragraphs": []
    },
    {
      "id": "contacts",
      "icon": "phone",
      "title": {
        "it": "Contatti",
        "en": "Contacts",
        "es": "Contactos",
        "fr": "Contacts",
        "de": "Kontakte",
        "pt": "Contactos",
        "zh": "联系",
        "ja": "連絡先",
        "ar": "جهات الاتصال"
      },
      "type": "notes",
      "paragraphs": []
    }
  ]
};
