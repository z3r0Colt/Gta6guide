/* Core registry + schematic geography of Leonida.
   Coordinates are on a 1000 x 1000 schematic grid (x → east, y → south).
   They are APPROXIMATE and exist so pins land in the right part of the state. */
window.G = {
  sections: [],
  add(s) { this.sections.push(s); },
  places: {},
  counties: [],
  regions: []
};

/* Land outline: a Florida-like peninsula with a short panhandle. */
G.land = [
  [40,120],[260,90],[520,80],[760,70],[905,95],[930,160],[915,260],[900,360],[885,440],
  [880,520],[905,600],[900,690],[880,760],[840,830],[770,870],[700,885],[620,870],
  [540,840],[470,800],[400,760],[330,720],[270,670],[215,600],[170,520],[120,460],
  [70,420],[40,380],[60,330],[40,280],[30,200]
];
/* Keys island chain (drawn as little blobs) */
G.keys = [
  [[700,905],[735,898],[742,912],[705,920]],
  [[640,925],[690,915],[695,930],[645,940]],
  [[575,945],[630,935],[635,950],[580,958]],
  [[505,958],[565,950],[568,965],[508,972]],
  [[430,966],[495,960],[497,975],[432,980]],
  [[360,968],[420,966],[420,980],[362,982]]
];
/* Vice Beach barrier islands east of Vice City */
G.islands = [
  [[835,640],[858,636],[870,760],[848,766]],
  [[805,700],[822,698],[824,712],[806,714]],
  [[808,760],[830,756],[834,790],[812,794]]
];
G.lakes = [
  { name: 'Lake Leonida', pts: [[520,430],[600,415],[640,455],[630,520],[570,545],[515,515],[500,470]] },
  { name: 'Lake Tallaloko', pts: [[700,180],[745,172],[760,205],[720,222],[695,205]] },
  { name: 'Three Toe Lake', pts: [[598,650],[625,645],[632,668],[605,675]] },
  { name: 'Cottonmouth Lake', pts: [[505,760],[535,752],[545,775],[512,782]] }
];

/* Counties (in-game signage, not an official Rockstar map). Rough polygons. */
G.counties = [
  { id:'lummox', name:'Lummox County', color:'#4fbf7a',
    note:'The wild north. Mount Kalaga National Park, the paper-mill town of Moreau, Grayson and Lake Tallaloko. Hunting country.',
    pts:[[40,120],[260,90],[520,80],[760,70],[905,95],[930,160],[915,260],[640,280],[420,250],[200,240],[50,250],[30,200]] },
  { id:'kelly', name:'Kelly County', color:'#ff9f43',
    note:'West and central Leonida. Port Gellhorn on the Gulf Coast, the sugar town of Ambrosia, Manifest Canyon and Emerald Springs. Chapter 2 lives here.',
    pts:[[50,250],[200,240],[420,250],[640,280],[600,400],[520,430],[500,470],[520,560],[300,600],[215,600],[170,520],[120,460],[70,420],[40,380],[60,330]] },
  { id:'leonard', name:'Leonard County', color:'#3da5ff',
    note:'East coast between the lake and Vice City. Belville, Little Hardin Island and the St. Lucia Lighthouse.',
    pts:[[640,280],[915,260],[900,360],[885,440],[880,520],[890,580],[700,600],[630,520],[640,455],[600,400]] },
  { id:'vicedale', name:'Vice-Dale County', color:'#ff3f8e',
    note:'The urban southeast. Vice City, Vice Beach, the airport, the port and the keys off Vice Beach.',
    pts:[[700,600],[890,580],[905,600],[900,690],[880,760],[840,830],[770,870],[700,885],[640,860],[560,800],[560,700],[600,630]] },
  { id:'mariana', name:'Mariana County', color:'#2de2e6',
    note:'The southwest. The Grassrivers swamp, Capri, Watson Bay and the whole Leonida Keys chain including Key Lento.',
    pts:[[215,600],[300,600],[520,560],[570,545],[630,520],[700,600],[600,630],[560,700],[560,800],[640,860],[620,870],[540,840],[470,800],[400,760],[330,720],[270,670]] }
];

/* The six regions Rockstar named, with a label anchor. */
G.regions = [
  { id:'vice-city', name:'Vice City', at:[770,700], county:'vicedale', blurb:'The neon metropolis. Downtown, Little Cuba, La Perle, Stockyard, Crosstown, Bayside, Tequesta and the Vice Beach islands. Chapters 3 to 5.' },
  { id:'keys', name:'Leonida Keys', at:[540,975], county:'mariana', blurb:'Island chain to the south. Jason starts in Key Lento. Mile Zero Air Station sits on Goose Key.' },
  { id:'grassrivers', name:'Grassrivers', at:[440,700], county:'mariana', blurb:'Everglades-style swamp. Airboats, gators, the Kingfishers gang, Pelican Valley and Cottonmouth Lake.' },
  { id:'port-gellhorn', name:'Port Gellhorn', at:[140,400], county:'kelly', blurb:'Run-down Gulf Coast town. Starlet Motel, Moses’ shop, the fun fair and the Kolts gang. Chapter 2.' },
  { id:'ambrosia', name:'Ambrosia', at:[380,330], county:'kelly', blurb:'Industrial sugar-refinery heartland run by the Final Chapter biker club.' },
  { id:'kalaga', name:'Mount Kalaga', at:[480,170], county:'lummox', blurb:'National park in the far north. Forests, rivers, hunting and the Kalaga Lookout.' }
];

