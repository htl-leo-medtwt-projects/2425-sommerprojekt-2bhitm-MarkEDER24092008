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


let amountsClicked = 0;
function machineClicked(){
  amountsClicked++;
  console.log(amountsClicked);

  if(amountsClicked >= 1){
    document.getElementById('gashaponMachine').style.animationName = 'shake';
    document.getElementById('gashaponCooldownBox').style.display = 'block';
    document.getElementById('egg').style.display = 'block';
    document.getElementById('egg').style.animationName = 'dropEgg';

  amountsClicked = 0;
  console.log("Animation started");
  setTimeout(() => {
    document.getElementById('gashaponMachine').style.animationName = 'gashaponMachine';
    document.getElementById('gashaponCooldownBox').style.display = 'none';
    document.getElementById('egg').style.animationName = 'egg';
    document.getElementById('egg').style.display = 'none';


  }, 3000);
}
}

let cheat = [
  {desc:"DA SECRETTT"}
]

let prizePool = [
  {desc:"DA SECRETTT"},
  {desc:"A Message; 'Your'e bad at this'"},
  {desc:"Nothing... Once again"},
  {desc:"Some Advice: 'Don't Gamble'"},
  {desc:"A good look in the mirror"},
  {desc:"A new Achievement: 'Unlucky Dog'"},
  {desc:"Nothing"}
]

function crackEgg(){
  let randomWin = Math.floor(Math.random() * cheat.length);
  document.getElementById('egg').style.display = 'none';
  document.getElementById('winMessage').style.display = 'block';
  document.getElementById('blackScreen').style.display = 'block';

  document.getElementById('winMessage').innerHTML = 
  `<h1>Message!</h1> <p>You got - ${cheat[randomWin].desc}</p>`;
  //CHANGE TO cheat FOR DEMONSTRATION

  if(cheat[randomWin].desc == cheat[0].desc){
    let audio = new Audio("./media/Audio/winSfx.mp3");
    audio.play();
  const secretSiteImg = document.getElementById('secretSite');
  secretSiteImg.parentElement.innerHTML = `<a href="./hallOfFame.html"><img class="menuImage" id="secretSite" src="./media/Menu Icons/HallOfFameIcon.png" alt="Hall Of Fame"></a>`;
  console.log(secretSiteImg.parentElement);
  }
}


function closeMessage(){
  document.getElementById('winMessage').style.display = 'none';
  document.getElementById('blackScreen').style.display = 'none';

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
    document.getElementById('blackScreen').style.display = 'block';
  }


  function exitCharacterBuilder(){
    document.getElementById('characterBuilderOutput').style.display = 'none';
    document.getElementById('body').style.overflowY = 'visible';
    document.getElementById('blackScreen').style.display = 'none';

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


const classicKeySoundmap = [
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

const electricKeySoundmap = [
    "./media/Piano Keys/keyD1.mp3",
    "./media/Piano Keys/keyR1.mp3",
    "./media/Piano Keys/keyF1.mp3",
    "./media/Piano Keys/keyT1.mp3",
    "./media/Piano Keys/keyG1.mp3",
    "./media/Piano Keys/keyY1.mp3",
    "./media/Piano Keys/keyH1.mp3",
    "./media/Piano Keys/keyU1.mp3",
    "./media/Piano Keys/keyJ1.mp3",
]

let choice = true;
let pianoType;


function changePianoType() {
    if (choice == true) {
      choice = false;
      pianoType = classicKeySoundmap;
    } else if (choice == false) {
      pianoType = electricKeySoundmap;
      choice = true;
    }
}

let pianoChoice = "classic";
function playKey(Chord){
  let audio = new Audio(pianoType[Chord]);
    audio.play();
}

//*********************
//*****METRONOME*******
//*********************



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
        metronome = new Audio("./media/Misc/metronomeSound2.mp3");
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

let metronomeAnimationSpeed = 500;

function animateMetronome(isPlaying) {
  const bpm = parseInt(document.getElementById('metronomeBpm').value);
  metronomeAnimationSpeed = 60000 / bpm;
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
        }, metronomeAnimationSpeed);
    } else {
        if (metronomeAnimationInterval) {
            clearInterval(metronomeAnimationInterval);
            metronomeAnimationInterval = null;
        }
        metronomeImage.src = './media/Misc/metronome.png';
    }
}

