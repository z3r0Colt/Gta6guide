/* Tips, tricks and hidden controls. Inputs shown PS5 / Xbox. */
(function(){
  const t = (n, s, b, extra) => Object.assign({ n, s: s || '', b: b || [] }, extra || {});
  G.add({
    id: 'tips', title: 'Tips & Tricks', icon: '💡', nav: 'Start',
    blurb: 'The stuff the game never tells you. Hidden controls, heat tricks, money rules and missables.',
    groups: [
      { name:'Start here', items:[
        t('There is no mission replay','',['Important'],{ d:'Not even after the ending. Keep 2 or 3 manual save slots and rotate them. Autosaves only show under Pause > Game > Load Game.' }),
        t('There is no difficulty setting','',[],{ d:'Settings > Gameplay, at the bottom, has Accessible Combat (you take less damage, enemies take more) and Reduced Vehicle Damage. Neither affects trophies.', tip:'Reduced Vehicle Damage is why planes can fly through buildings. Turn it off if that bugs you.' }),
        t('Spend your Chapter 1 cash','',['Important'],{ d:'The story wipes it. Only Family Savings up to $5,000 and owned guns carry over.' }),
        t('Your pocket caps at $20,000','',[],{ d:'Bank at ATMs often. Dying or getting busted takes your pocket cash.' }),
        t('Sleep to skip time and heal','',[],{ d:'Beds are the only way to skip time. If a mission or text will not show up, sleep a few hours.' }),
        t('Fully close the game if markers vanish','',[],{ d:'Sometimes no calls or markers appear after a mission. Rest mode and Quick Resume do not fix it. A full restart does.' }),
        t('“Irredeemable” is permanent','',[],{ d:'Heinous acts can stamp that label on your Criminal Profile for good unless you load an older save.' })
      ]},
      { name:'Driving', items:[
        t('Exit and leave it running','Double-tap Triangle / Y',[],{ d:'Engine and radio stay on. At speed the car keeps rolling. On a boat it holds course so you can walk the deck.' }),
        t('Radio on or off','Double-tap D-pad Left',[],{ d:'Hold Left for stations. Push the right stick up there for windows, headlights, hazards and convertible roof. Right stick down reaches On Demand podcasts.' }),
        t('Turn signals','Tap D-pad Left or Right'),
        t('Headlights','Double-tap Circle / B',[],{ d:'Cycles off, high and low beams.' }),
        t('Duck to hide','Hold Circle / B',[],{ d:'Works in a car or beside a parked car on foot.' }),
        t('Door-check people','Square / X while driving',[],{ d:'Swing the door into bikers or anyone trying to pull you out. On a bike it is a kick.' }),
        t('Road rage','Click R3',[],{ d:'Yell at drivers. R1 flips them off.' }),
        t('Auto-drive to a waypoint','Hold D-pad Down, Options, then hold Circle',[],{ d:'Opens the cinematic camera and drives for you, obeying traffic. Great for keeping a low profile with heat on. Hold Down to take back control.' }),
        t('Vehicle stats HUD','Press D-pad Down',[],{ d:'Shows fuel and any tracker.' }),
        t('Flip a car for free','Walk to the side and hold Square / X',[],{ d:'No tow needed. Fails if it is too heavy, you are out of stamina or on a steep slope.' }),
        t('Push stuck cars and boats','Walk into it, hold Square / X',[],{ d:'Shove a grounded boat back into the water.' }),
        t('Handbrake drift','Hold X / A while turning',[],{ d:'Works on boats for tight turns too.' }),
        t('Shoot from the car','L1 draws your sidearm, R1 fires',[],{ d:'Shoot cop tires to slow a chase. Passengers can use long guns from truck beds.' })
      ]},
      { name:'On foot & combat', items:[
        t('Focus anywhere','Press L3 + R3',[],{ d:'Slows time and highlights loot, safe codes and nearby police. A circular sound ripple means a hidden encounter is close.' }),
        t('Grow your Focus bar','',[],{ d:'Fishing, pool, golf, basketball, meditation and the shooting range all grow it. Coffee and tea refill it faster.' }),
        t('Criminal Profile pays Focus','Touchpad opens the menu',[],{ d:'A Professional profile earns Focus from non-lethal takedowns. Violent and Psycho profiles earn it from headshots.' }),
        t('Grapple in a fistfight','Hold R2'),
        t('Bottles distract guards','Hold R2, aim, release'),
        t('Knives pop tires','',[],{ d:'Stop a getaway or a pursuit cold.' }),
        t('Case a job first','Walk in, lock on a guard, press D-pad Right',[],{ d:'Marks each guard with an arrow.' }),
        t('Any explosion opens a safe','',[],{ d:'Grenade, propane tank or rocket. No sticky bomb needed.' }),
        t('Swim faster','Click the stick once, then again',[],{ d:'When stamina runs out, dive. Underwater uses lung capacity and roughly doubles your fast-swim time.' }),
        t('Quick navigation','Hold D-pad Down on foot',[],{ d:'Fence cards show what each one buys and your stash total. R3 sets a route.' })
      ]},
      { name:'Heat & police', note:'Six heat icons sit under your stars. Each has a fix.', items:[
        t('Appearance','Haircut, mask or helmet'),
        t('Vehicle','Swap cars or hit a Pay ’n’ Spray'),
        t('Outfit','Change clothes. Keep spares in your trunk.'),
        t('Visible weapon','Holster with L1. Long guns go in the trunk.'),
        t('Partner','Split up and escape separately.'),
        t('CCTV','Delete local footage at its terminal. Cloud footage cannot be wiped.'),
        t('Heat lingers','',[],{ d:'Losing your stars does not clear heat from the area. Leave the area, change clothes and ditch the car.' })
      ]},
      { name:'Map & phone', items:[
        t('Dark blue buildings can be entered','',[],{ d:'Light blue ones are shut. Rotate the map to find the door.' }),
        t('Pink storybook icon','',[],{ d:'Lists every pending story mission.' }),
        t('Hourglass icon','',['Important'],{ d:'Timed mission. Do it now or lose it.' }),
        t('WAiNK scanner','Hold Up, aim, hold R1',[],{ d:'Scans cars (value, alarm, tracker, register cost), animals, landmarks and posters.' }),
        t('Scooter Bros app','',[],{ d:'Delivers any registered car to you for a fee, or up to three times a day with the paid unlimited version. Also recovers wrecked cars.' }),
        t('Partner commands','Hold D-pad Right',[],{ d:'Includes Fence Goods when stash bags are in your trunk.' })
      ]}
    ],
    src: ['Kotaku hidden controls','Games.gg 20 things','The Big Lead 140-hour tips','GTABase driving tips','MovieWeb tips']
  });
})();
