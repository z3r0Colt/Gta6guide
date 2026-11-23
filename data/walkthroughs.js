/* Mission walkthroughs, keyed by mission name. Merged into Story Missions (and any
   side quest with the same name) at load time. Fields: start, d, steps, reward, tip, warn. */
G.walk = {};
G.w = function (name, o) { G.walk[name] = Object.assign(G.walk[name] || {}, o); };

/* ---------- Prologue ---------- */
G.w('Prologue', { start:'Automatic. Lucia at Leonida Penitentiary.',
  steps:['Talk to your cellmate, then follow CO Wilson to the counselor’s office.','In the flashback, rob the Payday Loan shop. Threaten the teller and grab the cash.','Win the quick-time event to shake off the bystander.','Run from the cops. You cannot get away. Lucia is arrested near the coffee shop.'],
  tip:'Mostly cutscenes. Leads straight into Gone Fishing.' });

/* ---------- Chapter 1 ---------- */
G.w('Gone Fishing', { start:'Automatic after the Prologue. Jason on Cal’s boat in the Keys.',
  steps:['Follow Donnie’s plane while Cal fishes the dropped packages out of the water.','Use the binoculars to watch the deal at the docks.','Sneak through the Kingfisher camp and knock out guards from behind.','Untie Donnie in the shack and beat the brute.','Fight to the seaplane and fly to Brian’s marina.'],
  reward:'Jason’s house in Key Lento and free roam.',
  tip:'Leg and knee shots keep your Criminal Profile professional. Kills push you toward Psycho. The binoculars can study animals (100 needed for 100%). You can carry up to 5 Zombix to heal.',
  warn:'An optional cash trailer in this mission is missable.' });
G.w('Gear Up', { start:'The gun store near Jason’s house in Key Lento.',
  steps:['Talk to Andrew at the counter and buy a long gun. The shotgun is likely the only one you can afford.','Walk out. Three Kingfishers pull up in a truck and open fire.','Win the fight. If you die you just respawn at home and the mission still counts.'],
  reward:'A long gun of your choice.' });
G.w('Lab Fees', { start:'Call Brian, then enter the locked boutique at the pink marker in Key Lento.',
  steps:['Talk to the clerk. He says he has no rent.','Punch him and he offers acid from the back room.','The back room keypad code is <code>0420</code>. Take the acid and loot the register if you want.','Call Brian and drop the acid at Brian’s lockup. Its keypad code is <code>7700</code>.'],
  reward:'$600, paid into the mailbox at Jason’s house.',
  tip:'Brian becomes your first fence for narcotics, jewelry and marked bills. Check the mailbox later for the money.' });
G.w('Just a Scratch', { start:'Drive Jason’s ’70 Ganado to Joey at Coastal Auto Care, Key Lento.',
  steps:['Drive to the marker and talk to Joey, then pull into the garage.','Pick Full Engine for the free repair.','Pick Cosmetics, then Respray, and choose any color.'],
  reward:'Free engine repair and respray.',
  tip:'This is your car for the rest of Chapter 1. If it gets destroyed, reload a manual save. Upgrades are lost when the car is replaced.' });
G.w('Unwanted Attention', { start:'Talk to Cal on the north Key Lento beach.',
  steps:['Drive Cal to the Hamlet impound. He installs a police scanner app on your phone.','Climb in, unhook the red sports car from the tow truck (R3) and drive it out.','Wait for the gate to open, then escape the search area.','Respray at the Hamlet Pay ’n’ Spray and park at Brian’s garage.'],
  reward:'Police radio scanner and $150 (in the garage back room).',
  tip:'Knocked-out guards trigger a patrol. Wrecking the car can fail the mission. Swap your hat and glasses on the item wheel when asked.' });
G.w('Pipework', { start:'Mandy’s place.', steps:['Grab the plunger from the bathroom.','Clear the kitchen sink pipes with the wrench.'] });
G.w('Hey Arnold!', { start:'Pick up Cal and head to the Crastenburg Hotel pool bar.',
  steps:['Track Arnold, Brian’s broker.','He runs by car, then on foot to a dock. Chase him down.','Choose to kill or spare him.'],
  tip:'Sparing him counts as restrained. Killing him pushes you violent. Either way it ends at Brian’s pool.' });