//**************************** 
//*******HALL OF SKINS********
//****************************



function animateGsapCards(){
  document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#card1', {
      scrollTrigger:{
        trigger: '#card1',
        start: "top 80%",
        end: "bottom 80%",
       // markers: true,
        triggerActions: 'restart pause resume none',
        scrub: true
      },
      x: 40,
      opacity: 1,
      duration: 1
    })
    gsap.to('#card2', {
      scrollTrigger:{
        trigger: '#card2',
        start: "top 80%",
        end: "bottom 80%",
       // markers: true,
        triggerActions: 'restart pause resume none',
        scrub: true
      },
      x: -40,
      opacity: 1,
      duration: 1
    })
    gsap.to('#card3', {
      scrollTrigger:{
        trigger: '#card3',
        start: "top 80%",
        end: "bottom 80%",
        //markers: true,
        triggerActions: 'restart pause resume none',
        scrub: true
      },
      x: 40,
      opacity: 1,
      duration: 1
    })
    gsap.to('#card4', {
      scrollTrigger:{
        trigger: '#card4',
        start: "top 80%",
        end: "bottom 80%",
       //markers: true,
        triggerActions: 'restart pause resume none',
        scrub: true
      },
      x: -40,
      opacity: 1,
      duration: 1
    })
    gsap.to('#card5', {
      scrollTrigger:{
        trigger: '#card5',
        start: "top 80%",
        end: "bottom 80%",
        //markers: true,
        triggerActions: 'restart pause resume none',
        scrub: true
      },
      x: 40,
      opacity: 1,
      duration: 1
    })
    gsap.to('#card6', {
      scrollTrigger:{
        trigger: '#card6',
        start: "top 80%",
        end: "bottom 80%",
       // markers: true,
        triggerActions: 'restart pause resume none',
        scrub: true
      },
      x: -40,
      opacity: 1,
      duration: 1
    })
    gsap.to('#card7', {
      scrollTrigger:{
        trigger: '#card7',
        start: "top 80%",
        end: "bottom 80%",
       // markers: true,
        triggerActions: 'restart pause resume none',
        scrub: true
      },
      x: 40,
      opacity: 1,
      duration: 1
    })
    gsap.to('#card8', {
      scrollTrigger:{
        trigger: '#card8',
        start: "top 80%",
        end: "bottom 80%",
       // markers: true,
        triggerActions: 'restart pause resume none',
        scrub: true
      },
      x: -40,
      opacity: 1,
      duration: 1
    })
    gsap.to('#card9', {
      scrollTrigger:{
        trigger: '#card9',
        start: "top 80%",
        end: "bottom 80%",
        //markers: true,
        triggerActions: 'restart pause resume none',
        scrub: true
      },
      x: 40,
      opacity: 1,
      duration: 1
    })
    gsap.to('#card10', {
      scrollTrigger:{
        trigger: '#card10',
        start: "top 80%",
        end: "bottom 80%",
        //markers: true,
        triggerActions: 'restart pause resume none',
        scrub: true
      },
      x: -40,
      opacity: 1,
      duration: 1
    })
   });
  
}

animateGsapCards();


