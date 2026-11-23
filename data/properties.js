/* Garages and safehouses. Houses cannot be bought. Garages are the only property for sale. */
(function(){
  const p = (n, s, b, extra) => Object.assign({ n, s: s || '', b: b || [] }, extra || {});
  G.add({
    id: 'garages', title: 'Garages & Safehouses', icon: '🏠', nav: 'Rides',
    blurb: 'You cannot buy houses in GTA VI. Garages are the only property for sale. Buy all 8 in the Vice City Real Estate app for Little Boxes.',
    trackable: true,
    before: [{ kind:'good', title:'Save $40,000', items:[
      'The Vice City Real Estate app installs after <b>Daily Driver</b> in Chapter 2. You can buy from your phone or at the sign on site.',
      'Get Family Savings to <b>$100,000</b> first. That unlocks a permanent 20% discount and drops all 8 garages from $200,000 to $160,000.',
      'Each bought garage holds 1 car. Free story garages hold more. Max is 18 registered cars.',
      'Edition, pre-order and GTA+ garages do not count for Little Boxes.'
    ]}],
    groups: [
      { name:'Garages for sale', note:'Prices shown as base / with the 20% discount.', items:[
        p('Mitchell Auto Center','Historic Route 628, east of Port Gellhorn',['$5,000 / $4,000'],{ at:'Historic Route 628' }),
        p('Persistence Road Garage','Belville, Leonard County',['$9,500 / $7,600'],{ at:'Belville' }),
        p('7th Avenue Garage','Salton, east of the airport',['$15,000 / $12,000'],{ at:'Salton' }),
        p('Store n’ Bolt','Northern Ambrosia',['$21,000 / $16,800'],{ at:'Northern Ambrosia', tip:'Appears in the app after Dubious Provenance in Chapter 3.' }),
        p('Wyatt Motors','Allied Crystal, Ambrosia, near the Pay ’n’ Spray',['$27,000 / $21,600'],{ at:'Allied Crystal' }),
        p('Vela Rota Drive Garage','Central Capri',['$30,000 / $24,000'],{ at:'Capri' }),
        p('Bonita Court Garage','Washington Beach',['$42,500 / $34,000'],{ at:'Washington Beach', tip:'Nearest garage to the ’55 Stanier.' }),
        p('Atlantic Court Garage','Ocean Beach, south of the Y Hotel',['$50,000 / $40,000'],{ at:'Ocean Beach' })
      ]},
      { name:'Free story garages', items:[
        p('Port Gellhorn Station Garage','1 spot · north of Moses’ shop',['Ch.2'],{ at:'Port Gellhorn', d:'Gifted by Moses after Daily Driver.' }),
        p('Thompson Court Garage','2 spots · Ocean Beach',['Ch.4'],{ at:'Ocean Beach', d:'From Company Cars.' }),
        p('NE 15th Street Garage','2 spots · Stockyard',['Ch.5'],{ at:'Stockyard', d:'From Operation Savage Glory.' }),
        p('Pegassi Residences Garage','3 spots · Tequesta Retreat',['Ch.5'],{ at:'Tequesta Retreat', d:'Largest garage. After Operation Savage Glory. Giorgio’s Sky Garage also lends you his cars.' })
      ]},
      { name:'Edition & membership garages', items:[
        p('Paradise Garage','Watson Bay',['UE'],{ at:'Watson Bay', d:'From Wyman in Chapter 2. Comes with the ’67 Dominator Buggy, a weapon locker and a stash.' }),
        p('Shore Court Garage','Shore Drive, Ocean Beach',['Pre-order'],{ at:'Ocean Beach', d:'Vintage Vice City Pack. Comes with a ’55 Vapid Stanier, weapon locker and stash. The pack is now sold separately.' }),
        p('GTA+ Crosstown Garage','Crosstown',['GTA+'],{ at:'Crosstown', d:'Opens in Chapter 3 with active GTA+. Holds a ’90 Annis Venturas BLVD Elegy. GTA+ members also get 10% more when selling owned cars.' })
      ]},
      { name:'Safehouses', note:'Given by the story. Each has a bed (sleep to heal and skip time), a wardrobe and 1–2 outdoor parking spots for unregistered cars.', items:[
        p('Jason’s house','Key Lento · Chapter 1',['miss'],{ at:'Key Lento', warn:'Lost after Tourist Trap. Floor cash and the Ganado go with it. Five magazines here are missable.' }),
        p('Starlet Motel','Port Gellhorn · Chapter 2 · $900 bill',['miss'],{ at:'Gellhorn', warn:'Lost at Checking Out. Two magazines here are missable. No weapon locker.' }),
        p('Bayside Apartments, Room 201','Catalan Blvd, Bayside · Chapter 3',['miss'],{ at:'Bayside', warn:'Vacated after The Cartel Heist. Two magazines here are missable.' }),
        p('The Y Hotel, Room 701','Ocean Beach · Chapter 4 onward',[],{ at:'Ocean Beach', d:'Checked in as Mr. and Mrs. Walker. The room phone or the concierge brings your car round.' }),
        p('Pegassi Residences Penthouse','Tequesta Retreat · Chapter 5',[],{ at:'Tequesta Retreat', d:'North of the Vice City Oceanarium. Has a magazine on Penthouse Level 3.' })
      ]}
    ],
    src: ['GTABase properties','MeowDB garages','Retrobroker safehouse guide','Leonipedia']
  });
})();
