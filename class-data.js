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
    GLYPH_OVERRIDES,
    defaultNameFor,
    skillKey,
    inferRange,
    computeDerivedStats
  };
})(window);
