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
    document.getElementById('artOutput').style.display = 'block';
    document.getElementById('characterOutput').style.display = 'block';

    console.log("showing info for index: " + i);

    document.getElementById('characterOutput').innerHTML =  
    `<h1>${characterIntel[i].name}</h1>
    <h3>HP: ${characterIntel[i].hp}, Armor: ${characterIntel[i].armor}</h3>
    <img src="${characterIntel[i].art}">
    `;

    document.getElementById('artOutput').innerHTML = `<img src="${characterIntel[i].art}">`;
}

function hideCharacterOutput(){
    document.getElementById('characterOutput').style.display = 'none';
    document.getElementById('artOutput').style.display = 'none';

}