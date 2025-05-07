//***********************
//******HOME PAGE********
//***********************



function scrollToInfo() {
    window.scrollBy({ top: 110 * 8, behavior: 'smooth' }); 
}

function scrollToAbout() {
    window.scrollBy({ top:  230 * 9, behavior: 'smooth' }); 
}

function scrollToMore() {
    window.scrollBy({ top: 350 * 9 , behavior: 'smooth' }); 
}

function scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startTest(){
    document.getElementById('menu').style.display = 'none';
}


//********************* 
//********Quiz*********
//********************* 

function startQuiz() {
    document.getElementById('quizInfo').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('quizRemainder').style.display = 'none';
    document.getElementById('body').style.overflowY = 'hidden';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('quiz').style.top = '350%';
    document.getElementById('quizStart').style.display = 'none';
 }


function nextSlide(current) {
    document.getElementById(`slide${current}`).style.display = "none";
    const next = document.getElementById(`slide${current + 1}`);
    if (next) next.style.display = "block";
}


function showResults(event) {
    event.preventDefault();
    evaluateQuiz();
    return false;
}

//ÜBERPRÜFEN

function evaluateQuiz() {
    const correctAnswers = {
        q1: "b",
        q2: "b",
        q3: "a",
        q4: "b",
        q5: "c"
    };

    let score = 0;
    let total = Object.keys(correctAnswers).length;

    for (let key in correctAnswers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === correctAnswers[key]) {
            score++;
        }
    }

    // Quiz ausblenden und Resultat anzeigen
    document.getElementById("quiz").style.display = "none";
    document.getElementById("quizRemainder").style.display = "block";
    document.getElementById("quizResults").innerHTML = `${score}/ 5 correct`;
}


//********************* 
//****CHARACTER PAGE***
//********************* 

let characterIntel = [
    {
        name: "Airbender",
        art:"./media/Figures/Artistry/AirbenderArt.webp",
        profile: "./media/Figures/Characters/Airbender.gif",
        hp: 5,
        armor: 7,
        mainAttack: "Qian-kun Punch",
        passiveAbility: "Qi-gong Median: Airbender's barehanded attack deals 3 instances of consecutive damage and release a conical Qi-gong wave which inflicts AoE damage, exclusive to this character.",
        specialAbility: "Pulsating Blow: Dash forward and perform a charged fist blow, releasing a powerful blast of Qi along the direction of your movement.",
        abilityImg: "./media/Figures/Skills&Weapons/AirbenderAbility.png"
    },
    {
        name: "Assassin",
        art:"./media/Figures/Artistry/AssassinArt.webp",

        profile: "./media/Figures/Characters/Assassin.gif",
        hp: 5,
        armor: 5,
        mainAttack: "Blood Blade",
        passiveAbility: "Meelee weapons can bounce bullets",
        specialAbility: "Dark Blade: Perform a powerful slash. You won't take a hit when you speed up. Defeating an enemy resets the CD (up to 5 times).",
        abilityImg: "./media/Figures/Skills&Weapons/AssassinAbility.png"
    },
    {
        name: "Engineer",
        art:"./media/Figures/Artistry/EngineerArt.webp",
        profile: "./media/Figures/Characters/Engineer.gif",
        hp: 6,
        armor: 6,
        mainAttack: "H2O",
        passiveAbility: "Immune to fire, decrease explosion damage, and increase fire damage to monsters.",
        specialAbility: "Armor Mount: Temporarily equipped with an armor mount. (Applies to solo mode only) You're equipped with the armor mount parked in robotic facility.",
        abilityImg: "./media/Figures/Skills&Weapons/EngineerAbility.png"
    },
    {
        name: "Knight",
        art:"./media/Figures/Artistry/KnightArt.webp",
        profile: "./media/Figures/Characters/Knight.gif",
        hp: 7,
        armor: 6,
        mainAttack: "New Pistol",
        passiveAbility: "No extra damage when shield is broken.",
        specialAbility: "Chaotic Strike: For a short duration, inflict a random effect on enemies hit by your weapons (stackable).",
        abilityImg: "./media/Figures/Skills&Weapons/KnightAbility.png"
    },
    {
        name: "Rouge",
        art:"./media/Figures/Artistry/RougeArt.webp",
        profile: "./media/Figures/Characters/Rouge.gif",
        hp: 6,
        armor: 4,
        mainAttack: "Jack and Mary",
        passiveAbility: "Critical hits can pierce enemies",
        specialAbility: "Dodge: Roll forward and dodge all enemy bullets.",
        abilityImg: "./media/Figures/Skills&Weapons/RougeAbility.png"
    },
    {
        name: "Sword Master",
        art:"./media/Figures/Artistry/SwordMasterArt.webp",
        profile: "./media/Figures/Characters/SwordMaster.gif",
        hp: 6,
        armor: 5,
        mainAttack: "Zephyr",
        passiveAbility: "Casting skill increases movement speed. Fully releasing skill grants 5 Sword Intent, exclusive to this character.",
        specialAbility: "Whisp of clouds: The skill has 3 stages. Stage 1&2: Launch multiple flying swords that hover after traveling for a time. Stage 3: Dash forward, slashing the area multiple times while recalling all flying swords.",
        abilityImg: "./media/Figures/Skills&Weapons/SwordMasterAbility.png"
    },
    {
        name: "Demonmancer",
        art:"./media/Figures/Artistry/DemonmancerArt.webp",
        profile: "./media/Figures/Characters/Demonmancer.gif",
        hp: 5,
        armor: 6,
        mainAttack: "Key of the faint star",
        passiveAbility: "Summon a Fiery Imp upon killing an enemy. Fiery Imp follows you around to block bullets., exclusive to this character.",
        specialAbility: "Helping Hand: Eligos: Summon Eligos who will back you up in the battle. Sacrificed Imps will enhance the skill effect.",
        abilityImg: "./media/Figures/Skills&Weapons/DemonmancerAbility.png"
    },
    {
        name: "Druid",
        art:"./media/Figures/Artistry/DruidArt.webp",
        profile: "./media/Figures/Characters/Druid.gif",
        hp: 7,
        armor: 4,
        mainAttack: "Crispy Bone",
        passiveAbility: "Increases the effectiveness of pets and followers.",
        specialAbility: "Frostfire Wolves: Wolves will assist Druid in the fight. Casting this skill imbues Druid and the wolves with elemental power. The wolves gain increased size and restore health. Their attacks become faster and deal ice/fire damage. Druid's attack deal additional ice/fire damage.",
        abilityImg: "./media/Figures/Skills&Weapons/DruidAbility.png"
    },
]


