const elementsData = [
  {
    atomic_number: 1,
    symbol: 'H',
    name: 'Hydrogen',
    description: 'The lightest element and most abundant chemical substance in the universe. It has one proton and one electron.',
    shell_configuration: [1, 0, 0]
  },
  {
    atomic_number: 2,
    symbol: 'He',
    name: 'Helium',
    description: 'The second-lightest element. Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas.',
    shell_configuration: [2, 0, 0]
  },
  {
    atomic_number: 3,
    symbol: 'Li',
    name: 'Lithium',
    description: 'A soft, silvery-white alkali metal. Under standard conditions, it is the lightest metal and the lightest solid element.',
    shell_configuration: [2, 1, 0]
  },
  {
    atomic_number: 4,
    symbol: 'Be',
    name: 'Beryllium',
    description: 'A relatively rare element in the universe. It is a divalent element which only occurs naturally in combination with other elements.',
    shell_configuration: [2, 2, 0]
  },
  {
    atomic_number: 5,
    symbol: 'B',
    name: 'Boron',
    description: 'A chemical element with properties between those of carbon and aluminum. Boron is produced entirely by cosmic ray spallation.',
    shell_configuration: [2, 3, 0]
  },
  {
    atomic_number: 6,
    symbol: 'C',
    name: 'Carbon',
    description: 'The 15th most abundant element in the Earth\'s crust. Carbon is the fourth most abundant element in the universe by mass after hydrogen, helium, and oxygen.',
    shell_configuration: [2, 4, 0]
  },
  {
    atomic_number: 7,
    symbol: 'N',
    name: 'Nitrogen',
    description: 'At standard temperature and pressure, two atoms of nitrogen combine to form nitrogen gas (N₂), which is a colorless and odorless diatomic gas.',
    shell_configuration: [2, 5, 0]
  },
  {
    atomic_number: 8,
    symbol: 'O',
    name: 'Oxygen',
    description: 'A highly reactive nonmetal, oxygen readily forms oxides with most elements as well as with other compounds.',
    shell_configuration: [2, 6, 0]
  },
  {
    atomic_number: 9,
    symbol: 'F',
    name: 'Fluorine',
    description: 'The lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. It is the most electronegative element.',
    shell_configuration: [2, 7, 0]
  },
  {
    atomic_number: 10,
    symbol: 'Ne',
    name: 'Neon',
    description: 'A colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.',
    shell_configuration: [2, 8, 0]
  },
  {
    atomic_number: 11,
    symbol: 'Na',
    name: 'Sodium',
    description: 'A soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table.',
    shell_configuration: [2, 8, 1]
  },
  {
    atomic_number: 12,
    symbol: 'Mg',
    name: 'Magnesium',
    description: 'A shiny gray solid which bears a close physical resemblance to the other five elements in the second column of the periodic table.',
    shell_configuration: [2, 8, 2]
  },
  {
    atomic_number: 13,
    symbol: 'Al',
    name: 'Aluminum',
    description: 'A silvery-white, soft, non-magnetic and ductile metal. Aluminum is the third most abundant element in the Earth\'s crust.',
    shell_configuration: [2, 8, 3]
  },
  {
    atomic_number: 14,
    symbol: 'Si',
    name: 'Silicon',
    description: 'A hard and brittle crystalline solid with a blue-grey metallic lustre. It is a tetravalent metalloid and semiconductor.',
    shell_configuration: [2, 8, 4]
  },
  {
    atomic_number: 15,
    symbol: 'P',
    name: 'Phosphorus',
    description: 'A multivalent nonmetal of the nitrogen group. Phosphorus is essential for life and exists in several forms.',
    shell_configuration: [2, 8, 5]
  },
  {
    atomic_number: 16,
    symbol: 'S',
    name: 'Sulfur',
    description: 'An abundant, multivalent non-metal. Under normal conditions, sulfur atoms form cyclic octatomic molecules with a chemical formula S₈.',
    shell_configuration: [2, 8, 6]
  },
  {
    atomic_number: 17,
    symbol: 'Cl',
    name: 'Chlorine',
    description: 'A yellow-green gas at room temperature. It is in the halogen group and is the second lightest halogen after fluorine.',
    shell_configuration: [2, 8, 7]
  },
  {
    atomic_number: 18,
    symbol: 'Ar',
    name: 'Argon',
    description: 'A chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas.',
    shell_configuration: [2, 8, 8]
  },
  {
    atomic_number: 19,
    symbol: 'K',
    name: 'Potassium',
    description: 'A chemical element with symbol K and atomic number 19. Potassium is a silvery-white metal that is soft enough to be cut with a knife.',
    shell_configuration: [2, 8, 8, 1]
  },
  {
    atomic_number: 20,
    symbol: 'Ca',
    name: 'Calcium',
    description: 'An alkaline earth metal, calcium is a reactive metal that forms a dark oxide-nitride layer when exposed to air.',
    shell_configuration: [2, 8, 8, 2]
  },
  {
    atomic_number: 21,
    symbol: 'Sc',
    name: 'Scandium',
    description: 'A silvery-white metallic d-block element, it has historically been classified as a rare-earth element.',
    shell_configuration: [2, 8, 9, 2]
  },
  {
    atomic_number: 22,
    symbol: 'Ti',
    name: 'Titanium',
    description: 'A lustrous transition metal with a silver color, low density, and high strength. Resistant to corrosion.',
    shell_configuration: [2, 8, 10, 2]
  },
  {
    atomic_number: 23,
    symbol: 'V',
    name: 'Vanadium',
    description: 'A hard, silvery-grey, ductile, and malleable transition metal. It is found in about 65 different minerals.',
    shell_configuration: [2, 8, 11, 2]
  },
  {
    atomic_number: 24,
    symbol: 'Cr',
    name: 'Chromium',
    description: 'A steely-grey, lustrous, hard and brittle transition metal. The metal is valued for its high corrosion resistance.',
    shell_configuration: [2, 8, 13, 1]
  },
  {
    atomic_number: 25,
    symbol: 'Mn',
    name: 'Manganese',
    description: 'A silvery-gray metal that resembles iron. It is hard and very brittle, difficult to fuse, but easy to oxidize.',
    shell_configuration: [2, 8, 13, 2]
  },
  {
    atomic_number: 26,
    symbol: 'Fe',
    name: 'Iron',
    description: 'A metal in the first transition series. It is by mass the most common element on Earth, forming much of Earth\'s outer and inner core.',
    shell_configuration: [2, 8, 14, 2]
  },
  {
    atomic_number: 27,
    symbol: 'Co',
    name: 'Cobalt',
    description: 'A lustrous, hard, silver-gray metal. A ferromagnetic transition metal with properties similar to iron and nickel.',
    shell_configuration: [2, 8, 15, 2]
  },
  {
    atomic_number: 28,
    symbol: 'Ni',
    name: 'Nickel',
    description: 'A silvery-white lustrous metal with a slight golden tinge. It is hard and ductile, and is one of four elements that are ferromagnetic.',
    shell_configuration: [2, 8, 16, 2]
  },
  {
    atomic_number: 29,
    symbol: 'Cu',
    name: 'Copper',
    description: 'A soft, malleable, and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface has a pinkish-orange color.',
    shell_configuration: [2, 8, 18, 1]
  },
  {
    atomic_number: 30,
    symbol: 'Zn',
    name: 'Zinc',
    description: 'A slightly brittle metal at room temperature with a silvery-greyish appearance when oxidation is removed.',
    shell_configuration: [2, 8, 18, 2]
  },
  {
    atomic_number: 31,
    symbol: 'Ga',
    name: 'Gallium',
    description: 'A soft, silvery metal that becomes liquid at just above room temperature. It occurs in trace amounts in bauxite and zinc ores.',
    shell_configuration: [2, 8, 18, 3]
  },
  {
    atomic_number: 32,
    symbol: 'Ge',
    name: 'Germanium',
    description: 'A lustrous, hard-brittle, grayish-white metalloid in the carbon group. It is a semiconductor widely used in transistors and integrated circuits.',
    shell_configuration: [2, 8, 18, 4]
  },
  {
    atomic_number: 33,
    symbol: 'As',
    name: 'Arsenic',
    description: 'A metalloid that exists in many allotropes, with the most common being metallic gray, yellow, and black. It is notorious for its toxicity.',
    shell_configuration: [2, 8, 18, 5]
  },
  {
    atomic_number: 34,
    symbol: 'Se',
    name: 'Selenium',
    description: 'A non-metal with properties between those of sulfur and tellurium. It is rarely found in its elemental state in nature.',
    shell_configuration: [2, 8, 18, 6]
  },
  {
    atomic_number: 35,
    symbol: 'Br',
    name: 'Bromine',
    description: 'The third-lightest halogen that is a fuming red-brown liquid at room temperature, which evaporates readily to form a similarly colored gas.',
    shell_configuration: [2, 8, 18, 7]
  },
  {
    atomic_number: 36,
    symbol: 'Kr',
    name: 'Krypton',
    description: 'A colorless, odorless, tasteless noble gas that occurs in trace amounts in the atmosphere. It is used in some types of lighting.',
    shell_configuration: [2, 8, 18, 8]
  },
  {
    atomic_number: 37,
    symbol: 'Rb',
    name: 'Rubidium',
    description: 'A very soft, silvery-white metal that is highly reactive. It is the second most electropositive element and ignites spontaneously in air.',
    shell_configuration: [2, 8, 18, 8, 1]
  },
  {
    atomic_number: 38,
    symbol: 'Sr',
    name: 'Strontium',
    description: 'A soft, silvery metal that burns in air to produce strontium oxide. It is best known for the bright red color it gives to flames.',
    shell_configuration: [2, 8, 18, 8, 2]
  },
  {
    atomic_number: 39,
    symbol: 'Y',
    name: 'Yttrium',
    description: 'A silvery-metallic transition metal that is relatively stable in air. It is used in making phosphors for color television tubes.',
    shell_configuration: [2, 8, 18, 9, 2]
  },
  {
    atomic_number: 40,
    symbol: 'Zr',
    name: 'Zirconium',
    description: 'A lustrous, gray-white, strong transition metal that resembles hafnium and titanium. It is highly resistant to corrosion.',
    shell_configuration: [2, 8, 18, 10, 2]
  },
  {
    atomic_number: 41,
    symbol: 'Nb',
    name: 'Niobium',
    description: 'A soft, grey, ductile transition metal. It is often found in pyrochlore and columbite minerals.',
    shell_configuration: [2, 8, 18, 12, 1]
  },
  {
    atomic_number: 42,
    symbol: 'Mo',
    name: 'Molybdenum',
    description: 'A silvery metal with a gray cast. It has the sixth-highest melting point of any element and is used in high-strength alloys.',
    shell_configuration: [2, 8, 18, 13, 1]
  },
  {
    atomic_number: 43,
    symbol: 'Tc',
    name: 'Technetium',
    description: 'The lightest element whose isotopes are all radioactive. It was the first artificially produced element.',
    shell_configuration: [2, 8, 18, 13, 2]
  },
  {
    atomic_number: 44,
    symbol: 'Ru',
    name: 'Ruthenium',
    description: 'A rare transition metal belonging to the platinum group. It is inert to most chemicals and has a high resistance to wear and corrosion.',
    shell_configuration: [2, 8, 18, 15, 1]
  },
  {
    atomic_number: 45,
    symbol: 'Rh',
    name: 'Rhodium',
    description: 'A rare, silvery-white, hard, corrosion-resistant, and chemically inert transition metal. It is a noble metal in the platinum group.',
    shell_configuration: [2, 8, 18, 16, 1]
  },
  {
    atomic_number: 46,
    symbol: 'Pd',
    name: 'Palladium',
    description: 'A rare and lustrous silvery-white metal that resembles platinum. It has the lowest melting point and is the least dense of the platinum group metals.',
    shell_configuration: [2, 8, 18, 18]
  },
  {
    atomic_number: 47,
    symbol: 'Ag',
    name: 'Silver',
    description: 'A soft, white, lustrous transition metal with the highest electrical conductivity of any element and the highest thermal conductivity of any metal.',
    shell_configuration: [2, 8, 18, 18, 1]
  },
  {
    atomic_number: 48,
    symbol: 'Cd',
    name: 'Cadmium',
    description: 'A soft, bluish-white metal that is highly toxic. It is often used in rechargeable batteries and for electroplating.',
    shell_configuration: [2, 8, 18, 18, 2]
  },
  {
    atomic_number: 49,
    symbol: 'In',
    name: 'Indium',
    description: 'A soft, malleable, and easily fusible post-transition metal. It is used in flat-panel displays and touchscreens.',
    shell_configuration: [2, 8, 18, 18, 3]
  },
  {
    atomic_number: 50,
    symbol: 'Sn',
    name: 'Tin',
    description: 'A silvery-white, malleable post-transition metal that is not easily oxidized in air and resists corrosion. It is used in many alloys.',
    shell_configuration: [2, 8, 18, 18, 4]
  },
  {
    atomic_number: 51,
    symbol: 'Sb',
    name: 'Antimony',
    description: 'A lustrous grey metalloid, it is found in nature mainly as the sulfide mineral stibnite. It is used in flame-retardants and alloys.',
    shell_configuration: [2, 8, 18, 18, 5]
  },
  {
    atomic_number: 52,
    symbol: 'Te',
    name: 'Tellurium',
    description: 'A brittle, mildly toxic, rare, silver-white metalloid which looks similar to tin. It is used in alloys and as a semiconductor.',
    shell_configuration: [2, 8, 18, 18, 6]
  },
  {
    atomic_number: 53,
    symbol: 'I',
    name: 'Iodine',
    description: 'A dark-purple, lustrous nonmetal that sublimes to form a purple gas. It is the heaviest essential element used widely by life forms.',
    shell_configuration: [2, 8, 18, 18, 7]
  },
  {
    atomic_number: 54,
    symbol: 'Xe',
    name: 'Xenon',
    description: 'A colorless, dense, odorless noble gas found in the Earth\'s atmosphere in trace amounts. It is used in flash lamps and arc lamps.',
    shell_configuration: [2, 8, 18, 18, 8]
  },
  {
    atomic_number: 55,
    symbol: 'Cs',
    name: 'Cesium',
    description: 'A soft, silvery-golden alkali metal with a melting point of 28.5 °C. It is one of only five metals that are liquid at or near room temperature.',
    shell_configuration: [2, 8, 18, 18, 8, 1]
  },
  {
    atomic_number: 56,
    symbol: 'Ba',
    name: 'Barium',
    description: 'A soft, silvery alkaline earth metal. It is never found in nature in its pure form due to its reactivity with air.',
    shell_configuration: [2, 8, 18, 18, 8, 2]
  },
  {
    atomic_number: 57,
    symbol: 'La',
    name: 'Lanthanum',
    description: 'A soft, ductile, silvery-white metal that tarnishes rapidly when exposed to air. It is the first element in the lanthanide series.',
    shell_configuration: [2, 8, 18, 18, 9, 2]
  },
  {
    atomic_number: 58,
    symbol: 'Ce',
    name: 'Cerium',
    description: 'A soft, silvery, ductile metal which easily oxidizes in air. It is the most abundant of the rare earth elements.',
    shell_configuration: [2, 8, 18, 19, 9, 2]
  },
  {
    atomic_number: 59,
    symbol: 'Pr',
    name: 'Praseodymium',
    description: 'A soft, silvery, malleable and ductile metal, valued for its magnetic, electrical, chemical, and optical properties.',
    shell_configuration: [2, 8, 18, 21, 8, 2]
  },
  {
    atomic_number: 60,
    symbol: 'Nd',
    name: 'Neodymium',
    description: 'A soft silvery metal that tarnishes in air. It is used to create strong permanent magnets and is a component in neodymium-iron-boron magnets.',
    shell_configuration: [2, 8, 18, 22, 8, 2]
  },
  {
    atomic_number: 61,
    symbol: 'Pm',
    name: 'Promethium',
    description: 'A rare radioactive metal that glows blue-green in the dark. It is one of only two radioactive elements that are followed by stable elements.',
    shell_configuration: [2, 8, 18, 23, 8, 2]
  },
  {
    atomic_number: 62,
    symbol: 'Sm',
    name: 'Samarium',
    description: 'A moderately hard silvery metal that readily oxidizes in air. It is used in magnets, catalysts, and medicine.',
    shell_configuration: [2, 8, 18, 24, 8, 2]
  },
  {
    atomic_number: 63,
    symbol: 'Eu',
    name: 'Europium',
    description: 'A moderately hard, silvery metal which readily oxidizes in air and water. It is used in phosphors for screens and fluorescent lamps.',
    shell_configuration: [2, 8, 18, 25, 8, 2]
  },
  {
    atomic_number: 64,
    symbol: 'Gd',
    name: 'Gadolinium',
    description: 'A silvery-white, malleable, and ductile rare earth metal with excellent magnetic properties. It is used in MRI machines.',
    shell_configuration: [2, 8, 18, 25, 9, 2]
  },
  {
    atomic_number: 65,
    symbol: 'Tb',
    name: 'Terbium',
    description: 'A silvery-white, rare earth metal that is malleable, ductile, and soft enough to be cut with a knife. It is used in phosphors and solid-state devices.',
    shell_configuration: [2, 8, 18, 27, 8, 2]
  },
  {
    atomic_number: 66,
    symbol: 'Dy',
    name: 'Dysprosium',
    description: 'A rare earth element with a metallic, bright silver luster. It has many useful properties and is used in various high-tech applications.',
    shell_configuration: [2, 8, 18, 28, 8, 2]
  },
  {
    atomic_number: 67,
    symbol: 'Ho',
    name: 'Holmium',
    description: 'A relatively soft and malleable silvery-white metal. It has the highest magnetic strength of any element and is used in nuclear reactors.',
    shell_configuration: [2, 8, 18, 29, 8, 2]
  },
  {
    atomic_number: 68,
    symbol: 'Er',
    name: 'Erbium',
    description: 'A silvery-white solid metal when artificially isolated. It is usually found together with other rare earth elements and is often harder to find.',
    shell_configuration: [2, 8, 18, 30, 8, 2]
  },
  {
    atomic_number: 69,
    symbol: 'Tm',
    name: 'Thulium',
    description: 'A bright, silvery luster that can be cut with a knife and is malleable. It is the least abundant of the naturally occurring rare earth elements.',
    shell_configuration: [2, 8, 18, 31, 8, 2]
  },
  {
    atomic_number: 70,
    symbol: 'Yb',
    name: 'Ytterbium',
    description: 'A soft, malleable silvery metal that reacts with water and is easily oxidized in air. It is used in improving the grain refinement, strength, and other properties of stainless steel.',
    shell_configuration: [2, 8, 18, 32, 8, 2]
  },
  {
    atomic_number: 71,
    symbol: 'Lu',
    name: 'Lutetium',
    description: 'A silvery white metal that resists corrosion in dry air but not in moist air. It is the last element in the lanthanide series.',
    shell_configuration: [2, 8, 18, 32, 9, 2]
  },
  {
    atomic_number: 72,
    symbol: 'Hf',
    name: 'Hafnium',
    description: 'A lustrous, silvery gray, tetravalent transition metal. Its properties are similar to zirconium and it is found in many zirconium minerals.',
    shell_configuration: [2, 8, 18, 32, 10, 2]
  },
  {
    atomic_number: 73,
    symbol: 'Ta',
    name: 'Tantalum',
    description: 'A rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant. It is part of the refractory metals group.',
    shell_configuration: [2, 8, 18, 32, 11, 2]
  },
  {
    atomic_number: 74,
    symbol: 'W',
    name: 'Tungsten',
    description: 'A rare metal found naturally on Earth almost exclusively in chemical compounds. It has the highest melting point of all the elements.',
    shell_configuration: [2, 8, 18, 32, 12, 2]
  },
  {
    atomic_number: 75,
    symbol: 'Re',
    name: 'Rhenium',
    description: 'A silvery-gray, heavy, third-row transition metal. It has one of the highest melting points of all elements.',
    shell_configuration: [2, 8, 18, 32, 13, 2]
  },
  {
    atomic_number: 76,
    symbol: 'Os',
    name: 'Osmium',
    description: 'A hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores.',
    shell_configuration: [2, 8, 18, 32, 14, 2]
  },
  {
    atomic_number: 77,
    symbol: 'Ir',
    name: 'Iridium',
    description: 'A very hard, brittle, silvery-white transition metal of the platinum group. It is the second-densest element and is the most corrosion-resistant metal.',
    shell_configuration: [2, 8, 18, 32, 15, 2]
  },
  {
    atomic_number: 78,
    symbol: 'Pt',
    name: 'Platinum',
    description: 'A dense, malleable, ductile, highly unreactive, precious, silverish-white transition metal. It is one of the rarer elements in Earth\'s crust.',
    shell_configuration: [2, 8, 18, 32, 17, 1]
  },
  {
    atomic_number: 79,
    symbol: 'Au',
    name: 'Gold',
    description: 'A bright, slightly reddish yellow, dense, soft, malleable, and ductile metal. It is one of the least reactive chemical elements.',
    shell_configuration: [2, 8, 18, 32, 18, 1]
  },
  {
    atomic_number: 80,
    symbol: 'Hg',
    name: 'Mercury',
    description: 'A heavy, silvery d-block element. It is the only metallic element that is liquid at standard conditions for temperature and pressure.',
    shell_configuration: [2, 8, 18, 32, 18, 2]
  },
  {
    atomic_number: 81,
    symbol: 'Tl',
    name: 'Thallium',
    description: 'A soft gray post-transition metal that is not found free in nature. It is highly toxic and was historically used in rat poisons and insecticides.',
    shell_configuration: [2, 8, 18, 32, 18, 3]
  },
  {
    atomic_number: 82,
    symbol: 'Pb',
    name: 'Lead',
    description: 'A heavy metal that is denser than most common materials. It is soft and malleable, and also has a relatively low melting point.',
    shell_configuration: [2, 8, 18, 32, 18, 4]
  },
  {
    atomic_number: 83,
    symbol: 'Bi',
    name: 'Bismuth',
    description: 'A brittle metal with a pinkish hue. It is the most naturally diamagnetic element, and has one of the lowest values of thermal conductivity.',
    shell_configuration: [2, 8, 18, 32, 18, 5]
  },
  {
    atomic_number: 84,
    symbol: 'Po',
    name: 'Polonium',
    description: 'A rare and highly radioactive metal with no stable isotopes. It was discovered by Marie Curie and Pierre Curie in 1898.',
    shell_configuration: [2, 8, 18, 32, 18, 6]
  },
  {
    atomic_number: 85,
    symbol: 'At',
    name: 'Astatine',
    description: 'The rarest naturally occurring element in the Earth\'s crust. All its isotopes are short-lived; the most stable is astatine-210, with a half-life of 8.1 hours.',
    shell_configuration: [2, 8, 18, 32, 18, 7]
  },
  {
    atomic_number: 86,
    symbol: 'Rn',
    name: 'Radon',
    description: 'A radioactive, colorless, odorless, tasteless noble gas. It is one of the densest substances that remains a gas under normal conditions.',
    shell_configuration: [2, 8, 18, 32, 18, 8]
  },
  {
    atomic_number: 87,
    symbol: 'Fr',
    name: 'Francium',
    description: 'The second-least electronegative element, behind only cesium, and is the second rarest naturally occurring element. All isotopes of francium are highly unstable.',
    shell_configuration: [2, 8, 18, 32, 18, 8, 1]
  },
  {
    atomic_number: 88,
    symbol: 'Ra',
    name: 'Radium',
    description: 'A highly radioactive metal that glows blue in the dark. It was discovered by Marie and Pierre Curie in 1898.',
    shell_configuration: [2, 8, 18, 32, 18, 8, 2]
  },
  {
    atomic_number: 89,
    symbol: 'Ac',
    name: 'Actinium',
    description: 'A soft, silvery-white radioactive metal. It is the first element of the actinide series and was discovered in 1899.',
    shell_configuration: [2, 8, 18, 32, 18, 9, 2]
  },
  {
    atomic_number: 90,
    symbol: 'Th',
    name: 'Thorium',
    description: 'A weakly radioactive actinide metal with a silvery appearance. It is used in nuclear reactions and was named after Thor, the Norse god of thunder.',
    shell_configuration: [2, 8, 18, 32, 18, 10, 2]
  },
  {
    atomic_number: 91,
    symbol: 'Pa',
    name: 'Protactinium',
    description: 'A dense, silvery-gray actinide metal that tarnishes slowly in air. It is superconductive at low temperatures.',
    shell_configuration: [2, 8, 18, 32, 20, 9, 2]
  },
  {
    atomic_number: 92,
    symbol: 'U',
    name: 'Uranium',
    description: 'A silvery-white metal in the actinide series. It is weakly radioactive because all isotopes of uranium are unstable.',
    shell_configuration: [2, 8, 18, 32, 21, 9, 2]
  },
  {
    atomic_number: 93,
    symbol: 'Np',
    name: 'Neptunium',
    description: 'A radioactive actinide metal, first synthesized in 1940. It is named after the planet Neptune.',
    shell_configuration: [2, 8, 18, 32, 22, 9, 2]
  },
  {
    atomic_number: 94,
    symbol: 'Pu',
    name: 'Plutonium',
    description: 'A radioactive actinide metal with a silvery-gray appearance. It is used in nuclear weapons and some spacecraft power sources.',
    shell_configuration: [2, 8, 18, 32, 24, 8, 2]
  },
  {
    atomic_number: 95,
    symbol: 'Am',
    name: 'Americium',
    description: 'A radioactive synthetic element that is silvery-white and tarnishes slowly in air. It is used in smoke detectors.',
    shell_configuration: [2, 8, 18, 32, 25, 8, 2]
  },
  {
    atomic_number: 96,
    symbol: 'Cm',
    name: 'Curium',
    description: 'A radioactive actinide element first synthesized in 1944. It was named after Marie and Pierre Curie.',
    shell_configuration: [2, 8, 18, 32, 25, 9, 2]
  },
  {
    atomic_number: 97,
    symbol: 'Bk',
    name: 'Berkelium',
    description: 'A radioactive actinide element first synthesized at the University of California, Berkeley in 1949.',
    shell_configuration: [2, 8, 18, 32, 27, 8, 2]
  },
  {
    atomic_number: 98,
    symbol: 'Cf',
    name: 'Californium',
    description: 'A radioactive actinide element that was first synthesized at the University of California, Berkeley in 1950.',
    shell_configuration: [2, 8, 18, 32, 28, 8, 2]
  },
  {
    atomic_number: 99,
    symbol: 'Es',
    name: 'Einsteinium',
    description: 'A synthetic element with the symbol Es and atomic number 99. It was named after Albert Einstein.',
    shell_configuration: [2, 8, 18, 32, 29, 8, 2]
  },
  {
    atomic_number: 100,
    symbol: 'Fm',
    name: 'Fermium',
    description: 'A synthetic element with the symbol Fm and atomic number 100. It was named after Enrico Fermi.',
    shell_configuration: [2, 8, 18, 32, 30, 8, 2]
  },
  {
    atomic_number: 101,
    symbol: 'Md',
    name: 'Mendelevium',
    description: 'A synthetic element with the symbol Md and atomic number 101. It was named after Dmitri Mendeleev.',
    shell_configuration: [2, 8, 18, 32, 31, 8, 2]
  },
  {
    atomic_number: 102,
    symbol: 'No',
    name: 'Nobelium',
    description: 'A synthetic actinide with the symbol No and atomic number 102. It was named after Alfred Nobel.',
    shell_configuration: [2, 8, 18, 32, 32, 8, 2]
  },
  {
    atomic_number: 103,
    symbol: 'Lr',
    name: 'Lawrencium',
    description: 'A synthetic element with the symbol Lr and atomic number 103. It was named after Ernest Lawrence and is the final member of the actinide series.',
    shell_configuration: [2, 8, 18, 32, 32, 8, 3]
  },
  {
    atomic_number: 104,
    symbol: 'Rf',
    name: 'Rutherfordium',
    description: 'A synthetic element with the symbol Rf and atomic number 104. It is named after Ernest Rutherford and is the first transactinide element.',
    shell_configuration: [2, 8, 18, 32, 32, 10, 2]
  },
  {
    atomic_number: 105,
    symbol: 'Db',
    name: 'Dubnium',
    description: 'A synthetic element with the symbol Db and atomic number 105. It is named after the city of Dubna, Russia.',
    shell_configuration: [2, 8, 18, 32, 32, 11, 2]
  },
  {
    atomic_number: 106,
    symbol: 'Sg',
    name: 'Seaborgium',
    description: 'A synthetic element with the symbol Sg and atomic number 106. It is named after Glenn T. Seaborg, a Nobel Prize-winning American nuclear chemist.',
    shell_configuration: [2, 8, 18, 32, 32, 12, 2]
  },
  {
    atomic_number: 107,
    symbol: 'Bh',
    name: 'Bohrium',
    description: 'A synthetic element with the symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr.',
    shell_configuration: [2, 8, 18, 32, 32, 13, 2]
  },
  {
    atomic_number: 108,
    symbol: 'Hs',
    name: 'Hassium',
    description: 'A synthetic element with the symbol Hs and atomic number 108. It is named after the German state of Hesse where it was discovered.',
    shell_configuration: [2, 8, 18, 32, 32, 14, 2]
  },
  {
    atomic_number: 109,
    symbol: 'Mt',
    name: 'Meitnerium',
    description: 'A synthetic element with the symbol Mt and atomic number 109. It is named after Austrian physicist Lise Meitner.',
    shell_configuration: [2, 8, 18, 32, 32, 15, 2]
  },
  {
    atomic_number: 110,
    symbol: 'Ds',
    name: 'Darmstadtium',
    description: 'A synthetic element with the symbol Ds and atomic number 110. It is named after Darmstadt, Germany, where it was discovered.',
    shell_configuration: [2, 8, 18, 32, 32, 17, 1]
  },
  {
    atomic_number: 111,
    symbol: 'Rg',
    name: 'Roentgenium',
    description: 'A synthetic element with the symbol Rg and atomic number 111. It is named after Wilhelm Röntgen, the discoverer of X-rays.',
    shell_configuration: [2, 8, 18, 32, 32, 18, 1]
  },
  {
    atomic_number: 112,
    symbol: 'Cn',
    name: 'Copernicium',
    description: 'A synthetic element with the symbol Cn and atomic number 112. It is named after astronomer Nicolaus Copernicus.',
    shell_configuration: [2, 8, 18, 32, 32, 18, 2]
  },
  {
    atomic_number: 113,
    symbol: 'Nh',
    name: 'Nihonium',
    description: 'A synthetic element with the symbol Nh and atomic number 113. It is named after Japan (Nihon in Japanese).',
    shell_configuration: [2, 8, 18, 32, 32, 18, 3]
  },
  {
    atomic_number: 114,
    symbol: 'Fl',
    name: 'Flerovium',
    description: 'A synthetic element with the symbol Fl and atomic number 114. It is named after the Flerov Laboratory in Dubna, Russia.',
    shell_configuration: [2, 8, 18, 32, 32, 18, 4]
  },
  {
    atomic_number: 115,
    symbol: 'Mc',
    name: 'Moscovium',
    description: 'A synthetic element with the symbol Mc and atomic number 115. It is named after the Moscow region where the Joint Institute for Nuclear Research is located.',
    shell_configuration: [2, 8, 18, 32, 32, 18, 5]
  },
  {
    atomic_number: 116,
    symbol: 'Lv',
    name: 'Livermorium',
    description: 'A synthetic element with the symbol Lv and atomic number 116. It is named after Lawrence Livermore National Laboratory in the United States.',
    shell_configuration: [2, 8, 18, 32, 32, 18, 6]
  },
  {
    atomic_number: 117,
    symbol: 'Ts',
    name: 'Tennessine',
    description: 'A synthetic element with the symbol Ts and atomic number 117. It is named after the state of Tennessee in the United States.',
    shell_configuration: [2, 8, 18, 32, 32, 18, 7]
  },
  {
    atomic_number: 118,
    symbol: 'Og',
    name: 'Oganesson',
    description: 'A synthetic element with the symbol Og and atomic number 118. It was named after Russian nuclear physicist Yuri Oganessian.',
    shell_configuration: [2, 8, 18, 32, 32, 18, 8]
  }
]; 