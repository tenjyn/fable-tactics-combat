# Code Review Findings

## Major Issues

1. **Movement skills mapped to Inspire buff behavior**  
   `Slipstream Step`, `Fade Step`, and `Teleport Rift` are tagged with the `buffSelfInspire` behavior in `SKILL_BEHAVIORS` instead of a movement-focused behavior. 【F:class-data.js†L75-L76】【F:class-data.js†L106-L107】【F:class-data.js†L193-L195】  
   The runtime ability factory only treats `buffSelfInspire` as a self-targeted Inspire status application, so these skills never relocate the unit when invoked. 【F:index.html†L1564-L1573】  
   As written, using any of these “teleport”/movement skills in combat just grants Inspire, which is a functional regression.

2. **Quickdraw registered as a ranged attack**  
   The `Quickdraw` skill is defined as a zero-cost Utility in the raw skill data, but it is registered with the `attackRanged` behavior. 【F:class-data.js†L112-L113】【F:class-data.js†L283-L284】  
   When the UI auto-builds abilities, an `attackRanged` entry resolves to a damaging ranged strike, so Quickdraw incorrectly consumes an attack slot instead of providing its initiative bonus. 【F:index.html†L1475-L1498】

## Minor Issues

3. **Glyph override key mismatch for “Folk Companion”**  
   The glyph override table uses the identifier `FolkCompanion`, but the class database entry is named `Folk Companion` (with a space). 【F:class-data.js†L430-L480】【F:class-data.js†L52-L53】  
   Because glyph lookups are keyed by the exact class name, the override is never applied and the UI falls back to the first-letter glyph for that class. 【F:index.html†L1259-L1264】

