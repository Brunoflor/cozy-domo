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

  function svg(paths) {
    return (
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">' +
      paths +
      "</svg>"
    );
  }

  var ICONS = {
    house: svg('<path d="M4 11.2 12 4.2l8 7"/><path d="M6.5 10.2V19.5h11V10.2"/><path d="M10 19.5v-4.2h4v4.2"/>'),
    key: svg('<circle cx="8" cy="12" r="3.3"/><path d="M11.2 12H20.2"/><path d="M16.6 12v2.7"/><path d="M19.4 12v2.7"/>'),
    pin: svg('<path d="M12 21.2s6.2-5.3 6.2-10.1a6.2 6.2 0 0 0-12.4 0c0 4.8 6.2 10.1 6.2 10.1z"/><circle cx="12" cy="11" r="2"/>'),
    parking: svg('<rect x="3.5" y="3.5" width="17" height="17" rx="3.5"/><path d="M9 16.8V7.4h4.1a2.9 2.9 0 0 1 0 5.8H9"/>'),
    wifi: svg('<path d="M4.6 10.1a10 10 0 0 1 14.8 0"/><path d="M7.3 13a6.2 6.2 0 0 1 9.4 0"/><path d="M9.9 15.8a3 3 0 0 1 4.2 0"/><circle cx="12" cy="18.7" r="1" fill="currentColor" stroke="none"/>'),
    rules: svg('<rect x="6" y="4.8" width="12" height="15" rx="2"/><path d="M9 4.8V3.8A1.2 1.2 0 0 1 10.2 2.6h3.6A1.2 1.2 0 0 1 15 3.8v1"/><path d="M9 10h6M9 13.4h6M9 16.8h3.6"/>'),
    bus: svg('<rect x="3.8" y="5.5" width="16.4" height="10.2" rx="2.4"/><path d="M3.8 11.2h16.4"/><path d="M7.2 8.2h2.2M10.9 8.2h2.2M14.6 8.2H16.8"/><circle cx="7.6" cy="18.4" r="1.35"/><circle cx="16.4" cy="18.4" r="1.35"/>'),
    sofa: svg('<path d="M6.2 11V8.8A2.2 2.2 0 0 1 8.4 6.6h7.2A2.2 2.2 0 0 1 17.8 8.8V11"/><path d="M4.2 11.2h15.6v4.4a1.8 1.8 0 0 1-1.8 1.8H6a1.8 1.8 0 0 1-1.8-1.8v-4.4z"/><path d="M7.2 17.4V20M16.8 17.4V20"/>'),
    compass: svg('<circle cx="12" cy="12" r="8"/><path d="m15.1 8.9-1.4 4.5-4.5 1.4 1.4-4.5 4.5-1.4z"/>'),
    info: svg('<circle cx="12" cy="12" r="8"/><path d="M12 11v5.2"/><path d="M12 8h.01"/>'),
    cup: svg('<path d="M6.8 8h8.4v4.6a4.2 4.2 0 0 1-8.4 0V8z"/><path d="M15.2 9.3h1.5a2.3 2.3 0 0 1 0 4.6h-1.5"/><path d="M8.2 20.4h7.6"/>'),
    plate: svg('<path d="M7 3.6v4.6"/><path d="M5.2 3.6v2.4c0 1.3.8 2.2 1.8 2.2s1.8-.9 1.8-2.2V3.6"/><path d="M7 10.8V20.4"/><path d="M16.2 3.6v16.8"/><path d="M16.2 3.6c1.5 1.7 2.2 3.3 2.2 5.1 0 1.5-.9 2.6-2.2 2.6"/>'),
    bag: svg('<path d="M6.4 8.4h11.2l-.9 11.2H7.3L6.4 8.4z"/><path d="M9 8.4V7a3 3 0 0 1 6 0v1.4"/>'),
    cross: svg('<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/>'),
    door: svg('<path d="M4.8 4.6h7.4A1.3 1.3 0 0 1 13.5 5.9v12.2a1.3 1.3 0 0 1-1.3 1.3H4.8"/><path d="M9.6 12H19"/><path d="m15.8 9 3.2 3-3.2 3"/>'),
    phone: svg('<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 17.6h2"/>'),
    plane: svg('<path d="M2.6 12h6.2L12 4.2h1.7L12.2 12H20l1.6-2.4h1.2L21.2 12l1.6 2.4h-1.2L20 12h-7.8l1.5 7.8H12L8.8 12H2.6z"/>'),
    train: svg('<rect x="6" y="3.4" width="12" height="12.4" rx="3"/><path d="M6 10.6h12"/><path d="M9 6.4h2M13 6.4h2"/><circle cx="8.6" cy="18.6" r="1.35"/><circle cx="15.4" cy="18.6" r="1.35"/><path d="M8.6 15.8v1.4M15.4 15.8v1.4"/>'),
    ferry: svg('<path d="M3.8 14.8h16.4l-1.6 3.3H5.4L3.8 14.8z"/><path d="M7 14.8V9.2h6.2l2.2 3.2H18"/><path d="M13.2 9.2V5.6h4.2"/><path d="M3.4 20.4c1.2.7 2.2.7 3.4 0s2.2-.7 3.4 0 2.2.7 3.4 0 2.2-.7 3.4 0 2.2.7 3.4 0"/>'),
    chevron: svg('<path d="m9 6 6 6-6 6"/>'),
    external: svg('<path d="M14 5h5v5"/><path d="M19 5 10 14"/><path d="M16 13.5V19H5V8h5.5"/>'),
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
    if (section.type === "places") return !section.items || section.items.length === 0;
    if (section.type === "notes") return !section.paragraphs || section.paragraphs.length === 0;
    return true;
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

  function updateLangSwitch(container) {
    if (!container.querySelector("[data-set-lang]")) {
      container.setAttribute("role", "group");
      container.appendChild(langButton("it"));
      var sep = document.createElement("span");
      sep.className = "lang-sep";
      sep.setAttribute("aria-hidden", "true");
      sep.textContent = "|";
      container.appendChild(sep);
      container.appendChild(langButton("en"));
    }
    container.setAttribute("aria-label", t("languageLabel"));
    var buttons = container.querySelectorAll("[data-set-lang]");
    buttons.forEach(function (button) {
      var on = button.getAttribute("data-set-lang") === state.lang;
      button.setAttribute("aria-pressed", on ? "true" : "false");
    });
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
      var face = document.createElement("span");
      face.className = "tile-face";
      face.appendChild(icon(section.icon, "tile-glyph"));
      button.appendChild(face);
      var label = document.createElement("span");
      label.className = "tile-label";
      label.textContent = text(section.title);
      button.appendChild(label);
      var meta = document.createElement("span");
      meta.className = "tile-meta";
      if (isComingSoon(section)) {
        meta.textContent = t("comingSoon");
      } else {
        meta.setAttribute("aria-hidden", "true");
      }
      button.appendChild(meta);
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

  function renderNotes(section) {
    var wrap = document.createElement("div");
    wrap.className = "notes";
    (section.paragraphs || []).forEach(function (paragraph) {
      var p = document.createElement("p");
      p.textContent = text(paragraph);
      wrap.appendChild(p);
    });
    return wrap;
  }

  function renderSectionBody(section) {
    if (isComingSoon(section)) return renderSoon(section);
    if (section.type === "directions") return renderDirections(section);
    if (section.type === "places") return renderPlaces(section);
    if (section.type === "notes") return renderNotes(section);
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
    var hint = document.getElementById("hint");
    if (hint) hint.textContent = t("hint");
    document.getElementById("skip").textContent = t("skip");
    updateLangSwitch(document.getElementById("lang-switch"));
    updateLangSwitch(document.getElementById("sheet-lang"));
    renderGrid();
    renderHomeAddress();
    renderSheet();
    if (options.announce) {
      document.getElementById("live").textContent = t("languageNow");
    }
  }

  function setLang(lang) {
    if (lang !== "it" && lang !== "en") return;
    var changed = lang !== state.lang;
    state.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore quota / private mode */
    }
    if (!changed) return;
    render({ announce: true });
  }

  function syncExpanded() {
    var buttons = document.querySelectorAll(".tile");
    buttons.forEach(function (button) {
      button.setAttribute(
        "aria-expanded",
        button.dataset.section === state.openId ? "true" : "false"
      );
    });
  }

  function openSection(id) {
    state.openId = id;
    state.triggerId = id;
    syncExpanded();
    renderSheet();
    var dialog = document.getElementById("sheet");
    if (!dialog.open) dialog.showModal();
    document.getElementById("sheet-back").focus();
  }

  function onClose() {
    var id = state.triggerId;
    state.openId = null;
    syncExpanded();
    renderSheet();
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