/* Named places → [x, y, county]. Used for map pins. Positions are schematic. */
(function(){
  const P = {
    // Mariana County / Keys
    'Key Lento':[700,908,'mariana'], 'South Key Lento':[712,915,'mariana'], 'Goose Key':[748,915,'mariana'],
    'Mile Zero Air Station':[750,918,'mariana'], 'Bobcat Key':[660,928,'mariana'], 'Abismo Key':[600,945,'mariana'],
    'Riquezas Keys':[470,972,'mariana'], 'Southwind':[560,950,'mariana'], 'Belpoint':[300,700,'mariana'],
    'Grassrivers':[440,700,'mariana'], 'Pelican Valley':[470,660,'mariana'], 'Watson Bay':[350,735,'mariana'],
    'Capri':[230,620,'mariana'], 'Mariana County':[420,690,'mariana'], 'Southpoint Airfield':[640,870,'mariana'], 'Goliath Global Quarry':[580,600,'mariana'],
    'Nehrling River':[520,640,'mariana'], 'Boundary Road Airstrip':[675,880,'mariana'],
    // Vice-Dale / Vice City
    'Vice City':[760,700,'vicedale'], 'Vice-Dale County':[700,740,'vicedale'], 'Downtown':[772,705,'vicedale'], 'Little Cuba':[742,715,'vicedale'],
    'La Perle':[765,662,'vicedale'], 'Stockyard':[760,682,'vicedale'], 'Crosstown':[738,690,'vicedale'],
    'Bayside':[785,690,'vicedale'], 'Salton':[712,702,'vicedale'], 'Tequesta':[745,740,'vicedale'],
    'Tequesta Retreat':[752,748,'vicedale'], 'Southside':[760,725,'vicedale'], 'Rock Ridge':[725,665,'vicedale'],
    'Vice City International Airport':[695,698,'vicedale'], 'Port Vice City':[800,712,'vicedale'],
    'Starfish Island':[812,705,'vicedale'], 'Dalton Island':[805,690,'vicedale'], 'Vice Beach':[852,700,'vicedale'],
    'Ocean Beach':[855,735,'vicedale'], 'Washington Beach':[850,672,'vicedale'], 'Penmarch Isle':[846,660,'vicedale'],
    'Oldby Island':[848,682,'vicedale'], 'Gloriana Key':[818,768,'vicedale'], 'Catalan Key':[825,785,'vicedale'],
    'Hamlet':[580,760,'vicedale'], 'Peacock Estates':[790,640,'vicedale'], 'Balsero':[725,705,'vicedale'], 'Decor District':[770,672,'vicedale'], 'Cottonmouth Lake':[525,768,'vicedale'], 'Three Toe Lake':[615,660,'vicedale'],
    'West Vice-Dale':[630,690,'vicedale'], 'South Vice-Dale':[680,800,'vicedale'], 'Peregrine Bay':[720,820,'vicedale'],
    // Leonard County
    'Belville':[770,560,'leonard'], 'Little Hardin Island':[880,505,'leonard'], 'St. Lucia Lighthouse':[885,490,'leonard'],
    'Lake Leonida':[570,480,'leonard'], 'Waning Sands':[845,565,'leonard'], 'Lake Leonida Lock':[640,470,'leonard'], 'Leonard County':[780,450,'leonard'],
    // Kelly County
    'Port Gellhorn':[130,395,'kelly'], 'Gellhorn':[160,380,'kelly'], 'Wild Hog Point':[75,430,'kelly'],
    'Gellhorn International Raceway':[190,360,'kelly'], 'Ambrosia':[380,330,'kelly'], 'Allied Crystal':[395,320,'kelly'],
    'Northern Ambrosia':[380,290,'kelly'], 'Manifest Canyon':[300,280,'kelly'], 'Emerald Springs':[360,520,'kelly'],
    'Historic Route 628':[250,400,'kelly'], 'McKittrick Farm':[240,330,'kelly'], 'Mud Club':[280,430,'kelly'],
    'Leonida Penitentiary':[460,400,'kelly'], 'Kelly County':[300,450,'kelly'],
    // Lummox County
    'Mount Kalaga':[480,170,'lummox'], 'Mount Kalaga National Park':[470,160,'lummox'], 'Kalaga Lookout':[500,140,'lummox'],
    'Moreau':[250,170,'lummox'], 'West Kalaga':[380,180,'lummox'], 'Grayson':[620,190,'lummox'],
    'Lake Tallaloko':[728,196,'lummox'], 'Lummox County':[560,220,'lummox'], 'Millport':[300,210,'lummox'], 'Frogswater':[270,440,'kelly'], 'Buckskin Swamp':[220,480,'kelly']
  };
  for (const k in P) G.places[k] = { x:P[k][0], y:P[k][1], county:P[k][2] };
})();