function showCharacterInfo(i){
    document.getElementById('characterOutput').style.display = 'block';
    document.getElementById('characterOutput').innerHTML = `
    <div class="character-card">
      <img src="${characterIntel[i].art}" alt="${characterIntel[i].name} Art" class="character-art" />
      <div class="profile-section">
        <img src="${characterIntel[i].profile}" alt="${characterIntel[i].name} Profile" class="character-profile" />
        <h2>${characterIntel[i].name}</h2>
        <p><strong>HP:</strong> ${characterIntel[i].hp} | <strong>Armor:</strong> ${characterIntel[i].armor}</p>
        <p><strong>Main Attack:</strong> ${characterIntel[i].mainAttack}</p>
        <p><strong>Passive Ability:</strong> ${characterIntel[i].passiveAbility}</p>
        <div class="special-ability">
          <img src="${characterIntel[i].abilityImg}" alt="${characterIntel[i].name} Special Ability" class="ability-image" />
          <p><strong>Special Ability:</strong> ${characterIntel[i].specialAbility}</p>
        </div>
      </div>
    </div>
  `;
}

function hideCharacterOutput(){
    document.getElementById('characterOutput').style.display = 'none';
}

//********************* 
//*******SLIDER********
//********************* 

const headImages = [
    "./media/Figures/CustomFigureElements/Head1.png",
    "./media/Figures/CustomFigureElements/Head2.png",
    "./media/Figures/CustomFigureElements/Head3.png",
    "./media/Figures/CustomFigureElements/Head4.png"
  ];

  let headCurrent = 0;
  const headSlider = document.getElementById("sliderHeadImage");

  function nextHeadImage() {
    headCurrent = (headCurrent + 1) % headImages.length;
    headSlider.src = headImages[headCurrent];    
  }

  function prevHeadImage() {
    headCurrent = (headCurrent - 1 + headImages.length) % headImages.length;
    headSlider.src = headImages[headCurrent];    
  }


  const torsoImages = [
    "./media/Figures/CustomFigureElements/Torso1.png",
    "./media/Figures/CustomFigureElements/Torso2.png",
    "./media/Figures/CustomFigureElements/Torso3.png",
    "./media/Figures/CustomFigureElements/Torso4.png"
  ];
  let torsoCurrent = 0;
  const torsoSlider = document.getElementById("sliderTorsoImage");

  function nextTorsoImage() {
    torsoCurrent = (torsoCurrent + 1) % torsoImages.length;
    torsoSlider.src = torsoImages[torsoCurrent];    
  }

  function prevTorsoImage() {
    torsoCurrent = (torsoCurrent - 1 + torsoImages.length) % torsoImages.length;
    torsoSlider.src = torsoImages[torsoCurrent];    
  }



  const legsImages = [
    "./media/Figures/CustomFigureElements/Legs1.png",
    "./media/Figures/CustomFigureElements/Legs2.png",
    "./media/Figures/CustomFigureElements/Legs3.png",
    "./media/Figures/CustomFigureElements/Legs4.png"
  ];

  let legsCurrent = 0;
  const legsSlider = document.getElementById("sliderLegsImage");

  function nextLegsImage() {
    legsCurrent = (legsCurrent + 1) % legsImages.length;
    legsSlider.src = legsImages[legsCurrent];    
  }

  function prevLegsImage() {
    legsCurrent = (legsCurrent - 1 + legsImages.length) % legsImages.length;
    legsSlider.src = legsImages[legsCurrent];    
  }

  function randomizeCharacter(){
    const randomHead = Math.floor(Math.random() * headImages.length);
    const randomTorso = Math.floor(Math.random() * torsoImages.length);
    const randomLegs = Math.floor(Math.random() * legsImages.length);
    headCurrent = randomHead;
    torsoCurrent = randomTorso;
    legsCurrent = randomLegs;
    headSlider.src = headImages[headCurrent];
    torsoSlider.src = torsoImages[torsoCurrent];
    legsSlider.src = legsImages[legsCurrent];
  }

  function openCharacterBuilder(){
    document.getElementById('characterBuilderOutput').style.display = 'block';
    document.getElementById('body').style.overflowY = 'hidden';
    document.getElementById('characterBuilderOutput').style.top = '350%';
    document.getElementById('menu').style.display = 'none';
  }


  function exitCharacterBuilder(){
    document.getElementById('characterBuilderOutput').style.display = 'none';
    document.getElementById('body').style.overflowY = 'visible';
  }


  function updateHeadWidth(value) {
    const head = document.getElementById("sliderHeadImage");
    if (head) head.style.width = value + "px";
  }

  function updateTorsoWidth(value) {
    const torso = document.getElementById("sliderTorsoImage");
    if (torso) torso.style.width = value + "px";
  }

  function updateLegsWidth(value) {
    const legs = document.getElementById("sliderLegsImage");
    if (legs) legs.style.width = value + "px";
  }

  const range = document.getElementById('imageWidthRange');





