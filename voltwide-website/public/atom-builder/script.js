const canvas = document.getElementById('simulation-canvas');
const ctx = canvas.getContext('2d');
const elementName = document.getElementById('element-name');
const elementSymbol = document.getElementById('element-symbol');
const atomicNumber = document.getElementById('atomic-number');
const atomicMass = document.getElementById('atomic-mass');
const protonCount = document.getElementById('proton-count');
const neutronCount = document.getElementById('neutron-count');
const electronCount = document.getElementById('electron-count');
const elementGroup = document.getElementById('element-group');
const elementPeriod = document.getElementById('element-period');
const electronegativityDisplay = document.getElementById('electronegativity');
const valenceElectronsDisplay = document.getElementById('valence-electrons');
const addProtonBtn = document.getElementById('add-proton');
const removeProtonBtn = document.getElementById('remove-proton');
const addNeutronBtn = document.getElementById('add-neutron');
const removeNeutronBtn = document.getElementById('remove-neutron');
const addElectronBtn = document.getElementById('add-electron');
const removeElectronBtn = document.getElementById('remove-electron');
const resetBtn = document.getElementById('reset-btn');
const protonInput = document.getElementById('proton-input');
const neutronInput = document.getElementById('neutron-input');
const electronInput = document.getElementById('electron-input');
const setProtonBtn = document.getElementById('set-proton-btn');
const setNeutronBtn = document.getElementById('set-neutron-btn');
const setElectronBtn = document.getElementById('set-electron-btn');
const elementDescription = document.getElementById('element-description');

let elementLookup = {};
let dataLoaded = false;
let initAttempts = 0;
const MAX_INIT_ATTEMPTS = 5;

function initElementLookup() {
    if (typeof elementsData !== 'undefined' && Array.isArray(elementsData)) {
        console.log('Using elementsData from data.js - found', elementsData.length, 'elements');
        elementsData.forEach(element => {
            if (element && element.atomic_number) {
                elementLookup[element.atomic_number] = element;
            }
        });
        dataLoaded = true;
    } else {
        console.warn('elementsData not available, using fallback element data');
        // Use the built-in elementData as fallback
        for (let i = 1; i <= 20; i++) {
            if (elementData[i]) {
                elementLookup[i] = elementData[i];
            }
        }
    }
    
    console.log('Element lookup initialized with', Object.keys(elementLookup).length, 'elements');
}

// Check if data.js is loaded, try to load it if not
function ensureDataLoaded() {
    if (typeof elementsData === 'undefined' && initAttempts < MAX_INIT_ATTEMPTS) {
        console.log('Data not loaded, attempting to load data.js dynamically (attempt ' + (initAttempts + 1) + ')');
        
        // Try to load data.js dynamically
        const dataScript = document.createElement('script');
        dataScript.src = 'data.js';
        dataScript.onload = function() {
            console.log('data.js loaded dynamically');
            initElementLookup();
            initSimulation();
        };
        dataScript.onerror = function() {
            console.error('Failed to load data.js dynamically');
            initAttempts++;
            
            // Wait and try again
            setTimeout(ensureDataLoaded, 500);
        };
        document.head.appendChild(dataScript);
    } else if (initAttempts >= MAX_INIT_ATTEMPTS) {
        console.warn('Max attempts reached, proceeding with fallback data');
        initElementLookup();
        initSimulation();
    } else {
        initElementLookup();
    }
}

const state = {
    protons: 1,
    neutrons: 1,
    electrons: 1,
    nucleus: { x: 0, y: 0, radius: 0 },
    shells: [],
    particles: {
        protons: [],
        neutrons: [],
        electrons: []
    },
    animation: null,
    maxParticles: 118
};