G.w('Island Dreams', { start:'Kenton Rees’ bachelor-party dive.',
  steps:['Find three treasures at the wreck with the metal detector.','Free Dobbs from the grate.','Drive off the shark with the speargun.'],
  tip:'Starts Kenton’s shipwreck treasure hunts.' });
G.w('Feng Shui', { start:'Jason’s living room with Cal.',
  steps:['Move the furniture around with Cal before Lucia comes home.','Play the console game under the TV.'],
  tip:'Cal only calls after you own a long gun, fixed the Ganado and did the house repairs. If stuck after the console game, pause and pick Exit Game.' });
G.w('Coming Home', { start:'Pick Lucia up from prison.', steps:['Get Lucia’s clothes bag from Andy.','Keep the bag in the back of the Ganado.'],
  warn:'Carrying the bag into a house or shop loses it.' });
G.w('Clean Up After Donnie', { start:'Grassrivers dock. Talk to the fisherman.',
  steps:['Take the boat to the shack downriver.','Get the cocaine back.','Run it to Donnie’s trailer on Key Lento.'], tip:'Do it before or after Buck Me.' });
G.w('Buck Me', { start:'A Fleeca bank.', steps:['Open your BuckMe account.'], tip:'Deposit cash at any ATM from now on.' });
G.w('Down to Earth', { start:'Brian’s boatyard and the Dodo seaplane.',
  steps:['Pressure-wash a boat.','Fly out with Lucia and hook the package.','Make the drops and hide the drugs in the shed.'] });
G.w('Clear Skies', { start:'Brian sends Jason to fly with Donnie.', steps:['Fly the Dodo above Pilot Pete’s plane.','Rescue Donnie from the bikers.'] });
G.w('Day Release', { start:'Mattia’s party yacht. Lucia’s first day out.',
  steps:['Speedboat out to the yacht and find Mattia below deck.','Win the jet-ski race.','Drive the supercar to a Vice City nightclub.'] });
G.w('Swamped', { start:'Ride with Brian. It is a Kingfisher trap at a slaughterhouse.',
  steps:['Escape the slaughterhouse.','Take the helicopter.','Chase the truck and rescue Lori.'] });
G.w('Don Gone', { start:'Donnie’s trailer in Key Lento.',
  steps:['Pack Donnie’s bag.','Beat the three men who show up.','Drive the ’85 Blista off Key Lento and burn or sink it.'] });
G.w('Recalibration', { start:'Grab beers across from Cal’s.', steps:['Take Cal fishing.','Grill the catch.','Walk Lucia home.'], tip:'If Lucia will not follow you, reload.' });
G.w('Tourist Trap', { start:'Mattia’s job offer.', d:'Kicks off a run of story missions back to back, so finish exploring the Keys first.' });
G.w('Home Sweet Home', { start:'Lucia at Jason’s house.', steps:['Grab Jason’s stash.','Escape the masked men and the fire.','Get to Jason at the hospital with Andy.'] });
G.w('Discharge Time', { start:'The hospital, as Lucia.', steps:['Get wounded Jason out before the hunters reach his room.'], tip:'Chapter 1 finale.' });

/* ---------- Chapter 2 (summaries) ---------- */
G.w('Girl’s Trip', { start:'The motel off the interstate. Lucia.', steps:['Ask Vicki about painkillers.','Drive her to Delights for her paycheck.','Find Dunk.'] });
G.w('Ambulance Chaser', { start:'The barn. Lucia.', steps:['Chase the ambulance someone drove off.','Stop it and get rid of it.'] });
G.w('Moses', { start:'Vicki’s contact Moses. Lucia.', steps:['Scan his cars for trackers and alarms with WAiNK.','Register your first car for free (respray, then register).'], reward:'Car registration at Watkins Auto Parts, Port Gellhorn.' });
G.w('Slam Dunk', { start:'With Dunk. Lucia.', steps:['Corner Dr. Bill outside a store.','Drive him to the painkiller contact.'], tip:'If the Dunk objective stalls, phone Dunk yourself.' });
G.w('Breakfast Run', { start:'Jason and Lucia together.', steps:['One of you controls the crowd while the other empties the registers.','Buy Lucia a coffee afterward.'], reward:'Character switching.' });
G.w('Afternoon Delight', { start:'Delights club. Jason and Lucia.', steps:['Get the safe combination by phone.','Once the show starts, slip into the manager’s office through the kitchen.'] });
G.w('Checking Out', { start:'The motel. Chapter 2 finale.', steps:['Leave for Vice City.','Win the fight.','Get a new car.'] });