const fameSkins = [
  {
    name: "Ming Xiao",
    cardSrc: "./media/Figures/HallOfSkins/Card/MingXiao.webp",
    iconSrc: "./media/Figures/HallOfSkins/charIcons/MingXiao.webp",
    skinClass: "War of Warlords",
    description: "Adorned in imperial armor with dragon-themed embellishments, exuding authority and power.",
    effects: "Idle animation includes the riding of a chinese dragon, gaining height as he stands. "
  },
  {
    name: "Capricorn",
    cardSrc: "./media/Figures/HallOfSkins/Card/Capricornus.webp",
    iconSrc: "./media/Figures/HallOfSkins/charIcons/Capricornus.webp",
    skinClass: "Call of Stars",
    description: "Celestial armor with star motifs, giving the character a mystical, cosmic presence.",
    effects: "His summons embody the constellation of the stars."
  },
  {
    name: "Gemini",
    cardSrc: "./media/Figures/HallOfSkins/Card/Gemini.webp",
    iconSrc: "./media/Figures/HallOfSkins/charIcons/Gemini.webp",
    skinClass: "Call of Stars",
    description: "Mirrored design with harmonious aesthetics, embodying the concept of duality.",
    effects: "He posesses a dual personality, with one side being more aggressive and the other more defensive. Enough kills makes him switch..."
  },
  {
    name: "Abo",
    cardSrc: "./media/Figures/HallOfSkins/Card/Abo.webp",
    iconSrc: "./media/Figures/HallOfSkins/charIcons/Abo.webp",
    skinClass: "Robotic Frenzy",
    description: "Abo becomes a sleek android with glowing cybernetic elements and metallic finish.",
    effects: "He plugs up when idle, charging up his battery. His attacks have a 'shocking' effect, with sparks flying around."
  },
  {
    name: "Crux",
    cardSrc: "./media/Figures/HallOfSkins/Card/Crux.webp",
    iconSrc: "./media/Figures/HallOfSkins/charIcons/Crux.webp",
    skinClass: "Robotic Frenzy",
    description: "High-speed robotic design with agile limbs and advanced optics.",
    effects: "He leaves codes of the matrix scattered in the air as he attacks or uses his stealth."
  },
  {
    name: "Sagittarus",
    cardSrc: "./media/Figures/HallOfSkins/Card/Sagittarus.webp",
    iconSrc: "./media/Figures/HallOfSkins/charIcons/Sagittarus.webp",
    skinClass: "Call of Stars",
    description: "Constellation-themed archer with armor that glows like a galaxy.",
    effects: "Using her divine protection of the Cosmos as she casts attacks, she leaves a trail of stars behind her."
  },
  {
    name: "Yuan-Lan",
    cardSrc: "./media/Figures/HallOfSkins/Card/YuanLan.webp",
    iconSrc: "./media/Figures/HallOfSkins/charIcons/YuanLan.webp",
    skinClass: "War of Warlords",
    description: "Clad in ceremonial war robes with ornate detailing, embodying noble discipline.",
    effects: "Summoning the dragons of the elements as he uses his abilities, he leaves a trail of dragon scales behind him."
  },
  {
    name: "Justice Bringer",
    cardSrc: "./media/Figures/HallOfSkins/Card/Justicebringer.webp",
    iconSrc: "./media/Figures/HallOfSkins/charIcons/Justicebringer.webp",
    skinClass: "Robotic Frenzy",
    description: "Heavy-armored law enforcement mech with a commanding presence.",
    effects: "His imposing stand while resting, along with his video game-like animations, make it feel like your'e playing a boss."
  },
  {
    name: "Sun-Shangxiang",
    cardSrc: "./media/Figures/HallOfSkins/Card/SunShangxiang.webp",
    iconSrc: "./media/Figures/HallOfSkins/charIcons/SunShangxiang.webp",
    skinClass: "War of Warlords",
    description: "Stylish and agile warrior princess, dressed in elegant combat attire.",
    effects: "Leaving a trail of divine fire everywhere she strikes, her effects represent the Sun Goddes."
  },
  {
    name: "Unit-1202",
    cardSrc: "./media/Figures/HallOfSkins/Card/Unit1202.webp",
    iconSrc: "./media/Figures/HallOfSkins/charIcons/Unit1202.webp",
    skinClass: "Robotic Frenzy",
    description: "Advanced tactical droid with high-tech armor and integrated weaponry.",
    effects: "Using his Cyberpunk tech to flatline his enemies, he has the newest effect implants installed."
  }
];



