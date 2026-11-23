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
  let done = store.get('lfg-done', {});
  const isDone = id => !!done[id];
  const setDone = (id, v) => { if (v) done[id] = 1; else delete done[id]; store.set('lfg-done', done); };

  /* ---------- normalize data ---------- */
  const sections = G.sections;
  const byId = {};
  const allItems = [];
  sections.forEach(sec => {
    byId[sec.id] = sec;
    sec.count = 0;
    (sec.groups || []).forEach(g => {
      (g.items || []).forEach((it, idx) => {
        it.id = sec.id + ':' + slug(g.name) + ':' + slug(it.n) + (it.n ? '' : idx);
        it.sec = sec; it.group = g;
        it.text = [it.n, it.s, strip(it.d), it.tip, it.warn, (it.steps || []).join(' '), it.unlock, g.name,
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
    const sec = it.sec, track = sec.trackable, d = isDone(it.id), num = opts && opts.num;
    let body = '';
    if (sec.type === 'cheats') {
      body += '<dl class="kv"><dt>Unlock</dt><dd>' + esc(it.unlock) + '</dd></dl>';
      if (it.conflict) body += '<div class="tipline">Sources differ. ' + esc(it.conflict) + '.</div>';
    }
    if (it.d) body += '<p>' + it.d + '</p>';
    if (it.kv) body += '<dl class="kv">' + Object.entries(it.kv).map(([k, v]) => '<dt>' + esc(k) + '</dt><dd>' + esc(v) + '</dd>').join('') + '</dl>';
    if (it.steps) body += '<ol>' + it.steps.map(s => '<li>' + s + '</li>').join('') + '</ol>';
    if (it.tip) body += '<div class="tipline">' + it.tip + '</div>';
    if (it.warn) body += '<div class="warnline">' + it.warn + '</div>';
    const pl = placeOf(it);
    if (pl || opts.searchHit) {
      body += '<div class="c-actions">' + (pl ? '<a class="btn sm" href="#/map?focus=' + encodeURIComponent(it.id) + '">📍 Show on map</a>' : '') +
        (opts.searchHit ? '<a class="btn sm" href="#/s/' + sec.id + '?focus=' + encodeURIComponent(it.id) + '">Open in ' + esc(sec.title) + '</a>' : '') + '</div>';
    }
    const hasBody = !!body;
    const sub = sec.type === 'cheats' ? it.s : it.s;
    return '<div class="card' + (track ? '' : ' nocheck') + (d ? ' done' : '') + '" id="c-' + esc(it.id) + '" data-id="' + esc(it.id) + '">' +
      '<div class="c-top"' + (hasBody ? '' : ' style="cursor:default"') + '>' +
        (track ? '<button class="c-check' + (d ? ' on' : '') + '" aria-label="Mark done" aria-pressed="' + d + '"></button>' : '') +
        '<div class="c-main"><div class="c-name">' + (num ? '<span class="c-num">' + num + '</span>' : '') + esc(it.n) + '</div>' +
          (sub ? '<div class="c-sub">' + esc(sub) + '</div>' : '') +
          (it.b && it.b.length ? '<div class="c-badges">' + it.b.map(badge).join('') + '</div>' : '') +
          (sec.type === 'cheats' && it.code ? '<div class="c-badges">' + codeHTML(it.code) + '</div>' : '') +
        '</div>' +
        (hasBody ? '<svg class="c-caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>' : '') +
      '</div>' + (hasBody ? '<div class="c-body">' + body + '</div>' : '') + '</div>';
  }

  function calloutHTML(c) {
    return '<div class="callout ' + (c.kind || '') + '"><h4>' + esc(c.title) + '</h4><ul>' + c.items.map(i => '<li>' + i + '</li>').join('') + '</ul></div>';
  }

  function bindCards(root) {
    root.addEventListener('click', e => {
      const chk = e.target.closest('.c-check');
      if (chk) {
        e.stopPropagation();
        const card = chk.closest('.card'), id = card.dataset.id, v = !isDone(id);
        setDone(id, v);
        chk.classList.toggle('on', v); chk.setAttribute('aria-pressed', v); card.classList.toggle('done', v);
        updateProgress();
        return;
      }
      const top = e.target.closest('.c-top');
      if (top && top.nextElementSibling) top.parentElement.classList.toggle('open');
    });
  }

  /* ---------- section page ---------- */
  let current = null;
  function renderSection(sec, params) {
    const state = { q: params.get('q') || '', f: new Set(), hide: store.get('lfg-hide-' + sec.id, false) };
    const app = $('#app');
    let h = '<div class="page-head"><div class="kicker">' + esc(sec.nav) + '</div><h1 class="title"><span class="h-ico">' + sec.icon + '</span><span class="h-txt">' + esc(sec.title) + '</span></h1>' +
      '<p class="lede">' + sec.blurb + '</p></div>';
    if (sec.before) h += '<div class="callouts">' + sec.before.map(calloutHTML).join('') + '</div>';
    h += '<div class="toolbar"><input type="search" id="secSearch" placeholder="Filter ' + esc(sec.title.toLowerCase()) + '…" value="' + esc(state.q) + '">';
    const chips = [];
    if (sec.groups.length > 1) sec.groups.forEach(g => chips.push({ key:'g:' + g.name, label:g.name }));
    (sec.filters || []).forEach(f => chips.push({ key:'b:' + f.key, label:f.label }));
    if (chips.length) h += '<div class="chips">' + chips.map(c => '<button class="chip" data-k="' + esc(c.key) + '">' + esc(c.label) + '</button>').join('') + '</div>';
    if (sec.trackable) h += '<label class="toggle"><input type="checkbox" id="hideDone"' + (state.hide ? ' checked' : '') + '> Hide completed</label>';
    h += '</div>';
    if (sec.trackable) h += '<div class="progress"><div class="bar"><i id="pbar"></i></div><b id="ptxt"></b>' +
      '<button class="btn sm" id="resetSec" title="Clear ticks in this section">Reset</button></div>';
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
          if (state.hide && sec.trackable && isDone(it.id)) return false;
          if (bf.length && !bf.every(b => (it.b || []).includes(b))) return false;
          return terms.every(t => it.text.includes(t));
        });
        if (!items.length) return;
        shown += items.length;
        const numbered = sec.id === 'missions';
        out += '<section class="group"><div class="group-head"><h3>' + esc(g.name) + '</h3><small>' + items.length + '</small></div>' +
          (g.note ? '<p class="group-note">' + esc(g.note) + '</p>' : '') +
          '<div class="cards' + (numbered || sec.type === 'cheats' ? ' list' : '') + '">' +
          items.map(it => cardHTML(it, { num: numbered ? (g.items.indexOf(it) + 1) : 0 })).join('') + '</div></section>';
      });
      $('#groups').innerHTML = out || '<div class="empty">Nothing matches. Try clearing a filter.</div>';
    };
    current = { sec, draw };
    draw();
    updateProgress();
    bindCards($('#groups'));

    $('#secSearch').addEventListener('input', e => { state.q = e.target.value; draw(); });
    app.querySelectorAll('.chip').forEach(ch => ch.addEventListener('click', () => {
      const k = ch.dataset.k;
      if (state.f.has(k)) state.f.delete(k); else state.f.add(k);
      ch.classList.toggle('on'); draw();
    }));
    const hd = $('#hideDone');
    if (hd) hd.addEventListener('change', e => { state.hide = e.target.checked; store.set('lfg-hide-' + sec.id, state.hide); draw(); });
    const rs = $('#resetSec');
    if (rs) rs.addEventListener('click', () => {
      if (!confirm('Clear every tick in ' + sec.title + '?')) return;
      allItems.filter(i => i.sec === sec).forEach(i => setDone(i.id, false));
      draw(); updateProgress();
    });

    const focus = params.get('focus');
    if (focus) {
      const el = document.getElementById('c-' + focus);
      if (el) { el.classList.add('open', 'hl'); setTimeout(() => el.scrollIntoView({ behavior:'smooth', block:'center' }), 60); }
    } else window.scrollTo(0, 0);
  }

  function updateProgress() {
    if (!current || !current.sec.trackable) return;
    const items = allItems.filter(i => i.sec === current.sec);
    const n = items.filter(i => isDone(i.id)).length, pct = items.length ? Math.round(n / items.length * 100) : 0;
    const bar = $('#pbar'), txt = $('#ptxt');
    if (bar) bar.style.width = pct + '%';
    if (txt) txt.textContent = n + ' / ' + items.length + ' · ' + pct + '%';
  }

  /* ---------- home ---------- */
  function renderHome() {
    current = null;
    const tracked = sections.filter(s => s.trackable);
    const tot = tracked.reduce((a, s) => a + s.count, 0);
    const got = allItems.filter(i => i.sec.trackable && isDone(i.id)).length;
    let h = '<section class="hero"><h1>Leonida<span>the ultimate field guide to GTA VI</span></h1>' +
      '<p>Missions, side quests, money, cars, mod shops, guns, shops, collectibles, cheats, glitches and secrets. All in one place with a map of the whole state. Press <kbd>/</kbd> anywhere to search.</p>' +
      '<div class="cta"><a class="btn primary" href="#/map">🗺️ Open the map</a><a class="btn" href="#/s/missions">🎬 Mission checklist</a><a class="btn" href="#/s/money">💵 Get rich</a></div></section>';
    h += '<div class="progress"><div class="bar"><i style="width:' + (tot ? Math.round(got / tot * 100) : 0) + '%"></i></div><b>Your checklist progress: ' + got + ' / ' + tot + '</b></div>';
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
      if (grp === 'Start') h += '<a class="tile" href="#/map"><span class="t-ico">🗺️</span><b>Interactive Map</b><span>Every pin in the guide on one map of Leonida.</span></a>';
      h += '</div>';
    });
    $('#app').innerHTML = h;
    window.scrollTo(0, 0);
  }

  /* ---------- map ---------- */
  let map = null;
  const toLL = (x, y) => [1000 - y, x];
  function renderMap(params) {
    current = null;
    const layersOn = store.get('lfg-layers', null);
    const pinSecs = sections.filter(s => s.groups.some(g => g.items.some(placeOf)));
    let side = '<h4>Layers</h4><div class="chips" style="margin-bottom:8px"><button class="chip" id="allOn">All</button><button class="chip" id="allOff">None</button></div>';
    pinSecs.forEach(s => {
      const n = allItems.filter(i => i.sec === s && placeOf(i)).length;
      const on = layersOn ? layersOn.includes(s.id) : true;
      side += '<label class="layer"><input type="checkbox" data-l="' + s.id + '"' + (on ? ' checked' : '') + '><span class="sw" style="background:' + (LAYER_COLORS[s.id] || '#fff') + '"></span>' + s.icon + ' ' + esc(s.title) + '<span class="n">' + n + '</span></label>';
    });
    side += '<h4 style="margin-top:14px">Counties</h4>' + G.counties.map(c => '<div class="layer" style="cursor:default"><span class="sw" style="background:' + c.color + '"></span>' + esc(c.name) + '</div>').join('');
    side += '<p class="map-note">Schematic map. Pins are placed by town or area from guide descriptions, not exact coordinates. Click a pin for details.</p>';
    $('#app').innerHTML = '<div class="page-head"><div class="kicker">Explore</div><h1 class="title"><span class="h-ico">🗺️</span><span class="h-txt">Leonida Map</span></h1>' +
      '<p class="lede">Everything in the guide that has a location, on one map. Toggle layers in the panel. Tap a county for its overview. Pinch or scroll to zoom into Vice City.</p></div>' +
      '<div class="map-layout"><aside class="map-side">' + side + '</aside><div id="map"></div></div>';

    if (map) { map.remove(); map = null; }
    map = L.map('map', { crs: L.CRS.Simple, minZoom: -1.2, maxZoom: 3, zoomSnap: 0.25, attributionControl: false });
    const bounds = [[-60, -60], [1060, 1060]];
    map.fitBounds([[0, 0], [1000, 1000]]);
    map.createPane('labels'); map.getPane('labels').style.zIndex = 650; map.getPane('labels').style.pointerEvents = 'none';
    map.setMaxBounds(bounds);

    L.rectangle(bounds, { stroke:false, fillColor:'#0d3550', fillOpacity:1, interactive:false }).addTo(map);
    L.polygon(G.land.map(p => toLL(p[0], p[1])), { color:'#f3d6a0', weight:3, opacity:.9, fillColor:'#2a5a3a', fillOpacity:1, interactive:false }).addTo(map);
    G.counties.forEach(c => {
      L.polygon(c.pts.map(p => toLL(p[0], p[1])), { color:c.color, weight:1.5, opacity:.6, dashArray:'4 6', fillColor:c.color, fillOpacity:.14 })
        .bindPopup('<div class="pp-cat" style="color:' + c.color + '">County</div><b>' + esc(c.name) + '</b><br>' + esc(c.note))
        .addTo(map);
    });
    [].concat(G.keys, G.islands).forEach(k => L.polygon(k.map(p => toLL(p[0], p[1])), { color:'#f3d6a0', weight:2, fillColor:'#2f6a44', fillOpacity:1, interactive:false }).addTo(map));
    G.lakes.forEach(l => L.polygon(l.pts.map(p => toLL(p[0], p[1])), { color:'#5fb0d8', weight:1, fillColor:'#1a5a80', fillOpacity:1 }).bindTooltip(l.name).addTo(map));
    G.regions.forEach(r => L.marker(toLL(r.at[0], r.at[1] - 26), { pane:'labels', interactive:false, icon: L.divIcon({ className:'region-label', html:esc(r.name), iconSize:null }) }).addTo(map));
    ['Key Lento','Port Gellhorn','Ambrosia','Capri','Belville','Hamlet','Moreau','Grayson','Ocean Beach','Little Cuba','La Perle','Downtown','Watson Bay','Emerald Springs','Waning Sands','Southwind']
      .forEach(n => { const p = G.places[n]; if (p) L.marker(toLL(p.x + 8, p.y - 8), { pane:'labels', interactive:false, icon: L.divIcon({ className:'town-label', html:esc(n), iconSize:null }) }).addTo(map); });

    const groups = {}, markerById = {};
    pinSecs.forEach(s => {
      const lg = L.layerGroup();
      allItems.filter(i => i.sec === s && placeOf(i)).forEach(it => {
        const p = placeOf(it), h = hash(it.id), countyLevel = /County$|^Vice City$/.test(it.at);
        const r = countyLevel ? 22 : 7, a = (h % 360) * Math.PI / 180, dist = ((h >> 9) % 100) / 100 * r;
        const ll = toLL(p.x + Math.cos(a) * dist, p.y + Math.sin(a) * dist);
        const col = LAYER_COLORS[s.id] || '#fff';
        const mk = L.marker(ll, { icon: L.divIcon({ className:'', html:'<div class="pin" style="background:' + col + '"></div>', iconSize:[16,16], iconAnchor:[8,8] }), title: it.n });
        mk.bindPopup('<div class="pp-cat" style="color:' + col + '">' + s.icon + ' ' + esc(s.title) + '</div><b>' + esc(it.n) + '</b>' +
          (it.s ? '<br>' + esc(it.s) : '') + '<br><small style="color:#b9a6cc">' + esc(it.at) + '</small>' +
          '<br><a href="#/s/' + s.id + '?focus=' + encodeURIComponent(it.id) + '">Open details →</a>');
        mk.addTo(lg);
        markerById[it.id] = { mk, sec: s.id };
      });
      groups[s.id] = lg;
      const on = layersOn ? layersOn.includes(s.id) : true;
      if (on) lg.addTo(map);
    });
    const saveLayers = () => store.set('lfg-layers', [...document.querySelectorAll('[data-l]')].filter(i => i.checked).map(i => i.dataset.l));
    document.querySelectorAll('[data-l]').forEach(cb => cb.addEventListener('change', () => {
      if (cb.checked) groups[cb.dataset.l].addTo(map); else map.removeLayer(groups[cb.dataset.l]);
      saveLayers();
    }));
    const setAll = v => { document.querySelectorAll('[data-l]').forEach(cb => { cb.checked = v; if (v) groups[cb.dataset.l].addTo(map); else map.removeLayer(groups[cb.dataset.l]); }); saveLayers(); };
    $('#allOn').addEventListener('click', () => setAll(true));
    $('#allOff').addEventListener('click', () => setAll(false));

    const focus = params.get('focus');
    if (focus && markerById[focus]) {
      const { mk, sec } = markerById[focus];
      groups[sec].addTo(map);
      const cb = document.querySelector('[data-l="' + sec + '"]'); if (cb) cb.checked = true;
      map.setView(mk.getLatLng(), 1.5);
      setTimeout(() => mk.openPopup(), 200);
    }
    setTimeout(() => map.invalidateSize(), 50);
    window.scrollTo(0, 0);
  }

  /* ---------- global search ---------- */
  const gs = $('#globalSearch'), sr = $('#searchResults');
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
    return res.sort((a, b) => b.score - a.score).slice(0, 40);
  }
  function showResults() {
    const q = gs.value.trim();
    if (!q) { sr.hidden = true; return; }
    const res = search(q);
    active = -1;
    if (!res.length) { sr.innerHTML = '<div class="sr-empty">No results for “' + esc(q) + '”.</div>'; sr.hidden = false; return; }
    const by = {};
    res.forEach(r => { const k = r.sec ? 'Sections' : r.it.sec.title; (by[k] = by[k] || []).push(r); });
    sr.innerHTML = Object.entries(by).map(([k, arr]) => '<div class="sr-group">' + esc(k) + '</div>' + arr.map(r => r.sec
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
    const m = path.match(/^s\/([\w-]+)/);
    if (m && byId[m[1]]) { renderSection(byId[m[1]], params); markNav('s/' + m[1]); document.title = byId[m[1]].title + ' · Leonida Field Guide'; return; }
    renderHome(); markNav('');
  }
  buildNav();
  window.addEventListener('hashchange', route);
  route();
})();
