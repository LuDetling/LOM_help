const skills = [
  {
    id: 0,
    title: "Bombe de spore",
    description:
      "Fait exploser la cible 2 fois, infligeant 236% de dégâts chaque fois",
    cd: 7,
    image: "images/skills/SporeBomb.webp",
  },
  {
    id: 1,
    title: "Chapeau de champignon",
    description:
      "Invoque le Couvercle de Champignon, infligeant 644% de dégâts de zone",
    cd: 9,
    image: "images/skills/ShroomCap.webp",
  },
  {
    id: 2,
    title: "Combo de spore",
    description: "Lance 5 spores, chaque spore inflige 115.3% de dégâts",
    cd: 7,
    image: "images/skills/SporeBarrage.webp",
  },
  {
    id: 3,
    title: "Frappe de rocher",
    description:
      "Invoque le locher, infligeant 247% de dégâts à la cible par seconde, pendant 5 secondes",
    cd: 12,
    image: "images/skills/BoulderImpact.webp",
  },
  {
    id: 4,
    title: "Taillis épineux",
    description:
      "Place 1 pièges, infligeant 1750/0 de dégâts par seconde aux ennemis dans les pièges et les ralentissant de 40% pendant 5 secondes",
    cd: 8,
    image: "images/skills/ThornThicket.webp",
  },
  {
    id: 5,
    title: "Tête du champignon",
    description:
      "Inflige 1438% de dégâts à la cible la plus et augmente de 300/0 les dégâts d'ATQ nonnale de soi-même pendant 5 secondes",
    cd: 14,
    image: "images/skills/LeadTheCharge.webp",
  },
  {
    id: 6,
    title: "Enchevêtrement de Lianes",
    description:
      "Place 1 pièges, infligeant 1393% de dégâts aux ennemis dans les pièges et les immobilisant pendant 1 secondes",
    cd: 8,
    image: "images/skills/EntanglingVines.webp",
  },
  {
    id: 7,
    title: "Accélération du champignon",
    description:
      "Inflige 2355% de dégâts à la cible la plus proche et augmente de 30% la vitesse d'ATQ de soi- même pendant 5 secondes",
    cd: 14,
    image: "images/skills/SpeedSurge.webp",
  },
  {
    id: 8,
    title: "Toile tissée par l'araignée",
    description:
      "Invoque l'araignée, infligeant 348% de dégâts de zone par seconde pendant 5 secondes",
    cd: 10,
    image: "images/skills/SpiderWeaver.webp",
  },
  {
    id: 9,
    title: "Chute de l'ananas",
    description:
      "Invoque continuellement 5 ananas, chaque ananas inflige 425% de dégâts de zone",
    cd: 11,
    image: "images/skills/PineapplePlunge.webp",
  },
  {
    id: 10,
    title: "Perle éjectée par la moule",
    description:
      "Invoque la moule, infligeant 16800/0 de dégâts de zone et ralentissant les cibles dans la zone de 40% pendant 5 secondes",
    cd: 11,
    image: "images/skills/PearlRelease.webp",
  },
  {
    id: 11,
    title: "Lianes proliférentes",
    description:
      "Invoque la liane, infligeant 1700% de dégâts de zone, et immobilisant les cibles dans la zone pendant 1 secondes",
    cd: 11,
    image: "images/skills/SprawlingVine.webp",
  },
  {
    id: 12,
    title: "Enquête de chauves-souris",
    description:
      "Invoque la chauves-souris, infligeant 4900/0 de dégâts de zone pendant 5 secondes",
    cd: 15,
    image: "images/skills/BattyTrace.webp",
  },
  {
    id: 13,
    title: "Renaissance de la terre",
    description:
      "Inflige 2711% de dégâts aux cibles, et récupère des PV égaux à 30% des PV max pendant 5 secondes",
    cd: 25,
    image: "images/skills/NaturesRenewal.webp",
  },
  {
    id: 14,
    title: "Couverture de champignon",
    description:
      "Inflige 1777% de dégâts aux cibles, et obtient un bouclier égal à 20% des PV max qui 10 secondes.",
    cd: 19,
    image: "images/skills/ShroomShield.webp",
  },
  {
    id: 15,
    title: "Bombe de durian",
    description:
      "Invoque continuellement 3 Durians, chaque Dulian inflige 977% de dégâts de zone et ralentit les cibles dans la zone de pendant 5 secondes",
    cd: 18,
    image: "images/skills/DurianBomb.webp",
  },
  {
    id: 16,
    title: "Attaque écrasante",
    description:
      "Lance le cactus, infligeant 1824% de dégâts de zone et ralentissant l'ATQ des cibles dans la zone de 200/0 pendant 5 secondes",
    cd: 15,
    image: "images/skills/EasyBreezy.webp",
  },
  {
    id: 17,
    title: "Prenez votre temps",
    description:
      "Lance le cactus, infligeant 18410/0 de dégâts de zone et ralentissant la vitesse d'ATQ des cibles dans la zone de 40% pendant 5 secondes",
    cd: 12,
    image: "images/skills/TakeItSlow.webp",
  },
  {
    id: 18,
    title: "Bombe d'or",
    description:
      "Lance la pièce d'or, infligeant 1559% de dégâts de zone et augmentant les dégâts d'ATQ normale de soi-même de 35% pendant 5 secondes",
    cd: 13,
    image: "images/skills/CoinBomb.webp",
  },
  {
    id: 19,
    title: "Balle de slime",
    description:
      "Invoque Slime, infligeant 1596% de dégâts de one et augmentant les dégâts d'Acolyte de soi- ême de 30% pendant 5 secondes.",
    cd: 13,
    image: "images/skills/SlimeBomb.webp",
  },
  {
    id: 20,
    title: "Bombe de météore",
    description:
      "Invoque le météore, infligeant 1596% de dégâts de zone et augmentant les dégâts de compétence de soi-même de 30% pendant 5 secondes.",
    cd: 13,
    image: "images/skills/MeteorFall.webp",
  },
  {
    id: 21,
    title: "Désarmement",
    description:
      "Éjecte le jet d'eau, infligeant 2682% de dégâts de zone, et désarmant les cibles dans la zone pendant 3 secondes",
    cd: 16,
    image: "images/skills/Disarm.webp",
  },
  {
    id: 22,
    title: "Éblouissement Fascinant",
    description:
      "Éjecte le jet de gaz toxique, infligeant 3134% de dégâts de zone, et étourdissant les cibles dans la zone pendant 1.5 secondes",
    cd: 19,
    image: "images/skills/Dazzled.webp",
  },
  {
    id: 23,
    title: "Grenade Fumigène",
    description:
      "Lance la grenade fumigène, infligeant 2176% de dégâts de zone et augmentant de 30% les dégâts infligés cible dans la zone pendant 5 secondes",
    cd: 13,
    image: "images/skills/SmokeBomb.webp",
  },
  {
    id: 24,
    title: "Mort inconstante",
    description:
      "Invoque le spectre, infligeant 1443% de dégâts. Les spectres peuvent éliminer directement les cibles dont les PV sont infélieurs à 5%.",
    cd: 9,
    image: "images/skills/GrimReaper.webp",
  },
  {
    id: 25,
    title: "Arrivée de l'âme héroïque",
    description:
      "Invoque l'âme héroïque avec une vitesse d'ATQ de 3, chaque ATQ normale de l'âme inflige 152% de dégâts. L'âme persiste pendant 10 secondes et ne peut pas être ciblé.",
    cd: 19,
    image: "images/skills/HeroicDescent.webp",
  },
  {
    id: 26,
    title: "Passage de la tempête",
    description:
      "Invoque la tempête, infligeant 2709% de dégâts de zone et augmentant l'ATQ de pendant 5 secondes",
    cd: 16,
    image: "images/skills/WildGust.webp",
  },
  {
    id: 27,
    title: "Attaque d'éclair",
    description:
      "Invoque l'éclair doré, infligeant 5829% de dégâts et bénéficiant d'une immunité aux dégâts pendant 3 secondes",
    cd: 24,
    image: "images/skills/BlitzAssault.webp",
  },
  {
    id: 28,
    title: "Pénétration de la Lame",
    description:
      "Lance la lame, infligeant 4663% de dégâts et faisant perdre chaque seconde à la cible des PV égaux à 1.5% des PV max pendant 5 secondes",
    cd: 19,
    image: "images/skills/BladePierce.webp",
  },
  {
    id: 29,
    title: "ATQ du double",
    description:
      "Génère un double avant 30% des PV du champignon d'origine qui dure 10 secondes. Chaque ATQ normale inflige 200% de dégâts.",
    cd: 29,
    image: "images/skills/CloneStrike.webp",
  },
  {
    id: 30,
    title: "Coupes des verrous",
    description:
      "Inflige 4663% de dégâts, obtient une réduction des dégâts d'ATQ normale de 200/0 et un bonus d 'ATQ égal à 0.5% des PV actuels pendant 5 secondes",
    cd: 19,
    image: "images/skills/HundredSlashes.webp",
  },
  {
    id: 31,
    title: "Flèche du dieu des vents",
    description:
      "Inflige 2665% de dégâts et ajoute un effet de fragilité à la cible pendant 5 secondes. Pendant la durée de cet effet, inflige 100% de dégâts supplémentaires chaque fois qu'il inflige des dégâts non liés à la compétence à la cible",
    cd: 19,
    image: "images/skills/WindborneArrow.webp",
  },
  {
    id: 32,
    title: "Arrivée de la lune de sang",
    description:
      "Inflige 2098% de dégâts. Après chaque déclenchement, les dégâts du piochain déclenchement de cette compétence augmentent de 50%. Cela peut être accumulé jusqu'à un maximum de 3 fois",
    cd: 8,
    image: "images/skills/CrimsonMoonfall.webp",
  },
  {
    id: 33,
    title: "Chant du dragon",
    description:
      "Inflige 3731% de dégâts, puis, après un délai de secondes, inflige à nouveau des dégâts égaux à 2% des PV max de la cible. Pour chaque réduction des dégâts de 10%, inflige des dégâts cible.",
    cd: 15,
    image: "images/skills/DragonicResonance.webp",
  },
  {
    id: 34,
    title: "Réseau universel",
    description:
      "Inflige 5413% de dégâts, obtient un taux de coup critique de 10%. Pour chaque taux de coup critique de 1%, obtient 3% de dégâts de coup critique supplémentano pendant 5 secondes.",
    cd: 24,
    image: "images/skills/WorldlySnare.webp",
  },
  {
    id: 35,
    title: "Formation d'étoiles de tarot",
    description:
      "Inflige 43300/0 de dégâts, obtient un taux de coup clitique de compétence de 100/0. Pour chaque taux de coup critique de compétence de 1%, obtient 3% de dégâts clitiques de compétence supplémentaires pendant 5 secondes.",
    cd: 19,
    image: "images/skills/StarArray.webp",
  },
];

