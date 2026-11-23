/* Collectibles. About 3,000 in total. Counts from the in-game Progress Database. */
(function(){
  const c = (n, s, b, extra) => Object.assign({ n, s: s || '', b: b || [] }, extra || {});
  const list = (arr, region) => arr.map(n => c(n, region || ''));

  G.add({
    id: 'collectibles', title: 'Collectibles', icon: '💎', nav: 'Completion',
    blurb: 'Magazines, landmarks, playlists and card sets with locations, plus every other collectible type and how many you need for 100%.',
    trackable: true,
    filters: [{ key:'miss', label:'Missable' }],
    before: [{ kind:'warn', title:'Missable magazines', items:[
      'Five magazines in Jason’s Key Lento house are gone after Chapter 1.',
      'Two at the Starlet Motel are gone after Chapter 2. Two in the Bayside apartment are gone after Chapter 3.',
      'You only need 30 of 34 for 100%, so missing a few is fine. Grab them anyway.'
    ]}],
    groups: [
      { name:'Magazines, Books & Comics', note:'27 magazines plus 7 book swaps. Read once to collect.', items:[
        c('Ashes of Glory','Jason’s house · table by the bed',['miss','Ch.1'],{ at:'Key Lento' }),
        c('Lethal By Design','Jason’s house · living room table',['miss','Ch.1'],{ at:'Key Lento' }),
        c('Orca: A Whole Different Animal','Jason’s house · table by east window',['miss','Ch.1'],{ at:'Key Lento' }),
        c('Off the Hook','Jason’s house · tool shed under the house',['miss','Ch.1'],{ at:'Key Lento' }),
        c('Body Copy','Jason’s house · back deck by the weights',['miss','Ch.1'],{ at:'Key Lento' }),
        c('RX Men','247 Key Lento · magazine rack',[],{ at:'Key Lento' }),
        c('Help Me Help You Help Me','Starlet Motel reception table',['miss','Ch.2'],{ at:'Gellhorn' }),
        c('Wizard Wang','Starlet Motel cafeteria table',['miss','Ch.2'],{ at:'Gellhorn' }),
        c('Dicked Down Deep in Space','Trailer NW of Port Gellhorn Station Garage',[],{ at:'Port Gellhorn', d:'Inside the Lost Vista robbery area Dunk marks.' }),
        c('Passion B.C.','Bayside apartment · by the bathtub',['miss','Ch.3'],{ at:'Bayside' }),
        c('Two Pricks in the Bush','Bayside apartment · table by the TV',['miss','Ch.3'],{ at:'Bayside' }),
        c('Remote Strike','Ajax Gym trauma room, Penmarch Isle',['L','Ch.4+'],{ at:'Penmarch Isle' }),
        c('Foiled','Breakable garage west of Andy’s house, on a bed',[],{ at:'Belville' }),
        c('The Johnsons #1','Alpha Gas Gellhorn, NE of the Starlet Motel',[],{ at:'Gellhorn' }),
        c('The Cowboy’s Prayer is to Die Young','Unmarked building north of Taco Bomb West Kalaga',[],{ at:'Moreau' }),
        c('Ratface #1','Xero Food Mart La Perle · rack',[],{ at:'La Perle' }),
        c('Special Friends Force #1','Xero Food Mart La Perle · rack',[],{ at:'La Perle' }),
        c('Lights, Camera, Affirmative Action','Pegassi Residences penthouse, Level 3',['Ch.5'],{ at:'Tequesta Retreat' }),
        c('High Rollerz #37','Jack of Hearts, 2nd floor hallway west of the booths',[],{ at:'Crosstown' }),
        c('BOMBAZO! #2342','Ron Stop’n’Snack Washington Beach · rack',[],{ at:'Oldby Island' })
      ]},
      { name:'Unique Playlists', note:'Scan posters with your phone (Up, then R1). Both count for 100%.', items:[
        c('Sniper of La Perle 1/4','Aunt Zola’s Soul Food, by the cashier',[],{ at:'La Perle' }),
        c('Sniper of La Perle 2/4','Twa Ponya Tattoo, table by the entrance',[],{ at:'La Perle' }),
        c('Sniper of La Perle 3/4','Drip Drops clothing, counter by the clerk',[],{ at:'La Perle' }),
        c('Sniper of La Perle 4/4','Jack of Hearts, 2nd floor east booth, on a crate',[],{ at:'Crosstown' }),
        c('The Vault Radio','Red gas-mask poster inside The Vault nightclub entrance',[],{ at:'Downtown', tip:'Unlocks the secret Vault Radio station.' })
      ]},
      { name:'Landmark scans (WAiNK)', note:'31 landmarks. Hold Up and R1 to scan. 100 WAiNK scans of any kind count for 100% and WAiNKer!', items:[
        c('Old Goliath','Ambrosia',[],{ at:'Ambrosia' }), c('Vice City Sign','Three Toe Lake',[],{ at:'Three Toe Lake' }),
        c('Bobcat Key Experimental Home','Bobcat Key',[],{ at:'Bobcat Key' }), c('Lawton Co. Paper Mill','Moreau',[],{ at:'Moreau' }),
        c('Farmer Scrumpy’s Apple Orchard','Manifest Canyon',[],{ at:'Manifest Canyon' }), c('IAA’s Friends of Freedom','Downtown',[],{ at:'Downtown' }),
        c('Unidentified Building','Little Hardin Island',[],{ at:'Little Hardin Island' }), c('Thicc Herbie','Abismo Key',[],{ at:'Abismo Key' }),
        c('Riquezas Keys Radome','Riquezas Keys',[],{ at:'Riquezas Keys' }), c('Gellhorn Fun Fair','Port Gellhorn',[],{ at:'Port Gellhorn' }),
        c('Downtown Periscope','Downtown',[],{ at:'Downtown' }), c('St. Lucia Lighthouse','Little Hardin Island',[],{ at:'St. Lucia Lighthouse' }),
        c('Sky Ride','Emerald Springs',[],{ at:'Emerald Springs' }), c('Pelican Valley Observation Tower','Grassrivers',[],{ at:'Pelican Valley' }),
        c('Belpoint Lighthouse','Belpoint',[],{ at:'Belpoint' }), c('Kalaga Lookout','Mount Kalaga National Park',[],{ at:'Kalaga Lookout' }),
        c('Dock Ring','Downtown',[],{ at:'Downtown' }), c('Grayson Assembly','Grayson',[],{ at:'Grayson' }),
        c('Wild Hog Point Radar Base','Wild Hog Point',[],{ at:'Wild Hog Point' }), c('Howe Dairy Farm’s Big Udder','Emerald Springs',[],{ at:'Emerald Springs' }),
        c('Badger R&D Tower','Key Lento',[],{ at:'Key Lento' }), c('Aqua Stadium','Gloriana Key',[],{ at:'Gloriana Key' }),
        c('Tucker’s Citrus Farms Water Tower','Emerald Springs',[],{ at:'Emerald Springs' }), c('Sahara Arena','Downtown',[],{ at:'Downtown' }),
        c('Fleeca Field','Rock Ridge',[],{ at:'Rock Ridge' }), c('Tallaloko Amphitheater','Lake Tallaloko',[],{ at:'Lake Tallaloko' }),
        c('Courtland Park Stadium','Catalan Key',[],{ at:'Catalan Key' })
      ]},
      { name:'Collectible Card Sets', note:'18 sets, 480 cards. Look on indoor surfaces and walls, and in yellow phone boxes and tool boxes outside. 3 sets for Don’t Touch My Deck, 15 for 100%.', items:[
        c('Vice City Flamingos','24 cards',[],{ tip:'All 24 unlock the Bubblegum filter cheat.' }), c('Vice City Narcos','24 cards'), c('Vice City Manatees','24 cards'),
        c('Vice City Club De Futbol','30 cards'), c('Liberty City Swingers','24 cards'), c('Liberty City Penetrators','24 cards'),
        c('Liberty City Wrath','24 cards'), c('Los Santos Corkers','24 cards'), c('Los Santos Panic','24 cards'),
        c('Los Santos Pounders','24 cards'), c('Backyard Wrestling','12 cards',[],{ tip:'One sits on the tall radio tower climb in South Vice-Dale.' }),
        c('America’s Next Top Hooker','24 cards'), c('Delights Dancers','18 cards'), c('Jack of Hearts Dancers','36 cards'),
        c('Nine1Nine Dancers','36 cards'), c('The Legends of Ratface','36 cards'), c('Right Wing: America’s Hero','36 cards'), c('Ed Comics Universe','36 cards')
      ]},
      { name:'Everything else', note:'Totals and what 100% needs.', items:[
        c('Cocaine Flamingos','125 · destroy 100',[],{ tip:'50 unlocks the Inflatable Flamingo cheat.' }),
        c('Underwater Discoveries','33 · all 33'),
        c('Meditation Spots','18 · 15 for 100%, all for the trophy'),
        c('Styles','79 · 70 needed',[],{ d:'Jason’s magazine (13), Lucia’s magazine (15), magazine tattoos (17) and luxury watches (34). 10 watches unlock Move Time Forward. 20 unlock Pause Time.' }),
        c('WAiNK locations','108',[],{ d:'31 landmarks, 35 curiosities, 23 sculptures, 4 Peewees billboards and 15 No Flusher tags.' }),
        c('Ahol Street Art','112',[],{ d:'Painted mattresses, tires, wheels, fridges, armchairs, TVs, containers, cones, buckets, pallets and chairs.' }),
        c('1010 Murals','5'),
        c('Vehicles','277 base models · scan 200',[],{ d:'280 standout one-offs do not count. Scan 100 for Whip It Good.' }),
        c('Weapons','66 standard · find 50'),
        c('Animals','255 · study 100'),
        c('Kenton shipwreck sets','7 · 5 needed'),
        c('Wyman’s Cars','5',['UE'])
      ]},
      { name:'Stunt Jumps · Mariana County', note:'130 stunt jumps total: Mariana 17, Vice-Dale 55, Leonard 13, Kelly 29, Lummox 16.', items: list(['Mile Zero Air Station South','Mile Zero Air Station Southeast','Saltrock Bridge West','Saltrock Bridge East','Key Lento Bridge West','Key Lento Bridge East','Schlott Construction Key Lento','Ocean Sound Road','Southpoint Airfield','Longneck Trail','US Route 82 Construction','Goliath Global Quarry Railroad','Goliath Global Quarry Storage','Goliath Global Quarry Heap','Goliath Global Quarry Lakeside','Goliath Global Quarry Conveyor','Nehrling River'],'Mariana County') },
      { name:'Stunt Jumps · Vice-Dale County', items: list(['Peregrine Bay Coastal','Hamlet Backyard','Anderson Murphy Construction','Apollo Aggregates Quarry','Gator Plaza Parking','Peacock Estate','Skorpen Brothers Recycling','Cargo Road Construction','Go Postal','West Vice-Dale County Broken Bridge','Schlott Construction West Vice-Dale County','Interstate 404','West Vice-Dale County Landfill','VCIA North Central Gate','VCIA Gator Parking','VCIA Concourse','Banner Hotel & Spa Parking','DTH Depot Parking','VCIA Storage Facility','Parking Dept. Salton','Parking Dept. Tequesta','Tequesta MVP Park','Tequesta Park In','SW 4th Avenue Construction','Parking Dept. Downtown','Valdemar on the River Parking North','Valdemar on the River Parking South','Downtown MVP Park','Shoreline Park Amphitheater','Mariner’s Highway','Port Vice City Plus Parking','Dalton Island Sculpture Park','Ocean Beach Marina','Harrison Harbor Parking','Vice Beach Police Headquarters','Cruda Y Asi','Sixth & Harper Parking','Ocean Beach Plus Parking','Ocean Beach MVP Park South','Parking Dept. Ocean Beach','Vice Beach Park In','7777 Ocean Beach Parking','Nolan Center Parking','Ocean Beach MVP Park North','Hoopla Construction','Dolly and Darrel Zimmermann Parking','Opulence Construction','Interstate 97 West','Interstate 97 East','Mastodon U.S.A','Blackwell Sandrock','La Perle Parking Lot','Vice-Dale Police Parking','Apollo Aggregates South','Leone Street'],'Vice-Dale County') },
      { name:'Stunt Jumps · Kelly County', items: list(['The Hog House','Gellhorn Pylons','Gellhorn International Raceway','Gellhorn Hilltop','Gellhorn Campsite','Abandoned Radio Station','Axiom House','Draper Island','Gellhorn Drive-In Theatre','Prairie Court','Port Gellhorn Center of Praise & Purpose','Gellhorn Roadworks West','Gellhorn Roadworks East','Starlet Motel Construction','Howe Dairy','County Route 62 Roadworks','Kelly River','South Ambrosia Broken Bridge','South Ambrosia Water Treatment','Saputka River','Manifest Canyon Trail East','Manifest Canyon Trail West','North Kelly County Railroad','North Kelly County Ledge','Mud Club Pond','Manifest Canyon','Lake Leonida Lock Northwest','Lake Leonida Lock West','Lake Leonida Lock Southwest'],'Kelly County') },
      { name:'Stunt Jumps · Leonard & Lummox', note:'Partial list. Sources only name some of these jumps so far.', items: list(['Lake Leonida Lock South','Waste Transfer Services Lake','North Moreau Broken Bridge'],'Leonard / Lummox') }
    ],
    src: ['PowerPyx collectible database','PowerPyx magazines, landmarks, playlists, card sets, stunt jumps']
  });
})();