const elementData = {
    1: { name: 'Hydrogen', symbol: 'H', shells: [1] },
    2: { name: 'Helium', symbol: 'He', shells: [2] },
    3: { name: 'Lithium', symbol: 'Li', shells: [2, 1] },
    4: { name: 'Beryllium', symbol: 'Be', shells: [2, 2] },
    5: { name: 'Boron', symbol: 'B', shells: [2, 3] },
    6: { name: 'Carbon', symbol: 'C', shells: [2, 4] },
    7: { name: 'Nitrogen', symbol: 'N', shells: [2, 5] },
    8: { name: 'Oxygen', symbol: 'O', shells: [2, 6] },
    9: { name: 'Fluorine', symbol: 'F', shells: [2, 7] },
    10: { name: 'Neon', symbol: 'Ne', shells: [2, 8] },
    11: { name: 'Sodium', symbol: 'Na', shells: [2, 8, 1] },
    12: { name: 'Magnesium', symbol: 'Mg', shells: [2, 8, 2] },
    13: { name: 'Aluminum', symbol: 'Al', shells: [2, 8, 3] },
    14: { name: 'Silicon', symbol: 'Si', shells: [2, 8, 4] },
    15: { name: 'Phosphorus', symbol: 'P', shells: [2, 8, 5] },
    16: { name: 'Sulfur', symbol: 'S', shells: [2, 8, 6] },
    17: { name: 'Chlorine', symbol: 'Cl', shells: [2, 8, 7] },
    18: { name: 'Argon', symbol: 'Ar', shells: [2, 8, 8] },
    19: { name: 'Potassium', symbol: 'K', shells: [2, 8, 8, 1] },
    20: { name: 'Calcium', symbol: 'Ca', shells: [2, 8, 8, 2] }
};

const colors = {
    proton: '#ff5252',
    neutron: '#4285f4',
    electron: '#34a853',
    shell: 'rgba(255, 255, 255, 0.2)',
    nucleus: 'rgba(255, 255, 255, 0.05)',
    background: '#0d1117'
};

const sizes = {
    proton: 8,
    neutron: 8,
    electron: 4,
    shellWidth: 1,
    canvas: { width: 500, height: 500 }
};

const shellCapacities = [2, 8, 18, 32, 32, 18, 8];

const groupNames = {
    1: "Alkali Metals",
    2: "Alkaline Earth Metals",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "Boron Group",
    14: "Carbon Group",
    15: "Pnictogens",
    16: "Chalcogens",
    17: "Halogens",
    18: "Noble Gases"
};

const electronegativityValues = {
    1: 2.20,  // H
    2: 0,     // He 
    3: 0.98,  // Li
    4: 1.57,  // Be
    5: 2.04,  // B
    6: 2.55,  // C
    7: 3.04,  // N
    8: 3.44,  // O
    9: 3.98,  // F
    10: 0,    // Ne
    11: 0.93, // Na
    12: 1.31, // Mg
    13: 1.61, // Al
    14: 1.90, // Si
    15: 2.19, // P
    16: 2.58, // S
    17: 3.16, // Cl
    18: 0,    // Ar
    19: 0.82, // K
    20: 1.00, // Ca
    21: 1.36, // Sc
    22: 1.54, // Ti
    23: 1.63, // V
    24: 1.66, // Cr
    25: 1.55, // Mn
    26: 1.83, // Fe
    27: 1.88, // Co
    28: 1.91, // Ni
    29: 1.90, // Cu
    30: 1.65, // Zn
    31: 1.81, // Ga
    32: 2.01, // Ge
    33: 2.18, // As
    34: 2.55, // Se
    35: 2.96, // Br
    36: 0,    // Kr
    37: 0.82, // Rb
    38: 0.95, // Sr
    39: 1.22, // Y
    40: 1.33, // Zr
    41: 1.6,  // Nb
    42: 2.16, // Mo
    43: 1.9,  // Tc
    44: 2.2,  // Ru
    45: 2.28, // Rh
    46: 2.20, // Pd
    47: 1.93, // Ag
    48: 1.69, // Cd
    49: 1.78, // In
    50: 1.96, // Sn
    51: 2.05, // Sb
    52: 2.1,  // Te
    53: 2.66, // I
    54: 0,    // Xe
    55: 0.79, // Cs
    56: 0.89, // Ba
    57: 1.1,  // La
    58: 1.12, // Ce
    59: 1.13, // Pr
    60: 1.14, // Nd
    61: 1.13, // Pm
    62: 1.17, // Sm
    63: 1.2,  // Eu
    64: 1.2,  // Gd
    65: 1.1,  // Tb
    66: 1.22, // Dy
    67: 1.23, // Ho
    68: 1.24, // Er
    69: 1.25, // Tm
    70: 1.1,  // Yb
    71: 1.27, // Lu
    72: 1.3,  // Hf
    73: 1.5,  // Ta
    74: 2.36, // W
    75: 1.9,  // Re
    76: 2.2,  // Os
    77: 2.20, // Ir
    78: 2.28, // Pt
    79: 2.54, // Au
    80: 2.00, // Hg
    81: 1.62, // Tl
    82: 2.33, // Pb
    83: 2.02, // Bi
    84: 2.0,  // Po
    85: 2.2,  // At
    86: 0,    // Rn
    87: 0.7,  // Fr
    88: 0.9,  // Ra
    89: 1.1,  // Ac
    90: 1.3,  // Th
    91: 1.5,  // Pa
    92: 1.38, // U
    93: 1.36, // Np
    94: 1.28, // Pu
    95: 1.3,  // Am
    96: 1.3,  // Cm
    97: 1.3,  // Bk
    98: 1.3,  // Cf
    99: 1.3,  // Es
    100: 1.3, // Fm
    101: 1.3, // Md
    102: 1.3, // No
    103: 1.3, // Lr
    // Elements 104-118 have estimated values
    104: 1.3, // Rf
    105: 1.5, // Db
    106: 1.7, // Sg
    107: 1.7, // Bh
    108: 1.8, // Hs
    109: 1.8, // Mt
    110: 1.9, // Ds
    111: 1.9, // Rg
    112: 1.8, // Cn
    113: 1.7, // Nh
    114: 1.7, // Fl
    115: 1.7, // Mc
    116: 1.6, // Lv
    117: 1.6, // Ts
    118: 0,   // Og (Noble gas, estimated as 0)
};

