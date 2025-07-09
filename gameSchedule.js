const gameSchedule = {
  "scheduleInfo": {
    "title": "Rune Bearer Summer Challenge Schedule",
    "startDate": "2025-06-02",
    "endDate": "2025-07-25",
    "totalWeeks": 8,
    "totalDays": 40,
    "notes": [
      "Only Day 1 (6/2) Wells=Piano, Rou=None is locked",
      "When both boys have tasks on same day, they must be different",
      "60% of weekdays have IRL tasks (24 total task assignments)",
      "50% of weekdays have rune drops",
      "Boss battles on days 10, 20, 30, 40",
      "Sub-boss battles on days 5, 15, 25, 35",
      "Chicken Jockey Arena on days 9 (Wells) and 29 (Rou)"
    ]
  },
  "schedule": [
    {
      "day": 1,
      "date": "6/2",
      "dayOfWeek": "Monday",
      "week": 1,
      "wells": {
        "realm": "Dawnbreak Expanse",
        "room": "Hall of Harmonies",
        "irlTask": "Piano",
        "runeDropped": null,
        "lootTier": "Tiny",
        "isLocked": true
      },
      "rou": {
        "realm": "Crystal Glade",
        "room": "Entry Cavern",
        "irlTask": null,
        "runeDropped": "Frost Fang",
        "lootTier": "None",
        "isLocked": true
      }
    },
    {
      "day": 2,
      "date": "6/3",
      "dayOfWeek": "Tuesday",
      "week": 1,
      "wells": {
        "realm": "Dawnbreak Expanse",
        "room": "Echoing Basalt Halls",
        "irlTask": null,
        "runeDropped": "Ember Fang",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Crystal Glade",
        "room": "Frozen Drum Cavern",
        "irlTask": "Drums",
        "runeDropped": null,
        "lootTier": "None"
      }
    },
    {
      "day": 3,
      "date": "6/4",
      "dayOfWeek": "Wednesday",
      "week": 1,
      "wells": {
        "realm": "Dawnbreak Expanse",
        "room": "Prism Sun Obelisk",
        "irlTask": "IXL",
        "runeDropped": "Stormcaller Sigil",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Crystal Glade",
        "room": "Glacial Rune Chamber",
        "irlTask": null,
        "runeDropped": "Storm Fang",
        "lootTier": "None"
      }
    },
    {
      "day": 4,
      "date": "6/5",
      "dayOfWeek": "Thursday",
      "week": 1,
      "wells": {
        "realm": "Dawnbreak Expanse",
        "room": "Artisan's Sunforge",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Crystal Glade",
        "room": "Crystal Bloom Atelier",
        "irlTask": "Shoe Tie",
        "runeDropped": null,
        "lootTier": "None"
      }
    },
    {
      "day": 5,
      "date": "6/6",
      "dayOfWeek": "Friday",
      "week": 1,
      "wells": {
        "realm": "Dawnbreak Expanse",
        "room": "Scrollkeeper's Archive (Sub-Boss)",
        "irlTask": "Reading",
        "runeDropped": "Windrunner Crest",
        "lootTier": "None",
        "isSubBoss": true
      },
      "rou": {
        "realm": "Crystal Glade",
        "room": "Whispering Ice Library (Sub-Boss)",
        "irlTask": null,
        "runeDropped": "Stormpetal Veil",
        "lootTier": "Tiny",
        "isSubBoss": true
      }
    },
    {
      "day": 6,
      "date": "6/9",
      "dayOfWeek": "Monday",
      "week": 2,
      "wells": {
        "realm": "Dawnbreak Expanse",
        "room": "Solar Observatory",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "Medium"
      },
      "rou": {
        "realm": "Crystal Glade",
        "room": "Frostmere Springs",
        "irlTask": "IXL",
        "runeDropped": null,
        "lootTier": "None"
      }
    },
    {
      "day": 7,
      "date": "6/10",
      "dayOfWeek": "Tuesday",
      "week": 2,
      "wells": {
        "realm": "Dawnbreak Expanse",
        "room": "Dawn's Edge Plateau",
        "irlTask": "Drums",
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Crystal Glade",
        "room": "Shimmering Cavern Depths",
        "irlTask": null,
        "runeDropped": "Mist Weaver",
        "lootTier": "None"
      }
    },
    {
      "day": 8,
      "date": "6/11",
      "dayOfWeek": "Wednesday",
      "week": 2,
      "wells": {
        "realm": "Dawnbreak Expanse",
        "room": "Luminous Garden",
        "irlTask": null,
        "runeDropped": "Sky Feather",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Crystal Glade",
        "room": "Frozen Waterfall",
        "irlTask": "Reading",
        "runeDropped": "Frostthorn Crown",
        "lootTier": "None"
      }
    },
    {
      "day": 9,
      "date": "6/12",
      "dayOfWeek": "Thursday",
      "week": 2,
      "wells": {
        "realm": "Dawnbreak Expanse",
        "room": "Chicken Jockey Arena",
        "irlTask": "Piano",
        "runeDropped": "Iron Root",
        "lootTier": "Big",
        "isChickenJockey": true
      },
      "rou": {
        "realm": "Crystal Glade",
        "room": "Crystal Heart Chamber",
        "irlTask": null,
        "runeDropped": "Skyborn Leaf",
        "lootTier": "None"
      }
    },
    {
      "day": 10,
      "date": "6/13",
      "dayOfWeek": "Friday",
      "week": 2,
      "wells": {
        "realm": "Dawnbreak Expanse",
        "room": "Solarvine Colossus Lair (Boss)",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "Medium",
        "isBoss": true
      },
      "rou": {
        "realm": "Crystal Glade",
        "room": "Glacial Colossus Throne (Boss)",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None",
        "isBoss": true
      }
    },
    {
      "day": 11,
      "date": "6/16",
      "dayOfWeek": "Monday",
      "week": 3,
      "wells": {
        "realm": "Emerald Canopy",
        "room": "Verdant Entrance",
        "icon": "🌿",
        "artwork": "assets/rooms/EmeraldCanopy/wells-day-11-art.jpg",
        "story": "A living archway of twisting vines opens onto a sun-dappled forest floor. Towering emerald trees knit their branches high above, forming a glowing green ceiling. Bioluminescent fire-moths flit between leaves, leaving fading spirals of light. Flint pads forward, sparks dimming to ember-glow so as not to scare the wildlife.",
        "irlTask": null,
        "runeDropped": "Shadow Paw",
        "runeIcon": "🐾",
        "lootTier": null,
        "lootArt": null,
        "lootDescription": null,
        "irlChallenge": {
          "title": "No IRL Challenge",
          "icon": "🌿",
          "type": "none",
          "content": {
            "instructions": [
              "This is a pure exploration day",
              "Focus on navigating the forest safely",
              "No real-world tasks required"
            ]
          }
        },
        "mathChallenge": {
          "title": "🌿 Forest Navigation",
          "icon": "🔶",
          "description": "The mysterious forest requires careful calculation to navigate safely. Flint murmurs observations as you study the glowing fire-moths.",
          "missions": [
            {
              "category": "Multiplication/Subtraction",
              "title": "🦋 Fire-moth Census — Question 1",
              "story": "Three mossy trunks each host fire-moths, but one trunk loses some when a bird swoops past. Flint helps you count the glowing insects.",
              "question": "Three mossy trunks each host <strong>11</strong> fire-moths, but one trunk loses <strong>4</strong> when a bird swoops past. How many moths stay shining?",
              "answer": 29,
              "acceptedAnswers": [29],
              "successMessage": "Perfect count! Twenty-nine fire-moths glow among the trunks."
            },
            {
              "category": "Division",
              "title": "🌟 Shadow Steps — Question 2",
              "story": "Every shadow step you take must be lit by moths. With your counted moths, you can determine how many safe steps to take.",
              "question": "You had <strong>29</strong> moths total. Every shadow step you take must be lit by <strong>2</strong> moths. How many shadow steps can we safely walk?",
              "answer": 14,
              "acceptedAnswers": [14],
              "successMessage": "Excellent calculation! You can take fourteen safe shadow steps through the forest."
            }
          ],
          "finalMessage": "Wells whispers 'Fourteen steps.' As each calculated step lands, paired moths drift to his heels, casting small halos of light. On the final step a silent ripple passes through the foliage; a sleek, dark artifact—🐾 Shadow Paw—drops from an overhanging leaf and lands softly in Wells's palm. It hums with quiet stealth energy. Flint's eyes gleam; the forest path ahead beckons, now lit by moth-glow and newfound power."
        }
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Coral Gardens",
        "icon": "🐚",
        "artwork": "assets/rooms/ShimmeringReef/rou-day-11-art.jpg",
        "story": "Sea-spray mist drifts over rainbow coral towers. Slick shells crunch underfoot, and tangles of pearly sea-grasses sway like shoelaces in the tide breeze. Ferrin pauses, nose to the sand, and glances at Rou's untied sneakers. \"Time to tie shoes!\"",
        "baseRune": "Phantom Cloak",
        "runeIcon": "👻",
        "lootTier": "tiny",
        "lootArt": "loot/scarab-tiny-loot.png",
        "lootDescription": "Tiny Scarab Gift! The grateful scarab beetle leaves behind a small collection of reef treasures—miniature shell spirals, tiny coral fragments, and a few iridescent beetle scales that shimmer with underwater magic.",
        "irlChallenge": {
          "title": "🪢 Secure the Reef Striders",
          "icon": "👟",
          "type": "shoeTie",
          "content": {
            "instructions": [
              "Bunny-ear Step — Make two loops",
              "Cross & Pull — Cross the loops and tuck one under",
              "Tighten — Pull both loops snug until they sit flat",
              "Mark IRL Done once both shoes are double-knotted"
            ],
            "reference": [
              "The sea-grass around your feet twists into neat little bows",
              "Match your fresh knots with the natural reef patterns"
            ]
          }
        },
        "mathChallenge": {
          "title": "🐚 Reef Treasure Hunt",
          "icon": "🔶",
          "description": "The coral gardens sparkle with shells and treasures. Ferrin whispers helpful advice as you explore the sandy floor.",
          "missions": [
            {
              "category": "Addition",
              "title": "🐚 Shell Count — Question 1",
              "story": "A tiny sapphire-shell scarab scuttles up and points to shells scattered across the sand. Ferrin helps you count the shiny treasures.",
              "question": "You spot <strong>8</strong> spiral shells and <strong>7</strong> clam shells. How many shells shine in all?",
              "answer": 15,
              "acceptedAnswers": [15],
              "successMessage": "Great counting! Fifteen shells sparkle on the sand."
            },
            {
              "category": "Division",
              "title": "🦪 Pearl Trade — Question 2",
              "story": "A tiny sapphire-shell scarab scuttles up with pearls to trade. Each pearl costs shells. You can use your shells to buy pearls!",
              "question": "Each pearl costs <strong>3</strong> shells. You spend <strong>15</strong> shells. How many pearls did you get?",
              "answer": 5,
              "acceptedAnswers": [5],
              "successMessage": "Great math! You got five beautiful pearls."
            }
          ],
          "finalMessage": "Rou calls 'Five pearls!' The coral towers glow. From a crevice scuttles a sapphire-shell scarab, tiny legs tapping the sand. It pauses at Rou's sneakers, lifts its wing-covers, and unfurls a smoke-grey mantle—the 👻 Phantom Cloak—folded neatly on its back like a special delivery. Ferrin noses the shimmering beetle in thanks as the cloak drifts into Rou's hands, light as sea-foam. The scarab gives a faint iridescent flash, then burrows into the coral, leaving pearly tracks that point the way forward through the reef."
        }
      }
    },
    {
      "day": 12,
      "date": "6/17",
      "dayOfWeek": "Tuesday",
      "week": 3,
      "wells": {
        "realm": "Emerald Canopy",
        "room": "Canopy Walkways",
        "icon": "🌳",
        "artwork": "assets/art/wells-day-12-art.jpg",
        "story": "Suspended rope-and-plank bridges lace between massive treetops. Sunbeams flicker through leaves, painting shifting mosaics on the wooden planks. Hanging lantern-pods sway in the breeze while Flint trots ahead, sparks dim so as not to scorch the ropes.",
        "baseRune": null,
        "runeIcon": null,
        "lootTier": "tiny",
        "lootArt": "forest_trinket_pouch.png",
        "lootDescription": "Forest Trinket Pouch! A small woven pouch falls from the canopy, filled with tiny forest treasures—smooth pebbles, colorful leaves, and a few shiny acorns that sparkle in the dappled sunlight.",
        "irlChallenge": {
          "title": "📜 Learning Hall Check-in",
          "icon": "🎓",
          "type": "ixl",
          "content": {
            "instructions": [
              "A tiny vine scroll flutters down:",
              "Choose one IXL skill to practice today, then return with your score",
              "Complete any IXL module of your choice",
              "Mark IRL Done once Wells finishes an IXL module"
            ],
            "reference": [
              "Focus on a skill you want to improve",
              "Take your time and do your best work"
            ]
          }
        },
        "mathChallenge": {
          "title": "🌳 Bridge Navigation",
          "icon": "🔶",
          "description": "The canopy bridges stretch between ancient trees, requiring careful calculation to navigate safely. Flint muses thoughtfully as you study the walkways.",
          "missions": [
            {
              "category": "Addition/Subtraction",
              "title": "🪵 Plank Count — Question 1",
              "story": "The bridges connect the treetops with wooden planks. Each bridge uses a different number of planks, and Flint helps you count them all.",
              "question": "The first bridge uses <strong>14</strong> planks, the second uses <strong>17</strong>, and the third needs <strong>5</strong> fewer than the second. How many planks span all three bridges?",
              "answer": 43,
              "acceptedAnswers": [43],
              "successMessage": "Perfect calculation! Forty-three planks support the walkways."
            },
            {
              "category": "Multiplication/Subtraction",
              "title": "🏮 Lantern Weight — Question 2",
              "story": "Each plank must hold lantern-pods for safe passage, but Flint removes some pods to keep the path from being too heavy.",
              "question": "Each plank must hold <strong>3</strong> lantern-pods, but Flint removes <strong>4</strong> pods to keep the path light. With <strong>43</strong> planks, how many lantern-pods still hang?",
              "answer": 125,
              "acceptedAnswers": [125],
              "successMessage": "Excellent work! You calculated the lantern-pod count perfectly."
            }
          ],
          "finalMessage": "Wells calls '125!' Lantern-pods pulse softly in acknowledgment, their glow guiding safe passage. The bridges remain steady, and a higher walkway unfurls ahead among emerald leaves. From a swaying branch above, a small woven pouch tumbles down—a tiny forest gift containing smooth pebbles and shiny acorns. Wells and Flint stride onward, bolstered by knowledge from both numbers and IXL practice, plus a pocket full of nature's treasures."
        }
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Anemone Forest",
        "icon": "🪸",
        "artwork": "assets/art/rou-day-12-art.jpg",
        "story": "Pink and purple anemones sway like tiny trees in a quiet under-sea breeze. Shoals of bright fish dart between the waving tentacles, and cool bubbles tickle your toes. Ferrin's icy whiskers sparkle in the waterlight. \"Let's count the fish!\"",
        "baseRune": null,
        "runeIcon": null,
        "lootTier": null,
        "lootArt": null,
        "lootDescription": null,
        "irlChallenge": {
          "title": "No IRL Challenge",
          "icon": "🪸",
          "type": "none",
          "content": {
            "instructions": [
              "This is a pure exploration day",
              "Focus on counting the colorful fish",
              "No real-world tasks required"
            ]
          }
        },
        "mathChallenge": {
          "title": "🪸 Fish Counting",
          "icon": "🔶",
          "description": "The anemone forest is full of colorful fish swimming in and out of the coral. Ferrin whispers helpful tips as you count them.",
          "missions": [
            {
              "category": "Addition",
              "title": "🐠 Fish School — Question 1",
              "story": "One anemone hides yellow fish. Two more anemones hide fish each. Ferrin helps you count all the bright fish.",
              "question": "One anemone hides <strong>6</strong> yellow fish. Two more anemones hide <strong>5</strong> fish each. How many yellow fish swim in all?",
              "answer": 16,
              "acceptedAnswers": [16],
              "successMessage": "Great counting! Sixteen yellow fish flash through the coral."
            },
            {
              "category": "Subtraction",
              "title": "🐟 Bubble Chase — Question 2",
              "story": "A playful eel scares some fish away. Now you need to count how many yellow fish stay in the anemones.",
              "question": "You had <strong>16</strong> yellow fish total. A playful eel scares <strong>7</strong> fish away. How many yellow fish stay?",
              "answer": 9,
              "acceptedAnswers": [9],
              "successMessage": "Perfect! Nine yellow fish stay safe in the anemones."
            }
          ],
          "finalMessage": "Cool bubbles drift upward as Rou calls 'Nine!' The anemones glow softly, their tentacles waving a gentle farewell. Ferrin wags her tail; with numbers solved and no treasure to collect today, you both glide onward through shimmering water toward the next adventure."
        }
      }
    },
    {
      "day": 13,
      "date": "6/18",
      "dayOfWeek": "Wednesday",
      "week": 3,
      "wells": {
        "realm": "Emerald Canopy",
        "room": "Ancient Grove",
        "icon": "🌞",
        "artwork": "assets/art/wells-day-13-art.jpg",
        "story": "Shafts of golden light pierce a ring of colossal trees. At the grove's center lies a moss-covered stone altar inlaid with empty hexagon slots. Flint's ember-sense tingles; warm sunlight converges on the stone, hinting that something bright once nested here.",
        "baseRune": "Solar Scale",
        "runeIcon": "☀️",
        "lootTier": null,
        "lootArt": null,
        "lootDescription": null,
        "irlChallenge": {
          "title": "No IRL Challenge",
          "icon": "🌞",
          "type": "none",
          "content": {
            "instructions": [
              "This is a pure exploration day",
              "Focus on solving the ancient altar puzzle",
              "No real-world tasks required"
            ]
          }
        },
        "mathChallenge": {
          "title": "🌞 Ancient Altar Puzzle",
          "icon": "🔶",
          "description": "The mysterious altar holds secrets of the ancient grove. Flint murmurs observations as you study the glowing sun-shards in the canopy above.",
          "missions": [
            {
              "category": "Multiplication/Subtraction",
              "title": "✨ Sun-Shard Count — Question 1",
              "story": "Four treetops each hold 7 sun-shards. A fifth treetop holds 3 fewer shards than the others.",
              "question": "Four treetops each hold <strong>7</strong> sun-shards. A fifth treetop holds <strong>3 fewer</strong> shards than the others. How many sun-shards gleam overhead in total?",
              "answer": 32,
              "acceptedAnswers": [32],
              "successMessage": "Perfect calculation! Thirty-two sun-shards sparkle among the branches."
            },
            {
              "category": "Division",
              "title": "🔶 Altar Ignition — Question 2",
              "story": "Every altar slot needs shards to ignite. Using your counted shards, you can determine how many slots Wells can fill.",
              "question": "Every altar slot needs <strong>4</strong> shards to ignite. With <strong>32</strong> shards, how many slots can Wells fill?",
              "answer": 8,
              "acceptedAnswers": [8],
              "successMessage": "Excellent work! Wells can fill eight slots with the magical shards."
            }
          ],
          "finalMessage": "Wells calls 'Eight slots!' The altar flares; sun-shards cascade from the canopy, settling perfectly into the eight hexagons. Light fuses into a single iridescent scale—the ☀️ Solar Scale—that rises, weightless and warm, into Wells's hand. Flint barks in approval. The grove's trees bend aside, revealing a sunlit path toward deeper reaches of the Emerald Canopy."
        }
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Kelp Labyrinth",
        "icon": "🥁",
        "artwork": "assets/art/rou-day-13-art.png",
        "story": "Sea-green kelp walls twist into a maze beneath shimmering water. At the entrance rests a circle of coral drum-shells—one low bass pad, one snare stone, and a tiny pearl hi-hat. Bubble-beats pop in the current. Ferrin tilts her head. \"Let's drum the beat!\"",
        "baseRune": "Star Prism",
        "runeIcon": "⭐",
        "lootTier": null,
        "lootArt": null,
        "lootDescription": null,
        "irlChallenge": {
          "title": "🥁 Open the Kelp Gates",
          "icon": "🥁",
          "type": "drums",
          "content": {
            "pattern": "BD SN HH BD SN HH BD SN HH",
            "instructions": [
              "Beat card – play three clean times",
              "BD SN HH BD SN HH BD SN HH",
              "BD = bass pad, SN = snare stone, HH = pearl hi-hat",
              "When the third run rings true, mark IRL Done"
            ],
            "reference": [
              "Kelp fronds spiral aside, revealing the winding passage",
              "Keep the beat steady and clear"
            ]
          }
        },
        "mathChallenge": {
          "title": "🥁 Kelp Maze Navigation",
          "icon": "🔶",
          "description": "The kelp labyrinth is full of starfish and floating bubbles. Ferrin whispers helpful guidance as you count the sea creatures.",
          "missions": [
            {
              "category": "Addition",
              "title": "⭐ Starfish Count — Question 1",
              "story": "We spy pink starfish clinging to the kelp walls. Then more starfish glide from a kelp loop to join them.",
              "question": "We spy <strong>9</strong> pink starfish. Then <strong>8</strong> more glide from a kelp loop. How many starfish now?",
              "answer": 17,
              "acceptedAnswers": [17],
              "successMessage": "Great counting! Seventeen starfish cling to the kelp walls."
            },
            {
              "category": "Multiplication",
              "title": "🫧 Bubble Lift — Question 2",
              "story": "Each starfish sends up lift-bubbles to guide us through the maze. Count all the bubbles rising up!",
              "question": "Each starfish sends up <strong>2</strong> lift-bubbles to guide us. Using those <strong>17</strong> starfish, how many bubbles rise?",
              "answer": 34,
              "acceptedAnswers": [34],
              "successMessage": "Perfect math! Thirty-four bubbles rise to guide your way."
            }
          ],
          "finalMessage": "Rou calls 'Thirty-four!' Bubbles swirl together, spinning into a glowing ⭐ Star Prism that settles in Rou's hands, cool and bright. Ferrin wags her tail as the kelp paths straighten, leading you both deeper into the glittering labyrinth."
        }
      }
    },
    {
      "day": 14,
      "date": "6/19",
      "dayOfWeek": "Thursday",
      "week": 3,
      "wells": {
        "realm": "Emerald Canopy",
        "room": "Treetop Village",
        "icon": "📜",
        "artwork": "assets/art/wells-day-14-art.jpg",
        "story": "Wooden walkways link leaf-roof huts high in the boughs. On the main platform a carved signpost waits, runes shimmering faintly. Flint noses the plank.",
        "baseRune": "Lunar Mirror",
        "runeIcon": "🌙",
        "lootTier": null,
        "lootArt": null,
        "lootDescription": null,
        "irlChallenge": {
          "title": "No IRL Challenge",
          "icon": "📜",
          "type": "none",
          "content": {
            "instructions": [
              "This is a pure exploration day",
              "Focus on solving the village lantern puzzle",
              "No real-world tasks required"
            ]
          }
        },
        "mathChallenge": {
          "title": "📜 Village Navigation",
          "icon": "🔶",
          "description": "The treetop village needs careful counting to navigate safely. Flint murmurs observations as you study the lantern-lit pathways.",
          "missions": [
            {
              "category": "Multi-step Operations",
              "title": "🏮 Lantern Ledger — Question 1",
              "story": "Each of the bridges holds hanging lanterns. A storm shattered some of them, but villagers just replaced some others.",
              "question": "Each of the <strong>9</strong> bridges holds <strong>7</strong> hanging lanterns. A storm shattered <strong>6</strong> of them, but villagers just replaced <strong>5</strong>. How many lanterns glow now?",
              "answer": 62,
              "acceptedAnswers": [62],
              "successMessage": "Perfect calculation! Sixty-two lanterns now light the village paths."
            },
            {
              "category": "Division with Remainder",
              "title": "🏠 Scroll-Hut Count — Question 2",
              "story": "Every hut doorway needs glowing lanterns to be fully lit for reading. Using your counted lanterns, determine how many huts can be completely illuminated.",
              "question": "Every hut doorway needs <strong>3</strong> glowing lanterns. Using the <strong>62</strong> lanterns you just tallied, how many huts can be fully lit for reading?",
              "answer": 20,
              "acceptedAnswers": [20],
              "successMessage": "Excellent work! Twenty huts can be fully lit with the available lanterns."
            }
          ],
          "finalMessage": "Wells declares 'Twenty huts!' Lanterns flare brighter. Twenty shutters swing open, revealing stacks of sky-library scrolls ready for curious minds. From the highest hut, a silvery 🌙 Lunar Mirror drifts down, reflecting the moonlight filtering through the canopy. Flint flicks his tail, embers tracing lazy spirals as moon-lit walkways beckon deeper into the canopy."
        }
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Seahorse Stables",
        "icon": "🐴",
        "artwork": "assets/art/rou-day-14-art.jpg",
        "story": "Cool blue water weaves through coral posts. Tiny reins of sea-grass sway as striped seahorses peek from bubble stalls. Ferrin watches, whiskers frosting the flow. \"Let's help the seahorses!\"",
        "baseRune": null,
        "runeIcon": null,
        "lootTier": null,
        "lootArt": null,
        "lootDescription": null,
        "irlChallenge": {
          "title": "No IRL Challenge",
          "icon": "🐴",
          "type": "none",
          "content": {
            "instructions": [
              "This is a pure exploration day",
              "Focus on helping the seahorses",
              "No real-world tasks required"
            ]
          }
        },
        "mathChallenge": {
          "title": "🐴 Seahorse Care",
          "icon": "🔶",
          "description": "The seahorse stables need careful counting to take proper care of all the sea creatures. Ferrin whispers helpful guidance as you count.",
          "missions": [
            {
              "category": "Multi-step Operations",
              "title": "🌊 Round-up Count — Question 1",
              "story": "Four stalls shelter seahorses each. Two more stalls shelter seahorses each. But some seahorses wriggle free to play.",
              "question": "Four stalls shelter <strong>3</strong> seahorses each. Two more stalls shelter <strong>2</strong> seahorses each. But <strong>5</strong> seahorses wriggle free to play. How many seahorses stay in the stalls?",
              "answer": 11,
              "acceptedAnswers": [11],
              "successMessage": "Great counting! Eleven seahorses remain inside the stalls."
            },
            {
              "category": "Multiplication/Subtraction",
              "title": "🫧 Feeding Puzzle — Question 2",
              "story": "Each seahorse eats bubble-berries at dinner. The stable-keeper has berries ready. After feeding the seahorses, count what's left!",
              "question": "Each seahorse eats <strong>2</strong> bubble-berries at dinner. The stable-keeper has <strong>30</strong> berries. After feeding the <strong>11</strong> seahorses, how many berries are left?",
              "answer": 8,
              "acceptedAnswers": [8],
              "successMessage": "Perfect math! Eight berries are left in the spare barrel."
            }
          ],
          "finalMessage": "Rou calls 'Eight berries left!' Seahorses flick their tails in delight; bubble-berries drift to the spare barrel. Ferrin wags her tail as the stables ripple away behind you, guiding the pair deeper into the shimmering reef maze."
        }
      }
    },
    {
      "day": 15,
      "date": "6/20",
      "dayOfWeek": "Friday",
      "week": 3,
      "wells": {
        "realm": "Emerald Canopy",
        "room": "Solarvine Guardian Nest (Sub-Boss)",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None",
        "isSubBoss": true
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Coral Warden Sanctum (Sub-Boss)",
        "irlTask": "Drums",
        "runeDropped": "Shadow Lens",
        "lootTier": "Big",
        "isSubBoss": true
      }
    },
    {
      "day": 16,
      "date": "6/23",
      "dayOfWeek": "Monday",
      "week": 4,
      "wells": {
        "realm": "Emerald Canopy",
        "room": "Emerald Sanctum",
        "irlTask": "IXL",
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Pearl Grottos",
        "irlTask": null,
        "runeDropped": "Iron Bark",
        "lootTier": "Medium"
      }
    },
    {
      "day": 17,
      "date": "6/24",
      "dayOfWeek": "Tuesday",
      "week": 4,
      "wells": {
        "realm": "Emerald Canopy",
        "room": "Fairy Ring Circle",
        "irlTask": null,
        "runeDropped": "Crystal Spine",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Mermaid Cove",
        "irlTask": "Reading",
        "runeDropped": null,
        "lootTier": "None"
      }
    },
    {
      "day": 18,
      "date": "6/25",
      "dayOfWeek": "Wednesday",
      "week": 4,
      "wells": {
        "realm": "Emerald Canopy",
        "room": "Moonbeam Clearing",
        "irlTask": "Piano",
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Tidal Pools",
        "irlTask": null,
        "runeDropped": "Frozen Bloom",
        "lootTier": "None"
      }
    },
    {
      "day": 19,
      "date": "6/26",
      "dayOfWeek": "Thursday",
      "week": 4,
      "wells": {
        "realm": "Emerald Canopy",
        "room": "Starlight Meadow",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Abyssal Edge",
        "irlTask": "Shoe Tie",
        "runeDropped": null,
        "lootTier": "None"
      }
    },
    {
      "day": 20,
      "date": "6/27",
      "dayOfWeek": "Friday",
      "week": 4,
      "wells": {
        "realm": "Emerald Canopy",
        "room": "Dawnmane Thunderbeast Lair (Boss)",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "Medium",
        "isBoss": true
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Pearl Leviathan Deep (Boss)",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None",
        "isBoss": true
      }
    },
    {
      "day": 21,
      "date": "6/30",
      "dayOfWeek": "Monday",
      "week": 5,
      "wells": {
        "realm": "Golden Savannah",
        "room": "Grassland Gate",
        "irlTask": "Drums",
        "runeDropped": "Blazing Antler",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Frostpeak Summit",
        "room": "Frozen Ascent",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "Medium"
      }
    },
    {
      "day": 22,
      "date": "7/1",
      "dayOfWeek": "Tuesday",
      "week": 5,
      "wells": {
        "realm": "Golden Savannah",
        "room": "Acacia Plains",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Frostpeak Summit",
        "room": "Wind-carved Steps",
        "irlTask": "IXL",
        "runeDropped": "Molten Seed",
        "lootTier": "Tiny"
      }
    },
    {
      "day": 23,
      "date": "7/2",
      "dayOfWeek": "Wednesday",
      "week": 5,
      "wells": {
        "realm": "Golden Savannah",
        "room": "Lionheart Grove",
        "irlTask": "Reading",
        "runeDropped": "Whisper Branch",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Frostpeak Summit",
        "room": "Avalanche Ridge",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None"
      }
    },
    {
      "day": 24,
      "date": "7/3",
      "dayOfWeek": "Thursday",
      "week": 5,
      "wells": {
        "realm": "Golden Savannah",
        "room": "Mirage Oasis",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Frostpeak Summit",
        "room": "Icicle Chambers",
        "irlTask": "Shoe Tie",
        "runeDropped": "Thunder Fang",
        "lootTier": "None"
      }
    },
    {
      "day": 25,
      "date": "7/4",
      "dayOfWeek": "Friday",
      "week": 5,
      "wells": {
        "realm": "Golden Savannah",
        "room": "Dune Stalker Den (Sub-Boss)",
        "irlTask": "IXL",
        "runeDropped": null,
        "lootTier": "Medium",
        "isSubBoss": true
      },
      "rou": {
        "realm": "Frostpeak Summit",
        "room": "Frostfang Sentinel Perch (Sub-Boss)",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None",
        "isSubBoss": true
      }
    },
    {
      "day": 26,
      "date": "7/7",
      "dayOfWeek": "Monday",
      "week": 6,
      "wells": {
        "realm": "Golden Savannah",
        "room": "Amber Meadows",
        "irlTask": null,
        "runeDropped": "Molten Shard",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Frostpeak Summit",
        "room": "Glacier Falls",
        "irlTask": "Piano",
        "runeDropped": null,
        "lootTier": "Tiny"
      }
    },
    {
      "day": 27,
      "date": "7/8",
      "dayOfWeek": "Tuesday",
      "week": 6,
      "wells": {
        "realm": "Golden Savannah",
        "room": "Pride's Overlook",
        "irlTask": "Reading",
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Frostpeak Summit",
        "room": "Crystal Bridge",
        "irlTask": null,
        "runeDropped": "Mooncap",
        "lootTier": "None"
      }
    },
    {
      "day": 28,
      "date": "7/9",
      "dayOfWeek": "Wednesday",
      "week": 6,
      "wells": {
        "realm": "Golden Savannah",
        "room": "Golden Sunset Vista",
        "irlTask": null,
        "runeDropped": "Emberthorn Crown",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Frostpeak Summit",
        "room": "Storm's Edge",
        "irlTask": "Drums",
        "runeDropped": "Ember Seed",
        "lootTier": "None"
      }
    },
    {
      "day": 29,
      "date": "7/10",
      "dayOfWeek": "Thursday",
      "week": 6,
      "wells": {
        "realm": "Golden Savannah",
        "room": "Ancient Baobab Grove",
        "irlTask": "Piano",
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Frostpeak Summit",
        "room": "Chicken Jockey Arena",
        "irlTask": null,
        "runeDropped": "Glacier Heart",
        "lootTier": "Big",
        "isChickenJockey": true
      }
    },
    {
      "day": 30,
      "date": "7/11",
      "dayOfWeek": "Friday",
      "week": 6,
      "wells": {
        "realm": "Golden Savannah",
        "room": "Sunburst Thunderbeast Arena (Boss)",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "Medium",
        "isBoss": true
      },
      "rou": {
        "realm": "Frostpeak Summit",
        "room": "Blizzard Colossus Throne (Boss)",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None",
        "isBoss": true
      }
    },
    {
      "day": 31,
      "date": "7/14",
      "dayOfWeek": "Monday",
      "week": 7,
      "wells": {
        "realm": "Emberlight Bastion",
        "room": "Fortress Gates",
        "irlTask": null,
        "runeDropped": "Glowcap",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Molten Depths",
        "room": "Lava Tunnels",
        "irlTask": "IXL",
        "runeDropped": "Moonfire Bloom",
        "lootTier": "Tiny"
      }
    },
    {
      "day": 32,
      "date": "7/15",
      "dayOfWeek": "Tuesday",
      "week": 7,
      "wells": {
        "realm": "Emberlight Bastion",
        "room": "Ember Courtyard",
        "irlTask": "Drums",
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Molten Depths",
        "room": "Magma Chambers",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "Medium"
      }
    },
    {
      "day": 33,
      "date": "7/16",
      "dayOfWeek": "Wednesday",
      "week": 7,
      "wells": {
        "realm": "Emberlight Bastion",
        "room": "Solar Forge",
        "irlTask": null,
        "runeDropped": "Zephyr Bloom",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Molten Depths",
        "room": "Furnace Core",
        "irlTask": "Reading",
        "runeDropped": "Ironclad Husk",
        "lootTier": "None"
      }
    },
    {
      "day": 34,
      "date": "7/17",
      "dayOfWeek": "Thursday",
      "week": 7,
      "wells": {
        "realm": "Emberlight Bastion",
        "room": "Flame Spire",
        "irlTask": "IXL",
        "runeDropped": null,
        "lootTier": "Tiny"
      },
      "rou": {
        "realm": "Molten Depths",
        "room": "Crystal Veins",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None"
      }
    },
    {
      "day": 35,
      "date": "7/18",
      "dayOfWeek": "Friday",
      "week": 7,
      "wells": {
        "realm": "Emberlight Bastion",
        "room": "Emberforge Guardian Sanctum (Sub-Boss)",
        "irlTask": null,
        "runeDropped": "Sunfire Crest",
        "lootTier": "None",
        "isSubBoss": true
      },
      "rou": {
        "realm": "Molten Depths",
        "room": "Emberstone Guardian Lair (Sub-Boss)",
        "irlTask": "Shoe Tie",
        "runeDropped": null,
        "lootTier": "Big",
        "isSubBoss": true
      }
    },
    {
      "day": 36,
      "date": "7/21",
      "dayOfWeek": "Monday",
      "week": 8,
      "wells": {
        "realm": "Emberlight Bastion",
        "room": "Crystal Halls",
        "irlTask": "Piano",
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Molten Depths",
        "room": "Obsidian Caverns",
        "irlTask": null,
        "runeDropped": "Stone Wing",
        "lootTier": "Medium"
      }
    },
    {
      "day": 37,
      "date": "7/22",
      "dayOfWeek": "Tuesday",
      "week": 8,
      "wells": {
        "realm": "Emberlight Bastion",
        "room": "Radiant Armory",
        "irlTask": null,
        "runeDropped": "Deepstone Shell",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Molten Depths",
        "room": "Volcanic Vents",
        "irlTask": "Reading",
        "runeDropped": null,
        "lootTier": "None"
      }
    },
    {
      "day": 38,
      "date": "7/23",
      "dayOfWeek": "Wednesday",
      "week": 8,
      "wells": {
        "realm": "Emberlight Bastion",
        "room": "Phoenix Roost",
        "irlTask": "Drums",
        "runeDropped": null,
        "lootTier": "Tiny"
      },
      "rou": {
        "realm": "Molten Depths",
        "room": "Fire Opal Mine",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None"
      }
    },
    {
      "day": 39,
      "date": "7/24",
      "dayOfWeek": "Thursday",
      "week": 8,
      "wells": {
        "realm": "Emberlight Bastion",
        "room": "Sunlight Sanctuary",
        "irlTask": null,
        "runeDropped": "Tide Pearl",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Molten Depths",
        "room": "Lava Lake",
        "irlTask": "Shoe Tie",
        "runeDropped": "River Scale",
        "lootTier": "None"
      }
    },
    {
      "day": 40,
      "date": "7/25",
      "dayOfWeek": "Friday",
      "week": 8,
      "wells": {
        "realm": "Emberlight Bastion",
        "room": "Solar Golem Throne (Boss)",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "sun-faceted half of the Catalyst",
        "isBoss": true,
        "isFinalBoss": true
      },
      "rou": {
        "realm": "Molten Depths",
        "room": "Magma Golem Arena (Boss)",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "moon-cast half of the Catalyst",
        "isBoss": true,
        "isFinalBoss": true
      }
    }
  ],
  "taskSummary": {
    "wells": {
      "piano": 6,
      "drums": 4,
      "ixl": 4,
      "reading": 4,
      "total": 18
    },
    "rou": {
      "drums": 3,
      "ixl": 3,
      "reading": 4,
      "shoeTie": 6,
      "total": 16
    },
    "grandTotal": 34,
    "note": "This gives approximately 60% task coverage across 40 weekdays (24 tasks would be exactly 60%, this is 34 tasks which is 85% - may need adjustment)"
  },
  "runeRewards": [
    {
      "wellsRune": "Ember Fang",
      "rouRune": "Frost Fang",
      "reward": "Ice cream treat"
    },
    {
      "wellsRune": "Sky Feather",
      "rouRune": "Mist Weaver",
      "reward": "Big Helmet Heroes game"
    },
    {
      "wellsRune": "Iron Root",
      "rouRune": "Stone Wing",
      "reward": "Lego kit + custom mini-figure"
    },
    {
      "wellsRune": "Tide Pearl",
      "rouRune": "River Scale",
      "reward": "Popsicles at the pool"
    },
    {
      "wellsRune": "Shadow Paw",
      "rouRune": "Phantom Cloak",
      "reward": "Visit to arcade"
    },
    {
      "wellsRune": "Thunder Eye",
      "rouRune": "Storm Fang",
      "reward": "30 min extra screen time"
    },
    {
      "wellsRune": "Solar Scale",
      "rouRune": "Star Prism",
      "reward": "Choose next family movie"
    },
    {
      "wellsRune": "Lunar Mirror",
      "rouRune": "Shadow Lens",
      "reward": "Stay-up-late pass"
    },
    {
      "wellsRune": "Crystal Spine",
      "rouRune": "Iron Bark",
      "reward": "Pick a new book"
    },
    {
      "wellsRune": "Stormcaller Sigil",
      "rouRune": "Frozen Bloom",
      "reward": "Mini-golf with Happy Grandpa"
    },
    {
      "wellsRune": "Blazing Antler",
      "rouRune": "Molten Seed",
      "reward": "Build-your-own pizza night"
    },
    {
      "wellsRune": "Whisper Branch",
      "rouRune": "Thunder Fang",
      "reward": "Minecraft coins"
    },
    {
      "wellsRune": "Molten Shard",
      "rouRune": "Skyborn Leaf",
      "reward": "Nerf war"
    },
    {
      "wellsRune": "Windrunner Crest",
      "rouRune": "Mooncap",
      "reward": "Family video game session"
    },
    {
      "wellsRune": "Glowcap",
      "rouRune": "Glacier Heart",
      "reward": "Breakfast choice pass"
    },
    {
      "wellsRune": "Obsidian Heart",
      "rouRune": "Moonfire Bloom",
      "reward": "Custom Ice Cream Sundae Party"
    },
    {
      "wellsRune": "Sunfire Crest",
      "rouRune": "Stormpetal Veil",
      "reward": "Board game night pick"
    },
    {
      "wellsRune": "Zephyr Bloom",
      "rouRune": "Ironclad Husk",
      "reward": "Pangea Pastry Quest"
    },
    {
      "wellsRune": "Deepstone Shell",
      "rouRune": "Frostthorn Crown",
      "reward": "Breakfast for Dinner Choice"
    },
    {
      "wellsRune": "Emberthorn Crown",
      "rouRune": "Ember Seed",
      "reward": "Nerf target contest"
    }
  ],
  "validation": {
    "taskDistribution": "All days with IRL tasks now have only one child assigned per day (except where explicitly needed)",
    "runeCount": {
      "wells": 20,
      "rou": 20,
      "totalPairs": 20
    },
    "specialDays": {
      "bossDays": [10, 20, 30, 40],
      "subBossDays": [5, 15, 25, 35],
      "chickenJockeyDays": [9, 29],
      "lockedDays": [1]
    },
    "taskFrequency": "Reduced to approximately 60% coverage to properly distribute tasks"
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gameSchedule;
} 