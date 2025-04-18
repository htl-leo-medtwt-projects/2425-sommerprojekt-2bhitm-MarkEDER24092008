/*
Name
Hp / Armor
Main Weapon
Passive Ability
Ultimate Ability (Best of 3)
*/



//HOME PAGE
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





//Quiz

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
    event.preventDefault(); // Verhindert das Standard-Formularverhalten
    evaluateQuiz();
    return false;
}

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






//<editor-fold desc="Character Page">
//</editor-fold>

//CHARACTER PAGE
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