function getGroupPeriod(atomicNumber) {
    let group = 0;
    let period = 0;
    
    if (atomicNumber === 1) {
        group = 1;
        period = 1;
    } else if (atomicNumber === 2) {
        group = 18;
        period = 1;
    } else if (atomicNumber >= 3 && atomicNumber <= 4) {
        // Li, Be
        group = atomicNumber - 2;
        period = 2;
    } else if (atomicNumber >= 5 && atomicNumber <= 10) {
        // B, C, N, O, F, Ne
        group = atomicNumber + 8;
        period = 2;
    } else if (atomicNumber >= 11 && atomicNumber <= 12) {
        // Na, Mg
        group = atomicNumber - 10;
        period = 3;
    } else if (atomicNumber >= 13 && atomicNumber <= 18) {
        // Al, Si, P, S, Cl, Ar
        group = atomicNumber;
        period = 3;
    } else if (atomicNumber >= 19 && atomicNumber <= 20) {
        // K, Ca
        group = atomicNumber - 18;
        period = 4;
    } else if (atomicNumber >= 21 && atomicNumber <= 30) {
        // Sc to Zn (transition metals)
        group = atomicNumber - 18;
        period = 4;
    } else if (atomicNumber >= 31 && atomicNumber <= 36) {
        // Ga to Kr
        group = atomicNumber - 18;
        period = 4;
    } else if (atomicNumber >= 37 && atomicNumber <= 38) {
        // Rb, Sr
        group = atomicNumber - 36;
        period = 5;
    } else if (atomicNumber >= 39 && atomicNumber <= 48) {
        // Y to Cd (transition metals)
        group = atomicNumber - 36;
        period = 5;
    } else if (atomicNumber >= 49 && atomicNumber <= 54) {
        // In to Xe
        group = atomicNumber - 36;
        period = 5;
    } else if (atomicNumber >= 55 && atomicNumber <= 56) {
        // Cs, Ba
        group = atomicNumber - 54;
        period = 6;
    } else if (atomicNumber === 57) {
        // La
        group = 3;
        period = 6;
    } else if (atomicNumber >= 58 && atomicNumber <= 71) {
        // Ce to Lu (lanthanides)
        group = 3; // Lanthanides shown separate from main table
        period = 6;
    } else if (atomicNumber >= 72 && atomicNumber <= 80) {
        // Hf to Hg (transition metals)
        group = atomicNumber - 68;
        period = 6;
    } else if (atomicNumber >= 81 && atomicNumber <= 86) {
        // Tl to Rn
        group = atomicNumber - 68;
        period = 6;
    } else if (atomicNumber >= 87 && atomicNumber <= 88) {
        // Fr, Ra
        group = atomicNumber - 86;
        period = 7;
    } else if (atomicNumber === 89) {
        // Ac
        group = 3;
        period = 7;
    } else if (atomicNumber >= 90 && atomicNumber <= 103) {
        // Th to Lr (actinides)
        group = 3; 
        period = 7;
    } else if (atomicNumber >= 104 && atomicNumber <= 112) {
        // Rf to Cn (transition metals)
        group = atomicNumber - 100;
        period = 7;
    } else if (atomicNumber >= 113 && atomicNumber <= 118) {
        // Nh to Og
        group = atomicNumber - 100;
        period = 7;
    }
    
    let groupDisplay = group.toString();
    
    if (groupNames[group] && groupNames[group] !== "") {
        groupDisplay += ` (${groupNames[group]})`;
    }
    
    if (atomicNumber === 1) {
        groupDisplay = "1 (Special Position)";
    } else if (atomicNumber >= 58 && atomicNumber <= 71) {
        groupDisplay = "Lanthanide Series";
    } else if (atomicNumber >= 90 && atomicNumber <= 103) {
        groupDisplay = "Actinide Series";
    }
    
    return {
        group: groupDisplay,
        period: period
    };
}

