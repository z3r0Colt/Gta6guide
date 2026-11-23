/* Easter eggs and secrets found since launch. Rockstar has confirmed none of them. */
(function(){
  const e = (n, s, b, extra) => Object.assign({ n, s: s || '', b: b || [] }, extra || {});
  G.add({
    id: 'secrets', title: 'Secrets & Easter Eggs', icon: '👽', nav: 'Secrets',
    blurb: 'Hidden stuff players have found so far. <span class="badge ok">Seen</span> means many players have done it. <span class="badge rep">Reported</span> means one or two reports.',
    trackable: true,
    filters: [{ key:'ok', label:'Seen by many' }, { key:'rep', label:'Reported only' }, { key:'Unsolved', label:'Unsolved' }],
    groups: [
      { name:'The big ones', items:[
        e('The UFO abduction','Rural road east of Port Gellhorn · after 2 AM',['ok','Trophy'],{ at:'Gellhorn',
          steps:['Chapter 2 or later. Drive the rural roads east of the Starlet Motel after 2 AM.','Look for a car on the roadside with lights on or its alarm going.','Follow the trail of clothes into the woods to a beam holding a woman.','Approach and the craft drops her. She asks you to fetch her car.','On your way back the UFO takes you. You wake three days later to a call from your partner.'],
          tip:'Trophy: The Truth Is Out There. If the car is not there, leave and come back another night.' }),
        e('Alien rescue','Follows the abduction',['rep'],{ at:'Pelican Valley',
          d:'Keep playing the abducted character and sleep. You wake in a white room in the ship and solve a dream puzzle (sneak past the eggs, read the solar system model, match four panel lights, avoid the middle door, carry milk to the machine). Then find the restricted facility in Pelican Valley near the Mariana County line.',
          tip:'Keypad code reported as <code>2-3-4-1</code>. Carry the alien outside and the UFO collects it. Reported reward is a permanent boost to health, stamina and Focus.' }),
        e('The Skunk Ape','Kirk’s questline plus free-roam sightings',['ok'],{ at:'Cottonmouth Lake',
          d:'Sightings on the dirt road south of Boone Speedway near Hamlet (eating a deer), in Gullet Marsh across Gambit Bay from Jason’s house, and around the effigies near Cottonmouth Lake. Chase it and you lose it, or gas knocks you out.' }),
        e('The literal Easter egg','Tallest radio tower in South Vice-Dale',['ok'],{ at:'South Vice-Dale',
          d:'Climb about 7 minutes of ladders. Take an egg from the bird’s nest at the top and throw it off. A hidden cutscene plays with a convertible below.', tip:'A Backyard Wrestling card sits on the climb.' }),
        e('Demon ritual warehouse','Unmarked warehouse north of Capri near Tortoise Lake',['ok'],{ at:'Capri',
          d:'Knock out a passer-by, carry them in and lay them on the pentagram. The lights die and a horror sequence starts. Go at night and save first.' }),
        e('Giant mutant crab','Gullet Marsh outpost',['ok'],{ at:'Key Lento',
          d:'Flip the outside breaker, go in and read the journal on the computer. Step away and a giant crab attacks.' })
      ]},
      { name:'Fun finds', items:[
        e('Jet-ski rescue dog','Get stranded at sea',['ok'],{ at:'Key Lento', d:'A dog in goggles and a life jacket tows you to shore. Stay on and it takes you to a little island of dogs with about $1,200 cash. Gambit Bay is an easy place to try.' }),
        e('Talking parrots','A liquor store in the Keys',['ok'],{ at:'Key Lento', d:'Brawl the angry men inside. The parrots cheer. One says “generator”. The generator outside hides a cash stash. A nod to Tony the parrot.' }),
        e('The Belville house','Belville, Leonard County',['ok'],{ at:'Belville', d:'The house from the 2021 photo on the Lil’ Probe’Inn wall in San Andreas. Break into the garage to find a conspiracy theorist’s den with notes about Los Santos and “J and L”.' }),
        e('Dexter’s apartment','Trinity Apartments, Washington Island',['ok'],{ at:'Washington Beach', d:'Climb to the roof beside the round stair tower. A killer’s kit of tools, rope, tape and gloves waits up top. The boat at the dock looks familiar too.' }),
        e('Fast & Furious tuner','Villa garage on Vespucci Island',['ok'],{ at:'Starfish Island', d:'Bright green tuner that copies the first film’s hero car. Free roam only, no mission.' }),
        e('Michael’s yacht','Moored near Jason’s house',['ok'],{ at:'Key Lento', d:'The nav screen shows a Los Santos map, not Leonida.' }),
        e('Mount Chiliad chatter','Outside the bar when Jason meets Donnie',['ok'],{ d:'Two customers talk about Mount Chiliad, a bunker, jetpacks and eggs.' }),
        e('The Vault secret station','The Vault nightclub, Vice City',['ok'],{ at:'Downtown', d:'Scan the red gas-mask poster at the entrance. Unlocks The Vault Radio.' }),
        e('Series callbacks','Around Leonida',['ok'],{ d:'“Lethal by Design: A Liberty City Memoir” in Jason’s house. A New Austin cowboy novel and an Arthur Morgan-style hat in Jacob’s Tavern. Michael’s Wind Chimes ringtone in phone settings. The Ocean View Hotel. A Love Fist sticker on a Starlet Motel door.' }),
        e('Macca & Friends','Pink alligator cartoon on Weazel TV',[])
      ]},
      { name:'Unsolved mysteries', items:[
        e('Monument of Leonidan Supremacy','Manifest Canyon, Kelly County',['Unsolved'],{ at:'Manifest Canyon', d:'A pillar, globe and four stallions for wildlife, corruption, humanity and yeyo. Each horse has a symbol and one wears a traffic cone. Players report the controller rumbles nearby and beeping that might be Morse code.' }),
        e('Firewatch tower','Foggy peak in the northern national park',['Unsolved'],{ at:'Kalaga Lookout', d:'A reviewer called it the start of one of several mysteries.' }),
        e('QR codes','Hidden around the world',['Unsolved'],{ d:'Reviewers say mysteries unfold from QR codes in the world. No locations published yet.' }),
        e('Unhurtable sniper ghost','Night',['rep','Unsolved'],{ d:'A passer-by who cannot be hurt and teleports behind you if you snipe at night. Might be a bug.' })
      ]},
      { name:'Hidden trophies', items:[
        e('Let’s Go Bowling','Kingpin Bowling, Port Gellhorn',['ok'],{ at:'Port Gellhorn', d:'Take the watch in the SE office, the Gutterball shotgun on the NE table and the office safe, then lose the cops.' }),
        e('In The Beginning...','Ocean View Rooftop Bar',['ok'],{ at:'Ocean Beach', d:'Order an Apple Martini and drink it by the edge.' }),
        e('Capital Offense','Vehicle showroom, south Vice City',['ok'],{ at:'Vice City', d:'Use the Key Cloner on the blue Banshee and smash out through the window.' }),
        e('Bad Luck, I Guess','Little Cuba Payday Loans',['ok'],{ at:'Little Cuba', d:'As Lucia alone, rob it a second time and escape on foot.' }),
        e('Ten Pin','Any crowded street',['ok'],{ d:'Kick 10 pedestrians off a bike within 60 seconds.' }),
        e('Hot Together','Train tunnel north of Ambrosia',['ok'],{ at:'Northern Ambrosia', d:'Lose a 4-star wanted level with your partner.' })
      ]}
    ],
    src: ['GTAside','GTA Culture','GamingBible','ComicBook','PowerPyx trophy guide']
  });
})();