const pals = [
  {
    title: "Chicken Family",
    image: "images/pals/chicken_family.png",
  },
  {
    title: "Sprite Family",
    image: "images/pals/sprite_family.png",
  },
  {
    title: "Bird Family",
    image: "images/pals/bird_family.png",
  },
  {
    title: "Snail Family",
    image: "images/pals/snail_family.png",
  },
  {
    title: "Panda Family",
    image: "images/pals/panda_family.png",
  },
  {
    title: "Deer Family",
    image: "images/pals/deer_family.png",
  },
  {
    title: "Cat Family",
    image: "images/pals/cat_family.png",
  },
  {
    title: "Snow Sprite Family",
    image: "images/pals/snow_sprite_family.png",
  },
  {
    title: "Cactus Family",
    image: "images/pals/cactus_family.png",
  },
  {
    title: "Banana Family",
    image: "images/pals/banana_family.png",
  },
  {
    title: "Hydrosprite Family",
    image: "images/pals/hydrosprite_family.png",
  },
  {
    title: "Dentifrice",
    image: "images/pals/ultra_clean_fighter.png",
  },
  {
    title: "Dragon Family",
    image: "images/pals/dragon_family.png",
  },
  {
    title: "Aubergine",
    image: "images/pals/ToothpickEggplant.webp",
  },
  {
    title: "Mecha Dragon",
    image: "images/pals/MechaDragon.webp",
  },
  {
    title: "Tortue hipster",
    image: "images/pals/hipster_tortoise.png",
  },
  {
    title: "Chien électrique",
    image: "images/pals/electric_pup.png",
  },
  {
    title: "Renard divin solitaire",
    image: "images/pals/alpine_fox.png",
  },
  {
    title: "Pieuvre de pirate",
    image: "images/pals/pirate_octopus.png",
  },
  {
    title: "Lézard opulent",
    image: "images/pals/wealthy_lizard.png",
  },
];