generateSkinMenu();

function generateSkinMenu(){
  for(let i = 0; i < fameSkins.length; i++){
    document.getElementById('skinMenu').innerHTML += `
    <div id=card${i + 1} onclick="showSkinShowcasing(${i})" class="skinCard">
      <img src="${fameSkins[i].cardSrc}" alt="${fameSkins[i].name} Card" class="skinCardImage" style="width:400px; height:"300px"/>
    </div>
    `;

    }
  
}



function showSkinShowcasing(index){
  generateSkinData(index);
  document.getElementById('blackScreen').style.display = 'block';
  document.getElementById('exitSkinShowcasing').style.display = 'block';
  document.getElementById('skinShowcase').style.display = 'block';
  document.body.style.overflowY = 'hidden';
}

function generateSkinData(index) {
  const skin = fameSkins[index];

  document.getElementById('skinShowcase').innerHTML = `
    <div class="skin-header">

    <div id="navigatorButtons">
      <button onclick="generateSkinData(${index - 1})" class="nav-button">← Back</button>
      <button onclick="generateSkinData(${index + 1})" class="nav-button">Front →</button>
      <button id="favoriteButton" onclick="favoriteCharacter(${index})" class="nav-button">🩶</button>
      <button onclick="exitSkinShowcasing()" class="nav-button" id="exitSkinShowcasing">X</button>
      </div>
      <h1 id="skinName">${skin.name}</h1>
      
    </div>

    <div class="skin-main">
      <div class="skin-icon">
        <img src="${skin.iconSrc}" alt="Skin Icon" />
      </div>
      <div class="skin-card">
        <img id="skinImage" src="${skin.cardSrc}" alt="Skin Image" style="width:50%"  />
      </div>
    </div>

    <div class="skin-details">
      <div class="skin-section">
        <h2>Description</h2>
        <p>${skin.description}</p>
      </div>
      <div class="skin-section">
        <h2>Sp. Effects</h2>
        <p>${skin.effects}</p>
      </div>
    </div>
  `;
}

let favoriteCharacters = []

// let isFavorite = true;
let isFavorite = false;

function favoriteCharacter(index){
  const skin = fameSkins[index];
  isFavorite = !isFavorite;
    if(isFavorite){
      favoriteCharacters.push(skin);
      document.getElementById('favoriteButton').innerText = '💔';
      // isFavorite = false;
      console.log(favoriteCharacters);
    }else{
      const skinIndex = favoriteCharacters.findIndex(s => s.name === skin.name);
      if (skinIndex !== -1) {
        favoriteCharacters.splice(skinIndex, 1);
      }
      document.getElementById('favoriteButton').innerText = '🩶';
      // isFavorite = true;
      console.log(favoriteCharacters);

    }
}


  function filterSkins(skinClass){
    document.getElementById('skinMenu').innerHTML = '';
    for(let i = 0; i < fameSkins.length; i++){
      if(fameSkins[i].skinClass === skinClass){
        document.getElementById('skinMenu').innerHTML += `
    <div id=card${i + 1} onclick="showSkinShowcasing(${i})" class="skinCard">
      <img  src="${fameSkins[i].cardSrc}" alt="${fameSkins[i].name} Card" class="skinCardImage" style="width:400px; height:"300px"/>
    </div>
    `;
      }else{
        continue;
      }
    }
    
    setTimeout( () => {
      animateGsapCards();
    }, 500);
  }


  function filterForName(searchName){
    
    for(let i = 0; i < fameSkins.length; i ++){
      if(fameSkins[i].name === searchName){
        document.getElementById('skinMenu').innerHTML = '';
        document.getElementById('skinMenu').innerHTML += `
        <div id=card${i + 1} onclick="showSkinShowcasing(${i})" class="skinCard">
          <img  src="${fameSkins[i].cardSrc}" alt="${fameSkins[i].name} Card" class="skinCardImage" style="width:400px; height:"300px"/>
        </div>
        `;
          }else{
            continue;
          }
        }
        setTimeout( () => {
          animateGsapCards();
        }, 500);
    
      }

      let isFavorited = false;
      function filterForFavorites(){
        isFavorited = !isFavorited;
        
        if(isFavorited){
          for(let i = 0; i < fameSkins.length; i ++){
              document.getElementById('skinMenu').innerHTML = '';
              document.getElementById('skinMenu').innerHTML += `
              <div id=card${i + 1} onclick="showSkinShowcasing(${i})" class="skinCard">
                <img  src="${favoriteCharacters[i].cardSrc}" alt="${favoriteCharacters[i].name} Card" class="skinCardImage" style="width:400px; height:"300px"/>
              </div>
              `;
              }
        }else{
          generateSkinData();
        }

        setTimeout( () => {
          animateGsapCards();
        }, 500);
      }




  function resetNavigation(){
    document.getElementById('skinMenu').innerHTML = '';
    
    document.getElementById('resetNavigation').style.animationName = 'spin';

    setTimeout(() => {
      document.getElementById('resetNavigation').style.animationName = '';
    }, 600);

    generateSkinMenu();
    animateGsapCards();
    location.reload();
  }