/* ---------- Chapter 3 ---------- */
G.w('Welcome to Vice City', { start:'Automatic. Dre’Quan calls Jason to the Jack of Hearts in Crosstown.', at:'Crosstown',
  steps:['Go around to the back entrance of the Jack of Hearts.','Throw money at the dancers or skip it. It is optional.','Go upstairs to meet Boobie.','Drive to the apartment and park in the covered spot.','Second floor, first door. That is your new home.'],
  reward:'Bayside Apartments 201. Moses texts that any Pay ’n’ Spray now registers cars with standard trackers.' });
G.w('Dealer’s Choice', { start:'Jack of Hearts recording booth, top of the stairs.',
  steps:['Wait for Dre’Quan to finish recording and follow him to Boobie.','At the apartment, take Cut or Pure product from Tyrone.','Hand the bag over at the deal and wait while the buyer tests it.','Knock out the man who claims the bag.','Drive Dre’Quan to a shop in Southside.'],
  tip:'Cut product gets noticed. You can offer half price to keep both product and money. A non-violent finish gives a Professional bonus.' });
G.w('Dubious Provenance', { start:'The bag in the Bayside apartment closet. Head west to Capri.', at:'Capri',
  steps:['Part 1. Visit Evelyn’s antique store. Accept Halifax’s offer to hold his watch as collateral.','Part 2. Come back to Capri, slip in the back window and find the statue in the north desk drawer.','Go to the motel next door, find Halifax upstairs and choose to trust him.','Part 3. Evelyn sends you to a house in the NW of town. Chase Halifax by boat, bike and on foot. Shoot his leg.'],
  reward:'A Crowex Octane “Bobby Ambrose” watch, about $2,500 in jewelry and cash, and a ’32 Hustler in the storage container.',
  warn:'Turning Halifax down leaves a call-back objective. Ignore it and Parts 2 and 3 vanish at the end of Chapter 3. You must trust him to reach Part 3.' });
G.w('Mami Knows Best', { start:'Lucia meets Mia in Peacock Bay.', at:'Peacock Bay',
  steps:['Drive Mia to the house in Hamlet and follow her in.','Haul the lawn junk into the blue dumpster.','Pull the mattress out of the pool and shoot the gator that grabs Mia.','Use the excavator across the street to smash the M7 house and cars.','Drive Mia back to her office.'],
  warn:'Shoot the gator fast or Mia gets pulled under.' });
G.w('Get Your Wheels', { start:'No marker. Shows in the story list once you reach Bayside.',
  steps:['Register any car at a Pay ’n’ Spray, or','Pay $700–$900 in the Scooter Bros app to get an impounded car back.'],
  tip:'You need a free registration slot, so buy a garage if you are full.' });
G.w('Join a Street Race', { start:'Manuel texts you after Dealer’s Choice. Race starts in Salton.',
  steps:['Rent one of three cars for $600–$900. The priciest has the best stats.','Finish the race.'], reward:'$3,000 for first.' });
G.w('Here, Kitty Kitty', { start:'Tyrone at the La Perle apartment complex. Needs Dubious Provenance Part 1.', at:'La Perle',
  steps:['Go to Charles’ apartment in Rock Ridge. Bribe the doorman $20 or break in.','Read the Aline’s Thrift Store receipt in the bedroom.','Go to the homeless camp in NW La Perle and break the lower door.','Chase Charles upstairs, melee anyone in the way, follow him over the wall.','Search his body for Kitty Litter.'],
  reward:'Tyrone becomes a drop-off fence.' });
