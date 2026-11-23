/* Weapons, attachments, unique variants and gun stores. */
(function(){
  const w = (n, s, b, extra) => Object.assign({ n, s: s || '', b: b || [] }, extra || {});
  G.add({
    id: 'weapons', title: 'Weapons', icon: '🔫', nav: 'Gear',
    blurb: '66 standard weapons (53 guns, 9 melee, 4 explosives) plus about 130 unique variants. Buy at gun stores, mod at the counter, and store them in your trunk.',
    trackable: true,
    filters: [{ key:'UE', label:'Ultimate / Pre-order' }, { key:'unique', label:'Unique variant' }],
    before: [
      { kind:'warn', title:'How owning a gun works', items:[
        '<b>Owned</b> (light-blue icon) means you bought it at a gun store. Both characters can use it but each one keeps their own mods.',
        '<b>Unowned</b> (white icon) means you picked it up. You cannot mod it and you lose it when you die, get busted or load a save. Put it in your own car’s trunk to hold it a while.',
        '<b>Unique</b> (gold icon) guns are one-offs. They cannot be modded and are shared by both characters.',
        'You carry 2 concealed handguns and 2 visible long guns. Everything else rides in the trunk. Long guns showing raise your heat, so holster with L1.',
        'Lost an owned gun? Pull it from any gun store weapon locker or your registered car’s trunk.',
        'Buy with plain <b>Buy</b> instead of Buy and Equip. One player lost Donnie’s .38 by equipping a store .38 over it.'
      ]},
      { kind:'tip', title:'Attachments', items:[
        'Grips, mags, optics, muzzles and tactical parts are fitted at the gun store counter. Suppressors and flashlights can come off in the field.',
        'Bigger stores carry more parts and more guns. Buying more raises your loyalty and unlocks more stock.',
        'Typical slots: pistols take suppressor, extended mag, flashlight, grip and holo sight. Rifles add scopes and drum mags.',
        'Cosmetic tints and liveries count toward the Stylishly Armed challenge.'
      ]}
    ],
    groups: [
      { name:'Handguns', items:[
        w('Klose K17','Glock-style 17-round pistol',[],{ d:'Best all-round sidearm. Five attachment slots. A full-auto MCD version exists.' }),
        w('Girardi ES9 / ES18','Beretta-style pistol / burst version',[]),
        w('Duke Arms 1922','M1911-style heavy pistol',[]),
        w('Duke Arms Mustang .357','Python-style revolver',[]),
        w('Hawk & Little .38','Model 10-style revolver',[]),
        w('Hawk & Little Morgan Revolver','Model 629-style magnum',['UE']),
        w('Fairview Kalinga .50','Desert Eagle-style hand cannon',[]),
        w('Scorpio Akulus','Raging Hunter-style revolver',[]),
        w('Scorpio Nipper .38','Pocket pistol',[]),
        w('Schlamm DRX','M&P-style pistol',[]),
        w('Wortham WCR-1','Snub revolver',[]),
        w('Coil Shocker','Taser',[])
      ]},
      { name:'SMGs', items:[
        w('Vom Feuer VF5 / VF5C','MP5-style',[]),
        w('BZI Vatra','Uzi-style',[]),
        w('Wortham W-10','MAC-11-style',[]),
        w('Schlamm DW-9','APC9-style',[]),
        w('Deever Tech DSG','MP9-style',[]),
        w('ADB PD-90','P90-style',[]),
        w('Zhang Wu Type 9','TEC-9-style',[])
      ]},
      { name:'Shotguns', items:[
        w('Fortune & Son Moreland 850','Pump action',[],{ d:'Best general shotgun.' }),
        w('Fortune & Son Gorse 425','Short pump',[]),
        w('Shrewsbury Drifter / Hobo','Double barrel / sawed-off',[]),
        w('Girardi Super400','Semi-auto combat shotgun',[]),
        w('Girardi AZ1200 / Verro','Semi-auto / stockless',[]),
        w('Goodwin Comshot 12','SPAS-style',[]),
        w('Kozlov KVGA-12','Saiga-style',[]),
        w('Mason & Keen Longshot / Shortstraw','Over-under / sawed-off',[])
      ]},
      { name:'Rifles & LMGs', items:[
        w('Duke Arms 556','M4-style assault rifle',[],{ d:'Best all-round rifle.' }),
        w('Kozlov KZ-59','AKM-style',[]),
        w('Kozlov Hind','Micro Draco-style',[]),
        w('Hillinger Heathen','Hellion-style bullpup',[]),
        w('Vom Feuer VF-G1','HK433-style',[]),
        w('ADB FRA','FAL-style battle rifle',[]),
        w('Hillinger M306 / M306 TMR','M14 / EBR-style',[]),
        w('Wortham W-14','Mini-14-style',[]),
        w('Hawk & Little Mediator','PC carbine',[]),
        w('ADB M350','Minimi-style LMG',[]),
        w('Goodwin LMG 6','Light machine gun',[])
      ]},
      { name:'Snipers', items:[
        w('Fortune & Son Laird 350','Bolt-action hunting rifle',[],{ d:'Very accurate. Great for hunting.' }),
        w('Shrewsbury SM-69 / SMS-01','Tactical bolt-action',[]),
        w('Fairview FF-SR','MSR-style',[]),
        w('Fairview FF-50','Anti-materiel .50',[]),
        w('Wortham W-22','10/22-style rimfire',[])
      ]},
      { name:'Heavy & explosives', note:'Expanded-tier gun stores carry LMGs, snipers, grenade and rocket launchers.', items:[
        w('Hauners H-AT','RPG-style rocket launcher',[]),
        w('Deever Tech GLR40','Six-shot grenade launcher',[]),
        w('Hillinger Boomer','Single-shot grenade launcher',[],{ d:'Highest damage rating listed.' }),
        w('Frag Grenade, Sticky Bomb, Molotov','',[],{ tip:'Any explosion opens a safe.' }),
        w('Flash, Smoke, Fire Bottle, Jerry Can','',[]),
        w('Speargun','Underwater weapon',[])
      ]},
      { name:'Melee', items:[
        w('Bats, Crowbar, Golf Club, Hammer, Pipe Wrench, Pool Cue','',[]),
        w('Knives','Combat, Hunting, Bushcraft, Diving, Switchblade, EDC',[],{ tip:'A knife pops car tires to end a chase.' }),
        w('Brass Knuckles, Baton, Flashlight','',[])
      ]},
      { name:'Unique variants worth chasing', note:'Gang ops hide unique guns as key valuables. Each gun store also has its own unique variant.', items:[
        w('Mister Mangrove Laird 350','Tranquilizer rifle',['unique'],{ d:'Reward from Kirk’s Skunk Ape questline.' }),
        w('Killtelligence SM-69','',['unique'],{ d:'Reward from Bret’s Veteran Hunted.' }),
        w('Gutterball Moreland 850','Shotgun',['unique'],{ at:'Port Gellhorn', d:'On a table in the NE corner of Kingpin Bowling.' }),
        w('Donnie’s H&L .38','Revolver',['unique'],{ d:'From Donnie in Chapter 1.' }),
        w('Duval & Caminos Signature pistols','ES9 for Jason, K17 for Lucia',['unique','UE']),
        w('Hawk and Little Morgan revolvers','',['unique','UE']),
        w('Tommy Vercetti Micro SMG skin','',['UE'],{ d:'Pre-order bonus.' }),
        w('Gang-themed variants','Kingfishers, Kolts, San4San, Guardia Brothers, La Polilla Negra, PTT Youngin$, Final Chapter',['unique'],{ d:'Found inside that gang’s Illegal Operations.' }),
        w('Store variants','Woodhatch Longshot, Iron & Oak WCR-1, Black Eagle Import Kalinga and M306 TMR',['unique','rep'],{ d:'Names match their gun stores. Check that store’s counter.' }),
        w('Mason & Keen Shortstraw (explosive)','Cheat unlock',[],{ d:'Hit 100 enemies with explosives after the story.' })
      ]}
    ],
    src: ['Insider Gaming weapons guide','GTABase weapon list','Allthings.how','PowerPyx gun store list']
  });

  G.add({
    id: 'gunstores', title: 'Gun Stores', icon: '🎯', nav: 'Gear',
    blurb: '24 gun stores. Each sells guns, ammo, body armor and parachutes and has a weapon locker. Tiers decide stock. Expanded stores carry the heavy stuff.',
    filters: [{ key:'Expanded', label:'Expanded' }, { key:'Hunting', label:'Hunting' }],
    groups: [
      { name:'Mariana County', items:[
        w('Barrage Gun Supply','',['Standard'],{ at:'Mariana County' }),
        w('Chuck’s Tackle & Shot','Also fishing gear',['Limited'],{ at:'Mariana County' }),
        w('Guns Aplenty!','',['Hunting'],{ at:'Mariana County' }),
        w('Richardson Hunting Supplies','',['Standard'],{ at:'Mariana County' }),
        w('Woodhatch','',['Expanded'],{ at:'Mariana County' })
      ]},
      { name:'Vice-Dale County', items:[
        w('Phil’s Ammu-Nation','The classic',['Expanded'],{ at:'Vice City' }),
        w('Big Shots','',['Expanded'],{ at:'Vice City' }),
        w('Black Eagle','',['Expanded'],{ at:'Vice City' }),
        w('Iron & Oak','',['Expanded'],{ at:'Vice City' }),
        w('Prestige Firearms','',['Expanded'],{ at:'Vice City' }),
        w('Hamlet Traders','',['Standard'],{ at:'Hamlet' }),
        w('Tequesta Guns & Ammo','',['Standard'],{ at:'Tequesta' }),
        w('Vice City Firearms','',['Standard'],{ at:'Vice City' }),
        w('Martez Empeños','Pawn',['Standard'],{ at:'Vice City' }),
        w('Jackson Firearms','',['Standard'],{ at:'Vice City' }),
        w('Vice City Gun & Pawn','Pawn',['Standard'],{ at:'Vice City' }),
        w('Pawn & Gun – Crosstown','Pawn',['Standard'],{ at:'Crosstown' }),
        w('Quickscope','',['Standard'],{ at:'Vice City' }),
        w('Zenon’s Pawn Shop','Pawn',['Standard'],{ at:'Vice City' })
      ]},
      { name:'Leonard, Kelly & Lummox', items:[
        w('Tactical Outlet Guns','',['Standard'],{ at:'Leonard County' }),
        w('Pawn & Gun – Port Gellhorn','Pawn',['Standard'],{ at:'Port Gellhorn' }),
        w('Gellhorn Outfitters','Chapter 2 Pick Up A Gun',['Standard'],{ at:'Gellhorn' }),
        w('Biff’s Gun Supply','',['Standard'],{ at:'Kelly County' }),
        w('Rusty Willis Jr. Hunting Supplies','',['Hunting'],{ at:'Lummox County' })
      ]}
    ],
    after: 'Pins sit at county or town level. Shopping challenges: Well Armed (3 sidearms and 3 longarms), Stylishly Armed (cosmetics on 5 and 5), Heavily Armed ($50,000 spent).',
    src: ['PowerPyx all Ammu-Nation locations']
  });
})();