function exitSkinShowcasing(){
  document.getElementById('blackScreen').style.display = 'none';
  document.getElementById('exitSkinShowcasing').style.display = 'none';
  document.getElementById('skinShowcase').style.display = 'none';
  document.body.style.overflowY = 'visible';
} 

function showPixelArtInfo(){
  document.getElementById('pixelArtButton').innerHTML += `<h2>Draw!<h2>`;
}

function removePixelArtInfo(){
  document.getElementById('pixelArtButton').innerHTML = `<h1>Pixel Art!</h1>`;
}



function showDrawingSection(){
  document.getElementById('pixelArt').style.display = 'block';
  generatePixelArtGrid();
}


let currentColorChosen = 'rgb(0,0,0)';

function pickCustomColor(colorValue){
  console.log(colorValue);
  currentColorChosen = colorValue;
}

function pickColor(redValue, blueValue, greenValue){
  currentColorChosen = `rgb(${redValue},${blueValue},${greenValue})`;
}

let isMouseDown = false;
function generatePixelArtGrid(){
  document.getElementById('pixelArtScreen').innerHTML = '';
  const pixelArtScreen = document.getElementById('pixelArtScreen');
  for(let i = 0; i < 400; i++){
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.id = `pixel${i}`;
    pixel.style.backgroundColor = 'white';
    pixel.style.width = '20px';
    pixel.style.height = '20px';
    pixel.style.border = '0.1px black solid';
    pixel.style.userSelect = 'none';

    pixel.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      fillPixel(pixel, currentColorChosen);
      e.preventDefault();
    });

    pixel.addEventListener('mouseover', () => {
      if(isMouseDown){
        fillPixel(pixel, currentColorChosen);
      }
    });

    pixelArtScreen.appendChild(pixel);
  }

  document.body.addEventListener('mouseup', () => {
    isMouseDown = false;
  });
}

function fillScreen(){
  for(let i = 0; i < 400; i ++){
    document.getElementById(`pixel${i}`).style.backgroundColor = currentColorChosen;
  }
}
function clearScreen(){
  for(let i = 0; i < 400; i ++){
    document.getElementById(`pixel${i}`).style.backgroundColor = 'white';
  }
}

function fillPixel(pixel, currentColor){
  pixel.style.backgroundColor = currentColor;
}
  

function leaveDrawingSection(){
  document.getElementById('pixelArt').style.display = 'none';
}