G.w('Send Money to Lorena', { start:'Lorena calls after Mami Knows Best. Lucia. No marker.', steps:['Open BuckMe on your phone.','Send $5,000 to Lorena.'] });
G.w('Boobie Time', { steps:['Drive Boobie on his money run through North Vice Ave and Rock Ridge.','Chase down the kids who steal his car.','Meet a fence at a smoke shop.'] });
G.w('Meet the Heders', { steps:['Have dinner with Brian and Lori. They introduce Raul.','As Lucia, steal the Guardia brothers’ car from the port during a Coast Guard sweep.'] });
G.w('Bumper to Bumper', { steps:['Help Yago upgrade his new car.','Race, then lose the police.'] });
G.w('Car Service', { steps:['Steal a Benefactor Schafter V12 from a chop shop for Raul.','Deliver it to Randy at Leonida Auto World.'] });
G.w('Top Billing', { steps:['Roxy of Real Dimez quits before the Jack of Hearts show.','Follow her to Kamal’s house party.','Cut the power.'] });
G.w('First Impressions', { steps:['Meet Raul. You are the decoy getaway for his bank job.','Burn the car in the Redwood Suites garage and switch rides.'] });
G.w('Crosstown Traffic', { steps:['Lucia holds up a Guardia man on the metro while Jason takes the cash boat.','Pull the emergency brake at the end of the train car.'] });
G.w('Credit Check', { steps:['Meet Raul’s crew.','Rob three small banks in a row while Karim cuts the alarms.','Shake the police. Valentina collects the cash.'], reward:'The Dye Pack Jammer.' });
G.w('Ride Or Die', { steps:['Get DWNPLY to sign sneakers.','Snatch his key and steal his car.'] });
G.w('Sinfrontera National Bank', { steps:['Scout the cartel bank with Raul.','Note the biometric reader, 105 cameras and armed guards.'] });
G.w('Security Expert', { steps:['Grab Nicole Park from her guarded Waning Sands house at night.','Bring her to Raul’s lockup.'] });
G.w('Caught Slipping', { steps:['Chase two men out of the apartment.','Move the hard drive to locker A726 at Big House Storage.'] });
G.w('Company Property', { steps:['Help Brian pick up Pilot Pete’s explosives at an airstrip.','Escape the federal raid.'] });
G.w('Safe Word', { steps:['Pose as pool maintenance and steal Gil’s safe from Peacock Estates.','Practice cracking it with Nicole.'], at:'Peacock Estates' });
G.w('The Missing Link', { steps:['Drug Monty, the cartel’s money man, at his party.','Bring him to Raul for the vault contact.'] });
G.w('Cooties', { steps:['Drive Real Dimez in DWNPLY’s stolen car to the video shoot.','Get away from DWNPLY’s crew.'] });
G.w('Hidden Charges', { steps:['Tell Raul about the hard drive.','Plant charges in the red call boxes at three downtown cell towers.'] });
G.w('Bricked Up', { steps:['Fetch Boobie’s four bricks from Venture Apartments.','Shoot your way out of the police raid.'] });
G.w('The Cartel Heist', { steps:['Rob Sinfrontera National Bank with Raul’s crew.'], tip:'Last mission of Chapter 3.' });

/* ---------- Chapter 4 ---------- */
G.w('Another Life', { reward:'A BuckMe Black account with a $2,000,000 limit.' });
G.w('Company Cars', { reward:'Two cars and the Thompson Court Garage. The Pfister Comet S2 has the best base stats.' });
G.w('Party Hard', { reward:'A silenced pistol with limited ammo.', tip:'Hostages are involved, so watch your aim.' });
G.w('Pay Abe’s Fee', { steps:['Open BuckMe and pay Lucretia Law Group.'], d:'Required. There is no marker. PowerPyx lists $75,000 here and $150,000 on a later page, so have both ready.' });
G.w('Photo/Shoot', { reward:'$6,000 and W-10 variants.' });
G.w('Bad Driver!', { d:'Choice at the end. Kill Felipe for $20,000 or spare him for the Felipe’s Gift car.', warn:'Missable after Power Play.' });
G.w('Making Gainz', { d:'You get offered steroids. Declining is the default.', warn:'From here Jason and Lucia cannot be seen together in public until VCIA Takedown.' });
G.w('Amateur Hour', { reward:'$1,000.' });
G.w('Adventures in Babysitting', { tip:'You get an optional drug offer.' });
G.w('Fresh Evidence', { reward:'$10,000.' });
G.w('Child’s Play', { reward:'$30,000.' });
G.w('This is a Free Call From...', { reward:'Up to about $6,500. Taking half gives $5,000.' });
G.w('Power Play', { reward:'$40,000.' });
G.w('Headliners', { reward:'Up to about $50,000 and brass knuckles.' });
G.w('VCIA Takedown', { reward:'$250,000.' });
G.w('That’s Where The Money Is...', { reward:'About $80,000 and big bank vault robberies.' });
G.w('Call Valentina Back', { d:'Speeds up the deal. Needed before Sunset.' });
G.w('Sunset', { start:'After VCIA Takedown and Call Valentina Back. The message waits at the Y Hotel front desk, not with Santino.',
  steps:['Go to the marina and board Raul’s houseboat.','Find Raul in the small bathroom, second door on the left.','Fight your way out as Jason and reach the boat.','Defend it while Lucia drives. Kill the helicopter early.'],
  warn:'Point of no return into Chapter 5. Ammo is limited.' });
