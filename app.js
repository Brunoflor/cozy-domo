(function () {
  var STORAGE_KEY = "cozy-domo-lang";
  var content = window.COZY_CONTENT;

  if (!content || !content.sections || !content.ui) {
    var alert = document.createElement("p");
    alert.setAttribute("role", "alert");
    alert.textContent = "Content file missing.";
    document.body.appendChild(alert);
    return;
  }

  var state = {
    lang: "en",
    openId: null,
    triggerId: null,
  };

  var ICONS = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/></svg>',
    parking:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 17V7h4.2a3.15 3.15 0 0 1 0 6.3H9"/></svg>',
    restaurant:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h16"/><path d="M5.2 10c.4 4.6 3 7.2 6.8 7.2s6.4-2.6 6.8-7.2"/><path d="M12 17.2V20"/><path d="M8.5 21h7"/></svg>',
    cup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h10v5a5 5 0 0 1-10 0V8z"/><path d="M16 9h1.6a2.6 2.6 0 0 1 0 5.2H16"/><path d="M8 21h8"/><path d="M9 4.2c.3 1-.7 1.5-.7 2.5"/><path d="M12.6 3.2c.3 1-.7 1.5-.7 2.5"/></svg>',
    plane:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 11.2 21 4.5l-6.8 15.2-2.2-6.4L3.5 11.2z"/><path d="m12 13.3 9-8.8"/></svg>',
    train:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="13" rx="3.5"/><path d="M5 11h14"/><path d="M8 6.2h2.4v2.5H8zM13.6 6.2H16v2.5h-2.4z"/><circle cx="8.2" cy="19" r="1.3"/><circle cx="15.8" cy="19" r="1.3"/><path d="M9.4 19h5.2"/></svg>',
    ferry:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15h18l-1.7 3.2H4.7L3 15z"/><path d="M6.5 15V9H12l2 3h5.2"/><path d="M12 9V5h5"/><path d="M3.5 20.2c1.1.7 2 .7 3.1 0s2-.7 3.1 0 2 .7 3.1 0 2-.7 3.1 0 2 .7 3.1 0 2-.7 3.1 0"/></svg>',
    chevron:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5h5v5"/><path d="M19 5 10 14"/><path d="M16 13.5V19H5V8h5.5"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><path d="M12 8h.01"/></svg>',
  };

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "it" || saved === "en") return saved;
    } catch (e) {
      /* private mode */
    }
    var primary = (navigator.language || "en").toLowerCase();
    return primary.indexOf("it") === 0 ? "it" : "en";
  }

  function text(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[state.lang] || value.en || value.it || "";
  }

  function t(key) {
    return text(content.ui[key]);
  }

  function isComingSoon(section) {
    if (section.type === "directions") return false;
    return !section.items || section.items.length === 0;
  }

  function icon(name, className) {
    var span = document.createElement("span");
    span.className = className || "icon";
    span.setAttribute("aria-hidden", "true");
    span.innerHTML = ICONS[name] || ICONS.pin;
    return span;
  }

  function mapsLink(url, label, extra) {
    var a = document.createElement("a");
    a.className = "btn";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    var visible = document.createElement("span");
    visible.textContent = label;
    a.appendChild(visible);
    if (extra) {
      var hint = document.createElement("span");
      hint.className = "visually-hidden";
      hint.textContent = ", " + extra;
      a.appendChild(hint);
    }
    a.appendChild(icon("external", "btn-icon"));
    return a;
  }

  function renderLangSwitch(container) {
    var active = document.activeElement;
    var restore =
      active &&
      container.contains(active) &&
      active.getAttribute("data-set-lang");
    container.replaceChildren();
    container.setAttribute("role", "group");
    container.setAttribute("aria-label", t("languageLabel"));
    container.appendChild(langButton("it"));
    var sep = document.createElement("span");
    sep.className = "lang-sep";
    sep.setAttribute("aria-hidden", "true");
    sep.textContent = "|";
    container.appendChild(sep);
    container.appendChild(langButton("en"));
    if (restore) {
      var next = container.querySelector('[data-set-lang="' + restore + '"]');
      if (next) next.focus();
    }
  }

  function langButton(code) {
    var button = document.createElement("button");
    button.type = "button";
    button.lang = code;
    button.dataset.setLang = code;
    button.textContent = code.toUpperCase();
    button.setAttribute("aria-pressed", state.lang === code ? "true" : "false");
    button.addEventListener("click", function () {
      setLang(code);
    });
    return button;
  }

  function renderGrid() {
    var root = document.getElementById("sections");
    var list = document.createElement("ul");
    list.className = "grid";
    list.setAttribute("aria-label", t("sectionsLabel"));
    content.sections.forEach(function (section) {
      var item = document.createElement("li");
      var button = document.createElement("button");
      button.type = "button";
      button.className = "tile";
      button.dataset.section = section.id;
      button.setAttribute("aria-haspopup", "dialog");
      button.setAttribute("aria-controls", "sheet");
      button.setAttribute("aria-expanded", state.openId === section.id ? "true" : "false");
      button.appendChild(icon(section.icon, "tile-icon"));
      var label = document.createElement("span");
      label.className = "tile-label";
      label.textContent = text(section.title);
      button.appendChild(label);
      if (isComingSoon(section)) {
        var badge = document.createElement("span");
        badge.className = "tile-badge";
        badge.textContent = t("comingSoon");
        button.appendChild(badge);
      }
      button.addEventListener("click", function () {
        openSection(section.id);
      });
      item.appendChild(button);
      list.appendChild(item);
    });
    root.replaceChildren(list);
  }

  function renderSoon(section) {
    var wrap = document.createElement("div");
    wrap.className = "soon soon-" + section.id;
    wrap.appendChild(icon(section.icon, "soon-icon"));
    var title = document.createElement("p");
    title.className = "soon-title";
    title.textContent = t("comingSoon");
    var body = document.createElement("p");
    body.className = "soon-text";
    body.textContent = t("comingSoonBody");
    wrap.appendChild(title);
    wrap.appendChild(body);
    return wrap;
  }

  function renderDirections(section) {
    var fragment = document.createDocumentFragment();
    var addressBlock = document.createElement("section");
    addressBlock.className = "address-block";
    var addressLabel = document.createElement("h3");
    addressLabel.className = "block-title";
    addressLabel.textContent = t("addressLabel");
    var address = document.createElement("p");
    address.className = "address";
    content.property.addressLines.forEach(function (line, index) {
      if (index) address.appendChild(document.createElement("br"));
      address.appendChild(document.createTextNode(line));
    });
    addressBlock.appendChild(addressLabel);
    addressBlock.appendChild(address);
    addressBlock.appendChild(
      mapsLink(content.property.mapsUrl, t("openMaps"), t("newTab"))
    );

    var routesBlock = document.createElement("section");
    routesBlock.className = "routes-block";
    var routesLabel = document.createElement("h3");
    routesLabel.className = "block-title";
    routesLabel.id = "routes-title";
    routesLabel.textContent = t("routesLabel");
    var list = document.createElement("ul");
    list.className = "routes";
    list.setAttribute("aria-labelledby", "routes-title");
    section.routes.forEach(function (route) {
      var item = document.createElement("li");
      var link = document.createElement("a");
      link.className = "route";
      link.href = route.mapsUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.dataset.route = route.id;
      link.appendChild(icon(route.icon, "route-icon"));
      var copy = document.createElement("span");
      copy.className = "route-text";
      var title = document.createElement("span");
      title.className = "route-title";
      title.textContent = text(route.title);
      var desc = document.createElement("span");
      desc.className = "route-desc";
      desc.textContent = text(route.text);
      var hint = document.createElement("span");
      hint.className = "visually-hidden";
      hint.textContent = ". " + t("routeHint");
      copy.appendChild(title);
      copy.appendChild(desc);
      copy.appendChild(hint);
      link.appendChild(copy);
      link.appendChild(icon("chevron", "route-chevron"));
      item.appendChild(link);
      list.appendChild(item);
    });
    routesBlock.appendChild(routesLabel);
    routesBlock.appendChild(list);
    fragment.appendChild(addressBlock);
    fragment.appendChild(routesBlock);
    return fragment;
  }

  function renderPlaces(section) {
    var fragment = document.createDocumentFragment();
    if (section.notice) {
      var aside = document.createElement("aside");
      aside.className = "notice";
      aside.appendChild(icon("info", "notice-icon"));
      var note = document.createElement("p");
      note.textContent = text(section.notice);
      aside.appendChild(note);
      fragment.appendChild(aside);
    }
    var list = document.createElement("ul");
    list.className = "places";
    (section.items || []).forEach(function (place) {
      var item = document.createElement("li");
      item.className = "place";
      var name = document.createElement("h3");
      name.className = "place-name";
      name.textContent = text(place.name);
      var address = document.createElement("p");
      address.className = "place-address";
      address.textContent = text(place.address);
      var description = document.createElement("p");
      description.className = "place-text";
      description.textContent = text(place.text);
      item.appendChild(name);
      item.appendChild(address);
      item.appendChild(description);
      item.appendChild(
        mapsLink(place.mapsUrl, t("openMaps"), text(place.name) + ", " + t("newTab"))
      );
      list.appendChild(item);
    });
    fragment.appendChild(list);
    return fragment;
  }

  function renderSectionBody(section) {
    if (isComingSoon(section)) return renderSoon(section);
    if (section.type === "directions") return renderDirections(section);
    if (section.type === "places") return renderPlaces(section);
    return renderSoon(section);
  }

  function renderSheet() {
    document.getElementById("back-label").textContent = t("back");
    var title = document.getElementById("sheet-title");
    var body = document.getElementById("sheet-body");
    var section = null;
    content.sections.forEach(function (item) {
      if (item.id === state.openId) section = item;
    });
    if (!section) {
      title.textContent = "";
      body.replaceChildren();
      return;
    }
    title.textContent = text(section.title);
    body.replaceChildren(renderSectionBody(section));
  }

  function renderHomeAddress() {
    var node = document.getElementById("home-address");
    node.replaceChildren();
    node.appendChild(icon("pin", "home-pin"));
    var line = document.createElement("span");
    line.textContent = content.property.addressLine;
    node.appendChild(line);
  }

  function render(options) {
    options = options || {};
    document.documentElement.lang = state.lang;
    document.documentElement.dataset.lang = state.lang;
    document.title = t("pageTitle");
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("metaDescription"));
    document.getElementById("tagline").textContent = t("tagline");
    document.getElementById("skip").textContent = t("skip");
    renderLangSwitch(document.getElementById("lang-switch"));
    renderLangSwitch(document.getElementById("sheet-lang"));
    renderGrid();
    renderHomeAddress();
    renderSheet();
    if (options.announce) {
      document.getElementById("live").textContent = t("languageNow");
    }
  }

  function setLang(lang) {
    if (lang !== "it" && lang !== "en") return;
    if (lang === state.lang) return;
    state.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore quota / private mode */
    }
    render({ announce: true });
  }

  function openSection(id) {
    state.openId = id;
    state.triggerId = id;
    render();
    var dialog = document.getElementById("sheet");
    if (!dialog.open) dialog.showModal();
    document.getElementById("sheet-back").focus();
  }

  function onClose() {
    var id = state.triggerId;
    state.openId = null;
    render();
    window.setTimeout(function () {
      var button = document.querySelector('[data-section="' + id + '"]');
      if (button) button.focus();
    }, 0);
  }

  function bind() {
    var dialog = document.getElementById("sheet");
    document.getElementById("sheet-back").addEventListener("click", function () {
      dialog.close();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", onClose);
  }

  state.lang = document.documentElement.dataset.lang === "it" || document.documentElement.dataset.lang === "en"
    ? document.documentElement.dataset.lang
    : detectLang();
  bind();
  render();
})();
