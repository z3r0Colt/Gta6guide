/* Core registry + geography of Leonida.
   The map is Rockstar's official "Great State of Leonida" poster (2805 x 3840 px).
   Place coordinates are pixel positions on that image. Places marked approx
   are not labeled on the poster, so their pin is a best estimate. */
window.G = {
  sections: [],
  add(s) { this.sections.push(s); },
  map: { src: 'assets/leonida-map.jpg', w: 2805, h: 3840 },
  places: {},
  counties: [],
  regions: []
};

G.counties = [
  { id:'lummox', name:'Lummox County', note:'The wild north. Mount Kalaga National Park, Grayson, Moreau, Bonanza and Millport. Hunting country.' },
  { id:'kelly', name:'Kelly County', note:'The west and middle. Port Gellhorn on the Gulf Coast, the sugar town of Ambrosia, Manifest Canyon, Emerald Springs and Buckskin Swamp. Chapter 2 lives here.' },
  { id:'leonard', name:'Leonard County', note:'The northeast around Lake Leonida. Belville, Waning Sands, Little Hardin Island and Leaf Links.' },
  { id:'vicedale', name:'Vice-Dale County', note:'The urban east. Vice City, Vice Beach, VCIA airport, Hamlet and the keys off the coast.' },
  { id:'mariana', name:'Mariana County', note:'The southwest. Capri, the Grassrivers swamp, Watson Bay, Pelican Valley and the whole Keys chain down to Mile Zero.' }
];

G.regions = [
  { id:'vice-city', name:'Vice City', at:'Vice City', county:'vicedale', blurb:'The neon metropolis. Downtown, Little Cuba, La Perle, Stockyard, Crosstown, Bayside, Tequesta and the Vice Beach islands. Chapters 3 to 5.' },
  { id:'keys', name:'Leonida Keys', at:'Key Lento', county:'mariana', blurb:'Island chain to the south. Jason starts in Key Lento. Mile Zero Air Station sits on Goose Key at the far end.' },
  { id:'grassrivers', name:'Grassrivers', at:'Grassrivers', county:'mariana', blurb:'Everglades-style swamp. Airboats, gators, the Kingfishers gang, Pelican Valley and Cottonmouth Lake.' },
  { id:'port-gellhorn', name:'Port Gellhorn', at:'Port Gellhorn', county:'kelly', blurb:'Run-down Gulf Coast town. Starlet Motel, Moses’ shop, the fun fair and the Kolts gang. Chapter 2.' },
  { id:'ambrosia', name:'Ambrosia', at:'Ambrosia', county:'kelly', blurb:'Industrial sugar-refinery town next to Lake Leonida, run by the Final Chapter biker club.' },
  { id:'kalaga', name:'Mount Kalaga', at:'Mount Kalaga', county:'lummox', blurb:'National park in the far north. Forests, rivers, hunting and the Kalaga Lookout.' }
];