G.w('Starting From Zero', { start:'Right after Sunset.',
  steps:['Drive to Aqua Stadium and find Andrea. If she spots you she leaves the hard drive.','Swap cars and take the statue and drive from the Big House Storage unit.','Follow Mattia’s text to Giorgio’s penthouse.','Follow the hostess and Giorgio, then Dardan, to bed.'],
  tip:'Shooting Mattia during Giorgio’s test does nothing. The gun is empty.' });

/* ---------- Chapter 5 ---------- */
G.w('Bird in the Hand', { start:'Wake up in Giorgio’s penthouse.',
  steps:['Change at the wardrobe and meet Giorgio in the gym.','Fly to the Coast Guard base and scout it as Lucia.','Parachute from the bridge onto the boat.','Sneak through the military base sewer with Vinny to the hangar roof hatch.','Open the hangar, hold off soldiers, board the chopper and shoot down the jets with a rocket launcher.'],
  tip:'Reach the hatch unseen for a Professional bonus.' });
G.w('Taking Liberties', { start:'Back at the penthouse.', steps:['Meet Giorgio in the spa.','Follow him to his office.'] });
G.w('Doggie Bag', { start:'Vinny on the balcony by the pool.',
  steps:['Sneak onto the cruise ship as Lucia. You have non-lethal ammo.','Take the elevator to the top deck and find Rocco.','Give Rocco the drugged biscuit and pick him up.','Carry him to the landing zone at the back and board the helicopter.'] });
G.w('VC Baby', { start:'Where Kat and Mattia sit.',
  steps:['Accept Mattia’s request. Refusing ends the mission on the spot.','Lucia distracts Dardan while you grab the key fob.','Use the car elevator.','Drive Mattia to the hospital in about 4 minutes and follow him in.'],
  tip:'Your choice changes a scene in the credits. Arriving in time gives a bonus.' });
G.w('Operation Savage Glory', { start:'Meet Vinny at the penthouse.',
  steps:['Plant charges on the bridge pillar and snipe the cargo ship crew.','Follow Rocco and plant charges on the containers.','Detonate from the helicopter and blow the raised bridge.','Dive and plant the boat charges, then hit the Coast Guard offices.','Open the shutter, fly out, defend the cargo and hook it.'],
  reward:'$50,000, the Pegassi Residences penthouse and garage, and all your weapons and gear back.' });
G.w('Honest Abe', { start:'Leave the penthouse for the first time.', steps:['Drive to Abe’s office downtown.'], d:'Mostly a cutscene.' });
G.w('Protective Custody', { start:'Abe’s office, after Pay Abe’s Fee.',
  steps:['Sink the 8-ball by banking it off three rails.','Jason drops the money at the Panos Plaza bench.','Escape the police cell and transport, then the ambush.','Reach the precinct, escape with Fitzroy, barricade the door and hit the armory.','Hold off NOOSE, reach the warehouse and take out Mendez’s task force.'],
  warn:'Point of no return. The last two missions run back to back.', tip:'Check car trunks for weapons and armor.' });
G.w('The End of the Road', { start:'Right after Protective Custody.',
  steps:['Pick a loadout at Brian’s hangar.','Turret the penthouse balconies, then find the office and the hard drive.','Pull Lucia from the garage rubble and escape the helicopter.','Race to Cal’s house, then Fleming Key.'],
  warn:'<b>Ending spoiler.</b> “Swim For It” is the good ending. Both live, Lucia takes a plea deal and Jason goes to prison. “No Surrender” is the bad ending. They drive through the barricade and die.' });
