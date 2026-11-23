/* Vehicle mod shops. Each shop specializes in one style of vehicle. */
(function(){
  const s = (n, area, type, does, extra) => Object.assign({ n, s: area, b: [type], kv: { 'Works on': type, 'Specialty': does } }, extra || {});
  G.add({
    id: 'modshops', title: 'Mod Shops', icon: '🔧', nav: 'Rides',
    blurb: '14 mod shops and each one has its own specialty. Take a lowrider to a lowrider shop and a dirt bike to a dirt bike shop. Orange wrench icons on the map, or Map > Vehicles > Mod Shops.',
    filters: [{ key:'UE', label:'Ultimate Edition' }],
    before: [{ kind:'tip', title:'Know before you mod', items:[
      'Every shop does repairs, performance upgrades and paint. Body kits and cosmetics depend on the shop’s specialty.',
      'Only registered cars are worth modding. Unregistered cars vanish.',
      'Boats and aircraft have no mod shop. Gas stations do quick minor repairs.',
      'Spending $125,000 at mod shops clears Serious Modder. $20,000 in one visit clears Custom Ride. Mods also count toward Treat Yo Self ($100,000 spent).',
      'Pay ’n’ Spray (19 of them) resprays to lose heat and registers cars from Chapter 3.'
    ]}],
    groups: [
      { name:'Mariana County · Keys & Grassrivers', items:[
        s('Coastal Auto Care','Key Lento','Retro cars','Classic-inspired parts and retro cosmetics',{ at:'Key Lento', d:'Joey works here. Free repair and respray of the Ganado in Just a Scratch.' }),
        s('Capri Classic','Capri','Muscle cars','American muscle parts and classic muscle builds',{ at:'Capri' })
      ]},
      { name:'Vice-Dale County · Vice City', items:[
        s('Two Wheel Fury Motorsport','Vice City','Sport bikes','Custom bike parts and track-racing cosmetics',{ at:'Vice City' }),
        s('Euroform Automotive','Vice City','Luxury cars','Custom parts and high-end cosmetics',{ at:'Vice City' }),
        s('Vice Auto Customs','Vice City','Tuners','Custom parts and street-racing cosmetics',{ at:'Vice City' }),
        s('Lowballers Customs','Vice City','Lowriders','Custom rims, wheel designs and interiors for classic sedans',{ at:'Vice City' }),
        s('Rideout Customs','Vice City','Donks','Big custom rims, detailed interiors and donk builds',{ at:'Vice City', b:['Donks','UE'] , img:'shop-rideout' }),
        s('Vice Vinyl','Vice City','Any vehicle','Vinyl wraps and liveries only. No performance work.',{ at:'Vice City' }),
        s('Stockyard Speedshop','Stockyard','Hot rods','Custom parts and old-school cosmetics',{ at:'Stockyard' })
      ]},
      { name:'Kelly County · Port Gellhorn & Ambrosia', items:[
        s('Whisler Motorsport','Kelly County','Race cars','Custom parts and track-racing cosmetics',{ at:'Kelly County' }),
        s('Dirt Merchants','Southern tip of Port Gellhorn','Dirt bikes','Custom bike parts and all-terrain cosmetics',{ at:'Port Gellhorn' }),
        s('Wasteland Off-Road','Kelly County','Off-road','Custom parts and all-terrain cosmetics',{ at:'Kelly County' })
      ]},
      { name:'Leonard & Lummox Counties', items:[
        s('One-Eyed Willie’s Auto Shop','Lake Leonida, Leonard County','Off-road','Hand-painted liveries and off-road mods',{ at:'Lake Leonida', b:['Off-road','UE'] , img:'shop-willie' }),
        s('Ledford Motorcycle Workshop','Lummox County','Choppers','Classic American bikes. Repairs, performance and custom cosmetics.',{ at:'Lummox County' })
      ]}
    ],
    after: 'Map pins for shops are placed by county or town. Sources do not give street addresses yet, so use the in-game map filter for the exact door.',
    src: ['PowerPyx all mod shops','GamesFuze customization guide','Shacknews Ultimate Edition shops']
  });
})();