function initCanvas() {
    canvas.width = sizes.canvas.width;
    canvas.height = sizes.canvas.height;
    
    state.nucleus.x = canvas.width / 2;
    state.nucleus.y = canvas.height / 2;

    canvas.style.display = 'block';
    canvas.style.backgroundColor = colors.background;
    
    function resizeCanvas() {
        const containerWidth = canvas.parentElement.clientWidth;
        if (containerWidth < sizes.canvas.width) {
            const scale = containerWidth / sizes.canvas.width;
            canvas.style.width = `${containerWidth}px`;
            canvas.style.height = `${sizes.canvas.height * scale}px`;
        } else {
            canvas.style.width = `${sizes.canvas.width}px`;
            canvas.style.height = `${sizes.canvas.height}px`;
        }
    }
    
    // Initial resize and add listener
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Ensure canvas context is available
    if (!ctx) {
        console.error('Failed to get canvas context');
        const container = canvas.parentElement;
        const error = document.createElement('div');
        error.textContent = 'Canvas rendering not supported. Please try a different browser.';
        error.style.color = 'red';
        error.style.padding = '20px';
        error.style.textAlign = 'center';
        container.appendChild(error);
    }
}

function updateNucleusSize() {
    const particleCount = state.protons + state.neutrons;
    state.nucleus.radius = Math.max(25, Math.pow(particleCount, 1/3) * 8);
}

function calculateShells() {
    state.shells = [];
    if (state.electrons === 0) return;
    
    let remaining = state.electrons;
    let shellElectrons = [];
    
    for (let i = 0; i < shellCapacities.length && remaining > 0; i++) {
        const electronCount = Math.min(remaining, shellCapacities[i]);
        shellElectrons.push(electronCount);
        remaining -= electronCount;
    }
    
    state.shells = shellElectrons.map((electrons, index) => {
        return {
            radius: 60 + (index * 40),
            electrons: electrons,
            electronPositions: []
        };
    });
    
    state.shells.forEach(shell => {
        shell.electronPositions = [];
        for (let i = 0; i < shell.electrons; i++) {
            const angle = (i / Math.max(1, shell.electrons)) * Math.PI * 2;
            shell.electronPositions.push({
                x: state.nucleus.x + Math.cos(angle) * shell.radius,
                y: state.nucleus.y + Math.sin(angle) * shell.radius,
                angle: angle
            });
        }
    });
}

function distributeNuclearParticles() {
    state.particles.protons = [];
    state.particles.neutrons = [];
    
    function getRandomPosition() {
        const r = state.nucleus.radius * Math.cbrt(Math.random());
        const angle = Math.random() * Math.PI * 2;
        const x = state.nucleus.x + r * Math.cos(angle);
        const y = state.nucleus.y + r * Math.sin(angle);
        return { x, y };
    }
    
    for (let i = 0; i < state.protons; i++) {
        state.particles.protons.push(getRandomPosition());
    }
    
    for (let i = 0; i < state.neutrons; i++) {
        state.particles.neutrons.push(getRandomPosition());
    }
}

function calculateValenceElectrons(atomicNumber) {
    if (atomicNumber === 2) return 2; // Helium
    if (atomicNumber === 1) return 1; // Hydrogen
    
    // s and p block
    if (atomicNumber <= 2) {
        return atomicNumber;
    } else if (atomicNumber <= 18) {
        const groupNumber = getGroupPeriod(atomicNumber).group.split(' ')[0];
        if (groupNumber >= 13 && groupNumber <= 18) {
            return groupNumber - 10;
        } else if (groupNumber >= 1 && groupNumber <= 2) {
            return groupNumber;
        }
    } else {
        // other elements
        const groupNumber = parseInt(getGroupPeriod(atomicNumber).group.split(' ')[0]);
        
        // Noble 
        if (groupNumber === 18) return 8;
        
        // Main group 
        if (groupNumber >= 1 && groupNumber <= 2) {
            return groupNumber;
        } else if (groupNumber >= 13 && groupNumber <= 17) {
            return groupNumber - 10;
        }
        
        // Transition metals
        if (groupNumber >= 3 && groupNumber <= 12) {
            return 2; 
        }
        
        // Lanthanides and actinides 
        if ((atomicNumber >= 58 && atomicNumber <= 71) || 
            (atomicNumber >= 90 && atomicNumber <= 103)) {
            return 3;
        }
    }
    
    // Default 
    return 0;
}

