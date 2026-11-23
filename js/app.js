/* Leonida Field Guide · app engine. Vanilla JS, no build step. */
(function () {
  'use strict';

  const NAV_ORDER = ['Start', 'Story', 'Money', 'Rides', 'Gear', 'Secrets', 'Completion'];
  const LAYER_COLORS = {
    missions:'#ff3f8e', strangers:'#b06cff', activities:'#5cf2a6', encounters:'#ffd36b', money:'#4fe08a',
    fences:'#2fd07b', gangs:'#ff5468', vehicles:'#ff8a3d', modshops:'#ffb03d', weapons:'#ff6b6b', gunstores:'#e0483e',
    shops:'#2de2e6', garages:'#3da5ff', collectibles:'#ffe066', secrets:'#9b5cff', glitches:'#a0a0ff',
    characters:'#ff9fd0', leonida:'#ffffff', radio:'#cccccc', tips:'#7fe3ff', trophies:'#ffd36b', hundred:'#ffd36b',
    challenges:'#ffd36b', cheats:'#ffffff', editions:'#cdb2ff'
  };
  const BADGE = {
    J:['j','Jason'], L:['l','Lucia'], opt:['opt','Optional'], miss:['miss','Missable'], pnr:['miss','No return'],
    timed:['miss','Timed'], UE:['ue','Ultimate'], rep:['rep','Reported'], ok:['ok','Seen'], sf:['ok','S&F'],
    wanted:['miss','Wanted'], tracker:['rep','Tracker'], unique:['ue','Unique'], Works:['ok','Works'], Mixed:['rep','Mixed'],
    Fix:['ok','Fix found'], 'No fix':['miss','No fix yet'], Unsolved:['rep','Unsolved'], Important:['miss','Important'],
    Gold:['rep','Gold'], Platinum:['ue','Platinum'], Silver:['','Silver'], Bronze:['','Bronze'], Expanded:['ue','Expanded'],
    Hunting:['ok','Hunting']
  };

  /* ---------- helpers ---------- */
  const $ = (s, el) => (el || document).querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  const strip = s => String(s || '').replace(/<[^>]+>/g, '');
  const slug = s => strip(s).toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 60);
  const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };

  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------- normalize data ---------- */
  const sections = G.sections;
  const byId = {};
  const allItems = [];
  const walkKey = n => strip(n).toLowerCase().replace(/[\u2018\u2019']/g, "'").trim();
  const walk = {};
  Object.keys(G.walk || {}).forEach(k => { walk[walkKey(k)] = G.walk[k]; });
  sections.forEach(sec => {
    byId[sec.id] = sec;
    sec.count = 0;
    (sec.groups || []).forEach(g => {
      (g.items || []).forEach((it, idx) => {
        const w = (sec.id === 'missions' || sec.id === 'strangers') && walk[walkKey(it.n)];
        if (w) Object.keys(w).forEach(k => {
          if ((k === 'tip' || k === 'warn' || k === 'd') && it[k] && it[k] !== w[k]) it[k] = it[k] + ' ' + w[k];
          else if (!it[k] || k === 'steps' || k === 'start' || k === 'reward') it[k] = w[k];
        });
        it.id = sec.id + ':' + slug(g.name) + ':' + slug(it.n) + (it.n ? '' : idx);
        it.sec = sec; it.group = g;
        it.text = [it.n, it.s, strip(it.d), it.tip, it.warn, it.start, it.reward, (it.steps || []).join(' '), it.unlock, g.name,
          it.kv ? Object.values(it.kv).join(' ') : '', (it.b || []).map(b => (BADGE[b] ? BADGE[b][1] : b)).join(' ')].join(' ').toLowerCase();
        sec.count++;
        allItems.push(it);
      });
    });
  });

  /* ---------- nav ---------- */
  function buildNav() {
    const nav = $('#sidenav');
    let h = '<a class="nav-link" href="#/" data-r=""><span class="ico">🏠</span>Home</a>' +
            '<a class="nav-link" href="#/map" data-r="map"><span class="ico">🗺️</span>Interactive Map</a>';
    NAV_ORDER.forEach(grp => {
      const secs = sections.filter(s => s.nav === grp);
      if (!secs.length) return;
      h += '<div class="nav-group">' + esc(grp) + '</div>';
      if (window.DBUI && grp === 'Rides') h += '<a class="nav-link" href="#/db/vehicles" data-r="db/vehicles"><span class="ico">🚗</span>Vehicle Database<span class="cnt">' + DBUI.counts.vehicles + '</span></a>';
      if (window.DBUI && grp === 'Gear') h += '<a class="nav-link" href="#/db/weapons" data-r="db/weapons"><span class="ico">🔫</span>Weapon Database<span class="cnt">' + DBUI.counts.weapons + '</span></a>';
      secs.forEach(s => {
        h += '<a class="nav-link" href="#/s/' + s.id + '" data-r="s/' + s.id + '"><span class="ico">' + s.icon + '</span>' + esc(s.title) +
             '<span class="cnt">' + s.count + '</span></a>';
      });
    });
    nav.innerHTML = h;
  }
  function markNav(route) {
    document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.r === route));
  }

  /* ---------- badges / cards ---------- */
  function badge(b) {
    if (/^\$/.test(b)) return '<span class="badge money">' + esc(b) + '</span>';
    const m = BADGE[b];
    return m ? '<span class="badge ' + m[0] + '">' + esc(m[1]) + '</span>' : '<span class="badge">' + esc(b) + '</span>';
  }
  const ROT = { U:0, R:90, D:180, L:270 };
  const arrowSVG = c => '<svg viewBox="0 0 24 24" width="14" height="14" style="transform:rotate(' + ROT[c] + 'deg)"><path d="M12 4l7 9h-4.5v7h-5v-7H5z" fill="currentColor"/></svg>';
  function codeHTML(code) {
    if (!code) return '<span class="badge rep">Code not published yet</span>';
    return '<span class="pad" aria-label="' + esc(code.split('').map(c => ({U:'Up',D:'Down',L:'Left',R:'Right'}[c])).join(' ')) + '">' +
      code.split('').map(c => '<span class="btnglyph">' + arrowSVG(c) + '</span>').join('') + '</span>';
  }
  function placeOf(it) { return it.at && G.places[it.at] ? G.places[it.at] : null; }

  function cardHTML(it, opts) {
    const sec = it.sec, num = opts && opts.num;
    let body = '';
    if (sec.type === 'cheats') {
      body += '<dl class="kv"><dt>Unlock</dt><dd>' + esc(it.unlock) + '</dd></dl>';
      if (it.conflict) body += '<div class="tipline">Sources differ. ' + esc(it.conflict) + '.</div>';
    }
    if (it.start) body += '<p class="start"><b>Starts</b> ' + it.start + '</p>';
    if (it.d) body += '<p>' + it.d + '</p>';
    if (it.kv) body += '<dl class="kv">' + Object.entries(it.kv).map(([k, v]) => '<dt>' + esc(k) + '</dt><dd>' + esc(v) + '</dd>').join('') + '</dl>';
    if (it.steps) body += '<ol>' + it.steps.map(s => '<li>' + s + '</li>').join('') + '</ol>';
    if (it.reward) body += '<p class="reward"><b>Reward</b> ' + it.reward + '</p>';
    if (it.tip) body += '<div class="tipline">' + it.tip + '</div>';
    if (it.warn) body += '<div class="warnline">' + it.warn + '</div>';
    const pl = placeOf(it);
    if (pl) body += '<div class="c-actions"><a class="btn sm" href="#/map?focus=' + encodeURIComponent(it.id) + '">📍 ' + esc(it.at) + ' on the map</a></div>';
    return '<article class="card' + (body ? '' : ' slim') + '" id="c-' + esc(it.id) + '">' +
      (it.img ? '<img class="card-img" src="assets/img/' + esc(it.img) + '.jpg" alt="' + esc(it.n) + '" loading="lazy">' : '') +
      '<div class="c-top"><div class="c-main"><h4 class="c-name">' + (num ? '<span class="c-num">' + num + '</span>' : '') + esc(it.n) + '</h4>' +
        (it.s ? '<div class="c-sub">' + esc(it.s) + '</div>' : '') +
        ((it.b && it.b.length) || (sec.type === 'cheats') ? '<div class="c-badges">' + (it.b || []).map(badge).join('') + (sec.type === 'cheats' ? codeHTML(it.code) : '') + '</div>' : '') +
      '</div></div>' + (body ? '<div class="c-body">' + body + '</div>' : '') + '</article>';
  }

  function calloutHTML(c) {
    return '<div class="callout ' + (c.kind || '') + '"><h4>' + esc(c.title) + '</h4><ul>' + c.items.map(i => '<li>' + i + '</li>').join('') + '</ul></div>';
  }

  /* ---------- section page ---------- */
  let current = null;
  function renderSection(sec, params) {
    const state = { q: params.get('q') || '', f: new Set() };
    const app = $('#app');
    let h = '<div class="page-head"><div class="kicker">' + esc(sec.nav) + '</div><h1 class="title"><span class="h-ico">' + sec.icon + '</span><span class="h-txt">' + esc(sec.title) + '</span></h1>' +
      '<p class="lede">' + sec.blurb + '</p></div>';
    if (sec.before) h += '<div class="callouts">' + sec.before.map(calloutHTML).join('') + '</div>';
    h += '<div class="toolbar"><input type="search" id="secSearch" placeholder="Filter ' + esc(sec.title.toLowerCase()) + '…" value="' + esc(state.q) + '">';
    const chips = [];
    if (sec.groups.length > 1) sec.groups.forEach(g => chips.push({ key:'g:' + g.name, label:g.name }));
    (sec.filters || []).forEach(f => chips.push({ key:'b:' + f.key, label:f.label }));
    if (chips.length) h += '<div class="chips">' + chips.map(c => '<button class="chip" data-k="' + esc(c.key) + '">' + esc(c.label) + '</button>').join('') + '</div>';
    h += '</div>';
    h += '<div id="groups"></div>';
    if (sec.after) h += '<p class="map-note">' + esc(sec.after) + '</p>';
    if (sec.src) h += '<p class="src">Compiled from: ' + sec.src.map(esc).join(' · ') + '</p>';
    app.innerHTML = h;

    const draw = () => {
      const q = state.q.trim().toLowerCase(), terms = q.split(/\s+/).filter(Boolean);
      const gf = [...state.f].filter(k => k.startsWith('g:')).map(k => k.slice(2));
      const bf = [...state.f].filter(k => k.startsWith('b:')).map(k => k.slice(2));
      let out = '', shown = 0;
      sec.groups.forEach(g => {
        if (gf.length && !gf.includes(g.name)) return;
        const items = g.items.filter((it, i) => {
          if (bf.length && !bf.every(b => (it.b || []).includes(b))) return false;
          return terms.every(t => it.text.includes(t));
        });
        if (!items.length) return;
        shown += items.length;
        const numbered = sec.id === 'missions';
        out += '<section class="group"><div class="group-head"><h3>' + esc(g.name) + '</h3><small>' + items.length + '</small></div>' +
          (g.note ? '<p class="group-note">' + esc(g.note) + '</p>' : '') +
          '<div class="cards' + (sec.layout === 'grid' ? '' : ' list') + '">' +
          items.map(it => cardHTML(it, { num: numbered ? (g.items.indexOf(it) + 1) : 0 })).join('') + '</div></section>';
      });
      $('#groups').innerHTML = out || '<div class="empty">Nothing matches. Try clearing a filter.</div>';
    };
    current = { sec, draw };
    draw();

    $('#secSearch').addEventListener('input', e => { state.q = e.target.value; draw(); });
    app.querySelectorAll('.chip').forEach(ch => ch.addEventListener('click', () => {
      const k = ch.dataset.k;
      if (state.f.has(k)) state.f.delete(k); else state.f.add(k);
      ch.classList.toggle('on'); draw();
    }));
    const focus = params.get('focus');
    if (focus) {
      const el = document.getElementById('c-' + focus);
      if (el) { el.classList.add('hl'); setTimeout(() => el.scrollIntoView({ behavior:'smooth', block:'center' }), 60); }
    } else window.scrollTo(0, 0);
  }

  /* ---------- home ---------- */
  function renderHome() {
    current = null;
    let h = '<section class="hero"><h1>Leonida<span>the ultimate field guide to GTA VI</span></h1>' +
      '<p>Missions, side quests, money, cars, mod shops, guns, shops, collectibles, cheats, glitches and secrets. All in one place with a map of the whole state. Press <kbd>/</kbd> anywhere to search.</p>' +
      '<div class="cta"><a class="btn primary" href="#/map">🗺️ Open the map</a><a class="btn" href="#/s/missions">🎬 Story walkthrough</a><a class="btn" href="#/s/money">💵 Get rich</a></div></section>';
    h += '<div class="callouts">' +
      calloutHTML({ kind:'warn', title:'Don’t lose stuff', items:[
        'No mission replay. Keep 2–3 manual saves.',
        'Chapter 1 cash gets wiped. Only $5,000 in Family Savings carries over.',
        'Grab the missable magazines in each safehouse before the story moves you out.',
        'Do the balcony meditation with Lucia in Chapter 1.',
        'Hourglass missions vanish. Do them right away.'
      ]}) +
      calloutHTML({ kind:'good', title:'Quick wins', items:[
        'Free biplane at the Boundary Road airstrip right after Gone Fishing.',
        'Free helicopter at the Southwind private dock.',
        'Save $100,000 in Family Savings for 20% off every garage.',
        'Sell drugs to Tyrone and jewelry to Yasmani for top dollar.',
        'Bank vaults after That’s Where The Money Is are the biggest payday.'
      ]}) + '</div>';
    NAV_ORDER.forEach(grp => {
      const secs = sections.filter(s => s.nav === grp);
      if (!secs.length) return;
      h += '<h2 class="sec">' + esc(grp) + '</h2><div class="tiles">';
      secs.forEach(s => {
        h += '<a class="tile" href="#/s/' + s.id + '"><span class="t-cnt">' + s.count + '</span><span class="t-ico">' + s.icon + '</span><b>' + esc(s.title) + '</b><span>' + esc(strip(s.blurb).split('. ')[0]) + '.</span></a>';
      });
      if (window.DBUI && grp === 'Rides') h += '<a class="tile" href="#/db/vehicles"><span class="t-cnt">' + DBUI.counts.vehicles + '</span><span class="t-ico">🚗</span><b>Vehicle Database</b><span>Every car, bike, boat and aircraft with its own page.</span></a>';
      if (window.DBUI && grp === 'Gear') h += '<a class="tile" href="#/db/weapons"><span class="t-cnt">' + DBUI.counts.weapons + '</span><span class="t-ico">🔫</span><b>Weapon Database</b><span>Every gun and variant with its own page.</span></a>';
      if (grp === 'Start') h += '<a class="tile" href="#/map"><span class="t-ico">🗺️</span><b>Interactive Map</b><span>Every pin in the guide on one map of Leonida.</span></a>';
      h += '</div>';
    });
    $('#app').innerHTML = h;
    window.scrollTo(0, 0);
  }

  /* ---------- map ---------- */
  let map = null;
  const toLL = (x, y) => [G.map.h - y, x];
  function renderMap(params) {
    current = null;
    const layersOn = store.get('lfg-layers2', null);
    const pinSecs = sections.filter(s => s.groups.some(g => g.items.some(placeOf)));
    let side = '<h4>Show on map</h4><div class="chips" style="margin-bottom:8px"><button class="chip" id="allOn">All</button><button class="chip" id="allOff">None</button></div>';
    pinSecs.forEach(s => {
      const n = allItems.filter(i => i.sec === s && placeOf(i)).length;
      const on = layersOn ? layersOn.includes(s.id) : true;
      side += '<label class="layer"><input type="checkbox" data-l="' + s.id + '"' + (on ? ' checked' : '') + '><span class="sw" style="background:' + (LAYER_COLORS[s.id] || '#fff') + '"></span>' + s.icon + ' ' + esc(s.title) + '<span class="n">' + n + '</span></label>';
    });
    side += '<p class="map-note">Map © Rockstar Games, from the official Leonida map poster. Pins sit on the named town or spot. Hollow pins mark places the poster does not label, so they are close but not exact.</p>';
    $('#app').innerHTML = '<div class="page-head"><div class="kicker">Explore</div><h1 class="title"><span class="h-ico">🗺️</span><span class="h-txt">Leonida Map</span></h1>' +
      '<p class="lede">Rockstar’s official map of Leonida with every location from this guide pinned on it. Zoom in to read street-level labels. Tap a pin for the details.</p></div>' +
      '<div class="map-layout"><aside class="map-side">' + side + '</aside><div id="map"></div></div>';

    if (map) { map.remove(); map = null; }
    const W = G.map.w, H = G.map.h, bounds = [[0, 0], [H, W]];
    map = L.map('map', { crs: L.CRS.Simple, minZoom: -3, maxZoom: 1.5, zoomSnap: 0.25, zoomDelta: 0.5, attributionControl: true });
    map.attributionControl.setPrefix(false);
    L.imageOverlay(G.map.src, bounds, { attribution: 'Map © Rockstar Games' }).addTo(map);
    map.fitBounds(bounds);
    map.setMinZoom(map.getZoom() - 0.25);
    map.fitBounds([toLL(300, 3600), toLL(2560, 260)], { animate:false });
    map.setMaxBounds([[-200, -200], [H + 200, W + 200]]);

    const groups = {}, markerById = {};
    pinSecs.forEach(s => {
      const lg = L.layerGroup();
      allItems.filter(i => i.sec === s && placeOf(i)).forEach(it => {
        const p = placeOf(it), h = hash(it.id), wide = /County$/.test(it.at) || it.at === 'Vice City';
        const r = wide ? 70 : 18, a = (h % 360) * Math.PI / 180, dist = (0.35 + ((h >> 9) % 65) / 100) * r;
        const ll = toLL(p.x + Math.cos(a) * dist, p.y + Math.sin(a) * dist);
        const col = LAYER_COLORS[s.id] || '#fff';
        const pin = p.approx || wide ? '<div class="pin hollow" style="border-color:' + col + '"></div>' : '<div class="pin" style="background:' + col + '"></div>';
        const mk = L.marker(ll, { icon: L.divIcon({ className:'', html: pin, iconSize:[16,16], iconAnchor:[8,8] }), title: it.n });
        mk.bindPopup('<div class="pp-cat" style="color:' + col + '">' + s.icon + ' ' + esc(s.title) + '</div><b>' + esc(it.n) + '</b>' +
          (it.s ? '<br>' + esc(it.s) : '') + '<br><small style="color:#b9a6cc">' + esc(it.at) + (p.approx ? ' · approximate' : wide ? ' · somewhere in this area' : '') + '</small>' +
          '<br><a href="#/s/' + s.id + '?focus=' + encodeURIComponent(it.id) + '">Read the guide entry →</a>');
        mk.addTo(lg);
        markerById[it.id] = { mk, sec: s.id };
      });
      groups[s.id] = lg;
      if (layersOn ? layersOn.includes(s.id) : true) lg.addTo(map);
    });
    const saveLayers = () => store.set('lfg-layers2', [...document.querySelectorAll('[data-l]')].filter(i => i.checked).map(i => i.dataset.l));
    document.querySelectorAll('[data-l]').forEach(cb => cb.addEventListener('change', () => {
      if (cb.checked) groups[cb.dataset.l].addTo(map); else map.removeLayer(groups[cb.dataset.l]);
      saveLayers();
    }));
    const setAll = v => { document.querySelectorAll('[data-l]').forEach(cb => { cb.checked = v; if (v) groups[cb.dataset.l].addTo(map); else map.removeLayer(groups[cb.dataset.l]); }); saveLayers(); };
    $('#allOn').addEventListener('click', () => setAll(true));
    $('#allOff').addEventListener('click', () => setAll(false));

    const place = params.get('place');
    if (place && G.places[place]) {
      const p = G.places[place], ll = toLL(p.x, p.y);
      const mk = L.marker(ll, { icon: L.divIcon({ className:'', html:'<div class="pin big"></div>', iconSize:[22,22], iconAnchor:[11,11] }) }).addTo(map)
        .bindPopup('<b>' + esc(place) + '</b>' + (p.approx ? '<br><small style="color:#b9a6cc">approximate</small>' : ''));
      setTimeout(() => { map.invalidateSize(); map.setView(ll, -0.5, { animate:false }); mk.openPopup(); }, 150);
    }
    const focus = params.get('focus');
    if (focus && markerById[focus]) {
      const { mk, sec } = markerById[focus];
      groups[sec].addTo(map);
      const cb = document.querySelector('[data-l="' + sec + '"]'); if (cb) cb.checked = true;
      setTimeout(() => { map.invalidateSize(); map.setView(mk.getLatLng(), -0.5, { animate:false }); mk.openPopup(); }, 150);
    } else if (!place) setTimeout(() => map.invalidateSize(), 50);
    window.scrollTo(0, 0);
  }

  /* ---------- global search ---------- */
  const gs = $('#globalSearch'), sr = $('#searchResults');
  const dbIndex = window.DBUI ? DBUI.searchIndex() : [];
  let active = -1;
  function search(q) {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    const res = [];
    allItems.forEach(it => {
      if (!terms.every(t => it.text.includes(t))) return;
      const name = it.n.toLowerCase();
      let score = 0;
      terms.forEach(t => { if (name.startsWith(t)) score += 6; else if (name.includes(t)) score += 3; else score += 1; });
      res.push({ it, score });
    });
    sections.forEach(s => {
      if (terms.every(t => s.title.toLowerCase().includes(t))) res.push({ sec: s, score: 20 });
    });
    dbIndex.forEach(d => {
      if (!terms.every(t => d.t.includes(t))) return;
      const nm = d.n.toLowerCase(); let score = 0;
      terms.forEach(t => { score += nm.startsWith(t) ? 7 : nm.includes(t) ? 4 : 1; });
      res.push({ db: d, score });
    });
    return res.sort((a, b) => b.score - a.score).slice(0, 40);
  }
  function showResults() {
    const q = gs.value.trim();
    if (!q) { sr.hidden = true; return; }
    const res = search(q);
    active = -1;
    if (!res.length) { sr.innerHTML = '<div class="sr-empty">No results for “' + esc(q) + '”.</div>'; sr.hidden = false; return; }
    const by = {};
    res.forEach(r => { const k = r.sec ? 'Sections' : r.db ? r.db.group : r.it.sec.title; (by[k] = by[k] || []).push(r); });
    sr.innerHTML = Object.entries(by).map(([k, arr]) => '<div class="sr-group">' + esc(k) + '</div>' + arr.map(r => r.db
      ? '<a class="sr-item" href="' + r.db.href + '">' + esc(r.db.n) + '<small>' + esc(r.db.s) + '</small></a>'
      : r.sec
      ? '<a class="sr-item" href="#/s/' + r.sec.id + '">' + r.sec.icon + ' ' + esc(r.sec.title) + '<small>' + esc(strip(r.sec.blurb)) + '</small></a>'
      : '<a class="sr-item" href="#/s/' + r.it.sec.id + '?focus=' + encodeURIComponent(r.it.id) + '">' + esc(r.it.n) + '<small>' + esc([r.it.group.name, r.it.s].filter(Boolean).join(' · ')) + '</small></a>').join('')).join('');
    sr.hidden = false;
  }
  gs.addEventListener('input', showResults);
  gs.addEventListener('focus', showResults);
  gs.addEventListener('keydown', e => {
    const links = [...sr.querySelectorAll('.sr-item')];
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      active = Math.max(0, Math.min(links.length - 1, active + (e.key === 'ArrowDown' ? 1 : -1)));
      links.forEach((l, i) => l.classList.toggle('active', i === active));
      if (links[active]) links[active].scrollIntoView({ block:'nearest' });
    } else if (e.key === 'Enter') {
      const l = links[active >= 0 ? active : 0]; if (l) { location.hash = l.getAttribute('href'); sr.hidden = true; gs.blur(); }
    } else if (e.key === 'Escape') { sr.hidden = true; gs.blur(); }
  });
  document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) sr.hidden = true; });
  sr.addEventListener('click', e => { if (e.target.closest('.sr-item')) { sr.hidden = true; gs.value = ''; } });
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); gs.focus(); }
  });

  /* ---------- mobile menu ---------- */
  const openNav = v => { document.body.classList.toggle('nav-open', v); $('#scrim').hidden = !v; };
  $('#menuBtn').addEventListener('click', () => openNav(!document.body.classList.contains('nav-open')));
  $('#scrim').addEventListener('click', () => openNav(false));

  /* ---------- router ---------- */
  function route() {
    const raw = location.hash.replace(/^#\/?/, '');
    const [path, qs] = raw.split('?');
    const params = new URLSearchParams(qs || '');
    openNav(false);
    if (path !== 'map' && map) { map.remove(); map = null; }
    if (!path) { renderHome(); markNav(''); document.title = 'Leonida Field Guide · Unofficial GTA VI Companion'; return; }
    if (path === 'map') { renderMap(params); markNav('map'); document.title = 'Map · Leonida Field Guide'; return; }
    let d = path.match(/^db\/(vehicles|weapons)$/);
    if (d && window.DBUI) { DBUI.list(d[1], params); markNav('db/' + d[1]); document.title = DBUI.KIND[d[1]].title + ' · Leonida Field Guide'; return; }
    d = path.match(/^(v|w)\/([\w-]+)$/);
    if (d && window.DBUI) { DBUI.item(d[1] === 'v' ? 'vehicles' : 'weapons', d[2]); markNav('db/' + (d[1] === 'v' ? 'vehicles' : 'weapons')); return; }
    const m = path.match(/^s\/([\w-]+)/);
    if (m && byId[m[1]]) { renderSection(byId[m[1]], params); markNav('s/' + m[1]); document.title = byId[m[1]].title + ' · Leonida Field Guide'; return; }
    renderHome(); markNav('');
  }
  buildNav();
  window.addEventListener('hashchange', route);
  route();
})();
