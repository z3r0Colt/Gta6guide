/* Safe, keypad and door codes. Badges starting with # render as the code itself. */
(function(){
  const c = (n, code, s, extra) => Object.assign({ n, s: s || '', b: ['#' + code] }, extra || {});
  G.add({
    id: 'codes', title: 'Safe & Keypad Codes', icon: '🔐', nav: 'Money', layout: 'grid',
    blurb: 'Every known safe, keypad and door code, with where it is and what is inside. Named safes keep the same code in every game.',
    before: [
      { kind:'warn', title:'Read this first', items:[
        'Safes in ordinary <b>stores, pawn shops and banks</b> you rob in free roam get a <b>random code</b> each time. Threaten the staff or look for a note nearby.',
        'Gang hideout safes and mission safes use the <b>fixed codes</b> below.',
        'No code? Any explosion opens a safe. A grenade, propane tank or sticky bomb all work.',
        'Press <kbd>L3</kbd>+<kbd>R3</kbd> for Focus. It highlights notes and codes lying around.'
      ]}
    ],
    groups: [
      { name:'Story missions', items:[
        c('Moonstone Boutique acid lab','0420','Lab Fees · Chapter 1 · Key Lento',{ at:'Key Lento', d:'The barred back-room door behind the counter. The clerk gives it up, or read the sticky note on the notepad.' }),
        c('Brian’s Lockup','7700','Lab Fees, then free roam · Key Lento',{ at:'South Key Lento', d:'Door keypad. Drop drugs, jewelry and marked bills here for Brian. Saved to your phone Notes.' }),
        c('Garage with the ’74 Declasse Vamos','2727','Steal Vehicles for Moses · Chapter 2 · Grayson',{ at:'Grayson', d:'Side door of the shed. The house-number plaques on the house next door all read 2727.' }),
        c('Delights Cabaret office safe','2008','Afternoon Delight · Chapter 2 · Port Gellhorn',{ at:'Port Gellhorn', d:'Frankie’s office safe. Vicki texts the code. Holds marked bills.' }),
        c('Avery Pawn back safe','6499','Hit Avery Pawn · Chapter 2 · Port Gellhorn',{ at:'Port Gellhorn', b:['#6499','rep'], warn:'Probably random. Pawn shop safes re-roll. Threaten the staff for yours.' }),
        c('Raul’s garage shutter','2404','First Impressions · Chapter 3 · Waxman Island',{ at:'Waxman Island', d:'Opens the loading-area garage with Raul’s black Schafter V12. Saved to your Notes.' }),
        c('Casa de Empeño back safe','1680','Yasmani’s Jewelry Jobs · Chapter 3',{ at:'Ocean Beach', d:'Small back office. Holds the buffalo skull chain. Repeat robberies use a new code.' }),
        c('Richardson Jewelry middle-room safe','6815','Yasmani’s Jewelry Jobs · Chapter 3 · Downtown',{ at:'Downtown', d:'Holds the diamond ring. Snap Gun the back door to get in quietly.' }),
        c('Donovan Banks & Co. back safe','0104','Yasmani’s Jewelry Jobs · Chapter 3 · Peacock Bay',{ at:'Peacock Bay', d:'Holds the amethyst necklace. Type the leading zero.' }),
        c('Balsero Kitty Litter lab garage','1999','Take Out Kitty Litter · Chapter 3 · Balsero',{ at:'Balsero', d:'Garage keypad on the central building. About $2,500 inside.' }),
        c('Jewelry store safe in the mall','4207','Mall Rats · Billy’s job',{ at:'Ocean Beach', b:['#4207','rep'], warn:'May vary. If it fails, check the back-room wall, wait for Billy or blow it.' }),
        c('Pete’s hangar back-room safe','3718','Passing the Torch · Chapter 4 · Sundown Private Airfield',{ at:'Leonard County', d:'Extra loot in the back room of Pete’s hangar.' })
      ]},
      { name:'Gang hideouts', note:'Fixed codes. Each hideout respawns after a cooldown, and the code stays the same.', items:[
        c('Brooks Boatworks','6823','Kolt & Associates · north Port Gellhorn docks',{ at:'Port Gellhorn', d:'Warehouse office safe upstairs. A wall map in the building east of the main warehouse lists this code and the next two.' }),
        c('La Cascara Motel','6969','Kolt & Associates · west Port Gellhorn',{ at:'Port Gellhorn', d:'Big safe in the gated, graffiti-covered room at the back of the burnt-out motel.' }),
        c('Kingpin Bowling','0300','Kolt & Associates · south Port Gellhorn',{ at:'Port Gellhorn', d:'Back-office safe by the pins. The watch and Gutterball shotgun are elsewhere in the building.' }),
        c('Sunrise RV Park dock warehouse','6769','Kingfishers · north shore of Cottonmouth Lake',{ at:'Cottonmouth Lake', d:'The second safe, in the dock building. The note is with the first safe in the Kingfishers shack.' }),
        c('Palmer Fishing Warehouse','1886','La Polilla Negra · Watson Bay',{ at:'Watson Bay', b:['#1886','rep'], d:'Upstairs safe.' }),
        c('Nova Auto Junkyard','7777','M7 · Hamlet, by the highway',{ at:'Hamlet', d:'Just inside the main door. The code is written on the wall behind the safe. A convertible sits in a garage on the lot.' }),
        c('Farm Fix Meth Lab','2121','Final Chapter · north of Belville',{ at:'Belville', d:'Office safe. The note is downstairs in the lab.' }),
        c('The Thirsty Wolf biker clubhouse','1982','Final Chapter',{ d:'Clubhouse safe. Cash inside.' }),
        c('Janjak’s Garage','4444','San4San · La Perle',{ at:'La Perle', d:'Office safe in the weed garage. The garage also holds a pink Declasse Gin Tulip and the San4San KZ-59 rifle. A note on the office fridge spells it out.' }),
        c('Illegal Sneaker Trade','4124','San4San · Drip Drops, Del Rio Blvd, La Perle',{ at:'La Perle', d:'Crack the safe in the store’s back room first. The note inside points to a second safe upstairs in the apartment block across the alley, third door from the right.' }),
        c('Casa Guardia','1965','Guardia Brothers · NE Little Cuba',{ at:'Little Cuba' }),
        c('Saber Shipping Facility','1122','Guardia Brothers · Balsero',{ at:'Balsero', warn:'One guide says 1965. Try 1122 first.' }),
        c('Saber Shipping Yard','8046','Guardia Brothers · Little Cuba',{ at:'Little Cuba' }),
        c('Leonida Carrier Warehouse','9256','Other Criminals · Balsero',{ at:'Balsero', d:'Back-office safe. Get in through the roof hatch.' })
      ]},
      { name:'Free-roam secrets', items:[
        c('Black Eagle warehouse office door','789987','Balsero, Vice City',{ at:'Balsero', d:'Six digits. Opens the back office with the safe below.' }),
        c('Black Eagle warehouse safe','031462','Same office',{ at:'Balsero', d:'Holds the unique Black Eagle Import Kalinga .50 pistol. Starts with a zero.' }),
        c('Abandoned trailer safe','44017','Cottonmouth Lake, SW sandy spit',{ at:'Cottonmouth Lake', d:'Five digits. Small safe under the microwave. Cash and a Los Santos Pounders card. The digits are marked on the post and the photos pinned in the trailer.' }),
        c('Pelican Valley outpost safe','0072','Gullet Marsh, SW of Pelican Valley',{ at:'Pelican Valley', d:'Safe next to the computer. The researcher’s note mentions specimen 0036. Double it. Inside is cash and the next code.' }),
        c('Pelican Valley outpost dock door','0212','Same outpost, the dock shack',{ at:'Pelican Valley', d:'Holds the Crabshack VF5 SMG and a bag of marked bills. This is also where the giant crab lives.' }),
        c('Haunted Marbelle Hotel safe','955214','NW 8th St, south Crosstown',{ at:'Crosstown', d:'Ground-floor safe with a Crowex watch and cash. The old note is on the roof.' }),
        c('Firewatch tower shed','69185','Bottom of Mount Kalaga, Stone Hills',{ at:'Mount Kalaga', warn:'One guide lists 691865. The purple sticky note in the cabin at the top of the watchtower has your code.' }),
        c('President’s bunker door','010317','Island just north of Waning Sands',{ at:'Waning Sands' }),
        c('President’s bunker safe','2975','Same bunker',{ at:'Waning Sands', d:'A unique pistol and a photo.' }),
        c('IAA black-site hatch','085355','South of the gun store, north Mariana County',{ at:'Mariana County', d:'The Cold War 556 rifle and a tank inside.' }),
        c('Del Rio Blvd garage','92665','Next to Auntie’s Place, La Perle · Chapter 3',{ at:'La Perle', d:'Vanessa’s Growler, a pink Pfister. The code is in a message on the Bayside apartment laptop.' }),
        c('Red Apple Orchard garage','360782','West of Manifest Canyon',{ at:'Manifest Canyon', d:'The Declasse Applesauce Bobcat pickup. The code is in a ManlyGaze magazine in the big barn loft. Climb the blue tractor to reach it.' }),
        c('Party house garage','092319','Leonida Keys',{ at:'Key Lento', b:['#092319','rep'], d:'The Invetero Spiderweb Coquette.' }),
        c('Belpoint shipwreck safe','4242','Belpoint',{ at:'Belpoint', b:['#4242','rep'], d:'Cash.' }),
        c('Abandoned laundromat wall safe','62412','Ambrosia',{ at:'Ambrosia', b:['#62412','rep'] }),
        c('Watson Bay safehouse safe','1819','Watson Bay',{ at:'Watson Bay', b:['#1819','rep'] }),
        c('Slum house safe','9790','',{ b:['#9790','rep'] }),
        c('Stormy back-room safe','7869','',{ b:['#7869','rep'] }),
        c('Alien facility keypad','2341','Pelican Valley, after the UFO abduction',{ at:'Pelican Valley', b:['#2341','rep'], d:'Part of the alien rescue chain. See Secrets.' })
      ]}
    ],
    after: 'Codes marked Reported come from a single guide. Everything else matches across at least two guides.',
    src: ['OutputLag codes guide','GTA Scoop safe codes','Game Rant code list','MeowDB','Space4Games','PowerPyx mission pages']
  });
})();
