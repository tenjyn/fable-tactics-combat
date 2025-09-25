(function(global){
  const CLASS_DATABASE = [
    { name:"Knight", stats:{STR:8,DEX:4,CON:8,INT:3,WIS:4,CHA:5}, attunement:{FAE:0,DREAM:0}, resources:{HP:35,EP:1,AP:2,MOV:3}, startingSkills:["Taunt","Shield Wall","Parry"] },
    { name:"Magician", stats:{STR:3,DEX:5,CON:4,INT:8,WIS:6,CHA:4}, attunement:{FAE:6,DREAM:5}, resources:{HP:22,EP:1,AP:2,MOV:4}, startingSkills:["Arcane Bolt","Elemental Blast","Ward"] },
    { name:"Warlock", stats:{STR:3,DEX:4,CON:4,INT:7,WIS:4,CHA:4}, attunement:{FAE:7,DREAM:7}, resources:{HP:20,EP:1,AP:2,MOV:4}, startingSkills:["Life Leech","Hex","Dark Pact"] },
    { name:"Archer", stats:{STR:4,DEX:8,CON:5,INT:4,WIS:3,CHA:5}, attunement:{FAE:0,DREAM:0}, resources:{HP:24,EP:1,AP:2,MOV:6}, startingSkills:["Snipe","Volley","Pinning Shot"] },
    { name:"Scout", stats:{STR:4,DEX:7,CON:4,INT:4,WIS:3,CHA:6}, attunement:{FAE:0,DREAM:0}, resources:{HP:22,EP:1,AP:2,MOV:7}, startingSkills:["Slipstream Step","Trap Sense","Ambush"] },
    { name:"Cleric", stats:{STR:3,DEX:4,CON:5,INT:5,WIS:8,CHA:5}, attunement:{FAE:0,DREAM:2}, resources:{HP:26,EP:1,AP:2,MOV:4}, startingSkills:["Heal","Turn Undead","Ward Chant"] },
    { name:"Druid", stats:{STR:3,DEX:4,CON:5,INT:6,WIS:7,CHA:4}, attunement:{FAE:6,DREAM:3}, resources:{HP:25,EP:1,AP:2,MOV:5}, startingSkills:["Shapeshift","Entangle","Restorative Wind"] },
    { name:"Fighter", stats:{STR:7,DEX:6,CON:6,INT:4,WIS:4,CHA:4}, attunement:{FAE:0,DREAM:0}, resources:{HP:30,EP:1,AP:2,MOV:5}, startingSkills:["Power Strike","Counter","Weapon Stance"] },
    { name:"Rogue", stats:{STR:5,DEX:8,CON:4,INT:4,WIS:3,CHA:6}, attunement:{FAE:0,DREAM:0}, resources:{HP:22,EP:1,AP:2,MOV:6}, startingSkills:["Backstab","Poisoned Dagger","Camouflage"] },
    { name:"Monk", stats:{STR:6,DEX:7,CON:5,INT:4,WIS:6,CHA:4}, attunement:{FAE:0,DREAM:2}, resources:{HP:27,EP:1,AP:2,MOV:6}, startingSkills:["Counterstrike","Chi Strike","Palm of Flame"] },
    { name:"Shaman", stats:{STR:4,DEX:4,CON:5,INT:5,WIS:7,CHA:4}, attunement:{FAE:2,DREAM:6}, resources:{HP:25,EP:1,AP:2,MOV:4}, startingSkills:["Totem Call","Spirit Bind","Stormsong"] },
    { name:"Warden", stats:{STR:7,DEX:3,CON:9,INT:3,WIS:5,CHA:4}, attunement:{FAE:0,DREAM:0}, resources:{HP:38,EP:1,AP:2,MOV:3}, startingSkills:["Zone Control","Shield Slam","Fortify"] },
    { name:"Engineer", stats:{STR:4,DEX:4,CON:6,INT:7,WIS:5,CHA:3}, attunement:{FAE:0,DREAM:0}, resources:{HP:28,EP:1,AP:2,MOV:4}, startingSkills:["Deploy Turret","Trap","Salvage Duty"] },
    { name:"Necromancer", stats:{STR:3,DEX:4,CON:4,INT:8,WIS:4,CHA:3}, attunement:{FAE:0,DREAM:8}, resources:{HP:22,EP:1,AP:2,MOV:4}, startingSkills:["Raise Skeleton","Fear","Soul Drain"] },
    { name:"Reaper", stats:{STR:6,DEX:7,CON:4,INT:5,WIS:4,CHA:3}, attunement:{FAE:0,DREAM:6}, resources:{HP:24,EP:1,AP:2,MOV:6}, startingSkills:["Shadow Strike","Harvest Soul","Fade Step"] },
    { name:"Symphonist", stats:{STR:4,DEX:5,CON:5,INT:6,WIS:5,CHA:8}, attunement:{FAE:4,DREAM:4}, resources:{HP:26,EP:1,AP:2,MOV:5}, startingSkills:["Harmony Strike","Discordant Wave","Resonance"] },
    { name:"Gunslinger", stats:{STR:5,DEX:8,CON:4,INT:4,WIS:3,CHA:5}, attunement:{FAE:0,DREAM:0}, resources:{HP:22,EP:1,AP:2,MOV:6}, startingSkills:["Trick Shot","Ricochet","Quickdraw"] },
    { name:"Ninja", stats:{STR:5,DEX:9,CON:3,INT:4,WIS:3,CHA:4}, attunement:{FAE:4,DREAM:4}, resources:{HP:20,EP:1,AP:2,MOV:7}, startingSkills:["Smoke Vanish","Kunai Throw","Shadowstep"] },
    { name:"Samurai", stats:{STR:7,DEX:6,CON:6,INT:4,WIS:6,CHA:4}, attunement:{FAE:0,DREAM:2}, resources:{HP:30,EP:1,AP:2,MOV:4}, startingSkills:["Iaido Strike","Discipline Stance","Resolve"] },
    { name:"Pirate", stats:{STR:7,DEX:6,CON:5,INT:4,WIS:3,CHA:6}, attunement:{FAE:0,DREAM:0}, resources:{HP:28,EP:1,AP:2,MOV:5}, startingSkills:["Disarm","Broadside","Rally or Rum"] },
    { name:"Brigadier", stats:{STR:6,DEX:5,CON:8,INT:4,WIS:4,CHA:7}, attunement:{FAE:0,DREAM:0}, resources:{HP:34,EP:1,AP:2,MOV:4}, startingSkills:["Charge","Formation Guard","Tactical Rally"] },
    { name:"Privateer", stats:{STR:6,DEX:7,CON:5,INT:4,WIS:4,CHA:6}, attunement:{FAE:0,DREAM:0}, resources:{HP:27,EP:1,AP:2,MOV:5}, startingSkills:["Boarding Action","Morale Breaker","Naval Tactics"] },
    { name:"Spellblade", stats:{STR:6,DEX:6,CON:5,INT:7,WIS:4,CHA:4}, attunement:{FAE:5,DREAM:2}, resources:{HP:28,EP:1,AP:2,MOV:5}, startingSkills:["Flameblade","Arcane Slash","Elemental Guard"] },
    { name:"Skaldblade", stats:{STR:7,DEX:6,CON:6,INT:4,WIS:4,CHA:7}, attunement:{FAE:0,DREAM:0}, resources:{HP:30,EP:1,AP:2,MOV:5}, startingSkills:["Tempo Strike","Chant Rally","Momentum Slash"] },
    { name:"Essentier", stats:{STR:5,DEX:5,CON:7,INT:7,WIS:4,CHA:3}, attunement:{FAE:0,DREAM:0}, resources:{HP:32,EP:1,AP:2,MOV:4}, startingSkills:["Alchemy Strike","Scrap Bomb","Essence Burn"] },
    { name:"Shadowguard", stats:{STR:6,DEX:7,CON:6,INT:4,WIS:4,CHA:4}, attunement:{FAE:0,DREAM:3}, resources:{HP:30,EP:1,AP:2,MOV:5}, startingSkills:["Swap Places","Intercept","Silent Guard"] },
    { name:"Torchbearer", stats:{STR:7,DEX:5,CON:6,INT:4,WIS:4,CHA:4}, attunement:{FAE:6,DREAM:0}, resources:{HP:29,EP:1,AP:2,MOV:5}, startingSkills:["Ignite","Reveal Shadows","Firebrand"] },
    { name:"Swashbuckler", stats:{STR:6,DEX:8,CON:5,INT:4,WIS:3,CHA:6}, attunement:{FAE:0,DREAM:0}, resources:{HP:28,EP:1,AP:2,MOV:6}, startingSkills:["Taunt","Parry-Riposte","Showboat"] },
    { name:"Riftwarden", stats:{STR:5,DEX:5,CON:6,INT:6,WIS:7,CHA:4}, attunement:{FAE:0,DREAM:8}, resources:{HP:28,EP:1,AP:2,MOV:5}, startingSkills:["Teleport Rift","Banish","Anchor Zone"] },
  ];

  const SKILL_BEHAVIORS = {
    "Taunt":"buffSelfGuard",
    "Shield Wall":"buffSelfGuard",
    "Parry":"buffSelfGuard",
    "Arcane Bolt":"attackRanged",
    "Elemental Blast":"attackRanged",
    "Ward":"buffAllyGuard",
    "Life Leech":"attackLifeSteal",
    "Hex":"attackRanged",
    "Dark Pact":"buffSelfInspire",
    "Snipe":"attackRanged",
    "Volley":"attackRanged",
    "Pinning Shot":"attackRangedRoot",
    "Slipstream Step":"buffSelfInspire",
    "Trap Sense":"buffSelfGuard",
    "Ambush":"attackMelee",
    "Heal":"heal",
    "Turn Undead":"attackRanged",
    "Ward Chant":"buffAllyGuard",
    "Shapeshift":"buffSelfInspire",
    "Entangle":"root",
    "Restorative Wind":"heal",
    "Counter":"buffSelfGuard",
    "Weapon Stance":"buffSelfInspire",
    "Backstab":"attackMelee",
    "Poisoned Dagger":"attackMeleeBleed",
    "Camouflage":"buffSelfGuard",
    "Counterstrike":"buffSelfGuard",
    "Chi Strike":"attackMelee",
    "Palm of Flame":"attackMelee",
    "Totem Call":"buffAllyInspire",
    "Spirit Bind":"attackLifeSteal",
    "Stormsong":"attackRanged",
    "Zone Control":"buffSelfGuard",
    "Shield Slam":"attackMelee",
    "Fortify":"buffAllyGuard",
    "Deploy Turret":"attackRanged",
    "Trap":"root",
    "Salvage Duty":"heal",
    "Raise Skeleton":"attackRanged",
    "Fear":"attackRanged",
    "Soul Drain":"attackLifeSteal",
    "Shadow Strike":"attackMelee",
    "Harvest Soul":"attackLifeSteal",
    "Fade Step":"buffSelfInspire",
    "Harmony Strike":"attackMelee",
    "Discordant Wave":"attackRanged",
    "Resonance":"heal",
    "Trick Shot":"attackRanged",
    "Ricochet":"attackRanged",
    "Quickdraw":"attackRanged",
    "Smoke Vanish":"buffSelfGuard",
    "Kunai Throw":"attackRanged",
    "Shadowstep":"buffSelfInspire",
    "Iaido Strike":"attackMelee",
    "Discipline Stance":"buffSelfGuard",
    "Resolve":"buffSelfGuard",
    "Disarm":"attackMelee",
    "Broadside":"attackRanged",
    "Rally or Rum":"heal",
    "Charge":"attackMelee",
    "Formation Guard":"buffAllyGuard",
    "Tactical Rally":"buffAllyInspire",
    "Boarding Action":"attackMelee",
    "Morale Breaker":"attackMelee",
    "Naval Tactics":"buffAllyInspire",
    "Flameblade":"attackMelee",
    "Arcane Slash":"attackMelee",
    "Elemental Guard":"buffSelfGuard",
    "Tempo Strike":"attackMelee",
    "Chant Rally":"buffAllyInspire",
    "Momentum Slash":"attackMelee",
    "Alchemy Strike":"attackMelee",
    "Scrap Bomb":"attackRanged",
    "Essence Burn":"attackRanged",
    "Swap Places":"swap",
    "Intercept":"buffAllyGuard",
    "Silent Guard":"buffSelfGuard",
    "Ignite":"attackRanged",
    "Reveal Shadows":"buffAllyGuard",
    "Firebrand":"attackMelee",
    "Parry-Riposte":"attackMelee",
    "Showboat":"buffSelfInspire",
    "Teleport Rift":"buffSelfInspire",
    "Banish":"attackRanged",
    "Anchor Zone":"buffAllyGuard"
  };

  const SKILL_MECHANICS = {
    "Taunt":{type:"Command",ep:1,ap:1,range:"2 hex AoE",cooldown:2,effect:"Enemies in range must target the user.",synergy:["Morale","Control"]},
    "Shield Wall":{type:"Defensive",ep:1,ap:1,range:"Self + Adjacent",cooldown:3,effect:"+50% CON and prevents knockback.",synergy:["Defense"]},
    "Parry":{type:"Defensive",ep:1,ap:1,range:"Melee",cooldown:1,effect:"Negate the next melee hit and counter for half damage.",synergy:["Counter"]},
    "Arcane Bolt":{type:"Offensive",ep:1,ap:1,range:"3 hex",cooldown:0,effect:"Deal INT ×1.2 arcane damage.",synergy:["Arcane"]},
    "Elemental Blast":{type:"Offensive",ep:1,ap:2,range:"2 hex AoE",cooldown:3,effect:"Deal INT ×1.5 damage of a random element.",synergy:["Elemental"]},
    "Ward":{type:"Support",ep:1,ap:1,range:"Adjacent Ally",cooldown:2,effect:"Grant +20% RES.",synergy:["Protection"]},
    "Life Leech":{type:"Offensive",ep:1,ap:1,range:"2 hex",cooldown:2,effect:"Deal INT damage and heal for half dealt.",synergy:["Dark","Sustain"]},
    "Hex":{type:"Debuff",ep:1,ap:1,range:"3 hex",cooldown:2,effect:"-2 STR and DEX for 2 turns.",synergy:["Curse"]},
    "Dark Pact":{type:"Special",ep:1,ap:2,range:"Self",cooldown:4,effect:"Lose 5 HP to gain +2 INT for 2 turns.",synergy:["Dark","Pact"]},
    "Snipe":{type:"Offensive",ep:1,ap:2,range:"6 hex",cooldown:2,effect:"Ranged attack that ignores 50% DEF.",synergy:["Ranged"]},
    "Volley":{type:"Offensive",ep:1,ap:2,range:"Line 5 hex",cooldown:3,effect:"Line AoE that excels against 3+ targets.",synergy:["Ranged","AoE"]},
    "Pinning Shot":{type:"Offensive",ep:1,ap:1,range:"4 hex",cooldown:2,effect:"Deal DEX damage and reduce MOV by 2.",synergy:["Control"]},
    "Slipstream Step":{type:"Movement",ep:1,ap:1,range:"Self",cooldown:1,effect:"Move while ignoring zones of control.",synergy:["Mobility"]},
    "Trap Sense":{type:"Passive",ep:0,ap:0,range:"2 hex",cooldown:null,effect:"Reveal nearby traps.",synergy:["Detection"]},
    "Ambush":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:0,effect:"Deal bonus damage if the target has not acted.",synergy:["Stealth","Critical"]},
    "Heal":{type:"Support",ep:1,ap:1,range:"Adjacent Ally",cooldown:2,effect:"Restore WIS ×2 HP.",synergy:["Holy"]},
    "Turn Undead":{type:"Offensive",ep:1,ap:2,range:"3 hex AoE",cooldown:3,effect:"Deal WIS ×1.5 damage to Undead.",synergy:["Holy","Anti-Undead"]},
    "Ward Chant":{type:"Support",ep:1,ap:2,range:"2 hex AoE",cooldown:3,effect:"Allies become immune to debuffs for 1 turn.",synergy:["Holy","Chant"]},
    "Shapeshift":{type:"Special",ep:1,ap:2,range:"Self",cooldown:5,effect:"Transform into wolf (+DEX) or bear (+STR).",synergy:["Nature"]},
    "Entangle":{type:"Control",ep:1,ap:1,range:"3 hex",cooldown:2,effect:"Root the target; MOV becomes 0 for 1 turn.",synergy:["Nature","Root"]},
    "Restorative Wind":{type:"Healing",ep:1,ap:2,range:"2 hex AoE",cooldown:3,effect:"Heal WIS ×1.2 HP and cure Fatigue.",synergy:["Wind"]},
    "Power Strike":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:0,effect:"Deal STR ×1.5 damage with a chance to stagger.",synergy:["Physical"]},
    "Counter":{type:"Defensive",ep:1,ap:1,range:"Self",cooldown:1,effect:"Prepare to counter the next melee hit.",synergy:["Counter"]},
    "Weapon Stance":{type:"Utility",ep:0,ap:0,range:"Self",cooldown:null,effect:"Toggle between +STR or +DEF stance.",synergy:["Stance"]},
    "Backstab":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:0,effect:"Deal bonus damage from behind.",synergy:["Stealth","Critical"]},
    "Poisoned Dagger":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:2,effect:"Deal STR damage and apply Poison for 3 turns.",synergy:["Poison"]},
    "Camouflage":{type:"Stealth",ep:1,ap:1,range:"Self",cooldown:3,effect:"Become hidden until an enemy is adjacent.",synergy:["Stealth"]},
    "Counterstrike":{type:"Defensive",ep:1,ap:1,range:"Self",cooldown:1,effect:"Reflect 50% of melee damage taken.",synergy:["Counter"]},
    "Chi Strike":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:0,effect:"Deal WIS damage and stun.",synergy:["Ki"]},
    "Palm of Flame":{type:"Offensive",ep:1,ap:2,range:"Cone",cooldown:3,effect:"Fire cone damage that ignites terrain.",synergy:["Fire"]},
    "Totem Call":{type:"Utility",ep:1,ap:2,range:"2 hex",cooldown:5,effect:"Summon a Spirit Totem that emits an aura.",synergy:["Spirit"]},
    "Spirit Bind":{type:"Debuff",ep:1,ap:1,range:"3 hex",cooldown:3,effect:"Target loses 1 EP for 1 turn.",synergy:["Spirit"]},
    "Stormsong":{type:"Offensive",ep:1,ap:2,range:"3 hex AoE",cooldown:3,effect:"Deal lightning damage and inflict Shock.",synergy:["Storm"]},
    "Zone Control":{type:"Command",ep:1,ap:1,range:"2 hex aura",cooldown:2,effect:"Enemies moving in range trigger opportunity attacks.",synergy:["Control"]},
    "Shield Slam":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:2,effect:"Deal STR damage and stagger.",synergy:["Stun"]},
    "Fortify":{type:"Defensive",ep:1,ap:1,range:"Self",cooldown:3,effect:"Gain +30% CON for 2 turns.",synergy:["Defense"]},
    "Deploy Turret":{type:"Utility",ep:1,ap:2,range:"2 hex",cooldown:4,effect:"Summon a turret that fires DEX-based shots.",synergy:["Construct"]},
    "Trap":{type:"Utility",ep:1,ap:1,range:"1 hex",cooldown:3,effect:"Place a snare that roots and deals damage.",synergy:["Trap"]},
    "Salvage Duty":{type:"Utility",ep:0,ap:1,range:"Self",cooldown:null,effect:"Collect salvage for extra loot.",synergy:["Resource"]},
    "Raise Skeleton":{type:"Summon",ep:1,ap:2,range:"Adjacent",cooldown:5,effect:"Summon an undead minion.",synergy:["Necro"]},
    "Fear":{type:"Debuff",ep:1,ap:1,range:"3 hex AoE",cooldown:3,effect:"Reduce CHA and morale of enemies.",synergy:["Fear"]},
    "Soul Drain":{type:"Offensive",ep:1,ap:1,range:"2 hex",cooldown:2,effect:"Deal INT damage and reduce WIS.",synergy:["Dark"]},
    "Shadow Strike":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:0,effect:"Deal DEX and DREAM damage.",synergy:["Shadow"]},
    "Harvest Soul":{type:"Offensive",ep:1,ap:2,range:"Melee",cooldown:3,effect:"Deal STR ×1.5 damage and heal for the damage dealt.",synergy:["Dark"]},
    "Fade Step":{type:"Movement",ep:1,ap:1,range:"3 hex",cooldown:2,effect:"Teleport to a shadow tile.",synergy:["Shadow"]},
    "Harmony Strike":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:0,effect:"Deal STR + CHA damage with bonus if an ally is nearby.",synergy:["Harmony"]},
    "Discordant Wave":{type:"Offensive",ep:1,ap:2,range:"2 hex AoE",cooldown:3,effect:"Deal INT damage and inflict Confuse.",synergy:["Chaos"]},
    "Resonance":{type:"Support",ep:1,ap:1,range:"Adjacent Ally",cooldown:2,effect:"Grant +10% damage for 1 turn.",synergy:["Song"]},
    "Trick Shot":{type:"Offensive",ep:1,ap:1,range:"4 hex",cooldown:0,effect:"Ricochet to a second target.",synergy:["Ranged"]},
    "Ricochet":{type:"Offensive",ep:1,ap:2,range:"Line 3 hex",cooldown:2,effect:"Hit up to three enemies in a line.",synergy:["Ranged"]},
    "Quickdraw":{type:"Utility",ep:0,ap:0,range:"Self",cooldown:null,effect:"Always acts first.",synergy:["Speed"]},
    "Smoke Vanish":{type:"Stealth",ep:1,ap:1,range:"Self",cooldown:2,effect:"Become hidden until your next attack.",synergy:["Stealth"]},
    "Kunai Throw":{type:"Offensive",ep:1,ap:1,range:"3 hex",cooldown:0,effect:"Throw a kunai for DEX damage; apply Bleed on crit.",synergy:["Ranged"]},
    "Shadowstep":{type:"Movement",ep:1,ap:1,range:"4 hex",cooldown:2,effect:"Teleport behind an enemy and gain a free strike.",synergy:["Shadow"]},
    "Iaido Strike":{type:"Offensive",ep:1,ap:2,range:"Melee",cooldown:2,effect:"Perform a high-damage opening strike.",synergy:["Duel"]},
    "Discipline Stance":{type:"Utility",ep:0,ap:0,range:"Self",cooldown:null,effect:"Toggle between +DEX or +STR.",synergy:["Stance"]},
    "Resolve":{type:"Support",ep:1,ap:1,range:"Self",cooldown:3,effect:"Become immune to fear and charm.",synergy:["Spirit"]},
    "Disarm":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:2,effect:"Remove the target's weapon for 1 turn.",synergy:["Control"]},
    "Broadside":{type:"Offensive",ep:1,ap:2,range:"Line 3 hex",cooldown:3,effect:"Deal STR damage in a line and knock back.",synergy:["AoE"]},
    "Rally or Rum":{type:"Support",ep:1,ap:1,range:"2 hex AoE",cooldown:3,effect:"Boost morale and cure Fear.",synergy:["Morale"]},
    "Charge":{type:"Offensive",ep:1,ap:2,range:"4 hex line",cooldown:3,effect:"Deal STR ×2 damage and knock back.",synergy:["Cavalry"]},
    "Formation Guard":{type:"Defensive",ep:1,ap:1,range:"Adjacent Allies",cooldown:2,effect:"Grant +DEF to formation allies.",synergy:["Defense"]},
    "Tactical Rally":{type:"Command",ep:1,ap:2,range:"2 hex AoE",cooldown:4,effect:"Allies gain +1 AP for the turn.",synergy:["Command"]},
    "Boarding Action":{type:"Offensive",ep:1,ap:2,range:"2 hex",cooldown:3,effect:"Leap to target, deal STR damage, and disorient.",synergy:["Pirate"]},
    "Morale Breaker":{type:"Debuff",ep:1,ap:1,range:"2 hex AoE",cooldown:3,effect:"Lower CHA and morale of enemies.",synergy:["Morale"]},
    "Naval Tactics":{type:"Passive",ep:0,ap:0,range:"Self",cooldown:null,effect:"Ignore movement penalties from water.",synergy:["Movement"]},
    "Flameblade":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:0,effect:"Imbue weapon with fire for 2 turns.",synergy:["Fire"]},
    "Arcane Slash":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:2,effect:"Deal INT damage and knock back.",synergy:["Arcane"]},
    "Elemental Guard":{type:"Defensive",ep:1,ap:1,range:"Self",cooldown:3,effect:"Resist fire, ice, and lightning.",synergy:["Elemental"]},
    "Tempo Strike":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:0,effect:"Deal STR damage with bonus if a Bard or Dancer is nearby.",synergy:["Rhythm"]},
    "Chant Rally":{type:"Support",ep:1,ap:2,range:"2 hex AoE",cooldown:3,effect:"Raise morale and damage for allies.",synergy:["Chant"]},
    "Momentum Slash":{type:"Offensive",ep:1,ap:2,range:"3 hex line",cooldown:3,effect:"Damage scales with attacks this round.",synergy:["Combo"]},
    "Alchemy Strike":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:0,effect:"Deal random elemental damage.",synergy:["Alchemy"]},
    "Scrap Bomb":{type:"Offensive",ep:1,ap:2,range:"2 hex AoE",cooldown:3,effect:"Explosive AoE that leaves a salvage tile.",synergy:["Alchemy"]},
    "Essence Burn":{type:"Debuff",ep:1,ap:1,range:"3 hex",cooldown:2,effect:"Reduce INT and FAE for 2 turns.",synergy:["Alchemy"]},
    "Swap Places":{type:"Utility",ep:1,ap:1,range:"2 hex",cooldown:2,effect:"Swap positions with an ally.",synergy:["Position"]},
    "Intercept":{type:"Defensive",ep:1,ap:1,range:"2 hex",cooldown:2,effect:"Take damage in place of an ally.",synergy:["Guard"]},
    "Silent Guard":{type:"Stealth",ep:1,ap:1,range:"Self",cooldown:3,effect:"Become hidden and gain DEF.",synergy:["Stealth"]},
    "Ignite":{type:"Offensive",ep:1,ap:1,range:"2 hex",cooldown:2,effect:"Deal fire damage and apply Burn.",synergy:["Fire"]},
    "Reveal Shadows":{type:"Utility",ep:0,ap:0,range:"3 hex AoE",cooldown:null,effect:"Reveal hidden units in the area.",synergy:["Reveal"]},
    "Firebrand":{type:"Offensive",ep:1,ap:2,range:"Cone",cooldown:3,effect:"Fire AoE that ignites terrain.",synergy:["Fire"]},
    "Parry-Riposte":{type:"Offensive",ep:1,ap:1,range:"Melee",cooldown:1,effect:"Block a hit and retaliate instantly.",synergy:["Duel"]},
    "Showboat":{type:"Support",ep:0,ap:1,range:"Self",cooldown:3,effect:"Boost self morale while lowering nearby enemies'.",synergy:["Performance"]},
    "Teleport Rift":{type:"Movement",ep:1,ap:2,range:"5 hex",cooldown:3,effect:"Teleport an ally or self.",synergy:["Rift"]},
    "Banish":{type:"Control",ep:1,ap:2,range:"3 hex",cooldown:3,effect:"Remove the target from the field for 1 turn.",synergy:["Rift"]},
    "Anchor Zone":{type:"Defensive",ep:1,ap:1,range:"2 hex AoE",cooldown:4,effect:"Block teleport or blink within the zone.",synergy:["Rift"]}
  };

  const DEFAULT_NAME_OVERRIDES = {
    Knight:"Tallis (Knight)",
    Archer:"Clover (Archer)"
  };

  const GLYPH_OVERRIDES = {
    Knight:"⚔",
    Magician:"✨",
    Warlock:"☠",
    Archer:"🏹",
    Scout:"🧭",
    Cleric:"✚",
    Druid:"🌿",
    Fighter:"🥊",
    Rogue:"🗡",
    Monk:"🙏",
    Shaman:"🌀",
    Warden:"🛡",
    Engineer:"⚙",
    Necromancer:"💀",
    Reaper:"⚰",
    Symphonist:"🎵",
    Gunslinger:"🔫",
    Ninja:"🥷",
    Samurai:"🥋",
    Pirate:"🏴‍☠️",
    Brigadier:"🎖",
    Privateer:"⚓",
    Spellblade:"✨",
    Skaldblade:"🪕",
    Essentier:"⚗️",
    Shadowguard:"🌑",
    Torchbearer:"🔥",
    Swashbuckler:"🏴",
    Riftwarden:"🌌"
  };

  function skillKey(name){
    return name
      .split(/[^a-zA-Z0-9]+/)
      .filter(Boolean)
      .map(part=>part.charAt(0).toUpperCase()+part.slice(1).toLowerCase())
      .join('');
  }

  function defaultNameFor(name){
    return DEFAULT_NAME_OVERRIDES[name] || name;
  }

  function mechanicsForSkill(name){
    return SKILL_MECHANICS[name] || null;
  }

  function inferRange(entry){
    const rangedRegex = /(Shot|Throw|Bolt|Blast|Gun|Rift|Banish|Kunai|Ricochet|Quickdraw|Broadside|Volley|Snipe|Song|Wave|Wind|Bomb|Ignite|Essence|Spirit|Storm|Anchor|Teleport)/i;
    if(entry.startingSkills.some(skill=>rangedRegex.test(skill))) return 3;
    if(/Magician|Warlock|Cleric|Druid|Shaman|Necromancer|Reaper|Symphonist|Gunslinger|Ninja|Spellblade|Torchbearer|Riftwarden|Engineer|Archer|Scout|Privateer|Pirate/i.test(entry.name)) return 3;
    if(entry.stats.DEX >= 8 || entry.stats.INT >= 7) return 2;
    return 1;
  }

  function computeDerivedStats(entry){
    const { stats, resources, attunement } = entry;
    const maxHp = Math.max(18, Math.round((resources.HP || 20) * 1.5));
    const atk = Math.max(6, Math.round(4 + stats.STR*0.9 + stats.INT*0.45 + stats.DEX*0.35));
    const def = Math.max(4, Math.round(2 + stats.CON*0.9 + stats.WIS*0.35));
    const dream = attunement && typeof attunement.DREAM === 'number' ? attunement.DREAM : 0;
    const spd = Math.max(5, Math.round(3 + stats.DEX*1.05 + dream*0.35));
    const range = inferRange(entry);
    return { maxHp, atk, def, spd, range };
  }

  global.FABLE_DATA = {
    CLASS_DATABASE,
    SKILL_BEHAVIORS,
    SKILL_MECHANICS,
    GLYPH_OVERRIDES,
    defaultNameFor,
    skillKey,
    inferRange,
    computeDerivedStats,
    mechanicsForSkill
  };
})(window);
