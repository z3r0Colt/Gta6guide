/* Vehicle & weapon database pages: list view (#/db/vehicles, #/db/weapons) and item view (#/v/slug, #/w/slug). */
(function () {
  'use strict';
  const $ = (s, el) => (el || document).querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  const DB = G.db || { vehicles: [], weapons: [] };
  const KIND = {
    vehicles: { route:'v', title:'Vehicle Database', icon:'🚗', noun:'vehicle', list: DB.vehicles,
      statNames:['Speed','Acceleration','Asphalt Handling','Off-Road Handling','Strength'] },
    weapons: { route:'w', title:'Weapon Database', icon:'🔫', noun:'weapon', list: DB.weapons,
      statNames:['Damage','Handling','Accuracy','Range','Overall'] }
  };
  const bySlug = { vehicles:{}, weapons:{} };
  Object.keys(KIND).forEach(k => KIND[k].list.forEach(it => { bySlug[k][it.s] = it; }));

  /* Which mod shop handles each GTABase "Specialist" type */
  const SPECIALIST = {
    'Tuner':['Vice Auto Customs','Vice City'], 'Luxury':['Euroform Automotive','Vice City'], 'Off-Road':['Wasteland Off-Road','Kelly County'],
    'Muscle':['Capri Classic','Capri'], 'Lowriders':['Lowballers Customs','Vice City'], 'Lowrider':['Lowballers Customs','Vice City'],
    'Dirt Bike':['Dirt Merchants','Port Gellhorn'], 'Sports Bike':['Two Wheel Fury Motorsport','Vice City'], 'Retro':['Coastal Auto Care','Key Lento'],
    'Hot Rods':['Stockyard Speedshop','Stockyard'], 'Hot Rod':['Stockyard Speedshop','Stockyard'], 'Racing':['Whisler Motorsport','Kelly County'],
    'Race':['Whisler Motorsport','Kelly County'], 'Donks':['Rideout Customs (Ultimate Edition)','Vice City'], 'Donk':['Rideout Customs (Ultimate Edition)','Vice City'],
    'Chopper':['Ledford Motorcycle Workshop','Lummox County'], 'Choppers':['Ledford Motorcycle Workshop','Lummox County']
  };
  const NO_MODS = /^(Boats|Planes|Helicopters|Military|Emergency|Industrial|Utility|Service|Transport|Trains|Cycles|Bicycles)$/i;

  function img(it, kind, big) {
    if (it.img && it.img.length) return '<img src="assets/img/' + esc(it.img[0]) + '.jpg" alt="' + esc(it.n) + '" loading="lazy">';
    const ico = kind === 'weapons' ? '🔫' : ({ Boats:'🚤', Planes:'✈️', Helicopters:'🚁', Motorcycles:'🏍️', Cycles:'🚲', Military:'🪖', Emergency:'🚓' }[it.c] || '🚗');
    return '<div class="ph"><span>' + ico + '</span><b>' + esc(it.m || '') + '</b>' + (big ? '<small>No official Rockstar image yet</small>' : '') + '</div>';
  }
  function bars(it, kind) {
    const names = KIND[kind].statNames, st = it.st || {};
    const rows = names.filter(n => st[n] != null);
    if (!rows.length) return '';
    return '<div class="statbars">' + rows.map(n => {
      const v = parseFloat(st[n]), w = Math.max(2, Math.min(100, v * 10));
      return '<div class="sb"><span>' + esc(n) + '</span><div class="sbt"><i style="width:' + w + '%"></i></div><b>' + esc(st[n]) + '</b></div>';
    }).join('') + '</div>';
  }
  const kv = rows => '<dl class="kv big">' + rows.filter(r => r[1] != null && r[1] !== '' && !(Array.isArray(r[1]) && !r[1].length))
    .map(r => '<dt>' + esc(r[0]) + '</dt><dd>' + (r[2] ? r[1] : esc(Array.isArray(r[1]) ? r[1].join(', ') : r[1])) + '</dd>').join('') + '</dl>';
  const money = v => v ? parseInt(String(v).replace(/[^0-9]/g, ''), 10) || 0 : 0;

  /* ---------- list view ---------- */
  function list(kind, params) {
    const K = KIND[kind];
    const classes = [...new Set(K.list.map(i => i.c).filter(Boolean))].sort();
    const state = { q: params.get('q') || '', c: params.get('c') || '', sort: 'name', only: '' };
    let h = '<div class="page-head"><div class="kicker">Database</div><h1 class="title"><span class="h-ico">' + K.icon + '</span><span class="h-txt">' + K.title + '</span></h1>' +
      '<p class="lede">Every ' + K.noun + ' in GTA VI that has been documented so far, ' + K.list.length + ' in all. Tap any one for its full page with stats, ' +
      (kind === 'vehicles' ? 'price, where to find it, mods and variants.' : 'price, where to buy it, attachments and variants.') + '</p></div>';
    h += '<div class="toolbar"><input type="search" id="dbq" placeholder="Search ' + K.noun + 's…" value="' + esc(state.q) + '">' +
      '<select id="dbc"><option value="">All classes</option>' + classes.map(c => '<option' + (c === state.c ? ' selected' : '') + '>' + esc(c) + '</option>').join('') + '</select>' +
      '<select id="dbs"><option value="name">Sort: A–Z</option>' + K.statNames.map(n => '<option value="' + esc(n) + '">Sort: ' + esc(n) + '</option>').join('') +
      (kind === 'vehicles' ? '<option value="sell">Sort: Sell value</option><option value="reg">Sort: Register cost</option>' : '<option value="price">Sort: Price</option>') + '</select>' +
      (kind === 'vehicles' ? '<select id="dbo"><option value="">All vehicles</option><option value="base">Base models</option><option value="standout">Standout one-offs</option><option value="img">With official image</option></select>' : '<select id="dbo"><option value="">All weapons</option><option value="std">Standard</option><option value="var">Unique variants</option><option value="img">With official image</option></select>') +
      '</div><div id="dbcount" class="map-note"></div><div class="dbgrid" id="dbgrid"></div>';
    $('#app').innerHTML = h;
    const draw = () => {
      const terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
      let rows = K.list.filter(it => (!state.c || it.c === state.c) &&
        (!state.only || (state.only === 'img' ? it.img && it.img.length : state.only === 'standout' || state.only === 'var' ? !!it.var : !it.var)) &&
        terms.every(t => it.t.includes(t)));
      const sk = state.sort;
      rows.sort((a, b) => sk === 'name' ? a.n.localeCompare(b.n)
        : sk === 'sell' ? money(b.sell) - money(a.sell) : sk === 'reg' ? money(b.reg) - money(a.reg) : sk === 'price' ? money(b.price) - money(a.price)
        : (parseFloat((b.st || {})[sk]) || 0) - (parseFloat((a.st || {})[sk]) || 0));
      $('#dbcount').textContent = rows.length + ' shown';
      $('#dbgrid').innerHTML = rows.map(it => {
        const stat = sk !== 'name' ? (sk === 'sell' ? it.sell : sk === 'reg' ? it.reg : sk === 'price' ? it.price : (it.st || {})[sk]) : '';
        return '<a class="dbcard" href="#/' + K.route + '/' + it.s + '"><div class="dbimg">' + img(it, kind) + '</div><div class="dbtxt"><b>' + esc(it.n) + '</b><small>' +
          esc([it.c, it.set || (it.var ? 'Variant' : '')].filter(Boolean).join(' · ')) + '</small>' + (stat ? '<em>' + esc(stat) + '</em>' : '') + '</div></a>';
      }).join('') || '<div class="empty">Nothing matches.</div>';
    };
    draw();
    $('#dbq').addEventListener('input', e => { state.q = e.target.value; draw(); });
    $('#dbc').addEventListener('change', e => { state.c = e.target.value; draw(); });
    $('#dbs').addEventListener('change', e => { state.sort = e.target.value; draw(); });
    $('#dbo').addEventListener('change', e => { state.only = e.target.value; draw(); });
    window.scrollTo(0, 0);
  }

  /* ---------- item view ---------- */
  const link = (kind, name) => {
    const it = KIND[kind].list.find(x => x.n === name || x.short === name);
    return it ? '<a href="#/' + KIND[kind].route + '/' + it.s + '">' + esc(name) + '</a>' : esc(name);
  };
  function item(kind, slug) {
    const K = KIND[kind], it = bySlug[kind][slug];
    if (!it) { $('#app').innerHTML = '<div class="empty">Not found. <a href="#/db/' + kind + '">Back to the ' + K.title + '</a></div>'; return; }
    let h = '<p class="crumbs"><a href="#/db/' + kind + '">← ' + K.title + '</a></p>';
    h += '<div class="itemhead"><div class="gallery">' + (it.img && it.img.length
      ? '<img id="gmain" src="assets/img/' + esc(it.img[0]) + '.jpg" alt="' + esc(it.n) + '">' + (it.img.length > 1 ? '<div class="thumbs">' + it.img.map((x, i) => '<img src="assets/img/' + esc(x) + '.jpg" data-i="' + i + '" alt="">').join('') + '</div>' : '') + '<small class="credit">Image © Rockstar Games</small>'
      : img(it, kind, true)) + '</div>';
    h += '<div class="itemmeta"><div class="kicker">' + esc([it.m, it.c].filter(Boolean).join(' · ')) + '</div><h1 class="title"><span class="h-txt">' + esc(it.n) + '</span></h1>';
    const badges = [];
    if (it.set) badges.push('<span class="badge ue">Standout · ' + esc(it.set) + '</span>');
    if (it.var) badges.push('<span class="badge ue">Unique variant</span>');
    if (it.ed && /ultimate/i.test(it.ed)) badges.push('<span class="badge ue">Ultimate Edition</span>');
    if (it.trk && it.trk !== 'None') badges.push('<span class="badge rep">' + esc(it.trk) + ' tracker</span>');
    h += '<div class="c-badges">' + badges.join('') + '</div>' + bars(it, kind);
    h += '<p class="links"><a class="btn sm" href="' + esc(it.u) + '" target="_blank" rel="noopener">📷 More photos on GTABase ↗</a>' +
      (it.where && G.places[it.where] ? ' <a class="btn sm" href="#/map?place=' + encodeURIComponent(it.where) + '">📍 ' + esc(it.where) + ' on the map</a>' : '') + '</p></div></div>';

    if (kind === 'vehicles') {
      h += '<div class="itemgrid"><section class="panel"><h2 class="sec">Overview</h2>' + summary(it) + kv([
        ['Class', [it.c, it.c2].filter(Boolean).join(', ')], ['Manufacturer', it.m], ['Era', it.e], ['Style', it.sty], ['Seats', it.seats], ['Storage', it.sto], ['Drivetrain', it.dr],
        ['Gears', it.g], ['Weight', it.kg], ['Body condition', it.body], ['Based on (real life)', it.rl], ['Base model', it.base ? link('vehicles', it.base) : '', true],
        ['Features', it.feat], ['Notable owners', it.own], ['Game edition', it.ed], ['GTABase rating', it.r]]) + '</section>';
      h += '<section class="panel"><h2 class="sec">How to get it</h2>' + kv([['Where', it.wh, true], ['How to unlock', it.unlock], ['Cost to register', it.reg], ['Sell value (stolen)', it.sell], ['Tracker', it.trk]]) +
        howToGet(it) + '</section>';
      h += '<section class="panel"><h2 class="sec">Mods</h2>' + mods(it) + '</section>';
      if ((it.so && it.so.length) || it.base) {
        const sibs = it.base ? K.list.filter(x => x !== it && x.base === it.base) : [];
        h += '<section class="panel"><h2 class="sec">Variants</h2>' +
          (it.so && it.so.length ? '<p>Standout one-offs of this model:</p><ul>' + it.so.map(n => '<li>' + link('vehicles', n) + '</li>').join('') + '</ul>' : '') +
          (sibs.length ? '<p>Other versions of the ' + link('vehicles', it.base) + ':</p><ul>' + sibs.map(x => '<li><a href="#/v/' + x.s + '">' + esc(x.n) + '</a></li>').join('') + '</ul>' : '') + '</section>';
      }
    } else {
      h += '<div class="itemgrid"><section class="panel"><h2 class="sec">Overview</h2>' + wsummary(it) + kv([
        ['Class', it.c], ['Manufacturer', it.m], ['Based on (real life)', it.rl], ['Magazine', it.ammo], ['Extended magazine', it.ext], ['Base weapon', it.base ? link('weapons', it.base) : '', true]]) + '</section>';
      h += '<section class="panel"><h2 class="sec">How to get it</h2>' + kv([['Where', it.acq], ['Price', it.price], ['How to unlock', it.unlock], ['Edition', it.ed]]) + whowToGet(it) + '</section>';
      h += '<section class="panel"><h2 class="sec">Attachments & mods</h2>' + wmods(it) + '</section>';
      const vars = (it.vars || []).filter(Boolean);
      const sibs = it.base ? K.list.filter(x => x !== it && x.base === it.base) : [];
      if (vars.length || sibs.length) h += '<section class="panel"><h2 class="sec">Variants</h2><ul>' +
        (vars.length ? vars.map(n => '<li>' + link('weapons', n) + '</li>').join('') : sibs.map(x => '<li><a href="#/w/' + x.s + '">' + esc(x.n) + '</a></li>').join('')) + '</ul></section>';
    }
    if (it.notes && it.notes.length) h += '<section class="panel"><h2 class="sec">Guide notes</h2>' + it.notes.map(n => '<div class="tipline">' + n + '</div>').join('') + '</section>';
    const rel = K.list.filter(x => x !== it && x.c === it.c).sort((a, b) => (b.img ? 1 : 0) - (a.img ? 1 : 0)).slice(0, 8);
    h += '</div>';
    if (rel.length) h += '<h2 class="sec">More ' + esc(it.c) + '</h2><div class="dbgrid">' + rel.map(x => '<a class="dbcard" href="#/' + K.route + '/' + x.s + '"><div class="dbimg">' + img(x, kind) + '</div><div class="dbtxt"><b>' + esc(x.n) + '</b><small>' + esc(x.set || x.m || '') + '</small></div></a>').join('') + '</div>';
    h += '<p class="src">Specs and stats compiled from GTABase’s database and community guides. Images © Rockstar Games where shown.</p>';
    $('#app').innerHTML = h;
    document.querySelectorAll('.thumbs img').forEach(t => t.addEventListener('click', () => { $('#gmain').src = t.src; }));
    document.title = it.n + ' · Leonida Field Guide';
    window.scrollTo(0, 0);
  }

  function summary(it) {
    const bits = [];
    bits.push('The ' + esc(it.n) + ' is ' + (/^[aeiou]/i.test(it.c || '') ? 'an ' : 'a ') + esc((it.c || 'vehicle').toLowerCase().replace(/s$/, '')) + (it.m ? ' made by ' + esc(it.m) : '') + '.');
    if (it.e) bits.push('It is a ' + esc(it.e.toLowerCase()) + ' model' + (it.rl ? ' styled after the real ' + esc(it.rl) : '') + '.');
    if (it.set) bits.push('It is a standout one-off in the ' + esc(it.set) + ' set, so it sits at a fixed spot rather than driving around in traffic.');
    const st = it.st || {}, best = Object.keys(st).sort((a, b) => parseFloat(st[b]) - parseFloat(st[a]))[0];
    if (best) bits.push('Its strongest stat is ' + esc(best.toLowerCase()) + ' at ' + esc(st[best]) + ' out of 10.');
    return '<p>' + bits.join(' ') + '</p>';
  }
  function howToGet(it) {
    const tips = [];
    if (it.set) tips.push('Standouts do not spawn in traffic. Go to the spot, scan it with WAiNK, then take it. Register it or park it in a garage before you leave it, or it can vanish.');
    else if (!NO_MODS.test(it.c || '')) tips.push('This model drives around in traffic. Scan passing cars with WAiNK (hold Up, aim, hold R1) to log it.');
    if (it.trk === 'Standard') tips.push('Standard tracker. Police get alerted where you stole it, and Moses will not buy it. Any Pay ’n’ Spray can register it from Chapter 3.');
    if (it.trk === 'Advanced') tips.push('Advanced tracker. You need the Key Cloner (Chapter 3), and only Randy buys these. Do not drive slowly or the tracker pings police.');
    if (/Military/i.test(it.c || '')) tips.push('Military vehicles come from Mile Zero Air Station on Goose Key. Expect a heavy army response, and they cannot be stored in a garage.');
    return tips.map(t => '<div class="tipline">' + t + '</div>').join('');
  }
  function mods(it) {
    if (NO_MODS.test(it.c || '')) return '<p>No mod shop works on ' + esc((it.c || 'these').toLowerCase()) + '. You can still repair and respray where allowed.</p>';
    const sp = SPECIALIST[it.sp];
    let h = sp ? '<div class="good-line">Best shop: <b>' + esc(sp[0]) + '</b> (' + esc(sp[1]) + '). It specializes in ' + esc(it.sp.toLowerCase()) + ' builds and carries the most parts for this ' + esc((it.c || '').toLowerCase().replace(/s$/, '')) + '.</div>'
      : '<p>No specialist shop. Any of the 14 mod shops can do the standard menu, and Vice Vinyl handles wraps and liveries.</p>';
    h += '<p>The mod menu has six parts. Each mod raises or lowers one or more of the five stats.</p><ul>' +
      '<li><b>Pro Builds.</b> Ready-made packages of paint, interior and parts in one purchase. The Ganado’s Retro Build costs $1,535.</li>' +
      '<li><b>Performance.</b> Engine stages, intake, transmission, suspension, exhaust and boost (nitrous, turbo or supercharger, depending on the car). Lowered suspension helps on asphalt and raised helps off-road.</li>' +
      '<li><b>Wheels.</b> Rim styles, sizes and tire profiles.</li><li><b>Bodywork.</b> Hoods, bumpers, splitters, spoilers, exhausts and seven window tints.</li>' +
      '<li><b>Cosmetics.</b> Resprays, finishes, liveries, plates and lights (about $300 each).</li><li><b>Interior.</b> Steering wheels, seats, upholstery, stitching and trim.</li></ul>';
    if (it.set) h += '<div class="warnline">Standouts lose their unique parts if you swap them at a shop.</div>';
    h += '<div class="tipline">Register the car before you mod it. Tracked cars cannot be modified until registered.</div>';
    return h;
  }
  function wsummary(it) {
    const bits = ['The ' + esc(it.n) + ' is ' + (/^[aeiou]/i.test(it.c || '') ? 'an ' : 'a ') + esc((it.c || 'weapon').toLowerCase().replace(/s$/, '')) + (it.m ? ' from ' + esc(it.m) : '') + '.'];
    if (it.rl) bits.push('It is modeled on the real ' + esc(it.rl) + '.');
    if (it.var) bits.push('This is a unique variant' + (it.base ? ' of the ' + esc(it.base) : '') + '. Unique guns have their own finish and are shared by Jason and Lucia.');
    const st = it.st || {};
    if (st.Overall) bits.push('Overall rating ' + esc(st.Overall) + ' out of 10.');
    return '<p>' + bits.join(' ') + '</p>';
  }
  function whowToGet(it) {
    const t = [];
    if (/LMG|Sniper|Launcher/i.test(it.c || '') && /Ammu-Nation/i.test(it.acq || '')) t.push('Only the six Expanded gun stores stock this class. They are Woodhatch, Big Shots, Phil\u2019s Ammu-Nation, Black Eagle, Iron & Oak and Prestige Firearms. See <a href="#/s/gunstores">Gun Stores</a>.');
    if (/Ammu-Nation/i.test(it.acq || '')) t.push('Sold at gun stores. Bigger Expanded stores carry heavy weapons, and buying more raises your loyalty so more stock unlocks.');
    if (it.var) t.push('Unique variants are usually key valuables in a gang Illegal Operation, a mission reward or a gun store’s own special. Once you own it, it stays in your weapon locker.');
    t.push('Owned guns come back from any gun store weapon locker or your registered car’s trunk if you lose them.');
    return t.map(x => '<div class="tipline">' + x + '</div>').join('');
  }
  function wmods(it) {
    if (it.var) return '<p>Unique variants cannot be modified. Their finish and parts are fixed.</p>';
    if (/Melee|Throwable|Explosive/i.test(it.c || '')) return '<p>No attachments for ' + esc((it.c || '').toLowerCase()) + '.</p>';
    const can = it.mods && !/no|cannot/i.test(it.mods);
    return (can === false && it.mods ? '<p>' + esc(it.mods) + '.</p>' : '') +
      '<p>Attachments are fitted at a gun store counter. Bigger stores have more options and exclusive cosmetics.</p><ul>' +
      '<li><b>Suppressor</b> and <b>flashlight</b>. You can take these on and off anywhere from the loadout (L1).</li>' +
      '<li><b>Grips</b>, <b>magazines</b> and <b>optics</b>. These change the gun’s stats and can only be swapped at a gun store.</li>' +
      '<li><b>Muzzle</b> and <b>tactical</b> parts, also store-only.</li><li><b>Cosmetic</b> finishes. Count toward the Stylishly Armed challenge.</li></ul>' +
      '<div class="tipline">Each character keeps their own mods on a shared gun. More attachment options unlock as you buy more weapons.</div>';
  }

  function searchIndex() {
    const out = [];
    Object.keys(KIND).forEach(k => KIND[k].list.forEach(it => out.push({ n: it.n, s: [it.c, it.set || it.m].filter(Boolean).join(' · '), href: '#/' + KIND[k].route + '/' + it.s, group: KIND[k].title, t: it.t })));
    return out;
  }

  window.DBUI = { list, item, searchIndex, KIND, counts: { vehicles: DB.vehicles.length, weapons: DB.weapons.length } };
})();