function evaluateStrength(){
  const strength = Math.floor(Math.random() * 10) + 1;
  let heroClass;
  let name = document.getElementById('nameInput').value;

  if (name === "") {
    name = "Your Character";
  }

  switch(strength){
    case 0:
      heroClass = "E";
      break;
    case 1:
    case 2:
    case 3:
      heroClass = "D";
      break
    case 4:
    case 5:
      heroClass = "C";
      break;
    case 6:
    case 7:
      heroClass = "B";
      break;
    case 8:
    case 9:
      heroClass = "A";
      break;
    case 10:
      heroClass = "S";
      break;
  }

  document.getElementById('strengthContainer').style.display = 'block';
  document.getElementById('strengthPreMessage').innerHTML = `${name}'s strength is: ${strength}`;
  document.getElementById('strengthMeasureBox').innerHTML = heroClass;
  if(strength > 9){
  document.getElementById('strengthMeasureBox').style.color = 'gold';
  }else{
    document.getElementById('strengthMeasureBox').style.color = 'rgb(200,175,175)';
  }
}



//*********************
//****WORLDS PAGE******
//*********************

const worldDescriptions = [
  {
    name: "Forest",
    description: "A vibrant woodland full of tall trees, mossy stones, and ancient ruins. Swarming with goblins, bats, and archers, it’s the perfect starting ground—simple, yet swarming with aggressive packs.",
    img: "./media/Backgrounds/Worlds/World1.1.gif",
    audio: "./media/Audio/ForestTheme.mp3",
    weakness: "./media/Misc/BuffDebuffs/Fire.webp",
    resilience: "./media/Misc/BuffDebuffs/Poison.webp"
  },
  {
    name: "Glacier",
    description: "A frozen expanse with icy floors and glacial cliffs. Frost mages, wolves, and Yetis attack with chilling projectiles, while the slick terrain keeps players on edge with movement hazards.",
    img: "./media/Backgrounds/Worlds/World1.2.gif",
    audio: "./media/Audio/GlacierTheme.mp3",
    weakness: "./media/Misc/BuffDebuffs/Fire.webp",
    resilience: "./media/Misc/BuffDebuffs/Ice.webp"
  },
  {
    name: "Dungeon",
    description: "A torch-lit maze of stone walls, spike traps, and cursed relics. Hostile skeletons, necromancers, and armored knights dominate this level, demanding both quick reflexes and careful pathing.",
    img: "./media/Backgrounds/Worlds/World2.1.gif",
    audio: "./media/Audio/DungeonTheme.mp3",
    weakness: "./media/Misc/BuffDebuffs/Electricity.webp",
    resilience: "./media/Misc/BuffDebuffs/Poison.webp"
  },
  {
    name: "Grave",
    description: "A hidden, fog-covered graveyard where spirits rise and bones never rest. Undead enemies like ghosts, zombies, and spectral casters emerge from tombstones to trap and overwhelm the unprepared.",
    img: "./media/Backgrounds/Worlds/World2.2.gif",
    audio: "./media/Audio/GraveTheme.mp3",
    weakness: "./media/Misc/BuffDebuffs/Electricity.webp",
    resilience: "./media/Misc/BuffDebuffs/Fire.webp"
  },
  {
    name: "Volcano",
    description: "A blistering inferno of molten rock and cracked obsidian. Fire elementals, magma beasts, and explosive hazards make this zone brutal and chaotic, favoring quick damage and heat resistance.",
    img: "./media/Backgrounds/Worlds/World3.1.gif",
    audio: "./media/Audio/VolcanoTheme.mp3",
    weakness: "./media/Misc/BuffDebuffs/Ice.webp",
    resilience: "./media/Misc/BuffDebuffs/Fire.webp"
  },
  {
    name: "Neo Isle",
    description: "A sleek island base filled with steel corridors, laser traps, and robot pirates. Enemies are fast, armed with tech weapons, and often travel in synced formations for maximum damage.",
    img: "./media/Backgrounds/Worlds/World3.2.gif",
    audio: "./media/Audio/NeoIsleTheme.mp3",
    weakness: "./media/Misc/BuffDebuffs/Poison.webp",
    resilience: "./media/Misc/BuffDebuffs/Ice.webp"
  }
];