const notes = ["S", "A", "B", "C", "D", "E", "F"];

const persos = [
  {
    name: "Saint Martiale",
    image: "images/male_martial_sage.png",
    stats:
      "Régénération > Contre-attaque >  Contre-attaque DMG > ATK > DEF > All",
    skills: [
      [skills[13], skills[16], skills[27], skills[28], skills[29], skills[30]],
      [skills[14], skills[23], skills[33]],
      [skills[12], skills[26], skills[31]],
      [
        skills[7],
        skills[17],
        skills[18],
        skills[19],
        skills[21],
        skills[22],
        skills[34],
      ],
      [skills[5], skills[9], skills[15], skills[24], skills[25], skills[35]],
      [skills[4], skills[6], skills[10], skills[11], skills[20]],
      [skills[0], skills[1], skills[2], skills[3], skills[8]],
    ],
    pals: [
      [pals[4], pals[5], pals[15], pals[16]],
      [pals[10], pals[11], pals[13]],
      [pals[12], pals[14], pals[19]],
      [pals[3], pals[7]],
      [pals[0], pals[2], pals[8], pals[17], pals[18]],
      [pals[2], pals[6], pals[9]],
    ],
  },
  {
    name: "Combatant Divin",
    image: "images/male_warbringer.png",
    stats: "Contre-attaque > Contre-attque DMG > ATK > Critique > All",
    skills: [
      [skills[13], skills[16], skills[27], skills[28], skills[29], skills[30]],
      [skills[14], skills[23], skills[33]],
      [skills[12], skills[26], skills[31]],
      [
        skills[7],
        skills[17],
        skills[18],
        skills[19],
        skills[21],
        skills[22],
        skills[34],
      ],
      [skills[5], skills[9], skills[15], skills[24], skills[25], skills[35]],
      [skills[4], skills[6], skills[10], skills[11], skills[20]],
      [skills[0], skills[1], skills[2], skills[3], skills[8]],
    ],
    pals: [
      [pals[4], pals[5], pals[15], pals[16]],
      [pals[10], pals[11], pals[13], pals[14]],
      [pals[8], pals[12], pals[19]],
      [pals[3], pals[7]],
      [pals[0], pals[2], pals[17], pals[18]],
      [pals[2], pals[6], pals[9]],
    ],
  },
  {
    name: "Chasseur Sacré",
    image: "images/male_sacred_hunter.png",
    stats: "Critique > Combo > Critique DMG > ATK > All",
    skills: [
      [skills[27], skills[28], skills[29], skills[31]],
      [skills[13], skills[14], skills[23], skills[30], skills[34]],
      [skills[18], skills[21], skills[22], skills[26]],
      [skills[7], skills[12], skills[16], skills[17], skills[35]],
      [
        skills[5],
        skills[9],
        skills[15],
        skills[24],
        skills[25],
        skills[32],
        skills[33],
      ],
      [skills[4], skills[6], skills[10], skills[11], skills[19], skills[20]],
      [skills[0], skills[1], skills[2], skills[3], skills[8]],
    ],
    pals: [
      [pals[9], pals[12], pals[18]],
      [pals[0], pals[2], pals[5], pals[14]],
      [pals[7], pals[8], pals[15]],
      [pals[3], pals[10], pals[19]],
      [pals[1], pals[6], pals[13], pals[16], pals[17]],
      [pals[4], pals[11]],
    ],
  },
  {
    name: "Empereur de Plumes",
    image: "images/male_plume_monarch.png",
    stats: "Combo > Combo DMG > Critique > ATK > All",
    skills: [
      [skills[27], skills[28], skills[29], skills[31]],
      [skills[13], skills[14], skills[23], skills[30], skills[34]],
      [skills[18], skills[21], skills[22], skills[26]],
      [skills[7], skills[12], skills[16], skills[17], skills[35]],
      [
        skills[5],
        skills[9],
        skills[15],
        skills[24],
        skills[25],
        skills[32],
        skills[33],
      ],
      [skills[4], skills[6], skills[10], skills[11], skills[19], skills[20]],
      [skills[0], skills[1], skills[2], skills[3], skills[8]],
    ],
    pals: [
      [pals[9], pals[12], pals[18]],
      [pals[0], pals[2], pals[5], pals[14]],
      [pals[7], pals[8], pals[15]],
      [pals[3], pals[10], pals[19]],
      [pals[1], pals[6], pals[13], pals[16], pals[17]],
      [pals[4], pals[11]],
    ],
  },
  {
    name: "Prophète",
    image: "images/male_prophet.png",
    stats:
      "Coldown Reduction > Energy Regen > Stun > Skill DMG > Skill crit > All ",
    skills: [
      [skills[23], skills[27], skills[28], skills[29]],
      [skills[13], skills[14], skills[22], skills[30], skills[32], skills[35]],
      [skills[20], skills[21], skills[26]],
      [skills[12], skills[16], skills[17]],
      [skills[9], skills[15], skills[24], skills[25], skills[33], skills[34]],
      [skills[4], skills[6], skills[10], skills[11]],
      [
        skills[0],
        skills[1],
        skills[2],
        skills[3],
        skills[5],
        skills[7],
        skills[8],
        skills[18],
        skills[19],
      ],
    ],
    pals: [
      [pals[2], pals[10], pals[12], pals[15], pals[17]],
      [pals[1], pals[5]],
      [pals[6], pals[7]],
      [pals[3], pals[8], pals[14]],
      [pals[13], pals[16], pals[18], pals[19]],
      [pals[0], pals[4], pals[9], pals[11]],
    ],
  },
  {
    name: "Roi démon",
    image: "images/male_darklord.png",
    stats: "Skill Crit Rate > Skill DMG > Skill Crit DMG > All",
    skills: [
      [skills[23], skills[27], skills[28], skills[29]],
      [skills[13], skills[14], skills[22], skills[30], skills[32], skills[35]],
      [skills[20], skills[21], skills[26]],
      [skills[12], skills[16], skills[17]],
      [skills[9], skills[15], skills[24], skills[25], skills[33], skills[34]],
      [skills[4], skills[6], skills[10], skills[11]],
      [
        skills[0],
        skills[1],
        skills[2],
        skills[3],
        skills[5],
        skills[7],
        skills[8],
        skills[18],
        skills[19],
      ],
    ],
    pals: [
      [pals[2], pals[10], pals[12], pals[15], pals[17]],
      [pals[1], pals[5]],
      [pals[6], pals[7], pals[14]],
      [pals[3], pals[8]],
      [pals[13], pals[16], pals[18], pals[19]],
      [pals[0], pals[4], pals[9], pals[11]],
    ],
  },
];
