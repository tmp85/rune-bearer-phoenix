# SYSTEM CONTEXT — BROTHERS' RUNE QUEST — MASTER BUILD (June 5, 2025)

---

## 🔧 Core Purpose

The Brothers' Rune Quest is a Minecraft-inspired educational dungeon crawler designed for Wells (age 7) and Rou (age 6). The game runs fully client-side as a standalone web app, developed and managed via GitHub commits. The primary build environment is Cursor on the Mac Studio, with production versions deployed via GitHub. The live game runs directly as a web app on a Mac Mini with touchscreen. The system operates independently of DAKboard or Synology.

The Challenge Modules operate as a real-world parallel system directly integrated into the Rune Quest dungeon loop. Each day may include real-world IRL challenges that help drive daily progression.

---

## 🗂️ Key File Structure
- `gameSchedule.js` - Daily progression and rune drops
- `json/runes.json` - Rune data and pairing system
- `rooms/` - Individual room content files
- Main game runs as standalone web app (HTML/JS/CSS)

## 🔧 Technical Notes
- No external dependencies beyond standard web APIs
- Client-side save system using localStorage
- Responsive design for touchscreen interface

---

## 🗺️ Game Structure & Daily Flow

- Start Date: June 2, 2025  
- End Date: July 25, 2025  
- Total Calendar: 8 weeks  
- Total Game Build: **40 rooms per player (80 rooms total)**
- One room unlocks per weekday for each player.
- Wells and Rou run fully separate room paths but stay synced on day count.
- Players may not skip ahead.
- Weekends are reserved for catch-up.
- Admin override allows for manual unlocks during travel or alternate device play.

---

## 🖥️ Save System (As of June 5, 2025)

- Save state is currently device-specific.
- The Mac Mini touchscreen holds its own unique game save state.
- Playing on a different device requires manual override.
- A long-term shared save system may be implemented in future versions.

---

## ⚔️ Room Task Types

Each room may include one or more of the following:

1. **IRL Challenges (one player per day):**
   - Piano Melody Sequences — Play simple melodies as room triggers.
   - Drum Beat Repeats — Repeat designed drum beat patterns.
   - Shoe Tying Trials — Untimed, narrative-based shoe-tying tasks.
   - Trick Shot or Movement Challenges — Physical real-world actions.
   - IXL Challenges — Complete specific IXL modules (exact count determined as designed).
   - Other IRL skills may be assigned as needed.

2. **Math Challenges (In-Room Puzzle Layer):**
   - These are pre-written, hand-designed math questions.
   - No procedural generation; each is designed day-by-day to match the narrative puzzle.
   - Math includes addition, subtraction, early multiplication, resource tracking, and problem-solving tasks.

3. **Narrative Puzzle Elements:**
   - Counting, pattern recognition, sequencing, or word clues fully integrated into lore.
   - Journaling prompts added where appropriate for later recall puzzles.

---

## 🧩 Rune System

- Primary collectible system tied to task and puzzle completion.
- Each player collects their own distinct rune set.
- When both players collect matching rune pairs, real-world rewards are unlocked.
- Rune pair tracking key is always visible on the main game page.
- Rune drops are scheduled and controlled via `gameSchedule.js`, not random.
- Rune data stored in `json/runes.json`.

---

## 🎁 Reward System

- Real-world prizes are tied to paired rune collection.
- Loot drops will appear randomized but are pre-scripted and scheduled.
- No XP system is currently active.
- No cosmetic gear system is active.

---

## 🐺 Flint & Ferrin Companion Abilities

**Flint (Wells Companion):**  
- *Heat-Sense:* Detect hidden magma or redstone veins.
- *Ember Tracking:* Sniffs out heat-locked puzzle triggers.
- *Fetch Leap:* Recovers distant keys, levers, or runes.

**Ferrin (Rou Companion):**  
- *Frost-Step:* Freezes shallow water or mist into crossing paths.
- *Ice-Bound Tracking:* Detects frost-cloaked glyphs.
- *Whisper Sniff:* Reveals hidden doors or floor panels.
- *Rune-Amplified Bark:* Shatters fragile ice barriers when Rou holds an Ice-aligned rune.

---

## 🎮 Realm Structure

### Wells Realms (Warm Path):
1. Dawnbreak Expanse
2. Emerald Canopy
3. Golden Savannah
4. Emberlight Bastion
5. Skyforge Spire
6. Molten Zenith Cavern
7. Solar Cathedral Ruins
8. Celestial Observatory

### Rou Realms (Cool Path):
1. Crystal Glade
2. Shimmering Reef
3. Frostpeak Summit
4. Molten Depths
5. Abyssal Trench
6. Stormbound Isles
7. Glacial Frontier
8. Arcane Vault

---

## 🏹 Boss & Sub-Boss Scheduling

- Sub-bosses occur on days: 5, 15, 25, 35
- Bosses occur on days: 10, 20, 30, 40
- Chicken Jockey Arenas:  
  - Wells — Day 9  
  - Rou — Day 29

- Full daily schedule structure is stored in `gameSchedule.js`.

---

## 🎯 Room & Narrative Design Rules

- Realm-themed environmental flavor integrated into puzzle text.
- Continuous lore breadcrumbs via journal notes, clues, or wall inscriptions.
- Sequential resource tracking across multi-step problems.
- Consistent phrasing for collected items ("You now hold X shards").
- Journaling prompts added for future puzzle recall.
- "What do you do now?" prompts reserved for future logic branches.

---

## 💬 Language Complexity Levels

- **Wells (age 7):**  
  - 6–10 word sentences, limited compound structure.
  - Vocabulary: slightly advanced, e.g. "glimmer," "murmur."

- **Rou (age 6):**  
  - 4–6 word sentences.
  - Strictly common sight words, simple phrasing.

---

## 🏗️ Room Text Format Standard

Each room should follow this flexible structure:

## [Player] — Day X  
Realm: [Realm Name]  
Room: [Room Name]  

[Short Lore: 2–3 sentences to set the scene]

To solve this room:  
1. [Task or puzzle step]  
2. [Optional additional step]  
3. [Optional additional step]  
4. [Optional additional step]

[Outcome text based on completion. If a rune is scheduled: "You find the ___ rune." If no rune drop is scheduled, use an alternate success line such as: "The path opens." or "The crystal hums and the chamber falls silent."]

#runebearers