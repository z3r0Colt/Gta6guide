/* World info: regions, characters, radio, editions. */
(function(){
  const x = (n, s, b, extra) => Object.assign({ n, s: s || '', b: b || [] }, extra || {});

  G.add({
    id: 'leonida', title: 'Leonida Regions', icon: '🌴', nav: 'Start',
    blurb: 'The state of Leonida, Rockstar’s take on Florida. Six named regions spread over five counties.',
    groups: [
      { name:'Regions', items: G.regions.map(r => x(r.name, G.counties.find(c => c.id === r.county).name, [], { d: r.blurb, at: r.name === 'Leonida Keys' ? 'Key Lento' : (r.name === 'Mount Kalaga' ? 'Mount Kalaga' : r.name) })) },
      { name:'Counties', note:'From in-game road signs. Rockstar has not published a county map.', items: G.counties.map(c => x(c.name, '', [], { d: c.note })) }
    ]
  });

  G.add({
    id: 'characters', title: 'Characters & Contacts', icon: '👥', nav: 'Start',
    blurb: 'Who is who, and what each contact is good for.',
    groups: [
      { name:'Main', items:[
        x('Jason Duval','Protagonist',['J']), x('Lucia Caminos','Protagonist',['L'])
      ]},
      { name:'Useful contacts', items:[
        x('Brian Heder','Key Lento landlord and Chapter 1 fence',[],{ at:'South Key Lento' }),
        x('Donnie','Chapter 1 fence and smuggling pilot',[],{ at:'South Key Lento' }),
        x('Cal','Jason’s buddy. Fishing bets and bar trips.',[],{ at:'Key Lento' }),
        x('Kenton','Shipwreck treasure hunter',[]),
        x('Moses','Port Gellhorn car fence. Registers cars.',[],{ at:'Port Gellhorn' }),
        x('Dunk','Port Gellhorn fence and robbery tipster',[],{ at:'Port Gellhorn' }),
        x('Billy','Thrillbilly Mud Club racer and crew boss',[],{ at:'Mud Club' }),
        x('Bret Vogel','Hunting mentor',[],{ at:'Mount Kalaga' }),
        x('Kyle','Strange farmer at McKittrick Farm',[],{ at:'McKittrick Farm' }),
        x('Kirk','Skunk Ape hunter',[],{ at:'Pelican Valley' }),
        x('Wyman','Fixer and classic car restorer (Ultimate)',['UE']),
        x('Boobie Ike','Runs the Jack of Hearts club',[],{ at:'Crosstown' }),
        x('Dre’Quan Priest','Jason’s Vice City contact',[]),
        x('Tyrone','Best narcotics fence. Kitty Litter labs.',[],{ at:'La Perle' }),
        x('Yasmani','Jewelry and bank tips. Best for jewelry and marked bills.',[],{ at:'Little Cuba' }),
        x('Randy','High-end car buyer. Wish list.',[],{ at:'Vice City' }),
        x('Raul Bautista','Veteran bank robber. Runs the big heists.',[]),
        x('Yago','Street racer',[],{ at:'Salton' }),
        x('Andy','Cellerica recruiter (Lucia)',[],{ at:'Belville' }),
        x('Abe Gonzalez','Lawyer at Lucretia Law Group',[]),
        x('Pilot Pete','Air deliveries (Jason)',[],{ at:'Wild Hog Point' }),
        x('Eddie Acosta','Party host. Do not pay him.',[]),
        x('Real Dimez, Cal Hampton, Lori Heder, Mandy, Valentina, Mattia, Andrea, Petra Navarro','Other story faces',[])
      ]}
    ]
  });

  G.add({
    id: 'radio', title: 'Radio Stations', icon: '📻', nav: 'Start',
    blurb: '23 stations (21 music, 2 talk) with about 810 songs. Plus on-demand podcasts. Buy headphones to listen on foot.',
    groups: [
      { name:'Music', items:[
        x('VCRR','Modern hip-hop · JT, DJ Stevie J'), x('Dirty South Classics','Southern rap · Trick Daddy, Trina'),
        x('Honey FM','R&B, soul · Chilli & T-Boz'), x('Cocoteo FM','Modern Latin · Bad Bunny, RaiNao'),
        x('Radio La Ola','Salsa, classic Latin · Gloria & Emilio Estefan'), x('AfroBank FM','Afrobeats, amapiano · Burna Boy, Palms Trax'),
        x('Radio On-U','Reggae, dub · Adrian Sherwood'), x('Flash FM','Pop, dance · Robyn, Alex Consani'),
        x('Emotion 98.3','Soft rock · Doug Stanhope'), x('Vice City FM','80s pop, new wave · “Weird Al”, Brigitte Nielsen'),
        x('V-Rock','Classic rock · Lindsey Buckingham, Michael McDonald'), x('The Chamber 106.6','Metal · Kerry King, Tom Araya'),
        x('Back Country Radio','Renegade country · Morgan Wallen, Lana Del Rey'), x('Gloriana Blues Radio','Blues · Buddy Guy, Keith Richards'),
        x('Stockyard FM','Indie dance · The Dare, PinkPantheress'), x('CircoLoco Records Radio','House, techno · Seth Troxler'),
        x('Worldwide FM','Global club, jazz · Gilles Peterson'), x('Kaleidoscope FM','International pop · Jeremy Irons'),
        x('Leonida Jazz Radio','Jazz fusion · Randy Brecker, Stanley Clarke'), x('Symphony FM','Classical · Yuja Wang'),
        x('The Vault Radio','House, electronic · DJ Pretzel',['Secret'],{ at:'Downtown', tip:'Scan the red poster inside The Vault nightclub to unlock it.' })
      ]},
      { name:'Talk & podcasts', items:[
        x('WKTT','Conservative talk · The Richard Bastion Show'), x('The Wipe','Call-in talk · Ask Dr. Nita'),
        x('Podcasts','Drunk Kings, The Safe Trap, Vice City True Stories, Final Act',[],{ d:'In the radio menu, right stick down to On Demand.' })
      ]}
    ],
    src: ['KeenGamer radio guide']
  });

  G.add({
    id: 'editions', title: 'Editions & Bonuses', icon: '🎟️', nav: 'Start',
    blurb: 'What Standard, Ultimate, pre-order and GTA+ actually give you in single player.',
    groups: [{ name:'Editions', items:[
      x('Standard Edition','$79.99',[],{ d:'The full story and map, with normal clothing stores, barbers, tattoo parlors and mod shops.' }),
      x('Ultimate Edition','$99.99',['UE'],{ d:'Five extra shops (Rideout Customs, One-Eyed Willie’s, Sara’s Unisex Salon, Stock 305, Electric Fang Tattoo). Two extra activities (the PTT Youngin$ raid and Wyman’s Classic Car Collection). The ’95 Grotti Cheetah, Hawk and Little Morgan revolvers, signature sidearms, the Paradise Garage and the Shitzu Squalo. These unlock as the story goes.', tip:'Standard owners can upgrade later by paying the difference.' }),
      x('Pre-order / Vintage Vice City Pack','',[],{ d:'Shore Court Garage with a ’55 Vapid Stanier, plus a Tommy Vercetti Micro SMG skin. The pack now sells separately for $4.99.' }),
      x('GTA+','$7.99 a month',[],{ d:'GTA+ Crosstown Garage from Chapter 3 with a ’90 Annis Elegy. Owned car sales pay 10% more.' }),
      x('Platforms','PS5 and Xbox Series X|S',[],{ d:'No PC version announced yet.' })
    ]}],
    src: ['Allthings.how editions','Shacknews','GTABase properties']
  });
})();