(function(){
  const S = 2.805; // positions below were read off a 1000px-wide copy of the poster
  const P = {
    // Lummox County
    'Bonanza':[480,193,'lummox'], 'Moreau':[515,226,'lummox'], 'Grayson':[380,298,'lummox'], 'Mount Kalaga':[497,309,'lummox'],
    'Mount Kalaga National Park':[497,309,'lummox'], 'Kalaga Lookout':[470,330,'lummox',1], 'Millport':[658,314,'lummox'],
    'West Kalaga':[420,320,'lummox',1], 'Lake Tallaloko':[640,255,'lummox',1], 'Lummox County':[497,275,'lummox'],
    'Hyde Island':[575,157,'lummox'], 'Frampton Islands':[643,200,'lummox'],
    // Leonard County
    'Lake Leonida':[605,428,'leonard'], 'Lake Leonida Lock':[560,420,'leonard',1], 'Little Hardin Island':[775,340,'leonard'],
    'St. Lucia Lighthouse':[790,330,'leonard',1], 'Waning Sands':[740,442,'leonard'], 'Belville':[657,541,'leonard'],
    'Leonard County':[700,491,'leonard'], 'Leaf Links':[775,571,'leonard'],
    // Kelly County
    'Port Gellhorn':[305,490,'kelly'], 'Gellhorn':[380,612,'kelly'], 'Draper Island':[245,410,'kelly'], 'Wild Hog Point':[245,532,'kelly'],
    'Ambrosia':[555,488,'kelly'], 'Allied Crystal':[548,470,'kelly',1], 'Northern Ambrosia':[545,440,'kelly',1],
    'Frogswater':[472,470,'kelly'], 'Mud Club':[472,470,'kelly',1], 'Manifest Canyon':[390,402,'kelly'],
    'Emerald Springs':[460,578,'kelly'], 'Buckskin Swamp':[493,648,'kelly'], 'Kelly County':[424,541,'kelly'],
    'Gellhorn International Raceway':[350,560,'kelly',1], 'McKittrick Farm':[420,630,'kelly',1], 'Historic Route 628':[400,330,'kelly',1],
    'Leonida Penitentiary':[540,560,'kelly',1],
    // Mariana County
    'Capri':[287,722,'mariana'], 'Belpoint':[175,757,'mariana'], 'Grassrivers':[450,908,'mariana'], 'Watson Bay':[432,962,'mariana'],
    'Pelican Valley':[521,1004,'mariana'], 'Cottonmouth Lake':[500,975,'mariana',1], 'Mariana County':[412,999,'mariana'],
    'Bobcat Key':[356,880,'mariana'], 'Big Pine':[393,853,'mariana'], 'Goliath Global Quarry':[430,798,'mariana',1],
    'Nehrling River':[380,758,'mariana'], 'Key Lento':[568,1140,'mariana'], 'South Key Lento':[560,1160,'mariana',1],
    'Boundary Road Airstrip':[590,1105,'mariana',1], 'Southpoint Airfield':[470,1060,'mariana',1],
    'Abismo Key':[450,1222,'mariana'], 'Southwind':[327,1169,'mariana'], 'Goose Key':[277,1159,'mariana'],
    'Mile Zero Air Station':[275,1192,'mariana'], 'Riquezas Keys':[218,1136,'mariana'],
    // Vice-Dale County
    'Vice City':[670,712,'vicedale'], 'Vice-Dale County':[720,786,'vicedale'], 'Downtown':[701,732,'vicedale'],
    'Little Cuba':[659,729,'vicedale'], 'La Perle':[680,636,'vicedale'], 'Stockyard':[724,615,'vicedale'], 'Decor District':[727,595,'vicedale'],
    'Crosstown':[698,680,'vicedale'], 'Bayside':[719,646,'vicedale'], 'Rock Ridge':[652,683,'vicedale'], 'Balsero':[586,685,'vicedale'],
    'Salton':[621,741,'vicedale'], 'Tequesta':[673,815,'vicedale'], 'Tequesta Retreat':[729,812,'vicedale'],
    'Southside':[623,889,'vicedale'], 'Peacock Bay':[664,875,'vicedale'], 'Peacock Estates':[660,904,'vicedale'],
    'Vice City International Airport':[565,780,'vicedale'], 'Port Vice City':[805,761,'vicedale'], 'Waxman Island':[771,730,'vicedale'],
    'Starfish Island':[786,700,'vicedale'], 'Vespucci Island':[774,665,'vicedale'], 'Casanova Island':[797,646,'vicedale'],
    'Rialto Islands':[767,640,'vicedale'], 'Dalton Island':[869,814,'vicedale'], 'Vice Beach':[852,669,'vicedale'],
    'Ocean Beach':[863,715,'vicedale'], 'Washington Beach':[870,608,'vicedale'], 'Washington Island':[830,593,'vicedale'],
    'Penmarch Isle':[797,605,'vicedale'], 'Oldby Island':[835,625,'vicedale'], 'Gloriana Key':[798,856,'vicedale'],
    'Catalan Key':[728,880,'vicedale'], 'Vice City Oceanarium':[736,838,'vicedale'], 'Hamlet':[561,939,'vicedale'],
    'Boone Speedway':[547,955,'vicedale'], 'Bluegrass':[562,866,'vicedale'], 'South Vice-Dale':[619,925,'vicedale'],
    'West Vice-Dale':[455,737,'vicedale'], 'Three Toe Lake':[470,725,'vicedale',1], 'Peregrine Bay':[652,1009,'vicedale'],
    'Corsair Key':[675,1012,'vicedale'], 'Shoeless Keys':[605,1040,'vicedale']
  };
  for (const k in P) G.places[k] = { x: Math.round(P[k][0] * S), y: Math.round(P[k][1] * S), county: P[k][2], approx: !!P[k][3] };
})();
