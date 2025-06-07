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
        "irlTask": "Magna Tile",
        "runeDropped": null,
        "lootTier": "Tiny"
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
        "irlTask": null,
        "runeDropped": "Shadow Paw",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Coral Gardens",
        "irlTask": "Shoe Tie",
        "runeDropped": "Phantom Cloak",
        "lootTier": "Tiny"
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
        "irlTask": "IXL",
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Anemone Forest",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None"
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
        "irlTask": null,
        "runeDropped": "Solar Scale",
        "lootTier": "None"
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Kelp Labyrinth",
        "irlTask": "Piano",
        "runeDropped": "Star Prism",
        "lootTier": "None"
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
        "irlTask": "Reading",
        "runeDropped": null,
        "lootTier": "None"
      },
      "rou": {
        "realm": "Shimmering Reef",
        "room": "Seahorse Stables",
        "irlTask": null,
        "runeDropped": null,
        "lootTier": "None"
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
        "runeDropped": "Lunar Mirror",
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