const priorityEnemies = [
  {
    name: "Goblin Giant",
    src: "./media/Misc/Enemies/1.1_Enemy.webp",
    description: "A hulking forest brute with high HP and a slow but powerful melee attack."
  },
  {
    name: "Yeti",
    src: "./media/Misc/Enemies/1.2_Enemy.webp",
    description: "A tough ice monster that can launch freezing projectiles and tank a lot of damage."
  },
  {
    name: "BigSkeleton",
    src: "./media/Misc/Enemies/2.1_Enemy.webp",
    description: "A large skeletal warrior with high durability and aggressive melee behavior."
  },
  {
    name: "Top Gun",
    src: "./media/Misc/Enemies/2.2_Enemy.webp",
    description: "A fast-firing enemy that uses ranged gun attacks, often overwhelming players with bullet spam."
  },
  {
    name: "Flame Captain",
    src: "./media/Misc/Enemies/3.1_Enemy.webp",
    description: "An elite enemy with fire-based attacks, often summoning flame trails or explosions."
  },
  {
    name: "Big Boy Type 3",
    src: "./media/Misc/Enemies/3.2_Enemy.webp",
    description: "A heavily-armored Iron Pirate unit with devastating area attacks and high resistance."
  }
];


let worldsCurrent = 0;
const worldsSlider = document.getElementById("worldImages");

function nextWorld() {
  worldsCurrent = (worldsCurrent + 1) % worldDescriptions.length;
  worldsSlider.src = worldDescriptions[worldsCurrent].img;  
  document.getElementById('worldName').innerHTML = worldDescriptions[worldsCurrent].name;
}

function previousWorld() {
  worldsCurrent = (worldsCurrent - 1 + worldDescriptions.length) % worldDescriptions.length;
  worldsSlider.src = worldDescriptions[worldsCurrent].img;  
  document.getElementById('worldName').innerHTML = worldDescriptions[worldsCurrent].name;
}

