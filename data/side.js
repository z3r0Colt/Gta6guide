/* Strangers & Freaks, side questlines, activities and random encounters. */
(function(){
  const q = (n, s, b, extra) => Object.assign({ n, s: s || '', b: b || [] }, extra || {});

  G.add({
    id: 'strangers', title: 'Strangers & Side Quests', icon: '🎭', nav: 'Story',
    blurb: 'Every side character and their questline. Purple markers on the map. Each next step arrives by text or call, sometimes days or a chapter later, so keep playing or sleep if nothing shows.',
    trackable: true,
    filters: [{ key:'sf', label:'Counts for S&F trophy' }, { key:'J', label:'Jason only' }, { key:'L', label:'Lucia only' }, { key:'miss', label:'Missable' }, { key:'timed', label:'Timed' }],
    before: [{ kind:'tip', title:'The Strangers & Freaks trophy', items:[
      'You need <b>8 strands</b>. Only some count. Known counters are Kirk, Kyle, Yago, Pilot Pete, Dr. Merle and Freddie.',
      'Moses, Tyrone, Andy, Billy, Eddie, Randy, Bret and Shirley do <b>not</b> count. Several have their own trophies.',
      'The game does not show which strands count. Check your trophy progress before and after each strand’s last mission.',
      'Any strand you started stays open after the story ends.'
    ]}],
    groups: [
      { name:'Kirk · The Skunk Ape', note:'Pelican Valley and Cottonmouth Lake, Grassrivers. Read Kirk’s flyer (Skeeter’s bar in Hamlet or the Rusty Anchor in Key Lento) to add him to your contacts.', items:[
        q('Skunk Apeology 101','Search for the Skunk Ape · night only',['sf','$1,000'],{ at:'Pelican Valley', tip:'Follow Kirk and his drone. Check the feeding site and claw marks, then chase the creature.' }),
        q('Search for Tree Effigies','Find 3 carved effigies, any order',['sf'],{ at:'Pelican Valley' }),
        q('Advanced Skunk Apeonomics','Help Kirk find Mr. Mangrove · night only',['sf','L','$10,000'],{ at:'Cottonmouth Lake', d:'You hunt from Kirk’s helicopter and keep the unique <b>Mister Mangrove Laird 350</b> tranquilizer rifle.', warn:'Spoiler choice. Shoot Mr. Mangrove and Kirk pays $10,000, then things go very badly in the helicopter. Shoot Kirk, or nobody, and Mr. Mangrove drags Kirk into the swamp.' })
      ]},
      { name:'Kyle', note:'McKittrick Farm, Kelly County. Flyer outside the Starlet Motel.', items:[
        q('Check Out McKittrick Farm','A pilot job',['sf','$400'],{ at:'McKittrick Farm' }),
        q('Collect Chemicals for Kyle','Warehouse run',['sf','$1,000'],{ tip:'You also get mutated strawberries to eat.' }),
        q('Buddy?','Check on Kyle · Chapter 3',['sf'],{ d:'Help the police beat Kyle for $5,000, or let Kyle win and get nothing.' })
      ]},
      { name:'Yago · Street Racing', note:'Hit ’n’ Run VC racers in Salton, Vice City. Chapter 3.', items:[
        q('Join a Street Race','',['sf','J','$3,000'],{ at:'Salton' }),
        q('Bumper to Bumper','Mentor Yago',['sf','J','$500']),
        q('Race Against Yago','',['sf','J','timed','miss','$3,800'],{ warn:'Timed. Do it the second the hourglass appears.' }),
        q('Brother to Brother','Back up Yago',['sf','J'],{ tip:'Rewards Yago’s car.' })
      ]},
      { name:'Pilot Pete · The Last Mile', note:'Chapter 4. Jason only. Every delivery pays only if all packages land in time.', items:[
        q('Passing the Torch','Recover Pete’s plane',['sf','J','$12,000']),
        q('Backseat Pilot','Deliver packages · Wild Hog Airfield',['sf','J','timed','$20,000'],{ at:'Wild Hog Point' }),
        q('Pete’s Deliveries: Southpoint Airfield','Mariana County',['sf','J','timed','$20,000'],{ at:'Southpoint Airfield' }),
        q('Pete’s Deliveries: Avery Allen & Co.','Kelly County',['sf','J','timed','$20,000'],{ at:'Kelly County' }),
        q('Deliver Packages','Leonard County',['sf','J','timed','$20,000'],{ at:'Leonard County' })
      ]},
      { name:'Dr. Merle · No Flushers', note:'Any chapter.', items:[
        q('The Final Flush','Meet at Frank’s Waffles',['sf'],{ tip:'Linked to the 15 No Flusher tags you can scan with WAiNK.' })
      ]},
      { name:'Freddie', note:'Any chapter.', items:[
        q('Retest Freddie’s Defenses','',['sf'])
      ]},
      { name:'Kenton · Shipwrecks', note:'Starts in Chapter 1 with Island Dreams. Kenton goes quiet after Chapter 1 and comes back later.', items:[
        q('Search the Dive Sites','7 shipwreck treasure sets',[],{ tip:'Trophy: This Was No Boat Accident. 5 of 7 sets count for 100%.' })
      ]},
      { name:'Billy · Thrillbilly Mud Club', note:'Kelly County. Trophy: The Lone Rider.', items:[
        q('Thrillbillies','Race at the Mud Club',['$2,500'],{ at:'Mud Club', tip:'About a day later the ’67 Vapid Dominator Buggy waits in a Grassrivers garage.' }),
        q('Twist Wrist, Smash, Grab','Join Billy on a job',['$2,000']),
        q('Mall Rats','Join Billy on a job',['$12,000']),
        q('The Impaler','Steal the Impaler from the police impound'),
        q('Hometown Heroes','Join Billy on a job',['$10,000'])
      ]},
      { name:'Bret Vogel · Hunting', note:'Mount Kalaga. Jason only. Opens after Coffee Break.', items:[
        q('Veteran Hunted','Meet Bret',['J','$500'],{ at:'Mount Kalaga', tip:'Rewards the unique Killtelligence SM-69.' }),
        q('Bret’s Target Decks','15 unique animal hunts',['J'],{ tip:'Trophy: Fair Game. All 15 decks are needed for 100%.' })
      ]},
      { name:'Andy · Cellerica', note:'Chapter 3. Lucia only. Trophy: Road to Rehabilitation.', items:[
        q('Climbing the Cellerichain (Parts 1–3)','Deliver Cellerica products',['L']),
        q('Pay the Cellerica Fee','Costs $5,000',['L']),
        q('Peach!','Join the initiation',['L']),
        q('Read the Label','Retrieve the Cellerica van',['L','$1,800']),
        q('Puff Puff Pass','Meet at the warehouse',['L','$10,000'])
      ]},
      { name:'Tyrone · Kitty Litter Labs', note:'Chapter 3. Jason only. Trophy: Spin On This!', items:[
        q('Take Out Kitty Litter','Shut down every lab in Vice City',['J']),
        q('Spin On This','Finish the labs',['J','$10,000'])
      ]},
      { name:'Randy · Wish List', note:'Chapter 3, after Clonin’ Keys. 16 cars. Trophy: Supply & Demand. See the Vehicles page for every car.', items:[
        q('Randy’s Wish List','Deliver 16 high-end cars to Randy’s garage in western Vice City',[],{ at:'Vice City' })
      ]},
      { name:'Yasmani · Robbery Tips', note:'Little Cuba, Chapter 3.', items:[
        q('Yasmani’s Jewelry Jobs','Three stores, sell to Yasmani',['$20,000'],{ at:'Little Cuba' }),
        q('Yasmani’s ATM Jobs',''),
        q('Yasmani’s Payday Loans Jobs',''),
        q('Tail the Security Van',''),
        q('That’s Where the Money Is...','Chapter 4 · unlocks bank vaults',[],{ tip:'Yasmani sells armored van tips for $10,000 each.' })
      ]},
      { name:'Others', items:[
        q('Moses','Steal Vehicles for Moses, then Collect Moses’ Gift',[],{ at:'Port Gellhorn', tip:'Deliver all seven Port Gellhorn drop-off cars and he gifts an Emperor Sultan (registration $1,600).' }),
        q('Dunk’s Robbery Tips','Port Gellhorn',[],{ at:'Port Gellhorn' }),
        q('Attend Eddie Acosta’s Party','Chapter 4',[],{ warn:'Refuse to pay. Paying costs $50,000.' }),
        q('The Unknown Stuntman','Papa Audacity'),
        q('This is a Free Call From...','Pick up Shayna',['L','timed','miss']),
        q('Shirley','Rum and scooter errands, Chapter 1 only',['miss'],{ at:'Key Lento' }),
        q('Cal','Catch a Bigger Fish and Ring the Bell!',[],{ at:'Key Lento', tip:'Beat Cal’s fishing bet (stoplight parrotfish over 2 lb) for Baited My Tackle. Purple marker west of Key Lento.' }),
        q('Wyman’s Classic Car Collection','Restore abandoned classics',['UE'],{ tip:'Ultimate Edition only. See Vehicles for the wreck locations.' })
      ]}
    ],
    src: ['PowerPyx Strangers & Freaks','GTABase strangers','Bloxodes S&F list']
  });

  G.add({
    id: 'activities', title: 'Activities & Hobbies', icon: '🎣', nav: 'Story',
    blurb: 'Everything to do between jobs. Most activities also grow your Focus bar, and almost all of them count toward 100%.',
    trackable: true,
    groups: [
      { name:'Sports & games', items:[
        q('Basketball','100 hoops across Leonida',[],{ tip:'90 needed for 100%. Basketball Pro challenge wants all 100.' }),
        q('Pool','7 opponents',[],{ tip:'5 needed for 100%. Bars have tables. Try for an 8-ball break win.' }),
        q('Golf & Mini Golf','5 golf courses, 3 mini golf spots',[],{ tip:'King Gator and Frontier Adventure Golf are the challenge courses. 2 of 3 mini golf spots for 100%.' }),
        q('Video Games','4 games',[],{ d:'Tenebrae Lux, Street Trash III and Time Jackers Rewind on the JoySystem at home. Bang For Your Buck on arcade cabinets, such as outside Bargain World in Port Gellhorn.', tip:'Beat one for Stick Fiddler. Home consoles are not available in Chapter 2.' }),
        q('Bowling, darts, drinking','Bars and the Kingpin alley')
      ]},
      { name:'Racing & stunts', items:[
        q('Unique Races','40 races in 6 groups',[],{ tip:'Win 20 for Earn Cash, Not Kudos. 30 count for 100%.' }),
        q('Race Challenges','13 gold medals',[],{ at:'Gellhorn International Raceway', tip:'Gellhorn International Raceway, Thrillbilly Mud Club and Boone Speedway. 10 golds for 100%.' }),
        q('Top Fun Drone Races','42 races at 14 locations',[],{ tip:'Win at every location for Top Fun. All 42 for 100%.' }),
        q('Stunts','397 total',[],{ d:'130 Stunt Jumps, 202 Under the Bridges, 40 Knife Flights and 25 Base Jumps.', tip:'250 for Cunning Stunts, 300 for 100%. Under the Bridges is the fastest way to stack them. Track per region in Progress > Activities > Stunts.' })
      ]},
      { name:'Outdoors', items:[
        q('Fishing','35 species · catch and release',[],{ at:'Key Lento', tip:'Rods sold at Ammu-Nations with the fish icon. Fishing grows Focus.' }),
        q('Hunting','61 hunts · 15 target decks',[],{ at:'Mount Kalaga', tip:'Unlocks through Bret. Sell what you hunt. Legendary Hunter wants all 8 unique animals.' }),
        q('Animal Study','255 animals',[],{ tip:'Scan with WAiNK. 100 needed for 100%.' }),
        q('Scuba & Underwater Discoveries','33 discoveries',[],{ tip:'All 33 count for 100%. There are also 85 underwater treasures and 11 Black Hole wrecks for challenges.' }),
        q('Meditation','18 spots at 10 locations',[],{ tip:'Positive Mental Attitude needs every spot. Doing a spot with both characters counts double. The Chapter 1 balcony session is missable.' }),
        q('Kayaking, jet skis, airboats','Rentals in the Keys and Grassrivers',[],{ at:'Grassrivers' }),
        q('Skydiving & BASE jumping','25 base jumps',[],{ tip:'Parachutes at Ammu-Nation.' })
      ]},
      { name:'Fitness & shooting', items:[
        q('Gyms & workouts','Strength and Cardio levels',[],{ tip:'Work out together to max Strength on both for Personal Best. 100 workouts unlocks the body armor cheat. Turn on Simplified Minigames if the hold prompt never fills.' }),
        q('Shooting Ranges','14 challenges · 42 golds',[],{ tip:'Gold in all for The Shootist. Range medals also unlock the ammo cheats.' })
      ]},
      { name:'Nightlife & downtime', items:[
        q('Clubs & bars','122 bars',[],{ d:'The Vault, Jack of Hearts, Delights Cabaret and many more.' }),
        q('Ocean View Rooftop Bar','Ocean Beach',[],{ at:'Ocean Beach', tip:'Order an Apple Martini and drink it by the edge for In The Beginning...' }),
        q('Hang out with your partner','Holding hands, dates, partner robberies',[],{ tip:'Time together unlocks several screen-filter cheats.' })
      ]}
    ],
    src: ['PowerPyx 100% checklist','PowerPyx challenges','Allthings.how activities']
  });

  G.add({
    id: 'encounters', title: 'Random Encounters', icon: '🎲', nav: 'Story',
    blurb: 'Rockstar says there are over 1,000 encounters. Nobody has a full list yet. These are the ones players have pinned down so far.',
    before: [{ kind:'tip', title:'How to find more', items:[
      'Press <kbd>L3</kbd>+<kbd>R3</kbd> to use Focus. A circular sound ripple marks a hidden encounter nearby.',
      'Listen to radio news. Some stories pay off as an encounter around 40 hours later.',
      'Laptops, notes and odd objects often start a puzzle. Some lead across the map.',
      'Side jobs vanish with no warning if the person dies or runs off. Save before you start one.'
    ]}],
    groups: [
      { name:'Reported encounters', items:[
        q('Car-crash witness','Witness a pedestrian hit by a car',['rep'],{ d:'The victim calls a lawyer and you later get a payout for being a witness.' }),
        q('Man in a dumpster','Trade pills for legal advice',['rep']),
        q('Pegassi Tempesta tow','NE 3rd St, Vice City, around 1 PM',['rep'],{ at:'Vice City', d:'The Tempesta from Randy’s list rides by on a tow truck. Threaten the owner to take it.' }),
        q('Jet-ski rescue dog','Get stranded at sea',['rep'],{ at:'Key Lento', d:'A dog in goggles on a jet ski tows you home. Stay on and it takes you to a dog island with about $1,200.' }),
        q('UFO abduction','Rural road east of Port Gellhorn after 2 AM',['rep'],{ at:'Gellhorn', d:'See Secrets for the full chain. Trophy: The Truth Is Out There.' }),
        q('Skunk Ape sightings','Dirt road south of Boone Speedway near Hamlet',['rep'],{ at:'Hamlet' }),
        q('Liquor store brawl & parrots','A liquor store in the Keys',['rep'],{ at:'Key Lento', d:'Win the fight and a parrot says “generator”. Check the generator outside for cash.' }),
        q('Ghost girl','Country roads at night',['rep']),
        q('Haunted hotel','Location unconfirmed',['rep']),
        q('Drunk sea captain with a harpoon gun','',['rep']),
        q('Alligator wearing a hat','',['rep']),
        q('Finger in the plumbing','A neighbour’s house',['rep']),
        q('Big red rampager','A huge red-clad man goes on a rampage',['rep'],{ d:'Treat him well and he may come back to help.' })
      ]}
    ],
    src: ['Destructoid Rockstar interview','GTA Culture','GTAside','TweakTown / Bloomberg review']
  });
})();
