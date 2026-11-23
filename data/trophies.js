/* Trophies / achievements, 100% checklist and challenges. */
(function(){
  const t = (n, s, type, extra) => Object.assign({ n, s, b: [type] }, extra || {});
  G.add({
    id: 'trophies', title: 'Trophies', icon: '🏆', nav: 'Completion',
    blurb: '55 trophies or achievements. About 200 hours to platinum. Difficulty around 4 of 10. Only one is truly missable.',
    trackable: true,
    filters: [{ key:'Gold', label:'Gold' }, { key:'Silver', label:'Silver' }, { key:'miss', label:'Missable' }],
    before: [{ kind:'good', title:'Roadmap', items:[
      '<b>Step 1</b> (60–80 h). Finish the story and optional missions. Scan cars and animals as you go. Do the Chapter 1 balcony meditation.',
      '<b>Step 2</b> (about 100 h). Work the 100% checklist and 70 of 80 challenges.',
      '<b>Step 3</b> (about 10 h). Strangers & Freaks and cleanup.',
      'Cheats block trophies for the session. Save One Last Thing for late.'
    ]}],
    groups: [
      { name:'Story', items:[
        t('Just Like Paradise','Complete Gone Fishing','Bronze'),
        t('Paradise Lost','Complete Chapter 1','Bronze'),
        t('T**s Ass Drug Money','Complete Chapter 2','Bronze'),
        t('Vice City, Baby!','Complete Chapter 3','Bronze'),
        t('Top Of The World, Ma','Complete Chapter 4','Bronze'),
        t('You Gotta Know When to Get Off','Complete the final mission','Gold'),
        t('Trust','Complete Breakfast Run','Bronze'),
        t('Break the Bank','Complete The Cartel Heist','Bronze'),
        t('Family Matters','Complete Child’s Play','Bronze'),
        t('DWNFALL','Complete Headliners','Bronze'),
        t('Hi-Jacked','Complete VCIA Takedown','Bronze'),
        t('Snow Storm','Complete Operation Savage Glory','Bronze')
      ]},
      { name:'Side characters', items:[
        t('Strangers & Freaks','Complete 8 stranger strands','Silver',{ tip:'Kirk, Kyle, Yago, Pilot Pete, Dr. Merle and Freddie are known to count.' }),
        t('Road to Rehabilitation','Finish Andy’s questline (Lucia)','Bronze'),
        t('This Was No Boat Accident','Finish Kenton’s questline','Bronze'),
        t('The Lone Rider','Finish Billy’s questline','Bronze'),
        t('Supply & Demand','Finish Randy’s 16-car wish list','Bronze'),
        t('Spin On This!','Finish Tyrone’s labs (Jason)','Bronze'),
        t('Fair Game','Hunt a unique animal for Bret','Bronze'),
        t('Baited My Tackle','Beat Cal at fishing','Bronze',{ tip:'Cal texts after Feng Shui. Purple marker west of Key Lento.' })
      ]},
      { name:'Crime', items:[
        t('Pest Control','Rob an Illegal Operation for all 9 gangs','Bronze'),
        t('Maximum Withdrawal','Rob 5 bank vaults and escape','Silver'),
        t('A Classic Blitz Play','Rob an armored truck and escape','Bronze'),
        t('Sneakthief','Rob a jewelry store undetected','Bronze',{ tip:'Snap Gun a back door, crack the safe, kill the alarm and local footage.' }),
        t('Retail Therapy','Rob 3 shops in a row with your partner','Bronze'),
        t('Hot Together','Lose 4 stars with your partner','Bronze'),
        t('Dime on the Dollar','Fence $250,000 of marked bills','Bronze'),
        t('Let’s Go Bowling','Rob Kingpin Bowling clean','Bronze'),
        t('Capital Offense','Smash out of a showroom','Bronze'),
        t('Bad Luck, I Guess','Rob Little Cuba Payday Loans twice as Lucia','Bronze'),
        t('Catch Me If You Can','Steal a passenger jet from VCIA','Bronze'),
        t('Challenging Tank','Fight in a stolen tank','Bronze'),
        t('Actions Speak Louder','500 Criminal Profile actions','Bronze'),
        t('Gunslinger','5 kills in one Combat Focus','Bronze')
      ]},
      { name:'Activities & exploring', items:[
        t('Positive Mental Attitude','Meditate at every spot','Bronze',{ b:['Bronze','miss'], warn:'The Chapter 1 balcony meditation with Lucia after Down to Earth is missable.' }),
        t('Cunning Stunts','250 of 397 stunts','Silver'),
        t('The Shootist','Gold in every shooting range','Silver'),
        t('Top Fun','Win a drone race at all 14 locations','Bronze'),
        t('Earn Cash, Not Kudos','Win 20 different races','Bronze'),
        t('Master of None','Try all 9 activity types','Bronze'),
        t('Stick Fiddler','Beat an in-game video game','Bronze'),
        t('Personal Best','Max Strength on both characters','Bronze'),
        t('The Goodtime State','Uncover the whole map','Bronze'),
        t('In The Beginning...','Cocktail with a view on Ocean Beach','Bronze'),
        t('The Truth Is Out There','The UFO event','Bronze'),
        t('Ten Pin','Kick 10 people off a bike in 60 s','Bronze')
      ]},
      { name:'Collecting & spending', items:[
        t('Don’t Touch My Deck','Complete 3 card sets','Silver'),
        t('WAiNKer!','Scan 100 WAiNK locations','Silver'),
        t('Whip It Good','Discover 100 vehicles','Bronze'),
        t('Little Boxes','Buy all 8 garages','Bronze'),
        t('On the Spot','Register 10 vehicles','Bronze'),
        t('Treat Yo Self','Spend $100,000 in shops','Bronze'),
        t('One Last Thing','Complete 50 challenges','Bronze'),
        t('A Long Road','Reach 100% completion','Gold',{ tip:'The hardest one. See the 100% checklist.' }),
        t('Vice Got a Price!','Earn every other trophy','Platinum')
      ]}
    ],
    src: ['PowerPyx trophy guide & roadmap']
  });

  const r = (n, need, extra) => Object.assign({ n, s: need, b: [] }, extra || {});
  G.add({
    id: 'hundred', title: '100% Requirements', icon: '✅', nav: 'Completion',
    blurb: 'Everything A Long Road needs. Nothing here is missable and all of it can be done after the credits.',
    trackable: true,
    groups: [
      { name:'Story & crime', items:[
        r('Finish the story','1'), r('Optional tasks','100 (200–300+ exist)'),
        r('Gang operations','39 of 39'), r('Bank jobs','22 of 22 (14 small, 8 large)'), r('Payday Loan jobs','7 of 7'),
        r('Smash ’n’ Grabs','34 of 35'), r('Stick-ups','50 of 91'), r('Vaults hit','8 of 8'),
        r('Narcotics fenced','$100,000'), r('Jewelry fenced','$100,000'), r('Marked bills fenced','$250,000'), r('Vehicles fenced','$200,000')
      ]},
      { name:'Exploration', items:[
        r('Kenton sets','5 of 7'), r('Card sets','15 of 18'), r('WAiNK scans','100'), r('Underwater discoveries','33 of 33'),
        r('Magazines, books & comics','30 of 34'), r('Meditation spots','15 of 18'), r('Cocaine flamingos','100 of 125'),
        r('Unique playlists','2 of 2'), r('Styles','70 of 79')
      ]},
      { name:'Activities', items:[
        r('Unique races won','30 of 40'), r('Race challenge golds','10 of 13'), r('Shooting range golds','42 of 42'),
        r('Video games played','4 of 4'), r('Pool opponents beaten','5 of 7'), r('Mini golf played','2 of 3'),
        r('Basketball hoops','90 of 100'), r('Drone time trials','42 of 42'), r('Stunts','300 of 397'),
        r('Challenges','70 of 80'), r('Bret’s target decks','15 of 15')
      ]},
      { name:'Discovery', items:[
        r('Base model vehicles scanned','200 of 277'), r('Standard weapons found','50 of 66'), r('Animals studied','100 of 255')
      ]}
    ],
    src: ['PowerPyx 100% completion checklist']
  });

  const ch = (n, d) => ({ n, s: d, b: [] });
  G.add({
    id: 'challenges', title: 'Challenges', icon: '⚡', nav: 'Completion',
    blurb: '80 challenges in 8 groups. 50 for One Last Thing, 70 for 100%. Finishing groups unlocks vehicle-spawn cheats.',
    trackable: true,
    groups: [
      { name:'Combat', items:[ch('Speed Kills','3 kills in under 30 s'),ch('Melee Combat','5 melee kills or KOs in a row'),ch('Explosive Combat','3 enemies with one explosive'),ch('Headshots','4 headshots in one Combat Focus'),ch('Drive-Bys','5 drive-by kills in under a minute'),ch('Stealth Sniping','7 unalerted kills with a scoped sniper'),ch('Incendiary','5 enemies with fire in 15 s'),ch('Revolver Headshots','6 revolver headshots, no reload'),ch('Long-Range Sniping','3 kills in 10 s from 300 ft'),ch('High Explosive','8 enemies with explosives in 20 s, no damage')] },
      { name:'Criminal', items:[ch('Mugging','Rob 5 pedestrians'),ch('Stick Ups','Rob 3 stores in a day'),ch('Carjacking','3 carjacks to a Pay ’n’ Spray in a day'),ch('Mugging Spree','$500 from pedestrians in a day'),ch('Cop Car Theft','Keep a wanted level 5 min in a cop car'),ch('Cop Weapon Theft','Guns from 5 police trunks'),ch('Stick Up Spree','2 stores in each of 5 counties in 20 min'),ch('Cop Tow','Tow an occupied cop car 1 mile'),ch('Carjacking Spree','Cars from 10 makers to Pay ’n’ Spray in 30 min'),ch('Carjacking Pro','$100,000 of stolen cars in a day')] },
      { name:'Exploration', items:[ch('WAiNK Locations','Scan any 4'),ch('Skyscrapers','Top the 5 tallest in Vice-Dale'),ch('Collectible Cards','3 cards in all 5 counties'),ch('Encyclopedia','Discover 100 animals, vehicles and weapons'),ch('Underwater Discoveries','Any 25'),ch('Rail Tour','1-mile train ride in all 5 counties in a day'),ch('Underwater Treasures','Find 85'),ch('Black Hole Wrecks','Find all 11'),ch('Road Trip','Every town in one day'),ch('Helipad Flyovers','All 41 Vice City helipads at 100 ft in 10 min')] },
      { name:'Fitness', items:[ch('Gym Member','Join any gym'),ch('Foot Travel','5 miles on foot in a day'),ch('Pro Cyclist','15 miles in a day'),ch('Pro Swimmer','3 miles in a day'),ch('Balanced Workout','Every gym machine in a day'),ch('Strength Regime','Strength 4 on both for 5 days'),ch('Cardio Regime','Cardio 4 on both for 5 days'),ch('Waning Sands Run','Tip pier gate to Waning Sands under 13 min'),ch('Tequesta Swim','Tequesta Retreat to Starfish Island under 15 min'),ch('Southwind Cycle','Grayson to Chicky’s Tiki Bar under 22 min')] },
      { name:'Shopping', items:[ch('Vehicle Modder','5 mods'),ch('Grocery Shopper','$250 in convenience stores in a day'),ch('Well Armed','3 sidearms and 3 longarms'),ch('Well Groomed','$1,000 on hair and beauty'),ch('Stylishly Armed','Cosmetics on 5 sidearms and 5 longarms'),ch('Well Dressed','$5,000 on clothes'),ch('Custom Ride','$20,000 in one mod visit'),ch('Heavily Armed','$50,000 at gun stores'),ch('Serious Modder','$125,000 at mod shops'),ch('Nest Egg','$1,500,000 in BuckMe checking')] },
      { name:'Sports', items:[ch('Basketball Rookie','3 hoops in a day'),ch('Golf Rookie','18 holes, 3 under, under 30 min'),ch('Basketball Streak','10 in a row in 2 min'),ch('Pool Streak','Win at 3 spots in a day'),ch('Basketball Tour','Score in every county'),ch('Golf Pro','Par on both courses in a day'),ch('Triple Bank','Cue off 3 rails then pot'),ch('Basketball Pro','All 100 hoops'),ch('8-Ball Break','Win on the break'),ch('Double Hole In One','Two in a row')] },
      { name:'Survival', items:[ch('Alligator Kills','3 wild gators'),ch('Big Fish','A 20 lb fish'),ch('Marksman','A medal at both ranges in a day'),ch('Catch of the Day','3 fish on each lure in a day'),ch('Zoologist','Study 20 species'),ch('Angler','4 species in 6 min'),ch('Pro Marksman','3 golds in a row'),ch('Hunting Spree','Boar, rattlesnake and panther in 15 min'),ch('Pro Angler','Every species'),ch('Legendary Hunter','All 8 unique animals')] },
      { name:'Vehicle', items:[ch('Vehicle Discovery','6 vehicles'),ch('Wheelie','A quarter mile'),ch('Winning Streak','Win in a muscle, sports and super car'),ch('Throttled','100 mph for 2 min'),ch('Drawbridge Jump','100 ft drawbridge jump, 3 times'),ch('Top Speed','175 mph'),ch('Train Landing','Land a plane on a moving train'),ch('Oceanarium Jump','Parachute into the orca or dolphin tank'),ch('Rally Winner','Win at all 3 rally tracks in a day'),ch('Train Jump','Land a bike on a moving train twice in 20 min')] }
    ],
    src: ['PowerPyx all challenges']
  });
})();
