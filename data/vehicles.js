/* Vehicles: ownership, rare cars, aircraft, boats, military. */
(function(){
  const v = (n, s, b, extra) => Object.assign({ n, s: s || '', b: b || [] }, extra || {});

  G.add({
    id: 'vehicles', title: 'Cars, Boats & Planes', icon: '🏎️', nav: 'Rides',
    blurb: 'Where to find the good stuff and how to keep it. 277 base models plus 280 standout one-offs. Scan everything you pass with WAiNK.',
    trackable: true,
    filters: [{ key:'UE', label:'Ultimate Edition' }, { key:'wanted', label:'Gets you wanted' }],
    before: [
      { kind:'good', title:'Looking for one specific vehicle?', items:[
        'The <a href="#/db/vehicles"><b>Vehicle Database</b></a> has a page for every car, bike, boat and aircraft, with stats, price, where to find it, mods and variants.',
        'This page covers the rules for keeping cars and the rare finds worth hunting.'
      ]},
      { kind:'warn', title:'How keeping a car works', items:[
        'Stolen cars are lost when you leave, wreck or quit unless you <b>register</b> them. Parking in a garage alone does not register a car.',
        'Moses in Port Gellhorn registers your first car free in Chapter 2. From Chapter 3 any Pay ’n’ Spray registers cars. Fees run from $100 up to $17,000+ for high-end cars.',
        'Scan with WAiNK before you steal. The card shows lock type, alarm, tracker, sell value and cost to register.',
        'Cars with an advanced tracker need it removed (Chapter 3) or go to Randy. Keyless cars need the Key Cloner from Clonin’ Keys.',
        'You can hold 18 registered cars max (16 garage spots plus 2 outdoor). The Scooter Bros app delivers any registered car to you.',
        'Store standout cars in a garage before a main mission or save. Some vanish otherwise and cannot be recovered.'
      ]},
      { kind:'tip', title:'Early aircraft', items:[
        '<b>Bottcher Duster</b> biplane at the Boundary Road airstrip about 1.4 km from Jason’s house. Free after Gone Fishing.',
        '<b>Buckingham Maverick</b> helicopter at the private dock in Southwind, about 2.5 miles SW of Key Lento on the Sunbelt Highway. Walk through the open gate past the Sherwin Boatworks and Chicki’s Tiki Bar signs.',
        '<b>Mammoth Dodo</b> seaplane in the small hangar on the same Southwind lot.',
        'Jets at Vice City International have trackers. Taking one brings fighter jets after you.'
      ]}
    ],
    groups: [
      { name:'Military · Mile Zero Air Station', note:'Goose Key, southeast of Key Lento. Heavy army response. Base vehicles cannot be kept in a garage, so scan them on base.', items:[
        v('Hauners Rhino','Tank · south side of base',['wanted','3★'],{ at:'Mile Zero Air Station', tip:'Shoot enemies in a stolen tank until Challenging Tank pops.' }),
        v('Hauners P-996 Lazer','Fighter jet · north airfield',['wanted','4★'],{ at:'Mile Zero Air Station', warn:'Instant 4 stars and two jets chase you.' }),
        v('Hauners APC','Next to the tanks',['wanted'],{ at:'Mile Zero Air Station' }),
        v('Mammoth Patriot','Military truck',['wanted'],{ at:'Mile Zero Air Station' }),
        v('Botticher 015A','Military planes along the airfield',['wanted'],{ at:'Mile Zero Air Station' }),
        v('Botticher Buzzard','Attack helicopters on base helipads',['wanted'],{ at:'Mile Zero Air Station' }),
        v('Buckingham Valkyrie & Hauners Cargobob','Military transport helicopters',[])
      ]},
      { name:'Aircraft', items:[
        v('Bottcher Duster','Biplane · Boundary Road airstrip',[],{ at:'Boundary Road Airstrip' }),
        v('Buckingham Maverick','Helicopter · Southwind private dock',[],{ at:'Southwind' }),
        v('Mammoth Dodo','Seaplane · Southwind hangar',[],{ at:'Southwind' }),
        v('Buckingham Volatus','Luxury helicopter · Lake Tallaloko',[],{ at:'Lake Tallaloko' }),
        v('Passenger jet','Vice City International boarding bridges',['wanted'],{ at:'Vice City International Airport', tip:'Fly it 1 km from the airport for Catch Me If You Can.' }),
        v('Wild Hog Point planes','Single-seat planes · watch the fuel',[],{ at:'Wild Hog Point' }),
        v('Port Gellhorn airstrip','Planes south of Port Gellhorn',[],{ at:'Port Gellhorn' }),
        v('Nagasaki Sea Sparrow','Light helicopter · cheat unlock',[]),
        v('Lapwing Mallard, 300-H, Streamer 216-C, Mammatus','Light planes at small airfields',[])
      ]},
      { name:'Boats', items:[
        v('Crest Kayak','Behind Jason’s house',[],{ at:'Key Lento' , img:'kayak' }),
        v('Lure Predator L35P','Moored at Trinity Apartments, Washington Island',[],{ at:'Washington Beach' }),
        v('Shitzu Squalo','Speedboat · canal south of Washington Beach by the Y Hotel',['UE'],{ at:'Ocean Beach', tip:'Unlocks in Chapter 4 under the Personal tab of the map index.' , img:'squalo-1' }),
        v('Airboat 09','Grassrivers rentals and docks',[],{ at:'Grassrivers' }),
        v('Bombora S23 CCS','Mission reward',[]),
        v('Seashark Azure / Hydroblast / Sedna','Jet skis at beaches and marinas',[]),
        v('Calder yachts','CB69 catamaran, Marquis, Shasa, Torlan, Yakuruna superyacht',[],{ d:'Look around Vice City marinas and the Starfish Island Yacht Club.' }),
        v('Speedboats','Clarion, Nagasaki Tao, Speeder 700 GT, Dingus Como',[])
      ]},
      { name:'Rare & standout cars', note:'One-offs at fixed spots. Bring the Key Cloner for garages.', items:[
        v('’67 Vapid Dominator Buggy','Grassrivers garage, a day after Thrillbillies',[],{ at:'Grassrivers', d:'Also a prize for winning a dirt track race at the Mud Club.' , img:'buggy-1' }),
        v('’55 Vapid Stanier','Roadside by the Ocean View Hotel, Ocean Beach',[],{ at:'Ocean Beach', d:'After Welcome to Vice City. Bonita Court is the nearest garage.' , img:'stanier-1' }),
        v('’95 Grotti Cheetah','Pegassi Residences underground lot, Tequesta Retreat',['UE'],{ at:'Tequesta Retreat', d:'After Operation Savage Glory. Ramp left of the lobby entrance.' , img:'cheetah-1' }),
        v('Dinka Enduro','Army green bike under Jason’s house',[],{ at:'Key Lento' , img:'enduro' }),
        v('’70 Vapid Ganado','Jason’s pickup',[],{ at:'Key Lento' , img:'ganado-retro' }),
        v('Grady’s Vapid Slamvan','MacAlister Gold Mine, Moreau',[],{ at:'Moreau' }),
        v('Beer Monster Vapid Marshall','Monster truck at the Thrillbilly Mud Club, Frogswater',[],{ at:'Mud Club' }),
        v('Emperor Sultan','Gift from Moses after all 7 drop-offs',[],{ at:'Port Gellhorn' }),
        v('Bugatti-style hypercar','On a trailer at Boone Speedway',['tracker'],{ at:'Hamlet' }),
        v('Solid gold Lamborghini-style supercar','Crimsonpalms Condos under a balcony, near Washington Island',[],{ at:'Washington Beach' }),
        v('Kitted Grotti Itali RSX','Rialto Island garage · needs a cloned key',[],{ at:'Starfish Island' }),
        v('Emerus-style hypercar','Vespucci Island garage, over the hedge to the patio',[],{ at:'Starfish Island', warn:'Guards at the front gate. Sneak in.' }),
        v('Fast & Furious-style green tuner','Vespucci Island villa garage',[],{ at:'Starfish Island', d:'A near copy of the first movie’s hero car. Rumor says a snake jumps out of the trunk.' }),
        v('Gold Pegassi supercar','Casanova Island, bottom-centre house garage',[],{ at:'Starfish Island' }),
        v('Leopard-print supercar','Starfish Island, top-right house, out front',[],{ at:'Starfish Island', tip:'The garage to the right often holds two more supercars.' }),
        v('Custom anime tuner','House garage, west Starfish Island',[],{ at:'Starfish Island' }),
        v('Flame-wrapped nitrous muscle car','Near Jason’s house, Key Lento',[],{ at:'Key Lento', tip:'Park it at Jason’s to keep it.' }),
        v('Purple nitrous supercar','Chatfield Storage & Logistics op, Waxman Island',[],{ at:'Port Vice City' }),
        v('Custom drift tuner','Gellhorn Speedway offices garage, side door',[],{ at:'Gellhorn International Raceway', d:'Register at Moses for about $14,000.' }),
        v('Wrapped muscle car','Hog Stars building, Ambrosia',[],{ at:'Ambrosia', warn:'Guarded. Enter from the roof. Shotgun inside.' }),
        v('Black & yellow luxury SUV','La Perle house driveway',[],{ at:'La Perle' }),
        v('Black & red Trans Am-style','Slator Towing Inc garage, south Vice City',[],{ at:'Southside' }),
        v('Custom pink lowrider','JanJak’s Garage (San4San)',[],{ at:'La Perle' }),
        v('Orange custom sedan','Behind Casa Guardia',[],{ at:'Vice City' }),
        v('Bravado ’69 Gauntlet “HWL YEAH”','Black & purple, inside a warehouse',['rep']),
        v('Red 1964 Invetero Coquette','Waning Sands',['rep'],{ at:'Waning Sands' }),
        v('Turbo Ruiner','House east of Key Lento',['rep'],{ at:'Key Lento' }),
        v('Drift Elegy','Locked garage behind Gellhorn Raceway · alarm + tracker',['rep'],{ at:'Gellhorn International Raceway' })
      ]},
      { name:'Randy’s Wish List', note:'Deliver to Randy’s RK garage in western Vice City. All 16 for Supply & Demand.', items:[
        v('Pegassi Infernus','Level 7, Crosstown Police Station parking, NW 9th St',[],{ at:'Crosstown' }),
        v('Granforma Zorrusso','Story mission Clonin’ Keys',[]),
        v('Pegassi Vitello','Villa on Flamingo Pkwy, Waning Sands',[],{ at:'Waning Sands', d:'Blow the gate, clone the key, set the charges.' }),
        v('Buckingham Windsor Drop','Street copies count',[]),
        v('Pegassi Toros','Outside Pegassi Residences, Bayside Dr, ~6:30 PM',[],{ at:'Tequesta Retreat', warn:'Security patrols.' }),
        v('Pegassi Tempesta','On a tow truck, NE 3rd St, ~1 PM',[],{ at:'Downtown', d:'Random event. Threaten the owner.' }),
        v('Ascot Paragon','Banana Hole Main Bar, Shore Dr, Ocean Beach, ~6 PM',['tracker'],{ at:'Ocean Beach' }),
        v('Ocelot Jugular','Street spawn',[]),
        v('Buckingham Jubilee','Street spawn SUV',[]),
        v('Grotti Itali RSX','The fastest car Randy asks for',[]),
        v('Pfister Growler','Multi-storey car park, Fig St, Ocean Beach, ~5 PM',[],{ at:'Ocean Beach', tip:'Clone the key and drive straight to Randy.' }),
        v('Bravado Gauntlet Hellfire','Back of the M7 junkyard, Galerina St, Hamlet',[],{ at:'Hamlet' }),
        v('Piccia Furia','Mansion garage, Palladia Ln, Peacock Estates',[],{ at:'Peacock Estates', tip:'Climb the hedge on the left and clone the key.' }),
        v('Benefactor Dubsta','Common street SUV',[]),
        v('Bravado Banshee','Outside Sweetbay Inn, East Buckley Dr, Capri, ~3 AM',[],{ at:'Capri' }),
        v('Gallivanter Baller ST-D','Outside Vice Beach and Ocean Beach hotels',[],{ at:'Ocean Beach' })
      ]},
      { name:'Wyman’s Classic Cars', note:'Ultimate Edition. Scan wrecks with WAiNK, pay Wyman, collect at his scrapyard. Tracked under Exploration > Find Cars for Wyman.', items:[
        v('’67 Dominator Buggy','Starts the chain',['UE'],{ img:'buggy-2' }),
        v('’67 Transgressor','3 wrecks around Port Gellhorn · $1,500',['UE'],{ at:'Port Gellhorn', d:'Pig field. Tanglewood Ln trailer park north of Sarena’s Bargain Store. Garage behind the blue sunflower house on Gellhorn Ave. Behind the wooden hut below Dirt Merchants at the south tip of town.', tip:'Register at a Pay ’n’ Spray ($100) or park it in a garage or it goes back to salvage.' , img:'transgressor' }),
        v('Reynolds Kit Car','5 purple W wrecks',['UE'],{ img:'reynolds' }),
        v('’70 Vapid Riata, ’64 Declasse Mamba GT, ’72 Schyster Deviant','The rest of the set',['UE'])
      ]},
      { name:'Quickest picks', note:'Speed ratings from in-game stats, out of 10.', items:[
        v('Pegassi Infernus ’96 & Grotti Cheetah ’95','Top of the pile',[]),
        v('Pfister Comet ’88','Speed 6.1',[]),
        v('Ubermacht Cypher','Speed 6.5 · Accel 7.2 · quickest new coupe',[]),
        v('Declasse Vigero ZX Convertible','Speed 6.6 · Accel 6.8',[]),
        v('Vapid Dominator GT','Speed 6.3 · Accel 6.8',[]),
        v('Coil Raiden','Accel 7.7 · best sedan',[]),
        v('Pfister Astron','Quickest SUV',[])
      ]}
    ],
    src: ['Game-Checklists vehicle checklist','Detonated rare cars','GamesFuze helicopter guide','GTABase standout map','PowerPyx collectibles']
  });
})();
