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
 * - `type: "guide"` — ordered `blocks` (time, text, steps, photo, code,
 *   notice, buttons, taxcalc, place, checklist, faq, closing).
 *   An empty list shows "Coming soon". Emphasis is **double asterisks**.
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
    "copied": {
      "it": "Copiato",
      "en": "Copied",
      "es": "Copiado",
      "fr": "Copié",
      "de": "Kopiert",
      "pt": "Copiado",
      "zh": "已复制",
      "ja": "コピーしました",
      "ar": "تم النسخ"
    },
    "copyHint": {
      "it": "Tocca per copiare",
      "en": "Tap to copy",
      "es": "Toca para copiar",
      "fr": "Touchez pour copier",
      "de": "Tippen zum Kopieren",
      "pt": "Toque para copiar",
      "zh": "点按复制",
      "ja": "タップしてコピー",
      "ar": "اضغط للنسخ"
    },
    "guests": {
      "it": "Ospiti",
      "en": "Guests",
      "es": "Huéspedes",
      "fr": "Voyageurs",
      "de": "Gäste",
      "pt": "Hóspedes",
      "zh": "住客",
      "ja": "ゲスト",
      "ar": "الضيوف"
    },
    "nights": {
      "it": "Notti",
      "en": "Nights",
      "es": "Noches",
      "fr": "Nuits",
      "de": "Nächte",
      "pt": "Noites",
      "zh": "晚",
      "ja": "泊",
      "ar": "ليالٍ"
    },
    "totalLabel": {
      "it": "Totale",
      "en": "Total",
      "es": "Total",
      "fr": "Total",
      "de": "Summe",
      "pt": "Total",
      "zh": "合计",
      "ja": "合計",
      "ar": "المجموع"
    },
    "less": {
      "it": "Diminuisci",
      "en": "Decrease",
      "es": "Reducir",
      "fr": "Diminuer",
      "de": "Verringern",
      "pt": "Diminuir",
      "zh": "减少",
      "ja": "減らす",
      "ar": "إنقاص"
    },
    "more": {
      "it": "Aumenta",
      "en": "Increase",
      "es": "Aumentar",
      "fr": "Augmenter",
      "de": "Erhöhen",
      "pt": "Aumentar",
      "zh": "增加",
      "ja": "増やす",
      "ar": "زيادة"
    },
    "progress": {
      "it": "{done} di {total} completati",
      "en": "{done} of {total} completed",
      "es": "{done} de {total} completados",
      "fr": "{done} sur {total} terminés",
      "de": "{done} von {total} erledigt",
      "pt": "{done} de {total} concluídos",
      "zh": "已完成 {done}/{total}",
      "ja": "{total} 件中 {done} 件完了",
      "ar": "{done} من {total} مكتملة"
    },
    "reset": {
      "it": "Azzera",
      "en": "Reset",
      "es": "Restablecer",
      "fr": "Réinitialiser",
      "de": "Zurücksetzen",
      "pt": "Repor",
      "zh": "重置",
      "ja": "リセット",
      "ar": "إعادة تعيين"
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
      "type": "guide",
      "blocks": [
        {
          "type": "time",
          "label": {
            "it": "Self check-in",
            "en": "Self check-in",
            "es": "Check-in autónomo",
            "fr": "Check-in autonome",
            "de": "Self-Check-in",
            "pt": "Check-in autónomo",
            "zh": "自助入住",
            "ja": "セルフチェックイン",
            "ar": "تسجيل وصول ذاتي"
          },
          "value": "15:00"
        },
        {
          "type": "text",
          "body": {
            "it": "Potete arrivare **a qualsiasi ora**, anche di notte: il check-in è **autonomo**.",
            "en": "You can arrive **at any time**, even at night: check-in is **self-service**.",
            "es": "Podéis llegar **a cualquier hora**, también de noche: el check-in es **autónomo**.",
            "fr": "Vous pouvez arriver **à n'importe quelle heure**, même la nuit : le check-in est **autonome**.",
            "de": "Sie können **zu jeder Uhrzeit** ankommen, auch nachts: der Check-in ist **selbstständig**.",
            "pt": "Podem chegar **a qualquer hora**, mesmo de noite: o check-in é **autónomo**.",
            "zh": "你们可以**随时到达**，包括夜间：入住是**自助的**。",
            "ja": "**いつでも**到着できます。夜でも大丈夫です。チェックインは**セルフ**です。",
            "ar": "يمكنكم الوصول **في أي وقت**، حتى ليلاً: تسجيل الوصول **ذاتي**."
          }
        },
        {
          "type": "text",
          "body": {
            "it": "Se arrivate prima, potete **lasciare i bagagli dalle 11:00** e tornare alle **15:00**, quando la casa sarà pronta.",
            "en": "If you arrive early, you can **leave your bags from 11:00** and come back at **15:00**, when the apartment will be ready.",
            "es": "Si llegáis antes, podéis **dejar el equipaje desde las 11:00** y volver a las **15:00**, cuando la casa estará lista.",
            "fr": "Si vous arrivez plus tôt, vous pouvez **déposer les bagages dès 11:00** et revenir à **15:00**, quand le logement sera prêt.",
            "de": "Wenn Sie früher ankommen, können Sie **das Gepäck ab 11:00 abgeben** und um **15:00** wiederkommen, wenn die Wohnung bereit ist.",
            "pt": "Se chegarem mais cedo, podem **deixar a bagagem a partir das 11:00** e voltar às **15:00**, quando a casa estiver pronta.",
            "zh": "如果提前到达，可以**从 11:00 起寄存行李**，**15:00** 再回来，那时房子会准备好。",
            "ja": "早く着いた場合は、**11:00から荷物を預け**、家の準備ができる**15:00**に戻ってください。",
            "ar": "إذا وصلتم مبكرًا، يمكنكم **ترك الحقائب من الساعة 11:00** والعودة في **15:00**، عندما يكون المنزل جاهزًا."
          }
        },
        {
          "type": "steps",
          "title": {
            "it": "Come entrare",
            "en": "How to get in",
            "es": "Cómo entrar",
            "fr": "Comment entrer",
            "de": "So kommen Sie hinein",
            "pt": "Como entrar",
            "zh": "如何进入",
            "ja": "入り方",
            "ar": "كيفية الدخول"
          },
          "items": [
            {
              "text": {
                "it": "Arrivati in **Via Gregorio Mattei 26**, suonate il **terzo pulsante senza nome** del citofono (quello cerchiato in foto).",
                "en": "When you reach **Via Gregorio Mattei 26**, press the **third unnamed button** on the intercom (the one circled in the photo).",
                "es": "Al llegar a **Via Gregorio Mattei 26**, tocad el **tercer botón sin nombre** del portero (el que está rodeado en la foto).",
                "fr": "Arrivés au **Via Gregorio Mattei 26**, sonnez le **troisième bouton sans nom** de l'interphone (celui entouré sur la photo).",
                "de": "Am **Via Gregorio Mattei 26** drücken Sie die **dritte Taste ohne Namen** an der Sprechanlage (die auf dem Foto eingekreist ist).",
                "pt": "Chegados à **Via Gregorio Mattei 26**, toquem no **terceiro botão sem nome** do intercomunicador (o que está circulado na foto).",
                "zh": "到达 **Via Gregorio Mattei 26** 后，按对讲机上**第三个没有名字的按钮**（照片里圈出的那个）。",
                "ja": "**Via Gregorio Mattei 26** に着いたら、インターホンの**名前のない3番目のボタン**（写真で丸をつけたもの）を押してください。",
                "ar": "عند الوصول إلى **Via Gregorio Mattei 26**، اضغطوا **الزر الثالث بلا اسم** في جهاز الاتصال (المُحاط بدائرة في الصورة)."
              },
              "photo": "images/citofono.webp",
              "alt": {
                "it": "Citofono: il terzo pulsante senza nome è cerchiato",
                "en": "Intercom: the third unnamed button is circled",
                "es": "Portero: el tercer botón sin nombre está rodeado",
                "fr": "Interphone : le troisième bouton sans nom est entouré",
                "de": "Sprechanlage: die dritte Taste ohne Namen ist eingekreist",
                "pt": "Intercomunicador: o terceiro botão sem nome está circulado",
                "zh": "对讲机：第三个没有名字的按钮被圈出",
                "ja": "インターホン：名前のない3番目のボタンに丸",
                "ar": "جهاز الاتصال: الزر الثالث بلا اسم مُحاط بدائرة"
              }
            },
            {
              "text": {
                "it": "Vi apriamo il **portone a distanza**.",
                "en": "We open the **street door remotely**.",
                "es": "Os abrimos el **portal a distancia**.",
                "fr": "Nous ouvrons le **portail à distance**.",
                "de": "Wir öffnen das **Haustor aus der Ferne**.",
                "pt": "Abrimos o **portão à distância**.",
                "zh": "我们会**远程打开大门**。",
                "ja": "**玄関ドアを遠隔で開けます**。",
                "ar": "نفتح **البوابة عن بُعد**."
              },
              "photo": "images/portone.webp",
              "alt": {
                "it": "Portone di Via Gregorio Mattei 26",
                "en": "Street door at Via Gregorio Mattei 26",
                "es": "Portal de Via Gregorio Mattei 26",
                "fr": "Portail du Via Gregorio Mattei 26",
                "de": "Haustor in der Via Gregorio Mattei 26",
                "pt": "Portão da Via Gregorio Mattei 26",
                "zh": "Via Gregorio Mattei 26 的大门",
                "ja": "Via Gregorio Mattei 26 の玄関ドア",
                "ar": "بوابة Via Gregorio Mattei 26"
              }
            },
            {
              "text": {
                "it": "Salite a piedi al **secondo piano**: non c'è l'ascensore.",
                "en": "Walk up to the **second floor**: there is no lift.",
                "es": "Subid a pie al **segundo piso**: no hay ascensor.",
                "fr": "Montez à pied au **deuxième étage** : il n'y a pas d'ascenseur.",
                "de": "Gehen Sie zu Fuß in den **zweiten Stock**: es gibt keinen Aufzug.",
                "pt": "Subam a pé ao **segundo andar**: não há elevador.",
                "zh": "步行上到**二楼**：没有电梯。",
                "ja": "**2階**まで歩いて上がってください。エレベーターはありません。",
                "ar": "اصعدوا سيرًا إلى **الطابق الثاني**: لا يوجد مصعد."
              }
            },
            {
              "text": {
                "it": "Trovate la porta **CV Home**: la **cassetta delle chiavi è a destra** della porta. Inserite il codice e prendete le chiavi.",
                "en": "Find the door marked **CV Home**: the **key box is to the right** of the door. Enter the code and take the keys.",
                "es": "Encontrad la puerta **CV Home**: la **caja de llaves está a la derecha** de la puerta. Introducid el código y coged las llaves.",
                "fr": "Trouvez la porte **CV Home** : la **boîte à clés est à droite** de la porte. Entrez le code et prenez les clés.",
                "de": "Sie finden die Tür **CV Home**: das **Schlüsselfach ist rechts** neben der Tür. Geben Sie den Code ein und nehmen Sie die Schlüssel.",
                "pt": "Encontrem a porta **CV Home**: a **caixa das chaves fica à direita** da porta. Introduzam o código e peguem nas chaves.",
                "zh": "找到标有 **CV Home** 的门：**钥匙盒在门的右侧**。输入密码，取走钥匙。",
                "ja": "**CV Home** のドアを見つけてください。**キーボックスはドアの右側**にあります。コードを入力して鍵を取ってください。",
                "ar": "ستجدون الباب **CV Home**: **صندوق المفاتيح على يمين** الباب. أدخلوا الرمز وخذوا المفاتيح."
              },
              "photo": "images/porta.webp",
              "alt": {
                "it": "Porta CV Home con la cassetta delle chiavi a destra",
                "en": "CV Home door with the key box on the right",
                "es": "Puerta CV Home con la caja de llaves a la derecha",
                "fr": "Porte CV Home avec la boîte à clés à droite",
                "de": "Tür CV Home mit dem Schlüsselfach rechts",
                "pt": "Porta CV Home com a caixa das chaves à direita",
                "zh": "CV Home 的门，钥匙盒在右侧",
                "ja": "CV Home のドア。キーボックスは右側",
                "ar": "باب CV Home وصندوق المفاتيح على اليمين"
              }
            },
            {
              "text": {
                "it": "Entrate e **benvenuti a Cozy Domo!**",
                "en": "Come in, and **welcome to Cozy Domo!**",
                "es": "Entrad y **¡bienvenidos a Cozy Domo!**",
                "fr": "Entrez, et **bienvenue à Cozy Domo !**",
                "de": "Treten Sie ein, und **willkommen bei Cozy Domo!**",
                "pt": "Entrem e **bem-vindos à Cozy Domo!**",
                "zh": "请进，**欢迎来到 Cozy Domo！**",
                "ja": "入ってください。**Cozy Domo へようこそ！**",
                "ar": "ادخلوا و**أهلاً بكم في Cozy Domo!**"
              }
            }
          ]
        },
        {
          "type": "code",
          "label": {
            "it": "Codice cassetta delle chiavi",
            "en": "Key-box code",
            "es": "Código de la caja de llaves",
            "fr": "Code de la boîte à clés",
            "de": "Code für das Schlüsselfach",
            "pt": "Código da caixa das chaves",
            "zh": "钥匙盒密码",
            "ja": "キーボックスのコード",
            "ar": "رمز صندوق المفاتيح"
          },
          "code": "0026",
          "note": {
            "it": "Valido solo per il vostro soggiorno",
            "en": "Valid only for your stay",
            "es": "Válido solo para vuestra estancia",
            "fr": "Valable uniquement pour votre séjour",
            "de": "Nur für Ihren Aufenthalt gültig",
            "pt": "Válido apenas para a vossa estadia",
            "zh": "仅在您入住期间有效",
            "ja": "ご滞在中のみ有効です",
            "ar": "صالح فقط لمدة إقامتكم"
          }
        },
        {
          "type": "buttons",
          "items": [
            {
              "kind": "tel",
              "label": {
                "it": "Chiamaci",
                "en": "Call us",
                "es": "Llámanos",
                "fr": "Appelez-nous",
                "de": "Rufen Sie uns an",
                "pt": "Liguem-nos",
                "zh": "给我们打电话",
                "ja": "電話する",
                "ar": "اتصلوا بنا"
              },
              "href": "tel:+393470129768"
            },
            {
              "kind": "whatsapp",
              "label": {
                "it": "Sono arrivato — aprite il portone",
                "en": "I've arrived — please open the door",
                "es": "Ya he llegado — abrid el portal",
                "fr": "Je suis arrivé — ouvrez le portail",
                "de": "Ich bin da — bitte das Haustor öffnen",
                "pt": "Já cheguei — abram o portão",
                "zh": "我到了 — 请打开大门",
                "ja": "到着しました — 玄関を開けてください",
                "ar": "وصلنا — افتحوا البوابة"
              },
              "phone": "393470129768",
              "message": {
                "it": "Buongiorno! Siamo appena arrivati in Via Gregorio Mattei 26. Potete aprirci il portone? Grazie!",
                "en": "Hello! We have just arrived at Via Gregorio Mattei 26. Could you open the street door for us? Thank you!",
                "es": "¡Buenos días! Acabamos de llegar a Via Gregorio Mattei 26. ¿Podéis abrirnos el portal? ¡Gracias!",
                "fr": "Bonjour ! Nous venons d'arriver au Via Gregorio Mattei 26. Pouvez-vous nous ouvrir le portail ? Merci !",
                "de": "Guten Tag! Wir sind gerade in der Via Gregorio Mattei 26 angekommen. Können Sie uns das Haustor öffnen? Danke!",
                "pt": "Bom dia! Acabámos de chegar à Via Gregorio Mattei 26. Podem abrir-nos o portão? Obrigado!",
                "zh": "您好！我们刚到 Via Gregorio Mattei 26。可以帮我们打开大门吗？谢谢！",
                "ja": "こんにちは。Via Gregorio Mattei 26 に着きました。玄関ドアを開けていただけますか？ありがとうございます。",
                "ar": "مرحبًا! وصلنا للتو إلى Via Gregorio Mattei 26. هل يمكنكم فتح البوابة لنا؟ شكرًا!"
              }
            }
          ]
        },
        {
          "type": "notice",
          "title": {
            "it": "Tassa di soggiorno",
            "en": "Tourist tax",
            "es": "Tasa turística",
            "fr": "Taxe de séjour",
            "de": "Kurtaxe",
            "pt": "Taxa turística",
            "zh": "旅游税",
            "ja": "宿泊税",
            "ar": "ضريبة الإقامة"
          },
          "body": {
            "it": "La tassa di soggiorno di Napoli è di **6 € a persona a notte**, da pagare **all'arrivo** in **contanti, con bonifico o PayPal**.",
            "en": "Naples tourist tax is **€6 per person per night**, payable **on arrival** in **cash, by bank transfer or PayPal**.",
            "es": "La tasa turística de Nápoles es de **6 € por persona y noche**, a pagar **a la llegada** en **efectivo, por transferencia o PayPal**.",
            "fr": "La taxe de séjour de Naples est de **6 € par personne et par nuit**, à payer **à l'arrivée** en **espèces, par virement ou PayPal**.",
            "de": "Die Kurtaxe in Neapel beträgt **6 € pro Person und Nacht**, zu zahlen **bei der Ankunft** in **bar, per Überweisung oder PayPal**.",
            "pt": "A taxa turística de Nápoles é de **6 € por pessoa por noite**, a pagar **à chegada** em **dinheiro, por transferência ou PayPal**.",
            "zh": "那不勒斯旅游税为**每人每晚 6 欧元**，请在**抵达时**以**现金、银行转账或 PayPal** 支付。",
            "ja": "ナポリの宿泊税は**1人1泊6ユーロ**です。**到着時**に**現金、振込、または PayPal** でお支払いください。",
            "ar": "ضريبة الإقامة في نابولي **6 يورو للشخص في الليلة**، تُدفع **عند الوصول** **نقدًا أو بتحويل بنكي أو عبر PayPal**."
          }
        },
        {
          "type": "taxcalc",
          "rate": 6,
          "guests": 2,
          "nights": 2
        },
        {
          "type": "closing",
          "text": {
            "it": "Buon soggiorno a Napoli!",
            "en": "Enjoy your stay in Naples!",
            "es": "¡Buena estancia en Nápoles!",
            "fr": "Bon séjour à Naples !",
            "de": "Schönen Aufenthalt in Neapel!",
            "pt": "Boa estadia em Nápoles!",
            "zh": "祝您在那不勒斯住得愉快！",
            "ja": "ナポリでのご滞在をお楽しみください！",
            "ar": "إقامة سعيدة في نابولي!"
          }
        }
      ]
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
      "type": "guide",
      "blocks": [
        {
          "type": "time",
          "label": {
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
          "value": "11:00"
        },
        {
          "type": "notice",
          "body": {
            "it": "Il **late check-out** e il **deposito bagagli** in casa **non sono possibili** quando c'è un'altra prenotazione.",
            "en": "**Late check-out** and **leaving bags in the apartment** are **not possible** when another booking follows.",
            "es": "El **late check-out** y el **depósito de equipaje** en la casa **no son posibles** cuando hay otra reserva.",
            "fr": "Le **late check-out** et le **dépôt des bagages** dans le logement **ne sont pas possibles** lorsqu'une autre réservation suit.",
            "de": "**Late Check-out** und **Gepäckaufbewahrung** in der Wohnung sind **nicht möglich**, wenn eine weitere Buchung folgt.",
            "pt": "O **late check-out** e o **depósito de bagagem** em casa **não são possíveis** quando há outra reserva.",
            "zh": "如果后面还有其他预订，**延迟退房**和**把行李留在屋内**都**不可以**。",
            "ja": "次の予約がある場合、**レイトチェックアウト**と室内での**荷物預かり**は**できません**。",
            "ar": "**المغادرة المتأخرة** و**ترك الحقائب في المنزل** **غير ممكنين** عندما يوجد حجز آخر."
          }
        },
        {
          "type": "place",
          "name": {
            "it": "Deposito bagagli — Unlock Bags",
            "en": "Luggage storage — Unlock Bags",
            "es": "Consigna de equipaje — Unlock Bags",
            "fr": "Consigne à bagages — Unlock Bags",
            "de": "Gepäckaufbewahrung — Unlock Bags",
            "pt": "Depósito de bagagem — Unlock Bags",
            "zh": "行李寄存 — Unlock Bags",
            "ja": "荷物預かり — Unlock Bags",
            "ar": "إيداع الأمتعة — Unlock Bags"
          },
          "address": "Via Ernesto Capocci 6, Napoli",
          "text": {
            "it": "Aperto 24 ore su 24",
            "en": "Open 24 hours",
            "es": "Abierto 24 horas",
            "fr": "Ouvert 24h/24",
            "de": "Rund um die Uhr geöffnet",
            "pt": "Aberto 24 horas",
            "zh": "24 小时营业",
            "ja": "24時間営業",
            "ar": "مفتوح 24 ساعة"
          },
          "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Via+Ernesto+Capocci+6%2C+Napoli"
        },
        {
          "type": "checklist",
          "title": {
            "it": "Prima di partire",
            "en": "Before you leave",
            "es": "Antes de salir",
            "fr": "Avant de partir",
            "de": "Vor der Abreise",
            "pt": "Antes de partir",
            "zh": "离开之前",
            "ja": "出発の前に",
            "ar": "قبل المغادرة"
          },
          "done": {
            "it": "Tutto pronto — buon viaggio di ritorno!",
            "en": "All set — have a good trip home!",
            "es": "Todo listo — ¡buen viaje de vuelta!",
            "fr": "Tout est prêt — bon voyage de retour !",
            "de": "Alles erledigt — gute Heimreise!",
            "pt": "Tudo pronto — boa viagem de regresso!",
            "zh": "都准备好了 — 祝返程顺利！",
            "ja": "準備完了 — お帰りもよい旅を！",
            "ar": "كل شيء جاهز — رحلة عودة سعيدة!"
          },
          "items": [
            {
              "id": "leave",
              "title": {
                "it": "Uscite entro le 11:00",
                "en": "Leave by 11:00",
                "es": "Salid antes de las 11:00",
                "fr": "Partez avant 11:00",
                "de": "Gehen Sie bis 11:00",
                "pt": "Saiam até às 11:00",
                "zh": "请在 11:00 前离开",
                "ja": "11:00 までに出発",
                "ar": "غادروا قبل 11:00"
              },
              "text": {
                "it": "Controllate di **non aver dimenticato nulla**.",
                "en": "Check you have **not forgotten anything**.",
                "es": "Comprobad que **no os habéis dejado nada**.",
                "fr": "Vérifiez que vous **n'avez rien oublié**.",
                "de": "Prüfen Sie, dass Sie **nichts vergessen haben**.",
                "pt": "Verifiquem que **não se esqueceram de nada**.",
                "zh": "请确认**没有落下任何东西**。",
                "ja": "**忘れ物がないか**確認してください。",
                "ar": "تأكدوا من أنكم **لم تنسوا شيئًا**."
              }
            },
            {
              "id": "lights",
              "title": {
                "it": "Luci spente",
                "en": "Lights off",
                "es": "Luces apagadas",
                "fr": "Lumières éteintes",
                "de": "Lichter aus",
                "pt": "Luzes apagadas",
                "zh": "灯已关闭",
                "ja": "照明オフ",
                "ar": "الأنوار مطفأة"
              },
              "text": {
                "it": "**Spegnete tutte le luci.**",
                "en": "**Turn off all the lights.**",
                "es": "**Apagad todas las luces.**",
                "fr": "**Éteignez toutes les lumières.**",
                "de": "**Schalten Sie alle Lichter aus.**",
                "pt": "**Apaguem todas as luzes.**",
                "zh": "**请关掉所有的灯。**",
                "ja": "**照明をすべて消してください。**",
                "ar": "**أطفئوا جميع الأنوار.**"
              }
            },
            {
              "id": "ac",
              "title": {
                "it": "Condizionatore spento",
                "en": "Air conditioning off",
                "es": "Aire acondicionado apagado",
                "fr": "Climatisation éteinte",
                "de": "Klimaanlage aus",
                "pt": "Ar condicionado desligado",
                "zh": "空调已关闭",
                "ja": "エアコンオフ",
                "ar": "المكيّف مطفأ"
              },
              "text": {
                "it": "**Spegnete il condizionatore.**",
                "en": "**Turn off the air conditioning.**",
                "es": "**Apagad el aire acondicionado.**",
                "fr": "**Éteignez la climatisation.**",
                "de": "**Schalten Sie die Klimaanlage aus.**",
                "pt": "**Desliguem o ar condicionado.**",
                "zh": "**请关掉空调。**",
                "ja": "**エアコンを消してください。**",
                "ar": "**أطفئوا المكيّف.**"
              }
            },
            {
              "id": "fridge",
              "title": {
                "it": "Frigobar",
                "en": "Minibar",
                "es": "Minibar",
                "fr": "Minibar",
                "de": "Minibar",
                "pt": "Minibar",
                "zh": "小冰箱",
                "ja": "ミニバー",
                "ar": "الثلاجة الصغيرة"
              },
              "text": {
                "it": "Se avete usato il **frigobar**, integrate il pagamento.",
                "en": "If you used the **minibar**, please add it to your payment.",
                "es": "Si habéis usado el **minibar**, añadid el pago.",
                "fr": "Si vous avez utilisé le **minibar**, ajoutez le règlement.",
                "de": "Wenn Sie die **Minibar** benutzt haben, begleichen Sie den Betrag.",
                "pt": "Se usaram o **minibar**, acrescentem o pagamento.",
                "zh": "如果用过**小冰箱**，请补上费用。",
                "ja": "**ミニバー**を使った場合は、その分をお支払いください。",
                "ar": "إذا استخدمتم **الثلاجة الصغيرة**، أضيفوا المبلغ إلى الدفع."
              }
            },
            {
              "id": "keys",
              "title": {
                "it": "Chiavi sul tavolo",
                "en": "Keys on the table",
                "es": "Llaves sobre la mesa",
                "fr": "Clés sur la table",
                "de": "Schlüssel auf dem Tisch",
                "pt": "Chaves em cima da mesa",
                "zh": "钥匙放在桌上",
                "ja": "鍵はテーブルの上",
                "ar": "المفاتيح على الطاولة"
              },
              "text": {
                "it": "Lasciate le **chiavi sul tavolo** e chiudete la porta uscendo.",
                "en": "Leave the **keys on the table** and close the door as you go.",
                "es": "Dejad las **llaves sobre la mesa** y cerrad la puerta al salir.",
                "fr": "Laissez les **clés sur la table** et fermez la porte en sortant.",
                "de": "Lassen Sie die **Schlüssel auf dem Tisch** und schließen Sie die Tür beim Gehen.",
                "pt": "Deixem as **chaves em cima da mesa** e fechem a porta ao sair.",
                "zh": "把**钥匙留在桌上**，出门时关好门。",
                "ja": "**鍵をテーブルの上に置き**、出るときにドアを閉めてください。",
                "ar": "اتركوا **المفاتيح على الطاولة** وأغلقوا الباب عند الخروج."
              }
            }
          ]
        },
        {
          "type": "closing",
          "text": {
            "it": "Grazie per aver scelto Cozy Domo!",
            "en": "Thank you for choosing Cozy Domo!",
            "es": "¡Gracias por elegir Cozy Domo!",
            "fr": "Merci d'avoir choisi Cozy Domo !",
            "de": "Danke, dass Sie Cozy Domo gewählt haben!",
            "pt": "Obrigado por terem escolhido a Cozy Domo!",
            "zh": "感谢选择 Cozy Domo！",
            "ja": "Cozy Domo をお選びいただきありがとうございます！",
            "ar": "شكرًا لاختياركم Cozy Domo!"
          }
        }
      ]
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