function goToWorld(){
  document.getElementById('exitWorldsScreenButton').style.display = 'block';
  document.getElementById('worldShowcase').style.display = 'block';
  document.getElementById('blackScreen').style.display = 'block';
  getWorldData();
  
}
function getWorldData(){
  let worldIndex = worldsCurrent;
  document.getElementById('worldShowcase').style.backgroundImage = `url(${worldDescriptions[worldIndex].img})`;
  document.getElementById('descTitle').innerHTML = worldDescriptions[worldIndex].name;
  document.getElementById('descInfo').innerHTML = worldDescriptions[worldIndex].description;
  document.getElementById('enemyTitle').innerHTML = "Priority Enemy";
  document.getElementById('enemyImg').src = priorityEnemies[worldIndex].src;

}

function exitWorld(){
  document.getElementById('worldShowcase').style.display = 'none';
  document.getElementById('exitWorldsScreenButton').style.display = 'none';
  document.getElementById('blackScreen').style.display = 'none';
  document.getElementById('keyboard').style.display = 'none';
}

let audio;



let isAudioPlaying = false;

function toggleAudio() {
  if (isAudioPlaying) {
  audio.pause();
    audio.currentTime = 0;
  document.getElementById('isPlaying').src = './media/Misc/pausedMusic.png';
    isAudioPlaying = false;
    document.getElementById('playPause').innerHTML = '△';
  }
  else {
    audio = new Audio(worldDescriptions[worldsCurrent].audio);
    audio.play();
    document.getElementById('isPlaying').src = './media/Misc/musicIndicaitor.gif';
    isAudioPlaying = true;
    document.getElementById('playPause').innerHTML = '=';
  }
}

function stopAllAudio() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  metronome.pause();
  metronome.currentTime = 0;
}
function openKeyboard() {
  document.getElementById('exitWorldsScreenButton').style.display = 'block';
  document.getElementById('keyboard').style.display = 'block';
  document.getElementById('blackScreen').style.display = 'block';
}

const keys = ['d', 'r', 'f', 't', 'g', 'y', 'h', 'u', 'j'];

document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    const index = keys.indexOf(key);
    if (index !== -1) {
        playKey(index);
    }
});


const keySoundmap = [
    "./media/Piano Keys/keyD.mp3",
    "./media/Piano Keys/keyR.mp3",
    "./media/Piano Keys/keyF.mp3",
    "./media/Piano Keys/keyT.mp3",
    "./media/Piano Keys/keyG.mp3",
    "./media/Piano Keys/keyY.mp3",
    "./media/Piano Keys/keyH.mp3",
    "./media/Piano Keys/keyU.mp3",
    "./media/Piano Keys/keyJ.mp3",
]

function playKey(Chord){
    const audio = new Audio(keySoundmap[Chord]);
    audio.play();
}

let isPlaying = false;
let metronome;
let metronomeAnimationInterval = null;

function toggleMetronomeSound(){

    if (isPlaying) {
        metronome.pause();
        isPlaying = false;
        animateMetronome(false);
    } else {
      const bpm = parseInt(document.getElementById('metronomeBpm').value) / 120;
      console.log(bpm);
        metronome = new Audio("./media/Misc/metronomeSound1.mp3");
        metronome.loop = true;
        metronome.play();
        if (bpm <= 0){
        metronome.playbackRate = 1; 
        }else{
        metronome.playbackRate = bpm; 
        }
        isPlaying = true;
        animateMetronome(true);
    }
}

function animateMetronome(isPlaying) {
    const metronomeImage = document.getElementById('metronome');
    if (isPlaying) {
        let toggle = false;
        metronomeAnimationInterval = setInterval(() => {
            if (!isPlaying || metronome.paused) {
                clearInterval(metronomeAnimationInterval);
                metronomeAnimationInterval = null;
                metronomeImage.src = './media/Misc/metronome.png';
                return;
            }
            metronomeImage.src = toggle ? './media/Misc/metronome.png' : './media/Misc/metronome2.png';
            toggle = !toggle;
        }, 500);
    } else {
        if (metronomeAnimationInterval) {
            clearInterval(metronomeAnimationInterval);
            metronomeAnimationInterval = null;
        }
        metronomeImage.src = './media/Misc/metronome.png';
    }
}
