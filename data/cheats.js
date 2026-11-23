/* Cheat codes. 61 in total. Unlock after the story, and each cheat has its own requirement.
   Code letters: U D L R = D-pad. null = not found yet. */
(function(){
  const c = (n, effect, code, unlock, extra) => Object.assign({ n, s: effect, code, unlock }, extra || {});
  G.add({
    id: 'cheats', title: 'Cheat Codes', icon: '🎮', nav: 'Secrets', type: 'cheats',
    blurb: '61 cheats. They only work after you beat the story, and each one has its own unlock task. Find them in the Progress menu under Cheats.',
    before: [
      { kind:'tip', title:'How to enter a cheat', items:[
        'Press <b>D-pad Up</b> to pull out the phone.',
        'Hold <b>L1</b> (PS5) or <b>LB</b> (Xbox), then press <b>R1</b> / <b>RB</b>.',
        'Enter the D-pad code. A code you have not unlocked yet does nothing.'
      ]},
      { kind:'warn', title:'What cheats cost you', items:[
        'Using any cheat blocks saving and trophies or achievements for the rest of that play session. Reload to get them back.',
        'That is why the $250,000 cheat does not stick. You cannot save the money.'
      ]}
    ],
    groups: [
      { name:'Player', items:[
        c('$250,000','Instantly adds $250,000','URDLULDR','Finish the story'),
        c('Drunk','You and your partner get drunk','ULRUULRULR','Spend $2,500 on alcohol'),
        c('Raise Heat Level','Raises heat across the map','LDRDUDU','Lose a 3-star wanted level 25 times'),
        c('Raise Wanted Level','Raises your wanted level','LDRDURU','Lose a 3-star wanted level 50 times',{ conflict:'One source lists L D R D U U R U' }),
        c('Unlimited Focus','Focus never runs out','DUUDUDUDUR','Finish the story',{ conflict:'One source lists D U U D U D U U D R' }),
        c('No Fall Damage','Immune to fall damage',null,'Survive a 40 ft freefall 20 times'),
        c('Parachute','Adds a parachute',null,'50 skydives or BASE jumps from 300 ft+'),
        c('Body Armor','Adds body armor','DULUUUUUDD','Complete 100 workouts'),
        c('Repair Vehicle','Fully repairs your vehicle',null,'Win 10 races at Gellhorn Raceway, Thrillbilly Mud Club and Boone Speedway'),
        c('Unlimited Nitrous','Nitrous and fuel never run out',null,'Complete 50 stunt jumps')
      ]},
      { name:'Combat', items:[
        c('Max Ammo','Fills all ammo','DURDLLUUDL','25 bronze+ shooting range medals'),
        c('Infinite Ammo','Ammo never runs out','DURDLLUDDD','25 silver+ shooting range medals'),
        c('No Reload','Never reload','DURDLLUDDU','25 gold shooting range medals'),
        c('All Explosive Weapons','Every explosive with full ammo',null,'Throw 100 grenades'),
        c('Incendiary Ammo','All ammo sets fires',null,'Burn 100 enemies'),
        c('Exploding Bottles','Bottles explode when hit',null,'Throw 100 Molotovs'),
        c('Explosive Shotgun','Mason & Keen Shortstraw with explosive shells',null,'Hit 100 enemies with explosives'),
        c('Hauners H-AT','Adds the rocket launcher',null,'Blow up 100 vehicles'),
        c('Attack Force','Bullets and melee launch targets','DULLRDDUD','Finish the story'),
        c('Exploding Balls','Sports balls explode on impact','DULLRDDUR','Hit 20 enemies with explosives'),
        c('Vehicle Force','Car hits launch people','DULLRDLUD','Kill 25 people with a vehicle')
      ]},
      { name:'Vehicle spawns', items:[
        c('Maibatsu Boomazoom','Spawn','LURDLLUL','5 shopping challenges'),
        c('MTL Pumper','Spawn','LURDLRRU','Discover it in the Progress menu'),
        c('HVY Bulldozer','Spawn','LURDLRRD','Discover it in the Progress menu'),
        c('Interstate Ambulance','Spawn',null,'Discover it in the Progress menu'),
        c('Airboat 09','Spawn',null,'5 survival challenges'),
        c('Tuff BMX','Spawn',null,'5 fitness challenges'),
        c('Vapid Stanier G2 Taxi','Spawn',null,'5 sports challenges'),
        c('Lapwing Mallard','Spawn',null,'5 vehicle challenges'),
        c('Maibatsu Sanchez','Spawn',null,'5 criminal challenges'),
        c('Nagasaki Sea Sparrow','Spawn',null,'5 exploration challenges'),
        c('Speeder 700 GT','Spawn',null,'5 combat challenges'),
        c('Bravado Banshee','Spawn',null,'All combat challenges'),
        c('Nagasaki Carbon RS','Spawn',null,'All exploration challenges'),
        c('’65 Vapid Dominator','Spawn',null,'All fitness challenges'),
        c('Progen Emerus','Spawn',null,'All vehicle challenges'),
        c('Brimstone Golfer','Spawn',null,'All sports challenges'),
        c('Hauners Rhino Tank','Spawn',null,'All survival challenges'),
        c('Truffade Thrax','Spawn',null,'All shopping challenges'),
        c('Western Zombie Bobber','Spawn',null,'All criminal challenges'),
        c('Hauners P-996 Lazer','Spawn',null,'All 80 challenges'),
        c('Inflatable Flamingo','Spawn',null,'Destroy 50 cocaine flamingos')
      ]},
      { name:'Environment', items:[
        c('Cycle Weather','Changes the weather','DRUDRUR','Finish the story',{ conflict:'One source adds an extra Right at the end' }),
        c('Move Time Forward','Skips the clock ahead',null,'Find 10 luxury watches'),
        c('Pause Time of Day','Freezes the clock',null,'Find 20 luxury watches')
      ]},
      { name:'Screen filters', items:[
        c('Cataclysm','Murky smoke','DDURRULLRR','Discover Martha’s Vamos'),
        c('Dollhouse','Vivid, narrow frame','DDURRULLDR','Spend 8 hours with your partner'),
        c('Faded Glory','Color CRT TV','DDURRULLLR','Rob 50 stores with your partner'),
        c('Golden Hour','Golden widescreen',null,'Hold hands for 4 hours'),
        c('Powdered Sugar','White world with sparkles',null,'Scan all space debris with WAiNK'),
        c('Pinhole','Pinhole camera',null,'Clear 25 gang ops with your partner'),
        c('Neon Jungle','Neon highlights',null,'Discover all 16 Girlypop vehicles'),
        c('Yesteryear','Black and white CRT',null,'Discover the Ridgeway'),
        c('Videotape','VHS look',null,'50 activities with your partner'),
        c('Dark Mirror','Upside-down, black',null,'Make $500,000 selling vehicles'),
        c('Migraine','Blurred and warped',null,'Survive 6 minutes at 6 stars'),
        c('Bubblegum','Purple and yellow sparkle',null,'All 24 Vice City Flamingos cards'),
        c('Fast Forward','Motion blur, fast clouds',null,'50 meditations'),
        c('Fisheye','Fisheye lens',null,'Catch 100 fish'),
        c('Pixel Art','Pixelated',null,'Make $250,000 selling collectibles'),
        c('Hellscape','Red heat haze',null,'Steal 100 cop vehicles')
      ]}
    ],
    after: 'About 40 codes have not been published yet. Each one shows its code in your in-game Cheats menu once you unlock it.',
    src: ['Insider Gaming cheat list','AltChar cheat list','Dexerto cheats']
  });
})();