function formatElectronegativity(value) {
    // noble
    if (value === 0) return "N/A";
    
    return value.toFixed(2);
}

function updateElementInfo() {
    let element = elementLookup[state.protons];
    if (!element) {
        element = {
            name: state.protons > 0 ? (
                state.protons <= 118 ? `Element ${state.protons}` : 'Unknown Element'
            ) : 'No Element',
            symbol: state.protons <= 118 ? `${state.protons}` : '?',
            description: 'No information available for this element.'
        };
    }
    
    elementName.textContent = element.name;
    elementSymbol.textContent = element.symbol;
    atomicNumber.textContent = state.protons;
    atomicMass.textContent = state.protons + state.neutrons;
    protonCount.textContent = state.protons;
    neutronCount.textContent = state.neutrons;
    electronCount.textContent = state.electrons;
    
    if (elementDescription) {
        elementDescription.textContent = element.description || 'No description available.';
    }
    
    if (elementGroup && elementPeriod) {
        const position = getGroupPeriod(state.protons);
        elementGroup.textContent = position.group;
        elementPeriod.textContent = position.period;
    }
    
    if (electronegativityDisplay) {
        const enValue = electronegativityValues[state.protons] || 0;
        electronegativityDisplay.textContent = formatElectronegativity(enValue);
    }
    
    if (valenceElectronsDisplay) {
        const valenceElectrons = calculateValenceElectrons(state.protons);
        valenceElectronsDisplay.textContent = valenceElectrons;
    }
    
    if (protonInput) protonInput.value = state.protons;
    if (neutronInput) neutronInput.value = state.neutrons;
    if (electronInput) electronInput.value = state.electrons;
    
    removeProtonBtn.disabled = state.protons <= 1;
    removeNeutronBtn.disabled = state.neutrons <= 0;
    removeElectronBtn.disabled = state.electrons <= 0;
    
    addProtonBtn.disabled = state.protons >= state.maxParticles;
    addNeutronBtn.disabled = state.neutrons >= state.maxParticles;
    addElectronBtn.disabled = state.electrons >= state.maxParticles;
}

function draw() {
    // Clear canvas with background color
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw nucleus
    ctx.beginPath();
    ctx.arc(state.nucleus.x, state.nucleus.y, state.nucleus.radius, 0, Math.PI * 2);
    ctx.fillStyle = colors.nucleus;
    ctx.fill();
    
    // Draw electron shells
    state.shells.forEach(shell => {
        ctx.beginPath();
        ctx.arc(state.nucleus.x, state.nucleus.y, shell.radius, 0, Math.PI * 2);
        ctx.strokeStyle = colors.shell;
        ctx.lineWidth = sizes.shellWidth;
        ctx.stroke();
    });
    
    if (state.neutrons + state.protons > 50) {
        if (state.neutrons > 0) {
            ctx.beginPath();
            ctx.arc(state.nucleus.x - state.nucleus.radius * 0.3, state.nucleus.y, state.nucleus.radius * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = colors.neutron;
            ctx.fill();
            
            ctx.fillStyle = 'white';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${state.neutrons}n`, state.nucleus.x - state.nucleus.radius * 0.3, state.nucleus.y);
        }
        
        if (state.protons > 0) {
            ctx.beginPath();
            ctx.arc(state.nucleus.x + state.nucleus.radius * 0.3, state.nucleus.y, state.nucleus.radius * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = colors.proton;
            ctx.fill();
            
            ctx.fillStyle = 'white';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${state.protons}p`, state.nucleus.x + state.nucleus.radius * 0.3, state.nucleus.y);
        }
    } else {
        state.particles.neutrons.forEach(neutron => {
            ctx.beginPath();
            ctx.arc(neutron.x, neutron.y, sizes.neutron, 0, Math.PI * 2);
            ctx.fillStyle = colors.neutron;
            ctx.fill();
        });
        
        state.particles.protons.forEach(proton => {
            ctx.beginPath();
            ctx.arc(proton.x, proton.y, sizes.proton, 0, Math.PI * 2);
            ctx.fillStyle = colors.proton;
            ctx.fill();
        });
    }
    
    state.shells.forEach(shell => {
        shell.electronPositions.forEach(electron => {
            ctx.beginPath();
            ctx.arc(electron.x, electron.y, sizes.electron, 0, Math.PI * 2);
            ctx.fillStyle = colors.electron;
            ctx.fill();
        });
    });
}

