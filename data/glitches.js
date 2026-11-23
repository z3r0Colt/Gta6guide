/* Glitches, exploits and stuck-mission fixes. Status as of Nov 21-22, 2026 (no title update since launch). */
(function(){
  const g = (n, s, b, extra) => Object.assign({ n, s: s || '', b: b || [] }, extra || {});
  G.add({
    id: 'glitches', title: 'Glitches & Fixes', icon: '🐛', nav: 'Secrets',
    blurb: 'Working exploits, plus fixes for missions that will not start or finish. Rockstar had not shipped a title update as of Nov 21, so nothing here was patched at that point. Any patch could change that.',
    filters: [{ key:'Works', label:'Works' }, { key:'Mixed', label:'Mixed' }, { key:'rep', label:'Unconfirmed' }],
    before: [{ kind:'warn', title:'Before you try any of this', items:[
      'Make a separate manual save first. Glitches can drop you under the map or soft-lock a mission.',
      'GTA VI is single-player only right now, so these only touch your own save. No ban risk.'
    ]}],
    groups: [
      { name:'Money exploits', items:[
        g('Apollo Aggregates loot loop','“Red Barn” save-reload trick · ~$8,000 per 5 minutes',['Works','Ch.2+'],{ at:'South Vice-Dale',
          d:'The red warehouse at Apollo Aggregates. Sources place it north of Key Lento in South Vice-Dale County, and one says east of Hamlet by three pools off the highway.',
          steps:['Start this in Chapter 2 or later. Chapter 1 money gets wiped.','Drive your own car or pickup there. A pickup holds 4 bags.','Take the cocaine from the teddy-bear van, office tables and safe, plus the marked bills by the middle van.','Put every bag in your trunk. Bags in your hands do not count.','Pause > Game > Save Game to a slot, then load it.','The loot is back and your bags stay. Repeat.','Sell at Brian’s Lockup (keypad 7700, SW Key Lento) or Donnie’s trailer toolbox. Payment lands in Jason’s mailbox later.'],
          tip:'First run is about $11,000. Repeats about $8,600. One report says driving half a mile away and back also restores the loot without reloading. If a bag will not pick up, top it off from the vans.' }),
        g('Store robbery reset','Robbed stores reopen instantly',['Mixed'],{ at:'Key Lento',
          steps:['Rob stores near Jason’s house and lose the cops.','Start a story mission that opens with a cutscene.','Pause during it and pick Restart Mission.','Pause again and pick Quit Mission.','The stores show as open again.'],
          warn:'Mixed results. At least one player could not get it to work on Nov 20.' }),
        g('Stash bag overfill','Squeeze extra into a bag',['rep'],{ d:'A bag capped at $3,200 held $4,000 when the player stopped at $2,800 and cracked the safe last.' }),
        g('Roof repair save spam','',['rep'],{ d:'One video shows the bank jumping $5,000 to $8,000 per save after bouncing a basketball through Jason’s stairs during the roof repair. Unconfirmed.' })
      ]},
      { name:'Tricks', items:[
        g('First-person lock','No first-person setting exists, but this locks it',['Works'],{ steps:['Settings > Controller. Set the touchpad (PS5) or View button (Xbox) to Camera.','Get in a car. Pull the phone out with Up and put it away.','Tap the camera button fast until first person locks.'], tip:'It sticks on foot, driving and aiming. Load a save, use a wardrobe or switch characters to undo it.' }),
        g('Xbox Series X 60 fps unlock','Needs a 120 Hz display',['Works'],{ steps:['Set the Xbox display to 60 Hz and start the game.','When the six stars show in the intro, switch the display to 120 Hz.','Without quitting, launch another game from the Guide, then switch back.'], warn:'Gameplay and animations run faster than normal. Cutscenes stay normal. Save first.' }),
        g('Walk through walls','Crouch into a tight corner and pull out your phone',['Works'],{ warn:'Often drops you under the map. Save first.' }),
        g('Phone clip under the map','Squeeze between a parked car and a fence, pull out the phone',['Works'],{ warn:'There is no way back up. Load your save.' }),
        g('Prologue chase skip','Steal a boat during Lucia’s escape',['rep'],{ d:'Jump off the roof, run down the alley across the street and steal a boat. The police chase skips.' }),
        g('Keep a police truck','',['rep'],{ d:'One player drove a police Bison into a mission and kept it as a normal truck with working lights. No one has repeated it yet.' })
      ]},
      { name:'Missions that won’t start or finish', items:[
        g('Hold prompts never fill','Weights, Kenny’s grate bar',['Fix'],{ d:'Settings > Accessibility > Simplified Minigames on. On pro controllers turn off trigger stops.' }),
        g('Prologue: can’t aim at the cashier','',['Fix'],{ d:'Turn off trigger stops on pro controllers.' }),
        g('Prologue: guard won’t open the cell','',['Fix'],{ d:'Stand Lucia fully inside the yellow floor box.' }),
        g('Just a Scratch: no Restore engine option','',['Fix'],{ d:'Happens with the Ultimate kit fitted early. Pay $900 for Stage 1 engine or load an older save.' }),
        g('Stuck in a shop menu','',['Fix'],{ d:'In story garages, apply what the mission asks first. Otherwise close the game and load the last autosave.' }),
        g('Unwanted Attention: garage stays shut','',['Fix'],{ d:'Let the loadout wheel close fully. Leave hat and glasses until the prompt. Buy new clothes and restart if still stuck.' }),
        g('Feng Shui won’t appear','',['Fix'],{ d:'Wait for Kyle’s text or sleep. Fixing the car, doing house jobs and buying a gun at the marked shop helped some players.' }),
        g('Feng Shui: Joystation puzzle','',['Fix'],{ d:'Bottom-left tower up, middle tower down, top-right tower down. Reset first if you moved pieces.' }),
        g('Feng Shui stops if you bring beer in','',['No fix'],{ d:'Take the beer from the fridge, not from outside.' }),
        g('Coming Home: pool break won’t register','',['Fix'],{ d:'Walk to another spot at the table. Hold L2 to aim, then hold and release R2.' }),
        g('Swamped won’t start','',['Fix'],{ d:'Fix up the car for Lucia or do Donnie’s package pickup.' }),
        g('Checking Out won’t start','',['Fix'],{ d:'As Jason, call Cal, then fully close the game. Some also had to finish Billy’s mud bike job.' }),
        g('Checking Out: police search never ends','',['Fix'],{ d:'Restart Mission, not Retry Checkpoint. Or fail on purpose and Skip Checkpoint.' }),
        g('Stuck as Lucia in Chapter 3','Jason greyed out',['Fix'],{ d:'Invite Jason to rob a store or hang out, or start Raul’s bank job when he calls.' }),
        g('Dubious Provenance: Lucia stays cuffed','',['No fix'],{ d:'Only quitting the game helps. Save before you split up on the bikes.' }),
        g('Raul won’t call after Heavy Lifting','',['Fix'],{ d:'Pay Abe’s $75,000 fee to Lucretia Law Group in BuckMe. There is no marker. A couple of players paid and still waited.' }),
        g('Randy never calls','',['Fix'],{ d:'Fully restart and wait a few minutes in free roam.' }),
        g('Side job icon vanished','',['No fix'],{ d:'The person died or ran off. They may text again later. Save before side jobs.' })
      ]},
      { name:'Lost money, guns & cars', items:[
        g('Brian’s money never arrived','',['Fix'],{ d:'He pays after your next mission. Check Jason’s mailbox.' }),
        g('Donnie didn’t pay','',['Fix'],{ d:'Sleep about a day, wait for his text, check the mailbox.' }),
        g('Bags gone after the motel cutscene','',['Fix'],{ d:'Check your own car’s storage.' }),
        g('Guns gone from the trunk','',['Fix'],{ d:'Check any gun store weapon locker. Picked-up guns are not yours until stored in your own car.' }),
        g('Standout car vanished','',['No fix'],{ d:'Store standout cars in a garage before a main mission or save.' }),
        g('Saved at an ATM, loads frozen','',['rep'],{ d:'Load an older slot. Never save mid-animation.' }),
        g('PS5 crash CE-108255-1','',['Fix'],{ d:'Update the game and system software. Reinstall if it keeps happening.' })
      ]}
    ],
    src: ['MeowDB glitch tracker','KeenGamer money glitch','Stealthy Gaming','Games.gg']
  });
})();
