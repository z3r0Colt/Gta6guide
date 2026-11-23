/* Money making, fences, robberies, gangs. */
(function(){
  const i = (n, s, b, extra) => Object.assign({ n, s: s || '', b: b || [] }, extra || {});

  G.add({
    id: 'money', title: 'Easy Money', icon: '💵', nav: 'Money',
    blurb: 'The fastest ways to get rich, ranked by when they open up. Plus the rules that make you lose money if you ignore them.',
    before: [
      { kind:'warn', title:'Rules that cost people money', items:[
        'Your pocket holds <b>$20,000 max</b>. Past that you cannot pick up cash. Bank it at an ATM.',
        'Die or get busted and you lose pocket cash, unowned guns and most stash bags. BuckMe bank money is safe.',
        'Chapter 1 money is wiped by the story. Only Family Savings up to $5,000 carries over. Spend the rest.',
        'Stolen loot must go to a <b>fence</b>. You cannot deposit stash bags.',
        'Hold narcotics until Chapter 3 and sell to Tyrone. Brian and Donnie pay the least and vanish later.',
        'Reach $100,000 in Family Savings for a permanent 20% discount in the Real Estate app.',
        'The story slows or stalls until you hit certain cash goals, so you will need money to progress.'
      ]},
      { kind:'good', title:'Best money by chapter', items:[
        '<b>Ch.1</b> Small store stick-ups and gang stashes. Spend it before Tourist Trap.',
        '<b>Ch.2</b> Sell tracker-free cars to Moses. Rob Kolts operations around Port Gellhorn.',
        '<b>Ch.3</b> Yasmani’s jewelry jobs ($10k–$20k each), Randy’s high-end cars, drugs to Tyrone.',
        '<b>Ch.4+</b> Bank vaults after That’s Where The Money Is. Large vaults are the biggest payouts in the game.'
      ]}
    ],
    groups: [
      { name:'Money methods', items:[
        i('Store stick-ups','Convenience stores, liquor stores, fast food, gas stations',['From Ch.1','Low risk'],{ d:'Walk into almost any store and hold up the clerk. Usually a couple of thousand at most. Store safes need a combination found nearby or from an NPC.', tip:'Threats do not hurt your Criminal Profile but needless violence does. 50 of 91 stick-ups count for 100%.' }),
        i('Gang Illegal Operations','39 hideouts across 9 gangs',['From Ch.1','Repeatable'],{ d:'Cash in a safe plus narcotics to fence. Respawn after a cooldown. Police respond slower than to stores.', steps:['Enter an area to reveal the yellow icon. Hover it to see security and take value.','Bring a suppressed weapon. Cops only come if you are seen or heard.','Clear the guards from cover.','Find the safe code. It is written somewhere on site or on a downed guard. Focus (L3+R3) highlights it.','Take every key valuable. The op only counts when all are collected.','Leave the area and fence the drugs.'], tip:'Any explosion opens a safe. No sticky bomb needed.' }),
        i('Steal & sell cars','WAiNK scan first',['From Ch.2'],{ d:'Scan a car with WAiNK (hold Up, aim, hold R1) to see its sell value, alarm and tracker. Moses buys tracker-free cars in Port Gellhorn with no daily limit. Randy buys high-end cars with advanced trackers from Chapter 3.', tip:'Old cars bring about $1,000. Fancy cars to Randy bring much more. $200,000 in vehicles fenced counts for 100%.' }),
        i('Smash ’n’ Grabs','20 jewelry stores, 15 pawn shops',['From Ch.3'],{ d:'Jewelry stores pay $10,000 to $20,000 depending on loot. The map shows the estimated take on hover.', tip:'Snap Gun a back door, crack the safe and kill the alarm and local CCTV for Sneakthief. Rob 3 shops in a row with your partner for Retail Therapy. North Vice City jewelry stores work well.' }),
        i('Payday Loans & small banks','7 Payday Loans, 14 small banks',['From Ch.3'],{ d:'Marked bills can carry dye packs. Get the Dye Pack Jammer from Credit Check first.', tip:'Fence marked bills to Yasmani. $250,000 earns Dime on the Dollar.' }),
        i('Bank vaults','8 large banks',['From Ch.4','High risk'],{ d:'Unlocked by the optional That’s Where The Money Is. Tail armored vans during the cash-transport window. Can bring a 4-star response, so plan your escape.', tip:'Yasmani sells van tips for $10,000. Rob 5 vaults for Maximum Withdrawal. An armored truck job gives A Classic Blitz Play.' }),
        i('Races & demolition','Raceways and mud clubs',['Varies'],{ d:'Street races pay $3,000 to $3,800 for first. Mud Club races up to $2,500.' }),
        i('Pilot Pete deliveries','Jason only, Chapter 4',['$20,000 each'],{ d:'Timed air deliveries. You get paid only if every package lands in time.' }),
        i('Side questline payouts','',['Varies'],{ d:'Billy’s Mall Rats ($12,000), Hometown Heroes ($10,000), Andy’s Puff Puff Pass ($10,000), Tyrone’s labs ($10,000), Kirk ($10,000).' }),
        i('Hunting','Through Bret',['From Ch.2'],{ d:'Sell what you hunt. Rare animals pay more.' }),
        i('Underwater treasure','Kenton’s shipwreck sets',['Slow'],{ d:'Not fast, but worth doing as you go.' }),
        i('$250,000 cheat','After the story',['Cheat'],{ d:'Up, Right, Down, Left, Up, Left, Down, Right on the phone cheat screen.', warn:'Cheats block saving for the session, so the money does not stick. It is not a real money method.' })
      ]}
    ],
    src: ['GTABase money guide','Beebom money guide','KeenGamer Illegal Operations','PowerPyx fences']
  });

  G.add({
    id: 'fences', title: 'Fences', icon: '🤝', nav: 'Money',
    blurb: 'Who buys what and who pays best. Green initial icons on the map.',
    groups: [{ name:'All fences', items:[
      i('Brian','South Key Lento',['Ch.1 only'],{ at:'South Key Lento', kv:{ 'Narcotics':'Very low', 'Jewelry':'Very low', 'Marked bills':'Very low' }, d:'Opens after Lab Fees. Gone after Chapter 1. Brian’s Lockup keypad is <code>7700</code>. Payment lands in Jason’s mailbox after your next mission.' }),
      i('Donnie','South Key Lento',['Ch.1 only'],{ at:'South Key Lento', kv:{ 'Narcotics':'Low', 'Jewelry':'Very low', 'Marked bills':'Very low' }, d:'Toolbox beside his painted trailer. Gone after Swamped. Pays later via Jason’s mailbox.' }),
      i('Moses','Port Gellhorn',['Ch.2+','Cars'],{ at:'Port Gellhorn', d:'Buys and registers cars without a tracker. No daily limit. First registration is free.' }),
      i('Dunk','Port Gellhorn',['Ch.2+'],{ at:'Port Gellhorn', kv:{ 'Narcotics':'Low', 'Jewelry':'Low', 'Marked bills':'Very low' }, d:'Opens after Slam Dunk. Temporarily unavailable during parts of the story.' }),
      i('Tyrone','La Perle, Vice City',['Ch.3+','Best for drugs'],{ at:'La Perle', kv:{ 'Narcotics':'High', 'Jewelry':'Medium', 'Marked bills':'Medium' }, d:'Stays after the story.' }),
      i('Yasmani','Little Cuba, Vice City',['Ch.3+','Best for jewelry & bills'],{ at:'Little Cuba', kv:{ 'Narcotics':'Medium', 'Jewelry':'High', 'Marked bills':'High' }, d:'From Chapter 3 you can also drop goods at any garage and your partner can fence them (hold D-pad Right, Fence Goods).' }),
      i('Randy','Balsero, Vice City',['Ch.3+','High-end cars'],{ at:'Vice City', d:'Takes high-end cars with advanced trackers. Opens after Clonin’ Keys, Makin’ GS.' })
    ]}],
    src: ['PowerPyx fence locations','KeenGamer']
  });

  G.add({
    id: 'gangs', title: 'Gangs & Illegal Ops', icon: '💀', nav: 'Money',
    blurb: '39 gang operations across 9 gangs. Rob one from each for Pest Control. All 39 count for 100%. Track them in Progress > Gangs.',
    trackable: true,
    before: [{ kind:'tip', title:'Pest Control route', items:[
      'Grassrivers first (Kingfishers and Palmer Fishing Warehouse), then Port Gellhorn (Kolts), then Ambrosia (Final Chapter).',
      'Then Vice City. San4San in La Perle (sell to Tyrone right there) and PTT Youngin$ in Southside.',
      'Finish M7, Guardia Brothers and Other Criminals using Progress > Gangs. Ultimate Edition adds a bonus PTT Youngin$ compound that does not count.'
    ]}],
    groups: [
      { name:'The 9 gangs', items:[
        i('Kingfishers','3 operations · Grassrivers swamps',[],{ at:'Pelican Valley', d:'Fishing Shacks, Sunrise RV Park, Manatee Motel. You meet them in Gone Fishing.' }),
        i('Kolts & Associates','5 operations · Port Gellhorn',[],{ at:'Port Gellhorn', d:'Painkiller ring. Kingpin Bowling, June Warehouse, La Cascara Motel, Brooks Boatworks, plus one north of town.' }),
        i('M7','2 operations',[],{ at:'Hamlet', d:'M7 Compound plus one more. Tied to Lucia’s story. Their junkyard on Galerina St east of Boone Speedway hides the Gauntlet Hellfire.' }),
        i('La Polilla Negra','2 operations',[],{ at:'Watson Bay', d:'Colombian cartel. Palmer Fishing Warehouse in Watson Bay plus one more.' }),
        i('Final Chapter MC','4 operations · Ambrosia',[],{ at:'Ambrosia', d:'Biker club running the sugar town. Farm Fix Meth Lab, Irons Building Supply and two more.' }),
        i('San4San','5 operations · La Perle',[],{ at:'La Perle', d:'Haitian street gang. Sound4Sound Studio, JanJak’s Garage (custom pink lowrider inside) and three more.' }),
        i('PTT Youngin$','2 operations · Southside',[],{ at:'Southside', d:'Names show once visited. Ultimate Edition adds a third raid that does not count toward the 39.' }),
        i('The Guardia Brothers','3 operations',[],{ at:'Vice City', d:'Casa Guardia plus two more. An orange custom Mercedes-style car sits out back of Casa Guardia.' }),
        i('Other Criminals','13 operations',[],{ d:'Exotic Animals Front, Slator Towing Inc (black and red Trans Am in the garage), Chatfield Storage & Logistics (purple nitrous supercar), Leonida Carrier Warehouse, Cigar Import Front, Gas Station Meth Front, Backroom Weed Front, Carter Mining Boathouse and five more.' })
      ]}
    ],
    src: ['KeenGamer all 9 gangs']
  });
})();