function animate() {
    state.shells.forEach(shell => {
        shell.electronPositions.forEach((electron, index) => {
            const speed = 0.005 * (1 + (index % 5) * 0.2);
            electron.angle += speed;
            electron.x = state.nucleus.x + Math.cos(electron.angle) * shell.radius;
            electron.y = state.nucleus.y + Math.sin(electron.angle) * shell.radius;
        });
    });
    
    draw();
    
    state.animation = requestAnimationFrame(animate);
}

function initSimulation() {
    updateNucleusSize();
    calculateShells();
    distributeNuclearParticles();
    updateElementInfo();
    
    if (state.animation) {
        cancelAnimationFrame(state.animation);
    }
    
    draw();
    state.animation = requestAnimationFrame(animate);
}

function addProton() {
    if (state.protons < state.maxParticles) {
        state.protons++;
        initSimulation();
    }
}

function removeProton() {
    if (state.protons > 1) {
        state.protons--;
        initSimulation();
    }
}

function addNeutron() {
    if (state.neutrons < state.maxParticles) {
        state.neutrons++;
        initSimulation();
    }
}

function removeNeutron() {
    if (state.neutrons > 0) {
        state.neutrons--;
        initSimulation();
    }
}

function addElectron() {
    if (state.electrons < state.maxParticles) {
        state.electrons++; 
        initSimulation();
    }
}

function removeElectron() {
    if (state.electrons > 0) {
        state.electrons--;
        initSimulation();
    }
}

function setParticleCount(type, count) {
    count = parseInt(count);
    if (isNaN(count) || count < 0) {
        count = 0;
    }
    
    if (count > state.maxParticles) {
        count = state.maxParticles;
    }
    
    if (type === 'proton' && count < 1) {
        count = 1; 
    }
    
    switch (type) {
        case 'proton':
            state.protons = count;
            break;
        case 'neutron':
            state.neutrons = count;
            break;
        case 'electron':
            state.electrons = count;
            break;
    }
    
    initSimulation();
}

function resetSimulation() {
    state.protons = 1;
    state.neutrons = 1;
    state.electrons = 1;
    initSimulation();
}

// Set up event listeners
function setupEventListeners() {
    addProtonBtn.addEventListener('click', addProton);
    removeProtonBtn.addEventListener('click', removeProton);
    addNeutronBtn.addEventListener('click', addNeutron);
    removeNeutronBtn.addEventListener('click', removeNeutron);
    addElectronBtn.addEventListener('click', addElectron);
    removeElectronBtn.addEventListener('click', removeElectron);
    resetBtn.addEventListener('click', resetSimulation);
    
    if (setProtonBtn) {
        setProtonBtn.addEventListener('click', () => {
            setParticleCount('proton', protonInput.value);
        });
    }
    
    if (setNeutronBtn) {
        setNeutronBtn.addEventListener('click', () => {
            setParticleCount('neutron', neutronInput.value);
        });
    }
    
    if (setElectronBtn) {
        setElectronBtn.addEventListener('click', () => {
            setParticleCount('electron', electronInput.value);
        });
    }
    
    if (protonInput) {
        protonInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                setParticleCount('proton', protonInput.value);
            }
        });
    }
    
    if (neutronInput) {
        neutronInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                setParticleCount('neutron', neutronInput.value);
            }
        });
    }
    
    if (electronInput) {
        electronInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                setParticleCount('electron', electronInput.value);
            }
        });
    }
}

function init() {
    console.log('Initializing atom builder simulation');
    
    // Initialize elements data
    ensureDataLoaded();
    
    // Initialize canvas
    initCanvas();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize the simulation
    initSimulation();
    
    // Force initial draw
    draw();
    
    console.log('Initialization complete');
}

// Wait for DOM content to be loaded before initializing
document.addEventListener('DOMContentLoaded', init);
// Also try window load event as a fallback
window.addEventListener('load', function() {
    if (!state.animation) {
        console.log('Initializing on window load (fallback)');
        init();
    }
}); 