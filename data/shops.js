/* Shops: clothing, salons, tattoos, food, convenience, services. */
(function(){
  const s = (n, sub, b, extra) => Object.assign({ n, s: sub || '', b: b || [] }, extra || {});
  G.add({
    id: 'shops', title: 'Shops & Services', icon: '🛍️', nav: 'Gear',
    blurb: 'What every kind of shop sells and where the branches are. Same-brand stores share stock, so you only need one of each brand.',
    filters: [{ key:'UE', label:'Ultimate Edition' }],
    before: [{ kind:'tip', title:'Shopping tips', items:[
      'Changing clothes, hair or car drops your heat. Use a wardrobe and pick <b>Add to Trunk</b> to carry up to 5 spare outfits in your car.',
      'Coffee and tea refill Focus faster. Fast food gives a short stat buff. Zombix heals but works less if you spam it.',
      'Buy headphones at an electronics store to hear the radio and podcasts on foot.',
      'Spending $100,000 total across shops earns Treat Yo Self. Gun stores, mods and tattoos are the fastest way there.',
      'Ultimate Edition shops stay locked on Standard. Upgrading later by paying the difference opens them.'
    ]}],
    groups: [
      { name:'Clothing · Casual & Street', note:'17 stores. Tops, bottoms, shoes and accessories.', items:[
        s('Slinger','Southside, Peacock Bay, Tequesta, Downtown, Decor District, Ocean Beach',[],{ at:'Downtown' }),
        s('This / That','Decor District, Ocean Beach (2), Waning Sands',[],{ at:'Decor District' }),
        s('Mid','Ocean Beach (2), Waning Sands',[],{ at:'Ocean Beach' }),
        s('Suburban, Urban Legendz, Drip Drops','Vice City',[],{ at:'La Perle', tip:'Drip Drops in La Perle holds a Sniper of La Perle playlist poster on its counter.' }),
        s('Stock 305','Stockyard',['UE'],{ at:'Stockyard', d:'Exclusive streetwear for Jason and Lucia.' })
      ]},
      { name:'Clothing · Sportswear, Formal, Thrift', items:[
        s('Alpha Sports','Downtown, Ocean Beach (4), Waning Sands',[],{ at:'Ocean Beach' }),
        s('Endzone','Downtown, Ocean Beach (2), Washington Beach',[],{ at:'Washington Beach' }),
        s('Eris','Vice City sportswear',[],{ at:'Vice City' }),
        s('Nola','Formal · Capri, Peacock Bay, Ocean Beach (2), Decor District',[],{ at:'Capri' }),
        s('Ferruccio Tucci','Formal · Capri, Ocean Beach (2), Decor District, Waning Sands',[],{ at:'Waning Sands' }),
        s('Thrift stores','Nifty Threads (Keys), Hamlet Thrift, Aline’s, Dr Froogal, Bargain World (Port Gellhorn)',[],{ at:'Hamlet' }),
        s('Souvenir & swimwear','24 shops across the Keys and Vice Beach',[],{ at:'Key Lento', d:'Includes Billie’s Key Lento Gift Shop, Key Lento Kahuna, The Wonder Whale, De’luge Swimwear, Beach Please and more.' })
      ]},
      { name:'Hair & Beauty', note:'18 salons. All have standard cuts. Signature styles differ. Beauty salons also do Lucia’s nails and makeup.', items:[
        s('Barnacle Beauties','Unisex · Mariana County',[],{ at:'Mariana County', tip:'Get The Chop in Chapter 1 happens here.' }),
        s('Lori Scott Hair & Beauty, Hair By Clair','Mariana County',[],{ at:'Mariana County' }),
        s('Kurt’s Barber Shop, Salon Pérez, Crosstown Cutz, Clip & Fade','Barbers · Vice City',[],{ at:'Crosstown' }),
        s('AU Courant, Bellissima, Salon Belle, Fabiola’s, Onyx, Oomph!, Gabriel Wexler','Vice City salons',[],{ at:'Vice City' }),
        s('Sara’s Unisex Salon','Signature styles, Jason facial hair, Lucia makeup and nails',['UE'],{ at:'Vice City' }),
        s('A Better You','Leonard County',[],{ at:'Leonard County' }),
        s('Pearl House, Captain Starlings Barber Shop','Kelly County',[],{ at:'Kelly County' })
      ]},
      { name:'Tattoo Studios', note:'11 studios. Each has its own style and designs. 17 magazine tattoos are collectible Styles.', items:[
        s('The Inked Mermaid','American Traditional · Key Lento',[],{ at:'Key Lento' }),
        s('Layin’ Ink','Black & Gray · Vice City',[],{ at:'Vice City' }),
        s('Dominion Ink','Anime · Vice City',[],{ at:'Vice City' }),
        s('Hyper Ink','Illustrative · Vice City',[],{ at:'Vice City' }),
        s('Cross My Heart','New School · north of Panos Plaza',[],{ at:'Vice City' }),
        s('Inkomplete Tattoo Co.','Old School · Vice City',[],{ at:'Vice City' }),
        s('Twa Ponya Tattoo','Neo-Traditional · La Perle',[],{ at:'La Perle', tip:'Sniper of La Perle poster on the table by the entrance.' }),
        s('Black Spot Tattoo','Geometric & Blackwork · Vice City',[],{ at:'Vice City' }),
        s('Electric Fang Tattoo','New School · 50+ FAILE designs · Stockyard',['UE'],{ at:'Stockyard' }),
        s('Blood Sugar Tattoo','Lettering · Kelly County',[],{ at:'Kelly County' }),
        s('Freedom Tattoo','Stick & Poke · Kelly County',[],{ at:'Kelly County' })
      ]},
      { name:'Food, drink & everyday', items:[
        s('Convenience stores','72 · 247, Xero Food Mart, LTD, Ron Stop’N’Snack and locals',[],{ d:'Zombix healing, pet food and groceries for your home fridge. Most can be robbed. Magazine racks hide collectibles (247 Key Lento, Xero Food Mart La Perle, Ron Stop’N’Snack Washington Beach).' }),
        s('Fast food','21 · Burger Shot, Taco Bomb, Pollo Diablo, Peewees, Marbles, Chacey’s, Frank’s Waffles',[],{ d:'Short stat buffs. Frank’s Waffles is where Dr. Merle’s finale starts.' }),
        s('Cafes & takeout','87',[],{ d:'Coffee and tea refill Focus faster.' }),
        s('Street food vendors','118'),
        s('Liquor stores','14',[],{ d:'Robbable. Spending $2,500 on alcohol unlocks the Drunk cheat.' }),
        s('Bars','122',[],{ d:'Pool tables, drinks, and the Rusty Anchor in Key Lento.' }),
        s('Electronics','15',[],{ d:'Headphones for radio on foot.' }),
        s('Footwear','17')
      ]},
      { name:'Vehicle services', items:[
        s('Pay ’n’ Spray','19 · respray, repair, register from Ch.3',[]),
        s('Gas stations','57 · Xero, Ron, Arrow, LTD, Globe Oil, 247, Alpha',[],{ d:'Every vehicle burns gas. Low fuel marks nearby stations. Out of gas means you stop. Gas stations also do minor repairs.' }),
        s('Car washes','6'),
        s('Train stations & ferries','25 train stations, 2 ferry terminals',[],{ d:'Ride a mile by train in every county in a day for the Rail Tour challenge.' })
      ]}
    ],
    after: 'Store pins are placed by town or county. Use Map > filter in game for the exact door.',
    src: ['PowerPyx store location guides','Shacknews','Gfinity store guide']
  });
})();
