var gamever = 100;
var KTestingModeON = true;
var KTestingBetaMode = true && !KTestingModeON;
var ACTIVATEOURGAMEMODE = false
var url = new URL(window.location.href);
var secr = url.searchParams.get("ModeActivate");
var oldmope = false
var brtimerx = 0
var badpiggiesplay = recover = 0
const urlParams = new URLSearchParams(window.location.search);
const testServer = urlParams.get('testserver');
const localhoster = url.searchParams.get("localhost");
  let sessiontoken = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length;
    for (let i = 0; i < 50; i++) {
      sessiontoken += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * letters));
    }
if (secr === "true") {

ACTIVATEOURGAMEMODE = true
}
console.log("\n\n\n");
console.log("--------------------------------------------");
console.log("");
console.log("#    #  ####   ######     #  ####");
console.log("##  ## #    #  #          # #    #");
console.log("# ## # #    #  #####      # #    #");
console.log("#    # #    #  #      ### # #    #");
console.log("#    # #    #  #      ### # #    #");
console.log("#    #  ####   ###### ### #  ####");
console.log("___ Moe.io-LTD.___");
console.log("--------------------------------------------");
console.log(
  "-----------Game Version " +
    gamever +
    (KTestingBetaMode ? " (BETA)" : "") +
    " ----------------"
);
console.log("\n\n\n");

//import all js files (correct order matters if using global, lower lvl files first! Eg. GameObj before GameObjBerry)


///////
// file: js_src/gameobj/GameObjType.js
///////

//definitions of game objects (variables declared without 'var' are GLOBAL)

var o_biome_land = 1,
  o_animal = 2,
  o_hill = 3,
  o_waterSpot = 4,
  o_hidingHole = 5,
  o_hidingBush = 6,
  o_mudSpot = 7,
  o_rockHill = 8,
  o_bigHidingHole = 9,
  o_lake = 10,
  o_lakeIsland = 11,
  o_biome_ocean = 12,
  o_hidingHoleOcean = 13,
  o_abilityGObj = 14,
  o_fruitTree2 = 15,
  o_biome_arctic = 16,
  o_arcticIce = 17,
  o_fireBall = 18,
  o_snowBall = 19,
  o_berry = 20,
  o_water = 21,
  o_mushroom = 22,
  o_lillypad = 23,
  o_bigMushroom = 24,
  o_bigMushroomBush = 25,
  o_plankton = 26,
  o_berryBush = 27,
  o_planktonBush = 28,
  o_banana = 29,
  o_coconut = 30,
  o_raspberry = 31,
  o_pear = 32,
  o_beach = 33,
  o_biome_ocean_extraWater = 34,
  o_seaweed = 35,
  o_starfish = 36,
  o_kelp = 37,
  o_clam = 38,
  o_conchShell = 39,
  o_river = 40,
  o_volcano = 42,//42
  o_lava = 43,
  o_lavaLake = 44,//44
  o_healingStone = 46,
  o_biome_volcano = 47,//47
  o_arcticNut = 48,
  o_carrot = 49,
  o_watermelon = 50,
  o_watermelonSlice = 51,
  o_meatSmall = 52,
  o_meatMedium = 53,
  o_meatLarge = 54,
  // poison biome
  o_biome_poison = 55,//55
  o_poisonBerry = 56,
  o_spiderWeb = 57,
  o_bog = 58,//58
  o_poisonBall = 59,
  o_cloudBerry = 60,
  o_flock = 61,
  o_flockspot = 62,
  o_egg = 63,
  o_sleigh = 64,
  o_quill = 65,
  o_ostrichEgg = 66,
  o_waterDrop = 67,
  o_beeHive = 68,
  o_honeyComb = 69,
  o_fire = 70,
  o_fireTornado = 71,
  o_sinkHole = 72,
  o_DangerAreaCircle = 73,
  o_animalCarcass = 74,
  o_chilli = 75,
  o_safeArea = 76,
  o_spawnEgg = 77,
  o_teamStone = 78,
    o_biome_desert = 79,
o_turkishflag = 80,
o_infectionDrop = 81,
o_dragonfruit = 82,
o_raspberrynew = 83,
o_firerange = 84,
o_gift = 85,
o_particles = 86,
o_firewood = 87;
o_explosion = 88;
o_fir = 89;
o_biome_jungle = 90;
o_stump = 91;
o_fig = 92;
o_tomato = 93;
o_sandbox = 94; 
o_hidebush = 95;
o_mandarin = 96;
o_mandarinsplat = 97;
o_biome_cold_ocean = 98;
o_meatball = 100;
o_star = 101;
o_shard = 102;
o_spit = 103;
o_urchin = 104;
o_fruitthrow = 105;
o_iceberg = 106;
o_bigwhirlpool = 107;
o_tubeworm = 108;
o_fruitTree = 109;
o_storm = 110;
o_sharinganeye = 111;
o_astralStone = 112;
o_lavaDrop = 113;
o_lotus = 114;
o_cakesplat = 115;
o_cakesplash = 116;
o_biome_reef = 117;
o_atoll = 118;
o_impact = 119;
o_battleroyale = 120;
o_eastereggs = 121;
o_bombexplosion = 122;
//o_hat = 99;
var GameObjType = {
  //makes it easy to add new subclasses- each class will add itself!
  customClassesForOType: {},

  setClassForAnimalType: function(theClass, aniT) {
    this.setCustomClassForGameObjType(theClass, o_animal, aniT);
  },

  //set a class to be used for creating GameObjs with a certain 'oType' and/or secondaryType (eg. animalType)
  setCustomClassForGameObjType: function(theClass, oType, secondaryType) {
    //if (!(oType in this.customClassesForOType)) { //create def. if doesnt exist
    if (!this.customClassesForOType[oType]) {
      //create def. if doesnt exist
      this.customClassesForOType[oType] = {
        oTypeMainClass: null,
        secondaryTypeClasses: {}
      };
    }
    var classesObj = this.customClassesForOType[oType];

    if (secondaryType == null) {
      //no eg. 'animalType', just the classes

      if (classesObj.oTypeMainClass != null)
        //if something already set
        console.log(
          "ERROR 'GameObjType.setCustomClassForGameObjType': a class (" +
            this.customClassesForOType[oType] +
            ") is already set for oType " +
            oType +
            "! Check for duplicate calls!"
        );
      classesObj.oTypeMainClass = theClass;
    } else {
      //secondary type

      if (secondaryType in classesObj.secondaryTypeClasses)
        //if something already set
        console.log(
          "ERROR 'GameObjType.setCustomClassForGameObjType': a class is already set for oType " +
            oType +
            " AND secondaryType (eg. animalType) " +
            secondaryType +
            "! Check for duplicate calls!"
        );

      classesObj.secondaryTypeClasses[secondaryType] = theClass;
    }
    this.onClassSet(theClass, oType, secondaryType);
  },

  getClassForGameObjType: function(oType, secondaryType) {
    if (oType in this.customClassesForOType) {
      var classesObj = this.customClassesForOType[oType];

      if (secondaryType == null || secondaryType == 0)
        return classesObj.oTypeMainClass;
      else {
        if (secondaryType in classesObj.secondaryTypeClasses)
          //if has a subclass for the secondary type (aniT), use this
          return classesObj.secondaryTypeClasses[secondaryType];
        //otherwise, return the main type class (eg. Animal)
        else return classesObj.oTypeMainClass;
      }
    } else return GameObj;
  },

  /*setGameObjClassForGameObjType:function(theClass, theOType){
        this.registedClassesAtObjTypes[theOType]=theClass;
    }*/

  //creates gameobj of correct GameObj subclass for newlyVisible Msg
  newlyVis_createGameObjFromMsg: function(msg) {
    var oType = msg.readUInt8();
	
    var secondaryType = null;

    if (oType == o_animal || oType == o_abilityGObj|| oType == o_particles) {
      //read secondary type for certain object types
   
      secondaryType = msg.readUInt8();
      if(oType == o_particles)console.log(secondaryType)
    }
//	console.log("oType: " + oType + " 2: " + secondaryType);
    //create the GameObj
    var newObj = GameObjType.createGameObjOfOType(oType, secondaryType);
    //setup from msg
    newObj.worldUpd_readMsgNewlyVisible(msg, oType, secondaryType);
    return newObj;
  },

  //sepearte method, useful for stand-alone gameObjs, eg for octopus
  createGameObjOfOType: function(oType, secondaryType) {
    var chosenClass = this.getClassForGameObjType(oType, secondaryType); //class to create obj
    //console.log("Class for oType "+oType+" (secondaryType "+secondaryType+") is "+chosenClass.name);

    //create the GameObj
    var newObj = new chosenClass(oType, secondaryType);
    return newObj;
  },
  onClassSet: function(theClass) {}
};

//window.GameObjType=GameObjType;


///////
// file: js_src/gameobj/animal/AnimalType.js
///////

var a_mouse = 1,
  a_rabbit = 2,
  a_pig = 3,
  a_fox = 4,
  a_deer = 5,
  a_mole = 6,
  a_zebra = 7,
  a_lion = 8,
  a_bigCat = 9,
  a_bear = 10,
  a_croc = 11,
  a_rhino = 12,
  a_hippo = 13,
  a_dragon = 14,
  a_shrimp = 15,
  a_trout = 16,
  a_crab = 17,
  a_squid = 18,
  a_shark = 19,
  a_stingray = 20,
  a_turtle = 21,
  a_seaHorse = 22,
  a_jellyFish = 23,
  a_kraken = 24,
  a_pufferFish = 25,
  a_killerWhale = 26,
  a_swordfish = 27,
  a_gorilla = 28,
  a_octopus = 29,
  a_wolf = 30,
  a_arcticHare = 31,
  a_yeti = 32,
  a_chipmunk = 33,
  a_muskox = 34,
  a_penguin = 35,
  a_polarBear = 36,
  a_seal = 37,
  a_snowLeopard = 38,
  a_walrus = 39,
  a_reindeer = 40,
  a_arcticFox = 41,
  a_wolverine = 42,
  a_mammoth = 43,
  a_donkey = 44,
  a_snail = 45,
  a_blackDragon = 46,
  a_sabertoothTiger = 47,
  a_elephant = 48,
  a_blueWhale = 49,
  a_cobra = 50,
  a_boaConstrictor = 51,
  a_giantSpider = 52,
  a_trex = 53,
  a_tiger = 54,
  a_giraffe = 55,
  a_eagle = 56,
  a_hedgehog = 57,
  a_duck = 58,
  a_duckling = 59,
  a_lemming = 60,
  a_kingCrab = 61,
  a_frog = 62,
  a_ostrich = 63,
  a_pelican = 64,
  a_falcon = 65,
  a_snowyOwl = 66,
  a_honeyBee = 67,
  a_phoenix = 68,
  a_ostrichBaby = 69,
  a_seaMonster = 70,
  a_landMonster = 71,
  a_iceMonster = 72,
  a_dinoMonster = 73,
  a_pigeon = 74,
  a_toucan = 75,
a_thunderbird = 76,
a_pterodactyl = 77,
a_scorpion = 78,
    a_kingdragon = 79,
    a_bigfoot = 80,
a_lochness = 83,
a_griffin = 84,
a_santa = 85,
a_finaldragon = 86;
a_cassowary = 87;
a_flamingo = 88;
a_peacock = 89;
a_topdragon = 90;
a_menhir = 91;
a_crackedhir = 92;
a_alligator = 93;
a_eel = 94;
a_amalga = 95;
a_stegosaurus = 96;
a_sheep = 97;
a_tortise = 98;
a_capybara = 99;
a_gaur = 100;
a_qilin = 101;
a_skink = 102;
a_sloth = 103;
a_leopardseal = 104;
a_taver = 105;
a_waterbear = 106;
a_astraldragon = 107;
a_tornado = 108;
a_slug = 109;
a_minibd = 110;
a_secretarybird = 111;
a_flock = 112;
a_beluga = 113;
a_cachalot = 114;
a_bigfin = 115;
a_bigmouse = 116;
a_titanboa = 117;
a_edgepi = 118;
a_lavacolossal = 119;
a_beaver = 120;
a_tadpole = 121;
a_glaciermonster = 122;
a_pengu = 123;
a_pondturtle = 124;
a_pike = 125;
a_manatee = 126;
a_cakemonster = 127;
a_clownfish = 128;
a_searobin = 129;
a_cuttlefish = 130;
a_catfish = 131;
a_obd = 132;
a_astraltrex = 133;
a_horseshoe = 134;
a_testsnake = 135;
a_easterbunny = 136;
var infoForAnimalType = function (aniT) {
    var infoO = {};
    switch (aniT) {
        case a_snail:
            infoO.aniName = "Snail";
            infoO.aniDesc = "";
            infoO.upgradeText = "You're a super slow snail!";

            infoO.aniCol = "#fcc02b";
            infoO.skinName = "snail";
            break;
      case a_bigfoot:
            infoO.aniName = "The BigFoot";
            infoO.aniDesc = "";
            infoO.upgradeText= 'UPGRADED to ' + infoO.aniName + `! So it really exists... \n
 Right click/W to throw Spears. \n
Hold to make a fire (every 30s)`;
            infoO.aniCol = "#839eb5";
            infoO.skinName = "bigfoot/thebigfoot";
        break;
        case a_kingdragon:
            infoO.aniName = "King Dragon";
            infoO.aniDesc = "";
            infoO.upgradeText = "!\
You got firestream that burns your victim alive! Watch your tail and slap them hard.";

            infoO.aniCol = "#fcc02b";
            infoO.skinName = "kingdragon/kingdragon";
            break;
     
         case a_scorpion:
            infoO.aniName = "Giant Scorpion";
            infoO.aniDesc = "";
            infoO.upgradeText = 'UPGRADED to ' + infoO.aniName + "\nSting and Shiver your prey to death.\n(Press W to Sting)";

            infoO.aniCol = "#fcc02b";
            infoO.skinName = "giantscorpion";
            break;
         case a_pterodactyl:
            infoO.aniName = "Pterodactyl";
            infoO.aniDesc = "";
            infoO.upgradeText = 'UPGRADED to ' + infoO.aniName + '\nFly and dive onto prey to pick it up.';

            infoO.aniCol = "#fcc02b";
            infoO.skinName = "pterodactyl";
            break;
              case a_lochness:
            infoO.aniName = "Loch Ness";
            infoO.aniDesc = "";
               infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Tear Apart your preys with your mouth!";

            infoO.aniCol = "#fcc02b";
            infoO.skinName = "lochness/lochness";
            break;
                    case a_finaldragon:
            infoO.aniName = "Final Dragon";
            infoO.aniDesc = "";
               infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Fly Tail Slap and fire stream! you're powerful!";

            infoO.aniCol = "#fcc02b";
            infoO.skinName = "finaldragon";
            break;
         
      case a_griffin:
            infoO.aniName = "Griffin";
            infoO.aniDesc = "";
          infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Catch Animals with your strong claws!";

            infoO.aniCol = "#22FF8A";
            infoO.skinName = "griffin";
            break;
        
    
           case a_santa:
            infoO.aniName = "Santa";
            infoO.aniDesc = "";
            infoO.upgradeText ="Drop Gifts with S (random loots!)"
            infoO.aniCol = "#22FF8A";
            infoO.skinName = "santa/eagle";
            break;
       
        
              case a_mouse:
            infoO.aniName = "Mouse";
            infoO.aniDesc = "";
            infoO.upgradeText = "";

            infoO.aniCol = "#9BA9B9";
            infoO.skinName = "mouse";
            break;
       case a_rabbit:
            infoO.aniName = "Rabbit";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to RABBIT! \nPress W to burrow a hole to hide in!";
            infoO.aniCol = "#AA937E";
            infoO.skinName = "rabbit";
            break;
          case a_pig:
            infoO.aniName = "Pig";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to PIG! \nPress W to stink everyone!";
            infoO.aniCol = "#AA937E";
            infoO.skinName = "pig";
            break;
        case a_fox:
            infoO.aniName = "Fox";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to FOX! ,\n You can block hiding holes to kick players out! (Press W when in one!)\n+ Hide in red berry bushes!";
            infoO.aniCol = "#FF9D43";
            infoO.skinName = "fox";
            break;
        case a_deer:
            infoO.aniName = "Deer";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to DEER! \nPress W to dig up food! \nDig in mud for better food!\n Hint:Check water areas for new food sources!";
            infoO.aniCol = "#C4773E";
            infoO.skinName = "deer";
            break;
        case a_mole:
            infoO.aniName = "Mole";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to MOLE!\n Hold W to dig underground!\nGo under anything, do surprise attacks!";
            infoO.aniCol = "#4C4A45";
            infoO.skinName = "mole";
            break;
        case a_zebra:
            infoO.aniName = "Zebra";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to ZEBRA! \nPress W to kick side ways!";
            infoO.aniCol = "#FFFFFF";
            infoO.skinName = "zebra";
            break;
        case a_lion:
            infoO.aniName = "Lion";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to LION!\n Press W to release a mighty ROAR (Rawr!)!";
            infoO.aniCol = "#f8c923";
            infoO.skinName = "lion";
            break;

        case a_bigCat:
            infoO.aniName = "CHEETAH";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to CHEETAH!\n Press W to get a speed boost! (Every 8 seconds)!";
            infoO.aniCol = "#CAC05B";
            infoO.skinName = "bigcat/cheetah";
            break;
        case a_bear:
            infoO.aniName = "Bear";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to BEAR!\n Bears climb through green hills! (Press W to use your claw!)";
            infoO.aniCol = "#99591C";
            infoO.skinName = "bear";
            break;
        case a_croc:
            infoO.aniName = "Croc";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to CROCODILE!\n Press W to bite and drag around animals! \n+ (Now hide in water spots)+ Swim well in Mud, Lakes & Oceans!";
            infoO.aniCol = "#30F51C";
            infoO.skinName = "croc";
            break;
        case a_hippo:
            infoO.aniName = "Hippo";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to HIPPO!\nHippos are great swimmers, dominate the Lakes/Oceans/Mud!";
            infoO.aniCol = "#945A99";
            infoO.skinName = "hippo/0/hippo";
            break;
        case a_rhino:
            infoO.aniName = "Rhino";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to RHINO!\n Press W to CHARGE with your mighty horn!";
            infoO.aniCol = "#94a3a9";
            infoO.skinName = "rhino";
            break;
        case a_shrimp:
            infoO.aniName = "Shrimp";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to SHRIMP!\n A mini shrimp...";
            infoO.aniCol = "#f88e37";
            infoO.skinName = "shrimp";
            break;
        case a_trout:
            infoO.aniName = "Trout";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to TROUT!\nHint: Hold Left-click to RUN! (Uses extra water)";
            infoO.aniCol = "#ac8686";
            infoO.skinName = "trout";
            break;
        case a_crab:
            infoO.aniName = "Crab";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to CRAB!\n Crabs can survive on dry land!\n (On land, Press W to go into your shell!)";
            infoO.aniCol = "#bf2408";
            infoO.skinName = "crab";
            break;
        case a_squid:
            infoO.aniName = "Squid";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to SQUID!\n Squids can use INK when injured (press W!) \n+ you can hide in plankton bushes!";
            infoO.aniCol = "#40dda4";
            infoO.skinName = "squid";
            break;
        case a_shark:
            infoO.aniName = "Shark";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to SHARK!\n A vicious predator of the oceans!";
            infoO.aniCol = "#999fc6";
            infoO.skinName = "shark";
            break;
        case a_seaHorse:
            infoO.aniName = "Sea-horse";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to SEA HORSE!\n An agile hunter!";
            infoO.aniCol = "#73BE2F";
            infoO.skinName = "seahorse";
            break;
        case a_jellyFish:
            infoO.aniName = "Jellyfish";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to JELLYFISH!\n A slowly-turning animal that can grow quite large!";
            infoO.aniCol = "#FDB9BA";
            infoO.skinName = "jellyfish";
            break;
        case a_turtle:
            infoO.aniName = "Turtle";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to TURTLE!\n Lives well on land & water! (On land, Press W to go into your shell!)";
            infoO.aniCol = "#502E1A";
            infoO.skinName = "turtle";
            break;
        case a_stingray:
            infoO.aniName = "Stringray";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to STINGRAY!\n Use electic shock (Release W key!) to shock animals! \n(Takes time to recharge)";
            infoO.aniCol = "#164336";
            infoO.skinName = "stingray";
            break;
        case a_kraken:
            infoO.aniName = "The Kraken";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to THE KRAKEN!\n Terrorize the oceans, and be feared by all!\n (Release W to use whirlpool ability!)";
            infoO.aniCol = "#64a034";
            infoO.skinName = "kraken";
            break;
        case a_pufferFish:
            infoO.aniName = "Pufferfish";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to PUFFERFISH!\n (Hold W to inflate- become spiky, and dangerous to touch!)";
            infoO.aniCol = "#6C5C2C";
            infoO.skinName = "pufferfish";
            break;
        case a_killerWhale:
            infoO.aniName = "Killer Whale";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Killer Whale! \nWhales blow out water when diving! (And sometimes other loot!)";
            infoO.aniCol = "#141414";
            infoO.skinName = "killerwhale";
            break;
        case a_swordfish:
            infoO.aniName = "Swordfish";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n (Press W to rush with your sharp nose!)";
            infoO.aniCol = "#689CD7";
            infoO.skinName = "swordfish";
            break;
        case a_gorilla:
            infoO.aniName = "Gorilla";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Gorillas are very fast on hills/trees!\n Press W to throw bananas! (from trees)";
            infoO.aniCol = "#323232";
            infoO.skinName = "gorilla";
            break;
        case a_octopus:
            infoO.aniName = "Octopus";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Octopus!\nHold W to use your 'Disguise' ability!\n(Hint: wait for prey to bite you- they get stunned!)";
            infoO.aniCol = "#ff8340";
            infoO.skinName = "octopus";
            break;
        case a_dragon:
            infoO.aniName = "Dragon";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n (You're amazing!) \nFly over everything, Hold W to shoot fire!";
            infoO.aniCol = "#22FF8A";
            infoO.skinName = "dragon/0/dragon";
            break;
        case a_blackDragon:
            infoO.aniName = "Black Dragon";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n " + infoO.aniName + "s drink lava instead of water! " + infoO.aniName + "s only heal on healing stones/lava!";
            infoO.aniCol = "black";
            infoO.skinName = "blackdragon/blackdragon";
            break;

		            case a_obd:
            infoO.aniName = "Black Dragon";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n " + infoO.aniName + "s drink lava instead of water! " + infoO.aniName + "s only heal on healing stones/lava!";
            infoO.aniCol = "black";
            infoO.skinName = "obd/1/obd";
            break;

        case a_giantSpider:
            infoO.aniName = "Giant Spider";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Place web around the game to catch prey!";
            infoO.aniCol = "black";
            infoO.skinName = "giantSpider";
            break;

        case a_cobra:
            infoO.aniName = "Cobra";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Hold W to Spit venom, and poison animals with your bite!";
            infoO.aniCol = "black";
            infoO.skinName = "cobra";
            break;

        case a_boaConstrictor:
            infoO.aniName = "Boa Constrictor";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Coil and suffocate other animals!";
            infoO.aniCol = "black";
            infoO.skinName = "boaConstrictor";
            break;

        case a_trex:
            infoO.aniName = "T-REX";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + " The Dinosaur!\n This ancient dinosaur has powerful jaws that can drag prey around!!";
            infoO.aniCol = "#862A2A";
            infoO.skinName = "trex";
            break;
        case a_tiger:
            infoO.aniName = "Tiger";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Tiger!\n Tigers can launch an ambush attack (HOLD W to grow a bush) Release to attack!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "tiger";
            break;
        case a_skink:
            infoO.aniName = "Skink";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Skink!\n Skins can press W to release your tail!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "skink";
            break;
        
                case a_sloth:
            infoO.aniName = "Sloth";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Sloth!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "sloth";
            break;
        
                        case a_taver:
            infoO.aniName = "Tavershad";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Tavershad!\n Tee see e see aver wad? Eees waver havers ta TAVERSHOUT!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "taver";
            break;
                                        case a_tornado:
            infoO.aniName = "Tornado";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Tornado!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "tornado/tornado0";
            break;
                                 case a_minibd:
            infoO.aniName = "Baby Black Dragon";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Baby Black Dragon!";
            infoO.aniCol = "#FF9000";
        if (this.animalSpecies == 1) {
            infoO.skinName = "cursedbd"; 
        } else {
            infoO.skinName = "blackdragonmini";
        }
            break;
                                case a_waterbear:
            infoO.aniName = "Tardigrade";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Tardigrade!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "waterbear/0/water_bear";
            break;
                                       case a_beluga:
            infoO.aniName = "Beluga";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Beluga!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "beluga";
            break;
        
                case a_cachalot:
            infoO.aniName = "Cachalot";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Cachalot!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "cachalot";
            break;
        
        
                                                                  case a_glaciermonster:
            infoO.aniName = "Glacier Monster";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n A fearsome, slow moving arctic animal that is faster in water and hills (10% slower)\n Ambush your prey and freeze them multiple times!\n If you miss youll stun yourself"; 
            infoO.aniCol = "#FF9000";
            infoO.skinName = "arcticsnake";
            break;
        
        
                                              case a_beaver:
            infoO.aniName = "Beaver";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Beaver!\n A animal adapted to land and ocean \n Spawn dams that block and damage animals.";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "beaver";
            break;
      
        
                                case a_lavacolossal:
            infoO.aniName = "Lava Colossial";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Lava Colossal! Summon a dangerous volcano to defend your territory, very weak in the water.";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "lavacolossal";
            break;
        
                        case a_bigfin:
            infoO.aniName = "Big Fin Squid";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Big Fin Squid!\n Press W to shoot out a tenticle that grabs and pulls animals!\n Press q to shoot out another tenticle that latches and pulls you towards animals! ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "bigfin";
            break;
        
                                case a_titanboa:
                let extrastart = ["Mighty", "Ominous", "Great", "Mythical", "The"];
            infoO.aniName = extrastart[Math.floor(Math.random() * extrastart.length)] + " Titanboa";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Titanboa" ;
            infoO.aniCol = "#FF9000";
            infoO.skinName = "titanboa";
            break;
        
                                                    case a_edgepi:
            let tonas = ["Tona Swona!", "Ohehehe!", "Ohehehe!", "Mona!", "The Hapona!"];
            infoO.aniName = "Edgepi\n" + tonas[Math.floor(Math.random() * tonas.length)];
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Edgepi Ohehehehe\n Frona Edgepiland Missisipi tona mona swona bigona friona, hapona ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "edgepi/0/edgepi";
            break;
                                case a_bigmouse:
            infoO.aniName = "Obese Mouse";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Obese Mouse!\n You are a BOSS! ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "boss/mouse";
            break;
                                        case a_slug:
            infoO.aniName = "Slug";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Slug!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "slug/0/slug";
            break;
        

		                                            case a_astraltrex:
            infoO.aniName = "Celestial Trex!";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Celestial Trex!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "astraltrex/astraltrex";
            break;
                                        case a_astraldragon:
            infoO.aniName = "Astral Dragon!";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Astral Dragon!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "astraldragon";
            break;
        
                        case a_leopardseal:
            infoO.aniName = "Leopard Seal";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Leopard Seal!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "leopardseal";
            break;
        case a_giraffe:
            infoO.aniName = "Giraffe";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Giraffe!\nGiraffe have huge legs and stomp anyone in their way!";
            infoO.aniCol = "#E9BD23";
            infoO.skinName = "giraffe";
            break;


        case a_eagle:
            infoO.aniName = "Eagle";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Eagle!\nEagles can fly up other animals in the air!\n (Tip: Fly high yourself by pressing q)";
            infoO.aniCol = "#5b400d";
            infoO.skinName = "eagle";
            break;

        case a_arcticFox:
            infoO.aniName = "Arctic Fox";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can block hiding holes to kick players out! (Press W when in one!)\n+ Hide in red berry bushes!";
            infoO.aniCol = "#CFCFCF";
            infoO.skinName = "arctic/arcticfox";
            break;
        case a_arcticHare:
            infoO.aniName = "Arctic Hare";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\nPress W to burrow a hole to hide in!";
            infoO.aniCol = "#D5D5D5";
            infoO.skinName = "arctic/arctichare";
            break;
        case a_yeti:
            infoO.aniName = "The Yeti!";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n So it really exists... \n Hold W to turn into snow, release W to freeeeeze!";
            infoO.aniCol = "#839eb5";
            infoO.skinName = "arctic/yeti";
            break;
        case a_chipmunk:
            infoO.aniName = "Chipmunk";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n A little chipmunk..."; //A little "+infoO.aniName+"...";
            infoO.aniCol = "#A77C30";
            infoO.skinName = "arctic/chipmunk";
            break;

        case a_muskox:
            infoO.aniName = "Muskox";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Press W to charge with your horns! \nPlus move decently on ice!";
            infoO.aniCol = "#231f18";
            infoO.skinName = "arctic/muskox";
            break;
        
                case a_pondturtle:
            infoO.aniName = "Pond Turtle";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Press W to suck animals towards you!";
            infoO.aniCol = "#231f18";
            infoO.skinName = "pondturtle/pondturtle";
            break;
        
                        case a_pike:
            infoO.aniName = "Pike";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Hold W to hide underwater and use a lotus as a bait animals and rush them! \nTip: You can eat your own lotus!";
            infoO.aniCol = "#231f18";
            infoO.skinName = "pike/pike";
            break;
        
                                                            case a_clownfish:
            infoO.aniName = "Clownfish";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n A small clownfish... \n You're immune to anemones!";
            infoO.aniCol = "#231f18";
            infoO.skinName = "clownfish";
            break;
        
                                                                    case a_searobin:
            infoO.aniName = "Sea Robin";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can open your fins to speed up and detect diving animals! \n(Hint: You can walk on land!)";
            infoO.aniCol = "#231f18";
            infoO.skinName = "searobin/searobin";
            break;
        
                                                                            case a_cuttlefish:
            infoO.aniName = "Cuttlefish";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can open your fins to speed up and detect diving animals!";
            infoO.aniCol = "#231f18";
            infoO.skinName = "cuttlefish/cuttlefish";
            break;

		    		                                                            case a_horseshoe:
            infoO.aniName = "Horseshoe Crab";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can block attacks at the front but watch out for your backside! \n(Hint: You can walk on land!) ";
            infoO.aniCol = "#231f18";
            infoO.skinName = "horseshoecrab";
            break;
		    

		    		    		                                                            case a_easterbunny:
            infoO.aniName = "Easter Bunny";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Press w to lay a fake egg and press Q to do a giant hop. ";
            infoO.aniCol = "#231f18";
            infoO.skinName = "easterbunny";
            break;
		    
		    		                                                            case a_testsnake:
            infoO.aniName = "Death Worm";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can block attacks at the front but watch out for your backside! \n(Hint: You can walk on land!) ";
            infoO.aniCol = "#231f18";
            infoO.skinName = "testsnake/testsnake";
            break;
		                                                            case a_catfish:
            infoO.aniName = "Catfish";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can open your mouth and swallow animals!";
            infoO.aniCol = "#231f18";
            infoO.skinName = "catfish/catfish";
            break;
        
                                                    case a_cakemonster:
            infoO.aniName = "Cake Monster";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can throw cakes that explodes!";
            infoO.aniCol = "#231f18";
            infoO.skinName = "cakemonster";
            break;
        
                                            case a_manatee:
            infoO.aniName = "Manatee";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You have increased healing! Press W to reverse and take other animals healing.";
            infoO.aniCol = "#231f18";
            infoO.skinName = "manatee";
            break;
        
        
                case a_pengu:
         if (oldmope) {
                       infoO.aniName = "Penguin";
         } else {
                       infoO.aniName = "Galapagos Penguin";
         }
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Left-click to run!\n (HOLD W to slide FAST on ice)!";
            infoO.aniCol = "#FFFFFF";
            infoO.skinName = "arctic/penguin/3/penguin";
            break;
        
        case a_penguin:
            infoO.aniName = "Penguin";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Left-click to run!\n (HOLD W to slide FAST on ice)!";
            infoO.aniCol = "#FFFFFF";
            infoO.skinName = "arctic/penguin";
            break;
        case a_polarBear:
            infoO.aniName = "Polar Bear";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Polar bears can climb hills! \n+ They're amazing swimmers!";
            infoO.aniCol = "#e4e4e4";
            infoO.skinName = "arctic/polarbear";
            break;
        case a_seal:
            infoO.aniName = "Seal";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Seals can slide on ice (Hold W) + can climb hills (rocks too!)";
            infoO.aniCol = "#cfcfcf";
            infoO.skinName = "arctic/seal";
            break;
        case a_snowLeopard:
            infoO.aniName = "Snow leopard";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Press W to get a speed boost! (Every 8 seconds)!";
            infoO.aniCol = "#cfcfcf";
            infoO.skinName = "arctic/snowleopard";
            break;
        case a_walrus:
            infoO.aniName = "Walrus";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can slide on ice (Hold W) + can climb hills (rocks too!)";
            infoO.aniCol = "#633838";
            infoO.skinName = "arctic/walrus";
            break;
        case a_reindeer:
            infoO.aniName = "Reindeer";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Press W to dig up food! \n Your sharp hooves let you turn very well on ice!";
            infoO.aniCol = "#a68976";
            infoO.skinName = "arctic/reindeer";
            break;
        case a_wolf:
            infoO.aniName = "Wolf";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Wolf paws turn very well on ice!\n Press W to howl!";
            infoO.aniCol = "#6B6B6B";
            infoO.skinName = "arctic/wolf/0";
            break;
        case a_wolverine:
            infoO.aniName = "Wolverine";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Press W to Let out a Powerful GROWL! (Knocks back prey!)";
            infoO.aniCol = "#843A0F";
            infoO.skinName = "arctic/wolverine";
            break;
        case a_mammoth:
            infoO.aniName = "Mammoth";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Press W to roll snowballs with your trunk!\n The bigger the snowball gets, the longer the freeze!";
            infoO.aniCol = "#9d4717";
            infoO.skinName = "arctic/mammoth";
            break;
        case a_donkey:
            infoO.aniName = "Donkey";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Press W to Kick any animal behind you";
            infoO.aniCol = "#8c7c64";
            infoO.skinName = "donkey/0/donkey";
            break;
            /* NEW ANIMALS */
        case a_sabertoothTiger:
            infoO.aniName = "Sabertooth Tiger";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Sabertooth Tiger!\nSabertooth Tigers are great swimmers, dominate the Lakes/Oceans/Mud!";
            infoO.aniCol = "#945A99";
            infoO.skinName = "sabertoothtiger";
            break;
        case a_elephant:
            infoO.aniName = "Elephant";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Use your long trunk to attack and eat food!";
            infoO.aniCol = "#945A99";
            infoO.skinName = "elephant";
            break;

        case a_cassowary:
            infoO.aniName = "Cassowary";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Hold W to charge up a kick, the longer you hold, the more powerful it is!";
            infoO.aniCol = "#000000";
            infoO.skinName = "cassowary/cassowary";
            break;
        
          case a_flamingo:
            infoO.aniName = "Flamingo";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Hold W to charge up a kick, the longer you hold, the more powerful it is!";
            infoO.aniCol = "#000000";
            infoO.skinName = "flamingo/flamingo";
            break;
        
          case a_peacock:
            infoO.aniName = "Peacock";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Hold W to charge up a kick, the longer you hold, the more powerful it is.!";
            infoO.aniCol = "#000000";
            infoO.skinName = "peacock";
            break;

        
        case a_blueWhale:
            infoO.aniName = "Blue Whale";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Blue Whale!\n Smash with your powerful tail!";
            infoO.aniCol = "#945A99";
            infoO.skinName = "bluewhale";
            break;

        // case a_duck:
        //     infoO.aniName = "Duck";
        //     infoO.aniDesc = "";
        //     infoO.upgradeText = "UPGRADED to a DUCK!";
        //     infoO.aniCol = "#FF9000";
        //     infoO.skinName = "duck";
        //     break;
        case a_duckling:
            infoO.aniName = "Duckling";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to a DUCK!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "duck/duckling";
            break;

        case a_hedgehog:
            infoO.aniName = "Hedgehog";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Hedgehog!\n (Hold W to become spiky, and dangerous to touch!)";
            infoO.aniCol = "#5b400d";
            infoO.skinName = "hedgehog";
            break;


        case a_kingCrab:
            infoO.aniName = "King Crab";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to a KING CRAB!";
            infoO.aniCol = "#971f0e";
            infoO.skinName = "kingcrab";
            break;
        case a_lemming:
            infoO.aniName = "Lemming";
            infoO.aniDesc = "";
            infoO.upgradeText = ""; //A little "+infoO.aniName+"...";
            infoO.aniCol = "#A77C30";
            infoO.skinName = "arctic/lemming";
            break;

        case a_frog:

            infoO.aniName = "Frog";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Frog!!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "frog/frog";

            break;

        case a_ostrich:

            infoO.aniName = "Ostrich";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Ostrich! Lay eggs to hatch babies! \nCommand babies by placing your crosshair (right-click/W)-\n They can attack prey!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "ostrich/ostrich";

            break;
        case a_pelican:

            infoO.aniName = "Pelican";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Pelican! \nPick up water (and prey!) in your mouth,\nfly, and drop water on prey! (press W again)";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "pelican/pelican";

            break;
        case a_falcon:

            infoO.aniName = "Falcon";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Falcon! \nFly, and do a powerful dive attack! Aim it well.";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "falcon/falcon";

            break;
        case a_thunderbird:

            infoO.aniName = "The Thunderbird!";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Thunderbird! \nFly, and do a powerful thunderous dive attack!\nWhen flying stay still to blend with the sky!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "thunderbird/thunderbird";

            break;
        case a_snowyOwl:

            infoO.aniName = "Snowy Owl";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Snowy Owl!\n Aim the crosshair, \n right click/W when it's on top of prey, to attack!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "snowyowl/snowyowl";

            break;


        case a_ostrichBaby:

            infoO.aniName = "Baby Ostrich";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Baby Ostrich!!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "ostrich/baby-ostrich";

            break;
        case a_phoenix:

            infoO.aniName = "Phoenix";
            infoO.upgradeText = "UPGRADED to Rat!\nCreate powerful fire tornados to burn your enemies alive!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "phoenix/phoenix";
            break;

        case a_seaMonster:
            infoO.aniName = "Sea Monster";
            infoO.upgradeText = "UPGRADED to Sea Monster!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "seamonster";
            break;
        case a_landMonster:
            infoO.aniName = "Land Monster";
            infoO.upgradeText = "UPGRADED to Land Monster!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "landmonster";
            break;
        case a_iceMonster:
            infoO.aniName = "Ice Monster";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Use powerful ice shards to freeze your prey!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "monsters/icemonster/icemonster";
            break;
        case a_dinoMonster:
            infoO.aniName = "Dino Monster";
            infoO.upgradeText = "UPGRADED to Dino Monster!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "dinomonster";
            break;
        case a_pigeon:
            infoO.aniName = "Pigeon";
            infoO.upgradeText = "UPGRADED to Pigeon!\nHold W to fly around. ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "pigeon/pigeon";
            break;
        case a_toucan:
            infoO.aniName = "Toucan";
            infoO.upgradeText = "UPGRADED to Toucan!\nHold W to fly around. ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "toucan/toucan";
            break;
        
        case a_topdragon:
            infoO.aniName = "EvilSprit";
            infoO.upgradeText = "UPGRADED to EvilSprit!\nYour amazing. ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "EvilSprit";
            break;
        
        case a_menhir:
            infoO.aniName = "Menhir";
            infoO.upgradeText = "UPGRADED to Menhir!\nMen Hir Hir Hir! ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "menhir";
            break;
        case a_crackedhir:
            infoO.aniName = "Cracked Menhir";
            infoO.upgradeText = "UPGRADED to Cracked Menhir!\nYou exploded too hard but luckly you survived! ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "crackedmenhir";
            break;
                case a_capybara:
            infoO.aniName = "Capybara";
            infoO.upgradeText = "UPGRADED to Capybara! ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "capybara";
            break;
        
                        case a_qilin:
            infoO.aniName = "Qilin";
            infoO.upgradeText = "UPGRADED to Qilin! ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "qilin";
            break;
                        case a_gaur:
            infoO.aniName = "Gaur";
            infoO.upgradeText = "UPGRADED to Gaur! \nGaur is an extremely powerful animal that can kick, and use its horns to battle their opponent.";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "gaur/0/gaur";
            break;
        case a_alligator:
            infoO.aniName = "Alligator";
            infoO.upgradeText = "UPGRADED to Cracked Menhir!\nYou exploded too hard but luckly you survived! ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "alligator";
            break;


        default:
            infoO.aniName = "(Animal)";
            infoO.aniDesc = "";
            infoO.aniCol = "#000000";
            infoO.upgradeText = "UPGRADED!";
    }

    return infoO;
}

function onAniTypeSet() {

}


///////
// file: js_src/gameobj/ability/AbilityType.js
///////

var ability_dive = 100,
  ability_boost = 101,
  ability_digUnderground = 1,
  ability_shell = 2,
  ability_stingRayShock = 3,
  ability_squidInk = 4,
  ability_krakenSpec = 5,
  ability_whaleBlow = 6,
  ability_octoDisguise = 7,
  ability_iceSlide = 8,
  ability_charge = 9,
  ability_pufferFishPuff = 10,
  //new abilities! :)
  ability_yetiTransform = 11,
  ability_wolfHowl = 12,
  ability_snowShot = 13,
  ability_clawSlash = 14,
  ability_extraBoost = 15,
  ability_snowPoop = 16,
  ability_mammothThrow = 17,
  ability_lionRoar = 18,
  ability_fireShoot = 19,
  ability_backLegKick = 20,
  ability_crocWaterGrab = 21,
  ability_makeHidingHole = 22,
  ability_foxhidingHoleKickout = 23,
  ability_fruitThrow = 24,
  ability_foodSlowDig = 25,
  ability_jellyFishSting = 26,
  ability_spawnGrass = 27,
  ability_orcaWave = 28,
  ability_fireShoot2 = 30,
  ability_elephantTrunkSmack = 31,
  ability_whaleTailHit = 32,
  ability_sabertoothJawAttack = 33,
  ability_cobraVenomSpit = 34,
  ability_spiderWeb = 35,
  ability_boaSuffocate = 36,
  // trex update
  ability_trexShake = 37,
  ability_tiger = 38,
  ability_tigerSlash = 39,
  ability_tigerJump = 40,
  ability_pounce = 41,
  ability_giraffeStomp = 42,
  ability_zebraKick = 43,
  ability_sharkBite = 46,
  ability_eagleAttack = 47,
  ability_fart = 48,
  ability_hedgehogAttack = 49,
  ability_crabSmash = 51,
  ability_ostrich = 54,
  ability_pelican = 55,
  ability_waterSplash = 56,
  ability_falconAttack = 57,
  ability_owlAttack = 58,
  ability_targetCircle = 59,
  ability_honeyBee = 60,
  ability_phoenix = 61,
  ability_bearSlash = 62,
  // monster update
  ability_seaMonsterSpec = 63,
  ability_pigeon = 64,
  ability_toucan = 65,
  ability_landmonsterSpec = 66,
  ability_1v1 = 67,
  ability_1v1Arena = 68,
  ability_soccerPass = 69,
  ability_soccerKick = 70,
  ability_goalScored = 71,
  ability_zombieInfection = 72,
  ability_tsunamiWave = 73,
  ability_finalhit = 74,
  ability_flyhigh = 75,
  ability_freezeprey = 76,
  ability_kickinair = 77,
  ability_thunderbirdAttack = 78,
   ability_stingscorp= 79,
   ability_pterodactyl= 80,
    ability_spear = 81;
ability_cassokick = 82;
ability_menhirboom = 83;
ability_alligatorslap = 84;
ability_alligatorgrab = 85;
ability_electricshock = 86;
ability_groan = 87;
ability_clickbait = 88;
ability_flail = 89;
ability_hop = 90;
ability_oldeagleattack = 91;
ability_shellsmash = 92;
ability_polarbearslash = 93;
ability_giantink = 94;
ability_giantinktop = 95;
  ability_inkrush = 96,
      ability_mandarinshoot = 97,
          ability_kickandram = 98,
    ability_tavershout = 99;
    ability_roll = 102;
ability_burningstar = 103;
ability_tornadorelease = 104;
//moe.io update
ability_fireblast = 105;
ability_controlflock = 106;
ability_clicks = 107;
ability_battleRoyale = 108,
ability_tentaclegrab = 109,
ability_slide = 110,
ability_storm = 111,
  //SKIP 112
  ability_kamui = 113,
ability_kamui2 = 114,
ability_snakewrap = 115,
ability_snakehead = 116,
ability_eruption = 117,
ability_dam = 118,
ability_flykick = 120,
ability_flametrail = 121,
ability_dashcombo = 122,
ability_passivekick = 123,
ability_maul = 124,
ability_psychic = 125,
ability_suction = 126,
ability_nip = 127,
ability_cakebomb = 129,
ability_limitlessorb = 130,
ability_openfins = 131,
ability_hypnotise = 132,
ability_swallow = 133,
ability_waterspray = 134,
ability_shotgunfire = 135,
	//136
ability_easterbomb = 137,
ability_easterhop = 138,
  ability_none = 0;
var infoForAbilityT = function(abilT) {
  var infoO = {};
  var zombieFolder = "";

  var myPlayer = gameObjsByID[myPlayerID];

  

  switch (abilT) {
      
      case ability_pterodactyl:
        infoO.abilName = "Dive Attack\n(Fly with Prey)";
      if(myPlayer){
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +"/" +
        myPlayer.animalSpecies + "/"
        +
        "kick.png";
      }
      break;

		                                          case ability_waterspray:
      infoO.abilName = "Water Spray";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;

                                        case ability_swallow:
      infoO.abilName = "Swallow Prey";
      infoO.abilImg =
        "skins/catfish/catfish2.png";
      break;
		                                          case ability_easterbomb:
		  var eggtype = myPlayer.curBiome
		 if (myPlayer.curBiome == 3 || myPlayer.curBiome == 4) {
                   eggtype = 3
		} else if (myPlayer.flag_inReef) {
		eggtype = 8
		  } else if (myPlayer.curBiome == 5) {
                   eggtype = 0
		  } else if (myPlayer.curBiome > 4) {
                   eggtype = 0
		  }
      infoO.abilName = "Fake Egg Bomb";
      infoO.abilImg =
        "img/eastereggs/" + eggtype + ".png";
      break;

		  		                                          case ability_easterhop:
      infoO.abilName = "Easter Hop";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
		                                          case ability_openfins:
      infoO.abilName = "Open Fins";
      infoO.abilImg =
        "skins/searobin/fins0.png";
      break;

		  
                                        case ability_hypnotise:
      infoO.abilName = "Hypnotize";
var imgType = Math.ceil(((timestamp) % 1000)/500);
		  if (imgType == 0) {
			  imgType = 1
		  }
      infoO.abilImg =
        "skins/cuttlefish/cuttlefish" + imgType + ".png";
      break;
               
                                        case ability_limitlessorb:
      infoO.abilName = "Cursed Technique:\n Lapse Blue";
      infoO.abilImg =
        "img/orb/blue.png";
      break;
      
                                  case ability_cakebomb:
      infoO.abilName = "Cake Bomb!";
      infoO.abilImg =
        "img/ability_cakebomb.png";
      break;
      
      
                            case ability_suction:
      infoO.abilName = "Suction";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
      
                      case ability_maul:
      infoO.abilName = "Charge & Maul";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
      
      
                            case ability_nip:
      infoO.abilName = "Nip";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
      
      
                case ability_slide:
      infoO.abilName = "Slide On Everything";
      infoO.abilImg =
        "skins/arctic/penguin/" + myPlayer.animalSpecies + "/penguin2.png";
      break;
      
                                  case ability_fireblast:
      infoO.abilName = "Flame Blast";
            infoO.abilImg =
        "skins/phoenix/" + myPlayer.animalSpecies + "/phoenix.png"
      break;
      
                                  case ability_flametrail:
      infoO.abilName = "Flame Trail";
      infoO.abilImg =
        "skins/phoenix/" + myPlayer.animalSpecies + "/phoenix.png"
      break;
      
                            case ability_dam:
      infoO.abilName = "Build Dam";
      infoO.abilImg =
        "img/dam.png";
      break;
      
                                  case ability_flykick:
      infoO.abilName = "Fly Dive & Kick";
      infoO.abilImg =
        "skins/secretarybird/secretarybird.png";
      break;
      
      
      
                      case ability_kamui:
      infoO.abilName = "Kamui";
      infoO.abilImg =
        "img/ability_kamuieye.png";
      break;
      
          case ability_clicks:
      infoO.abilName = "Multiple Clicks";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
      
                case ability_storm:
      infoO.abilName = "Fly & Storm Creation";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
      
                      case ability_passivekick:
      infoO.abilName = "Passive:\n Bite & Kick";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
      
      
                                    case ability_controlflock:
      infoO.abilName = "Control Flock";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        "pigeon/0/pigeon.png";
      break;
      
                              case ability_roll:
      infoO.abilName = "Rollout!";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        "waterbear/" +
        myPlayer.animalSpecies + "/"
        +
        "water_bear_1.png";
      break;
      
                        case ability_tavershout:
      infoO.abilName = "Tavershout!";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        "taver.png";
      break;
      
          case ability_dashcombo:
      infoO.abilName = "Boost & Freeze Combo!";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
      
                  case ability_kickandram:
      infoO.abilName = "Kick and Ram!";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        "gaur/" + myPlayer.animalSpecies + "/gaur3.png";
      break;
      
                  case ability_bearSlash:
      infoO.abilName = "Slash";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        "bear.png";
      break;
      
                  case ability_polarbearslash:
      infoO.abilName = "Slash";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        "arctic/polarbear.png";
      break;
      
      case ability_menhirboom:
      infoO.abilName = "Explosion";
      infoO.abilImg =
        "img/" +
        zombieFolder +
        "explosion.png";
      break;
      
            case  ability_tentaclegrab:
      infoO.abilName = "Tentacle Grab";
      infoO.abilImg =
        "img/" +
        zombieFolder +
        "ability_tentaclegrab.png";
      break;
      
      
                  case  ability_snakewrap:
      infoO.abilName = "Stretch & Constrict";
      infoO.abilImg =
        "img/" +
        zombieFolder +
        "ability_snake.png";
      break;
      
                  case ability_shellsmash:
      infoO.abilName = "Shell Smash";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        "tortise/tortise2.png";
      break;
      
            case ability_hop:
      infoO.abilName = "Hop";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        "sheep/" + myPlayer.animalSpecies + "/sheep2.png";
      break;
      
      case ability_electricshock:
      infoO.abilName = "Electric Shock";
      infoO.abilImg =
        "img/" +
        zombieFolder +
        "eelshock.png";
      break;
      
      case ability_alligatorslap:
      infoO.abilName = "Grab & Drown";
      infoO.abilImg =
        "skins/alligatorbite.png";
      break;
      
    
    case ability_alligatorgrab:
      infoO.abilName = "Trash";
      infoO.abilImg =
        "img/" +
        zombieFolder +
        "alligatorbite.png";
      break;
        
      
       case ability_cassokick:
      infoO.abilName = "Charge and Kick";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        "cassowary/" +
        "kick.png";
      break;
      
      
    case ability_stingscorp:
      
        infoO.abilName = "Sting!\n(Shivers Prey)";
       if(myPlayer){
      infoO.abilImg =
        "skins/desert/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName + "/" +
        myPlayer.animalSpecies + "/"
        +
        "scorpion_ability.png";
              }
      break;
    case ability_eruption:
      infoO.abilName = "Volcano Eruption!";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_whaleTailHit:
      infoO.abilName = "Tail Slap";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
        case ability_finalhit:
   if(myPlayer){
      infoO.abilName = "Tail Slap";
      infoO.abilImg =
         "skins/" +
          zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName + "/" +
        myPlayer.animalSpecies + "/"
        +
        "tail.png";
     }
      break;
      
      
         case ability_tornadorelease:
      infoO.abilName = "Release";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
      
    case ability_elephantTrunkSmack:
      infoO.abilName = "Trunk Hit";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
          case ability_flail:
      infoO.abilName = "Tail Flail";
      infoO.abilImg = "img/ability_flail.png";
      break;
    case ability_dive:
      infoO.abilName = "Dive";
      infoO.abilImg = "img/ability_dive.png";
      break;
    case ability_foodSlowDig:
      infoO.abilName = "Dig For Food";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_shell:
      infoO.abilName = "Shell";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        "2.png";
      break;
    case ability_crocWaterGrab:
      infoO.abilName = "Bite Drag";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_boaSuffocate:
      infoO.abilName = "Suffocate prey";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;

    case ability_pelican:
      infoO.abilName = "Fly with water";
      infoO.abilImg = "skins/pelican/ability_pelican.png";
      break;
      
      
    case ability_octoDisguise:
      infoO.abilName = "Disguise";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
      
          case ability_inkrush:
      infoO.abilName = "Ink Rush";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_makeHidingHole:
      infoO.abilName = "Burrow Hole";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_foxhidingHoleKickout:
      infoO.abilName = "Block Hole";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_kickinair:
      
       infoO.abilName = "Kick in air";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_charge:
      infoO.abilName = "Charge";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_mammothThrow:
      infoO.abilName = "Roll snow";
      infoO.abilImg = "img/snowball.png";
      break;
    case ability_cobraVenomSpit:
      infoO.abilName = "Venom Spit";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_spiderWeb:
      infoO.abilName = "Spin Web";
      infoO.abilImg = "img/spiderWeb.png";
      break;
    case ability_snowShot:
      infoO.abilName = "Throw Snow";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_snowPoop:
      infoO.abilName = "Drop Snow";
      infoO.abilImg = "img/snowball.png";
      break;

    case ability_lionRoar:
      infoO.abilName = "Loud Noise";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_clawSlash:
      infoO.abilName = "Claw Slash";
      infoO.abilImg = "img/ability_claw.png";
      break;
    case ability_squidInk:
      infoO.abilName = "Ink";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_stingRayShock:
      infoO.abilName = "Shock";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_digUnderground:
      infoO.abilName = "Hold to Dig";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_wolfHowl:
      infoO.abilName = "Howl";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_fruitThrow:
      infoO.abilName = "Throw Fruit";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_orcaWave:
      infoO.abilName = "Cause Wave";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_extraBoost:
      infoO.abilName = "Extra Boost";

      if (myPlayerLastAniT == a_bigCat) {
        if (myPlayer) {
          var aniInfoO = myPlayer.animalInfo();
          infoO.abilImg = "skins/" + zombieFolder + aniInfoO.skinName + ".png";
        }
      } else
        infoO.abilImg =
          "skins/" +
          zombieFolder +
          infoForAnimalType(myPlayerLastAniT).skinName +
          ".png";
      break;
      
          case ability_burningstar:
      infoO.abilName = "Burning Star";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;

      
    case ability_iceSlide:
      infoO.abilName = "Slide on ice";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;

    case ability_pufferFishPuff:
      infoO.abilName = "Inflate";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_hedgehogAttack:
      infoO.abilName = "Spikes";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        "2.png";
      break;
    case ability_fireShoot:
      infoO.abilName = "Fire";
      infoO.abilImg = "img/fire.png";
      break;
    case ability_shotgunfire:
      infoO.abilName = "Shotgun\nFire";
      infoO.abilImg = "img/fire.png";
      break;
    case ability_yetiTransform:
       infoO.abilName = "Yeti Roar!";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName + "/" +
        myPlayer.animalSpecies + "/"
        +
        "ability.png";
      break;
    case ability_fireShoot2:
      infoO.abilName = "Firestream\n& Tail Slap";
      infoO.abilImg = "img/fire.png";
      break;

    case ability_crabSmash:
      infoO.abilName = "Arm Smash";

      infoO.abilImg = "img/ability_crabSmashSkin.png";
      break;

    case ability_trexShake:
      infoO.abilName = "Jaws Bite";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;

    case ability_sharkBite:
      infoO.abilName = "Jaws Bite";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;

    case ability_ostrich:
      infoO.abilName = "Command Babies";
      infoO.abilImg = "skins/" + zombieFolder + "ostrich/ostrich-baby.png";
      break;

    case ability_owlAttack:
      infoO.abilName = "Target prey";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_falconAttack:
      infoO.abilName = "Sky dive";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
   case ability_thunderbirdAttack:
      infoO.abilName = "Thunderous\nDive";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_tiger:
      infoO.abilName = "Ambush Attack";
      var myPlayer = gameObjsByID[myPlayerID];

      if (myPlayer) {
        var aniInfoO = myPlayer.animalInfo();
        infoO.abilImg = "skins/" + zombieFolder + aniInfoO.skinName + ".png";
      }
      //infoO.abilImg = "skins/" + infoForAnimalType(myPlayerLastAniT).skinName + ".png";
      break;

    case ability_giraffeStomp:
      infoO.abilName = "Stomp";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_eagleAttack:
      infoO.abilName = "Fly with prey";

      if (myPlayer) {
        var aniInfoO = myPlayer.animalInfo();

        infoO.abilImg = "skins/" + zombieFolder + "eagle/" + myPlayer.animalSpecies + "/eagle" + ".png";
      }
      /*
      infoO.abilImg =
        "skins/" + infoForAnimalType(myPlayerLastAniT).skinName + ".png";
        */
      break;
      
          case  ability_oldeagleattack:
      infoO.abilName = "Fly with prey";

      if (myPlayer) {
        var aniInfoO = myPlayer.animalInfo();

        infoO.abilImg = "skins/" + zombieFolder + "eagle/" + 2 + "/eagle" + ".png";
      }
      /*
      infoO.abilImg =
        "skins/" + infoForAnimalType(myPlayerLastAniT).skinName + ".png";
        */
      break;
      
    case ability_fart:
      infoO.abilName = "Stink";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
    case ability_pigeon:
    case ability_toucan:
      infoO.abilName = "HOLD to fly";

      var myPlayer = gameObjsByID[myPlayerID];

      if (myPlayer) {
        var aniInfoO = myPlayer.animalInfo();
        infoO.abilImg = "skins/" + zombieFolder + aniInfoO.skinName + ".png";
      }
      break;
   case ability_flyhigh:
      infoO.abilName = "Fly High";

      var myPlayer = gameObjsByID[myPlayerID];

      if (myPlayer) {
        var aniInfoO = myPlayer.animalInfo();
        infoO.abilImg = "skins/" + zombieFolder + aniInfoO.skinName + ".png";
      }
      break;
       case ability_freezeprey:
      infoO.abilName = "Freeze Prey!";

      var myPlayer = gameObjsByID[myPlayerID];

      if (myPlayer) {
        var aniInfoO = myPlayer.animalInfo();
        infoO.abilImg = "skins/" + infoForAnimalType(myPlayerLastAniT).skinName + ".png";
      }
      break;
    case ability_phoenix:
      infoO.abilName = "Fire Tornado";
      infoO.abilImg = "img/firetornado.png";
      break;

    case ability_landmonsterSpec:
      infoO.abilName = "Sink Hole";

      infoO.abilImg =
        "skins/" + infoForAnimalType(myPlayerLastAniT).skinName + ".png";

      break;
    case ability_seaMonsterSpec:
      infoO.abilName = "Giant Whirlpool";

      infoO.abilImg =
        "skins/" + infoForAnimalType(myPlayerLastAniT).skinName + ".png";

      break;
    case ability_groan:
      infoO.abilName = "Groan";

      infoO.abilImg =
        "img/ability_hippo.png";

      break;      
    case ability_psychic:
      infoO.abilName = "Psychic";

      infoO.abilImg =
        "skins/" + infoForAnimalType(myPlayerLastAniT).skinName + ".png";

      break;      
    case ability_zombieInfection:
      infoO.abilName = "Zombie Infection";
      infoO.abilImg = "img/ability_infection.png";
      break;

    default:
      infoO.abilName = "Ability";
      infoO.abilImg =
        "skins/" +
        zombieFolder +
        infoForAnimalType(myPlayerLastAniT).skinName +
        ".png";
      break;
  }
  return infoO;
};
///////
// file: js_src/game/particle.js
///////


var p_confetti = 1;


///////
// file: js_src/game/utils.js
///////



//UTILITIES
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


var getRandomDouble = function(min, max) {
  return Math.random() * (max - min) + min;
}

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var angle_1to360 = function(angle) {
var angle = (Math.trunc(angle) % 360) + (angle - Math.trunc(angle)); //converts angle to range -360 + 360
  if (angle > 0.0)
    return angle;
  else
    return angle + 360.0;
}
//convert ip string to int32
var dot2numIP = function(dot) {
  var d = dot.split('.');
  return ((((((+d[0]) * 256) + (+d[1])) * 256) + (+d[2])) * 256) + (+d[3]);
}
//convert int32 num to ip string
var num2dotIP = function(num) {
  var d = num % 256;
  for (var i = 3; i > 0; i--) {
    num = Math.floor(num / 256);
    d = num % 256 + '.' + d;
  }
  return d;
}
//replace part of url
var removeParam = function(key, sourceURL) {
  var rtn = sourceURL.split("?")[0],
    param,
    params_arr = [],
    queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
  if (queryString !== "") {
    params_arr = queryString.split("&");
    for (var i = params_arr.length - 1; i >= 0; i -= 1) {
      param = params_arr[i].split("=")[0];
      if (param === key) {
        params_arr.splice(i, 1);
      }
    }
    rtn = rtn + "?" + params_arr.join("&");
  }
  return rtn;
}

var toDegrees = function(angle) {
  return angle * (180 / Math.PI);
}

var toRadians = function(angle) {
  return angle * (Math.PI / 180);
}

//returns angle in rad
var angleAimingBetweenPoints = function(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1);
}

var bit_get = function(num, bit) {
  return ((num >> bit) % 2 != 0);
}

var bit_set = function(num, bit, setTo1) {
  if (setTo1)
    return num | 1 << bit; //set 1
  else
    return num & ~(1 << bit); //set 0
}

/** gives shortest angle dist between two angles, (dist negative or positive!)*/
//accepts/returns RADIANS
var distBetweenAngles = function(fromAngle, toAngle) {
  var rawDiff = toAngle - fromAngle;
  var d = angle_1to360(toDegrees(rawDiff));
  if (d > 180.0) //going backwards is shorter
    d = d - 360; //gives negative angle
  return toRadians(d);
}

var clamp = function(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

var encode_utf8 = function(s) {
  return unescape(encodeURIComponent(s));
}

var decode_utf8 = function(s) {
  return decodeURIComponent(escape(s));
}

var fillTextMultiLine = function(text, x, y) {
  var lineHeight = ctx.measureText("M").width * 1.2;
  var lines = text.split("\n");
  for (var i = 0; i < lines.length; ++i) {
    ctx.fillText(lines[i], x, y);
    y += lineHeight;
  }
}

var formatTimeSecs = function(theT) {
  var sec_num = parseInt(theT, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}

var numberWithCommas=function(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var formatNumK = function(num) {
  return abbreviate_number(num);
  /*if (num < 1000)
      return num; //theS.toLocaleString();
  else if (num < 1000000)
      return (Math.trunc(10 * (num / 1000)) / 10.0) + "k";
  else
      return (Math.trunc(100 * (num / 1000000)) / 100.0) + "m";*/
}
var abbreviate_number = function(num, fixed) {
  if (num === null) {
    return null;
  } // terminate early
  if (num === 0) {
    return '0';
  } // terminate early
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  var b = (num).toPrecision(2).split("e"), // get power
    k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
    c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(2), // divide by power
    d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
    e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
  return e;
}



var drawCircle= function (x, y, rad, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.arc(x, y, Math.max(0, rad), 0, Math.PI * 2);
  ctx.fill();
}

var drawStroke = function (x, y, rad, lineWidth, col) {
    ctx.strokeStyle = col;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(x, y, Math.max(0, rad), 0, Math.PI * 2);
    ctx.stroke();
}
  



var getAnimFrame= function(tSinceSpawn, period, shiftAm, sinF) {

  var moveA = shiftAm * Math.sin((sinF * Math.PI) / period * tSinceSpawn);
  return moveA;

}

var log = function(txt, showLog) {
	if(KTestingModeON || showLog) {
    //if(txt=="Stats.onInterfaceReset")
	  // throw new Error();
		console.log(txt);
	}
};


function secToTime(sec) {
    var date = new Date(null);
    date.setSeconds(sec); // specify value for SECONDS here
    var mm = date.getMinutes();
    var ss = date.getSeconds();

    var result = "";
    if (mm > 0)
        result = mm + "m ";
    if (ss > 0)
        result += ss + "s";

    return result;
}



///////
// file: js_src/interface/CachedText.js
///////

//a node that can cache text, call draw() to draw it, set pos with .x, .y
CachedText.prototype = {

  //can edit stroke vars, before first render!
  strokeW: 1.0, //0 to turn off stroke
  strokeColor: "#000000",
  multiLine: false,
  playername: false,
  choicetxt:false,
  _text: "",
  _color: "#000000",
  x: 0,
  y: 0, //pos drawn at
  _fntSize: 16,
  _canvas: null,
  _ctx: null,
  _dirty: false,
  _angle: 0,
  //text can be rendered larger for clearer text when scaling
  renderScale: 1.5,
  _scale: 1, //not used atm

  //read-ony vars
  width: 0,
  height: 0, //canvas w/h (fast)
  

  /*setScale: function(a) {
      if (this._scale != a) {
          this._scale = a;
          this._dirty = true;
      }
  },
  */
  setColor: function(a) {
    if (this._color != a) {
      this._color = a;
      this._dirty = true;
    }
  },
  setFontSize: function(a) {
    if (this._fntSize != a) {
      this._fntSize = a;
      this._dirty = true;
    }
  },
 rotate: function(a) {
    if (a != this._text) {
      this._angle = a;
      this._dirty = true;
    }
  },
  setText: function(a) {
    if (a != this._text) {
      this._text = a;
      this._dirty = true;
    }
  },
  //updates cached txt canvas, returns canvas (to draw!)
  getRenderedCanvas: function() {
    if (null == this._canvas) {
      this._canvas = document.createElement("canvas");
      this._ctx = this._canvas.getContext("2d");
    }
    //render canvas if needed
    if (this._dirty) {
      this._dirty = false;
      var _canvas = this._canvas,
        _ctx = this._ctx,
        text = this._text,
        _angle = this._angle,
          scale = this._scale,
        fontsize = this._fntSize * this.renderScale,
        font = (fontsize) + 'px Arial';

      _ctx.font = font;
      var h = ~~(.2 * fontsize);
      _ctx.font = font; //set font before measureText

      //_ctx.scale(scale, scale);

      if (this.multiLine) {
        //basic multi-line fill!
        var lineHeight = _ctx.measureText("M").width * 1.2;
        var lines = text.split("\n");
      
        //re-size the canvas for mutiple lines...
        var maxW = 0;
        for (var i = 0; i < lines.length; ++i) {
          maxW = Math.max(maxW, _ctx.measureText(lines[i]).width);
        }
        this.width = (maxW + 6) * scale;
        this.height = (lineHeight * lines.length + h) * scale;
        _canvas.width = this.width;
        _canvas.height = this.height;
        //fix size for renderScale
        this.width /= this.renderScale;
        this.height /= this.renderScale;
   
        _ctx.globalAlpha = 1;
        _ctx.font = font;
        //_ctx.lineWidth = 6;
        if (this.strokeW > 0.0) {
          _ctx.shadowOffsetX = this.strokeW; //0.3333 *this.renderScale;
          _ctx.shadowOffsetY = this.strokeW; //0.3333 * this.renderScale;
          _ctx.shadowColor = this.strokeColor; //"black";
        }
        _ctx.fillStyle = this._color;
        _ctx.textAlign = "center";
        //  _ctx.textBaseline = "middle"; //vertical center

        var x = 3 + _canvas.width / 2,
          y = fontsize - h / 2;
        for (var i = 0; i < lines.length; ++i) {
          _ctx.fillText(lines[i], x, y);
          y += lineHeight;
        }
      } else {
        this.width = (_ctx.measureText(text).width +
          6) * scale;
        this.height = (fontsize + h) * scale;
        _canvas.width = this.width;
        _canvas.height = this.height;
        //fix size for renderScale
        this.width /= this.renderScale;
        this.height /= this.renderScale;

        //set style/font
        _ctx.globalAlpha = 1;
        _ctx.font = font;
        //_ctx.lineWidth = 6;
        if (this.strokeW > 0.0 ) {
          _ctx.shadowOffsetX = this.strokeW; //0.3333 *this.renderScale;
          _ctx.shadowOffsetY = this.strokeW; //0.3333 * this.renderScale;
          _ctx.shadowColor = this.strokeColor; //"black";
        }
        _ctx.fillStyle = this._color;


        _ctx.fillText(text, 3, fontsize - h / 2);
      }
      
      if (this.choicetxt) {
        //basic multi-line fill!
        var lineHeight = _ctx.measureText("M").width * 1.2;
        var lines = text.split(" ");
      
        //re-size the canvas for mutiple lines...
        var maxW = 0;
        for (var i = 0; i < lines.length; ++i) {
          maxW = Math.max(maxW, _ctx.measureText(lines[i]).width);
        }
        this.width = (maxW + 6) * scale;
        this.height = (lineHeight * lines.length + h) * scale;
        _canvas.width = this.width;
        _canvas.height = this.height;
        //fix size for renderScale
        this.width /= this.renderScale;
        this.height /= this.renderScale;
   
        _ctx.globalAlpha = 1;
        _ctx.font = font;
        //_ctx.lineWidth = 6;
        if (this.strokeW > 0.0) {
          _ctx.shadowOffsetX = this.strokeW; //0.3333 *this.renderScale;
          _ctx.shadowOffsetY = this.strokeW; //0.3333 * this.renderScale;
          _ctx.shadowColor = this.strokeColor; //"black";
        }
        _ctx.fillStyle = this._color;
        _ctx.textAlign = "center";
        //  _ctx.textBaseline = "middle"; //vertical center

        var x = 3 + _canvas.width / 2,
          y = fontsize - h / 2;
        for (var i = 0; i < lines.length; ++i) {
          _ctx.fillText(lines[i], x, y);
          y += lineHeight;
        }
      }
      //console.log("cached name : "+text);
    }
    return this._canvas
  },

  //convinience method to draw pre-rendered canvas at x/y pos
  draw: function() {
    if (this._text) {
      var nscale = this.renderScale;
      var rnchache = this.getRenderedCanvas(),
        nw = rnchache.width / nscale, //scale down by camzoom (constant font size!)
        nh = rnchache.height / nscale;
      this.setPos(nw, nh);
      ctx.drawImage(rnchache, this.x - nw / 2.0, this.y - nh / 2.0, nw, nh);
    }
  },
  setPos: function(w,h) {
    
  }
};

function CachedText(uFntSize, ucolor) {
  uFntSize && (this._fntSize = uFntSize);
  ucolor && (this._color = ucolor);

}

window.CachedText=CachedText;


///////
// file: js_src/interface/InterfaceButtons.js
///////


//button that appears in animal choice interface
function AniChoiceButton(x, y, w, h, aniT, biomeNum, spec) {
  //button gets resized on draw (due to varying screen size)
  this.x = x;
  this.y = y;
  this.w = w; //width of pressable region
  this.h = h;
  this.aniT = aniT;
//  this.col = animalcol;
  this.species = spec;
  this.teamID = 0;
  this.btnHotkey = '0';

  //this.text = infoForAnimalType(aniT).aniName;//isOcean ? "Ocean Animal" : "Land Animal";
  this.buttonTXT = new CachedText(10.0, "white");
  this.buttonTXT.renderScale = 1.5;
  this.buttonTXT.choicetxt = true
  this.buttonTXT.setText(infoForAnimalType(aniT).aniName);
  this.setHotKey = function (_0xb26fc2) {
        _0xb26fc2 && (this.btnHotkey = _0xb26fc2, this.hotkey = new CachedText(10, 'white'), this.hotkey.renderScale = 1.5, this.hotkey.multiLine = false, this.hotkey.setText(this.btnHotkey.toUpperCase()));

    };
  this.isHighLighted = false; //highlight if mouse goes on it
  this.biomeNum = biomeNum; //draw ocean or land background
  //drawn animal img
  //var anO = new Animal(0, o_animal, 0, 0, 30);
  var anO = GameObjType.createGameObjOfOType(o_animal, aniT);
  anO.animalType = aniT;
  anO.animalSpecies = spec;
  anO.lava = 100;
 anO.alwaysPlainOutline = true;
  this.buttonTXT.setText(anO.animalInfo().aniName);

  anO.x = anO.ox = anO.nx = 0;
  anO.y = anO.oy = anO.ny = 0;
  anO.rad=anO.oRad=anO.nRad= 30;
  
  this.drawnAniObj = anO;
  
  this.buttonScaleF = 0; //scale primary button
  //this.touchMarginEx=20.0;
 
  //used to check clicks
  this.testPosHitsButton = function(posX, posY) {

    if (posX < this.x - this.w / 2 || posX > this.x + this.w / 2)
      //outside x bounds
      return false;
    if (posY < this.y - this.w / 2 || posY > this.y + this.w / 2) {
      //outside y bounds
      return false;
    } else
      return true;
  };
  this.setPosAndSize = function(newX, newY, newW, newH, anchorX, anchorY) {
    newW *= 1.1
    newH *= 1.1
      this.w = newW;
      this.h = newH;
      //set middle x/y based on anchorX/anchorY -(0,0) is top-left corner
      this.x = newX + (newW) * (0.5 - anchorX);
      this.y = newY + (newH) * (0.5 - anchorY);
    },

    this.draw = function() { //ani draw mod
      //draw button bg square
      ctx.save();
      ctx.translate(this.x, this.y);
    this.buttonScaleF *= 1.1
      ctx.scale(this.buttonScaleF, this.buttonScaleF);
      var origA = ctx.globalAlpha;

      //console.log("drawing button at "+this.x,this.y);


      //bg square
      ctx.globalAlpha = origA * 0.50;
      switch (this.biomeNum) {
      
        case 0:
            this.drawnAniObj.curBiome = 0
          ctx.fillStyle = "#26A73A";
          break; //land
        case 1:
         this.drawnAniObj.curBiome = 1
          ctx.fillStyle = "#1C91B8"; //MARK
          break;  //ocean
        case 2:
         this.drawnAniObj.curBiome = 2
          ctx.fillStyle = "#B2B2B2";
      

          break; //arctic

          case 3:
         this.drawnAniObj.curBiome = 3
          ctx.fillStyle = "#ff6000";
      

          break; //arctic
                  
            case 4:
           this.drawnAniObj.curBiome = 4
                ctx.fillStyle = "#00db22";
                break;
          
            case 5:
                     this.drawnAniObj.curBiome = 5
                ctx.fillStyle = "#3E6E50";
                break;
                             case 6:
                     this.drawnAniObj.curBiome = 0
                ctx.fillStyle = "#FBFF0F";
                break;
             
          
                      case 7:
                     this.drawnAniObj.curBiome = 7
                ctx.fillStyle = "#5DC5E8";
                break;
          
                                       case 8:
                     this.drawnAniObj.curBiome = 1
                ctx.fillStyle = "#11323D";
                break;
          
                   case 9:
                     this.drawnAniObj.curBiome = 1
                ctx.fillStyle = "#1C42B8";
                break;
          
                             case 10:
                     this.drawnAniObj.curBiome = 1
                ctx.fillStyle = "#1CB2B8";
                break;
          
            }
      
      
      ctx.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
      //draw highlight
      if (this.isHighLighted) {
        ctx.fillStyle = "white";
        ctx.globalAlpha = origA * 0.2;
        ctx.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
      }

      //draw animal
      ctx.globalAlpha = origA;
var _0x224eeb = this.w * (0.22500000000036);
        this.drawnAniObj.nRad = this.drawnAniObj.rad = _0x224eeb;
      ctx.save();
      ctx.scale(2,2);
      this.drawnAniObj.teamID = teamID;
      this.drawnAniObj.draw();
      ctx.restore();

      this.buttonTXT.setFontSize(23 * interfS);
      this.buttonTXT.x = 0;
      this.buttonTXT.y = -this.h * 0.4 * 0.75;
      this.buttonTXT.draw();

      //ctx.font = 23 * interfS + "px Arial";
      //ctx.fillText(this.text, 0, -this.h *0.5 * 0.75);
      //}
      ctx.restore();
    };
};


window.AniChoiceButton=AniChoiceButton;

//button for touch controls (and abilities display)
TouchButton.prototype = {
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  visible: true,
  buttonTXT: null,
  pressed: false,
  pressedTouchID: -1,
  touchEnabled: true,
  //does this position land inside the button
  testPosHitsButton: function(posX, posY) {
    //x/y are always the middle of the button

    if (posX < this.x - this.w / 2 || posX > this.x + this.w / 2)
      //outside x bounds
      return false;

    if (posY < this.y - this.w / 2 || posY > this.y + this.w / 2) {
      //outside y bounds
      return false;
    } else
      return true;
  },
  //set x/y, set to an anchorpoint (0)=0.5
  setPosAndSize: function(newX, newY, newW, newH, anchorX, anchorY) {
    this.w = newW;
    this.h = newH;
    //set middle x/y based on anchorX/anchorY -(0,0) is top-left corner
    this.x = newX + (newW) * (0.5 - anchorX);
    this.y = newY + (newH) * (0.5 - anchorY);
  },
  //set this for each button
  onButtonTouchStart: function() {
    //console.log("button touch started!");
  },
  onButtonTouchEnd: function() {
    //console.log("button touch ended!");
  }
};



AbilityQ.prototype = {
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  visible: true,
  buttonTXT: null,
  pressed: false,
  pressedTouchID: -1,
  touchEnabled: true,
  //does this position land inside the button
  testPosHitsButton: function(posX, posY) {
    //x/y are always the middle of the button

    if (posX < this.x - this.w / 2 || posX > this.x + this.w / 2)
      //outside x bounds
      return false;

    if (posY < this.y - this.w / 2 || posY > this.y + this.w / 2) {
      //outside y bounds
      return false;
    } else
      return true;
  },
  //set x/y, set to an anchorpoint (0)=0.5
  setPosAndSize: function(newX, newY, newW, newH, anchorX, anchorY) {
    this.w = newW;
    this.h = newH;
    //set middle x/y based on anchorX/anchorY -(0,0) is top-left corner
    this.x = newX + (newW) * (0.5 - anchorX);
    this.y = newY + (newH) * (0.5 - anchorY);
  },
  //set this for each button
  onButtonTouchStart: function() {
    //console.log("button touch started!");
  },
  onButtonTouchEnd: function() {
    //console.log("button touch ended!");
  }
};

function AbilityQ(text) {



       
  this.buttonTXT = new CachedText(10.0, "white");
  this.buttonTXT.renderScale = 1.5;
  this.buttonTXT.setText();
  

    



  this.draw = function() {
    if (!this.visible)
      return;

    
            this.buttonTXT.setText("");
    //draw button square
    ctx.save();
       ctx.globalAlpha = 0.2;


             
   //ctx.fillStyle = (this.pressed) ? "white" : "#000000";

    
                             aabilImg = text
    
            var myPlayer = gameObjsByID[myPlayerID];
        if (myPlayer && myPlayer.animalType == a_phoenix) {
            this.buttonTXT.setText("Fly High");
          aabilImg = "img/fly_ability.png"
        }
        if (myPlayer && myPlayer.animalType == a_landMonster) {
            this.buttonTXT.setText("Fly High");
          aabilImg = "img/fly_ability.png"
        }
        if (myPlayer && myPlayer.animalType == a_blackDragon) {
            this.buttonTXT.setText("Fly High");
          aabilImg = "img/fly_ability.png"
        }
            if (myPlayer && myPlayer.animalType == a_eagle) {
            this.buttonTXT.setText("Fly High");
          aabilImg = "img/fly_ability.png"
        }
            if (myPlayer && myPlayer.animalType == a_tiger) {
            this.buttonTXT.setText("Stealth");
          aabilImg = "img/stealth_ability.png"
        }
            if (myPlayer && myPlayer.animalType == a_gorilla) {
            this.buttonTXT.setText("Fruit Swap");
          aabilImg = "img/fruitswap_ability.png"
        }
    if (myPlayer && myPlayer.animalType == a_trex) {
            this.buttonTXT.setText("Sprint");
          aabilImg = "img/sprint_ability.png"
        }
        if (myPlayer && myPlayer.animalType == a_alligator) {
            this.buttonTXT.setText("Slap");
          aabilImg = "skins/alligator_tail.png"
        }
    
    if (aabilImg != "") {
            ctx.fillStyle = (this.pressed || cNum_keyQused) ? "#CECECE" : "#000000";
    ctx.fillRect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
  }
    //draw button text
    ctx.globalAlpha = 0.2;
    
        var theImga = getLoadedImg(aabilImg);
        //console.log("image info "+theImg);
        if (theImga) {
          var rad = this.w * 0.4;
          ctx.globalAlpha = 1;
          if (aabilImg == "img/fly_ability.png") {
          ctx.drawImage(theImga, button_q.x - button_q.w / 2.5, button_q.y - button_q.h / 2.5, 2 * rad, 2 * rad);
          } else {
          ctx.drawImage(theImga, button_q.x - button_q.w / 2.5, button_q.y - button_q.h / 2.5, 2 * rad, 2 * rad);      
          }
        }


    ctx.restore();
    this.buttonTXT.setFontSize(25 * interfS);
    this.buttonTXT.x = this.x;
    this.buttonTXT.y = this.y - this.h * 0.35;
    this.buttonTXT.draw();
    


    ctx.restore();

  };
        
}
window.AbilityQ=AbilityQ;

function TouchButton(text) {

  this.buttonTXT = new CachedText(10.0, "white");
  this.buttonTXT.renderScale = 1.5;
  this.buttonTXT.setText(text);

  this.draw = function() {
    if (!this.visible)
      return;

    //draw button square
    ctx.save();
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = (this.pressed) ? "white" : "#000000";
    ctx.fillRect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);

    //draw button text
    ctx.globalAlpha = 0.2;
    
    
    this.buttonTXT.setFontSize(25 * interfS);
    this.buttonTXT.x = this.x;
    this.buttonTXT.y = this.y;
    this.buttonTXT.draw();
    


    ctx.restore();

  };
}
window.TouchButton=TouchButton;

var AbilityButton = function () {
  this.buttonTXT = new CachedText(10.0, "white");
  this.buttonTXT.renderScale = 1.5;
  //this.buttonTXT.setText("");

  //abilities vars (if ability button)
  this.isMiniRechargeBut = false;
    this.isQRechargeBut = false;//shows above W button, when dive is available
  this.abil_Type = 0;
  this.abil_possible = this.abil_usable = this.abil_recharging = this.abil_active = false;
  this.abil_rechargeEndT = 0, this.abil_rechargeTotalT = 0;
  this.abil_rechargeBarA = 0, this.abil_avilableA = 0;

  this.draw = function () {
    if (!this.visible)
      return;

    this.abil_rechargeBarA += ((this.abil_recharging ? 1.0 : 0.0) - this.abil_rechargeBarA) * 0.1;
    this.abil_avilableA += (((this.abil_usable || this.abil_active) ? 1.0 : 0.2) - this.abil_avilableA) * 0.1;
    if (this.isMiniRechargeBut) {
      this.h = this.w * 0.6;
    }
    if (this.isMiniRechargeBut) {
      this.h = this.w * 0.4;
    }
    if (this.abil_possible) {
      var oAlpha = 1.0;
      ctx.save();
      
      if (this.isQRechargeBut) {
                this.h = this.w * 0.8;
        ctx.translate(this.x, this.y - 50);
        ctx.scale(0.6, 0.6);
      }
      
      if (this.isMiniRechargeBut) {
              if (!this.isQRechargeBut) {
        this.h = this.w * 0.8;
        ctx.translate(this.x, this.y + this.h * 0.36);
        ctx.scale(0.65, 0.65);
              }
      } else//{
        ctx.translate(this.x, this.y);

      //draw button square
      var fillOp = 0.2 * this.abil_avilableA;
      var fillCol = (this.pressed || controls_rightClicked) ? "#CECECE" : "#000000";
      if (this.abil_active) {
        fillCol = col_edibleOutline;
        fillOp = 0.7;
      }
      ctx.fillStyle = fillCol;
      ctx.globalAlpha = oAlpha * fillOp;
      ctx.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);

      //ability img
      var abilityInfo = infoForAbilityT(this.abil_Type);

      if (this.abil_Type == ability_fireShoot || this.abil_Type == ability_fireShoot2 || this.abil_Type == ability_shotgunfire) {

        var imNum = Math.trunc(timestamp / 120) % 5;
	      	  if (gameObjsByID[myPlayerID].specType2 == 32) {
    imNum = Math.trunc(timestamp / 300) % 2;
	  }
        //var theImg = getLoadedImg(imNum == 1 ? "img/fire.png" : "img/fire2.png");
         if (gameObjsByID[myPlayerID]) {
        var theImg = getLoadedImg("img/fireball/" + gameObjsByID[myPlayerID].specType2 + "/" +imNum + ".png");
         }
        if (theImg) {
          var rad = this.w * 0.4;
          var frame = 0;
          if (gameObjsByID[myPlayerID]) {
            var tSpawn = gameObjsByID[myPlayerID].spawnTime;

            var tSinceSpawn = (timestamp - tSpawn) / 1000.0
            frame = (getAnimFrame(tSinceSpawn, 1, 10, 2));
          }
          ctx.globalAlpha = oAlpha * this.abil_avilableA;
          ctx.drawImage(theImg, -rad, -rad * 0.85 - frame, 2 * rad, 2 * rad + frame);
        }

      } else {
        var abilImg = abilityInfo.abilImg;
        //  console.log("abilImg: " + abilImg)

        var myPlayer = gameObjsByID[myPlayerID];
        if (myPlayer && (myPlayer.animalType == a_phoenix || myPlayer.animalType == a_minibd) && this.abil_Type == ability_dive)
          abilImg = "img/ability_dive_lava.png";

        var theImg = getLoadedImg(abilImg);
        //console.log("image info "+theImg);
        if (theImg) {
          var rad = this.w * 0.4;
          ctx.globalAlpha = oAlpha * this.abil_avilableA;
                    if (abilImg == "skins/secretarybird/secretarybird.png" || abilImg == "skins/trex.png") {
          ctx.drawImage(theImg, -rad, -rad/500 * 600 * 0.85, 2 * rad, 2 * rad/500 * 600);
          } else {
                      ctx.drawImage(theImg, -rad, -rad * 0.85, 2 * rad, 2 * rad);
          }
        }
        

        
      }
      this.buttonTXT.multiLine = true
      
      this.buttonTXT.setText(abilityInfo.abilName);
      this.buttonTXT.setFontSize(25 * interfS);
      this.buttonTXT.x = 0;
      this.buttonTXT.y = -this.w * 0.35;
      this.buttonTXT.draw();

      //rercharging bar (fade based on updated recharing var, as more accurte)
      var tTillRecharged = Math.max(0, this.abil_rechargeEndT - timestamp);
      //console.log("recharged in "+tTillRecharged);
      this.abil_rechargeBarA += ((this.abil_recharging ? 1.0 : 0.0) - this.abil_rechargeBarA) * 0.1;

      if (this.abil_rechargeBarA > 0.01) {



        //recharge bar
        ctx.globalAlpha = (oAlpha * this.abil_rechargeBarA) * 0.35;
        ctx.fillStyle = "#000000"; //bar bg
        var bx = 0,
          by = 0;
        var barW = this.w * 0.8;
        var barH = this.h * 0.5;


        ctx.fillRect(bx - barW / 2, by - barH / 2, barW, barH); //bg
        ctx.globalAlpha = (oAlpha * this.abil_rechargeBarA) * 1.0;
        ctx.fillStyle = "#F3C553";
        ctx.fillRect(bx - barW / 2, by - barH / 2, barW * (tTillRecharged / this.abil_rechargeTotalT), barH); //fill

      }


      ctx.restore();
    }
  }
}
AbilityButton.prototype = Object.create(TouchButton.prototype); //inherit from TouchButton

window.AbilityButton=AbilityButton;



///////
// file: js_src/game/typedefs.js
///////

// GET url arguments (?arg=2)
function getQueryParams(qs) {
  qs = qs.split("+").join(" ");
  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;
  while ((tokens = re.exec(qs))) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
}
var $_GET = getQueryParams(document.location.search);

//read link/ app flags
var isMobileAppIOS = $_GET["mobileios"] > 0;
var isMobileAppAndroid = $_GET["mobileAndroid"] > 0;
var isMobileApp = isMobileAppIOS || isMobileAppAndroid;

var alwaysShowVideo = $_GET["videoson"] > 0;

//var urlServerName = ($_GET['server']);

//for now, most defs are in here (other than subclassed ones)
var lerpI = 0.175; //@10fps; // 0.12 for 20fps;  //ag@r is 0.125
                 var col_wat2 = "#4651a6"
        if (1 != 1) {
                 col_wat2 = "#4651a6"
        } else {
                 col_wat2 = "#5e69a0"
        }
//common game colors
var col_invisborder = "#2A2A2A60",
    col_gameBg1 = "#3FBA54", //light-green background color of mope.io
    col_gameBg = "#3FBA54", //light-green background color of mope.io
    col_landbiome = "#3FBA54",
    col_snowcolor = "#f7f7f7",
    col_outline_land = "#09992F",
        col_outline_cold_ocean = "#60A8CE",
            col_outline_reef = "#288DAC",
    col_outline_ocean = "#007ec0",
    col_outline_arctic = "grey",
    col_outline_jungle = "#334D3D";

    col_bg3 = "#09992F", //"#3D7447";
    col_wat1 = "#4E66E4",
    col_lava = "#ff6000",
    col_lava2 = "#bf4f0b",
    col_lava3 = "#FC1F00",
      col_arctic = "#ececec",//#DDEFE5
    //col_wat2 = "#4651a6", //#4651a6 - non snow color

    col_ocean = col_wat2,
    col_ocean2 = "#1C2460",
    col_cold_ocean = "#8EA0D5"
    col_reef = "#3FA5C4"
    col_ocean_sand = "#c8b745",
    col_reef_sand = "#C7A454",
    col_outline_desert = "#a59215",
    col_desert_hill = "#d6c348",

    col_food1 = "#F35F53",
    col_food2 = "#CF6259",
    col_plankton1 = "#FF911E",
    col_plankton2 = "#C67019",
    col_plankton3 = "#B3A7D6"
    col_dangerOutline = "#EF3C31",
    col_edibleOutline = "#4AE05E",
    col_rockHill = "#8C9688", 
    col_rockHill_desert = "#878053";

var outlineColForBiome = function(biomeN) {
  switch (biomeN) {
                      case biome_coldocean:
      return col_outline_cold_ocean;

                case biome_reef:
      return col_outline_reef;
      
          case biome_land:
      return col_outline_land;
      
    case biome_ocean:
            return col_outline_ocean;
      
      case biome_arctic:
            return col_outline_arctic;
      case biome_desert:
            return col_outline_jungle;
      case biome_volcano:
            return col_lava2;

    default:


  }
};
// custom interface buttons
var interfaceButtons = [];
//biome types
var biome_land = 0;
var biome_ocean = 1;
var biome_arctic = 2;
var biome_volcano = 3;
var biome_desert = 4;
var biome_jungle = 5;
var biome_coldocean = 7;
var biome_reef = 9;
//HANDLE WORLD UPDATEc
var timestamp = +new Date();
var lastUpdT = +new Date();

// Team Mode vars start
var teamID = 0;
// team mode vars end

//
var isInArena = false;
var isAbility1v1Active = true;
var isSoccerEnabled = false;
var show1v1Button = true;
var can1v1 = false;
var btn1v1 = null;
var btnEGG = null;
var btnEGG1 = null;
var btnEGG2 = null;
var btnEGG3 = null;
var player1v1ArenaWins = 0;
var playerGoalsScore = 0;
var serverAllTimeGoals = 0;
var playersInfected = 0;
var zombiesKilled = 0;
var player1v1Requests = [];
var isInBonusRound = false;
var bonusRoundDur = 0;
var homeButton = null;
var isSpectateMode = false;
var eggID = 0;
var isDevMode = false;
//canvases
var canvas = document.getElementById("gCanvas");
var lbCanvas = null;
var miniMapCanvas = null;
var brMapCanvas = null;
var nPlayersViewing = 0;
var nPlayersAlive = 0;
var ctx = canvas.getContext("2d");
ctx.shadowColor = "black"; //default for everything
//global settings
var localStorageOn = false;
var pixelRat = Math.min(window.devicePixelRatio, 2.0); //limit to 2 for performance
//set mobile
var isTouchEnabled =
  ("ontouchstart" in window || navigator.maxTouchPoints) == true;
if (isTouchEnabled) console.log("mobile touch device detected!");

//music, game music lazy loaded (to prevent initial lag!)
var loadedAudio = {};

var getLazyLoadAudio = function(theUrl) {
  //start loading audio (if it's not muted!)
  if (!loadedAudio.hasOwnProperty(theUrl) && !options_musicMuted) {
    //start loading if not loaded
    var newAudio = new Audio(theUrl);
    console.log("loading audio: " + theUrl);
    loadedAudio[theUrl] = newAudio;

    /*if (theUrl == menuMusicURL) { //loop menu music!
        newAudio.addEventListener('ended', function() {
            this.currentTime = 0; //restart on music end
            try {
                this.play();
            } catch (err) {}
        }, false);
    }*/
    newAudio.volume = 0.7;
    newAudio.muted = options_musicMuted;
  }

  return loadedAudio[theUrl];
};

function mute(elem) {
    elem.muted = true;
    elem.pause();
}

var currentMusic = null; //currently playing music audio instance
var currentMusicUrl = ""; //url that would be playing (even if muted)
//var menuMusicURL = 'audio/music_menu.mp3';
var gameMusicURL = "audio/music_game.mp3";

var changeMusicTo = function(theUrl) {
  if (currentMusic) {
    //stop/reset current music
    currentMusic.pause();
    currentMusic.currentTime = 0;
  }
  currentMusicUrl = theUrl;
  if (!options_musicMuted) {
    //dont load music if sound is muted!
    console.log("changed music to " + theUrl);
    currentMusic = getLazyLoadAudio(theUrl, true);
    try {
      currentMusic.play();
    } catch (err) {}
  }
};

//mute button was pressed, update muted
var onMuteButtonChange = function() {
  var theDOM = document.getElementById("button_mute_img"); //button img
  if (theDOM) {
    theDOM.src = options_musicMuted ? "img/sound_off.png" : "img/sound_on.png";

    //update .muted for all already-loaded audio/music
    for (var aProp in loadedAudio) {
      if (loadedAudio.hasOwnProperty(aProp)) {
        loadedAudio[aProp].muted = options_musicMuted;
      }
    }

    //start current music (if music should be playing, but not loaded!)
    if (!options_musicMuted && currentMusicUrl && currentMusic == null) {
      changeMusicTo(currentMusicUrl);
    }
  }
};

//camera
var instantSetCamNextUpd = false;
var camzoom = (camzoom_n = 2.7); //effective zoom
var camzoom = 1.0; //zoom effect on start
var camx = 0.0;
var camy = 0.0;
var camx_n = 0.0;
var camy_n = 0.0;
var camx_o = 0.0;
var camy_o = 0.0;
var interfS = 1.0; //scale of ingame interfaces
//interFaceA=0.0; //pretty animation

//mouse
var rawMouseX = 0, //in CANVAS coordinates (multiplied by pix ratio)
  rawMouseY = 0,
  gameMouseX = 0, //in actual game
  gameMouseY = 0,
  lastMouseX = 0,
  lastMouseY = 0;
//game controls (for use with multiple buttons)
var controls_leftClicked = false,
  controls_rightClicked = false,
    cNum_keyEused = false,
cNum_keyDused = false;
cNum_keyQused = false;
//game size, vars, get set on game join
var canvasW = 0;
var canvasH = 0;
var gameW = 0,
  gameH = 0; //size of game area (for bounds)

var gameMode_FFA = 0;
var gameMode_sandbox = 1;
//var gameMode_battleRoyal = 2; discontinued game mode
var gameMode_teamMode = 3;
var gameMode_troll = 4;
var gameMode_zombie = 5;
var gameMode = gameMode_FFA; //NOT USED ATM

var gameState = 0;

//varsa

//get lazy loaded img (calling this starts load)
var loadedImgs = {};

var getLoadedImg = function(imgUrl) {
  if (!loadedImgs.hasOwnProperty(imgUrl)) {
    //start loading if not loaded
    loadedImgs[imgUrl] = new Image();
    loadedImgs[imgUrl].src = imgUrl; //"./skins/" + skinName + '.png';
  }
  if (0 != loadedImgs[imgUrl].width && loadedImgs[imgUrl].complete) {
    return loadedImgs[imgUrl];
  } else {
    return null;
  }
};

//game vars
var xpNextAni = 100;
var lastxp = 1;
var dangerAniTypes = Array.apply(null, new Array(50)).map(
  Number.prototype.valueOf,
  0
);
var edibAniTypes = Array.apply(null, new Array(50)).map(
  Number.prototype.valueOf,
  0
);
var tailBiteAniTypes = Array.apply(null, new Array(50)).map(
  Number.prototype.valueOf,
  0
);
var edibleObjTypes = Array.apply(null, new Array(50)).map(
  Number.prototype.valueOf,
  0
);
var clearedTypesSinceSpawnRequest = false;
var t = [];
var gameObjs = []; //sorted drawn list of objs
var gameObjsByID = {}; //hashed list by ID
var remGameObjs = []; //to be deleted after draw
//latest recharging msg info (global for player)
var abil_recharging = false;
var abil_rechargeTotalT = 0;
var abil_rechargeEndT = 1.0;
var abil_dive_recharging = false;
var abil_dive_rechargeTotalT = 0;
var abil_dive_rechargeEndT = 1.0;

//global vars
var abil_dive_isMain = false;
var ocean_anim_startT = +new Date(); //sync all ocean water

//load options
var options_noImages = false;
var options_noNames = false;
var options_lowGraphics = false; //main optimizations: next shadows off,
var options_noJoystick = false;
var options_leftHanded = false;
var options_SeeIDS = false;
var options_noXpPopup = false;
var options_musicMuted = false;
var options_winterskins = true;
//options_snowfall = false;

function addDOMOptionHtml(opID, opDesc, opColor) {
  var contaierElem = document.getElementById("optionsContainer");
  var lab = document.createElement("label");
  lab.innerHTML =
    "<input type='checkbox' id='" +
    opID +
    "'><span style='color: " +
    opColor +
    ";''>" +
    opDesc +
    "</span>";
  contaierElem.appendChild(lab);
}
addDOMOptionHtml("options_noImages", "No Animal images  ", "black");
addDOMOptionHtml("options_noNames", "No Names & Chat  ", "black");
addDOMOptionHtml("options_lowGraphics", "Use Low graphics ", "black");
addDOMOptionHtml("options_SeeIDS", "See ID's ", "black");
if (isTouchEnabled) {
  addDOMOptionHtml("options_noJoystick", "No Joystick", "#194614");
  addDOMOptionHtml("options_leftHanded", "LEFT-handed Joystick", "#194614");
}
addDOMOptionHtml("options_noXpPopup", "Don't show +XP popups", "black");

if (window.localStorage) {
  options_noNames = window.localStorage.getItem("options_noNames") + 0 > 0;
  var theDOM = document.getElementById("options_noNames");
  if (theDOM) {
    theDOM.checked = options_noNames;
  }
  options_noImages = window.localStorage.getItem("options_noImages") + 0 > 0;
  var theDOM = document.getElementById("options_noImages");
  if (theDOM) {
    theDOM.checked = options_noImages;
  }

  options_lowGraphics =
    window.localStorage.getItem("options_lowGraphics") + 0 > 0;
  var theDOM = document.getElementById("options_lowGraphics");
  if (theDOM) {
    theDOM.checked = options_lowGraphics;
  }

  options_noJoystick =
    window.localStorage.getItem("options_noJoystick") + 0 > 0;
  var theDOM = document.getElementById("options_noJoystick");
  if (theDOM) {
    theDOM.checked = options_noJoystick;
  }

  options_SeeIDS =
    window.localStorage.getItem("options_SeeIDS") + 0 > 0;
  var theDOM = document.getElementById("options_SeeIDS");
  if (theDOM) {
    theDOM.checked = options_SeeIDS;
  }


  options_leftHanded =
    window.localStorage.getItem("options_leftHanded") + 0 > 0;
  var theDOM = document.getElementById("options_leftHanded");
  if (theDOM) {
    theDOM.checked = options_leftHanded;
  }

  options_noXpPopup = window.localStorage.getItem("options_noXpPopup") + 0 > 0;
  var theDOM = document.getElementById("options_noXpPopup");
  if (theDOM) theDOM.checked = options_noXpPopup;

  //mute button
  options_musicMuted = window.localStorage.getItem("options_muted") + 0 > 0;
  onMuteButtonChange();
}

//mute button
var theDom = document.getElementById("button_mute");
if (theDom) {
  theDom.onclick = function() {
    options_musicMuted = !options_musicMuted;
    onMuteButtonChange();
    try {
      window.localStorage.setItem("options_muted", options_musicMuted ? 1 : 0);
    } catch (err) {} //no localStorage
  };
}
document.getElementById("settingsButton").onclick = function() {
  var theDom = document.getElementById("optionsDiv");
  let setsOpen = theDom.style.display == "block";
  if (!setsOpen) {
    masterServer_getServerStats();
  }
  theDom.style.display = setsOpen ? "none" : "block";

  //play sound (if not muted)
  var sound_click = getLazyLoadAudio("audio/click.mp3");
  if (sound_click) {
    try {
      sound_click.play();
    } catch (err) {}
  }
};
document.getElementById("closeBut").onclick = function() {
  var theDom = document.getElementById("optionsDiv");
  theDom.style.display = theDom.style.display == "block" ? "none" : "block";

  //play sound (if not muted)
  var sound_click = getLazyLoadAudio("audio/click.mp3");
  if (sound_click) {
    try {
      sound_click.play();
    } catch (err) {}
  }
};
//save options

// normal options
var theDom = document.getElementById("options_noImages");
if (theDom) {
  theDom.onchange = function() {
    if (window.localStorage) {
      options_noImages = this.checked;
      try {
        window.localStorage.setItem(
          "options_noImages",
          options_noImages ? 1 : 0
        );
      } catch (err) {} //no localStorage

      //console.log("options_noimages: saved as " + window.localStorage.getItem("options_noImages"));
    }
  };
}
var theDom = document.getElementById("options_noNames");
if (theDom) {
  theDom.onchange = function() {
    if (window.localStorage) {
      options_noNames = this.checked;
      try {
        window.localStorage.setItem("options_noNames", options_noNames ? 1 : 0);
      } catch (err) {} //no localStorage

      //console.log("options_noNames: saved as " + window.localStorage.getItem("options_noNames"));
    }
  };
}

var theDom = document.getElementById("options_lowGraphics");
if (theDom) {
  theDom.onchange = function() {
    if (window.localStorage) {
      options_lowGraphics = this.checked;

      try {
        window.localStorage.setItem(
          "options_lowGraphics",
          options_lowGraphics ? 1 : 0
        );
      } catch (err) {} //no localStorage

      //resize canvas
      onResize();

      //console.log("options_lowGraphics: saved as " + window.localStorage.getItem("options_lowGraphics"));
    }
  };
}

var theDom = document.getElementById("options_noJoystick");
if (theDom) {
  theDom.onchange = function() {
    if (window.localStorage) {
      options_noJoystick = this.checked;
      try {
        window.localStorage.setItem(
          "options_noJoystick",
          options_noJoystick ? 1 : 0
        );
      } catch (err) {} //no localStorage

      //resize canvas
      onResize();

      //console.log("options_noJoystick: saved as " + window.localStorage.getItem("options_noJoystick"));
    }
  };
}




var theDom = document.getElementById("options_SeeIDS");
if (theDom)
  theDom.onchange = function() {
    if (window.localStorage) {
      options_SeeIDS = this.checked;
      try {
        window.localStorage.setItem(
          "options_SeeIDS",
          options_SeeIDS ? 1 : 0
        );
      } catch (err) {} //no localStorage

      //resize canvas
      onResize();

      console.log(
        "options_SeeIDS: saved as " +
          window.localStorage.getItem("options_SeeIDS")
      );
    }
  };


var theDom = document.getElementById("options_leftHanded");
if (theDom)
  theDom.onchange = function() {
    if (window.localStorage) {
      options_leftHanded = this.checked;
      try {
        window.localStorage.setItem(
          "options_leftHanded",
          options_leftHanded ? 1 : 0
        );
      } catch (err) {} //no localStorage

      //resize canvas
      onResize();

      console.log(
        "options_leftHanded: saved as " +
          window.localStorage.getItem("options_leftHanded")
      );
    }
  };

var theDom = document.getElementById("options_noXpPopup");
if (theDom) {
  theDom.onchange = function() {
    if (window.localStorage) {
      options_noXpPopup = this.checked;
      try {
        window.localStorage.setItem(
          "options_noXpPopup",
          options_noXpPopup ? 1 : 0
        );
      } catch (err) {} //no localStorage

      //resize canvas
      onResize();

      //console.log("options_noXpPopup: saved as " + window.localStorage.getItem("options_noXpPopup"));
    }
  };
}

var fps_framesCount = 0;
var fps_drawTimeCount = 0;
var fps_timeStart = +new Date();
var fpsText = "... fps";
var fps_startTime = +new Date();
var fps_totalFramesDone = 0;
var fps_totalTime = 0;

//current game vars
var plOnlineStr = "...";
var myBrowserUniqueID = 0;
var myPlayerID = 0;
var myPlayerLastAniT = a_mouse;
var serverCon_aliveInAGame = false;
var serverCon_spectatingInAGame = false;
var serverConnected = false;
var serverFirstConnected = false;
var afkTimeStart = +new Date();
var dcedFromAfk = false;
_0x8b4348 = !1,
    _0x55dda5 = !1,
    _0x33bbe8 = !1,
    _0x573fdc = !1
var isAirBar = false;
var animalBarType = 0;
var waterBarPerc = (waterBarPerc_n = 100);
var pressureBarPerc = 100
var pressureBarPerc_n = 100
var xpPer_n = (xp = xpPer = 0);
var infectionBarPerc = infectionBarPerc_n = 100;
//interface/animation vars
var waterBarTXT = new CachedText(16.0, "white");
var player1v1TXT = new CachedText(16.0, "white");
var xpBarTXT = new CachedText(16.0, "white");
var objEdibleTXT = new CachedText(16.0, "white");
var screenTXT = new CachedText(16.0, "white");
var playersOnlTXT = new CachedText(10.0, "white");
screenTXT.multiLine = true;
objEdibleTXT.renderScale = 1.0; //better quality
screenTXT.renderScale = 1.0; //better quality
playersOnlTXT.renderScale = 1.0; //better quality
var showPlaersOnServer = false;
var lowBarPercLabelA = 0.0;
var respawnMsgA = 0.0; //'respawn with 10.3k xp!'
var respawnMsgText = "";
//hurtTintA = hurtTintA_n = 0.0;

//create touch buttons
var allTouchButtons = []; //all drawn/active buttons
var button_w = new AbilityButton();
button_w.onButtonTouchStart = function () {
  controlsPressEvent(cNum_rightClick, true);
};
button_w.onButtonTouchEnd = function () {
  controlsPressEvent(cNum_rightClick, false);

  //unselect run (if pressed through sliding down finger)
  if (button_run.pressed && button_run.pressedTouchID == -1) {
    //button RELEASED!
    button_run.pressed = false;
    controlsPressEvent(cNum_leftClick, false);
  }
};
allTouchButtons.push(button_w);

var button_w_mini = new AbilityButton(); //not pressable
button_w_mini.isMiniRechargeBut = true;
button_w_mini.touchEnabled = false;
allTouchButtons.push(button_w_mini);
var button_w_q = new AbilityButton(); //not pressable
button_w_q.isQRechargeBut = true;
button_w_q.touchEnabled = false;
//no touch handlers (doesn't get touched)
allTouchButtons.push(button_w_q);

var button_run = new TouchButton("HOLD TO RUN");
button_run.onButtonTouchStart = function () {
  controlsPressEvent(cNum_leftClick, true);
};
button_run.onButtonTouchEnd = function () {
  controlsPressEvent(cNum_leftClick, false);
};
allTouchButtons.push(button_run);


var button_chat = new TouchButton("CHAT");
button_chat.onButtonTouchStart = function() {
  toggleChatOpen();
};
allTouchButtons.push(button_chat);

var button_sKey = new TouchButton("S"); //in sandbox
button_sKey.onButtonTouchStart = function() {
  controlsPressEvent(cNum_watershoot, true);
};
allTouchButtons.push(button_sKey);

var button_q = new AbilityQ("");//in sandbox
button_q.onButtonTouchStart = function() {
  controlsPressEvent(cNum_keyQ, true);
};
allTouchButtons.push(button_q);

var button_SBdowngrade = new TouchButton("DOWN↓"); //in sandbox
button_SBdowngrade.onButtonTouchStart = function() {
  controlsPressEvent(cNum_SBdowngrade, true);
};
allTouchButtons.push(button_SBdowngrade);

var button_SBupgrade = new TouchButton("UP↑"); //in sandbox
button_SBupgrade.onButtonTouchStart = function() {
  controlsPressEvent(cNum_SBupgrade, true);
};
allTouchButtons.push(button_SBupgrade);


//joystickDisabled = false, //temporary
var joyStickOpen = false,
  joysickTouchID = -1,
  joystickStartX = 0,
  joystickStartY = 0,
  joystickTipX = 0,
  joystickTipY = 0,
  joystickRad = 50.0, //in CANVAS coords
  joystickA = 0.0,
  joystickDirArrowAngle = 0,
  joystickDirArrowAngle_nDelta = 0,
  joystickDistF = 0.0,
  joystickDistF_n = 0.0;

/*abil_possible=false;
var abil_usable=false;
var abil_recharging=false;
var abil_active=false;*/

//update/lerpF
var lastUpdT = +Date.now();

var ws = null;
_0x1abe2b.wave = 1;
_0x1abe2b.halfWave = 2;
_0x1abe2b.arc = 3;
_0x1abe2b.quad = 4;
_0x1abe2b.bow = 5;
_0x1abe2b.bounce = 6;
_0x1abe2b.elastic = 7;
_0x1abe2b.bounceEaseOut = 8;
_0x1abe2b.bounceEaseInOut = 9;

function _0x1abe2b(_0x4b9ad5, _0x148a85, _0x2b7224, _0x59b622,workafter) {
    this.forObj = _0x4b9ad5;
    this.duration = _0x148a85;
    this.animation = _0x2b7224;
    this.startTime = null;
    this.frame = 0;
    this.frameRate = 1000;
    this.timePassed = 0;
    this.stopWhenDurationPassed = this.generate = true;
    this.accelerateEnd = this.state = 0;
    this.hasStopped = false;
    this.img = null;
    this.vars = _0x59b622;
    this.loop = this.keepLastFrame = true;
    this.setImage = function (_0x1f9afa) {
        this.img = _0x510f5a(_0x1f9afa);
    };
    this.run = function () {
    if(!workafter && this.timePassed >= this.duration && this.stopWhenDurationPassed){
      this.hasStopped = true
    }
    
        null == this.startTime && (this.startTime = timestamp);
        if (null != this.startTime && (2 != this.state || this.hasStopped || 
                                       (this.hasStopped = true, this.onStop()),
                                       this.hasStopped || (this.calcTimePassed(),
                                                           this.generateFrame(), 
                                                           this.onFrameEntered(this.frame),
                                                           
                                                         !workafter&&this.timePassed >= this.duration && this.stopWhenDurationPassed && (this.state = 2)),
                                       this.hasStopped)) {
            if (this.keepLastFrame) this.onFrameEntered(this.frame);
            this.loop && this.reset();
        }
    };
    this.reset = function () {
        this.timestamp = null;
        this.hasStopped = true;
        this.state = 0;
    };
      this.timing = function (_0x1868f0) {
        return _0x1868f0;
    };
    this.halfWave = function (_0x5b1e15) {
        return 1 * Math.sin(0.5 * Math.PI / this.duration * _0x5b1e15);
    };
    this.wave = function (_0x5052b4) {
        return 1 * Math.sin(1 * Math.PI / this.duration * _0x5052b4);
    };
    this.arc = function (_0x109adf) {
        return 0x1 - Math.sin(Math.acos(_0x109adf));
    };
    this.quad = function (_0x5c29f0) {
        return Math.pow(_0x5c29f0, 2);
    };
    this.bow = function (_0x5ac2d4) {
        var _0x148a85 = this.vars.v1;
        return Math.pow(_0x5ac2d4, 2) * ((_0x148a85 + 1) * _0x5ac2d4 - _0x148a85);
    };
    this.bounce = function (_0x2000e8) {
        for (var _0x148a85 = 0, _0x2b7224 = 1;; _0x148a85 += _0x2b7224, _0x2b7224 /= 2)
            if (_0x2000e8 >= (3 * _0x148a85) / 11) return -Math.pow((5 * _0x148a85 - 11 * _0x2000e8) / 4, 2) + Math.pow(_0x2b7224, 2);
    };
    this.elastic = function (_0x1acff4) {
        return Math.pow(2, 10 * (_0x1acff4 - 1)) * Math.cos(20 * Math.PI * this.vars.v1 / 3 * _0x1acff4);
    };
    this.bounceEaseOut = function (_0x5c10ac) {
        return 0x1 - this.bounce(1 - _0x5c10ac);
    };
    this.bounceEaseInOut = function (_0x5c1fb1) {
        return 0.5 > _0x5c1fb1 ? this.bounce(2 * _0x5c1fb1) / 2 : (2 - this.bounce(2 * (1 - _0x5c1fb1))) / 2;
    };
    this.calcTimePassed = function () {
        this.timePassed = (timestamp - this.startTime) / this.frameRate;
    };
    this.onFrameEntered = function (_0x3b867c) {};
    this.onStop = function () {};
    this.generateFrame = function () {
   
        if (this.generate) switch (this.state = 1, this.animation) {
        case _0x1abe2b.wave:
            this.frame = this.wave(this.timePassed);
          
            break;
        case _0x1abe2b.halfWave:
            this.frame = this.halfWave(this.timePassed);
            break;
        case _0x1abe2b.arc:
            this.frame = this.arc(this.timePassed);
            
            break;
        case _0x1abe2b.quad:
            this.frame = this.quad(this.timePassed);
            break;
        case _0x1abe2b.bow:
            void 0x0 == this.vars && (this.vars = {
                'v1': 0x1
            });
            this.frame = this.bow(this.timePassed);
            break;
        case _0x1abe2b.bounce:
            this.frame = this.bounce(this.timePassed);
            break;
        case _0x1abe2b.elastic:
            void 0x0 == this.vars && (this.vars = {
                'v1': 0x1
            });
            this.frame = this.elastic(this.timePassed);
            break;
        case _0x1abe2b.bounceEaseOut:
            this.frame = this.bounceEaseOut(this.timePassed);
            break;
        case _0x1abe2b.bounceEaseInOut:
            this.frame = this.bounceEaseInOut(this.timePassed);
         
        }
    };

}
///////
// file: js_src/client/login.js
///////

//handles login stuff

//handle logins
var $_GET = getQueryParams(document.location.search);
var token = $_GET["token"];

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};



function loginWithFB(){

}


///////
// file: js_src/client/desktopAds.js
///////

//adblock detected
//detect adblock
var vidAdCount = 0;
var adBlockEnabled = false;
if (!isMobileApp) {
  var testAd = document.createElement("div");
  testAd.innerHTML = "&nbsp;";
  testAd.className = "adsbox";
  document.body.appendChild(testAd);
  window.setTimeout(function() {
    if (testAd.offsetHeight === 0) {
      //adblocker detected

      console.log("@@@@@@@@@@ is is blocked");
      adBlockEnabled = true;
      document.getElementById("blockedImg").style.display = "block";
    }
    testAd.remove();
    console.log("AdBlock Enabled? ", adBlockEnabled);
  }, 1000);
}

//@@@@@@@@@@@@@@@ load google analytics @@@@@@@@@@@@@@@@@

if (!isMobileApp) {
  //load analytics.js file
  (function(i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function() {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "http://web.archive.org/web/20201010193727/https://www.google-analytics.com/analytics.js",
    "ga"
  );

  //creates google analytics trackers
  ga("create", "UA-36494583-11", "auto"); //regular mope.io player (always track)
  //send pageviews
  ga("send", "pageview");
}

//video ads  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var gamesPlayedSinceLastAd = 0;
var lastAdShowT = 0;

if (window.localStorage) {
  //load last ad show time
  var savT = window.localStorage.getItem("lastAdShowT") * 1 || 0;
  var tSinceLastShow = +new Date() - savT; //make sure last ad shown time is in the past!
  lastAdShowT = tSinceLastShow > 0 ? savT : 0;
  //console.log("videoAd: ad last shown " + (tSinceLastShow / 1000.0) + "s ago!");
  //load games played since ad
  gamesPlayedSinceLastAd = window.localStorage.getItem("gamesSinceAd") * 1;
  //console.log("videoAd: " + gamesPlayedSinceLastAd + " games since last ad!");
}
var gamesPlayedThisSession = 0; //dont show ads on first game
var sessionStartT = +new Date();
var videoAdIsPlaying = false; //ad is being displayed at the moment?

//should ad be displayed this game
var shouldShowVideoAd = function() {
  if (!videoAdsAvailable()) {
    console.log("videoAd: no show: ads disabled");
    return false;
  }
  if (alwaysShowVideo) {
    console.log("videoAd: test mode, always show video ad!");
    return true;
  }
  if (adBlockEnabled) {
    console.log("videoAd: no show: ad blocker on!");
    return false;
  }
  //show ads for NEW players (test)
  /*if (gamesPlayedThisSession < 1 && lastAdShowT == 0) {
      console.log("videoAd: no show: NEW PLAYER, no games yet started!");
      return false;
  }*/

  //show ad if 5+ mins passed
  var tSecsSinceLastShow = (+new Date() - lastAdShowT) / 1000.0;
  if (tSecsSinceLastShow > 2 * 60 && gamesPlayedSinceLastAd > 0) {
    //only if actually started a game!
    console.log("videoAd: show: time limit passed!");
    return true;
  }
  if (gamesPlayedSinceLastAd >= 2) {
    console.log("videoAd: show: 3+ games passed!");
    return true;
  }
  //reached here, no ad this time

  //console.log("videoAd: no show: no ad this time (next ad in " + (5 * 60.0 - tSecsSinceLastShow) + "s) OR in " + (3 - gamesPlayedSinceLastAd) + " games started.");
  return false;
};

var videoAdsADINPLAY = false; //true;

var videoAdsAvailable = function() {
  var isTestMode = KTestingModeON;
  var adPossible = !isMobileApp && !isTestMode;
  if (videoAdsADINPLAY) return adPossible && typeof adplayer != "undefined";
  //adinplay
  else return adPossible;
};

var initVideoAds = function() {
  //ADINPLAY VIDEO ADS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  if (videoAdsADINPLAY) {
    getScript(
      "//web.archive.org/web/20201010193727/http://api.adinplay.com/player/v2/MOP/mope.io/player.min.js",
      function() {
        if (typeof aipPlayer != "undefined") {
          console.log("Loading video preroll...");
          adplayer = new aipPlayer({
            AD_WIDTH: 960, //1200
            AD_HEIGHT: 540, //675
            AD_FULLSCREEN: false,
            PREROLL_ELEM: document.getElementById("preroll"),
            AIP_COMPLETE: function() {
              //alert("prerollComplete");
              console.log("Video ad finished.");
              onVideoAdFinished(true); //successfully played and finished
            }
          });
        } else {
          // failed to load the adslib ads are probably blocked don't call startPreRoll
          console.log("Video ad (blocked) -finished.");
          onVideoAdFinished(false);
        }
      }
    );
  } else {
    //PLAYVIEW MEDIA VIDEO ADS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    //load is done on-play
  }
};

function refreshBannerAds() {
  if (isMobileApp) return;

  try {
    console.log("refreshing banner ads...");

    console.log("CALLED FROM: "+new Error().stack);

      //CURSE
      //curse refresh banners

      factorem.refreshAds([1, 2], true);

      //setTimeout(factorem.refreshAds.bind(factorem, null, true), 800);

      //adinplay
      //googletag.pubads().refresh();
    
  } catch (ex) {
    //factorem/ads dont exist
    console.log("error refreshing ad: " + ex);
  }
}

//remove ads when menu is hidden- > to be reloaded later

//play a loaded ad
var videoAdShowLoading = false; //show loading... animation
var videoAdStartedPlaying = false;
var videoAdShowLoadingTXT = new CachedText(10.0, "white");
videoAdShowLoadingTXT.setText("Connecting...");
videoAdShowLoadingTXT.renderScale = 1.0; //better quality

var playVideoAd = function() {
  onVideoAdPlaying();
  //lower music volume for the ad
  if (currentMusic) currentMusic.volume = 0.2;
  videoAdIsPlaying = true;

  setSiteMenuVisible(false);

  // do something while video ad is played!

  videoAdShowLoading = true;
  videoAdStartedPlaying = false;

  //adinplay video
  if (videoAdsADINPLAY) {
    adplayer.startPreRoll();
  } else {
    //bolt/playview video
    document.getElementById("pvVidContainer").style.display = "block";

    playPVAd();
  }
};

//ad finished, start game
var onVideoAdFinished = function(successfulPlay) {
  if (!videoAdIsPlaying) {
    console.log("ad isn't playing!");
    //return;
  }

  videoAdIsPlaying = false;

  videoAdStartedPlaying = false;
  videoAdShowLoading = false; //stop showing loading... animation
  //successfulPlay=true; //always success

  //adinplay video
  if (videoAdsADINPLAY) {
  } else {
    //hide video container
    document.getElementById("pvVidContainer").style.display = "none";
    document.getElementById("my-content-2").style.display = "none";
  }

  //save that ad played (only on success!)
  if (successfulPlay) {
    gamesPlayedSinceLastAd = 0;
    lastAdShowT = +new Date();
    if (window.localStorage) {
      //save last ad show time
      try {
        window.localStorage.setItem("lastAdShowT", lastAdShowT);
        window.localStorage.setItem("gamesSinceAd", gamesPlayedSinceLastAd);
      } catch (err) {} //no localStorage
    }
  }

  // so if onFinished function is executed, and if the player is NOT alive in game or Ani-choice
  // shown then join the player otherwise ignore (it could be false execution)

  if (!serverCon_aliveInAGame && !aniChoice_isOpen) {
    //restore music volume for the ad
    if (currentMusic) currentMusic.volume = 0.7;
    //play sound (if not muted)
    var sound_click = getLazyLoadAudio("audio/click.mp3");
    if (sound_click) {
      try {
        sound_click.play();
      } catch (err) {}
    }

    console.log("Video done (success: " + successfulPlay + "), joining game!");
    joinGame(false); //not spectator
  }
};

//helper to load adinplay ads script
var getScript = function(src, callback) {
  var headElm = document.head || document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  var once = true;
  script.async = "async";
  script.type = "text/javascript";
  script.charset = "UTF-8";
  script.src = src;
  script.onload = script.onreadystatechange = function() {
    if (
      once &&
      (!script.readyState || /loaded|complete/.test(script.readyState))
    ) {
      once = false;
      callback();
      script.onload = script.onreadystatechange = null;
    }
  };

  headElm.appendChild(script);
};

//load video ads
if (!isMobileApp) {
  initVideoAds();
  //initBannerAds();
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  PLAYWIRE MEDIA video ads
var pvAdSuccess = false;
var pvAdStartTimeout = null;
var boltPlayerID = "player-2";

var pvFirstLoad = true; //preload ad
var playPVAd = function(firstLoad) {
  pvAdSuccess = false;

  //load/ play ad
  var pvVidContainer = document.getElementById("pvVidContainer");

  //if ad wont start playing for x seconds, skip it!
  pvAdStartTimeout = setTimeout(function() {
    //if this runs, script/ad failed to load
    console.log("Error: ad failed to start playing in time!");
    onVideoAdFinished(true); //prevent trying to play ad again, if failing to load
  }, 10000);

  //start loading ad
  try {
    script = document.createElement("script");
    script.src = "http://web.archive.org/web/20201010193727/http://cdn.playwire.com/bolt/js/zeus/embed.js";
    script.type = "text/javascript";
    script.id = "script";
    script.setAttribute("charset", "utf-8");
    script.setAttribute(
      "data-config",
      "http://web.archive.org/web/20201010193727/http://config.playwire.com/1018393/v2/pre_content.json"
    );
    script.setAttribute("data-width", "100%");
    script.setAttribute("data-height", "100%");
    script.setAttribute("data-id", boltPlayerID); //name of player

    //added data-onready attribute
    script.setAttribute("data-onready", "onBoltLoaded");
    script.setAttribute("data-post-ad-container", "my-content-2");

    script.setAttribute(
      "data-theme",
      "http://web.archive.org/web/20201010193727/http://cdn.playwire.com/bolt/js/zeus/themes/orion/main.js"
    );

    pvVidContainer.appendChild(script);
    console.log("loading player...");
  } catch (e) {
    console.log("Error: " + e);
  }
};

//prevent obfuscation of callback method, create var from string!
window["onBoltLoaded"] = function(playerName) {
  console.log("onBoltLoaded: playerName '" + playerName + "'");

  Bolt.on(playerName, "showHiddenContainer", function() {
    console.log("BOLT showHiddenContainer fired");
    onVideoAdFinished(pvAdSuccess);
  });
  Bolt.on(playerName, Bolt.BOLT_AD_STARTED, function() {
    clearTimeout(pvAdStartTimeout);
    console.log("AD STARTED: SUCCESS");

    videoAdStartedPlaying = true;
    pvAdSuccess = true; //mark that ad finished!
  });
  Bolt.on(playerName, Bolt.BOLT_AD_ERROR, function() {
    console.log("AD ERROR EVENT FIRED");
    onVideoAdFinished(pvAdSuccess); //could have started, but experienced an error later
  });
  /*Bolt.on(playerName, Bolt.BOLT_AD_COMPLETE, function() {
    // do something
  	console.log( 'BOLT_AD_COMPLETE Fired' );
    pvAdSuccess = true;
    onVideoAdFinished(true);
});*/
};


///////
// file: js_src/client/mobileApp.js
///////

//detelct mobile app/ mobile browser @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//console.log("is mobile? " + isMobileAppIOS);

//obj-c bridge for ios app
var jsObjcBridge;

function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function() {
    document.documentElement.removeChild(WVJBIframe);
  }, 0);
}

if (isMobileAppIOS) {
  setupWebViewJavascriptBridge(function(bridge) {
    var uniqueId = 1;
    jsObjcBridge = bridge;
  });
}
//call this to show ad in ios mobile app
var showAdMobileIOS = function() {
  if (jsObjcBridge && isMobileAppIOS) {
    console.log("Showing ad IOS...");
    jsObjcBridge.callHandler('adShowCallBack', {
      'foo': 'bar'
    }, function(response) {
      console.log('JS got response ' + response);
    });
  }
}

//android app ads calling
var showAdMobileAndroid = function() {
  console.log("Showing ad android...");
  window.location = "myscheme://showAdmob";
}

function showMobileAd(){
  console.log("showing mobile ad......");
  if (isMobileAppIOS) showAdMobileIOS();
  if (isMobileAppAndroid) showAdMobileAndroid();
}


//@@@@@@@@@@@@@@@@@@@@  SETUP MOBILE @@@@@@@@@@@@@@@@@@@@@@@@@@

//detect iOS device (redirect to app!)
var isiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
if ((isiOS || isAndroid) && !isMobileApp) {
  var oldVisitor = false;
  if (window.localStorage) {
    //dont redirect people more than once
    oldVisitor = window.localStorage.getItem("oldVisitor") > 0;
    try {
      window.localStorage.setItem("oldVisitor", 1);
    } catch (err) {
      oldVisitor = true;
    } //no localStorage= no redirects
  }

}




///////

var animalcol = {

    if (animalcol = 0) {
    ctx.fillStyle = col_land;
    },
  
   if (animalcol = 1) {
    ctx.fillStyle = col_water;
    },

   if (animalcol = 2) {
    ctx.fillStyle = col_arctic;
    },
  
   if (animalcol = 3) {
    ctx.fillStyle = col_lava;
    },
}

///////
// file: js_src/interface/interface.js
///////

//like a static class, for better organization
var GameInterface = {};
function drawGameInterface() {
  if (!serverCon_aliveInAGame) return;

  ctx.save();

  //ease animated vars
  waterBarPerc += (waterBarPerc_n - waterBarPerc) * 0.1;
 pressureBarPerc += (pressureBarPerc_n - pressureBarPerc) * 0.1;
  xpPer += (xpPer_n - xpPer) * 0.03;
  //flashing LOW water animation

  var myPlayer = gameObjsByID[myPlayerID];
  if (myPlayer) {
    myPlayerLastAniT = myPlayer.animalType;
  }
  

  

  
    var waterBarA = 1.0;
  var lowBarPerc = waterBarPerc <= 25;
  if (lowBarPerc) {
    var period = 1.2; //periodic func with time
    var p_min = 0.4,
      p_max = 1.0;
    var amp = 0.5 * (p_max - p_min);
    waterBarA =
      p_min +
      amp +
      amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));
  }

  //water bar
  var barW = Math.min(450, canvasW * 0.9) * interfS,
    barH = 30 * interfS;
  var bx = canvasW / 2, //from bottom
    by = canvasH - 60 * interfS;
  ctx.globalAlpha = 0.35 * waterBarA; //bar bg
  ctx.fillStyle = "#000000";
  ctx.fillRect(bx - barW / 2, by - barH / 2, barW, barH);

  ctx.globalAlpha = waterBarA;
  if (animalBarType == 3)
    ctx.fillStyle = '#ff894b';
    else if (animalBarType == 2)
    // myPlayerLastAniT == a_blackDragon || myPlayerLastAniT == a_phoenix)
    ctx.fillStyle = col_lava;
  else ctx.fillStyle = isAirBar || animalBarType == 1 ? "#8CCEF4" : col_wat1; //bar fill

  ctx.fillRect(
    bx - barW / 2,
    by - barH / 2,
    barW * (waterBarPerc / 100.0),
    barH
  );

  ctx.fillStyle = controls_leftClicked
    ? lowBarPerc
      ? col_food1
      : "orange"
    : lowBarPerc
      ? col_food1
      : "white";
  ctx.globalAlpha = 1.0 * waterBarA;

  //text settings
  var barTxt;
  if (animalBarType == 1) barTxt = lowBarPerc ? "LOW AIR" : "AIR";
  else if (animalBarType == 2) barTxt = lowBarPerc ? "LOW LAVA" : "LAVA";
  else if (animalBarType == 3) barTxt = lowBarPerc ? "LOW ENERGY" : "ENERGY";
  
  else {
    barTxt = lowBarPerc ? "LOW WATER" : "WATER";
  }

  waterBarTXT.setText(barTxt);
  waterBarTXT.setFontSize(22.0 * interfS);
  if (animalBarType == 4) waterBarTXT.setColor("black");
  else waterBarTXT.setColor(lowBarPerc ? col_food1 : "white");
  waterBarTXT.x = bx;
  waterBarTXT.y = by;
  ctx.globalAlpha *= lowBarPerc ? 1.0 : 0.5;
  waterBarTXT.draw();

  ctx.globalAlpha = 0.35;
  ctx.fillStyle = "#000000"; //bar bg
  by = canvasH - barH / 2 - 5;
  // by = by + 5 + barH;
  barW = canvasW * 0.9;

  

  
  
var xpbar = xp - lastxp
var xpbar2 = xpNextAni - lastxp
  ctx.fillRect(bx - barW / 2, by - barH / 2, barW, barH); //bg
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = "#F3C553"; //col_food2; //bar
  ctx.fillRect(bx - barW / 2, by - barH / 2, barW * (xpPer / 100.0), barH); //fill
  ctx.globalAlpha = 1.0;

  xpBarTXT.setText(
    "" +
    formatNumK(xp) +
    " xp  (" +
    formatNumK(xpNextAni) +
    " xp Next Animal)"
  );
  xpBarTXT.setFontSize(22.0 * interfS);
  xpBarTXT.x = bx;
  xpBarTXT.y = by;
  xpBarTXT.draw();

  ctx.globalAlpha = 1.0;
  //}

  //draw touch/ability buttons
  for (var k = 0; k < allTouchButtons.length; k++) {
    var aTouchBut = allTouchButtons[k];
    aTouchBut.draw();
  }

  create1v1Button();
  if (isTouchEnabled) {
    //draw joystick
    joystickA += ((joyStickOpen ? 1.0 : 0.0) - joystickA) * 0.1;
    if (joystickA > 0.005 && serverCon_aliveInAGame) {
      //base
      ctx.globalAlpha = 0.3 * joystickA;
      ctx.beginPath();
      ctx.arc(
        joystickStartX,
        joystickStartY,
        joystickRad * pixelRat,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = "#000000";
      ctx.fill();
      //top
      ctx.globalAlpha = 0.5 * joystickA;
      ctx.beginPath();
      ctx.arc(
        joystickTipX,
        joystickTipY,
        joystickRad * pixelRat * 0.57,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = "#000000";
      ctx.fill();

      //direciton arrow (on screen center)
      var dChange = joystickDirArrowAngle_nDelta * 0.3; //* a;
      joystickDirArrowAngle_nDelta -= dChange;
      joystickDirArrowAngle += dChange;
      joystickDistF += (joystickDistF_n - joystickDistF) * 0.1;
      ctx.save();
      ctx.translate(canvasW / 2, canvasH / 2); //center to screen middle
      ctx.rotate(joystickDirArrowAngle);
      ctx.globalAlpha = 0.5 * joystickA;
      ctx.beginPath();

      ctx.fillStyle = "#000000";

      var arrowRad = 40.0 * pixelRat;
      if (gameObjsByID[myPlayerID])
        //set to own animal rad
        arrowRad = (9.0 + gameObjsByID[myPlayerID].rad) * camzoom;
      arrowRad *= 0.1 + 0.9 * joystickDistF;
      var arrowW = 15.0 * pixelRat; //this gets complied away anyways
      var arrowL = 30.0 * pixelRat * (0.2 + 0.8 * joystickDistF);
      //console.log("len "+arrowL+" f "+joystickDistF);
      //start at angle 0 (rad), so move rightwards
      ctx.moveTo(arrowRad + arrowL, 0); //tip of arrow
      ctx.lineTo(arrowRad, arrowW / 2);
      ctx.lineTo(arrowRad, -arrowW / 2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }

  //DRAW: xp plus popups
  for (var k = plusXpPopups.length - 1; k >= 0; k--) {
    //iterate backwards to allow removing
    var anItem = plusXpPopups[k];
    anItem.draw();

    if (anItem.timedOut) plusXpPopups.splice(k, 1); //remove timed out item
  }
  
  

  ctx.restore();

  if (endScreenCanvas != null) {
    ctx.save();
    endScreenCanvas.width &&
      ctx.drawImage(
        endScreenCanvas,
        canvasW / 2 - endScreenCanvas.width / 2,
        endScreenY,
        endScreenCanvas.width,
        endScreenCanvas.height
      );
    ctx.restore();
  }
  
      if (pressureBarPerc_n < 100 || pressureBarPerc < 99) { 
 waterBarA = 1.0;
 lowBarPerc =  pressureBarPerc <= 25;
  if (lowBarPerc) {
 period = 1.2; //periodic func with time
 p_min = 0.4,
      p_max = 1.0;
 amp = 0.5 * (p_max - p_min);
    waterBarA =
      p_min +
      amp +
      amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));
  }

  //water bar
 barW = Math.min(450, canvasW * 0.9) * interfS,
    barH = 30 * interfS;
 bx = canvasW / 2, //from bottom
    by = canvasH - 120 * interfS;
  ctx.globalAlpha = 0.35 * waterBarA; //bar bg
  ctx.fillStyle = "#000000";
  ctx.fillRect(bx - barW / 2, by - barH / 2, barW, barH);

  ctx.globalAlpha = waterBarA;

    ctx.fillStyle = '#0D1939';

  ctx.fillRect(
    bx - barW / 2,
    by - barH / 2,
    barW * (pressureBarPerc / 100.0),
    barH
  );

  ctx.fillStyle = controls_leftClicked
    ? lowBarPerc
      ? col_food1
      : "orange"
    : lowBarPerc
      ? col_food1
      : "white";
  ctx.globalAlpha = 1.0 * waterBarA;

  //text settings
barTxt;

    barTxt = lowBarPerc ? "LOW PRESSURE" : "PRESSURE";
  

  waterBarTXT.setText(barTxt);
  waterBarTXT.setFontSize(22.0 * interfS);
  if (animalBarType == 4) waterBarTXT.setColor("black");
  else waterBarTXT.setColor(lowBarPerc ? col_food1 : "white");
  waterBarTXT.x = bx;
  waterBarTXT.y = by;
  ctx.globalAlpha *= lowBarPerc ? 1.0 : 0.5;
  waterBarTXT.draw();

  ctx.globalAlpha = 0.35;
  ctx.fillStyle = "#000000"; //bar bg
  by = canvasH - barH / 2 - 5;
  // by = by + 5 + barH;
  barW = canvasW * 0.9;
  }
  
}
//draw big midscreen text
var screenText = "Survive!";
var screenTextFontSize = 25.0;
var screenTextCol = "white";
var screenTextEndT = +new Date() + 0;

//instructions
var screenIns_objsEdible = []; //array of new edible objs (shown in instructions)
var screenIns_EndT = +new Date() + 3000;
var screenIns_A = 0.0;
var screenIns_objsEdible_fullW = 100;
var screenIns_scaleF = 2.0;
var screenIns_drawNewPlayerIns = true;

//animal choice interface
var aniChoice_isOpen = false;
var aniChoice_A = 0.0;
var aniChoice_choiceButtons = []; //buttons to be rendered
var aniChoice_joinGameAfter = false;
var aniChoice_startT = 0;
var aniChoice_timeOutT = 0;

function showScreenTextWithDur(newText, newDur) {
  screenText = newText;
  screenTextEndT = +new Date() + newDur;
}
function drawGamePlay(){
	screenIns_EndT = +new Date() + 3000;
 //draw instructions if needed
   var fadeDur = 0.1;
  var a = (screenIns_EndT - timestamp) / 1000.0 / fadeDur;
  a = 0 > a ? 0 : 1 < a ? 1 : a; //clamp from 0-1

  var idealA = screenIns_EndT - timestamp > 0 ? 1.0 : 0.0;
  screenIns_A +=.1 * (a - screenIns_A)
var fadeDur = 1.0;
var a = (screenIns_EndT - timestamp) / 1000.0 / fadeDur;
a = 0 > a ? 0 : 1 < a ? 1 : a; //clamp from 0-1
screenIns_A = a;

   if (screenIns_A > 0.01 && !options_lowGraphics) {
          ma = 40 + 10 / screenIns_scaleF;
            if (0 < screenIns_objsEdible.length) {
                ctx.save();
                ctx.translate(canvasW / 2, canvasH * (.7 + .5 * (1 - screenIns_A)));
                ctx.scale(screenIns_scaleF * interfS, screenIns_scaleF * interfS);
                ctx.globalAlpha = .2 * screenIns_A;
                ctx.fillStyle = "black";
                var t = 70 * (screenIns_objsEdible.length) / screenIns_scaleF
                   
                ctx.fillRect(-t / 2, -30 / 2, t, 30);
                ctx.globalAlpha = screenIns_A;
                for (e = 0; e < screenIns_objsEdible.length; e++) {
                    
                   var anO = screenIns_objsEdible[e];
    
                    anO.draw();
                }
            }
            if (e = getLoadedImg("./img/instr_eatsymbol.png")) i = ma  / e.height * screenIns_A
            , ctx.drawImage(e, -t / 2 - e.width * i - 15, -ma  / 2, e.width * i, e.height * i);
            screenIns_drawNewPlayerIns && (ctx.save()
            , ctx.fillStyle = "#52EB59"
            , ctx.font = 16 * interfS + "px Arial"
            ,
             ctx.textAlign = "center", ctx.textBaseline = "middle", 
             options_lowGraphics || (ctx.shadowOffsetX = 1, ctx.shadowOffsetY = 1, ctx.shadowColor = "black"), 
             ctx.fillText("HINT: Edible food is outlined LIGHT-GREEN!", 0, -45), 
             ctx.restore());
             ctx.restore()
        
  }

}
function drawScreenText() {
 
  //draw screen text
  var fadeDur = 1.0;
  var a = (screenTextEndT - timestamp) / 1000.0 / fadeDur;
  a = 0 > a ? 0 : 1 < a ? 1 : a; //clamp from 0-1

  if (a > 0) {
    ctx.save();
    ctx.globalAlpha = a;

    /*ctx.font = 25.0 * interfS + "px Arial";
        ctx.lineWidth = 1;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle"; //vertical center
        if (!options_lowGraphics) {
            ctx.shadowOffsetX = 1;
            ctx.shadowOffsetY = 1;
            ctx.shadowColor = "black";
        }
        ctx.fillStyle = screenTextCol;

        fillTextMultiLine(screenText, canvasW / 2, canvasH * 0.3); 
*/
    screenTXT.setText(screenText);
    screenTXT.setColor(screenTextCol)
    screenTXT.setFontSize(screenTextFontSize * interfS);
    screenTXT.x = canvasW / 2;
    screenTXT.y = canvasH * 0.3;
    screenTXT.draw();

    ctx.restore();
  }

 
  //draw animal choice interface
  //draw instructions if needed
  var idealA = aniChoice_isOpen ? 1.0 : 0.0;
  aniChoice_A += (idealA - aniChoice_A) * 0.1;
  
  var _0x1ac04e = 3
  var hotkeys = [];
hotkeys.push('1234567'.split(''));
hotkeys.push('qertyui'.split(''));
hotkeys.push('adfghjk'.split(''));
hotkeys.push('zxcvbnm'.split(''));
  if (0.01 < aniChoice_A) {
        if (0 < aniChoice_choiceButtons.length) {
            ctx.save();
            _0x2f1044 = +new Date();
            idealA = 150;
            ispopup = !1;
            window.matchMedia('(orientation: portrait)').matches && (ispopup = !1);
            window.matchMedia('(orientation: landscape)').matches && (ispopup = !0);
            ispopup ? 15 <= aniChoice_choiceButtons.length ? idealA = 120 : 10 <= aniChoice_choiceButtons.length ? idealA = 130 : 5 <= aniChoice_choiceButtons.length && (idealA = 140) : idealA = Math.max(80, window.innerWidth / 2 / 4);
            var idealA = (idealA * interfS) / 1.2,
                totalW = Math.max(0, aniChoice_choiceButtons.length);
            7 < aniChoice_choiceButtons.length && (totalW = Math.min(6, totalW));
            var _0x469399, ispopup = 0.25 * canvasH,
                _0x4d5d9e = 1.15 * idealA;
            _0x469399 = canvasW / 2 - totalW * _0x4d5d9e / 2 + _0x4d5d9e / 2;
            var _0x1b8a84 = 1,
                choicelen = aniChoice_choiceButtons.length,
                idk = 0.5 + Math.floor(choicelen / totalW) / 10,
                idk = Math.max(0.5, idk),
                idk = Math.min(0.9, idk);
            ctx.translate(0, canvasH * -idk * (1 - aniChoice_A));
            for (var J = idk = 0; J < choicelen; J++) {
                var anO = aniChoice_choiceButtons[J];
                0 < J && 7 < choicelen && 0 == J % 6 && (_0x1b8a84++, idk = 0, ispopup += 1.15 * _0x4d5d9e, _0x469399 = choicelen - J, totalW = 6 > _0x469399 ? _0x469399 : 6, _0x469399 = totalW * _0x4d5d9e, _0x469399 = canvasW / 2 - _0x469399 / 2 + _0x4d5d9e / 2);
                anO.buttonScaleF = 0 == J ? 1.2 : 1;
                anO.w = idealA;
                anO.h = idealA;
                anO.x = _0x469399;
                anO.y = ispopup;
                _0x469399 += _0x4d5d9e / 2 * anO.buttonScaleF + _0x4d5d9e / 2;
                _0x1b8a84 < hotkeys.length && anO.setHotKey(hotkeys[_0x1b8a84 - 1][idk].toUpperCase());
                idk++;
            }
            ctx.globalAlpha = aniChoice_A;
            for (J = 0; J < aniChoice_choiceButtons.length; J++) anO = aniChoice_choiceButtons[J], anO.imgSizeF = 0.5, anO.draw();
        }
    
        idealA = Math.max(0, _0x2af9ee - _0x2f1044) / 1000;
        ispopup = 1;
        0 != idealA && 8 > idealA && (ispopup = 0.7 + 0.3 * Math.sin(2 * Math.PI / 1.2 * (_0x2f1044 / 1000)));
        ctx.save();
        ctx.globalAlpha = aniChoice_A * ispopup;
        ctx.fillStyle = 0 != idealA && 8 > idealA ? 'red' : 'white';
        ctx.font = 25 * interfS + 'px Arial';
        ctx.lineWidth = 1;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowOffsetX = 1
    ctx.shadowOffsetY = 1
    ctx.shadowColor = 'black'
        idealA = 0 < idealA ? ' (auto in ' + Math.trunc(idealA) + 's)' : '';
        _0x4cd58d = Math.min(window.devicePixelRatio, 2),
        ctx.fillText(aniChoice_joinGameAfter ? 'Choose which animal to spawn as:' : 'Choose an upgrade:' + idealA, canvasW / 2, aniChoice_choiceButtons[0].y - aniChoice_choiceButtons[0].w / 2 - 25 * _0x4cd58d);
        ctx.restore();
        ctx.restore();
    }

  // we need an anchor here to inject custom interface methods
  /// battle royal messages:
  //    if (window.gameMode_interface)
  //        window.gameMode_interface();
  if (_gameMode != null) {
    _gameMode.interface();
  }

  buildInviteScreen();

  if (inviteScreenCanvas != null) {
    inviteScreenCanvas.width &&
      ctx.drawImage(
        inviteScreenCanvas,
        canvasW / 2 - inviteScreenCanvas.width / 2,
        inviteScreenPos,
        inviteScreenCanvas.width,
        inviteScreenCanvas.height
      );
  }

  gameModeDrawInterfaceButtons();
  display1v1TopperInfo();
}
function gameModeDrawInterfaceButtons() {
  if (_gameMode != null)
    if (_gameMode.interfaceButtons) {
      for (var i = 0; i < _gameMode.interfaceButtons.length; i++) {
        var aBut = _gameMode.interfaceButtons[i];
        if (aBut.isVisible) {
          aBut.draw();
        }
      }
    }
}
var minimapW = 250.0,
   minimapH = 250.0; //width of the canvas (used during draw)

var oceanWid = 0;
var arcticW = 0;
var arcticH = 0;
function generateMinimap(msg) {
  //scale minimap based on ratio for minimap
  minimapW = minimapH * (gameW / gameH);

  //offscreen canvas to render and save minimap (performance+ease)
  if (!miniMapCanvas) miniMapCanvas = document.createElement("canvas");
  if (!brMapCanvas) brMapCanvas = document.createElement("canvas");
  miniMapCanvas.width = minimapW;
  miniMapCanvas.height = minimapH;
  brMapCanvas.width = canvasW;
  brMapCanvas.height = canvasH;
  var ctx_ = miniMapCanvas.getContext("2d");

  ctx_.globalAlpha = 0.35;
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(0, 0, miniMapCanvas.width, miniMapCanvas.height);

  //parse msg, draw data on miniMap
  var minimapScaleF_x = minimapW / 200.0; // / size scaled to for msg send
  var minimapScaleF_y = minimapH / 200.0;


console.log(minimapScaleF_x,minimapScaleF_y)
  //oceans: just send width (oceans are always at left/right sides)
  oceanWid = msg.readUInt16();
  arcticW = msg.readUInt16();
  arcticH = msg.readUInt16();

  //if(!snowflakesDrawnForActic) drawSnowFlakesInArctic(arcticW, arcticH);
  for (var i = 0; i < 2; i++) {
    ctx_.fillStyle = col_ocean;
    ctx_.globalAlpha = 0.5;
    var tF = minimapW / gameW;
    if (i == 0)
      //left SIDE
      ctx_.fillRect(0 * tF, arcticH * tF, oceanWid * tF, gameH * tF);
    //r SIDE
    else
      ctx_.fillRect(
        (gameW - oceanWid) * tF,
        arcticH * tF,
        oceanWid * tF,
        gameH * tF
      );
  }
  if (!oldmope) {
    for (var i = 0; i < 2; i++) { //arctic ocean
    ctx_.fillStyle = col_cold_ocean;
    ctx_.globalAlpha = 0.5;
    var tF = minimapW / gameW;
    if (i == 0)
      //left SIDE
      ctx_.fillRect(0 * tF, 0 * tF, oceanWid * tF, gameH/4 * tF);
    //r SIDE
    else
      ctx_.fillRect(
        (gameW - oceanWid) * tF,
        0 * tF,
        oceanWid * tF,
        gameH/4 * tF
      );
  }
  }

    
  //draw arctic (centered at top)
  ctx_.fillStyle = "white";
  ctx_.globalAlpha = 0.5;
  var tF = minimapW / gameW;
        if (oldmope) {
        ctx_.fillRect(
    0,
    0 * tF,
    gameW * tF,
    arcticH * tF
  );
        } else {
  ctx_.fillRect(
    gameW / 2 * 0.45 * tF,
    0 * tF,
    gameW * 0.55 * tF,
    arcticH * tF
  );
        }

  //draw river
  var numWater = msg.readUInt16();
  ctx_.fillStyle = col_ocean;
  ctx_.globalAlpha = 0.5;
  for (var i = 0; i < numWater; i++) {
    // rivers
    var riverW = msg.readUInt16() * (minimapW / gameW);
    var riverH = msg.readUInt16() * (minimapH / gameH);
    var riverX = msg.readUInt16() * (minimapW / gameW);
    var riverY = msg.readUInt16() * (minimapH / gameH);

    ctx_.globalAlpha = 0.5;
    var tF = minimapW / gameW;
    ctx_.fillRect(riverX - riverW / 2, riverY - riverH / 2, riverW, riverH);
  }

  //volcano biome
  var numWater = msg.readUInt16();
  ctx_.fillStyle = col_lava;
  for (var i = 0; i < numWater; i++) {
    var volcanoRad = msg.readUInt8() * 5.0;
    var volcanoX = msg.readUInt16() * (minimapW / gameW);
    var volcanoY = msg.readUInt16() * (minimapH / gameH);
    ctx_.beginPath();
    ctx_.arc(
      volcanoX,
      volcanoY,
      Math.max(1, volcanoRad * (minimapW / gameW)),
      0,
      2 * Math.PI
    );
    ctx_.fill();
  }

  // danger area
  /*var numWater = msg.readUInt16();
    for (var i = 0; i < numWater; i++) {
        var mainRad = msg.readUInt8() * 5.0;
        var shrinkRad = msg.readUInt8() * 5.0;
        var areaX = msg.readUInt16() * (minimapW / gameW);
        var areaY = msg.readUInt16() * (minimapH / gameH);
        var areaW = msg.readUInt16() * (minimapW / gameW);
        var areaH = msg.readUInt16() * (minimapH / gameH);
        ctx_.beginPath();
        ctx_.fillStyle = "red";
        ctx_.globalAlpha = 0.3;
        ctx_.fillRect(areaX - areaW / 2, areaY - areaH / 2, areaW, areaH);


        ctx_.fillStyle = "limegreen";
        ctx_.globalAlpha = 0.7;
        ctx_.arc(areaX, areaY, Math.max(1, shrinkRad * (minimapW / gameW)), 0, 2 * Math.PI);
        ctx_.fill()
    }*/

  //lakes
  var numWater = msg.readUInt16();
  ctx_.fillStyle = col_wat1;
  ctx_.globalAlpha = 0.5;
  for (var i = 0; i < numWater; i++) {
    //lakes
    var x = msg.readUInt8() * minimapScaleF_x;
    var y = msg.readUInt8() * minimapScaleF_y;
    var rad = msg.readUInt8() * 5.0; //scaled down here
    ctx_.beginPath();
    ctx_.arc(x, y, Math.max(1, rad * (minimapW / gameW)), 0, 2 * Math.PI);
    ctx_.fill();
  }

  //mud spots
  var numWater = msg.readUInt16();
  ctx_.fillStyle = "#907A33";
  ctx_.globalAlpha = 0.7;
  for (var i = 0; i < numWater; i++) {
    //mud areas
    var x = msg.readUInt8() * minimapScaleF_x;
    var y = msg.readUInt8() * minimapScaleF_y;
    var rad = msg.readUInt8() * 5.0; //scaled down here
    ctx_.beginPath();
    ctx_.arc(x, y, Math.max(1, rad * (minimapW / gameW)), 0, 2 * Math.PI);
    ctx_.fill();
  }
  var numWater = msg.readUInt16();
  ctx_.fillStyle = "#7BB7BB";
  ctx_.globalAlpha = 0.85;
  for (var i = 0; i < numWater; i++) {
    //ice areas
    var x = msg.readUInt8() * minimapScaleF_x;
    var y = msg.readUInt8() * minimapScaleF_y;
    var rad = msg.readUInt8() * 5.0; //scaled down here
    ctx_.beginPath();
    ctx_.arc(x, y, Math.max(1, rad * (minimapW / gameW)), 0, 2 * Math.PI);
    ctx_.fill();
  }
  var numWater = msg.readUInt16();
  ctx_.fillStyle = col_outline_land;
  ctx_.globalAlpha = 1.0;
  for (var i = 0; i < numWater; i++) {
    //hills
    var x = msg.readUInt8() * minimapScaleF_x;
    var y = msg.readUInt8() * minimapScaleF_y;
    var rad = msg.readUInt8() * 5.0; //scaled down here
    ctx_.beginPath();
    ctx_.arc(x, y, Math.max(1, rad * (minimapW / gameW)), 0, 2 * Math.PI);
    ctx_.fill();
  }
    var numWater = msg.readUInt16();
  ctx_.fillStyle = col_rockHill;
  ctx_.globalAlpha = 1.0;
  for (var i = 0; i < numWater; i++) {
    //rocks
    var x = msg.readUInt8() * minimapScaleF_x;
    var y = msg.readUInt8() * minimapScaleF_y;
    var rad = msg.readUInt8() * 5.0; //scaled down here
    ctx_.beginPath();
    ctx_.arc(x, y, Math.max(1, rad * (minimapW / gameW)), 0, 2 * Math.PI);
    ctx_.fill();
  }
  var numWater = msg.readUInt16();
  ctx_.fillStyle = "#5D5D5D";
  ctx_.globalAlpha = 0.6;
  for (var i = 0; i < numWater; i++) {
    //lake islands
    var x = msg.readUInt8() * minimapScaleF_x;
    var y = msg.readUInt8() * minimapScaleF_y;
    var rad = msg.readUInt8() * 5.0; //scaled down here
    ctx_.beginPath();
    ctx_.arc(x, y, Math.max(1, rad * (minimapW / gameW)), 0, 2 * Math.PI);
    ctx_.fill();
  }
  var numWater = msg.readUInt16(); //food spots
  ctx_.fillStyle = col_food1;
  ctx_.globalAlpha = 1.0;
  for (var i = 0; i < numWater; i++) {
    var x = msg.readUInt8() * minimapScaleF_x;
    var y = msg.readUInt8() * minimapScaleF_y;

    ctx_.beginPath();
    ctx_.arc(x, y, Math.max(2.5, 40.0 * (minimapW / gameW)), 0, 2 * Math.PI);
    ctx_.fill();
  }

  var numWater = msg.readUInt16(); //water spots
  ctx_.fillStyle = col_wat1;
  ctx_.globalAlpha = 1.0;
  for (var i = 0; i < numWater; i++) {
    var x = msg.readUInt8() * minimapScaleF_x;
    var y = msg.readUInt8() * minimapScaleF_y;

    ctx_.beginPath();
    ctx_.arc(x, y, Math.max(2.5, 50.0 * (minimapW / gameW)), 0, 2 * Math.PI);
    ctx_.fill();
  }
}

//XP popups

var  plusXpPopups = [];

var  lastPopupXPAm = 0;

var  lastPopupT = 0;
var  lastPopupC = 0;


function interface_onXPAmountUpdate(newAmount, oldAmount) {
  var xpGained = newAmount - lastPopupXPAm;

  if (
    newAmount - lastPopupXPAm != 0 &&
    (timestamp - lastPopupT) / 1000.0 > 0.7
  ) {
    //over 0.5s since last popup
    lastPopupXPAm = newAmount;
    lastPopupT = timestamp;

    //new popup
    var newPop = new PlusXPPopup(xpGained);

    plusXpPopups.push(newPop);
  }
}

function drawLeaderboard() {
  // if (gameMode != gameMode_teamMode)
  //   if (lbCanvas && serverCon_aliveInAGame) {
  //     lbCanvas.width &&
  //       ctx.drawImage(
  //         lbCanvas,
  //         10 * pixelRat,
  //         28 * pixelRat,
  //         lbCanvas.width * interfS,
  //         lbCanvas.height * interfS
  //       );
  //   }

  if (_gameMode != null) _gameMode.drawLeaderboard();
}

function drawMinimap() {
  //draw minimap (pre-rendered)
  if (
    canvasW / pixelRat >= 500 &&
    miniMapCanvas && 
    miniMapCanvas.width &&
    serverCon_aliveInAGame
  ) {
    ctx.drawImage(
      miniMapCanvas,//minimapCanvas == width & height of minimapW/H
      canvasW - (10 * pixelRat + miniMapCanvas.width * interfS),
      10 * pixelRat,
      minimapW * interfS, //minimapW && h == 250;
      minimapH * interfS  //interfS = 0.85 * pixelRat * Math.max(windowW / 1920, windowH / 1080); || maybe 1.0
    );

    //draw own player on minimap

    var myPlayerObj = gameObjsByID[myPlayerID];
    //mark34
                var hasbad = false
                              var sound_badpig = getLazyLoadAudio("audio/badpiggies/0.mp3");
                if (Math.floor(Math.random() * 2) == 2) {
              sound_badpig = getLazyLoadAudio("audio/badpiggies/1.mp3");
                } else {
              sound_badpig = getLazyLoadAudio("audio/badpiggies/0.mp3");
                }
        for (let prooding2 in gameObjsByID) {
                var player = gameObjsByID[prooding2];
              if (player.animalType == a_pig && player.specType == 200 && badpiggiesplay < Date.now()) {
                hasbad = true
  if (sound_badpig) {
    try {
      recover = Date.now() + 500
      badpiggiesplay = Date.now() + 160 * 1000
      sound_badpig.play();
      sound_badpig.muted = false
    } catch (err) {}
  }
      }
          
          
          
        }
                  if (!hasbad && recover < Date.now()) {
      if (sound_badpig) {
    try {
      sound_badpig.pause();
            badpiggiesplay = Date.now()
    } catch (err) {}
  }
                  }
/*      for (let prooding in gameObjsByID) {
      var pood = gameObjsByID[prooding];
	                         if (pood.oType == o_battleroyale) {
drawRoyaleOnMiniMap(pood, "red", 1.0);
	       }
    } */

    for (let prooding in gameObjsByID) {
      var pood = gameObjsByID[prooding];
      if (pood) {
      if (pood.animalType == a_bigmouse){
        drawPlayerOnMiniMap(pood, "blue", 1.0);
      }
       if (pood.oType == o_astralStone){
        drawPlayerOnMiniMap(pood, "purple", 1.5);
      }
                       if (pood.oType == o_battleroyale) {
drawRoyaleOnMiniMap(pood, "red", 1.0);
	       }
      }
    }
//for ()
    if (myPlayerObj) drawPlayerOnMiniMap(myPlayerObj, "white", 1.0);
    
  }
}

function drawPlayerOnMiniMap(myPlayerObj, color, radF) {
  if (myPlayerObj) {
    ctx.fillStyle = color;
    ctx.beginPath();
    var plR =
      pixelRat * Math.max(3, myPlayerObj.rad * (miniMapCanvas.width / gameW));
    ctx.arc(
      canvasW -
      (10 * pixelRat + miniMapCanvas.width * interfS) +
      (myPlayerObj.x * (miniMapCanvas.width * interfS)) / gameW,
      10 * pixelRat +
      (myPlayerObj.y * (miniMapCanvas.height * interfS)) / gameH,
      plR * radF,
      0,
      2 * Math.PI
    );
    ctx.fill();
   
  }
}

function drawObjOnMiniMap(obj, color, radF) {
  if (obj) {
    ctx.fillStyle = color;
    ctx.beginPath();
    var plR = pixelRat * Math.max(2, obj.rad);
    ctx.arc(
      canvasW -
        (10 * pixelRat + miniMapCanvas.width * interfS) +
        (obj.x * (miniMapCanvas.width * interfS)) / gameW,
      10 * pixelRat + (obj.y * (miniMapCanvas.height * interfS)) / gameH,
      plR * radF,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}

function drawRoyale2OnMiniMap(obj, color, radF) {
  if (obj) {
	    var ctx_2 = brMapCanvas.getContext("2d");
	      var plR = pixelRat * Math.max(2, obj.specType);
	  /*
    ctx.fillStyle = color;
    ctx.beginPath();
    //var plR = pixelRat * Math.max(2, obj.rad);
    ctx.arc(
      canvasW -
        (10 * pixelRat + miniMapCanvas.width * interfS) +
        (obj.x * (miniMapCanvas.width * interfS)) / gameW,
      10 * pixelRat + (obj.y * (miniMapCanvas.height * interfS)) / gameH,
      plR * radF * (minimapW / gameW),
      0,
      2 * Math.PI
    );
    ctx.fill(); */
	  	  ctx_2.globalAlpha = 0.3;
ctx_2.fillStyle = "#FF1616";
ctx_2.fillRect(0, 0, miniMapCanvas.width, miniMapCanvas.height)
 var oldgco = ctx_2.globalCompositeOperation
ctx_2.globalCompositeOperation = "destination-out";
	  ctx_2.globalAlpha = 1;
ctx_2.strokeStyle = "#000";
ctx_2.beginPath();
ctx_2.arc(obj.x * (minimapW / gameW), obj.y * (minimapH / gameH), plR * radF * (minimapW / gameW), 0, Math.PI*2);
	 /*     ctx_2.arc(
      canvasW -
        (10 * pixelRat + miniMapCanvas.width * interfS) +
        (obj.x * (miniMapCanvas.width * interfS)) / gameW,
      10 * pixelRat + (obj.y * (miniMapCanvas.height * interfS)) / gameH,
      plR * radF * (minimapW / gameW),
      0,
      2 * Math.PI
    ); */
ctx_2.fill();
ctx_2.globalCompositeOperation = "source-over";
  }
}

function drawRoyaleOnMiniMap(obj, color, radF) {
  if (obj) {
	  	    var ctx_2 = brMapCanvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.beginPath();
    var plR = pixelRat * Math.max(2, obj.rad);
    ctx.arc(this.canvas.width - (obj.x * (minimapW / gameW) + obj.rad/2),
      obj.y * (minimapH / gameH) + obj.rad/2,
      plR * radF * (minimapW / gameW),
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}

//generate leaderboard
function updateLeaderBoard(lbData, roomPlayers, ownRank) {
  lbCanvas = null;
  if (0 != lbData.length) {
    lbCanvas = document.createElement("canvas");
    var ctx_ = lbCanvas.getContext("2d"),
      boardLength = 55;
    var nameH = 22;
    boardLength = boardLength + nameH * lbData.length;
    lbCanvas.width = 270;
    lbCanvas.height = boardLength;

    ctx_.globalAlpha = 0.2;
    ctx_.fillStyle = "#000000";
    ctx_.fillRect(0, 0, lbCanvas.width, lbCanvas.height);

    ctx_.globalAlpha = 1;
    ctx_.fillStyle = "#FFFFFF";
    var str = curServer.name; //"Top Players";
    ctx_.font = "24px Arial";
    if (!options_lowGraphics) {
      ctx_.shadowOffsetX = 1;
      ctx_.shadowOffsetY = 1;
    }
    ctx_.shadowColor = "black";
    ctx_.fillText(
      str,
      lbCanvas.width / 2 - ctx_.measureText(str).width / 2,
      40
    );
    var rank;

    ctx_.textAlign = "left";
    //ctx_.textBaseline = "middle"; //vertical center

    for (ctx_.font = "17px Arial", rank = 0; rank < lbData.length; ++rank) {
      str = options_noNames ? "" : lbData[rank].name || "mope2.io/1v1";

      if (ownRank == lbData[rank].rank) {
        ctx_.fillStyle = "#FEED92";
        if (options_noNames) str = "you";
      } else ctx_.fillStyle = "#FFFFFF";

      str =
        lbData[rank].rank +
        ". " +
        str +
        " (" +
        formatNumK(lbData[rank].score) +
        ")";
      ctx_.fillText(str, 15, 65 + nameH * rank);
    }
  }
}

//interface hide/shows
function setSiteMenuVisible(visible) {
  document.getElementById("startMenuWrapper").style.display = visible
    ? "block"
    : "none";
}
function onClickContinue() {
  playPressed();
  //setSiteMenuVisible(true);
  document.getElementById("endScreen").style.display = "none";
}

function hideEndScreen() {
  var endScreen = document.getElementById("endScreen");
  if (endScreen) {
    this.endScreenDisplayed = true;
    endScreen.innerHTML = "";
    endScreen.style.display = "none";
    endScreen.style.marginTop = "0px";
  }
}
function onClickShowMenu() {
  setSiteMenuVisible(true);
  document.getElementById("moneyRectangle").style.marginTop = "55px";
  document.getElementById("mopeMenu").style.display = "block";
  document.getElementById("endScreen").style.display = "none";
}

function showBannerAds() {}

function showMopeMenu() {
  document.getElementById("mopeMenu").style.display = "block";
}

function resetClient() {
  // call this funciton when a game mode is reset. this way client no longer retains old game objects
  // start again!
  console.log("client objs reset!");
  gameObjs = [];
  gameObjsByID = {};
  remGameObjs = [];
}

var drawLabelValueOn = function(c, label, value, x, y) {
  c.fillText(label, x, y);
  c.fillText(": " + value, x + 120, y);
};

function create1v1Button() {
  if (can1v1) {
    if (btn1v1 == null) {
      btn1v1 = new InterfaceButton(0, 0, 60, 60, "Click to 1v1", 30);
      btn1v1.showLabeleOnHover = true;
      btn1v1.textShadow = true;
      btn1v1.drawTextOnHowever = function() {
        this.drawText(this.w / 2, this.h + this.h / 2);
      };

      btn1v1.onClick = function() {
        if (!this.clicked  ) {
          this.isVisible = false;
          this.clicked = true;
          this.isHighLighted = false;
          var mes = new MsgWriter(2);
          mes.writeUInt8(52); // Msg_1v1Mode_invitePlayer;
          mes.writeUInt8(0); //1=down, 0=up
          wsSendMsg(mes);
        }
      };
      btn1v1.onMouseMove = function() {};
      btn1v1.update = function() {
        this.x = canvasW / 2 - this.w / 2;
        this.y = 45 * interfS + this.h / 2; //(canvasH / 2) - 250;
        //if (gameMode == gameMode_battleRoyal) this.y += 50 * interfS;
      };

      btn1v1.onInterfaceReset = function() {
        this.isVisible = false;
        btn1v1 = null;
      };

      btn1v1.onAfterDraw = function() {
        var theImg = getLoadedImg("img/icons/1v1.png");
        if (theImg) {
          ctx.save();

          var iw = this.w * 0.8;
          var pad = (this.w - iw) / 2;
          ctx.drawImage(theImg, this.x + pad, this.y + pad, iw, iw);
          ctx.restore();
        }
      };
      _gameMode.interfaceButtons.push(btn1v1);
    } else {
      if (btn1v1 != null) {
        btn1v1.isVisible = show1v1Button;
        if (btn1v1.isVisible) btn1v1.clicked = false;
        btn1v1.draw();
      }
    }
  }
}

function createEggUI1(eggtype) {
	    if (btnEGG1 == null) {
      btnEGG1 = new InterfaceButton(-80, 0, 60, 60, "Click to 1v1", 30, "#828282", "#6D6D6D");
      btnEGG1.showLabeleOnHover = true;
      btnEGG1.textShadow = true;
      btnEGG1.drawTextOnHowever = function() {
        this.drawText(this.w / 2, this.h + this.h / 2);
      };

      btnEGG1.onClick = function() {
        if (!this.clicked  ) {
          this.isVisible = false;
          this.clicked = true;
          this.isHighLighted = false;
        }
      };
      btnEGG1.onMouseMove = function() {};
      btnEGG1.update = function() {
        this.x = canvasW / 2 - this.w / 2;
        this.y = 45 * interfS + this.h / 2; //(canvasH / 2) - 250;
        //if (gameMode == gameMode_battleRoyal) this.y += 50 * interfS;
      };

      btnEGG1.onInterfaceReset = function() {
        this.isVisible = false;
        btnEGG1 = null;
      };

      btnEGG1.onAfterDraw = function() {
        var theImg = getLoadedImg("img/eastereggs/" + 1 + ".png");
        if (theImg) {
          ctx.save();

          var iw = this.w * 0.8;
          var pad = (this.w - iw) / 2;
          ctx.drawImage(theImg, this.x + pad, this.y + pad, iw, iw);
          ctx.restore();
        }
      };
      _gameMode.interfaceButtons.push(btnEGG1);
    } else {
      if (btnEGG1 != null) {
        btnEGG1.isVisible = show1v1Button;
        if (btnEGG1.isVisible) btnEGG1.clicked = false;
        btnEGG1.draw();
      }
    }
  
}


function createEggUI(eggtype) {
    if (btnEGG == null) {
      btnEGG = new InterfaceButton(160, 0, 60, 60, "Click to 1v1", 30, "#828282", "#6D6D6D");
      btnEGG.showLabeleOnHover = true;
      btnEGG.textShadow = true;
      btnEGG.drawTextOnHowever = function() {
        this.drawText(this.w / 2, this.h + this.h / 2);
      };

      btnEGG.onClick = function() {
        if (!this.clicked  ) {
          this.isVisible = false;
          this.clicked = true;
          this.isHighLighted = false;
        }
      };
      btnEGG.onMouseMove = function() {};
      btnEGG.update = function() {
        this.x = canvasW / 2 - this.w / 2;
        this.y = 45 * interfS + this.h / 2; //(canvasH / 2) - 250;
        //if (gameMode == gameMode_battleRoyal) this.y += 50 * interfS;
      };

      btnEGG.onInterfaceReset = function() {
        this.isVisible = false;
        btnEGG = null;
      };

      btnEGG.onAfterDraw = function() {
        var theImg = getLoadedImg("img/eastereggs/" + 0 + ".png");
        if (theImg) {
          ctx.save();

          var iw = this.w * 0.8;
          var pad = (this.w - iw) / 2;
          ctx.drawImage(theImg, this.x + pad, this.y + pad, iw, iw);
          ctx.restore();
        }
      };
      _gameMode.interfaceButtons.push(btnEGG);
    } else {
      if (btnEGG != null) {
        btnEGG.isVisible = show1v1Button;
        if (btnEGG.isVisible) btnEGG.clicked = false;
        btnEGG.draw();
      }
    }
  
}



var _displayPlayerCounter = 0;
function displayPlayerStats() {
  _displayPlayerCounter++;

  if (_displayPlayerCounter % 500 == 0) {
    _displayPlayerCounter = 0;
    if (displayWinsGoals == 1) displayWinsGoals = 0;
    else displayWinsGoals = 1;
  }

  if (!can1v1 || player1v1ArenaWins == 0) displayWinsGoals = 1;

  if (player1v1ArenaWins > 0 || playerGoalsScore > 0) {
    var displayCounterNumb = 0;
    var displayLabel = "";
    if (displayWinsGoals == 0) {
      displayCounterNumb = player1v1ArenaWins;
      displayLabel = "1v1 WINS";
    } else if (displayWinsGoals == 1) {
      displayCounterNumb = playerGoalsScore;
      displayLabel = "GOALS";
    }

    if (displayCounterNumb > 0) {
      ctx.save();
      player1v1TXT.setText(displayLabel + ": " + displayCounterNumb);
      player1v1TXT.setFontSize(30.0 * interfS);
      player1v1TXT.setColor("white");
      player1v1TXT.x = canvasW / 2;
      player1v1TXT.y = canvasH - 95 * interfS;
      ctx.globalAlpha = 1;
      player1v1TXT.draw();
      ctx.restore();
    }
  }
}


  

var displayWinsGoals = 0;
var inviteScreenCanvas = null;
var inviteScreenPos = 0;
function buildInviteScreen() {
  /* player1v1Requests = [];
  for (i = 0; i < 1; i++) {
    var id = i;
    var fromPlayer = "test " + (i + 1);
    var reqDur = 10000;
    player1v1Requests.push({
      id: id,
      requestee: fromPlayer,
      aniType: 1,
      wins: 1,
      teamID: 1,
      rank: 1,
      dur: reqDur
    });
  }
  */
  if (player1v1Requests.length == 0) {
    removeExpiredRequestButtons();
    inviteScreenCanvas = null;
    return;
  }

  if (inviteScreenCanvas == null)
    inviteScreenCanvas = document.createElement("canvas");

  if (inviteScreenCanvas == null) return;

  var ctx_ = inviteScreenCanvas.getContext("2d");
  var boardLength = 55;
  var nameH = 40;
  var pad = 5;

  var borad_height = 200 + player1v1Requests.length * 80;
  var borad_width = 420;

  boardLength = borad_height + pad * 2;
  inviteScreenCanvas.width = borad_width + pad * 2;
  inviteScreenCanvas.height = boardLength;
  var screenPos =300
  inviteScreenPos = screenPos;
  ctx_.globalAlpha = 0.2;
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(0, 0, inviteScreenCanvas.width, inviteScreenCanvas.height);
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(
    pad,
    pad,
    inviteScreenCanvas.width - pad * 2,
    inviteScreenCanvas.height - pad * 2
  );
  var y = pad;
  ctx_.globalAlpha = 1;
  ctx_.fillStyle = "#FFFFFF";
  ctx_.font = "30px Arial";

  y += 55;

  var str = "1v1 REQUEST"; //"Top Players";
  ctx_.font = "30px Arial";
  ctx_.fillText(
    str,
    inviteScreenCanvas.width / 2 - ctx_.measureText(str).width / 2,
    y
  );

  //screenPos -= boardLength / 2;
  // screenPos += 40;
  screenPos = 100;
  var btnY = 0;
  for (r = 0; r < player1v1Requests.length; r++) {
    var req = player1v1Requests[r];
    ctx_.save();
    ctx_.font = "20px Arial";

    str = req.requestee + " invites you for 1v1 ";
    ctx_.fillText(
      str,
      inviteScreenCanvas.width / 2 - ctx_.measureText(str).width / 2,
      screenPos
    );

    var x = pad + 15;
    y = screenPos + 40;
    drawLabelValueOn(ctx_, "Animal", "", x, y);

    var aniInfo = infoForAnimalType(req.aniType);
    var theImg = getLoadedImg("./skins/" + aniInfo.skinName + ".png");

    if (theImg) {
      ctx_.save();

      ctx_.drawImage(theImg, x + 130, y - 30, 50, 50);
      ctx_.restore();
    }

    x += 210;
    drawLabelValueOn(ctx_, "1v1 Wins", req.wins, x, y);
    y += 40;
    x = pad + 15;
    var teamLabel = gameMode == gameMode_teamMode ? "Team" : "Kills";
    var teamVal = gameMode == gameMode_teamMode ? "" : req.kills;
    drawLabelValueOn(ctx_, teamLabel, "", x, y);

    if (gameMode == gameMode_teamMode) {
      ctx_.save();
      var cx = x + 155;
      var cy = y - 10 / 2;
      ctx_.fillStyle = _gameMode.teamColors[req.teamID];
      ctx_.beginPath();
      ctx_.arc(cx, cy, 10, 0, Math.PI * 2);
      ctx_.fill();

      ctx_.restore();
    }
    x += 210;
    drawLabelValueOn(ctx_, "Rank", req.rank, x, y);
    screenPos += 100;
    var btnAccept = create1v1RequestButton(req, "Accept");

    btnAccept.yPos = screenPos;
    btnAccept.update = function() {
      this.x = canvasW / 2 - 140;
      this.y = inviteScreenPos + this.yPos + 10;
    };

    var btnReject = create1v1RequestButton(req, "Reject");
    btnReject.yPos = screenPos;
    btnReject.update = function() {
       this.x = canvasW / 2 + 60;
      this.y = inviteScreenPos + this.yPos + 10;
    };



    screenPos += 80;
  }
}

function removeExpiredRequestButtons() {
  if (_gameMode == null || _gameMode.interfaceButtons == null) return;
  for (d = 0; d < _gameMode.interfaceButtons.length; d++) {
    var aBut = _gameMode.interfaceButtons[d];

    if (aBut.reqID !== undefined) {
      var activeRequest = true;
      var found = false;
      for (r = 0; r < player1v1Requests.length; r++) {
        var req = player1v1Requests[r];
        if (req.id == aBut.reqID) {
          found = true;
          break;
        }
      }

      if (!found) activeRequest = false;

      if (!activeRequest || isInArena) {
        var tmp = _gameMode.interfaceButtons.indexOf(aBut);
        if (-1 != tmp) {
          _gameMode.interfaceButtons.splice(tmp, 1);
        }
      }
    }
  }
}

function removeRequestButtons() {
  if (_gameMode == null || _gameMode.interfaceButtons == null) return;
  for (d = 0; d < _gameMode.interfaceButtons.length; d++) {
    var aBut = _gameMode.interfaceButtons[d];

    if (aBut.reqID !== undefined) {
      var activeRequest = true;
      var found = false;
      for (r = 0; r < player1v1Requests.length; r++) {
        var req = player1v1Requests[r];
        if (req.id == aBut.reqID) {
          found = true;
          break;
        }
      }

   activeRequest = false;

      if (!activeRequest || isInArena) {
        var tmp = _gameMode.interfaceButtons.indexOf(aBut);
        if (-1 != tmp) {
          _gameMode.interfaceButtons.splice(tmp, 1);
        }
      }
    }
  }
}


function create1v1RequestButton(req, label) {
  var hasFound = false;
  for (i = 0; i < _gameMode.interfaceButtons.length; i++) {
    btn = _gameMode.interfaceButtons[i];
    if (btn.reqID == req.id && btn.label == label) {
      hasFound = true;
      return btn;
    }
  }

  if (hasFound) return;

  var btn = new InterfaceButton(0, 0, 80, 40, label, 20);
  btn.reqID = req.id;
  btn.reqAction = btn.onClick = function() {
    this.isHighLighted = false;
    var actionType = 0;
    switch (this.label) {
      case "Accept":
        actionType = 1;
        break;
      case "Reject":
        actionType = 0;
        break;
      
    }
    var mes = new MsgWriter(3);
    mes.writeUInt8(53); // Msg_1v1Mode_RequestAction;
    mes.writeUInt8(actionType); //1=accept, 0=reject,2=ignore
    //mes.writeUInt8(this.reqID);
    wsSendMsg(mes);
        player1v1Requests = []
	  this.removeExpiredRequestButtons()
  };
  btn.onInterfaceReset = function() {
    this.isVisible = true;
  };

  btn.isVisible = true;
  _gameMode.interfaceButtons.push(btn);

  return btn;
}


var topperInfoX = 10 * pixelRat;
var topperInfoY = 15 * pixelRat;
var top1v1_isHistoric = false;
var top1v1_wins = "";
var top1v1_name = "";
var topperInfoTxt = null;
var top1v1_since = "";
function buildTopperInfo() {
  var name = "" + top1v1_name;
  if (name.lenght == 0) name = "mope2.io/1v1";

  var gameType = "";
  var achievType = "";

  gameType = "1v1";
  achievType = "WINS";
  var txt =
    (top1v1_isHistoric ? " ALL TIME " : "") +
    gameType +
    " Pro: " +
    name +
    " (" +
    achievType +
    ": " +
    top1v1_wins +
    ") "
  if (null == topperInfoTxt) {
    topperInfoTxt = new CachedText(20, "#FFFFFF"); //"#043400");
    topperInfoTxt.strokeW = 2;
    topperInfoTxt.multiLine = true;
    topperInfoTxt.renderScale = 2.0; //render larger to undo 'zoom of 3x'
    topperInfoTxt.setText(txt);
    topperInfoTxt.setPos = function(nw, nx) {
      this.x += nw / 2;
    };
  } else {
    topperInfoTxt.setFontSize(20);
    topperInfoTxt.setText(txt);
    topperInfoTxt.setPos = function(nw, nx) {
      this.x += nw / 2;
    };
  }
}

function display1v1TopperInfo() {
  if (topperInfoTxt != null) {
    topperInfoTxt.x = topperInfoX;
    topperInfoTxt.y = topperInfoY;
    topperInfoTxt.draw();
  }
}


///////
// file: js_src/client/masterServerClient.js
///////

//client interface for talking with the master server
var gotMasterServerStats = false;

let KMasterServMsg_serverPlayerCounts = 100;
let KMasterServMsg_bestBrServer = 101;

//update client player coutns from server
function masterServer_getServerStats() {
  masterServer_ConnectWithRequestType(KMasterServMsg_serverPlayerCounts);
}

//get best BR server, then calls callback func
var callback_masterServer_getBestBRServer = null; //arguments (bestServerIP string, noServerFound boolean)

function masterServer_getBestBRServer(callBackFunc) {
  callback_masterServer_getBestBRServer = callBackFunc; //returns result on success
  console.log("Getting best br server...");
  masterServer_ConnectWithRequestType(KMasterServMsg_bestBrServer);
}

//connects to the master server, will recieve a reply based on the requested data
function masterServer_ConnectWithRequestType(msgType) {
  var wsProtocol = window.location.protocol === "https:" ? "wss://" : "ws://";
  var wsPort = wsProtocol == "ws://" ? 80 : 80;
  var masterServerIP = "minimaptest-qwplh.run-eu-central1.goorm.io"; //"0.0.0.0";//"master1.mope.io";
  var conUrl = wsProtocol + masterServerIP + ":" + wsPort;
  console.log("Master server: connecting " + conUrl + "...");
  //console.log("Protocol is " + wsProtocol + ", window protocol is " + window.location.protocol);
  var masterWs = new WebSocket(conUrl);
  masterWs.binaryType = "arraybuffer";
  masterWs.onopen = function() {
    console.log("MasterServer: Connected!");

    //authenticate as client, with correct data request
    var authmsg = new MsgWriter(1);
    var masterServerRequestType = 1; //1- get stats, 2- get best BR server
    authmsg.writeUInt8(msgType);
    //send msg
    masterWs.send(authmsg.dataView.buffer);
  };
  masterWs.onmessage = function(msg) {
    //handle message
    var msg = new MsgReader(new DataView(msg.data));
    var msgType = msg.readUInt8();
    //console.log("MasterServer: Msg of type "+msgType);

    switch (msgType) {
      case KMasterServMsg_serverPlayerCounts:
        masterServer_gotReponse_getServerStats(msg);
        break;
      case KMasterServMsg_bestBrServer:
        masterServer_gotRespose_getBestBRServer(msg);
        break;

      default:
        console.log("Unknown master server msg type " + msgType);
        break;
    }
  };
  masterWs.onerror = function(err) {
    console.log("MasterServer: error connecting!");
  };
  masterWs.onclose = function(evt) {
    //console.log("Disconnected from master server!");
  };
}
function masterServer_gotReponse_getServerStats(msg) {
  gotMasterServerStats = true;
  //read players online # for each 'connected' server
  var nPlayers = msg.readUInt32();
  console.log(
    "MasterServer got server stats! " + nPlayers + " total players online!"
  );
  playersOnlTXT.setText(numberWithCommas(nPlayers) + " players");

  var numServers = msg.readUInt16();
  console.log("MasterServer: " + numServers + " servers online!");
  for (var i = 0; i < numServers; i++) {
    var aServIp = num2dotIP(msg.readUInt32());
    var aServNumPl = msg.readUInt16();
    var gameMode = msg.readUInt8();
    var BR_waitingForPlayers = msg.readUInt8();
    console.log(aServIp,aServNumPl,gameMode);
    //console.log("info for server "+aServIp);

    //find matching gameServer info-obj in list
    var matchF = false;
    for (var j = 0; j < gameServersList.length; j++) {
      /*var clientServerIP =
        gameServersList[j].name == "LOCAL"
          ? "110.93.246.138"
          : gameServersList[j].ip;*/

      if (gameServersList[j].ip == aServIp) {
        var theServ = gameServersList[j];
        if (aServNumPl == 60000){
          // 60000 players recieved = offline server
          theServ.playersCount = -1;

        }else
        theServ.playersCount = aServNumPl;

        theServ.gameMode = gameMode;
        //console.log("--matched server " + theServ.ip + " gameMode " + gameMode + " "+theServ.playersCount+ "players ");
        theServ.BR_waitingForPlayers = BR_waitingForPlayers;

        matchF = true;
        //console.log("Match found for server");
        //console.log(aServNumPl + " in server " + gameServersList[j].name);
        break;
      }
    }
    //if (!matchF)
    // console.log(" No matching server def for ip " + aServIp);
  }

  updateRegionsList();
  updateServersList(); //update options shown
  updateGmModeButtons();
}

function masterServer_gotRespose_getBestBRServer(msg) {
  var bestIPEnc = msg.readUInt32();
  var noValidServer = bestIPEnc == 0;
  var bestBRServerIP = num2dotIP(bestIPEnc);

  //IP can be 0!
  console.log("Got new BEST BR server! " + bestBRServerIP);

  //call callback func
  if (callback_masterServer_getBestBRServer != null)
    callback_masterServer_getBestBRServer(bestBRServerIP, noValidServer);
}

masterServer_getServerStats();

//masterServer_getBestBRServer();


///////
// file: js_src/client/gameServer.js
///////

//servers in list
var gameServersList = [];
var gameRegions = [];
var gameServersByRegion = {};

var gameRegionsNoPingTest = [ "Team Mode" ,"Wild Mope"]; //these regions DONT get included in auto join (eg, game modes)

function addRegionDef(regName) {
  gameRegions.push(regName);
  gameServersByRegion[regName] = []; //set empty array for each region key
}
//for (var i = 0; i < gameRegions.length; i++)
//addRegionDef(gameRegions[i]);

GameServer.prototype = {
  name: "Server",

  ip: "0.0.0.0",
  serverConnURL: "0.0.0.0", //url to connect to (needed for wss to work!)
  region: "",
  playersCount: -2,
  gameMode: 0,
  BR_waitingForPlayers: false,
  ping: 10000,
  domOptionIndex: 0, //what index is this server in the option dom

  getServerListString: function() {
    var brWaitingStr = "";
    if (this.gameMode == 2)
      brWaitingStr = this.BR_waitingForPlayers
        ? " -STARTING NEW GAME"
        : " -GAME IN PROGRESS";
    var plStr = this.playersCount < 0 ? "..." : this.playersCount;

    var theStr =
      this.name +
      " [" +
      plStr +
      " players " +
      (this.playersCount >= numFULLServerPlayers ? "-FULL!" : "") +
      "]" +
      brWaitingStr;
    return theStr;
  }
};
function GameServer(nm, ip, theReg,port) {
  this.name = nm;
  this.ip = ip;
  this.port = port
  this.serverConnURL = ip;
  this.region = theReg;
}




function addServerDef(nm, ip, theReg,port) {
  var newDef = new GameServer(nm, ip, theReg,port);
  //auto-change IP to URL (for ssl wildcard certificate to work)
  //if (!KTestingModeON && !isNaN(parseInt((newDef.ip).substring(0, 1), 10)))
  //    newDef.serverConnURL = "gameserv-" + ((newDef.ip + "").replace(/\./g, '-')) + ".mope.io";

  gameServersList.push(newDef);
  if (!(theReg in gameServersByRegion)) addRegionDef(theReg);

  gameServersByRegion[theReg].push(newDef); //add
  // else
  //   console.log("Region doesn't exist: " + theReg);
  return newDef;
}

/*function addServerWithPortDef(nm, ip, port, theReg) {
 var newDef = {
   name: nm,
   ip: ip,
   serverConnURL: ip, //url to connect to (needed for wss to work!)
   serverPort: port,
   region: theReg,
   playersCount: -1,
   ping: 10000,
   domOptionIndex: 0 //what index is this server in the option dom
 };
 //auto-change IP to URL (for ssl wildcard certificate to work)
 //if (!KTestingModeON && !isNaN(parseInt((newDef.ip).substring(0, 1), 10)))
 //    newDef.serverConnURL = "gameserv-" + ((newDef.ip + "").replace(/\./g, '-')) + ".mope.io";

 log(
   "region: " +
   theReg +
   " => " +
   newDef.serverConnURL +
   ":" +
   newDef.serverPort
 );t
 gameServersList.push(newDef);
 gameServersByRegion[theReg].push(newDef); //add
 return newDef;
}*/

if (KTestingModeON) {

    //5a11-24-49-53-140.ngrok-free.app

    reg = "SEVERS";
  

  //if(ACTIVATEOURGAMEMODE){
    //addServerDef("FFA", "ahmetcan-channel-1.paiza-user-free.cloud/", reg,"80")
                         //}else{
    //addServerDef("LOCALHOST", "127.0.0.1", reg,"80"); 
        if (localhoster != null) {
addServerDef("LOCALHOST", localhoster, reg,"80"); 
        } else {
		    if (testServer == null) {
addServerDef("FFA", "walrus-heroic-baboon.ngrok-free.app/?ModeActivate=true", reg,"80"); 
		    }
//addServerDef("EU", "4304-24-49-53-140.ngrok-free.app/?ModeActivate=true", reg,"80");
        }
//addServerDef("EU", "541b-24-49-53-140.ngrok-free.app/?ModeActivate=true", reg,"80"); 
//addServerDef("AS", "5416-24-49-53-140.ngrok-free.app/?ModeActivate=true", reg,"80"); 
    if (testServer != null) {
addServerDef("BETATEST", testServer + "/?ModeActivate=true", reg,"80");    
    }
        
    
//addServerDef("FFA", "35.246.216.142", reg,"80"); 

//reg = "FFA";
 //  addServerDef("FFA", "146.148.81.224", reg);
  //   reg = "Team Mode";
  //  addServerDef("Team Mode 1", "144.202.60.26", reg);
  //  addServerDef("Team Mode 2", "149.28.48.20", reg);
  //  reg = "Battle Royale";
  //  addServerDef("Battle Royale 1", "144.202.12.79", reg);
  //  addServerDef("Battle Royale 2", "144.202.56.145", reg);
  //  addServerDef("Battle Royale 3", "144.202.117.100", reg);

  //addServerDef("LOCAL", "0.0.0.0", reg); //linode_mopeio

  //addServerDef("TESTSERVER", "testserver.mope.io", reg); //"0.0.0.0"
  //addServerDef("LOCAL TEST", "45.76.2.164", reg);

  // reg = "Team Mode";
  // //  //addServerDef("LCOAL", "127.0.0.1", reg); // "0.0.0.0", reg); //"0.0.0.0"
  // addServerDef("TEAM MODE 1", "8.12.17.70", reg);
  // addServerDef("TEAM MODE 2", "209.246.143.231", reg);
  // addServerDef("TEAM MODE 3", "149.28.229.26", reg);
  // addServerDef("TEAM MODE 4", "108.61.158.209", reg);
  // addServerDef("TEAM MODE 5", "149.28.37.161", reg);

  // reg = "Battle Royale Mode";
  // //  //addServerDef("LCOAL", "127.0.0.1", reg); // "0.0.0.0", reg); //"0.0.0.0"
  // addServerDef("Battle Royale 1", "104.238.159.157", reg);
  // addServerDef("Battle Royale 2", "140.82.37.229", reg);
  // addServerDef("Battle Royale 3", "95.179.169.179", reg);
  // addServerDef("Battle Royale 4", "104.207.131.51", reg);
  // addServerDef("Battle Royale 5", "80.240.28.111", reg);

  //  addServerDef("Battle Royal 2", "173.199.118.126", reg);
  //  addServerDef("Battle Royal 3", "8.9.6.115", reg);
  //addServerWithPortDef("Battle Royal 22", "127.0.0.1", 7022, reg); // "0.0.0.0", reg); //"0.0.0.0"
                        // }
} else {
  if (KTestingBetaMode) {



    var reg = "Wild Mope";
    addServerDef("Wild Mope 1", "144.202.12.79", reg); 
    addServerDef("Wild Mope 2", "144.202.56.145", reg);

    var reg = "Team Mode";
    addServerDef("Team Mode 1", "144.202.60.26", reg);
    addServerDef("Team Mode 2", "149.28.48.20", reg);

    var reg = "Normal";
    addServerDef("FFA", "45.76.11.35", reg);

  } else {
    // USA @@@@@@@@@@@@
    var reg = "USA-East";

    addServerDef("USA 1", "149.28.118.240", reg); //linode_mopeio
    addServerDef("USA 2", "45.76.31.141", reg);
    addServerDef("USA 3", "207.148.10.110", reg);
    addServerDef("USA 4", "149.28.116.164", reg);
    addServerDef("USA 5", "207.148.15.67", reg);
    addServerDef("USA 6", "149.28.112.152", reg);
    addServerDef("USA 7", "149.28.116.61", reg);
    addServerDef("USA 8", "149.28.120.151", reg);
    addServerDef("USA 9", "149.28.123.198", reg);
    addServerDef("USA 10", "45.76.17.180", reg);

    reg = "USA-West";
    addServerDef("USA W 1", "45.63.87.103", reg);
    addServerDef("USA W 2", "45.32.137.149", reg);
    addServerDef("USA W 3", "45.76.67.64", reg);
    addServerDef("USA W 4", "45.63.51.60", reg);
    addServerDef("USA W 5", "45.32.228.141", reg);
    addServerDef("USA W 6", "104.207.158.226", reg);

    //BRAZIL @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    reg = "Brazil/ USA-South";
    addServerDef("USA S 1", "108.61.224.165", reg);
    addServerDef("USA S 2", "107.191.55.233", reg);
    addServerDef("USA S 3", "45.32.198.173", reg);
    addServerDef("USA S 4", "104.238.147.152", reg);


    //EUROPE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    reg = "Europe"; //first server must be LONDON (+ 4core!)

    addServerDef("Europe 1", "45.77.88.81", reg);
    addServerDef("Europe 2", "104.238.170.8", reg);
    addServerDef("Europe 3", "45.76.129.33", reg);
    addServerDef("Europe 4", "45.76.134.74", reg);
    addServerDef("Europe 5", "45.76.135.33", reg);
    addServerDef("Europe 6", "45.76.129.125", reg);

    reg = "Russia";
    addServerDef("Russia 1", "45.32.152.68", reg);
    addServerDef("Russia 2", "45.32.156.214", reg);
    addServerDef("Russia 3", "45.32.154.83", reg);
    addServerDef("Russia 4", "104.238.159.143", reg);
    addServerDef("Russia 5", "45.32.144.28", reg);
    addServerDef("Russia 6", "185.92.221.137", reg);

    //  ASIA   @@@@@@@@@@@@@@
    reg = "Asia/Australia";
    addServerDef("Asia 1", "45.63.28.66", reg);
    addServerDef("Asia 2", "45.76.112.176", reg);
    addServerDef("Asia 3", "45.32.101.8", reg);

    reg = "Wild Mope";
    //  //addServerDef("LCOAL", "127.0.0.1", reg); // "0.0.0.0", reg); //"0.0.0.0"
    addServerDef("Wild Mope 1", "104.238.159.157", reg);
    addServerDef("Wild Mope 2", "140.82.37.229", reg);
    addServerDef("Wild Mope 3", "95.179.169.179", reg);
    addServerDef("Wild Mope 4", "104.207.131.51", reg);
    addServerDef("Wild Mope 5", "80.240.28.111", reg);


    reg = "Team Mode";
    //  //addServerDef("LCOAL", "127.0.0.1", reg); // "0.0.0.0", reg); //"0.0.0.0"
    addServerDef("TEAM MODE 1", "8.12.17.70", reg);
    addServerDef("TEAM MODE 2", "209.246.143.231", reg);
    addServerDef("TEAM MODE 3", "108.61.205.88", reg);



  }
}


var numNotIdealServer = 2; //x servers from BOTTOM

//check for server name in link

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ SERVER PING AUTO-SELECT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//ping one server from each region
var RegionPingTester = function(serverObj) {
  this.serverObj = serverObj;

  var wsProtocol = window.location.protocol === "https:" ? "wss://" : "ws://";
  var wsPort = 7020;
  var conUrl = wsProtocol + this.serverObj.serverConnURL + ":" + wsPort;
  // if (KTestingBetaMode) conUrl = wsProtocol + this.serverObj.serverConnURL + ":" + this.serverObj.serverPort;

  this.testWs = new WebSocket(conUrl); //connect, but measure time to connect?
  this.startT = +new Date();
  this.testWs.binaryType = "arraybuffer";
  //console.log("pingtest: Connecting to " + this.serverObj.name + "...");
  var that = this;
  this.pingsRec = 0;
  this.pingsDelayMsTot = 0;

  this.testWs.onopen = function() {
    //console.log("connected to ping server "+conUrl);
    that.sendPing();
  };
  this.sendPing = function() {
    //send ping
    var authmsg = new MsgWriter(1);
    authmsg.writeUInt8(255);
    that.testWs.send(authmsg.dataView.buffer);
    this.startT = +new Date(); //start timing message
  };
  this.testWs.onmessage = function(msg) {
    //handle message
    var msg = new MsgReader(new DataView(msg.data));
    //console.log("got msg");
    if (msg.readUInt8() == 255) {
      var connectPingMs = +new Date() - that.startT;
      that.pingsRec += 1;
      that.pingsDelayMsTot += connectPingMs;
      //console.log("pingtest: Got PING from " + that.serverObj.name + " after " + connectPingMs + "ms ");

      if (that.pingsRec >= 3) {
        //got final ping for this server!
        that.serverObj.ping = that.pingsDelayMsTot / that.pingsRec;

        console.log(
          "pingtest: Final PING " +
            that.serverObj.ping +
            " from " +
            that.serverObj.name
        );
        that.testWs.close();
        aRegPingTestFinished(that);
      } else {
        that.sendPing(); //send next ping
      }
    }
  };
  this.testWs.onerror = function(err) {
    console.log("TestWS: error connecting! " + err);
  };
  this.testWs.onclose = function(evt) {
    console.log("TestWS: disconnected");
    //console.log("Disconnected from master server!");
  };
};

//pick random server by default
var curRegion = KTestingModeON
  ? gameRegions[0]
  : gameRegions[getRandomInt(0, Math.max(0, gameRegions.length - 1 - 1))]; //pick a random region (for those who fail ping test) (except asia, LAST ONE)
var curServerIndex = 0; //
var curServer = gameServersByRegion[curRegion][curServerIndex];
var curRegion = curServer.region;

//find server with lowest ping, connect to a server there
var lowestPingRegServer = curServer; //this server will be used if none work (make it random)
//var bestRegion = lowestPingRegServer.region;
var pingTestCons = [];

var pingTestOnGoing = false;
var pingTestDoneOnce = false; //only test ping once
var slowTimeout;

function regionNotPingTested(theReg) {
  for (var h = 0; h <= gameRegionsNoPingTest.length; h++) {
    if (gameRegionsNoPingTest[h] == theReg) return true;
  }
  return false;
}

function findAndConnectToNearestServer() {
  //if already tested ping, just use the result!
  if (pingTestDoneOnce) {
    quickestConnectRegionFound();
    return;
  }

  if (pingTestOnGoing) return;

  pingTestOnGoing = true;
  for (var aRegion in gameServersByRegion) {
    if (
      gameServersByRegion.hasOwnProperty(aRegion) &&
      gameServersByRegion[aRegion].length > 0 &&
      !regionNotPingTested(aRegion)
    ) {
      var mainServer = gameServersByRegion[aRegion][0]; //pick first one as main
      //console.log("Pinging Region "+aRegion+" with server "+mainServer.name+")........");
      pingTestCons.push(new RegionPingTester(mainServer));
    }
  }

  slowTimeout = setTimeout(function() {
    //end ping test early (slower ones are likely too slow anyways)
    //console.log("pingtest: too long passed, ending early");
    //close all remaining test connections
    for (var i = 0; i < pingTestCons.length; i++) {
      pingTestCons[i].testWs.close();
    }
    quickestConnectRegionFound();
  }, 1200);
}

//a region finished getting ping
function aRegPingTestFinished(aTest) {
  if (aTest.serverObj.ping < lowestPingRegServer.ping) {
    lowestPingRegServer = aTest.serverObj;
  }
  //remove from conn list, check if all are done
  var tmp = pingTestCons.indexOf(aTest);
  if (-1 != tmp) {
    pingTestCons.splice(tmp, 1);
  }
  if (pingTestCons.length == 0) {
    //test done!
    //console.log("pingtest: all finished");
    if (slowTimeout) clearTimeout(slowTimeout);
    quickestConnectRegionFound();
  }
}

function quickestConnectRegionFound() {
  if (pingTestOnGoing) {
    pingTestDoneOnce = true;
  }
  pingTestOnGoing = false;

  console.log(
    "@@@@  Fastest region is " +
      lowestPingRegServer.region +
      " with ping " +
      lowestPingRegServer.ping +
      "ms "
  );
  curRegion = lowestPingRegServer.region; //set region to fastest one
  //update region/servers list

  //connect to server!
  joinBestServerInRegion();
}

//picks best gameServer for the current region
var numIdealServerPlayers = 400.0; //dont let servers overfill to second room
var numFULLServerPlayers = 500.0; //dont let servers overfill to second room

function joinBestServerInRegion() {
  console.log("Joining best server...");
  console.log(
    "region " + curRegion + " servsInReg " + gameServersByRegion[curRegion]
  );
  var serversInReg = gameServersByRegion[curRegion].slice(); //copies array
  //sort by number of players
  function compare(a, b) {
    if (a.playersCount < b.playersCount) return 1;
    if (a.playersCount > b.playersCount) return -1;
    return 0;
  }
  serversInReg.sort(compare);

  //pick most-popular server that's NOT overfilled in your region
  var found = false;
  var allServersInRegionFull = true;

  for (var i = 0; i < serversInReg.length; i++) {
    var aServ = serversInReg[i];
    //console.log("-checking server "+aServ.name+" players "+aServ.playersCount);
    if (aServ.playersCount < numFULLServerPlayers && aServ.playersCount >= 0)
      //also check if all servers are FULLY full
      allServersInRegionFull = false;

    if (
      aServ.playersCount < numIdealServerPlayers &&
      aServ.playersCount >= 0
    ) {
      //fill servers to X players
      curServer = aServ;
      curServerIndex = gameServersByRegion[curRegion].indexOf(curServer); //serversInReg is not the same array!
      found = true;
      break;
    }
  }

  if (!found) {
    //if all servers in region over ideal #, spread players across all servers evenly
    if (!allServersInRegionFull || !gotMasterServerStats) {
      //random server in region
      curServer = serversInReg[getRandomInt(0, serversInReg.length - 1)];
      curServerIndex = serversInReg.indexOf(curServer);
    } else {
      //all regions are full/no player count available- pick ANY non-full server across ALL regions
      if (!gotMasterServerStats)
        console.log(
          "Error loading server player counts from master server! Picking random server..."
        );
      else
        console.log(
          "All servers in region " +
            curRegion +
            " are full/offline! Picking random server..."
        );
      var allServersInRegionFull = true;
      for (var i = 0; i < gameServersList.length; i++) {
        if (gameServersList[i].playersCount < numFULLServerPlayers) {
          curServer = gameServersList[i];
          curServerIndex = gameServersByRegion[curServer.region].indexOf(
            curServer
          );
          curRegion = curServer.region;
          break;
        }
      }
    }
  }

  console.log("Connecting to best server...");
  /*if (wsIsOpen()) {
     ws.close();
   }*/
  gameServerConnect(curServer);
}

var retryTimeout;
var connectFailsCount = 0;
var lastConnectServer = null;

function findGameServerObjForIP(serverIP) {
  for (var i = 0; i < gameServersList.length; i++) {
    var aServer = gameServersList[i];
    //console.log("a server " + aServer.ip);
    if (aServer.ip == serverIP) return aServer;
  }
  return null;
}

//connectes to a server with this IP (creates it in the list if it doesnt Exist)
function gameServerConnectForIP(serverIP, autoClickPlay = false) {
  console.log("connecting to server of IP: " + serverIP);
  //find if it exists
  var serverObj = findGameServerObjForIP(serverIP);
  //console.log("server for ip " + serverIP + " is " + findGameServerObjForIP(serverIP).name);

  /*//create server DEF if it doesnt exist?
  if(serverObj==null){

  }*/
  if (serverObj == null) {
    console.log("No client server DEF exists for server IP " + serverIP);
    addServerDef("Unknown server", serverIP, "Unknown servers");
  }

  gameServerConnect(serverObj, autoClickPlay);
}

//connect to current gameserver (newGameServer is def from gameServersList)
var autoClickPlayOnJoin = false;
function gameServerConnect(newGameServer, autoClickPlay = false) {
  autoClickPlayOnJoin = autoClickPlay; //server
  //just in case

  curServer = newGameServer;
  curRegion = newGameServer.region;
  curServerIndex = gameServersByRegion[newGameServer.region].indexOf(
    newGameServer
  );

  updateGmModeButtons();
  updateRegionsList();
  updateServersList();
  udpForServIndex();

  if (wsIsOpen()) {
    //close current ws
    theWs = ws;
    ws = null; //prevent reconnect
    theWs.close();
  }

  //after two failed connections, try connecting to another server!
  //console.log("con fails "+connectFailsCount);
  if (newGameServer == lastConnectServer) {
    if (connectFailsCount > 1) {
      console.log("too many fails, trying next server");
      //choose NEXT server
      curServerIndex += 1;
      if (curServerIndex > gameServersByRegion[curRegion].length - 1)
        curServerIndex = 0;
      curServer = gameServersList[curServerIndex];
      curRegion = curServer.region;
      udpForServIndex(); //update gui
    }
  } else {
    //new server, reset fails count
    //console.log("fails reset because new server");
    connectFailsCount = 0;
    lastConnectServer = newGameServer;
  }

  dcedFromAfk = false; //reset on connect

  document.getElementById("connecting").style.visibility = "visible";
 

  var wsProtocol = window.location.protocol === "https:" ? "wss://" : "ws://";
  var wsPort = wsProtocol == "wss://" ? 80: 80;

  var conUrl = wsProtocol + curServer.serverConnURL + ":" + curServer.port;

  /*
    if (KTestingBetaMode) {
        conUrl = wsProtocol + curServer.serverConnURL + ":" + curServer.serverPort;
    }
	*/
  console.log("Connecting to " + curServer.name + " (" + conUrl + ")...");
  ws = new WebSocket(conUrl); //Main server connection

  ws.binaryType = "arraybuffer";
  ws.onopen = function() {
    //console.log("socket connected!");
    connectFailsCount = 0;
    /*if (retryTimeout) {
            clearTimeout(retryTimeout);
            retryTimeout = null;
        }*/
 document.getElementById("onconnectDiv").style.visibility = "visible";
    document.getElementById("startMenu").style.visibility = "visible";
    document.getElementById("connecting").style.visibility = "hidden";

    
    
  };
  ws.onmessage = function(msg) {
    //console.log("socket message! " + msg.data);
    handleWsMessage(new DataView(msg.data));
  };
  ws.onclose = function(evt) {
    if (this == ws) {
      //active ws closed- retry soon!
      connectFailsCount += 1;
      serverConnected = false;
      serverCon_aliveInAGame = false;
      serverCon_spectatingInAGame = false;
      //console.log("Current socket closed- retrying soon...");
      if (!dcedFromAfk) {
        retryTimeout = setTimeout(function() {
          //console.log("Timeout hit, trying!!!!");
          gameServerConnect(newGameServer);
        }, 2000);
        //show connecting label
              document.getElementById("startMenu").style.visibility = "hidden";
       document.getElementById("onconnectDiv").style.visibility = "hidden";
        document.getElementById("connecting").style.visibility = "visible";
      } else {
        //dced, show dom?
      }
    } else {
      //old ws closed, ignore
      //, ignore, ignore
      //console.onsole.log("OLD socket closed.");
    }
  };
  ws.onerror = function() {
    console.log("socket error!");
  };
}

//@@@@@@@@@@@@@@@@@@@@  CONNECT TO GAME SERVER @@@@@@@@@@@@@@@@@@@@@@@@@

//find URL server in list
findAndConnectToNearestServer();

//try to connect to master server, grab stats

//user selected new server
document.getElementById("serverSelect").onchange = onServerChanged;

function onServerChanged() {
  var e = document.getElementById("serverSelect");
  curServerIndex = e.selectedIndex - 1;
  console.log(gameServersByRegion);
  curServer = gameServersByRegion[curRegion][curServerIndex];
  udpForServIndex();

  console.log("Server changed to " + curServer.name + "...");
  if (wsIsOpen()) {
    ws.close();
  }

  //hide label
  var xpLab = document.getElementById("spawnXpLabel");
  xpLab.style.opacity = 0;

  partyLinkIP = null;
  partyLinkKey = null;

  gameServerConnect(curServer);
  //connect AFTER close
}

document.getElementById("regionSelect").onchange = onRegionChanged;

function onRegionChanged() {
  console.log("Region changed...");
  var e = document.getElementById("regionSelect");
  var curRegIndex = e.selectedIndex - 1;
  curRegion = gameRegions[curRegIndex];

  console.log(curRegion);
  //udpForServIndex();

  if (wsIsOpen()) {
    ws.close();
  }

  //hide label
  var xpLab = document.getElementById("spawnXpLabel");
  xpLab.style.opacity = 0;

  joinBestServerInRegion();
  //gameServerConnect(curServer);
  //connect AFTER close
}
//set index of selected server
function udpForServIndex() {
  //save last used server
  /*if (window.localStorage) {
       try {
           window.localStorage.setItem("lastServerIP", curServer.ip);
       } catch (err) {} //no localStorage
       //console.log("Last used server is NOW " + localStorage.getItem("lastServerIP"));
   }*/
  //update gui selected index
  var e = document.getElementById("serverSelect");
  e.selectedIndex = curServerIndex + 1;
}

//server list got  updated
function updateServersList() {
  //clear current options
  var selNode = document.getElementById("serverSelect");
  while (selNode.lastChild) {
    selNode.removeChild(selNode.lastChild);
  }
  //add title
  var newOp = document.createElement("option");
  newOp.text = "Choose a server:";
  newOp.disabled = true;
  selNode.add(newOp);
  //newOp<option selected disabled>Choose one</option>

  //add new ones
  var foundIndex = -1;
  var serversInReg = gameServersByRegion[curRegion];
  for (var i = 0; i < serversInReg.length; i++) {
    var aServ = serversInReg[i];
    var newOp = document.createElement("option");

    newOp.text = aServ.getServerListString();

    if (aServ.ip == curServer.ip) {
      //effectively the same server
      foundIndex = i;
    }
    selNode.add(newOp);
  }
  if (foundIndex == -1)
    //if current server no longer in list
    foundIndex = 0;
  selNode.selectedIndex = foundIndex + 1; //0;
}

function updateRegionsList() {
  //clear current options
  var selNode = document.getElementById("regionSelect");
  while (selNode.lastChild) {
    selNode.removeChild(selNode.lastChild);
  }
  //add title
  var newOp = document.createElement("option");
  newOp.text = "Choose a region:";
  newOp.disabled = true;
  selNode.add(newOp);

  //add new ones
  var foundIndex = -1;
  for (var i = 0; i < gameRegions.length; i++) {
    //find total players in region (add up servers in it)
    var aReg = gameRegions[i];
    var serversInReg = gameServersByRegion[aReg];
    var numPl = 0;
    for (var j = 0; j < serversInReg.length; j++) {
      numPl +=
        serversInReg[j].playersCount >= 0 ? serversInReg[j].playersCount : 0;
    }

    var newOp = document.createElement("option");
    newOp.text = aReg + " [" + numPl + " players ]";

    if (aReg == curRegion) {
      //set current region
      foundIndex = i;
    }
    selNode.add(newOp);
  }
  if (foundIndex == -1)
    //if cant find cur region
    foundIndex = 0;
  selNode.selectedIndex = foundIndex + 1; //0;
}

/*//network debugging
var bytesLastSec=0;
window.setInterval(function(){
 /// call your function here
 console.log("Current packet rate Kb/s "+bytesLastSec*8/1000.0);
 bytesLastSec=0;
}, 1000);
*/

//connected to a game server, joined as a spectator
function onConnectedAndJoinedGameServer() {
  //joining the game makes this a successful server connection!
  serverConnected = true;
  //first time server connected!
  if (!serverFirstConnected) {
    document.getElementById("onconnectDiv").style.visibility = "visible";
  }
  serverFirstConnected = true; //doesnt change after first connect
  setSiteMenuVisible(true);

  if (autoClickPlayOnJoin) playPressed(); //press play to join server

  updateGmModeButtons();
}

//connected to a game server (not joined a room yet)
function onConnectedToGameServer() {
  //update URL to show ?server= ...
  /*if (!isMobileApp) {
       var serverName = ((curServer.name).replace(/\W/g, '')).toUpperCase(); //remove non-alphanum
       var newURL_noParams = window.location.href.split('?')[0]; //URL without params
       //console.log("URL is "+location.protocol + '//' + location.host + location.pathname);
       window.history.replaceState({ foo: "foo" }, "mope.io (" + serverName + ")", newURL_noParams + "?server=" + serverName);
   }*/

  //show INTERFACE
  setSiteMenuVisible(true);

  joinGame(true); //spectator
}

function gmModeButtonClicked(whichButtonID) {
  //play sound (if not muted)
  var sound_click = getLazyLoadAudio("audio/click.mp3");
  if (sound_click) {
    try {
      sound_click.play();
    } catch (err) {}
  }

  if (whichButtonID == "gmButton_FFA") {
    //switch to FFA
    findAndConnectToNearestServer();
  } else if (whichButtonID == "gmButton_TEAMS") {
    //find server in teams to join
    curRegion = "Team Mode";
    joinBestServerInRegion();
  }  else if (whichButtonID == "gmButton_WILD") {
    //find server in teams to join
    curRegion = "Wild Mope";
    joinBestServerInRegion();
  }

  updateGmModeButtons();
}

function updateGmModeButtons() {
 /* var theDom = document.getElementById("gmButton_FFA");
  if (gameMode == 0) {
  //  theDom.style.opacity = 0.5;
  } else theDom.style.opacity = 1.0;

  var theDom = document.getElementById("gmButton_TEAMS");
  if (gameMode == 3) {
    theDom.style.opacity = 0.5;
  } else theDom.style.opacity = 1.0;

  var theDom = document.getElementById("gmButton_WILD");
  if (gameMode == 4) {
    theDom.style.opacity = 0.5;
  } else theDom.style.opacity = 1.0;*/

}




///////
// file: js_src/interface/PlusXpPopup.js
///////


function PlusXPPopup(xpAm){
    this.animStep=1;
    this.animStartT=timestamp;
    this.animDur=3000;
    this.timedOut=false;

    //allow nice turning animation
    this.xShift=getRandomDouble(-10,10);
    this.yShift=getRandomDouble(-10,10);
    this.anlgeShift = getRandomDouble(-10, 10);

    this.text = new CachedText(16.0, "white");
    this.text.setText((xpAm>=0?"+ ":"") + abbreviate_number(xpAm) + " XP");
    //set special params for higher xp amounts
    this.textFontSz = 30;
    var xpCol = "white";
    if (xpAm > 10000) {
      xpCol = "#c7b753"; // yellow 10K+
      this.textFontSz = 40;
      this.animDur += 1000;
    }
    if (xpAm > 100000) {
      xpCol = "#fdca5b"; //yellow 100K+
      this.textFontSz = 45;
      this.animDur += 2000;
    }
    if (xpAm > 1000000) {
      xpCol = "#c7b753"; //yellow 1M+
      this.textFontSz = 51;
      this.animDur += 2000;
    }

    if (xpAm < 0) {
      xpCol = "#c65f59"; //red -ve
      this.animDur += 2000;
    }
    this.text.setColor(xpCol);

    //console.log("popup + "+abbreviate_number(xpAm)+" XP");

//call draw manually
    this.draw=function(){
      if(options_noXpPopup)
      return;

      var anim0_1=clamp( (timestamp-this.animStartT)/(this.animDur) , 0,1);

      ctx.save();

      var posX=(canvasW / 2);
      var posY=(canvasH - 85 * interfS) + anim0_1 * (-150*interfS);

      ctx.translate(posX,posY);

      //animate the text


      ctx.rotate( toRadians( this.anlgeShift * anim0_1 ));
      //ctx.translate(this.xShift,this.yShift);
      ctx.globalAlpha=1.0-anim0_1;

      this.text.setFontSize(this.textFontSz * interfS);
      this.text.x= 0;
      this.text.y= 0;
      this.text.draw();
      //console.log("drawing pop!" +anim0_1);

      ctx.restore();

      if(timestamp>=this.animStartT + this.animDur)
        this.timedOut=true;
    }
}


///////
// file: js_src/interface/TextPopup.js
///////




function TextPopup(text, fontSize, color, dur) {
    this.animStep = 1;
    this.animStartT = timestamp;
    this.timedOut = false;
    //allow nice turning animation
    this.xShift = getRandomDouble(-10, 10);
    this.yShift = getRandomDouble(-10, 10);
    this.anlgeShift = getRandomDouble(-10, 10);
    this.text = new CachedText(fontSize, color);
    this.text.setText(text);
    //set special params for higher xp amounts
    this.textFontSz = fontSize;
    this.animDur = dur;
    this.text.setColor(color);

    //console.log("popup + "+abbreviate_number(xpAm)+" XP");

    //call draw manually
    this.draw = function () {
        if (options_noXpPopup)
            return;

        var anim0_1 = clamp((timestamp - this.animStartT) / (this.animDur), 0, 1);

        ctx.save();

        var posX = (canvasW / 2);
        var posY = (canvasH - 85 * interfS) + anim0_1 * (-150 * interfS);

        ctx.translate(posX, posY);

        //animate the text


        // ctx.rotate( toRadians( this.anlgeShift * anim0_1 ));
        //ctx.translate(this.xShift,this.yShift);
        ctx.globalAlpha = 1.0 - anim0_1;

        this.text.setFontSize(this.textFontSz * interfS);
        this.text.x = 0;
        this.text.y = 0;
        this.text.draw();
        //console.log("drawing pop!" +anim0_1);

        ctx.restore();

        if (timestamp >= this.animStartT + this.animDur)
            this.timedOut = true;
    }
}



///////
// file: js_src/gameobj/GameObj.js
///////

//basic 'class' declaration (declare anything that will be thisClassed in PROTOTYPE!)
GameObj.prototype = {
  id: 0,
  oType: o_berry,
  spawnTime: 0,
  rPer: 0,
  updateTime: 0,
  x: 0,
  y: 0,
  ox: 0,
  oy: 0,
  nx: 0,
  ny: 0,
  rad: 0,
  oRad: 0,
  nRad: 0,
  //some objs have angles
  angle: 0,
  oAngle: 0,
  angleDelta: 0,
  moveUpdF: 0.0,
  z: 0,

  name: "",
  dead: false,
  type: 0, //type of animal/ type of abilityCircle
  curBiome: 0, //display outline based on biome
  //rect stuff
  isRectangle: false,
  rectW: 0,
  rectH: 0,
  specType: 0,
  spawnFromObj: 0,
  toString: function() {
    return "[GObj t=" + this.oType + " id=" + this.id + "]";
  }
};

//declare extra vars
GameObj.prototype.flag_hurt = false; //all objs can have hp
GameObj.prototype.hpPer = GameObj.prototype.hpPer_n = GameObj.prototype.hpBarA = 0.0;
GameObj.prototype.infectionPer = GameObj.prototype.infectionPer_n = GameObj.prototype.infectionBarA = 0.0;
GameObj.prototype.hpBarTimeoutT = 0;
GameObj.prototype.alwaysPlainOutline = false; //for display objs\

//stretches sideways and back
GameObj.prototype.doesDrawEffectScale = false;
GameObj.prototype.drawEffectScale_Slow = false;

// if an object has to be manually drawn by the interface then set this to true
GameObj.prototype.customInterfaceDraw = false;

// obj spawn with radius animation
// some objects dont need this animation so set this to false in their subclasses
GameObj.prototype.animateRadOnSpawn = true;
GameObj.prototype.drawImage = function (_0x5c79c3, _0x16e8d0, _0x45e376, _0x2482d0, _0x4b23e3, _0x43c8a8) {
    if (_0x43c8a8 !== undefined) ctx.rotate(_0x43c8a8);
    ctx.drawImage(_0x5c79c3, _0x16e8d0, _0x45e376, _0x2482d0, _0x4b23e3);
}
//subclassable
GameObj.prototype.customDraw = function(batchDrawOutline) {
  // switch(this.oType ) {
  //     case 20:
  //     case 21:
  //     case 22:
  //     case 40:
  //     case 1:
  //     case 7:
  //     case 4:
  //     case 24:
  //     case 3:
  //     case 8:
  //     case 36:
  //     case 5:
  //     case 52:
  //     case  53:
  //     case  54:
  //     case  49:
  //     case  38:
  //     break;
  //     default:
  //     console.log("this.oType: " + this.oType);
  // }
  switch (this.oType) {
       case o_hill:
      {
        switch (this.curBiome) {
          case biome_desert:
            //drawn as batch: (either draw outline or top part)
            if (batchDrawOutline)
              //1) first draw outline circle (only)
              drawCircle(0, 0, this.rad, col_outline_jungle);
            //2) draw top parts (that will combine)
            else drawCircle(0, 0, this.rad - 1.5, col_outline_jungle);

            break;
            
                      case biome_desert:
            //drawn as batch: (either draw outline or top part)
            if (batchDrawOutline)
              //1) first draw outline circle (only)
              drawCircle(0, 0, this.rad, col_outline_desert);
            //2) draw top parts (that will combine)
            else drawCircle(0, 0, this.rad - 1.5, col_desert_hill);

            break;
            
                                              case biome_coldocean:
            //drawn as batch: (either draw outline or top part)
            if (batchDrawOutline)
              //1) first draw outline circle (only)
              drawCircle(0, 0, this.rad, col_outline_cold_ocean);
            //2) draw top parts (that will combine)
            else drawCircle(0, 0, this.rad - 1.5, col_ocean_sand);

            break;
            
                                  case biome_reef:
                        if (batchDrawOutline)
              //1) first draw outline circle (only)
              drawCircle(0, 0, this.rad, this.getOutlineColor());
            //2) draw top parts (that will combine)
            else drawCircle(0, 0, this.rad - 1.5, col_reef_sand);
                 var theImg = getLoadedImg("img/coralhill/0.png");
                  if (theImg) {
                    ctx.save();
                    var rad = this.rad;
                  ctx.rotate(this.angle);
          ctx.drawImage(theImg, -rad, -rad * 1.4, 2 * rad, 700/500 * rad);
                    ctx.restore();
            
                    //console.log("drawing banana");
                  }

            break;
            
               /*       case biome_reef:
            //drawn as batch: (either draw outline or top part)
            if (batchDrawOutline)
              //1) first draw outline circle (only)
              drawCircle(0, 0, this.rad, this.getOutlineColor());
            //2) draw top parts (that will combine)
            else drawCircle(0, 0, this.rad - 1.5, col_reef_sand);
        //draw banana img
        var theImg = getLoadedImg(
          "img/coralhill/0.png"
        );
        if (theImg) {
          var rad = this.rad * .5;
                    ctx.save();
          ctx.rotate(toRadians(0));
          ctx.drawImage(theImg, -rad, -rad * 2.6, 2 * rad, 700/500 * rad);
          //console.log("drawing banana");
          ctx.restore();
          
                              ctx.save();
          ctx.rotate(toRadians(90));
          ctx.drawImage(theImg, -rad, -rad * 2.6, 2 * rad, 700/500 * rad);
          //console.log("drawing banana");
          ctx.restore();
          
                              ctx.save();
          ctx.rotate(toRadians(180));
          ctx.drawImage(theImg, -rad, -rad * 2.6, 2 * rad, 700/500 * rad);
          //console.log("drawing banana");
          ctx.restore();
          
                              ctx.save();
          ctx.rotate(toRadians(270));
          ctx.drawImage(theImg, -rad, -rad * 2.6, 2 * rad, 700/500 * rad);
          //console.log("drawing banana");
          ctx.restore();
          
        }
            break; */

          case biome_ocean:
            //drawn as batch: (either draw outline or top part)
            if (batchDrawOutline)
              //1) first draw outline circle (only)
              drawCircle(0, 0, this.rad, this.getOutlineColor());
            //2) draw top parts (that will combine)
            else drawCircle(0, 0, this.rad - 1.5, col_ocean_sand);

            break;
          case biome_arctic:
            //this.drawOutlinedCircle("", col_outline_land); //col_outline_land);
            if (batchDrawOutline)
              //1) first draw outline circle (only)
              drawCircle(0, 0, this.rad, "white");
            // this.getOutlineColor());
            else {
              //2) draw top parts (that will combine)
              drawCircle(0, 0, this.rad - 1.5, col_snowcolor); //"#1f893a");
              //
              /*var theImg = getLoadedImg("img/fir2.png");
                            if (theImg) {
                                var rad = this.rad*1.22;
                                //ctx.rotate(this.rPer * Math.PI * 2.0);
                                ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
                                //console.log("drawing banana");
                            }*/
            }

            break;

          case biome_land:
          default:
            if (batchDrawOutline)
              //1) first draw outline circle (only)
              drawCircle(0, 0, this.rad, this.getOutlineColor());
            else drawCircle("", col_outline_land); //col_outline_land);
            break;
        }
      }
      break;
      
      /* case o_lochnessbite:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.15 * oldA;
        //drawCircle(0, 0, this.rad, "#862A2A");

        ctx.globalAlpha = 1.0 * oldA;

        var theImg = getLoadedImg("skins/lochness/lochness-bite.png");

        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle);

          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //clip to sliwly show the claw
          //var rad=this.rad * 0.85;
          ctx.rotate(Math.PI);
          var imX = 0,
            imY = this.rad * 0.5;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );
   
        }
         ctx.restore(); 
      }
      break;*/
       case o_firerange:
      {
            bushBgCol = "";

                    switch (this.curBiome) {
          case biome_ocean:
            bushBgCol = "#786810";
            break;
          case biome_arctic:
            bushBgCol = "#CED0D0";
            break;
          default:
          case biome_land:
            bushBgCol = "#45D157";
            break;
        }
            //this.drawOutlinedCircle("",bushBgCol)
                    this.drawfireCircle("#FF7000");
                    e = .15;
                    i = .5 * (.8 - e);
                    e = e + i + i * Math.sin(2 * Math.PI / 1 * (timestamp / 1000));
                    ctx.save();
                    ctx.globalAlpha *= e;
      
      
             //       drawCircle(0, 0, Math.max(0, this.rad), "#FF6100");
                    ctx.restore();
                    e = .5;
                    i = .5 * (1 - e);
                    e = e + i + i * Math.sin(2 * Math.PI / 1 * (timestamp / 1000));
                    if (i = getLoadedImg(1 == Math.trunc(timestamp / 300) % 2 ? "img/fire.png" : "img/fire2.png")) s = .3 * this.rad, n = 2 * this.rad * (2 + 2 * e) / 3, r = 2 * this.rad * e, ctx.save(), i && (ctx.globalAlpha = ctx.globalAlpha * this.onFireEffA * e, ctx.drawImage(i, 0 + -.5 * n, s + -.95 * r, n, r)), 
                    ctx.restore();
      }
      break;
    case ability_extraBoost:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.15 * oldA;
        drawCircle(0, 0, this.rad, "#755A2A");

        ctx.restore();
      }
      break;
      

    case o_berryBush:
      {
        //this.drawOutlinedCircle("", col_food2);

        //draw bush animation
        ctx.save();
        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        var bushColor =
          this.curBiome == biome_ocean ? col_plankton2 : col_food2;
        ctx.fillStyle = bushColor;
        var drawRad = this.rad * 0.8;

        this.drawOutlinedCircle("", bushColor); //"#00B343");
        ctx.globalAlpha *= 0.98;

        var dx = -drawRad * 0.5,
          dy = -drawRad * 0.5 + 10.0 * this.rPer,
          drad = Math.max(0, drawRad * 0.65 + rShift) + 2;
        //drawCircle(dx, dy, drad+2, col_outline_land); //outline
        drawCircle(dx, dy, drad, bushColor); //outline

        var dx = drawRad * 0.5,
          dy = -drawRad * 0.5 - 10.0 * this.rPer,
          drad = Math.max(0, drawRad * 0.73 - rShift);
        //drawCircle(dx, dy, drad+2, col_outline_land); //outline
        drawCircle(dx, dy, drad, bushColor); //outline
        var dx = drawRad * 0.6,
          dy = drawRad * 0.4,
          drad = Math.max(0, drawRad * 0.78 + rShift);
        //drawCircle(dx, dy, drad+2, col_outline_land); //outline
        drawCircle(dx, dy, drad, bushColor); //outline

        var dx = -drawRad * 0.5,
          dy = drawRad * 0.5 + 10.0 * this.rPer,
          drad = Math.max(0, drawRad * 0.6 + this.rPer - rShift);
        //drawCircle(dx, dy, drad+2, col_outline_land); //outline
        drawCircle(dx, dy, drad, bushColor); //outline

        ctx.restore();

        //draw berries on bush
        /*var drawRad=this.rad*1.0;
                var dx=drawRad*-0.3, dy=drawRad*-0.2, drad=7;
                drawCircle(dx, dy, drad+2, col_outline_land); //outline
                drawCircle(dx, dy, drad, col_food1);
                var dx=drawRad*0.3, dy=drawRad*-0.1, drad=8;
                drawCircle(dx, dy, drad+2, col_outline_land); //outline
                drawCircle(dx, dy, drad, col_food1);
                var dx=drawRad*0.1, dy=drawRad*0.2, drad=7;
                drawCircle(dx, dy, drad+2, col_outline_land); //outline
                drawCircle(dx, dy, drad, col_food1);*/
      }
      break;
    case o_fruitTree:
      {
        this.drawOutlinedCircle("", "#1AAE31"); //less diff. spawner colors, so no extra col
        ctx.save();

        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        ctx.fillStyle = col_gameBg;
        var rad = this.rad * 0.75;

        ctx.globalAlpha *= 0.8;
        ctx.beginPath();
        ctx.arc(
          -rad * 0.5,
          -rad * 0.5 + 10.0 * this.rPer,
          Math.max(0, rad * 0.65 + rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          rad * 0.5,
          -rad * 0.5 - 10.0 * this.rPer,
          Math.max(0, rad * 0.73 - rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.beginPath();
        //ctx.globalAlpha = 0.95;
        ctx.arc(
          rad * 0.6,
          rad * 0.4,
          Math.max(0, rad * 0.78 + rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          -rad * 0.5,
          rad * 0.5,
          Math.max(0, rad * 0.6 + this.rPer - rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();

        ctx.restore();
      }
      break;
    case o_planktonBush:
      {
        //this.drawOutlinedCircle("", col_plankton2);
                  var myPlayer = gameObjsByID[myPlayerID];
        //draw bush animation
        ctx.save();
        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        //ctx.fillStyle = ;
        var drawRad = this.rad * 0.8;

        var drawCol = col_plankton2;
        if (this.curBiome == 7) {
          drawCol = col_plankton3;
      }
                  if (myPlayer) {
            if (myPlayer.flag_indeepsea) {
          drawCol = "#00DBFF";
             } 
          }
        this.drawOutlinedCircle("", drawCol); //"#00B343");
        ctx.globalAlpha *= 0.98;

        var dx = -drawRad * 0.5,
          dy = -drawRad * 0.5 + 10.0 * this.rPer,
          drad = Math.max(0, drawRad * 0.65 + rShift) + 2;
        //drawCircle(dx, dy, drad+2, col_outline_land); //outline
        drawCircle(dx, dy, drad, drawCol); //outline

        var dx = drawRad * 0.5,
          dy = -drawRad * 0.5 - 10.0 * this.rPer,
          drad = Math.max(0, drawRad * 0.73 - rShift);
        //drawCircle(dx, dy, drad+2, col_outline_land); //outline
        drawCircle(dx, dy, drad, drawCol); //outline
        var dx = drawRad * 0.6,
          dy = drawRad * 0.4,
          drad = Math.max(0, drawRad * 0.78 + rShift);
        //drawCircle(dx, dy, drad+2, col_outline_land); //outline
        drawCircle(dx, dy, drad, drawCol); //outline

        var dx = -drawRad * 0.5,
          dy = drawRad * 0.5 + 10.0 * this.rPer,
          drad = Math.max(0, drawRad * 0.6 + this.rPer - rShift);
        //drawCircle(dx, dy, drad+2, col_outline_land); //outline
        drawCircle(dx, dy, drad, drawCol); //outline

        ctx.restore();

        //draw berries on bush
        /*var drawRad=this.rad*1.0;
                var dx=drawRad*-0.3, dy=drawRad*-0.2, drad=7;
                drawCircle(dx, dy, drad+2, col_outline_land); //outline
                drawCircle(dx, dy, drad, col_food1);
                var dx=drawRad*0.3, dy=drawRad*-0.1, drad=8;
                drawCircle(dx, dy, drad+2, col_outline_land); //outline
                drawCircle(dx, dy, drad, col_food1);
                var dx=drawRad*0.1, dy=drawRad*0.2, drad=7;
                drawCircle(dx, dy, drad+2, col_outline_land); //outline
                drawCircle(dx, dy, drad, col_food1);*/
      }
      break;
    case o_waterSpot:
      {
        ctx.save();

        var col = this.curBiome == biome_arctic ? "#7790d8" : col_wat2;
        this.drawOutlinedCircle("", col);

        if (!options_lowGraphics) ctx.rotate(this.rPer * 2 * Math.PI);

        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 7.0;
        var shiftAm = 4; //5.5
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        /*//sand 'outline'
                var strokeW = 4;
                ctx.fillStyle = col_ocean_sand;
                ctx.beginPath();
                ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
                ctx.fill();*/

        //ctx.fillStyle = "#73602A"; //98803A";

        if (this.curBiome == biome_arctic) ctx.fillStyle = "#7790d8";
        else ctx.fillStyle = col_wat2; //98803A";
        //ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(0, 0, Math.max(0, this.rad - strokeW + rShift), 0, Math.PI * 2);
        ctx.fill();

        if (!options_lowGraphics) {
          ctx.beginPath(); //top right
          ctx.arc(
            this.rad * 0.3,
            -this.rad * 0.35 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.35 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom right
          ctx.arc(
            this.rad * 0.5,
            this.rad * 0.5 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.4 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom left
          ctx.arc(
            -this.rad * 0.55 * 0.707,
            +this.rad * 0.55 * 0.707 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.arc(
            -this.rad * 0.75,
            -this.rad * 0.35 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.3 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          /*ctx.beginPath();
                    ctx.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI);
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(this.rad - 20 * this.rPer, 50 * this.rPer, 10, 0, 2 * Math.PI);
                    ctx.fill();*/
        }

        ctx.restore();
      }
      break;
    case o_berry:
      {
        var berryCol = col_food1;
        if (this.curBiome == biome_arctic) {
          berryCol = "#ac443c";
        }
        this.drawOutlinedCircle("", berryCol); //draws with outline

        //arctic berry
        /*if(this.curBiome==biome_arctic){
                        //planktop eyes
                        ctx.rotate(this.rPer * Math.PI * 2.0);
                        drawCircle(this.rad * 0.25, this.rad * 0.4, (0.1 + 0.15 * this.rPer) * this.rad, "#723730");
                      }*/
      }
      break;
      
    case o_banana:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/banana" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
      }
      break; 
      
      



      
      
      

      
    case o_raspberry:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/rasp" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
      }
      break;
    case o_pear:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/pear" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
      }
      break;

       
      
    case o_seaweed:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/seaweed" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;

          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
      }
      break;
    case o_starfish:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/starfish" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
      }
      break;
    case o_kelp:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/kelp" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          var height = this.specType;
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, rad + this.specType * 5, 2 * rad);
          //console.log("drawing banana");
        }
      }
      break;
    case o_clam:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/clam" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
      }
      break;
      

      
          case o_urchin:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/urchin" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad * 1.0;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
          ctx.restore();
        }
      }
      break;
      
    case o_sharinganeye:
      {
        var theImg = getLoadedImg(
          "img/ability_kamuieye.png"
        );

        if (theImg) {
          
    var period = 8; //periodic func with time
    var p_min = 8,
   p_max = 20;
    var amp = 0.5 * (p_max - p_min);
                    var rps = 12 / 60;
                    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
          




            rps *= (tSinceSpawn + 1)

console.log(rps)

          
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation3 = fac0to1 * 2 * Math.PI;

          //ctx.drawImage(tornado, -rad, -rad, 2 * rad, 2 * rad);
          //var rad = Math.max(0, this.rad - 30);


          var period = 2.2;
          var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
          var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);
          var rad = this.rad * 1.2;
          ctx.save();
          ctx.rotate(rotation3);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
            break;
    case o_storm:
            {
        //draw banana img
        var theImg = getLoadedImg(
          "img/storm.png"
        );
        if (theImg) {
          ctx.globalAlpha = 0.8
          var rps = 10 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation3 = fac0to1 * 2 * Math.PI;

          //ctx.drawImage(tornado, -rad, -rad, 2 * rad, 2 * rad);
          //var rad = Math.max(0, this.rad - 30);

          var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
          var period = 2.2;
          var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
          var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);
          var rad = this.rad * 1.2;
          ctx.save();
          ctx.rotate(rotation3);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
          ctx.restore();
        }
      }
      break;
    case o_tubeworm:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/tubeworm" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad * 1.0;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
          ctx.restore();
        }
      }
      break;
    
    case o_conchShell:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/conch" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad * 1.0;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
          ctx.restore();
        }
      }
      break;
      
            case o_fruitthrow://mark1
      {
        //draw banana img
        
                  var rps = -90 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation1 = fac0to1 * 2 * Math.PI;
        
        
          var theImg = getLoadedImg(
          "img/banana" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        
        if (this.specType == 1) {
        theImg = getLoadedImg(
          "img/coconut" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        }
        
        if (theImg) {
		          ctx.rotate(this.angle);
          if (this.specType == 2) {
            ctx.rotate(rotation1);
          }
          var rad = this.rad;
		if (this.specType == 1) {
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad * (1 + this.specType2/50));
		} else {
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
		}
          //console.log("drawing banana");
        }
      }
      break;
             case o_battleroyale:
      {
  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.arc(0, 0, this.rad + 2, 0, 2 * Math.PI, false);
  ctx.arc(0, 0, this.rad, 0, 2 * Math.PI, true);
  ctx.fillStyle = "#FF1616";
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.095;

  ctx.beginPath();
  ctx.arc(0, 0, this.rad, 0, 2 * Math.PI, false);
  ctx.arc(0, 0, this.specType, 0, 2 * Math.PI, true);
  ctx.fillStyle = "#FF4242";
  ctx.closePath();
  ctx.fill();
  // ctx.globalAlpha = 0.15;
  // ctx.strokeStyle = "red";
  // ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.arc(0, 0, this.specType, 0, 2 * Math.PI, false);
  ctx.arc(0, 0, this.specType - 2, 0, 2 * Math.PI, true);
  ctx.fillStyle = "#FF0000";
  ctx.closePath();
  ctx.fill();
  ctx.restore();
	      
  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.arc(0, 0, this.specType2 - 100, 0, 2 * Math.PI, false);
  ctx.arc(0, 0, this.specType2, 0, 2 * Math.PI, true);
  ctx.fillStyle = "#32ff00";
  ctx.closePath();
  ctx.fill();
  ctx.restore(); 


        }

            break;
          case o_cakesplash:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.5 * oldA;
        var rad = this.rad;
        this.doesDrawEffectScale = false;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.2;
        var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
        var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        ctx.globalAlpha = 0.3 * oldA;
        drawCircle(0, 0, rad, "#DC8DA2");

        ctx.globalAlpha = 0.5 * oldA;

        drawCircle(
          0 + xShift / 4.5 + this.rPer,
          1 + yShift / 1.5,
          Math.max(0, rad - 14),
          "#DA7992"
        );
        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, rad - 38.5 + yShift / 5),
          "#D86D89"
        );
        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, rad - 54.5 + yShift / 11),
          "#C76A84"
        );
        ctx.restore();
      }
      break;
    
      /*
                case o_atoll:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/atoll.png"
        );
        if (theImg) {
          var rad = this.rad * 1.0;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
          ctx.restore();
        }
      }
      break;
      */
      
                      case o_atoll:
      {
                var oldA = ctx.globalAlpha;
                  var rad = this.rad * 1/.85;
        drawCircle(
          0,
          0,
          rad,
          "#BEC667"
        );
                drawCircle(
          0,
          0,
          rad * .85,
          "#073144"
        );
        
                        drawCircle(
          0,
          0,
          rad * .6,
          "#03161F"
        );
                        drawCircle(
          0,
          0,
          rad * .35,
          "#000406"
        );
                        drawCircle(
          0,
          0,
          rad * .15,
          "#000003"
        );
                ctx.globalAlpha = 0.25 * oldA;
                                drawCircle(
          0,
          0,
          rad,
          col_reef
        );
        
                ctx.globalAlpha = oldA;
      }
      break;

          case o_cakesplat:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/ability_cakesplat.png"
        );
        if (theImg) {
          var rad = this.rad * 1.0;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
          ctx.restore();
        }
      }
      break;
      
    case o_lotus:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/lotus" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad * 1.0;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
          ctx.restore();
        }
      }
      break;


		  		      case o_bombexplosion:
      {
        var theImg = getLoadedImg(
          "img/bombexplosion.png"
        );
	                var rps = 30 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation3 = fac0to1 * 2 * Math.PI;
          ctx.rotate(rotation3);
	     var time = (timestamp - this.spawnTime)
	     var deathtime = 1200
        if (theImg) {
          var rad = this.rad * (1.0 + time/500);
          ctx.globalAlpha = 1 * Math.max((deathtime - time)/deathtime, 0)
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
          ctx.restore();
        }
      }
      break;
		  
		      case o_impact:
      {
        var theImg = getLoadedImg(
          "img/impact.png"
        );
	     var time = (timestamp - this.spawnTime)
	     var deathtime = 300
        if (theImg) {
          var rad = this.rad * (1.0 + time/500);
          ctx.globalAlpha = 1 * Math.max((deathtime - time)/deathtime, 0)
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
          ctx.restore();
        }
      }
      break;
    case o_coconut:
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/coconut" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
      }
      break;
    case o_flockspot:
    case o_flock: {
      //drawCircle(0,0, this.rad, "black");
      break;
    }
   
      break;
    case o_sleigh:
      {
        //draw banana img
      
        var theImg = getLoadedImg("img/santa/sleig.png");
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.angle);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
          //console.log("drawing banana");
        }
        
      }
      break;
    case o_ostrichEgg:
      {
        var theImg = getLoadedImg(
          "img/ostrichEgg" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;
        case o_raspberrynew:
      {
        var theImg = getLoadedImg(
          "img/raspberry"+ this.specType + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;
          case o_dragonfruit:
      {
        var theImg = getLoadedImg(
          "img/dragonfruit" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;
   case o_turkishflag:
      {
        var theImg = getLoadedImg(
          "img/turkishflag" + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
        ctx.rotate(0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2.5 * rad);
          ctx.restore();
        }
      }
      break;
   

       case o_eastereggs:
      {
        //draw banana img

        var golden = "";
        var theImg = getLoadedImg(
          "img/eastereggs/" + this.specType + ".png"
        );
	      if (this.isEdibleOutlined()) {
	 drawCircle(0, 0, this.rad, col_edibleOutline);
	      }
        if (theImg) {
          var rad = this.rad;
			      if (this.isEdibleOutlined()) {
				      rad = this.rad * 0.9;
			      }
          ctx.save();

          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
          //console.log("drawing banana");
        }
      }
      break;
      

    case o_egg:
      {
        //draw banana img

        var golden = "";
        if (this.specType == 1) golden = "golden";
        var theImg = getLoadedImg(
          "img/" +
            golden +
            "egg" +
            (this.isEdibleOutlined() ? "_e" : "") +
            ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();

          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
          //console.log("drawing banana");
        }
      }
      break;


		      case o_spawnEgg:
      {
        //draw banana img

        var golden = "";
        if (this.specType == 1) golden = "golden";
        ctx.globalAlpha = 0.5
	if (this.specType2 == 1) ctx.globalAlpha = 1;
        var theImg = getLoadedImg(
          "img/" +
            golden +
            "egg" +
            (this.isEdibleOutlined() ? "_e" : "") +
            ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();

          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
          //console.log("drawing banana");
        }
      }
      break;
    case o_beeHive:
      {
        //draw banana img
        // console.log("bee hive");
        var theImg = getLoadedImg(
          "img/beehive" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * 0.5 * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
          //console.log("drawing banana");
        }
      }
      break;
    case o_honeyComb:
      {
        var theImg = getLoadedImg(
          "img/honeycomb" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * 0.5 * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
          //console.log("drawing banana");
        }
      }
      break;
    case o_quill:
      {
        //draw banana img
        var theImg = getLoadedImg("img/quill.png");
        if (theImg) {
          var rad = this.rad;
          ctx.rotate(this.angle);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
      }
      break;
    case o_plankton:

      
      originalalpha = ctx.globalAlpha
      var colplankton = "#C8BBEC"
      {
                  var myPlayer = gameObjsByID[myPlayerID];
        if (this.curBiome == 7) {
        this.drawOutlinedCircle("", colplankton); //draws with outline
        //planktop eyes
        ctx.rotate(this.rPer * Math.PI * 2.0);
        drawCircle(
          this.rad * 0.25,
          this.rad * 0.4,
          (0.3 + 0.15 * this.rPer) * this.rad,
          "#8E7EC1"
        );
                } else if (myPlayer && myPlayer.flag_indeepsea){
                                                        var period = 8.0; //periodic func with time
    var p_min = 0.5,
      p_max = 1.5;
    var amp = 0.5 * (p_max - p_min);
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
      );
        
        var sus =       p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
      );
        
        ctx.globalAlpha = 0.24;
                drawCircle(
          0,
          0,
          this.rad + (10 * sus),
          "#00DBFF"
        );
        
                        drawCircle(
          0,
          0,
          this.rad + (20 * sus),
          "#00DBFF"
        );
                      ctx.globalAlpha = originalalpha;
        
                 this.drawOutlinedCircle("", "#03B8D5");
                ctx.rotate(this.rPer * Math.PI * 2.0);
        drawCircle(
          this.rad * 0.25,
          this.rad * 0.4,
          (0.3 + 0.15 * this.rPer) * this.rad,
          "#00869C"
        );      
                } else {
                                    
         this.drawOutlinedCircle("", col_plankton1); //draws with outline
        //planktop eyes
        ctx.rotate(this.rPer * Math.PI * 2.0);
        drawCircle(
          this.rad * 0.25,
          this.rad * 0.4,
          (0.3 + 0.15 * this.rPer) * this.rad,
          "#905113"
        ); 
                
                }
                
 
 
        
        
      }
      break;
    case o_healingStone:
      {
        //set correct biome outline
        var biomeExt = "";
        switch (this.curBiome) {
          case biome_ocean:
            biomeExt = "_ocean";
            break;
          case biome_arctic:
            biomeExt = "_arctic";
            break;
          case biome_land:
          default:
            biomeExt = "";
            break;
        }
        var theImg = getLoadedImg("img/healingStone" + biomeExt + ".png");
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);

          ctx.restore();
        }
      }
      break; 
    case o_astralStone:
      {
        //set correct biome outline
                  var rps = 5 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation3 = fac0to1 * 2 * Math.PI;

          //ctx.drawImage(tornado, -rad, -rad, 2 * rad, 2 * rad);
          //var rad = Math.max(0, this.rad - 30);

          var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
          var period = 2.2;
          var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
          var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);
          var rad = this.rad * 1.2;
        
        
        var biomeExt = "";
        var theImg = getLoadedImg("img/astralStone.png");
       var originalz = this.z
       var originalalpha = ctx.globalAlpha
                      this.z = 99999;
                                                                var period = 8.0; //periodic func with time
    var p_min = this.rad * 0.07,
      p_max = this.rad * 0.015;
    var amp = 0.5 * (p_max - p_min);
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
      );
        
        var sus =       p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
      );
        
        ctx.globalAlpha = 0.4;
                drawCircle(
          0,
          0,
          this.rad + (10 * sus),
          "#921ACE"
        );
        
                        drawCircle(
          0,
          0,
          this.rad + (20 * sus),
          "#921ACE"
        );
                              ctx.globalAlpha = originalalpha;
                this.z = originalz
                        theImg = getLoadedImg("img/firethree.png");
                          ctx.rotate(rotation3);
                if (this.specType == 1) {
                if (theImg) {
          var rad = this.rad * 2;
          ctx.save();
          ctx.rotate(0);
          ctx.drawImage(theImg, -rad + 8, -rad - 20, 2 * rad, 2 * rad);

          ctx.restore();
        }
                }
        theImg = getLoadedImg("img/astralStone.png");
        if (theImg) {
                                   ctx.rotate(-rotation3);
                  if (this.specType == 1) {
                 ctx.rotate(rotation3 * 3);   
                  }
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad , -rad, 2 * rad, 2 * rad);

          ctx.restore();
        }

      }
      break;
    case o_volcano:
      {
        /*var theImg = getLoadedImg("img/volcano_im.png");
                if (theImg) {
                    var rad = this.rad*(300.0/236.0);
                    ctx.save()
                    ctx.rotate(this.rPer * Math.PI * 2.0);
                    ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);

                    ctx.restore();
                }*/

        //drawCircle(0, 0, Math.max(0, this.rad*1.0), "#09992f");
        var x = 0
        var y = 0
        var shake = 4
        if (this.specType == 1) {
          x = (Math.random() - 0.5) * shake
          y = (Math.random() - 0.5) * shake
        }
        drawCircle(x, y, Math.max(0, this.rad * 1), "#815427");

        drawCircle(x, y, Math.max(0, this.rad * 0.6), "#6e4b29");

        drawCircle(x, y, Math.max(0, this.rad * 0.5), "#543d28");

        drawCircle(x, y, Math.max(0, this.rad * 0.45), "#3f3124");

        drawCircle(x, y, Math.max(0, this.rad * 0.33), "#241e19");

        drawCircle(x, y, Math.max(0, this.rad * 0.25), "#120f0d");

        drawCircle(x, y, Math.max(0, this.rad * 0.2), col_lava);
      }

      break;

    case o_lavaLake:
      {

        ctx.save();

        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 4.0;
        var shiftAm = 2.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        if (batchDrawOutline) {
          //sand 'outline'
          var strokeW = 4;
          ctx.fillStyle = col_lava;
          ctx.beginPath();
          ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
          ctx.fill();
        } else {
          //ctx.fillStyle = "#73602A"; //98803A";
          ctx.fillStyle = col_lava; //98803A";
          //ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(
            0,
            0,
            Math.max(0, this.rad - strokeW + rShift),
            0,
            Math.PI * 2
          );
          ctx.fill();

          if (!options_lowGraphics) {
            ctx.beginPath(); //top right
            ctx.arc(
              this.rad * 0.45,
              -this.rad * 0.45 + 15.0 * this.rPer,
              Math.max(0, this.rad * 0.5 + rShift),
              0,
              2 * Math.PI
            );
            ctx.fill();

            ctx.beginPath(); //bottom right
            ctx.arc(
              this.rad * 0.5,
              this.rad * 0.5 + 15.0 * this.rPer,
              Math.max(0, this.rad * 0.4 + rShift),
              0,
              2 * Math.PI
            );
            ctx.fill();

            ctx.beginPath(); //bottom left
            ctx.arc(
              -this.rad * 0.55 * 0.707,
              +this.rad * 0.55 * 0.707 + 15.0 * this.rPer,
              Math.max(0, this.rad * 0.5 + rShift),
              0,
              2 * Math.PI
            );
            ctx.fill();
            ctx.beginPath();
            ctx.arc(
              -this.rad * 0.75,
              -this.rad * 0.35 + 15.0 * this.rPer,
              Math.max(0, this.rad * 0.3 + rShift),
              0,
              2 * Math.PI
            );
            ctx.fill();

            ctx.beginPath();
            ctx.arc(
              this.rad + 10 * this.rPer,
              50 * this.rPer,
              8,
              0,
              2 * Math.PI
            );
            ctx.fill();

            ctx.beginPath();
            ctx.arc(
              this.rad - 20 * this.rPer,
              50 * this.rPer,
              10,
              0,
              2 * Math.PI
            );
            ctx.fill();
          }

          ctx.save();
          ctx.globalAlpha = 1.0 - this.underwaterA; //bubbles appear as animal fades

          var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
          var period = 1.5;
          var shiftAm = 8.0;
          var moveA =
            shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

          if (this.flag_underWater) {
            ctx.globalAlpha *= 0.5;

            if (this.animalType == a_croc) ctx.globalAlpha = 0.3;
          }
          ctx.fillStyle = "yellow";
          var bubRad = this.rad * 0.15;
          ctx.beginPath(); //top left, right

          var bubbles = 1;
          for (i = 1; i <= bubbles; i++) {
            ctx.save();
            ctx.globalAlpha = 0.2;
            ctx.rotate(this.rPer * Math.PI * 2.0 * i);
            ctx.beginPath(); //top left, right
            ctx.arc(
              this.rad * -0.35,
              this.rad * -0.33,
              Math.max(0, bubRad + moveA),
              0,
              Math.PI * 2
            );
            ctx.fill();
            ctx.beginPath();
            ctx.arc(
              this.rad * 0.35,
              this.rad * -0.32,
              Math.max(0, bubRad - moveA),
              0,
              Math.PI * 2
            );
            ctx.fill();

            ctx.beginPath(); //bottom 2
            ctx.arc(
              this.rad * 0.35,
              this.rad * 0.36,
              Math.max(0, bubRad + moveA),
              0,
              Math.PI * 2
            );
            ctx.fill();
            ctx.beginPath();
            ctx.arc(
              this.rad * -0.35,
              this.rad * 0.35,
              Math.max(0, bubRad - moveA),
              0,
              Math.PI * 2
            );
            ctx.fill();
            ctx.restore();
          }
          ctx.restore();
        }

        ctx.restore();
    
      }
      break;

    case o_bog:
      {
        ctx.save();

        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 4.0;
        var shiftAm = 2.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        if (batchDrawOutline) {
          //sand 'outline'
          var strokeW = 4;
          ctx.fillStyle = "#5e5348";
          ctx.beginPath();
          ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
          ctx.fill();
        } else {
          //ctx.fillStyle = "#73602A"; //98803A";
          ctx.fillStyle = "#706962"; //98803A";
          //ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(
            0,
            0,
            Math.max(0, this.rad - strokeW + rShift),
            0,
            Math.PI * 2
          );
          ctx.fill();

          if (!options_lowGraphics) {
            ctx.beginPath(); //top right
            ctx.arc(
              this.rad * 0.45,
              -this.rad * 0.45 + 15.0 * this.rPer,
              Math.max(0, this.rad * 0.5 + rShift),
              0,
              2 * Math.PI
            );
            ctx.fill();

            ctx.beginPath(); //bottom right
            ctx.arc(
              this.rad * 0.5,
              this.rad * 0.5 + 15.0 * this.rPer,
              Math.max(0, this.rad * 0.4 + rShift),
              0,
              2 * Math.PI
            );
            ctx.fill();

            ctx.beginPath(); //bottom left
            ctx.arc(
              -this.rad * 0.55 * 0.707,
              +this.rad * 0.55 * 0.707 + 15.0 * this.rPer,
              Math.max(0, this.rad * 0.5 + rShift),
              0,
              2 * Math.PI
            );
            ctx.fill();
            ctx.beginPath();
            ctx.arc(
              -this.rad * 0.75,
              -this.rad * 0.35 + 15.0 * this.rPer,
              Math.max(0, this.rad * 0.3 + rShift),
              0,
              2 * Math.PI
            );
            ctx.fill();

            ctx.beginPath();
            ctx.arc(
              this.rad + 10 * this.rPer,
              50 * this.rPer,
              8,
              0,
              2 * Math.PI
            );
            ctx.fill();

            ctx.beginPath();
            ctx.arc(
              this.rad - 20 * this.rPer,
              50 * this.rPer,
              10,
              0,
              2 * Math.PI
            );
            ctx.fill();
          }

          ctx.save();
          ctx.globalAlpha = 1.0 - this.underwaterA; //bubbles appear as animal fades

          var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
          var period = 1.5;
          var shiftAm = 8.0;
          var moveA =
            shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

          if (this.flag_underWater) {
            ctx.globalAlpha *= 0.5;

            if (this.animalType == a_croc) ctx.globalAlpha = 0.3;
          }
          ctx.fillStyle = "yellow";
          var bubRad = this.rad * 0.15;
          ctx.beginPath(); //top left, right

          var bubbles = 1;
          for (i = 1; i <= bubbles; i++) {
            ctx.save();
            ctx.globalAlpha = 0.2;
            ctx.rotate(this.rPer * Math.PI * 2.0 * i);
            ctx.beginPath(); //top left, right
            ctx.arc(
              this.rad * -0.35,
              this.rad * -0.33,
              Math.max(0, bubRad + moveA),
              0,
              Math.PI * 2
            );
            ctx.fill();
            ctx.beginPath();
            ctx.arc(
              this.rad * 0.35,
              this.rad * -0.32,
              Math.max(0, bubRad - moveA),
              0,
              Math.PI * 2
            );
            ctx.fill();

            ctx.beginPath(); //bottom 2
            ctx.arc(
              this.rad * 0.35,
              this.rad * 0.36,
              Math.max(0, bubRad + moveA),
              0,
              Math.PI * 2
            );
            ctx.fill();
            ctx.beginPath();
            ctx.arc(
              this.rad * -0.35,
              this.rad * 0.35,
              Math.max(0, bubRad - moveA),
              0,
              Math.PI * 2
            );
            ctx.fill();
            ctx.restore();
          }
          ctx.restore();
        }

        ctx.restore();
      }
      break;

    case o_cloudBerry:
      {
        var theImg = getLoadedImg(
          "img/cloudberry" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();

          var rad = this.rad;
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);

          ctx.restore();
        }
      }
      break;
      

    case o_arcticNut:
      {
        var theImg = getLoadedImg(
          "img/arcticNut" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();

          var rad = this.rad;
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);

          ctx.restore();
        }
      }
      break;


    case o_carrot:
      {
        var theImg = getLoadedImg(
          "img/carrot" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);

          ctx.restore();
        }
      }
      break;
      
    case o_fig:
      {
        var theImg = getLoadedImg(
          "img/fig" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);

          ctx.restore();
        }
      }
      break;
      
    case o_tomato:
      {
        var theImg = getLoadedImg(
          "img/tomato" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);

          ctx.restore();
        }
      }
      break;
      

      
    case o_watermelon:
      {
        var theImg = getLoadedImg(
          "img/watermelon" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);

          ctx.restore();
        }
      }
      break;
    case o_poisonBerry:
      {
        ctx.save();
      
        drawCircle(0, 0, Math.max(0, this.rad - this.rad / 5), col_edibleOutline);

        ctx.restore();

        var theImg = getLoadedImg("img/poisonBerry" + this.specType + ".png");// + (this.isEdibleOutlined() ? "_e" : "") + ".png");
                            if (theImg) {
                                var rad = this.rad;
                                ctx.save();
                                ctx.rotate(this.rPer * Math.PI * 2.0);
                                ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);

                                ctx.restore();
                            }
      }

      break;
    case o_watermelonSlice:
      {
        var theImg = getLoadedImg(
          "img/watermelonSlice" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);

          ctx.restore();
        }
      }
      break;


      
    case o_meatSmall:
    case o_meatMedium:
    case o_meatLarge:
      {
        var meatType = 0;
        var theImg = getLoadedImg(
          "img/" + "meat" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;
      
          case o_meatball:
      {
             var theImg = getLoadedImg("img/meatball_" + this.specType + ".png");
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;
                case  o_iceberg:
      {
             var theImg = getLoadedImg("img/iceberg.png");
        if (theImg) {
          var rad = this.rad * 1.2987012987;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;

                case o_star:
      {
  ctx.globalAlpha *= (this.specType / 100.0) * 1;
             var theImg = getLoadedImg("img/star.png");
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;
      
                      case o_shard:
      {

             var theImg = getLoadedImg("img/starshard.png");
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 1 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;

    case o_mushroom:
    case o_bigMushroom:
      {
        var strokeW = 2;
        var wid = this.oType == o_bigMushroom ? 15 : 9;

        //mushroom leg stroke outline
        ctx.fillStyle = this.getOutlineColor();
        ctx.beginPath();
        ctx.rect(
          -wid / 2 - strokeW,
          -strokeW,
          wid + strokeW * 2,
          this.rad * 0.8 + strokeW * 2
        );
        ctx.fill();

        //mushroom leg
        ctx.fillStyle = "#FFCA49";
        ctx.beginPath();
        ctx.rect(-wid / 2, 0 + strokeW / 2, wid, this.rad * 0.8 - strokeW / 2);
        ctx.fill();

        //head outline
        if (!options_lowGraphics) {
          ctx.beginPath();
          ctx.arc(0, 0, Math.max(0, this.rad), Math.PI, 2 * Math.PI);
          ctx.fillStyle = this.getOutlineColor(); //col_outline_land;
          ctx.fill();
        }
        //head
        ctx.beginPath();
        ctx.arc(0, 0, Math.max(0, this.rad - strokeW), Math.PI, 2 * Math.PI);
        ctx.fillStyle = this.oType == o_bigMushroom ? "#B8413B" : "#CFAD59";
        ctx.fill();
      }
      break;
    case o_bigMushroomBush:
      {
        //ctx.strokeStyle = col_outline_land; //outline
        //ctx.lineWidth = 2;
        var strokeW = 2;
        //console.log("big mush!");

        ctx.save();

        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        ctx.fillStyle = "#45D157";

        ctx.globalAlpha *= 0.93;
        ctx.beginPath();
        ctx.arc(
          -this.rad * 0.5,
          -this.rad * 0.5 + 10.0 * this.rPer,
          Math.max(0, this.rad * 0.55 + rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          this.rad * 0.5,
          -this.rad * 0.5 - 10.0 * this.rPer,
          Math.max(0, this.rad * 0.43 - rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.beginPath();
        //ctx.globalAlpha = 0.95;
        ctx.arc(
          this.rad * 0.6,
          this.rad * 0.4,
          Math.max(0, this.rad * 0.48 + rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          -this.rad * 0.5,
          this.rad * 0.5,
          Math.max(0, this.rad * 0.4 + this.rPer - rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();

        ctx.restore();

        var wid = 20;
        //stroke outline
        ctx.fillStyle = this.getOutlineColor();
        ctx.beginPath();
        ctx.rect(
          -wid / 2 - strokeW,
          -strokeW,
          wid + strokeW * 2,
          this.rad * 0.8 + strokeW * 2
        );
        ctx.fill();
        //mushroom leg
        ctx.fillStyle = "#FFCA49";
        ctx.beginPath();
        ctx.rect(-wid / 2, 0 + strokeW / 2, wid, this.rad * 0.8 - strokeW / 2);
        ctx.fill();
        //ctx.stroke();

        //outline
        ctx.beginPath();
        ctx.arc(0, 0, Math.max(0, this.rad * 0.8), Math.PI, 2 * Math.PI);
        ctx.fillStyle = this.getOutlineColor();
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          0,
          0,
          Math.max(0, this.rad * 0.8 - strokeW),
          Math.PI,
          2 * Math.PI
        );
        ctx.fillStyle = "#B8413B";
        ctx.fill();
        //ctx.stroke();
      }
      break;
    case o_lillypad:
      {
        //outline drawing

        var theImg = getLoadedImg(
          "img/lillypad" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );

        if (theImg) {
          var rad = this.rad;
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
          /*if(this.rPer<0.2){
                      var rad=this.rad*0.25;
                        var flowImg=getLoadedImg("img/lilly_fl.png");
                        if(flowImg){
                        ctx.drawImage(flowImg, -rad , -rad , 2 * rad, 2 * rad);
                      }
                    }*/
        }
      }
      break;
    case o_hidingHole:
      {
        this.drawOutlinedCircle("", "#9F8641");

        drawCircle(
          0 - this.rPer,
          0 - this.rPer,
          Math.max(0, this.rad - 7),
          "#7E6A35"
        );
if (this.specType == 1) {
        drawCircle(0 + this.rPer, 1, Math.max(0, this.rad - 12), "#5C4E28");
} else {
          drawCircle(0 + this.rPer, 1, Math.max(0, this.rad - 12), "#5C4E28");
}
      
      }
      break;
    case o_abilityGObj:
    case o_particles:
      {
        console.log("ERROR: " + this + " should be subclassed!");

        //drawCircle(0 + this.rPer, 1, Math.max(0, this.rad - 12), "#5C4E28");
      }
      break;
      
    case o_hidingHoleOcean:
      {
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 1.2;
        var xShift = 2.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
        var yShift = 2.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        this.drawOutlinedCircle("", "#2CAAC4");

        if (!options_lowGraphics) {
          drawCircle(
            0 + xShift / 2 - this.rPer,
            0 + yShift / 2 - this.rPer,
            Math.max(0, this.rad - 6),
            "#2D93B0"
          );
        }
        drawCircle(
          0 + xShift / 4.5 + this.rPer,
          1 + yShift / 1.5,
          Math.max(0, this.rad - 14),
          "#29A0BA"
        );
        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, this.rad - 18.5 + yShift / 5),
          "#2B8CAA"
        );
        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, this.rad - 24.5 + yShift / 11),
          "#28829E"
        );

        
      }
      break;
     case o_bigHidingHole:
      {
        this.drawOutlinedCircle("", "#9F8641");
        //drawCircle(0, 0, this.rad, "#9F8641");

        if (!options_lowGraphics) {
          drawCircle(
            0 - this.rPer,
            0 - this.rPer,
            Math.max(0, this.rad - 7),
            "#7E6A35"
          );
        }
if (this.specType != 1) {
        drawCircle(0 + this.rPer, 1, Math.max(0, this.rad - 14), "#5C4E28");
        drawCircle(
          0 - this.rPer * 2 - 3,
          1,
          Math.max(0, this.rad - 18.5),
          "#40371D"
        );
        }

      }
      break;
    case o_hidingBush:
      {
        ctx.save();

        //draw bush animation
        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        var bushBgCol = "#45D157";
        switch (this.curBiome) {
          case biome_jungle:
            bushBgCol = "#166B21";
            break;
          case biome_arctic:
            bushBgCol = "#CED0D0";
            break;
          default:
          case biome_land:
            bushBgCol = "#45D157";
            break;
        }
        ctx.fillStyle = bushBgCol;

        ctx.globalAlpha *= 0.93;
        ctx.beginPath();
        ctx.arc(
          -this.rad * 0.5,
          -this.rad * 0.5 + 10.0 * this.rPer,
          Math.max(0, this.rad * 0.65 + rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          this.rad * 0.5,
          -this.rad * 0.5 - 10.0 * this.rPer,
          Math.max(0, this.rad * 0.73 - rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.beginPath();
        //ctx.globalAlpha = 0.95;
        ctx.arc(
          this.rad * 0.6,
          this.rad * 0.4,
          Math.max(0, this.rad * 0.78 + rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          -this.rad * 0.5,
          this.rad * 0.5,
          Math.max(0, this.rad * 0.6 + this.rPer - rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();

        ctx.restore();
      }
      break;
      
          case o_hidebush:
      {
        ctx.save();

        //draw bush animation
        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        var bushBgCol = "#45D157";
        switch (this.curBiome) {
          case biome_jungle:
            bushBgCol = "#166B21";
            break;
          case biome_arctic:
            bushBgCol = "#CED0D0";
            break;
      case biome_land:
            bushBgCol = "#45D157";
            break;
          default:
          case biome_jungle:
            bushBgCol = "#166B21";
            break;
        }
        ctx.fillStyle = bushBgCol;

        ctx.globalAlpha *= 0.93;
        ctx.beginPath();
        ctx.arc(
          -this.rad * 0.5,
          -this.rad * 0.5 + 10.0 * this.rPer,
          Math.max(0, this.rad * 0.65 + rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          this.rad * 0.5,
          -this.rad * 0.5 - 10.0 * this.rPer,
          Math.max(0, this.rad * 0.73 - rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.beginPath();
        //ctx.globalAlpha = 0.95;
        ctx.arc(
          this.rad * 0.6,
          this.rad * 0.4,
          Math.max(0, this.rad * 0.78 + rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
          -this.rad * 0.5,
          this.rad * 0.5,
          Math.max(0, this.rad * 0.6 + this.rPer - rShift),
          0,
          2 * Math.PI
        );
        ctx.fill();

        ctx.restore();
      }
      break;
      
    case o_biome_volcano:
      {
        ctx.save();
        if (!options_lowGraphics) ctx.rotate(this.rPer * 2 * Math.PI);

        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 6.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        //console.log("Mud");
        //ctx.globalAlpha = 1;
        //green outline (without stroke- optimized)
        var strokeW = 4;
        ctx.fillStyle = "#604729";
        ctx.beginPath();
        ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
        ctx.fill();

        if (!options_lowGraphics) {
          ctx.fillStyle = "#8A681B";
          //ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(
            0,
            0,
            Math.max(0, this.rad - strokeW + rShift),
            0,
            Math.PI * 2
          );
          ctx.fill();

          ctx.beginPath(); //top right
          ctx.arc(
            this.rad * 0.45,
            -this.rad * 0.45 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom right
          ctx.arc(
            this.rad * 0.5,
            this.rad * 0.5 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.4 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom left
          ctx.arc(
            -this.rad * 0.55 * 0.707,
            +this.rad * 0.55 * 0.707 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.arc(
            -this.rad * 0.75,
            -this.rad * 0.35 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.3 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.beginPath();
          ctx.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI);
          ctx.fill();
          ctx.beginPath();
          ctx.beginPath();
          ctx.arc(
            this.rad - 20 * this.rPer,
            50 * this.rPer,
            10,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
        }

        ctx.restore();
      }
      break;
    case o_biome_poison:
      {
        ctx.save();
        if (!options_lowGraphics) ctx.rotate(this.rPer * 2 * Math.PI);

        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 6.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        //console.log("Mud");
        //ctx.globalAlpha = 1;
        //green outline (without stroke- optimized)
        var strokeW = 4;
        ctx.fillStyle = "#605649";
        ctx.beginPath();
        ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
        ctx.fill();

        if (!options_lowGraphics) {
          ctx.fillStyle = "#5e4f36";
          //ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(
            0,
            0,
            Math.max(0, this.rad - strokeW + rShift),
            0,
            Math.PI * 2
          );
          ctx.fill();

          ctx.beginPath(); //top right
          ctx.arc(
            this.rad * 0.45,
            -this.rad * 0.45 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom right
          ctx.arc(
            this.rad * 0.5,
            this.rad * 0.5 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.4 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom left
          ctx.arc(
            -this.rad * 0.55 * 0.707,
            +this.rad * 0.55 * 0.707 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.arc(
            -this.rad * 0.75,
            -this.rad * 0.35 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.3 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.beginPath();
          ctx.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI);
          ctx.fill();
          ctx.beginPath();
          ctx.beginPath();
          ctx.arc(
            this.rad - 20 * this.rPer,
            50 * this.rPer,
            10,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
        }

        ctx.restore();
      }
      break;
    case o_mudSpot:
      {
        ctx.save();
        if (!options_lowGraphics) ctx.rotate(this.rPer * 2 * Math.PI);

        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 6.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        //console.log("Mud");
        //ctx.globalAlpha = 1;
        //green outline (without stroke- optimized)
        var strokeW = 4;
        ctx.fillStyle = "#8B7833";
        ctx.beginPath();
        ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
        ctx.fill();

        if (!options_lowGraphics) {
          ctx.fillStyle = "#98803A";
          //ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(
            0,
            0,
            Math.max(0, this.rad - strokeW + rShift),
            0,
            Math.PI * 2
          );
          ctx.fill();

          ctx.beginPath(); //top right
          ctx.arc(
            this.rad * 0.45,
            -this.rad * 0.45 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom right
          ctx.arc(
            this.rad * 0.5,
            this.rad * 0.5 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.4 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom left
          ctx.arc(
            -this.rad * 0.55 * 0.707,
            +this.rad * 0.55 * 0.707 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.arc(
            -this.rad * 0.75,
            -this.rad * 0.35 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.3 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.beginPath();
          ctx.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI);
          ctx.fill();
          ctx.beginPath();
          ctx.beginPath();
          ctx.arc(
            this.rad - 20 * this.rPer,
            50 * this.rPer,
            10,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
        }

        ctx.restore();
      }
      break;
    case o_arcticIce:
      {
        ctx.save();
        if (!options_lowGraphics) ctx.rotate(this.rPer * 2 * Math.PI);

        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 6.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        //console.log("Mud");
        //ctx.globalAlpha = 1;
        //green outline (without stroke- optimized)
        var strokeW = 4;
        ctx.fillStyle = "#8CC3C7";
        ctx.beginPath();
        ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
        ctx.fill();

        if (!options_lowGraphics) {
          ctx.fillStyle = "#9DDADE";
          //ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(
            0,
            0,
            Math.max(0, this.rad - strokeW + rShift),
            0,
            Math.PI * 2
          );
          ctx.fill();

          ctx.beginPath(); //top right
          ctx.arc(
            this.rad * 0.45,
            -this.rad * 0.45 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom right
          ctx.arc(
            this.rad * 0.5,
            this.rad * 0.5 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.4 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom left
          ctx.arc(
            -this.rad * 0.55 * 0.707,
            +this.rad * 0.55 * 0.707 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.arc(
            -this.rad * 0.75,
            -this.rad * 0.35 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.3 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.beginPath();
          ctx.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI);
          ctx.fill();
          ctx.beginPath();
          ctx.beginPath();
          ctx.arc(
            this.rad - 20 * this.rPer,
            50 * this.rPer,
            10,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
        }

        ctx.restore();
      }
      break;
    case o_lake:
      {
        /*
        ctx.save();
        if (!options_lowGraphics) ctx.rotate(this.rPer * 2 * Math.PI);

        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 4.0;
        var shiftAm = 5.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        //sand 'outline'
        var strokeW = 4;
        ctx.fillStyle = col_ocean_sand;
        ctx.beginPath();
        ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
        ctx.fill();

        //ctx.fillStyle = "#73602A"; //98803A";
        var  bushBgCol = col_wat2;
        switch (this.curBiome) {
          case biome_jungle:
            bushBgCol = "#224643";
            break;
          case biome_arctic:
            bushBgCol = "#8da0d6";
            break;
          default:

        }
        
        if (this.curBiome == biome_arctic) ctx.fillStyle = "#8da0d6";
        else ctx.fillStyle = bushBgCol; //98803A";
        //ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(0, 0, Math.max(0, this.rad - strokeW + rShift), 0, Math.PI * 2);
        ctx.fill();

        if (!options_lowGraphics) {
          ctx.beginPath(); //top right
          ctx.arc(
            this.rad * 0.45,
            -this.rad * 0.45 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom right
          ctx.arc(
            this.rad * 0.5,
            this.rad * 0.5 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.4 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom left
          ctx.arc(
            -this.rad * 0.55 * 0.707,
            +this.rad * 0.55 * 0.707 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.arc(
            -this.rad * 0.75,
            -this.rad * 0.35 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.3 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath();
          ctx.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(
            this.rad - 20 * this.rPer,
            50 * this.rPer,
            10,
            0,
            2 * Math.PI
          );
          ctx.fill();
        }

        ctx.restore();
         */
      }
      break;
    //water pouring out of the ocean
    case o_biome_ocean_extraWater:
      {
        ctx.save();
        if (!options_lowGraphics) ctx.rotate(this.rPer * 2 * Math.PI);

        var rShift = 0;
        var tSinceSpawn = (timestamp - ocean_anim_startT) / 1000.0;
        var period = 5.0;
        var shiftAm = 5.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        var strokeW = 4;

        //sand 'outline'
        if (batchDrawOutline) {
          /*var strokeW = 4;
                    ctx.fillStyle = col_ocean_sand;
                    ctx.beginPath();
                    ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
                    ctx.fill();*/
        } else {
          ctx.fillStyle = col_ocean; //98803A";
          ctx.beginPath();
          ctx.arc(
            0,
            0,
            Math.max(0, this.rad - strokeW + rShift),
            0,
            Math.PI * 2
          );
          ctx.fill();

          if (!options_lowGraphics) {
            ctx.beginPath(); //little puddles around 'lake'
            ctx.arc(
              this.rad + 10 * this.rPer,
              50 * this.rPer,
              8,
              0,
              2 * Math.PI
            );
            ctx.fill();

            ctx.beginPath();
            ctx.arc(
              this.rad - 20 * this.rPer,
              50 * this.rPer,
              10,
              0,
              2 * Math.PI
            );
            ctx.fill();
          }
        }

        ctx.restore();
      }
      break;
      
      
                case o_biome_reef:
      {
        //draw ocean (just a rectangle)
        var waveDelta = 0;
        var tSinceSpawn = (timestamp - ocean_anim_startT) / 1000.0;
        var period = 5.0;
        var shiftAm = 0;
        waveDelta =
          shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        var beachW = 15.5;

        var oceanNum = this.x > gameW / 2 ? 1 : 0; //left vs. right ocean
        if (oceanNum == 1) {
          //RIGHT side =1, 0=right

          //dark rect outside ocean bounds
          /*var wid = 500.0;
                    var oAlpha = ctx.globalAlpha;
                    ctx.globalAlpha = oAlpha * 1.0;
                    ctx.fillStyle = "#16799F"; //"#3A4495";
                    ctx.fillRect((this.rectW / 2), (-this.rectH / 2), wid, this.rectH + 2 * wid); //right
                    //ctx.fillRect((-this.rectW/ 2) , (-this.rectH/ 2) - wid, this.rectW, wid + 1); //top
                    ctx.fillRect((-this.rectW / 2), (this.rectH / 2) - 0.5, this.rectW, wid + 1); //bottom*/

          //beach L
          /*ctx.globalAlpha = oAlpha * 1.0;
                    ctx.fillStyle = col_ocean_sand;
                    ctx.fillRect(-this.rectW / 2 - beachW, -this.rectH / 2, beachW * 2, this.rectH);
                    //beach top (beach aligns with top, fills gap)
                    ctx.fillRect(-this.rectW / 2 - beachW, -this.rectH / 2, this.rectW + beachW, beachW * 2);*/
          //main water
          ctx.fillStyle = col_reef;

          ctx.fillRect(
            -this.rectW / 2 + waveDelta,
            -this.rectH / 2 + waveDelta + beachW,
            this.rectW - waveDelta,
            this.rectH - waveDelta - beachW
          );
          //circle
          ctx.beginPath();
          ctx.arc(
            -this.rectW / 2 + 50,
            -this.rectH / 2 + 50,
            70.0 - waveDelta,
            0,
            2 * Math.PI
          );
          ctx.fill();

          var minusForEdge = 35;
          fillGrid(
            -this.rectW / 2 + minusForEdge,
            -this.rectH / 2 + minusForEdge,
            this.rectW / 2 - minusForEdge,
            this.rectH / 2 - minusForEdge,
            this.x,
            this.y
          );
        } else {
          //LEFT side

          //dark rect outside ocean bounds
          /*var wid = 1200.0;
                    var oAlpha = ctx.globalAlpha;
                    ctx.globalAlpha = oAlpha * 1.0;
                    ctx.fillStyle = "#16799F"; //"#3A4495";
                    ctx.fillRect((-this.rectW / 2) - wid, (-this.rectH / 2), wid + 0.5, this.rectH + 2 * wid); //left
                    //ctx.fillRect((-this.rectW/ 2) , (-this.rectH/ 2) - wid, this.rectW, wid + 2); //top
                    ctx.fillRect((-this.rectW / 2), (this.rectH / 2) - 0.5, this.rectW, wid + 1); //bottom*/

          //beach R (overlaps by beachW in)
          /*ctx.globalAlpha = oAlpha * 1.0;
                    ctx.fillStyle = col_ocean_sand;
                    ctx.fillRect(this.rectW / 2 - beachW, -this.rectH / 2, beachW * 2, this.rectH);
                    //beach top
                    ctx.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW + beachW, beachW * 2);*/
          //main water
          ctx.fillStyle = col_reef;
          waveDelta *= -1;
          ctx.fillRect(
            -this.rectW / 2,
            -this.rectH / 2 - waveDelta + beachW,
            this.rectW + waveDelta,
            this.rectH + waveDelta - beachW
          );

          var minusForEdge = 25;
          fillGrid(
            -this.rectW / 2 + minusForEdge,
            -this.rectH / 2 + minusForEdge,
            this.rectW / 2 - minusForEdge,
            this.rectH / 2 - minusForEdge,
            this.x,
            this.y
          );
        }
      }
      break;
  
          case o_biome_cold_ocean:
      {
        //draw ocean (just a rectangle)
        var waveDelta = 0;
        var tSinceSpawn = (timestamp - ocean_anim_startT) / 1000.0;
        var period = 5.0;
        var shiftAm = 0;
        waveDelta =
          shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        var beachW = 15.5;

        var oceanNum = this.x > gameW / 2 ? 1 : 0; //left vs. right ocean
        if (oceanNum == 1) {
          //RIGHT side =1, 0=right

          //dark rect outside ocean bounds
          /*var wid = 500.0;
                    var oAlpha = ctx.globalAlpha;
                    ctx.globalAlpha = oAlpha * 1.0;
                    ctx.fillStyle = "#16799F"; //"#3A4495";
                    ctx.fillRect((this.rectW / 2), (-this.rectH / 2), wid, this.rectH + 2 * wid); //right
                    //ctx.fillRect((-this.rectW/ 2) , (-this.rectH/ 2) - wid, this.rectW, wid + 1); //top
                    ctx.fillRect((-this.rectW / 2), (this.rectH / 2) - 0.5, this.rectW, wid + 1); //bottom*/

          //beach L
          /*ctx.globalAlpha = oAlpha * 1.0;
                    ctx.fillStyle = col_ocean_sand;
                    ctx.fillRect(-this.rectW / 2 - beachW, -this.rectH / 2, beachW * 2, this.rectH);
                    //beach top (beach aligns with top, fills gap)
                    ctx.fillRect(-this.rectW / 2 - beachW, -this.rectH / 2, this.rectW + beachW, beachW * 2);*/
          //main water
          ctx.fillStyle = col_cold_ocean;

          ctx.fillRect(
            -this.rectW / 2 + waveDelta,
            -this.rectH / 2 + waveDelta + beachW,
            this.rectW - waveDelta,
            this.rectH - waveDelta - beachW
          );
          //circle
          ctx.beginPath();
          ctx.arc(
            -this.rectW / 2 + 50,
            -this.rectH / 2 + 50,
            70.0 - waveDelta,
            0,
            2 * Math.PI
          );
          ctx.fill();

          var minusForEdge = 35;
          fillGrid(
            -this.rectW / 2 + minusForEdge,
            -this.rectH / 2 + minusForEdge,
            this.rectW / 2 - minusForEdge,
            this.rectH / 2 - minusForEdge,
            this.x,
            this.y
          );
        } else {
          //LEFT side

          //dark rect outside ocean bounds
          /*var wid = 1200.0;
                    var oAlpha = ctx.globalAlpha;
                    ctx.globalAlpha = oAlpha * 1.0;
                    ctx.fillStyle = "#16799F"; //"#3A4495";
                    ctx.fillRect((-this.rectW / 2) - wid, (-this.rectH / 2), wid + 0.5, this.rectH + 2 * wid); //left
                    //ctx.fillRect((-this.rectW/ 2) , (-this.rectH/ 2) - wid, this.rectW, wid + 2); //top
                    ctx.fillRect((-this.rectW / 2), (this.rectH / 2) - 0.5, this.rectW, wid + 1); //bottom*/

          //beach R (overlaps by beachW in)
          /*ctx.globalAlpha = oAlpha * 1.0;
                    ctx.fillStyle = col_ocean_sand;
                    ctx.fillRect(this.rectW / 2 - beachW, -this.rectH / 2, beachW * 2, this.rectH);
                    //beach top
                    ctx.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW + beachW, beachW * 2);*/
          //main water
          ctx.fillStyle = col_cold_ocean;
          waveDelta *= -1;
          ctx.fillRect(
            -this.rectW / 2,
            -this.rectH / 2 - waveDelta + beachW,
            this.rectW + waveDelta,
            this.rectH + waveDelta - beachW
          );

          var minusForEdge = 25;
          fillGrid(
            -this.rectW / 2 + minusForEdge,
            -this.rectH / 2 + minusForEdge,
            this.rectW / 2 - minusForEdge,
            this.rectH / 2 - minusForEdge,
            this.x,
            this.y
          );
        }
      }
      break;
      
        case o_biome_ocean:
      {
                  var myPlayer = gameObjsByID[myPlayerID];
        //draw ocean (just a rectangle)
        var waveDelta = 0;
        var tSinceSpawn = (timestamp - ocean_anim_startT) / 1000.0;
        var period = 5.0;
        var shiftAm = 0;
        waveDelta =
          shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        var beachW = -6.0;

        var oceanNum = this.x > gameW / 2 ? 1 : 0; //left vs. right ocean
        if (oceanNum == 1) {
          //RIGHT side =1, 0=right

          //dark rect outside ocean bounds
          /*var wid = 500.0;
                    var oAlpha = ctx.globalAlpha;
                    ctx.globalAlpha = oAlpha * 1.0;
                    ctx.fillStyle = "#16799F"; //"#3A4495";
                    ctx.fillRect((this.rectW / 2), (-this.rectH / 2), wid, this.rectH + 2 * wid); //right
                    //ctx.fillRect((-this.rectW/ 2) , (-this.rectH/ 2) - wid, this.rectW, wid + 1); //top
                    ctx.fillRect((-this.rectW / 2), (this.rectH / 2) - 0.5, this.rectW, wid + 1); //bottom*/

          //beach L
          /*ctx.globalAlpha = oAlpha * 1.0;
                    ctx.fillStyle = col_ocean_sand;
                    ctx.fillRect(-this.rectW / 2 - beachW, -this.rectH / 2, beachW * 2, this.rectH);
                    //beach top (beach aligns with top, fills gap)
                    ctx.fillRect(-this.rectW / 2 - beachW, -this.rectH / 2, this.rectW + beachW, beachW * 2);*/
          //main water
          if (myPlayer) {
            if (myPlayer.flag_indeepsea) {
              ctx.fillStyle = col_ocean2;
            } else {
              ctx.fillStyle = col_ocean;
            }
          } else {
          ctx.fillStyle = col_ocean; 
          }

          ctx.fillRect(
            -this.rectW / 2 + waveDelta,
            -this.rectH / 2 + waveDelta + beachW,
            this.rectW - waveDelta,
            this.rectH - waveDelta - beachW
          );
          //circle
          ctx.beginPath();
          ctx.arc(
            -this.rectW / 2 + 50,
            -this.rectH / 2 + 50,
            70.0 - waveDelta,
            0,
            2 * Math.PI
          );
          ctx.fill();

          var minusForEdge = 35;
          fillGrid(
            -this.rectW / 2 + minusForEdge,
            -this.rectH / 2 + minusForEdge,
            this.rectW / 2 - minusForEdge,
            this.rectH / 2 - minusForEdge,
            this.x,
            this.y
          );
        } else {
          //LEFT side

          //dark rect outside ocean bounds
          /*var wid = 1200.0;
                    var oAlpha = ctx.globalAlpha;
                    ctx.globalAlpha = oAlpha * 1.0;
                    ctx.fillStyle = "#16799F"; //"#3A4495";
                    ctx.fillRect((-this.rectW / 2) - wid, (-this.rectH / 2), wid + 0.5, this.rectH + 2 * wid); //left
                    //ctx.fillRect((-this.rectW/ 2) , (-this.rectH/ 2) - wid, this.rectW, wid + 2); //top
                    ctx.fillRect((-this.rectW / 2), (this.rectH / 2) - 0.5, this.rectW, wid + 1); //bottom*/

          //beach R (overlaps by beachW in)
          /*ctx.globalAlpha = oAlpha * 1.0;
                    ctx.fillStyle = col_ocean_sand;
                    ctx.fillRect(this.rectW / 2 - beachW, -this.rectH / 2, beachW * 2, this.rectH);
                    //beach top
                    ctx.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW + beachW, beachW * 2);*/
          //main water
          if (myPlayer) {
            if (myPlayer.flag_indeepsea) {
              ctx.fillStyle = col_ocean2;
            } else {
              ctx.fillStyle = col_ocean;
            }
          } else {
          ctx.fillStyle = col_ocean; 
          }

          waveDelta *= -1;
          ctx.fillRect(
            -this.rectW / 2,
            -this.rectH / 2 - waveDelta + beachW,
            this.rectW + waveDelta,
            this.rectH + waveDelta - beachW
          );

          var minusForEdge = 25;
          fillGrid(
            -this.rectW / 2 + minusForEdge,
            -this.rectH / 2 + minusForEdge,
            this.rectW / 2 - minusForEdge,
            this.rectH / 2 - minusForEdge,
            this.x,
            this.y
          );
        }
      }
      break;
    case o_beach:
      {
        //draw jagged un-even polygon
        ctx.fillStyle = col_ocean_sand;
        //ctx.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);

        var x_min = -this.rectW / 2; //of box to draw jagged around
        var x_max = this.rectW / 2;
        var y_min = -this.rectH / 2;
        var y_max = this.rectH / 2;

        //jagged vertically (top-bottom)
        ctx.beginPath();
        ctx.moveTo(x_min, y_min);
        var extraBeachW = 20.0;

        var offsetsLst = [-15, 10, -10, 12, 0, 5, -10, 5, -12, 5, 10, 0, -6];
        var oSpread = 45; //dist between offset points
        var oCount = 0;

        //clamp vars to keep drawing in room!
        var relMaxX = gameW - this.x;
        var relMinX = 0 - this.x;
        var relMaxY = gameH - this.y;
        var relMinY = 0 - this.y;
        //jagged: top-left to bottom-left
        var dy;
        var dx = x_min - extraBeachW;
        for (dy = y_min; dy < y_max; dy += oSpread) {
          ctx.lineTo(
            Math.min(relMaxX, Math.max(relMinX, dx + offsetsLst[oCount])),
            dy
          );
          oCount = (oCount + 1) % offsetsLst.length; //loop through offsets
        }

        ctx.lineTo(x_min, y_max); //connect to bl

        // jagged: bl - br
        dy = y_max + extraBeachW;
        for (dx = x_min; dx < x_max; dx += oSpread) {
          ctx.lineTo(
            dx,
            Math.min(relMaxY, Math.max(relMinY, dy + offsetsLst[oCount]))
          );
          oCount = (oCount + 1) % offsetsLst.length; //loop through offsets
        }
        ctx.lineTo(x_max, y_max); //connect to br

        //X jagged: br- tr
        dx = x_max + extraBeachW;
        for (dy = y_max; dy > y_min; dy -= oSpread) {
          ctx.lineTo(
            Math.min(relMaxX, Math.max(relMinX, dx + offsetsLst[oCount])),
            dy
          ); //clamp to keep drawing in-game
          oCount = (oCount + 1) % offsetsLst.length; //loop through offsets
        }
        ctx.lineTo(x_max, y_min); //to tr

        //X jagged: tr-tl
        dy = y_min - extraBeachW;
        for (dx = x_max; dx > x_min; dx -= oSpread) {
          ctx.lineTo(
            dx,
            Math.min(relMaxY, Math.max(relMinY, dy + offsetsLst[oCount]))
          );
          oCount = (oCount + 1) % offsetsLst.length; //loop through offsets
        }

        ctx.closePath(); //to tl
        ctx.fill();

        //draw dark grid
        //fillGrid(-this.rectW / 2, -this.rectH / 2, this.rectW / 2, this.rectH / 2);
      }
      break;
    case o_biome_desert:
      {
        var oAlpha = ctx.globalAlpha;
        //ctx.globalAlpha = oAlpha * 0.8;
        //var gradLen = 30.0;
        ctx.fillStyle = col_ocean_sand; // col_wat2;
        ctx.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);

        var minusForEdge = 35;
        fillGrid(
          -this.rectW / 2 + minusForEdge,
          -this.rectH / 2 + minusForEdge,
          this.rectW / 2 - minusForEdge,
          this.rectH / 2 - minusForEdge,
          this.x,
          this.y
        );
        
        
        
        

        //top of river
        var edgeW = 15;
        {
          ctx.fillStyle = col_ocean_sand;

          var x_min = -this.rectW / 2; //of box to draw jagged around
          var x_max = this.rectW / 2;
          var y_min = -this.rectH / 2 + 3.0;
          var y_max = -this.rectH / 2 - edgeW;

          //jagged vertically (top-bottom)
          ctx.beginPath();
          ctx.moveTo(x_min, y_min);
          var extraBeachW = 0.0;

          var offsetsLst = [
            -15,
            5,
            10,
            0,
            -10,
            3,
            12,
            4,
            0,
            3,
            5,
            -10,
            5,
            -12,
            5,
            10,
            0,
            -6
          ];
          var oSpread = 60; //dist between offset points
          var oCount = 0;

          //clamp vars to keep drawing in room!
          var relMaxX = gameW - this.x;
          var relMinX = 0 - this.x;
          var relMaxY = gameH - this.y;
          var relMinY = 0 - this.y;
          //jagged: top-left to bottom-left
          var dy;
          var dx = x_min - extraBeachW;
          /*for(dy=y_min; dy<y_max; dy+=oSpread){
                      ctx.lineTo(Math.min(relMaxX, Math.max(relMinX,dx+ offsetsLst[oCount])), dy);
                      oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                    }*/

          ctx.lineTo(x_min, y_max); //connect to bl

          // jagged: bl - br
          dy = y_max + extraBeachW;
          for (dx = x_min; dx < x_max; dx += oSpread) {
            ctx.lineTo(
              dx,
              Math.min(relMaxY, Math.max(relMinY, dy + offsetsLst[oCount]))
            );
            oCount = (oCount + 1) % offsetsLst.length; //loop through offsets
          }

          ctx.lineTo(x_max, y_max); //connect to br

          //X jagged: br- tr
          /*dx=x_max + extraBeachW;
                    for(dy=y_max; dy>y_min; dy-=oSpread){
                      ctx.lineTo(Math.min(relMaxX, Math.max(relMinX,dx+ offsetsLst[oCount])), dy); //clamp to keep drawing in-game
                      oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                    }*/
          ctx.lineTo(x_max, y_min); //to tr

          //X jagged: tr-tl
          /*dy=y_min - extraBeachW;
                    for(dx=x_max; dx>x_min; dx-=oSpread){
                      ctx.lineTo(dx , Math.min(relMaxY, Math.max(relMinY,dy+offsetsLst[oCount])));
                      oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                    }*/

          ctx.closePath(); //to tl

          ctx.fill();
        }
      }
      break;
      
          case o_biome_jungle:
      {
        var oAlpha = ctx.globalAlpha;
        //ctx.globalAlpha = oAlpha * 0.8;
        //var gradLen = 30.0;
        ctx.fillStyle = "#466953"; // col_wat2;
        ctx.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);

        var minusForEdge = 35;
        fillGrid(
          -this.rectW / 2 + minusForEdge,
          -this.rectH / 2 + minusForEdge,
          this.rectW / 2 - minusForEdge,
          this.rectH / 2 - minusForEdge,
          this.x,
          this.y
        );
        
        
        
        

        //top of river
        var edgeW = 15;
        {
          ctx.fillStyle = "#466953";

          var x_min = -this.rectW / 2; //of box to draw jagged around
          var x_max = this.rectW / 2;
          var y_min = -this.rectH / 2 + 3.0;
          var y_max = -this.rectH / 2 - edgeW;

          //jagged vertically (top-bottom)
          ctx.beginPath();
          ctx.moveTo(x_min, y_min);
          var extraBeachW = 0.0;

          var offsetsLst = [
            -15,
            5,
            10,
            0,
            -10,
            3,
            12,
            4,
            0,
            3,
            5,
            -10,
            5,
            -12,
            5,
            10,
            0,
            -6
          ];
          var oSpread = 60; //dist between offset points
          var oCount = 0;

          //clamp vars to keep drawing in room!
          var relMaxX = gameW - this.x;
          var relMinX = 0 - this.x;
          var relMaxY = gameH - this.y;
          var relMinY = 0 - this.y;
          //jagged: top-left to bottom-left
          var dy;
          var dx = x_min - extraBeachW;
          /*for(dy=y_min; dy<y_max; dy+=oSpread){
                      ctx.lineTo(Math.min(relMaxX, Math.max(relMinX,dx+ offsetsLst[oCount])), dy);
                      oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                    }*/

          ctx.lineTo(x_min, y_max); //connect to bl

          // jagged: bl - br
          dy = y_max + extraBeachW;
          for (dx = x_min; dx < x_max; dx += oSpread) {
            ctx.lineTo(
              dx,
              Math.min(relMaxY, Math.max(relMinY, dy + offsetsLst[oCount]))
            );
            oCount = (oCount + 1) % offsetsLst.length; //loop through offsets
          }

          ctx.lineTo(x_max, y_max); //connect to br

          //X jagged: br- tr
          /*dx=x_max + extraBeachW;
                    for(dy=y_max; dy>y_min; dy-=oSpread){
                      ctx.lineTo(Math.min(relMaxX, Math.max(relMinX,dx+ offsetsLst[oCount])), dy); //clamp to keep drawing in-game
                      oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                    }*/
          ctx.lineTo(x_max, y_min); //to tr

          //X jagged: tr-tl
          /*dy=y_min - extraBeachW;
                    for(dx=x_max; dx>x_min; dx-=oSpread){
                      ctx.lineTo(dx , Math.min(relMaxY, Math.max(relMinY,dy+offsetsLst[oCount])));
                      oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                    }*/

          ctx.closePath(); //to tl

          ctx.fill();
        }
      }
      break;

      
    case o_biome_arctic:
      {
        var oAlpha = ctx.globalAlpha;
        //ctx.globalAlpha = oAlpha * 0.8;
        //var gradLen = 30.0;
        //ctx.fillStyle = "#ececec"; // col_wat2;
          ctx.fillStyle = col_arctic // col_wat2;
        ctx.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);

        //ctx.fillStyle = col_ocean_sand;
        //ctx.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);

        var x_min = -this.rectW / 2; //of box to draw jagged around
        var x_max = this.rectW / 2;
        var y_min = this.rectH / 2 - 20;
        var y_max = this.rectH / 2;

        snowLandWidth = this.rectW;
        snowLandHeight = this.rectH;

        //jagged vertically (top-bottom)
        ctx.beginPath();
        ctx.moveTo(x_min, y_min);
        var extraBeachW = 20.0;

        var offsetsLst = [
          -15,
          5,
          10,
          0,
          -10,
          3,
          12,
          4,
          0,
          3,
          5,
          -10,
          5,
          -12,
          5,
          10,
          0,
          -6
        ];
        var oSpread = 60; //dist between offset points
        var oCount = 0;

        //clamp vars to keep drawing in room!
        var relMaxX = gameW - this.x;
        var relMinX = 0 - this.x;
        var relMaxY = gameH - this.y;
        var relMinY = 0 - this.y;
        //jagged: top-left to bottom-left
        var dy;
        var dx = x_min - extraBeachW;
        /*for(dy=y_min; dy<y_max; dy+=oSpread){
                    ctx.lineTo(Math.min(relMaxX, Math.max(relMinX,dx+ offsetsLst[oCount])), dy);
                    oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                }*/

        ctx.lineTo(x_min, y_max); //connect to bl

        // jagged: bl - br
        dy = y_max + extraBeachW;
        for (dx = x_min; dx < x_max; dx += oSpread) {
          ctx.lineTo(
            dx,
            Math.min(relMaxY, Math.max(relMinY, dy + offsetsLst[oCount]))
          );
          oCount = (oCount + 1) % offsetsLst.length; //loop through offsets
        }
        ctx.lineTo(x_max, y_max); //connect to br

        //X jagged: br- tr
        /*dx=x_max + extraBeachW;
                for(dy=y_max; dy>y_min; dy-=oSpread){
                    ctx.lineTo(Math.min(relMaxX, Math.max(relMinX,dx+ offsetsLst[oCount])), dy); //clamp to keep drawing in-game
                    oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                }*/
        ctx.lineTo(x_max, y_min); //to tr

        //X jagged: tr-tl
        /*dy=y_min - extraBeachW;
                for(dx=x_max; dx>x_min; dx-=oSpread){
                    ctx.lineTo(dx , Math.min(relMaxY, Math.max(relMinY,dy+offsetsLst[oCount])));
                    oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                }*/

        ctx.closePath(); //to tl
        ctx.fill();

        //draw dark grid
        var minusForEdge = 20;
        fillGrid(
          -this.rectW / 2 + minusForEdge,
          -this.rectH / 2 + minusForEdge,
          this.rectW / 2 - minusForEdge,
          this.rectH / 2 - minusForEdge,
          this.x,
          this.y
        );
      }
      break;
    case o_river:
      {
        var oAlpha = ctx.globalAlpha;
        var myPlayer = gameObjsByID[myPlayerID];
        //ctx.globalAlpha = oAlpha * 0.8;
        //var gradLen = 30.0;

          if (myPlayer) {
            if (myPlayer.flag_indeepsea) {
              ctx.fillStyle = col_ocean2;
            } else {
              ctx.fillStyle = col_ocean;
            }
          } else {
          ctx.fillStyle = col_ocean; 
          }
        ctx.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);

        //top of river
        var edgeW = 15;
        {
          if (myPlayer) {
            if (myPlayer.flag_indeepsea) {
              ctx.fillStyle = col_ocean2;
            } else {
              ctx.fillStyle = col_ocean;
            }
          } else {
          ctx.fillStyle = col_ocean; 
          }

          var x_min = -this.rectW / 2; //of box to draw jagged around
          var x_max = this.rectW / 2;
          var y_min = -this.rectH / 2 + 3.0;
          var y_max = -this.rectH / 2 - edgeW;

          //jagged vertically (top-bottom)
          ctx.beginPath();
          ctx.moveTo(x_min, y_min);
          var extraBeachW = 0.0;

          var offsetsLst = [
            -15,
            5,
            10,
            0,
            -10,
            3,
            12,
            4,
            0,
            3,
            5,
            -10,
            5,
            -12,
            5,
            10,
            0,
            -6
          ];
          var oSpread = 60; //dist between offset points
          var oCount = 0;

          //clamp vars to keep drawing in room!
          var relMaxX = gameW - this.x;
          var relMinX = 0 - this.x;
          var relMaxY = gameH - this.y;
          var relMinY = 0 - this.y;
          //jagged: top-left to bottom-left
          var dy;
          var dx = x_min - extraBeachW;
          /*for(dy=y_min; dy<y_max; dy+=oSpread){
                      ctx.lineTo(Math.min(relMaxX, Math.max(relMinX,dx+ offsetsLst[oCount])), dy);
                      oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                    }*/

          ctx.lineTo(x_min, y_max); //connect to bl

          // jagged: bl - br
          dy = y_max + extraBeachW;
          for (dx = x_min; dx < x_max; dx += oSpread) {
            ctx.lineTo(
              dx,
              Math.min(relMaxY, Math.max(relMinY, dy + offsetsLst[oCount]))
            );
            oCount = (oCount + 1) % offsetsLst.length; //loop through offsets
          }

          ctx.lineTo(x_max, y_max); //connect to br

          //X jagged: br- tr
          /*dx=x_max + extraBeachW;
                    for(dy=y_max; dy>y_min; dy-=oSpread){
                      ctx.lineTo(Math.min(relMaxX, Math.max(relMinX,dx+ offsetsLst[oCount])), dy); //clamp to keep drawing in-game
                      oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                    }*/
          ctx.lineTo(x_max, y_min); //to tr

          //X jagged: tr-tl
          /*dy=y_min - extraBeachW;
                    for(dx=x_max; dx>x_min; dx-=oSpread){
                      ctx.lineTo(dx , Math.min(relMaxY, Math.max(relMinY,dy+offsetsLst[oCount])));
                      oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                    }*/

          ctx.closePath(); //to tl

          ctx.fill();
        }

        {
          if (myPlayer) {
            if (myPlayer.flag_indeepsea) {
              ctx.fillStyle = col_ocean2;
            } else {
              ctx.fillStyle = col_ocean;
            }
          } else {
          ctx.fillStyle = col_ocean; 
          }

          var x_min = -this.rectW / 2; //of box to draw jagged around
          var x_max = this.rectW / 2;
          var y_min = this.rectH / 2 - 3.0;
          var y_max = this.rectH / 2 + edgeW;

          //jagged vertically (top-bottom)
          ctx.beginPath();
          ctx.moveTo(x_min, y_min);
          var extraBeachW = 0.0;

          var offsetsLst = [
            -15,
            5,
            10,
            0,
            -10,
            3,
            12,
            4,
            0,
            3,
            5,
            -10,
            5,
            -12,
            5,
            10,
            0,
            -6
          ];
          var oSpread = 60; //dist between offset points
          var oCount = 0;

          //clamp vars to keep drawing in room!
          var relMaxX = gameW - this.x;
          var relMinX = 0 - this.x;
          var relMaxY = gameH - this.y;
          var relMinY = 0 - this.y;
          //jagged: top-left to bottom-left
          var dy;
          var dx = x_min - extraBeachW;
          /*for(dy=y_min; dy<y_max; dy+=oSpread){
                      ctx.lineTo(Math.min(relMaxX, Math.max(relMinX,dx+ offsetsLst[oCount])), dy);
                      oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                    }*/

          ctx.lineTo(x_min, y_max); //connect to bl

          // jagged: bl - br
          dy = y_max + extraBeachW;
          for (dx = x_min; dx < x_max; dx += oSpread) {
            ctx.lineTo(
              dx,
              Math.min(relMaxY, Math.max(relMinY, dy + offsetsLst[oCount]))
            );
            oCount = (oCount + 1) % offsetsLst.length; //loop through offsets
          }

          ctx.lineTo(x_max, y_max); //connect to br

          //X jagged: br- tr
          /*dx=x_max + extraBeachW;
                    for(dy=y_max; dy>y_min; dy-=oSpread){
                      ctx.lineTo(Math.min(relMaxX, Math.max(relMinX,dx+ offsetsLst[oCount])), dy); //clamp to keep drawing in-game
                      oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                    }*/
          ctx.lineTo(x_max, y_min); //to tr

          //X jagged: tr-tl
          /*dy=y_min - extraBeachW;
                    for(dx=x_max; dx>x_min; dx-=oSpread){
                      ctx.lineTo(dx , Math.min(relMaxY, Math.max(relMinY,dy+offsetsLst[oCount])));
                      oCount=(oCount+1)%(offsetsLst.length); //loop through offsets
                    }*/

          ctx.closePath(); //to tl

          ctx.fill();
        }
        //draw dark grid
        var minusForEdge = 20;

        var theImg = getLoadedImg(
          "img/riverCurrent" + this.riverSpecT + ".png"
        );

        if (theImg) {
          var imgX = -this.rectW / 2;
          var imgWid = 100;
          var riverFlowSpeed = 120.0; //same as server! (but 60* larger)
          for (i = 0; i < (this.rectW/101.0638297872); i++) {
            var waveMoveTms =
              this.riverFlowSpeedX * (imgWid / riverFlowSpeed) * 500; //ms to one full movement- t=dist * v
            var fac0to1 =
              ((timestamp - this.spawnTime) % waveMoveTms) / waveMoveTms;
            var dist = imgWid;
            var waveX = imgX + dist * fac0to1;

            ctx.drawImage(theImg, waveX, -this.rectH / 2, imgWid, this.rectH);
            imgX += imgWid;
          }
        }

         fillGrid(-this.rectW / 2 + minusForEdge, -this.rectH / 2 + minusForEdge, this.rectW / 2 - minusForEdge, this.rectH / 2 - minusForEdge);
      }
      break;
    case o_biome_land:
      {
        ctx.fillStyle = col_landbiome;
        ctx.fillRect(-this.rectW / 2, -this.rectH / 2, this.rectW, this.rectH);

        //draw dark grid
        var minusForEdge = 45;
        fillGrid(
          -this.rectW / 2 + minusForEdge,
          -this.rectH / 2 + minusForEdge,
          this.rectW / 2 - minusForEdge,
          this.rectH / 2 - minusForEdge,
          this.x,
          this.y
        );
      }
      break;
    case o_rockHill:
      {
        //draw outline

        /*var theImg=getLoadedImg("img/rockhill.png");
                if(theImg){
                  //outline green
                  drawCircle(0,0,this.rad,col_outline_land);

                  var rad=this.rad - 2.5;
                  ctx.rotate(this.rPer * Math.PI * 2.0);
                  ctx.drawImage(theImg, -rad , -rad , 2 * rad, 2 * rad);
                    //console.log("drawing banana");
                }
                else*/
        //this.drawOutlinedCircle("", col_rockHill);

        var rockColor =
          this.curBiome == biome_desert ? col_rockHill_desert : col_rockHill;

        if (batchDrawOutline)
          //first draw outline circle (only)
          drawCircle(0, 0, this.rad, this.getOutlineColor());
        else drawCircle(0, 0, this.rad - 1.5, rockColor);
      }
      break;
    case o_lakeIsland:
      {
        ctx.fillStyle = col_ocean_sand;
        ctx.beginPath();
        ctx.arc(0, 0, Math.max(0, this.rad), 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#E4D04C";
        ctx.beginPath();
        ctx.arc(
          -5 + this.rPer * 10,
          -5 + this.rPer * 10,
          this.rad * 0.8,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
      break;
    case o_waterDrop:
      var rShift = 0;
      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame = getAnimFrame(tSinceSpawn, 1, 5, 2);
      var frame2 = getAnimFrame(tSinceSpawn, 1, 0.2, 2);

      ctx.globalAlpha = 0.5;
      drawCircle(0, 0, this.rad, col_wat1);

      var extraRotate = -(-0.2 + frame) * toRadians(90.0); //spin animation
      ctx.save();
      ctx.scale(1, 1 + frame2);
      ctx.globalAlpha = 0.3;

      ctx.rotate(extraRotate);
      drawCircle(0, 0, this.rad - frame, "#2CAAC4");
      ctx.restore();

      ctx.save();
      ctx.scale(1 + frame2, 1);
      ctx.globalAlpha = 0.1;

      ctx.rotate(extraRotate);
      drawCircle(0, 0, this.rad * 0.9 - frame, "white");
      ctx.restore();

      break;
      
          case o_lavaDrop:
      var rShift = 0;
      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame = getAnimFrame(tSinceSpawn, 1, 5, 2);
      var frame2 = getAnimFrame(tSinceSpawn, 1, 0.2, 2);

      ctx.globalAlpha = 0.5;
      drawCircle(0, 0, this.rad, "#F86A23");

      var extraRotate = -(-0.2 + frame) * toRadians(90.0); //spin animation
      ctx.save();
      ctx.scale(1, 1 + frame2);
      ctx.globalAlpha = 0.3;

      ctx.rotate(extraRotate);
      drawCircle(0, 0, this.rad - frame, "#E87721");
      ctx.restore();

      ctx.save();
      ctx.scale(1 + frame2, 1);
      ctx.globalAlpha = 0.1;

      ctx.rotate(extraRotate);
      drawCircle(0, 0, this.rad * 0.9 - frame, "white");
      ctx.restore();
            break;
      
    case o_water:
      {
        var col = this.curBiome == biome_arctic ? "#8fa4e0" : col_wat1;

        this.drawOutlinedCircle("", col);

        //console.log("spectype "+this.specType);
        /*else {
                  var theImg = getLoadedImg("img/santa/gifts/" + this.specType + ".png");
                  if (theImg) {
                    ctx.save();
                    var rad = this.rad;
                    ctx.rotate(this.angle);
                    ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
                    ctx.restore();
                    //console.log("drawing banana");
                  }
                }*/
      }
      break;

    case o_spit:
      {
        var col = this.curBiome == biome_arctic ? "#8fa4e0" : col_wat1;

        this.drawOutlinedCircle("", col);

        //console.log("spectype "+this.specType);
        /*else {
                  var theImg = getLoadedImg("img/santa/gifts/" + this.specType + ".png");
                  if (theImg) {
                    ctx.save();
                    var rad = this.rad;
                    ctx.rotate(this.angle);
                    ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
                    ctx.restore();
                    //console.log("drawing banana");
                  }
                }*/
      }
      break;
case o_gift:
    {
                 var theImg = getLoadedImg("img/santa/gifts/" + this.specType + ".png");
                  if (theImg) {
                    ctx.save();
                    var rad = this.rad;
                  ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
                    ctx.restore();
                    //console.log("drawing banana");
                  }
                }
            
    
    break;
      
     case o_explosion:
      {
        var theImg = getLoadedImg(
          "img/explosion" + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;
      
           case o_bigwhirlpool:
      {
        var theImg = getLoadedImg(
          "img/bigwhirlpool" + ".png"
        );

        if (theImg) {
          var rps = 5 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation3 = fac0to1 * 2 * Math.PI;

          //ctx.drawImage(tornado, -rad, -rad, 2 * rad, 2 * rad);
          //var rad = Math.max(0, this.rad - 30);

          var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
          var period = 2.2;
          var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
          var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);
          var rad = this.rad * 1.2;
          ctx.save();
          ctx.rotate(rotation3);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;
      
           case o_mandarin:
      {
        var theImg = getLoadedImg(
          "img/mandarin" + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;
      
      
                 case o_mandarinsplat:
      {
        var theImg = getLoadedImg(
          "img/mandarin1" + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;
      
      
           case o_stump:
      {
        var theImg = getLoadedImg(
          "img/treetrunk" + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;
      
           case o_fir:
      {
        var theImg = getLoadedImg(
          "img/mangrovetree" + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(0);
          ctx.drawImage(theImg, -rad * 1.0, -rad * 1.04, 2 * rad, 2 * rad);
          ctx.restore();
        }
        /*
                ctx.globalAlpha = 0.4;
                drawCircle(0, 0, this.rad, "#FF0000");
                ctx.globalAlpha = 1; 
                */
      }
      break;
      
    case o_sandbox:
      {
        /*
        var theImg = getLoadedImg(
          "img/sandbox" + ".png"
        );
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.rotate(0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
        */
      }
      break;
      
    case o_snowBall:
      {
        //DEBUG
        //this.drawOutlinedCircle("", "white");
        var theImg = getLoadedImg("img/snowball.png");
        if (theImg) {
          var rad = this.rad;
          ctx.rotate(this.rPer * Math.PI * 2.0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        } else this.drawOutlinedCircle("", "white");
      }
      break;

    case o_spiderWeb:
      {
        //console.log("spiderweb draw: handled by subcalss now!");
      }
      break;

    case o_poisonBall:
      {
        //DEBUG

        ctx.save();
        //outlineCol
        drawCircle(
          0,
          0,
          this.rad,
          !this.isEdibleOutlined()
            ? outlineColForBiome(this.curBiome)
            : col_edibleOutline
        );
        drawCircle(0, 0, Math.max(0, this.rad - 2), col_wat1);

        ctx.restore();

        //on fire glow

        //POISON outline 'glow'

        ctx.save();

        //effect also flashes
        var period = 1.2; //periodic func with time
        var p_min = 0.3,
          p_max = 0.7;
        var amp = 0.5 * (p_max - p_min);
        ctx.globalAlpha *=
          p_min +
          amp +
          amp *
            Math.sin(
              ((2.0 * Math.PI) / period) *
                ((timestamp - this.spawnTime) / 1000.0)
            );

        ctx.globalAlpha *= this.effA_poison;
        var effectRad = 2.6;
        drawCircle(0, 0, this.rad + effectRad, "#7FF600");

        ctx.restore();
      }
      break;
    case o_infectionDrop:
      {
        //DEBUG

        ctx.save();
        //outlineCol
        drawCircle(
          0,
          0,
          this.rad,
          !this.isEdibleOutlined()
            ? outlineColForBiome(this.curBiome)
            : col_edibleOutline
        );
        drawCircle(0, 0, Math.max(0, this.rad - 2), "#f87b05");

        ctx.restore();

        //on fire glow

        //POISON outline 'glow'

        ctx.save();

        //effect also flashes
        var period = 1.2; //periodic func with time
        var p_min = 0.3,
          p_max = 0.7;
        var amp = 0.5 * (p_max - p_min);
        ctx.globalAlpha *=
          p_min +
          amp +
          amp *
            Math.sin(
              ((2.0 * Math.PI) / period) *
                ((timestamp - this.spawnTime) / 1000.0)
            );

        ctx.globalAlpha *= this.effA_poison;
        var effectRad = 2.6;
        drawCircle(0, 0, this.rad + effectRad, "#f00");

        ctx.restore();
      }
      break;

   
    case o_fireTornado:
      {
        ctx.save();

        var tornado = getLoadedImg("img/firetornado.png");
        if (tornado) {
          var rad = this.rad;

          var rps = 60 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation1 = fac0to1 * 2 * Math.PI;

          var rps = 30 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation2 = fac0to1 * 2 * Math.PI;

          ctx.save();
          ctx.rotate(rotation1);
          //ctx.drawImage(tornado, -rad, -rad, 2 * rad, 2 * rad);

          var oldA = ctx.globalAlpha;
          ctx.globalAlpha = 1 * oldA;
          //var rad = Math.max(0, this.rad - 30);

          var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
          var period = 2.2;
          var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
          var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

          ctx.globalAlpha = 1;
          ctx.drawImage(tornado, -rad - xShift / 2.2, -rad, 2 * rad, 2 * rad);
          ctx.restore();

          ctx.save();
          ctx.rotate(rotation2);
          ctx.drawImage(tornado, -rad - xShift / 2.2, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }

        ctx.restore();
      }
      break;
  
    /*      this.drawOutlinedCircle("", "orange"); 

        //on fire glow

        //glow stronger/weaker like a fire
        var period = 1.0; //periodic func with time
        var p_min = 0.15,
          p_max = 0.8; //set these!
        var amp = 0.5 * (p_max - p_min);
        var flashA =
          p_min +
          amp +
          amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

        ctx.save();
       
     
        ctx.restore();

        //glow stronger/weaker like a fire
        var period = 1.0; //periodic func with time
        var p_min = 0.0,
          p_max = 1.1; //set these!
        var amp = 0.5 * (p_max - p_min);
        var moveA =
          p_min +
          amp +
          amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

        var imNum = Math.trunc(timestamp / 100) % 2;
        var theImg = getLoadedImg(
          imNum == 1 ? "img/fire.png" : "img/fire2.png"
        );

          ctx.save();
        if (theImg) {
          var imX = 0,
            imY = this.rad * 0.3;
          var imW = (this.rad * 2.0 * (2.0 + moveA * 2.0)) / 3.0,
            imH = this.rad * 2.0 * moveA;
          var imAnchorX = 0.0,
            imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          
      

          ctx.restore();
        }
      }
      */
  case o_fireBall:
      {
        //DEBUG

        //on fire glow

        //glow stronger/weaker like a fire
        var period = 1.0; //periodic func with time
        var p_min = 0.15,
          p_max = 0.8; //set these!
        var amp = 0.5 * (p_max - p_min);
        var flashA =
          p_min +
          amp +
          amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

        ctx.save();
        ctx.globalAlpha *= flashA;
        drawCircle(0, 0, Math.max(0, this.rad), "#F6EA65");
        ctx.restore();

        //glow stronger/weaker like a fire
        var period = 1.0; //periodic func with time
        var p_min = 0.85,
          p_max = 1.0; //set these!
        var amp = 0.5 * (p_max - p_min);
        var moveA =
          p_min +
          amp +
          amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

        var imNum = Math.trunc(timestamp / 300) % 2;
        var theImg = getLoadedImg(
          imNum == 1 ? "img/fire.png" : "img/fire2.png"
        );
        if (theImg) {
          var imX = 0,
            imY = this.rad * 0.3;
          var imW = (this.rad * 2.0 * (2.0 + moveA * 2.0)) / 3.0,
            imH = this.rad * 2.0 * moveA;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.save();
          if (theImg) {
            ctx.globalAlpha *= this.onFireEffA * moveA;
            ctx.drawImage(
              theImg,
              imX + imW * -imAnchorX,
              imY + imH * -imAnchorY,
              imW,
              imH
            );
          }

          ctx.restore();
        }
      }
      break;
    case o_animal:
      {
        //this.drawAnimal(f);
        //console.log("SHOULD BE HANDLED BY ANIMAL thisClass METHOD! Type? " + this.constructor.name);
        //this.drawPlayerText(f);
      }
      break;

    default:
      {
        //console.log("Unhandled obj " + this);
        //console.log("rect? " + this.isRectangle + " pos " + this.x + "," + this.y);
        //unknown type
        if (this.isRectangle) {
          ctx.fillStyle = "black"; // col_wat2;
          ctx.fillRect(
            -this.rectW / 2,
            -this.rectH / 2,
            this.rectW,
            this.rectH
          );
        } else this.drawOutlinedCircle("????", "black");
      }
      break;
  } //end of .oType switch()
};

//main draw method (NOT subclassable)
GameObj.prototype.beforeCustomDraw = function () {};
GameObj.prototype.draw = function(batchDrawOutline) {
  //console.log("drawing obj "+this.id);

  //");
  //apply interpolation (before translate)
  this.moveUpdF = this.moveUpdate();
this.beforeCustomDraw();
  ctx.save();
  ctx.translate(this.x, this.y);

  //zoom in/out effect
  if (this.doesDrawEffectScale && !options_lowGraphics) {
    var rShift = 0;
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var period = 1.5; // (this.oType == o_mushroom || this.oType == o_bigMushroom || this.oType == o_lillypad) ? 2.0 : 1.3; //slower warping
    var shiftAm = 0.1;
    if (this.drawEffectScale_Slow) {
      period = 2.5;
      shiftAm = 0.04;
    }
    rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

    ctx.scale(1.0 + rShift, 1.0 + rShift / 2);
  }

  var outlineCol = this.getOutlineColor();
  var strokeW = 2; //default

  //fade on death
  if (this.dead) ctx.globalAlpha *= 1 - this.moveUpdF;
  //fade in on spawn
  else {
    //if (oType != o_biome_ocean) {
    ctx.globalAlpha *= Math.min(
      1.0,
      (timestamp - this.spawnTime) / (lerpI * 1000.0)
    );
    //console.log("a * "+Math.min(1.0, (timestamp-this.spawnTime)/(lerpI*1000.0)));
  }

  //draw method without applying extra scaling

  this.customDraw(batchDrawOutline);

  //hurt red glow
  if (this.flag_hurt) {
    ctx.fillStyle = "rgba(255,0,0,0.3)";
    ctx.beginPath();
    ctx.arc(0, 0, Math.max(0, this.rad - strokeW), 0, Math.PI * 2);
    ctx.fill();
  }

  //draw HP bar
  if (!this.flag_invisible) {
  this.drawHealthBar();
  }

  ctx.restore(); //restore from fade
};

GameObj.prototype.drawHealthBar = function() {
  ctx.save();
  //ease vars
  var hpBarA_n = timestamp < this.hpBarTimeoutT ? 1.0 : 0.0;
  this.hpBarA += (hpBarA_n - this.hpBarA) * 0.04;

  if (this.hpBarA > 0.001) {
    this.hpPer += (this.hpPer_n - this.hpPer) * 0.1;

    //draw bar
    var eyeS = Math.max(1.0, this.rad / 25.0);
    var barW = 20.0 * eyeS,

      barH = 5 * eyeS;
                        if (this.animalType == a_bigmouse) {
      barW = this.rad * 1.5
            }  
    
    var bx = 0,
      by = -this.rad - 10 * eyeS;
    ctx.globalAlpha *= this.hpBarA; //bar bg
    ctx.fillStyle = "rgba(0,0,0,0.35)";

    ctx.fillRect(bx - barW / 2, by - barH / 2, barW, barH);
            

    //ctx.globalAlpha = this.hpBarA * f;

    ctx.fillStyle = "#16D729"; //bar fill
        if (this.oType == o_animal){
          var red1 = 22;
          var red2 = 255;
          var blue1 = 41;
          var blue2 = 0;
          var green1 = 215;
          var green2 = 0;
          mix = 1 - this.hpPer/100
  /*
          var R = red1*mix+red2*(1-mix)
          var G = green1*mix+green2*(1-mix)
          var B = blue1*mix+blue2*(1-mix)
           */
     var R = red1 + (red2 - red1)*mix
     var G = green1 + (green2 - green1)*mix
     var B = blue1 + (blue2 - blue1)*mix
            ctx.fillStyle = "rgb("+R+", "+G+", "+B+")";
        }
        if (this.oType == o_animal){
    if (this.hpPer > 60) {
    ctx.fillStyle = "#16D729"; //good bar fill
  } else if (this.hpPer > 40) {
    ctx.fillStyle = "#FF7007"; //good bar fill
  } else {
       ctx.fillStyle = "#EF3C31"; //good bar fill 
  }
        }
    ctx.fillRect(
      bx - barW / 2,
      by - barH / 2,
      barW * (this.hpPer / 100.0),
      barH
    );
  }
  ctx.restore(); //restore from fade

  if (this.id == myPlayerID) {
    this.drawInfectionBar();
if (this.animalType == a_catfish) {
    this.drawCatfishBar();
       }
  }

};

GameObj.prototype.drawCatfishBar = function() {
  if (this.specType2 > 0) {
	    var eyeS = Math.max(1.0, this.rad / 25.0);
	      var by = -this.rad - 10 * eyeS;
	     var barH = 5 * eyeS;
	    if (this.hpBarA <= 0.001) {
	      this.drawBar("yellow", 1, this.specType2 * 100/3, 10);
	    } else {
    this.drawBar("yellow", 1, this.specType2 * 100/3, by - barH / 2 + 15);
              }
  }
};

GameObj.prototype.drawInfectionBar = function() {
  var infectionBarA_n = timestamp < this.infectionBarTimeoutT ? 1.0 : 0.0;
  this.infectionBarA += (infectionBarA_n - this.infectionBarA) * 0.04;
  if (this.infectionBarA > 0.001) {
    this.infectionPer += (this.infectionPer_n - this.infectionPer) * 0.1;

    this.drawBar("red", this.infectionBarA, this.infectionPer, 10);
  }
};

GameObj.prototype.drawBar = function(color, hpBarA, hpPer, yPoz) {
  ctx.save();

  //draw bar
  var eyeS = Math.max(1.0, this.rad / 25.0);
  var barW = 20.0 * eyeS,
    barH = 2.5 * eyeS ;
  var bx = 0,
    by = -this.rad - yPoz * eyeS;
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.fillRect(bx - barW / 2, by - barH / 2, barW, barH);
  
  //ctx.globalAlpha = this.hpBarA * f;
  ctx.globalAlpha = 0.7;
  ctx.fillStyle = color; //bar fill
  ctx.fillRect(bx - barW / 2, by - barH / 2, barW * (hpPer / 100.0), barH);
  ctx.restore(); //restore from fade
};
GameObj.prototype.drawChat = function() {
  if (this.chatLines.length < 1) return;

  ctx.save();
  //set text settings
  ctx.font = "10px Arial";
  ctx.lineWidth = 1;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle"; //vertical center

  var baseY = this.hpBarA > 0.01 ? -10.0 : 0.0; //raise chat when hp bar is open
  var toDelete = [];
  for (var i = this.chatLines.length - 1; i >= 0; i--) {
    var aLine = this.chatLines[i];
    var textY = (this.chatLines.length - 1 - i) * -13.0 + baseY; //draw earlies text at bottom

    //time-out text
    var idealA = timestamp > aLine.chatFadeT ? 0.0 : 1.0;
    aLine.chatA += (idealA - aLine.chatA) * 0.1;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    if (aLine.chatA < 0.02) {
      if (idealA < 0.02) aLine.chatTxt = ""; //timed out text
      toDelete.push(i); //push index
      continue;
    }
    //green chat bg
    var text_w = ctx.measureText(aLine.chatTxt).width;
    var text_h = 10.0; //same as font height
    var padx = 1,
        
      pady = 1;
        if (!this.flag_invisible) {
    ctx.globalAlpha = 0.8 * aLine.chatA;
    ctx.fillStyle = outlineColForBiome(this.curBiome); //"white";

    ctx.fillRect(
      this.x - padx - text_w / 2,
      textY + this.y - this.rad - 10 - text_h / 2 - pady,
      text_w + padx * 2,
      text_h + pady * 2
    );

    ctx.fillStyle = "#F1C34C";
    if (!options_lowGraphics) {
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.shadowColor = "black";
    }
    
    ctx.globalAlpha = aLine.chatA;
    ctx.fillText(aLine.chatTxt, this.x, textY + this.y - this.rad - 10);
        }
  }

  //remove timed-out text
  for (var i = 0; i < toDelete.length; i++) {
    this.chatLines.splice(toDelete[i], 1);
  }
  ctx.restore();
};

GameObj.prototype.getOutlineColor = function() {

  if (this.isEdibleOutlined()) {
      if (!this.alwaysPlainOutline) {
    return col_edibleOutline;
      }
  }
  //red outline for dangerous animals
  if (
    this.oType == o_animal &&
    dangerAniTypes[this.animalType - 1] > 0 &&
    this.id != myPlayerID
  ) {
         if (!this.alwaysPlainOutline) {
    return col_dangerOutline;
         }
  }
  //plain outline (based on biome)
  var biome = this.curBiome;
  
  if (this.flag_inWater) biome = biome_ocean;
  else if (this.flag_inLava && !this.flag_inJungle) return "#c64a00";
  else if (biome == 3 && !this.flag_inJungle) return "#c64a00";
    else if (biome == 5) return "#334D3D";
else if (this.flag_inDesert) return "#a59215"
else if (this.flag_inJungle) return "#334D3D"
  else if (this.flag_inColdOcean) return "#66A7C3"
    else if (this.flag_inReef) return col_outline_reef
  
  
  
  
  return outlineColForBiome(biome);
};



GameObj.prototype.isEdibleOutlined = function() {
  if (this.oType == o_animal)
    return edibAniTypes[this.animalType - 1] > 0 && this.id != myPlayerID;
  else return edibleObjTypes[this.oType - 1] > 0;
};
GameObj.prototype.gotChat = function(chatTxt) {
  if (this.chatLines) {
    this.chatLines.push({
      chatTxt: chatTxt,
      chatFadeT: timestamp + 4000,
      chatA: 0.0
    });
    if (this.chatLines.length > 5)
      this.chatLines.splice(this.chatLines.length - 1, 1); //remove last chat item
  }
};

GameObj.prototype.drawOutlinedCircle = function(nm, col) {
  var outlineCol = this.getOutlineColor();

  //green outline (without stroke- optimized)
  var strokeW = 1.5;
  if (!(options_lowGraphics && outlineCol == col_outline_land))
    //dont draw plain outlines!
    drawCircle(0, 0, this.rad, outlineCol);
  drawCircle(0, 0, Math.max(0, this.rad - strokeW), col);
};
GameObj.prototype.drawfireCircle = function(col) {
 

  //green outline (without stroke- optimized)
  var strokeW = 1.5;
    //dont draw plain outlines!

  drawCircle(0, 0, Math.max(0, (this.rad) - this.rad / 8), col);
};
//moves the obj,  interpolating between udpates
GameObj.prototype.moveUpdate = function() {
  var a = (timestamp - this.updateTime) / 1000 / lerpI;
  a = 0 > a ? 0 : 1.0 < a ? 1.0 : a; //clamp from 0-1
  /*if (a > 1.0) { //lag smoothing?{
        a = Math.pow(a, 0.25);
    }*/

  if (this.dead && a >= 1) {
    //dead, done anim
    remGameObjs.push(this); //delete after draw loop
  }

  //  console.log("a=" + a);
  this.x = a * (this.nx - this.ox) + this.ox;
  this.y = a * (this.ny - this.oy) + this.oy;

  //if(this.oType==o_abilityGObj)
  //console.log("(dead? "+this.dead+") a= "+a+"x="+this.x+" nx "+this.nx+" ox "+this.ox);
if (this.oType == 116) {
  if (this.nRad < this.rad) {
          this.rad += (this.nRad - this.rad) * 0.1;
  } else {
        this.rad = this.nRad
  } //a * (this.nRad - this.oRad) + this.oRad;;
} else {
  this.rad += (this.nRad - this.rad) * 0.1; //a * (this.nRad - this.oRad) + this.oRad;;
}
  if (this.angle != undefined) {
    //ease angle rot
    //var idealA = this.angle + this.angleDelta
    //var oldA =
    //this.angle = a * (this.angleDelta) + this.oAngle; //(9 * this.angle + idealA) / 10.0;
    var dChange = this.angleDelta * 0.1; //* a;
    this.angleDelta -= dChange;
    this.angle += dChange;
    //new accurate interpolation
    //this.angle=this.oAngle+this.angleDelta*a;
  }
  return Math.min(1.0, a); //re-use move factor
};

//read data that is only written for a certain object type (oType) / oType class
GameObj.prototype.readCustomData_onUpdate = function(msg) {
  //console.log("Gameobj read update custom data id "+this.id);
};

//read data that is only written for a certain object type (oType) / oType class
//custom data for this class (must be matched by server-side write of this data!)
GameObj.prototype.readCustomData_onNewlyVisible = function(msg) {
  //special vars

  switch (this.oType) {//setspectype
    //case o_fruitthrow:
       case o_river:
    case o_poisonBerry:
    case o_meatLarge:
    case o_meatMedium:
    case o_meatSmall:
    case o_raspberrynew:
     case o_gift:
     case o_bigHidingHole:
     case o_fireBall:
     case o_sinkHole:
     this.specType = msg.readUInt8();
  }
  
  if (this.oType == o_river) {
    // river flow direction
    var riverSpecT = this.specType; // msg.readUInt8();
    
    this.riverSpecT = riverSpecT;
    this.riverFlowSpeedX = riverSpecT ? 1.0 : -1.0;
  }

  // if (this.oType == o_poisonBerry) {
  //   // which color this berry is?
  //   this.specType = msg.readUInt8();
  // }

  /*if (this.oType == o_spiderWeb) {
      //1 or 9, is the web transparent
      this.specType = msg.readUInt8();
    }*/
};

//overridden by Animal, makes code neat
GameObj.prototype.setObjTypes = function(oType, secondaryType) {
  this.oType = oType;
};

//setup from newly visible message
GameObj.prototype.worldUpd_readMsgNewlyVisible = function(
  msg,
  oType,
  secondaryType
) {
  //thisClasses eg. Aniaml have a seconary type 'animalType' that affects class
  this.setObjTypes(oType, secondaryType);
//console.log(msg.data.getUint32(19, false))

  var nw_id = msg.readUInt32();
  var nw_rad = msg.readUInt16() / 4.0;
  var nw_x = msg.readUInt16() / 4.0;
  var nw_y = msg.readUInt16() / 4.0;

  this.id = nw_id;
  this.ox = this.x = this.nx = nw_x; //set initial vars here
  this.oy = this.y = this.ny = nw_y; //'new' vars will be set after create
  this.nRad = nw_rad;
  this.oRad =this.rad = 0; //default: objs animate in from 0 rad (on spawn)

  //these objs start at full rad (no anim)
  if (
    oType == o_biome_poison ||
    oType == o_biome_volcano ||
    oType == o_mudSpot ||
    oType == o_arcticIce ||
    oType == o_lake ||
    oType == o_abilityGObj ||
    oType == o_hill ||
    oType == o_iceberg ||
    oType == o_rockHill ||
    oType == o_fruitTree ||
    oType == o_lakeIsland
  ) {
    this.animateRadOnSpawn = false;
  }

  if (!this.animateRadOnSpawn) this.oRad = this.rad = nw_rad;

  // cur biome of the obj (since we have more biomes so they dont fit in 0-3 bits)
  var f_curBiome = msg.readUInt8();
  //read flags
 /* var oFlags = msg.readBitGroup();
  var f_spawnedFromID = oFlags.getBool(); //bit_get(flags, 0) > 0;
  var f_rectObj = oFlags.getBool();
  var f_sendsAngle = oFlags.getBool();*/
   //var oFlags = msg.readBitGroup();
  var f_spawnedFromID = msg.readUInt8() == 1;
  var f_rectObj = msg.readUInt8() == 1;
  var f_sendsAngle = msg.readUInt8() == 1;
  //var f_curBiome = oFlags.getInt0to3(); //2 * bit_get(flags, 3) + 1 * bit_get(flags, 2); //encoded 2-bit num
  
  this.curBiome = f_curBiome;
  this.objGetsAngleUpdate = f_sendsAngle;

  //show animation spawning from original obj
  var spawnFromObj = null;
  if (f_spawnedFromID) {
    spawnFromObj = gameObjsByID[msg.readUInt32()];
  }
  if (spawnFromObj) {
    this.updateTime = timestamp;
    this.nx = this.x;
    this.ny = this.y;
    this.ox = spawnFromObj.x;
    this.oy = spawnFromObj.y;
    this.x = spawnFromObj.x;
    this.y = spawnFromObj.y;
  }

  //rectangle objs (eg. biomes)
  if (f_rectObj) {
    this.isRectangle = true;
    this.rectW = msg.readUInt16();
    this.rectH = msg.readUInt16();

  }

  //this.objGetsAngleUpdate = msg.readUInt8() == 1;
  if (this.objGetsAngleUpdate) {
 
    var angleDeg = msg.readUInt8() * 3.0;
	//console.log("angle: " + angleDeg/3)  //heree
    var angleCorrection = this.oType == o_abilityGObj ? 180 : 90;
    this.angle = toRadians(angleDeg + angleCorrection);
    //this.specType = msg.readUInt8();
  }

  //now, read custom data!
 
  this.readCustomData_onNewlyVisible(msg);
};

GameObj.prototype.worldUpd_readMsgUpdate = function(msg) {
  var px = msg.readUInt16() / 4.0;
  var py = msg.readUInt16() / 4.0;
  var rad = msg.readUInt16();

  this.specType = msg.readUInt16();
  this.specType2 = msg.readUInt16();
 /* //universal obj 'flags'
  var objFlags = msg.readBitGroup();
  var flag_sendHp = objFlags.getBool();
  var flag_flashHurt = objFlags.getBool();
*/
  
  //var objFlags = msg.readUInt8();
  var flag_sendHp = msg.readUInt8() == 1;
  var flag_flashHurt = msg.readUInt8() == 1;
  
  this.updateTime = timestamp; //only set timestamp for moving items
  this.ox = this.x;
  this.oy = this.y;
  this.nx = px;
  this.ny = py;
  this.oRad = this.rad;
  this.nRad = rad;

  this.flag_hurt = flag_flashHurt;
  if (flag_sendHp) {
    //update/show health bar
    var hpPer = msg.readUInt8();
    if (this.hpBarA < 0.001) {
      //bar appeared, instantly set to full hp amount
      this.hpPer = hpPer;
    }
    this.hpPer_n = hpPer;
    //this.hpBarA_n = 1.0;

    //if(this.oType!=o_animal){
    //non-animals get quickly-dissapearing hp bars
    this.hpBarTimeoutT = +new Date() + 3000.0;
    //}
  } else {
    this.hpBarTimeoutT = +new Date(); //hp bar timed out
  }

  if (this.objGetsAngleUpdate) {
    var angleDeg = msg.readUInt8() * 3.0;
       
    
    var angleCorrection = this.oType == o_abilityGObj ? 180 : 90;
    this.angle = toRadians(angleDeg + angleCorrection);
	//console.log("angle1: " + angleDeg)
    // this.specType = msg.readUInt8();
  }

  //CUSTOM DATA!
  this.readCustomData_onUpdate(msg);

  this.firstPosUpd = false;
};

GameObj.prototype.worldUpd_readMsgRemovedObj = function(msg) {
  var killerId = msg.readUInt32();
  var killerObj = gameObjsByID[killerId] 

  this.dead = true;
  this.updateTime = timestamp; //count as update, kill on next upd

  if (this.oType == o_abilityGObj||this.oType == o_particles) {
    //no radius animation
    this.ox = this.x;
    this.oy = this.y;
    //this.oRad = this.rad;
    
    this.nx = this.x;
    this.ny = this.y;
    if(this.abilityType == ability_freezeprey){
    this.nx = killerObj.nx; //move to future pos
    this.ny = killerObj.ny;
    }
  } else if (killerObj) {
    //kill with animation
    this.ox = this.x;
    this.oy = this.y;
    this.oRad = this.rad;
    this.nx = killerObj.nx; //move to future pos
    this.ny = killerObj.ny;
    this.nRad = Math.min(this.rad, killerObj.rad);

    //fade possible hp bar
    this.hp_n = 0;
  } else {
   
    //kill with animation
 
    this.ox = this.x;
    this.oy = this.y;
    this.oRad = this.rad;
    this.nx = this.x;
    this.ny = this.y;
     this.nRad = 0
  }
};

//call on draw
GameObj.prototype.updateZ = function() {
  switch (this.oType) {
    case o_biome_land:
      this.z = -220;
      break;
    case o_biome_desert:
      this.z = -210;
      break;
          case o_biome_reef:
            this.z = -203;
      break;
    case o_biome_cold_ocean:
            this.z = -203;
      break;
          case o_biome_ocean:
            this.z = -203;
      break;
    case o_biome_jungle:
      this.z = -210;
      break;
    case o_biome_arctic: //for water to pour on top
      this.z = -210;
      break;
    case o_biome_volcano:
       this.z = -200
      break;
    case o_biome_poison:
      this.z = 20;
      break;
    case o_beach:
      this.z = -202;
      break;
    case o_biome_ocean_extraWater:
      this.z = -201;
      break;



    case o_river:
    case o_atoll:
    case o_lake:
 this.z = -157
      break;
      
    case o_lavaLake:
 this.z = -156.999
      break;    
    case o_bog:
      this.z = 21;
      break;
case o_cakesplash:
                  this.z = 10001;
            break;
    case o_cakesplat:
            this.z = -157;
      break;

    case o_mudSpot:
      this.z = -158;
      break;

    //on top of volcano biome, under everything else
    case o_volcano:
        this.z = 999.9;
      break;
    case o_arcticIce:
      this.z = -156; 
      break;
    case o_waterSpot:
      this.z = -155;
      break;
    case o_lakeIsland:
      this.z = -154;
      break;

    case o_abilityGObj:
      if (
        this.type == ability_eagleAttack ||
        this.type == ability_falconAttack ||
        this.type == ability_cobraVenomSpit ||
        this.type == ability_thunderbirdAttack ||
        this.type == ability_owlAttack ||
        this.type == ability_targetCircle ||
        this.type == ability_bearSlash ||
        this.type == ability_cakebomb
      ) {
        this.z = 100002;
        break;
      }

      //if(this.type==ability_krakenSpec || this.type==ability_stingRayShock || this.type==ability_squidInk)
      if (
        this.type == ability_iceSlide ||
        this.type == ability_clawSlash ||
        this.type == ability_backLegKick ||
        this.type == ability_clickbait ||
        this.type == ability_whaleTailHit ||
        this.type == ability_giantink ||
        this.type == ability_finalhit ||
        this.type == ability_alligatorslap||
        this.type == ability_elephantTrunkSmack ||
        this.type == ability_crabSmash ||
        this.type == ability_crocWaterGrab ||
        this.type == ability_alligatorgrab ||
        this.type == ability_boaSuffocate ||
        this.type == ability_sabertoothJawAttack ||
        this.type == ability_trexShake ||
        this.type == ability_tigerSlash ||
        this.type == ability_pounce ||
        //this.type == ability_tigerJump ||
        this.type == ability_giraffeStomp ||
        this.type == ability_zebraKick ||
        this.type == ability_passivekick ||
        this.type == ability_sharkBite ||
        this.type == ability_fart
      )
        this.z = 10001;
      //above all
      else if (this.type == ability_orcaWave) this.z = 1002;
                        else if (this.type == ability_dam || this.type == ability_suction) this.z = 999.9998; 
      
                              else if (this.type == ability_flametrail) this.z = 999.9999; 
      
      
                  else if (this.type == ability_kamui2) this.z = 2000; 
      
            else if (this.type == ability_tentaclegrab) this.z = 999.8; 
      
                else if (this.type == ability_snakewrap) this.z = 1400;
      
                      else if (this.type == ability_snakehead) this.z = 1400;
      
      else if (this.type == ability_burningstar) this.z = 1002;
      //above lake island, above hills
      else if (this.type == ability_waterSplash) this.z = 10001;
      
            else if (this.type == ability_limitlessorb) this.z = 10001;
      
            else if (this.type == ability_eruption) this.z = 10001;
      //above lake island, above hills
      else if (this.type == ability_pelican) {
        if (this.specType == 1) this.z = 10001;
        //above lake island, above hills
        else if (this.specType == 2)
          // beak with animal
          this.z = 1013; // below animal grabbed
      } else this.z = -152; //below everything, but above ground stuff
      break;
    case o_hidingHoleOcean:
      this.z = -150;
      break;

    case o_bigHidingHole:
    
      this.z = -101;
        
      break;
    case o_hidingHole:
      this.z = -100;
      break;
          case o_astralStone:
      this.z = 1100;
      break
    case o_healingStone:
      this.z = 1002;
      break;
    case o_iceberg:
    case o_hill:
      this.z = 999;
      break;
case o_spawnEgg:
    case o_eastereggs:
      this.z = 999.9999;
      break;
case o_battleroyale:
      this.z = 100002;
      break;
      case o_fir:
      this.z = 1300;
      break;
      
      case o_sandbox:
      this.z = 100000;
      break;
      
      case o_sleigh:
          this.z = -1 
          break;
         case o_meatball: 
    case o_poisonBerry:
    case o_arcticNut:
    case o_cloudBerry:
    case o_pear:
    case o_kelp:
    case o_seaweed:
        this.z = 1001
        break;
           case o_gift:
        this.z = 999.6 
        break;
    case o_quill:
    case o_fruitTree:
      this.z = 999.1; //above hill
      break;
    case o_honeyComb:
      this.z = 1002; //above all hills, just below drag
      break;
    case o_beeHive:
    case o_rockHill:
      this.z = 999.4; 
      break;
       
       case o_turkishflag:
      this.z = -1; 
      break;
    
    case o_spiderWeb:
      this.z = 1003;
      break;

    case o_berryBush: //above hill, and above tree-climbers
    case o_planktonBush:
      this.z = 1002 + this.rad;
      break;

    case o_hidingBush: //bushes hide everything
      this.z = 10000;
      break;

               case o_star: //bushes hide everything
      this.z = 10000;
      break;
      
                     case o_shard: //bushes hide everything
      this.z = 10000;
      break;
      
          case o_hidebush: //bushes hide everything
      this.z = 10000;
      break;
                case o_bombexplosion:
          case o_lavaDrop:
      this.z = 2000; // splashes on top of all objects
      break;
          case o_impact:
    case o_waterDrop:
      this.z = 1015; // splashes on top of all objects
      break;

      case o_mandarin:
            this.z = 1000;
      break;
   case o_mandarinsplat:
      this.z = 0;
      break;
    case o_fruitthrow:
          case o_lotus:
    case o_coconut:

    case o_banana: //fruit shows up on top
      this.z = 1006;
      break;
    case o_fireTornado:
      this.z = 1002; 
      break;
   case o_firerange:
   this.z = 1005; //fireball just under dragon
   break;
    case o_sharinganeye:
      this.z = -1
      break;
          case o_storm:
        this.z = 9999;
         break;
      
      case o_explosion:
   this.z = 1005; //fireball just under dragon
   break
            case o_bigwhirlpool:
   this.z = 149.5; //fireball just under dragon
   break
         
    case o_fireBall:
this.z = 1005; //fireball just under dragon
    case o_poisonBall:
      this.z = 1006; //fireball just under dragon
      break;
      


    case o_animal:
      if (this.flag_flying) {
        this.z = 10000;

        if (!this.flag_isGrabbed) this.z += this.rad;
        if (this.specType2 == 100) {
          // grabed by pelican
          this.z = 1014; // below water splash
        }
      } else if (this.flag_swallowed) {
     this.z = 1013.9;
      } else {
        // if not flying then

        // if under water

        if (
          this.flag_underWater ||
          (this.flag_usingAbility && (this.animalType == a_mole || this.animalType == a_testsnake))
        ) {
          this.z = -100; //above lake and lake island
        } else {
          // not in under water!

          if (
            this.flag_usingAbility &&
            (this.animalType == a_eagle || this.animalType == a_pelican)
          )
            this.z = 10001 + this.rad/1000;
          //flies even above blackdragon
          else if (
           !this.flag_inTree &&
            this.flag_canClimbHill  ||
            this.animalType == a_bear ||
            this.animalType == a_rhino ||
            this.animalType == a_gorilla ||
            this.animalType == a_polarBear ||
            this.animalType == a_crab ||
            this.animalType == a_turtle ||
            this.animalType == a_seal ||
            this.animalType == a_walrus ||
            this.animalType == a_yeti ||
            this.animalType == a_menhir ||
            this.animalType == a_sabertoothTiger ||
            this.animalType == a_boaConstrictor ||
            this.animalType == a_giantSpider 
              
          )
            this.z = 1000 + this.rad/1000;


          else if (this.animalType == a_blackDragon) this.z = 1500 + this.rad/1000;
           else if (this.flag_inTree) this.z = 1301 + this.rad/1000;   
          //flies above hill, water/food also
    else if (this.animalType == a_dinoMonster) this.z = 1002 + this.rad/1000;
          else if (this.animalType == a_iceMonster) this.z = 1003 + this.rad/1000;
          
           else if (this.animalType == a_seaMonster) this.z = 1004 + this.rad/1000;
             else if (this.animalType == a_landMonster) this.z = 1005 + this.rad/1000;
    
          //flies above hill, water/food also
          else if (this.animalType == a_trex)
            this.z = 1008 + (this.flag_usingAbility ? 1 : 0) + this.rad/1000;
                    else if (this.animalType == a_qilin)
            this.z = 1009 + this.rad/1000;
          else if (this.animalType == a_dragon) this.z = 1500 + this.rad/1000;
                   else if (this.animalType == a_griffin) this.z = 1005 + this.rad/1000;
          else if (this.animalType ==  a_kingCrab) this.z = 1006 + this.rad/1000;
          //flies above hill, water/food also
          else this.z = 1000 + this.rad/1000;
        }
      }

      break;
    default:
      this.z = this.rad;

      break;
  }
};

function GameObj(oType) {
  this.oType = oType;

  //spawn vars
  this.rPer = getRandomDouble(0, 1.0);
  this.spawnTime = timestamp;
  this.updateTime = timestamp;
  this.firstPosUpd = true; //for things like setting animal angle instantly

  //init certain vars in here, they arent shared
  this.chatLines = []; //certain objs can show chat (eg. hiding holes)

  //set general drawing vars (example)
  switch (this.oType) {
    case o_berry:
    case o_banana:

    case o_raspberry:
    case o_pear:
    case o_fruitthrow:
    case o_lotus:
    case o_coconut:
    case o_water:
    case o_spit:
    case o_fireBall:
    case o_poisonBall:
    case o_spiderWeb:

    case o_mushroom:
    case o_bigMushroom:
    case o_lillypad:
    case o_hidingHole:
    case o_hidingHoleOcean:
    case o_bigHidingHole:

    //ocean food
    //case o_plankton:
    case o_seaweed:
    case o_starfish:
    case o_kelp:
    case o_clam:
    case o_conchShell:
    case o_tubeworm:
    case o_cloudBerry:
    case o_arcticNut:
    case o_carrot:
    case o_poisonBerry:
    case o_fig:
    case o_tomato:
    case o_watermelon:
    case o_watermelonSlice:
    case o_meatSmall:
    case o_meatMedium:
    case o_meatLarge:
    case o_raspberrynew:
    case o_egg:
    case o_spawnEgg:
    case o_ostrichEgg:
    case o_quill:
    case o_beeHive:
    case o_honeyComb:
      this.doesDrawEffectScale = true;
      break;
    default:
      break;
  }

  if (
    this.oType == o_hidingHole ||
    this.oType == o_bigHidingHole ||
    this.oType == o_hidingHoleOcean ||
    this.oType == o_spiderWeb
  )
    this.drawEffectScale_Slow = true;
}

window.GameObj = GameObj;

//console.log("GameObj method: "+GameObj.factory_NewlyVisibleObjMessage);

//module.exports= GameObj; //sets the 'return' type if this module 'kinda like a class'


///////
// file: js_src/gameobj/GameObjBatchDraw.js
///////

//class for batch-drawing a list of GameObjs with the same z, implements gameObj-style  draw, z

//SUBCLASS! inherit prototype/properties from superclass
var subClass=GameObjBatchDraw;
var superClass=GameObj;
subClass.prototype = Object.create(superClass.prototype);  //properly inherit prototype of superclass
subClass.prototype.constructor = subClass;



function GameObjBatchDraw() {
  this.objs= [];


  this.updateZ= function() {
    //assumes all objs (of this type) will have same Z
    if (this.objs.length > 0) {
      this.objs[0].updateZ(); //force extra update (to be sure)
      this.z = this.objs[0].z;
    }
  };
  this.draw= function() {
    //console.log("drawing t "+this.oType+"batched os ("+this.objs.length+" objs) z="+this.z);
    //draw outline
    for (var i = 0; i < this.objs.length; i++) {
      var anObj = this.objs[i];
      anObj.draw(true);
      //console.log("->drawing batched o: "+anObj);
    }

    //draw rest of obj
    for (var i = 0; i < this.objs.length; i++) {
      var anObj = this.objs[i];
      anObj.draw(false);
    }

  };
  this.addBatchedObj=function(newObj) {
    if (this.objs.length == 0) {
      //this.z=newObj.z; //z may not be updated
      this.oType = newObj.oType;
      this.objs = [];
    }
    this.objs.push(newObj);
  };

}


//make this class globally acessible
window.GameObjBatchDraw=GameObjBatchDraw;

///////
// file: js_src/gameobj/ability/AbilityObj.js
///////

//thisClass! inherit prototype/properties from superclass
//global AbilityObj;
var thisClass = Particle;
var superClass = GameObj
thisClass.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
thisClass.prototype.constructor = thisClass;
thisClass.superClass = superClass; //'class' var
Particle.prototype.particleType = p_confetti;
Particle.prototype.updateZ = function() {
  this.z = 100002;
 }
 Particle.prototype.customDraw = function(batchDrawOutline) {
  switch (this.particleType) {
     
    case p_confetti:
      {
          console.log('hi')
        ctx.save();
        var oldA = ctx.globalAlpha;
        //ctx.globalAlpha = 0.1 * oldA;
        //drawCircle(0, 0, this.rad, "#755A2A");

        ctx.globalAlpha = 1.0 * oldA;
        var theImg = getLoadedImg("img/particle/confettis.png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          var rad = this.rad - 2.5;
          ctx.rotate(this.angle);
          //clip to sliwly show the claw
          ctx.drawImage(
            theImg,
            0,
            0,
            theImg.width * fac0to1,
            theImg.height,
            -rad,
            -rad,
            2 * rad * fac0to1,
            2 * rad
          ); //sx,sy,swidth,sheight,x,y,width,height);
          //ctx.drawImage(theImg, );
          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
  }
 }
 Particle.prototype.setObjTypes = function(oType, secondaryType) {
  this.oType = oType;
  this.particleType = secondaryType; //secondaryType can be different for eg.
};
 
function Particle() {
  Particle.superClass.call(this, o_particles); //call superclass init method (if needed, or write a new one below)
  //  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AbilityObj constructor run");
}

window.Particle = Particle; //make class global!

//add this class as a thisClass for the right oType!
GameObjType.setCustomClassForGameObjType(Particle, o_particles);

var thisClass = AbilityObj;
var superClass = GameObj;
thisClass.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
thisClass.prototype.constructor = thisClass;
thisClass.superClass = superClass; //'class' var

AbilityObj.prototype.abilityType = ability_stingRayShock;
AbilityObj.prototype.showHalloweenSkins = true;

//call on draw
AbilityObj.prototype.updateZ = function() {
  ///web.archive.org/web/20201010193727/http://console.log("inside ability updateZ: " + this.abilityType);

  if (
    this.abilityType == ability_eagleAttack ||
    this.abilityType == ability_falconAttack ||
    this.abilityType == ability_thunderbirdAttack ||
    this.abilityType == ability_owlAttack ||
    this.abilityType == ability_targetCircle ||
    this.abilityType == ability_bearSlash ||
    this.abilityType == ability_cakebomb
  ) {
    this.z = 100002;
  }
  //if(this.abilityType==ability_krakenSpec || this.abilityType==ability_stingRayShock || this.abilityType==ability_squidInk)
  else if (
    this.abilityType == ability_bearSlash ||
    this.abilityType == ability_cakebomb ||
    this.abilityType == ability_iceSlide ||
    this.abilityType == ability_clawSlash ||
    this.abilityType == ability_backLegKick ||
        this.abilityType == ability_clickbait ||
    this.abilityType == ability_whaleTailHit ||
    this.abilityType == ability_finalhit||
    this.abilityType == ability_alligatorslap||
     this.abilityType == ability_freezeprey||
    this.abilityType == ability_elephantTrunkSmack ||
    this.abilityType == ability_crabSmash ||
    this.abilityType == ability_giantinktop ||
    this.abilityType == ability_crocWaterGrab ||
    this.abilityType == ability_alligatorgrab ||
    this.abilityType == ability_boaSuffocate ||
    this.abilityType == ability_sabertoothJawAttack ||
    this.abilityType == ability_trexShake ||
    this.abilityType == ability_tigerSlash ||
    this.abilityType == ability_pounce ||
    //this.abilityType == ability_tigerJump ||
    this.abilityType == ability_giraffeStomp ||
    this.abilityType == ability_zebraKick ||
    this.abilityType == ability_passivekick ||
    this.abilityType == ability_sharkBite ||
    this.abilityType == ability_fart
  )
    this.z = 10001;
  
    else if (
    this.abilityType == ability_fruitThrow
  )
    this.z = 1006;
  //above all
  else if (
    this.abilityType == ability_orcaWave ||
    this.abilityType == ability_tsunamiWave ||
    this.abilityType == ability_burningstar
  )
    this.z = 1002;
  //above lake island, above hills
  else if (this.abilityType == ability_waterSplash) this.z = 10001;
  
    else if (this.abilityType == ability_limitlessorb) this.z = 10001;
  //above lake island, above hills
    else if (this.abilityType == ability_eruption) this.z = 10001;
                     else if (this.abilityType == ability_dam || this.abilityType == ability_suction) this.z = 999.9999; 
                                else if (this.abilityType == ability_flametrail) this.z = 999.9999; 
      else if (this.abilityType == ability_kamui2) this.z = 2000;
  
    else if (this.abilityType == ability_tentaclegrab) this.z = 999.8;
  
  else if (this.abilityType == ability_snakewrap) this.z = 1400;
  
    else if (this.abilityType ==   ability_snakehead) this.z = 1400;
    //above lake island, above hills
  else if (this.abilityType == ability_pelican) {
    if (this.specType == 1) this.z = 10001;
    //above lake island, above hills
    else if (this.specType == 2)
      // beak with animal
      this.z = 1013; // below animal grabbed
  } else this.z = -152; //below everything, but above ground stuff
};
//subclassable part of draw()
AbilityObj.prototype.customDraw = function(batchDrawOutline) {
  switch (this.abilityType) {
    case ability_ostrich:
    case ability_hedgehogAttack: {
      // do nothing!
      break;
    }
    case ability_yetiTransform:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.4 * oldA;
        drawCircle(0, 0, this.rad, "#7EBCC0");

        //snowflake
        ctx.globalAlpha = 1.0 * oldA;
        ctx.strokeStyle = "white";
        ctx.beginPath();

        var wid = 10;
        //make X on 3 axis

        ctx.translate(-5, this.rad * -0.7);
        ctx.moveTo(0, -wid); //vertical lineTo
        ctx.lineTo(0, wid);
        ctx.moveTo(-wid, -wid);
        ctx.lineTo(wid, wid);
        ctx.moveTo(wid, -wid);
        ctx.lineTo(-wid, wid);
        ctx.moveTo(-wid, 0);
        ctx.lineTo(wid, 0);
        ctx.lineWidth = 3.0;
        ctx.stroke();
        ctx.restore();
      }
      break;

    case ability_extraBoost:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.15 * oldA;
        drawCircle(0, 0, this.rad, "#755A2A");

        ctx.restore();
      }
      break;
    case ability_sabertoothJawAttack:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        //ctx.globalAlpha = 0.1 * oldA;
        //drawCircle(0, 0, this.rad, "#755A2A");

        ctx.globalAlpha = 1.0 * oldA;
        var theImg = getLoadedImg("img/ability_sabertoothJawAttack.png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          var rad = this.rad - 2.5;
          ctx.rotate(this.rPer * Math.PI * 2.0);
          //clip to sliwly show the claw
          ctx.drawImage(
            theImg,
            0,
            0,
            theImg.width * fac0to1,
            theImg.height,
            -rad,
            -rad,
            2 * rad * fac0to1,
            2 * rad
          ); //sx,sy,swidth,sheight,x,y,width,height);
          //ctx.drawImage(theImg, );
          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
    case ability_clawSlash:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        //ctx.globalAlpha = 0.1 * oldA;
        //drawCircle(0, 0, this.rad, "#755A2A");

        ctx.globalAlpha = 1.0 * oldA;
        var theImg = getLoadedImg("img/ability_claw.png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          var rad = this.rad - 2.5;
          ctx.rotate(this.angle);
          //clip to sliwly show the claw
          ctx.drawImage(
            theImg,
            0,
            0,
            theImg.width * fac0to1,
            theImg.height * fac0to1,
            -rad,
            -rad,
            2 * rad * fac0to1,
            2 * rad
          ); //sx,sy,swidth,sheight,x,y,width,height);
          //ctx.drawImage(theImg, );
          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
    case ability_finalhit:
    {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.1 * oldA;
        drawCircle(0, 0, this.rad, "#475AD4");

        ctx.globalAlpha = 1.0 * oldA;
    
 
        var theImg = getLoadedImg("skins/kingdragon/" + this.specType +
        "/tail.png");
	    if (this.specType >= 200) {
            var tailtype = this.specType - 200
	var theImg = getLoadedImg("skins/obd/" + tailtype +
        "/tail.png")
	    }
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.85;
          ctx.rotate(this.angle);
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
       break;
      
      case ability_alligatorslap:
    {
        console.log(this.specType)
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.1 * oldA;
        drawCircle(0, 0, this.rad, "#475AD4");

        ctx.globalAlpha = 1.0 * oldA;
    

        var theImg = getLoadedImg("skins/alligator_tail.png");
           if (this.specType == 200) {
        theImg = getLoadedImg("skins/alligator_tail_1.png"); 
           }
        
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.85;
          ctx.rotate(this.angle);
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      
    break;
      
      

      
          case ability_passivekick:
      {
              ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.1 * oldA;
        drawCircle(0, 0, this.rad, "#E5C6AD");
        ctx.globalAlpha = oldA;
              var theImg = getLoadedImg("img/ability_ostrichkick.png");
        if (theImg) {
          var fac0to1 = Math.min(0x1, (timestamp - this.spawnTime) / 200.0);
          var rad = 0.85 * this.rad;
          ctx.rotate(this.angle);
          var imX = 0x0;
          imY = 0.5 * this.rad;
          var imW = 0x2 * rad;
          imH = 1.5 * rad * fac0to1;
          var imAnchorX = 0.5;
          imAnchorY = 0.95;
          ctx.drawImage(theImg, imX + imW * -imAnchorX, imY + imH * -imAnchorY, imW, imH);
        }
        ctx.restore();
      }
      break;
      
    case ability_whaleTailHit:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.1 * oldA;
        drawCircle(0, 0, this.rad, "#5B7EC7");

        ctx.globalAlpha = 1.0 * oldA;
        var skinFolder = "img";
        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

        var theImg = getLoadedImg("img/ability_whaleTailHit.png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.85;
          ctx.rotate(this.angle);
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
          case ability_freezeprey:
    {
                 var theImg = getLoadedImg("skins/monsters/icemonster/crystalfire.png");
                  if (theImg) {
                    ctx.save();
                    var rad = this.rad;
                  ctx.rotate(this.angle);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2.5 * rad);
                    ctx.restore();
            
                    //console.log("drawing banana");
                  }
                }
            
    
    break;
      
                case ability_electricshock:
    {
                 var theImg = getLoadedImg("img/eelshock.png");
                  if (theImg) {
                    ctx.save();
                    var rad = this.rad;
                  ctx.rotate(this.angle);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
                    ctx.restore();
            
                    //console.log("drawing banana");
                  }
                }
            
    
    break;
      
            
                case ability_cakebomb:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        //ctx.globalAlpha = 0.1 * oldA;
        //drawCircle(0, 0, this.rad, "#1898BD");
                var theImg = getLoadedImg("img/ability_cakebomb.png");
        if (this.specType == 1) {
                  var theImg = getLoadedImg("img/ability_cakesplat.png");
        }
        if (theImg) {
          var rad = this.rad;

          var rps = -14 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation1 = fac0to1 * 2 * Math.PI;
        ctx.rotate(this.angle + rotation1);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
        ctx.restore();
      }
      break;
      
      
                      case ability_limitlessorb:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        var reload = 1000;
        //ctx.globalAlpha = 0.1 * oldA;
        //drawCircle(0, 0, this.rad, "#1898BD");
              var arearad = this.rad - (((timestamp - this.spawnTime) % reload)/(reload * .5) * this.rad)

        ctx.rotate(this.angle);
        var theImg = getLoadedImg("img/orb/blue.png");
        if (theImg) {
          var rad = this.rad;

          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
        if (this.specType2 == 1 && arearad > 0) {
            ctx.save();
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.arc(0, 0, arearad * 16, 0, 2 * Math.PI, false);
          if (arearad * 16 > this.rad) {
          ctx.arc(0, 0, arearad * 16 - this.rad, 0, 2 * Math.PI, true);
          } else {
    ctx.arc(0, 0, 0, 0, 2 * Math.PI, true);
          }
    ctx.fillStyle = "#00EAFC";
    ctx.closePath();
    ctx.fill();
    ctx.restore();
        }
        ctx.restore();
      }
      break;
      
        
      
                case ability_suction:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        //ctx.globalAlpha = 0.1 * oldA;
        //drawCircle(0, 0, this.rad, "#1898BD");
        ctx.rotate(this.angle);
        ctx.globalAlpha = 0.5 * oldA;
        var theImg = getLoadedImg("img/ability_suction.png");
        if (theImg) {
          var rad = this.rad;

          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
        ctx.restore();
      }
      break;
      
          case ability_polarbearslash:
      {
        var oldA = ctx.globalAlpha;

        ctx.save();
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 1.5;
        var shiftAm = 1.0;
        var moveA =
          shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        var theA = ctx.globalAlpha;
        ctx.globalAlpha *= 0.6 * moveA; //- 0.2 * moveA;
        ctx.rotate(this.angle);
        ctx.globalAlpha = 0.15 * oldA;


        ctx.restore();
        ctx.save();

        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

        var theImg = getLoadedImg(
        "img/ability_bearSlash1.png"
        );
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);
          var rotfac0to1 = clamp(
            (timestamp - this.spawnTime) / 300.0,
            0.0,
            1.0
          ); //delay rotate animation a bit
          var extraRotate = -(-0.5 + rotfac0to1) * toRadians(90.0); //spin animation

          //clip to sliwly show the claw

          var angle = this.angle; // + (toRadians(45) * (Math.random() > 0.5 ? -1 : 1));
          ctx.rotate(this.angle + extraRotate * (this.specType == 0 ? 1 : -1));

          //ctx.rotate(angle);
          //clip to sliwly show the claw
          var rad = -this.rad * 1;
          //ctx.rotate(toRadians(180));
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.8; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY + rad,
            imW,
            imH
          );

          //console.log("drawing banana");
        }
        ctx.restore();
        /*
                              ctx.save();
                                var oldA = ctx.globalAlpha;
                                //ctx.globalAlpha = 0.1 * oldA;
                                //drawCircle(0, 0, this.rad, "#755A2A");
  
                                ctx.globalAlpha = 1.0 * oldA;
                                var theImg = getLoadedImg("img/ability_claw.png");
                                if (theImg) {
                                  var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);
  
                                  var rad = this.rad - 2.5;
                                  ctx.rotate(this.angle);
                                  //clip to sliwly show the claw
                                  ctx.drawImage(theImg, this.rad, 0, theImg.width * fac0to1, theImg.height, -rad, -rad, 2 * rad * fac0to1, 2 * rad);
                                }
  
  
                                ctx.restore();
                              */
      }
      break;
      
    case ability_bearSlash:
      {
        var oldA = ctx.globalAlpha;

        ctx.save();
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 1.5;
        var shiftAm = 1.0;
        var moveA =
          shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        var theA = ctx.globalAlpha;
        ctx.globalAlpha *= 0.6 * moveA; //- 0.2 * moveA;
        ctx.rotate(this.angle);
        ctx.globalAlpha = 0.15 * oldA;


        ctx.restore();
        ctx.save();

        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

        var theImg = getLoadedImg(
        "img/ability_bearSlash0.png"
        );
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);
          var rotfac0to1 = clamp(
            (timestamp - this.spawnTime) / 300.0,
            0.0,
            1.0
          ); //delay rotate animation a bit
          var extraRotate = -(-0.5 + rotfac0to1) * toRadians(90.0); //spin animation

          //clip to sliwly show the claw

          var angle = this.angle; // + (toRadians(45) * (Math.random() > 0.5 ? -1 : 1));
          ctx.rotate(this.angle + extraRotate * (this.specType == 0 ? 1 : -1));

          //ctx.rotate(angle);
          //clip to sliwly show the claw
          var rad = -this.rad * 1;
          //ctx.rotate(toRadians(180));
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.8; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY + rad,
            imW,
            imH
          );

          //console.log("drawing banana");
        }
        ctx.restore();
        /*
                              ctx.save();
                                var oldA = ctx.globalAlpha;
                                //ctx.globalAlpha = 0.1 * oldA;
                                //drawCircle(0, 0, this.rad, "#755A2A");
  
                                ctx.globalAlpha = 1.0 * oldA;
                                var theImg = getLoadedImg("img/ability_claw.png");
                                if (theImg) {
                                  var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);
  
                                  var rad = this.rad - 2.5;
                                  ctx.rotate(this.angle);
                                  //clip to sliwly show the claw
                                  ctx.drawImage(theImg, this.rad, 0, theImg.width * fac0to1, theImg.height, -rad, -rad, 2 * rad * fac0to1, 2 * rad);
                                }
  
  
                                ctx.restore();
                              */
      }
      break;

    case ability_fart:
      {
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var frame = getAnimFrame(tSinceSpawn, 1, 0.1, 1);

        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.1 - frame;
        //	drawCircle(0, 0, this.rad, "brown");
        ctx.restore();

        ctx.save();
        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        ctx.fillStyle = "white";
        var drawRad = this.rad * 0.7;

        ctx.globalAlpha = 0.3 - frame;

        //this.drawOutlinedCircle("", "white"); //"#00B343");

        var dx = -drawRad * 0.6,
          dy = -drawRad * 0.5 + 10.0 * this.rPer,
          drad = Math.max(0, drawRad * 0.65 + rShift) + 2;
        //drawCircle(dx, dy, drad+2, col_outline_land); //outline
        drawCircle(dx, dy, drad, "#654321"); //outline

        var dx = drawRad * 0.5,
          dy = -drawRad * 0.5 - 10.0 * this.rPer,
          drad = Math.max(0, drawRad * 0.73 - rShift);
        //drawCircle(dx, dy, drad+2, col_outline_land); //outline
        drawCircle(dx, dy, drad, "#654321"); //outline
        var dx = drawRad * 0.6,
          dy = drawRad * 0.5,
          drad = Math.max(0, drawRad * 0.78 + rShift);
        //drawCircle(dx, dy, drad+2, col_outline_land); //outline
        drawCircle(dx, dy, drad, "#654321"); //outline

        var dx = -drawRad * 0.5,
          dy = drawRad * 0.5 + 10.0 * this.rPer,
          drad = Math.max(0, drawRad * 0.6 + this.rPer - rShift);
        //drawCircle(dx, dy, drad+2, col_outline_land); //outline
        drawCircle(dx, dy, drad, "#654321"); //outline

        ctx.restore();
      }
      break;
    case ability_eagleAttack:
      {
        //ctx.globalAlpha = 0.5;
        //drawCircle(0, 0, this.rad, "red");
      }
      break;
case ability_thunderbirdAttack:
      {
        // do nothing.
        //ctx.globalAlpha = 0.2;
        //drawCircle(0, 0, this.rad, "limegreen");
      }
      break;

    case ability_falconAttack:
      {
        // do nothing.
        //ctx.globalAlpha = 0.2;
        //drawCircle(0, 0, this.rad, "limegreen");
      }
      break;

    case ability_honeyBee:
      {
        // do nothing.
        //ctx.globalAlpha = 0.2;
        // drawCircle(0, 0, this.rad, "red");
      }
      break;
    case ability_phoenix:
      {
        //ctx.globalAlpha = 0.5;
        // drawCircle(0, 0, this.rad, "#ef6e24");
      }
      break;

    case ability_targetCircle:
      {
        this.drawEffectScale_Slow = true;
        this.doesDrawEffectScale = true;

        ctx.globalAlpha = 0.2;
        drawCircle(0, 0, this.rad * 0.85, "white");

        //console.log(this.specType);
        var spec = this.specType == 3 ? "_e" : "";

        var theImg = getLoadedImg("img/target" + spec + ".png");
        if (theImg) {
          var rad = this.rad;
          ctx.save();
          ctx.globalAlpha = 0.5; //this.specType  == 3 ? 1 : 0.5;
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }

        ctx.save();
        if (this.is1v1Target && this.timerTxt != null) {
          ctx.globalAlpha = 1;
          this.timerTxt.x = 0;
          this.timerTxt.y = 0;
          this.timerTxt.draw();
        }
        ctx.restore();
      }
      break;
    case ability_owlAttack:
      {
        ctx.globalAlpha = 0.5;
        //drawCircle(0, 0, this.rad, "white");
      }
      break;

    case ability_crabSmash:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.05 * oldA;
        drawCircle(0, 0, this.rad, "#B32E10");

        ctx.globalAlpha = 1.0 * oldA;
        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "img/";

        var theImg = getLoadedImg(
          "img/ability_crabSmash" + this.specType+".png"
        );
        if (theImg) {
          //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

          var rotfac0to1 = clamp(
            (timestamp - this.spawnTime) / 200.0,
            0.0,
            1.0
          ); //delay rotate animation a bit
          var mf = this.specType == 1 ? -1 : 1;
          var extraRotate = -(-0.2 + rotfac0to1) * toRadians(-90.0 * mf); //spin animation
          extraRotate = mf * (0.3 + rotfac0to1) + toRadians(mf * -30); //spin animation
          //	extraRotate = -(0.3 + rotfac0to1) + toRadians(30); //spin animation

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle + extraRotate);
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0 * 0.7,
            imH = rad * 2.0; // * fac0to1;
          var imAnchorX = 0.75,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          if (this.specType == 1) {
            (imAnchorX = 0.25), (imAnchorY = 0.95); //top-left= 0,0, bottom-right=1,1 (canvas coords)
          }
          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
      
          case ability_flail:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.05 * oldA;

        ctx.globalAlpha = 1.0 * oldA;

        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

         var theImg = getLoadedImg(
          skinFolder + "/ability_flail.png"
        );
        if (theImg) {
          //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

          var rotfac0to1 = clamp(
            (timestamp - this.spawnTime) / 300.0,
            0.0,
            1.0
          ); //delay rotate animation a bit
          
          var extraRotate = -(-0.5 + rotfac0to1) * toRadians(150.0); //spin animation

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          if (this.specType == 1) {
          ctx.rotate(this.angle + extraRotate);
          } else {
          ctx.rotate(this.angle - extraRotate);
          }
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0 * 0.7,
            imH = rad * 2.0; // * fac0to1;
          var imAnchorX = 0.75,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
      
    case ability_elephantTrunkSmack:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.05 * oldA;
        drawCircle(0, 0, this.rad, "#E4E7C8");

        ctx.globalAlpha = 1.0 * oldA;

        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

         var theImg = getLoadedImg(
          skinFolder + "/ability_elephantTrunkSmack.png"
        );
        if (theImg) {
          //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

          var rotfac0to1 = clamp(
            (timestamp - this.spawnTime) / 300.0,
            0.0,
            1.0
          ); //delay rotate animation a bit
          var extraRotate = -(-0.5 + rotfac0to1) * toRadians(90.0); //spin animation

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle + extraRotate);
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0 * 0.7,
            imH = rad * 2.0; // * fac0to1;
          var imAnchorX = 0.75,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
      
      case ability_kickandram:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.1 * oldA;


        ctx.globalAlpha = 1.0 * oldA;
        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

        var theImg = getLoadedImg(skinFolder + "/ability_gaurkick.png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle);
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
          case ability_giantinktop:

                      var theImg = getLoadedImg(
          "img/octopusink" + ".png"
        );
        if (theImg) {
                    var rad = this.rad;

          var rps = 5 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation1 = fac0to1 * 2 * Math.PI;

          rps = 8 / 60;
          rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          fac0to1 = ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          rotation2 = fac0to1 * 2 * Math.PI;


          //ctx.drawImage(tornado, -rad, -rad, 2 * rad, 2 * rad);

          var oldA = ctx.globalAlpha;
          ctx.globalAlpha = 1 * oldA;
          //var rad = Math.max(0, this.rad - 30);

          var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
          var period = 2.2;
          var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
          var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);
          
          var rad = this.rad * 1.8;
                  var extraRotate = -(-0.2 + 0) * toRadians(360);
          var rotation = this.rPer * Math.PI * 2.0
                    ctx.save();
          ctx.rotate(rotation1);
          ctx.globalAlpha = 0.75 * oldA;

          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
            break;
      
          case ability_clickbait:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.1 * oldA;


        ctx.globalAlpha = 1.0 * oldA;
        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

        var theImg = getLoadedImg(skinFolder + "/ability_clickbait.png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle);
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
  
    case ability_backLegKick:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.1 * oldA;


        ctx.globalAlpha = 1.0 * oldA;
        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

        var theImg = getLoadedImg(skinFolder + "/ability_backkick.png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle);
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
          case  ability_fruitThrow://mark9000
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/banana" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        
        if (this.specType == 0) {
          theImg = getLoadedImg(
          "img/coconut" + (this.isEdibleOutlined() ? "_e" : "") + ".png"
        );
        }
        if (theImg) {
          var rad = this.rad;
          ctx.rotate(this.angle);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
      }
      break;
      
                case ability_tentaclegrab://mark9000
      
      {
                var oldA = ctx.globalAlpha;

        //draw banana img
        var theImg = getLoadedImg(
          "img/ability_tentaclegrab.png"
        );
        
        if (theImg) {
          var rad = this.rad;
          var height = this.specType
          console.log(this.angle)
          ctx.rotate(this.angle);

          ctx.drawImage(theImg, -40, -rad, 40 * 2, rad * 2);
          ctx.globalAlpha = oldA*0.5
          //drawCircle(0, 0, this.rad, "#FF0000");
          ctx.globalAlpha = oldA
          //console.log("drawing banana");
        }
      }
      break;
      
      
                            case ability_snakehead://mark9000
      
      {
                var oldA = ctx.globalAlpha;

        //draw banana img
        /*var theImg = getLoadedImg(
          "img/ability_snake" + (this.specType == 0 ? "" : this.specType) + ".png"
        );*/
        var theImg = getLoadedImg(
          "img/snakehead.png"
        );

        if (theImg) {
          var rad = this.rad;
          var height = this.specType
          ctx.rotate(this.angle);

          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.globalAlpha = oldA*0.5
          //drawCircle(0, 0, this.rad, "#FF0000");
          ctx.globalAlpha = oldA
          //console.log("drawing banana");
        }
        

      }
      break;
      
                      case ability_snakewrap://mark9000
      
      {
                var oldA = ctx.globalAlpha;

        //draw banana img
        /*var theImg = getLoadedImg(
          "img/ability_snake" + (this.specType == 0 ? "" : this.specType) + ".png"
        );*/
        var theImg = getLoadedImg(
          "img/ability_snake1.png"
        );

                  console.log(toDegrees(this.angle) - 180)
        if (theImg) {
          var rad = this.rad;
          var height = this.specType
          ctx.rotate(this.angle);

          ctx.drawImage(theImg, -40, -rad, 40 * 2, rad * 2);
          ctx.globalAlpha = oldA*0.5
          //drawCircle(0, 0, this.rad, "#FF0000");
          ctx.globalAlpha = oldA
          //console.log("drawing banana");
        }
        

      }
      break;
      
                case ability_dam://mark9000
      {
        //draw banana img
        var theImg = getLoadedImg(
          "img/dam.png"
        );
        
        if (theImg) {
          var rad = this.rad;
          ctx.rotate(0);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
      }
      break;
      
                      case ability_flametrail://mark9000
        {
          ctx.save();
         var oldglobal = ctx.globalAlpha;
          ctx.globalAlpha = 0.4 * oldglobal;
          let color = "#ef6e24";
          switch (this.specType) {
            case 1:
              color = "#0080FF";
              break;
            case 2:
              color = "purple";
          }
          drawCircle(0, 0, this.rad, color);
          ctx.globalAlpha = 1 * oldglobal;
          ctx.restore();
        }
      break;
      
                      case ability_kamui2://mark9000
      {
        var theImg = getLoadedImg(
          "img/ability_kamui" + ".png"
        );



        
        
        if (theImg) {
          var rps = 10 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation3 = fac0to1 * 2 * Math.PI;

          //ctx.drawImage(tornado, -rad, -rad, 2 * rad, 2 * rad);
          //var rad = Math.max(0, this.rad - 30);

          var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
          var period = 2.2;
          var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
          var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);
          var rad = this.rad * 1.2;
          ctx.save();
          ctx.rotate(rotation3);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
      }
      break;
      
      
          case ability_giantinktop:
      var max = 360
var max2 =-3
      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
 var frame =  getAnimFrame(tSinceSpawn,2.1, .4, 1.5);
                      var theImg = getLoadedImg(
          "img/octopusink" + ".png"
        );
        if (theImg) {
          var rad = this.rad * 1.8;
                        var extraRotate = -(frame) * toRadians(max);
          var rotation = this.rPer * Math.PI * 2.0
          ctx.save();
          ctx.globalAlpha = 0.7 * oldA;
          ctx.rotate(this.angle + extraRotate);
          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          ctx.restore();
        }
            break;
      
          case ability_clickbait:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.1 * oldA;


        ctx.globalAlpha = 1.0 * oldA;
        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

        var theImg = getLoadedImg(skinFolder + "/ability_clickbait.png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle);
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
      
      
      
    case ability_crocWaterGrab:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.25 * oldA;
        drawCircle(0, 0, this.rad, "#44d31f");

        ctx.globalAlpha = 1.0 * oldA;
        var theImg = getLoadedImg("img/ability_crocBite.png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle);

          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //clip to sliwly show the claw
          //var rad=this.rad * 0.85;
          ctx.rotate(Math.PI);
          var imX = 0,
            imY = this.rad * 0.5;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
      
      case ability_alligatorgrab:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.25 * oldA;
        drawCircle(0, 0, this.rad, "#44d31f");

        ctx.globalAlpha = 1.0 * oldA;
        var theImg = getLoadedImg("skins/alligatorbite.png");
           if (this.specType == 200) {
        var theImg = getLoadedImg("skins/alligatorbite_1.png");
           }
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle);

          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //clip to sliwly show the claw
          //var rad=this.rad * 0.85;
          ctx.rotate(Math.PI);
          var imX = 0,
            imY = this.rad * 0.5;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;

    case ability_boaSuffocate:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.25 * oldA;
        drawCircle(0, 0, this.rad, "#44d31f");

        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

        ctx.globalAlpha = 1.0 * oldA;
        var theImg = getLoadedImg(skinFolder + "/ability_boaBite.png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle);

          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //clip to sliwly show the claw
          //var rad=this.rad * 0.85;
          ctx.rotate(Math.PI);
          var imX = 0,
            imY = this.rad * 0.5;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
    // trex update abilities
    case ability_tigerJump:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.1 * oldA;
        drawCircle(0, 0, this.rad, "#755A2A");

        ctx.globalAlpha = 1.0 * oldA;

        var skinFolder = "skins";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie";

        var theImg = getLoadedImg(
          skinFolder + "/tiger/" + this.specType2 + "/ability_tigerJump.png"
        );
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 100.0);

          //clip to sliwly show the claw
          var rad = this.rad * 1.1;
          ctx.rotate(this.angle);
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 1; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;

    case ability_pounce:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.05 * oldA;
        drawCircle(0, 0, this.rad, "#44d31f");

        ctx.globalAlpha = 1.0 * oldA;
        var theImgUpper = getLoadedImg("img/ability_pounce2.png");
        var theImgLower = getLoadedImg("img/ability_pounce1.png");

        if (theImgUpper && theImgLower) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.4;
          ctx.rotate(this.angle);

          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImgUpper,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //clip to sliwly show the claw
          //var rad=this.rad * 0.85;
          //ctx.rotate(Math.PI);
          rad = this.rad * 0.6;
          var imX = 0,
            imY = this.rad * 0.5;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImgLower,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );
        }

        ctx.restore();
      }
      break;

    case ability_tigerSlash:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.05 * oldA;
        drawCircle(0, 0, this.rad, "#E4E7C8");

        ctx.globalAlpha = 1.0 * oldA;

        var img =
          "skins/tiger/" +
          this.specType2 +
          "/ability_tigerSlash" +
          this.specType +
          ".png";

        var theImg = getLoadedImg(img);

        if (theImg) {
          //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

          var rotfac0to1 = clamp(
            (timestamp - this.spawnTime) / 300.0,
            0.0,
            1.0
          ); //delay rotate animation a bit
          var extraRotate =
            (this.specType == 1 ? 1 : -1) *
            (-0.6 + rotfac0to1) *
            toRadians(90.0); //spin animation

          //clip to sliwly show the claw
          var rad = this.rad * 1.2;
          ctx.rotate(this.angle + extraRotate);
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0 * 0.7,
            imH = rad * 2.0; // * fac0to1;
          var imAnchorX = 0.2,
            imAnchorY = 0.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
    case ability_zebraKick:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.1 * oldA;
        drawCircle(0, 0, this.rad, "#755A2A");

        ctx.globalAlpha = 1.0 * oldA;

        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

        var theImg = getLoadedImg(skinFolder + "/ability_zebraKick.png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle);
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 3.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 1; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
    case ability_giraffeStomp:
      {
        var oldA = ctx.globalAlpha;

        ctx.save();
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 1.5;
        var shiftAm = 1.0;
        var moveA =
          shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        var theA = ctx.globalAlpha;
        ctx.globalAlpha *= 0.6 * moveA; //- 0.2 * moveA;
        ctx.rotate(this.angle);
        ctx.globalAlpha = 0.15 * oldA;
        //drawCircle(0, 0, this.rad, "#E4E7C8");
        drawCircle(
          this.rad * 0.3,
          0,
          this.rad * (0.9 + 0.12 * moveA),
          "#E4E7C8"
        );
        drawCircle(
          -this.rad * 0.3,
          0,
          this.rad * (1.05 + 0.09 * moveA),
          "#E4E7C8"
        );
        ctx.globalAlpha = theA;
        ctx.restore();
        ctx.save();

        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

        var theImg = getLoadedImg(skinFolder + "/ability_giraffeStompLeg.png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          var angle = this.angle; // + (toRadians(45) * (Math.random() > 0.5 ? -1 : 1));
          ctx.rotate(angle);
          //clip to sliwly show the claw
          var rad = -this.rad * 1;
          //ctx.rotate(toRadians(180));
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.8; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY + rad,
            imW,
            imH
          );

          //console.log("drawing banana");
        }
        ctx.restore();

        /*
                var bubbles = 1
                for (i = 1; i <= bubbles; i++) {
                  ctx.save();
  
                  ctx.fillStyle = "#6183d3";
                  ctx.globalAlpha = 0.1;
                  ctx.rotate(this.rPer * Math.PI * 2.0 * i);
                  ctx.beginPath(); //top left, right
                  ctx.arc(0, this.rad * 0.3, this.rad * (0.9 + 0.12 * moveA), 0, Math.PI * 2);
                  ctx.fill();
                  ctx.beginPath();
                  ctx.arc(0, -this.rad * 0.3, this.rad * (1.05 + 0.09 * moveA), 0, Math.PI * 2);
                  ctx.fill();
  
                   ctx.restore();
                }
                */

        /*
                                  ctx.save();
                                  var oldA = ctx.globalAlpha;
  
                                  ctx.globalAlpha = 0.1 * oldA;
                                  drawCircle(0, 0, this.rad, "#755A2A");
  
                                  ctx.globalAlpha = 1.0 * oldA;
                                  var theImg = getLoadedImg("img/ability_giraffeStomp.png");
                                  if (theImg) {
                                      var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);
  
                                      //clip to sliwly show the claw
                                      var rad = this.rad * 1.0;
                                      ctx.rotate(this.angle + toRadians(180));
                                      var imX = 0,
                                          imY = this.rad;
                                      var imW = (rad * 2.0),
                                          imH = (rad * 2.0) * fac0to1;
                                      var imAnchorX = 0.5,
                                          imAnchorY = 1.2; //top-left= 0,0, bottom-right=1,1 (canvas coords)
  
                                      ctx.drawImage(theImg, imX + (imW) * (-imAnchorX), imY + (imH) * (-imAnchorY), imW, imH);
  
                                      //console.log("drawing banana");
                                  }
  
  
                                  ctx.restore();
                                  */
      }
      break;
    case ability_sharkBite:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.15 * oldA;

        ctx.globalAlpha = 1.0 * oldA;

        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";

        var theImg = getLoadedImg("img/ability_sharkBite.png");

        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle);

          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //clip to sliwly show the claw
          //var rad=this.rad * 0.85;
          ctx.rotate(Math.PI);
          var imX = 0,
            imY = this.rad * 0.5;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 1.35; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }
        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";
        var theImg = getLoadedImg(skinFolder + "/shark-head.png");
        if (theImg) {
          var frame = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);
          ctx.globalAlpha = 0.9;
          //clip to sliwly show the claw
          var rad = -this.rad * 1.75;
          ctx.rotate(toRadians(180));
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * frame;
          var imAnchorX = 0.5,
            imAnchorY = 0.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY + rad,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;
    case ability_waterSplash:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.5 * oldA;
        var rad = this.rad;

        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.2;
        var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
        var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        ctx.globalAlpha = 0.3 * oldA;
        drawCircle(0, 0, rad, "#2CAAC4");

        ctx.globalAlpha = 0.5 * oldA;

        drawCircle(
          0 + xShift / 4.5 + this.rPer,
          1 + yShift / 1.5,
          Math.max(0, rad - 14),
          "#29A0BA"
        );
        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, rad - 38.5 + yShift / 5),
          "#2B8CAA"
        );
        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, rad - 54.5 + yShift / 11),
          "#28829E"
        );
        ctx.restore();
      }
      break;
      
          case ability_eruption:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.5 * oldA;
        var rad = this.rad;

        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.2;
        var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
        var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        ctx.globalAlpha = 0.3 * oldA;
        drawCircle(0, 0, rad, "#C46E2C");

        ctx.globalAlpha = 0.5 * oldA;

        drawCircle(
          0 + xShift / 4.5 + this.rPer,
          1 + yShift / 1.5,
          Math.max(0, rad - 14),
          "#BA7229"
        );
        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, rad - 38.5 + yShift / 5),
          "#AA6B2B"
        );
        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, rad - 54.5 + yShift / 11),
          "#9E5B28"
        );
        ctx.restore();
      }
      break;
      

    case ability_pelican: {

        ctx.save();
        //drawCircle(0, 0, this.rad, "red");
        var btype = ""; //this.specType == 0 ? "" : "2";
        var theImg = getLoadedImg(
          "skins/pelican/ability_pelican" + btype + ".png"
        );
        if (theImg) {
          //clip to sliwly show the claw
          var rad = -this.rad * 1.5;
          ctx.rotate(this.angle);
          var imX = 0,
            imY = this.rad;
          var imW = rad,
            imH = rad;
          var imAnchorX = 0.5,
            imAnchorY = 0.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY + rad,
            imW,
            imH
          );
        }

        ctx.restore();
      
      break;
    }
      case ability_trexShake:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        ctx.globalAlpha = 0.15 * oldA;
        //drawCircle(0, 0, this.rad, "#862A2A");

        ctx.globalAlpha = 1.0 * oldA;

        var theImg = getLoadedImg("img/ability_trexBite" + this.specType2 + ".png");

        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = this.rad * 0.6;
          ctx.rotate(this.angle);

          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //clip to sliwly show the claw
          //var rad=this.rad * 0.85;
          ctx.rotate(Math.PI);
          var imX = 0,
            imY = this.rad * 0.5;
          var imW = rad * 2.5,
            imH = rad * 2.5 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );

          //console.log("drawing banana");
        }
        var skinFolder = "img";

        if (_gameMode.isHalloween) skinFolder = "skins/ability_skins";

        var theImg = getLoadedImg(skinFolder + "/trex-head" + this.specType2 + ".png");
        if (theImg) {
          var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 200.0);

          //clip to sliwly show the claw
          var rad = -this.rad * 1.5;
          ctx.rotate(toRadians(180));
          var imX = 0,
            imY = this.rad;
          var imW = rad * 2.0,
            imH = rad * 2.0 * fac0to1;
          var imAnchorX = 0.5,
            imAnchorY = 0.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY + rad,
            imW,
            imH
          );

          //console.log("drawing banana");
        }

        ctx.restore();
      }
      break;


    // trex update end
    case ability_wolfHowl:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.15 * oldA;
        drawCircle(0, 0, this.rad, "#6D7471");
        ctx.restore();
      }
      break;
      
          case ability_clicks:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.15 * oldA;
        drawCircle(0, 0, this.rad, "#6D7471");
        ctx.restore();
      }
      break;
      
          case ability_tavershout:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.15 * oldA;
        drawCircle(0, 0, this.rad, "#6D7471");
        ctx.restore();
      }
      break;
    case ability_cobraVenomSpit:
      {
        
        

    var period = 1.5; //periodic func with time
    var p_min = 0,
      p_max = 0.35;
    var amp = 0.5 * (p_max - p_min);
        ctx.save();

ctx.globalAlpha = 1

        drawCircle(0, 0, this.rad, "#59D233");
        drawCircle(0, 0, this.rad * 0.76, "#38BE1D");
        drawCircle(0, 0, this.rad * 0.64, "#629E8B");
                    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
        );
                drawCircle(0, 0, this.rad, "#3DFF00");
        ctx.restore();
      }
      break;
    case ability_spiderWeb:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.15 * oldA;
        drawCircle(0, 0, this.rad, "#f2f2f2");
        ctx.restore();
      }
      break;
    case ability_tsunamiWave:
    case ability_orcaWave:
      {
        ctx.save();
        if (this.abilityType == ability_tsunamiWave)
          ctx.rotate(this.angle - toRadians(90.0));
        else ctx.rotate(this.angle + toRadians(180.0));

        var oldA = ctx.globalAlpha;
        //ctx.globalAlpha = 0.1 * oldA;
        //drawCircle(0, 0, this.rad, "#1898BD");

        ctx.globalAlpha = 0.8 * oldA;
        var theImg = getLoadedImg("img/wave.png");
        if (theImg) {
          var rad = this.rad;

          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
        ctx.restore();
      }
      break;
      
     case ability_burningstar:
            {
        ctx.save();
        if (this.abilityType == ability_tsunamiWave)
          ctx.rotate(this.angle - toRadians(90.0));
        else ctx.rotate(this.angle + toRadians(180.0));

        var oldA = ctx.globalAlpha;
        //ctx.globalAlpha = 0.1 * oldA;
        //drawCircle(0, 0, this.rad, "#1898BD");

        ctx.globalAlpha = 0.8 * oldA;
        var theImg = getLoadedImg("img/astral_winds.png");
        if (theImg) {
          var rad = this.rad;

          ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
          //console.log("drawing banana");
        }
        ctx.restore();
      }
      break;
      
      
    case ability_lionRoar:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.2 * oldA;
        drawCircle(0, 0, this.rad, "#746B3E");
        ctx.restore();
      }
      break;
    case ability_stingRayShock:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.5 * oldA;
        drawCircle(0, 0, this.rad, "#62C5FF");

        //bolt
        ctx.globalAlpha = 1.0 * oldA;
        ctx.strokeStyle = "#62C5FF";
        ctx.beginPath();
        var px = this.rad * -0.7,
          py = -5;
        var boltSz = 10;
        ctx.moveTo(px, py);
        ctx.lineTo(px - boltSz * 0.4, py + boltSz);
        ctx.lineTo(px + boltSz * 0.4, py + boltSz * 0.7);
        ctx.lineTo(px + boltSz * 0.4 * 0.5, py + boltSz * 2);
        ctx.lineWidth = 3.0;
        ctx.stroke();

        ctx.restore();
      }
      break;
    case ability_seaMonsterSpec:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.5 * oldA;
        var rad = Math.max(0, this.rad - 30);

        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.2;
        var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
        var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        ctx.globalAlpha = 0.05 * oldA;
        drawCircle(0, 0, rad, "#2CAAC4");

        ctx.globalAlpha = 0.05 * oldA;
        if (!options_lowGraphics) {
          drawCircle(
            0 + xShift / 2 - this.rPer,
            0 + yShift / 2 - this.rPer,
            Math.max(0, rad - 6),
            "#2D93B0"
          );
        }
        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, rad - 54.5 + yShift / 11),
          "#28829E"
        );

        ctx.restore();
        ctx.save();
        var oldA = ctx.globalAlpha;

        var rad = Math.max(0, this.rad - 30);

        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 3.2;
        var xShift = 30 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
        var yShift = 30 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        ctx.globalAlpha = 0.05 * oldA;
        drawCircle(0, 0, rad, "white");
        drawCircle(
          0 + xShift / 2 - this.rPer,
          0 + yShift / 2 - this.rPer,
          Math.max(0, rad * 0.95),
          "white"
        );
        drawCircle(
          0 + xShift / 4.5 + this.rPer,
          1 + yShift / 1.5,
          Math.max(0, rad * 0.85),
          "white"
        );

        ctx.restore();

        var tornado = getLoadedImg("img/whirlpool.png");
        tornado2 = getLoadedImg("img/whirlpool3.png");
        if (tornado) {
          var rad = this.rad;

          var rps = 7 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation1 = fac0to1 * 2 * Math.PI;

          rps = 11.2 / 60;
          rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          fac0to1 = ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          rotation2 = fac0to1 * 2 * Math.PI;
          
          rps = -11.2 / 60;
          rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          fac0to1 = ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          rotation3 = fac0to1 * 2 * Math.PI;

          ctx.save();
          ctx.rotate(rotation1);
          //ctx.drawImage(tornado, -rad, -rad, 2 * rad, 2 * rad);

          var oldA = ctx.globalAlpha;
          ctx.globalAlpha = 1 * oldA;
          //var rad = Math.max(0, this.rad - 30);

          var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
          var period = 2.2;
          var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
          var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

          ctx.globalAlpha = 0.2;
          ctx.drawImage(tornado, -rad - xShift / 2.2, -rad, 2 * rad, 2 * rad);
          ctx.restore();

          ctx.save();
          ctx.globalAlpha = 0.1;
          ctx.rotate(rotation2 * 0.8);
          ctx.drawImage(tornado, -rad - xShift / 2.2, -rad, 2 * rad, 2 * rad);
          ctx.restore();

          ctx.save();
          ctx.globalAlpha = 0.2;
          ctx.rotate(rotation2);
          ctx.drawImage(tornado, -rad - xShift / 2.2, -rad, 2 * rad, 2 * rad);
          ctx.restore();

          ctx.save();
          ctx.globalAlpha = 0.2;
          ctx.rotate(rotation2);
          ctx.drawImage(tornado, -rad - xShift / 2.2, -rad, 2 * rad, 2 * rad);
          ctx.restore();

          ctx.save();
          ctx.globalAlpha = 0.2;
          ctx.rotate(rotation1);
          ctx.drawImage(tornado, -rad - xShift / 2.2, -rad, 2 * rad, 2 * rad);
          ctx.restore();
          
          
          ctx.save();
          ctx.globalAlpha = 0.2;
          ctx.rotate(rotation1);
          ctx.drawImage(tornado, -rad - xShift / 2.2, -rad, 2 * rad, 2 * rad);
          ctx.restore();
          rad = this.rad * 0.5
          ctx.save();
          ctx.globalAlpha = 0.5;
          ctx.rotate(rotation2);
          ctx.drawImage(tornado, -rad - xShift / 2.2, -rad, 2 * rad, 2 * rad);
          ctx.restore();
          rad = this.rad
                  if (tornado2) {
          ctx.save();
          ctx.globalAlpha = 1;
          ctx.rotate(rotation2);
          ctx.drawImage(tornado2, -rad - xShift / 2.2, -rad, 2 * rad, 2 * rad);
          ctx.restore();
                  }

        }
      }
      break;

    case ability_krakenSpec:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.5 * oldA;
        var rad = Math.max(0, this.rad - 30);

        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.2;
        var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
        var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        ctx.globalAlpha = 0.4 * oldA;
        drawCircle(0, 0, rad, "#2CAAC4");

        ctx.globalAlpha = 0.7 * oldA;
        if (!options_lowGraphics) {
          drawCircle(
            0 + xShift / 2 - this.rPer,
            0 + yShift / 2 - this.rPer,
            Math.max(0, rad - 6),
            "#2D93B0"
          );
        }
        drawCircle(
          0 + xShift / 4.5 + this.rPer,
          1 + yShift / 1.5,
          Math.max(0, rad - 14),
          "#29A0BA"
        );
        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, rad - 38.5 + yShift / 5),
          "#2B8CAA"
        );
        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, rad - 54.5 + yShift / 11),
          "#28829E"
        );

        ctx.restore();
      }
      break;
    case ability_squidInk:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;

        if (!options_lowGraphics) ctx.rotate(this.rPer * 2 * Math.PI);

        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 6.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

        //console.log("Mud");
        ctx.globalAlpha = 0.7 * oldA;
        //green outline (without stroke- optimized)
        var strokeW = 4;
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
        ctx.fill();

        if (!options_lowGraphics) {
          ctx.fillStyle = "black";
          ctx.globalAlpha = 0.5 * oldA;
          ctx.beginPath();
          ctx.arc(
            0,
            0,
            Math.max(0, this.rad - strokeW + rShift),
            0,
            Math.PI * 2
          );
          ctx.fill();
          ctx.beginPath(); //top right
          ctx.arc(
            this.rad * 0.45,
            -this.rad * 0.45 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath(); //bottom right
          ctx.arc(
            this.rad * 0.5,
            this.rad * 0.5 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.4 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath(); //bottom left
          ctx.arc(
            -this.rad * 0.55 * 0.707,
            +this.rad * 0.55 * 0.707 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.arc(
            -this.rad * 0.75,
            -this.rad * 0.35 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.3 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.beginPath();
          ctx.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI);
          ctx.fill();
          ctx.beginPath();
          ctx.beginPath();
          ctx.arc(
            this.rad - 20 * this.rPer,
            50 * this.rPer,
            10,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
        }

        ctx.restore();
      }
      break;
      
      
      case ability_giantink:
      {
        

        
        ctx.save();
        var oldA = ctx.globalAlpha;
              var frame = !options_lowGraphics
        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 6.0;
        var shiftAm = 1.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);
                    ctx.rotate(this.rPer * Math.PI * 2.0);
        //console.log("Mud");
        ctx.globalAlpha = 0.5 * oldA;
        //green outline (without stroke- optimized)
        var strokeW = 4;
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
        ctx.fill();

        if (!options_lowGraphics) {
          ctx.fillStyle = "black";
          ctx.globalAlpha = 0.5 * oldA;
          ctx.beginPath();
          ctx.arc(
            0,
            0,
            Math.max(0, this.rad - strokeW + rShift),
            0,
            Math.PI * 2
          );
          ctx.fill();
          ctx.beginPath(); //top right
          ctx.arc(
            this.rad * 0.45,
            -this.rad * 0.45 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath(); //bottom right
          ctx.arc(
            this.rad * 0.5,
            this.rad * 0.5 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.4 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath(); //bottom left
          ctx.arc(
            -this.rad * 0.55 * 0.707,
            +this.rad * 0.55 * 0.707 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.arc(
            -this.rad * 0.75,
            -this.rad * 0.35 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.3 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.beginPath();
          ctx.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI);
          ctx.fill();
          ctx.beginPath();
          ctx.beginPath();
          ctx.arc(
            this.rad - 20 * this.rPer,
            50 * this.rPer,
            10,
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
        }

        ctx.restore();
        
      }
      break;
      
      
    case ability_makeHidingHole:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.25 * oldA;
        drawCircle(0, 0, this.rad, "#9F8641");

        ctx.restore();
      }
      break;

    case ability_foxhidingHoleKickout:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.25 * oldA;
        drawCircle(0, 0, this.rad, "#785228");

        ctx.restore();
      }
      break;

    default:
      {
        ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.15 * oldA;
        drawCircle(0, 0, this.rad, "black");

        ctx.restore();
      }
      break;
  }
};

//this method is important in the subclassing hierachry
AbilityObj.prototype.setObjTypes = function(oType, secondaryType) {
  this.oType = oType;
  this.abilityType = secondaryType; //secondaryType can be different for eg.
};

//override this to read in custom spawn data
AbilityObj.prototype.readCustomData_onNewlyVisible = function(msg) {
  AbilityObj.superClass.prototype.readCustomData_onNewlyVisible.call(this, msg);

  //console.log("reading ABILITY ONNEWLYVIS");
  this.specType = msg.readUInt8();
  this.specType2 = msg.readUInt8();

  //start at 0 rad! (animate in, by default it doesnt)
  if (
    this.abilityType == ability_yetiTransform ||
    this.abilityType == ability_wolfHowl ||
    this.abilityType == ability_clicks ||
    this.abilityType == ability_tavershout||
    this.abilityType == ability_orcaWave ||
    this.abilityType == ability_burningstar ||
    this.abilityType == ability_tsunamiWave ||
    this.abilityType == ability_lionRoar ||
    this.abilityType == ability_foxhidingHoleKickout
  ) {
    this.rad = this.oRad = 0;
  }
};

AbilityObj.prototype.readCustomData_onUpdate = function(msg) {
  AbilityObj.superClass.prototype.readCustomData_onUpdate.call(this, msg); //call superclass version of this method

  //console.log("reading ABILITY ONUPDATE");
  this.specType = msg.readUInt8();
  this.specType2 = msg.readUInt8();

  this.is1v1Target = msg.readUInt8() == 1;

  if (this.is1v1Target) {
    this.timer = msg.readUInt16() / 100.0;
    if (this.timer < 15) this.updateTimer();
  }
};

AbilityObj.prototype.updateTimer = function() {
  this.timer = Math.round(this.timer);

  var txt = this.timer;

  this.setTimer(txt);
};
AbilityObj.prototype.timerTxt = null;

AbilityObj.prototype.setTimer = function(a) {
  var txt = "" + a;
  if (null == this.timerTxt) {
    this.timerTxt = new CachedText(20, "#FFFFFF"); //"#043400");
    this.timerTxt.strokeW = 2;
    this.timerTxt.multiLine = true;
    this.timerTxt.renderScale = 5.0;
    this.timerTxt.setText(txt);
  } else {
    this.timerTxt.setFontSize(20);
    this.timerTxt.setText(txt);
  }
};

function AbilityObj() {
  AbilityObj.superClass.call(this, o_abilityGObj); //call superclass init method (if needed, or write a new one below)

  //  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AbilityObj constructor run");
}

window.AbilityObj = AbilityObj; //make class global!

//add this class as a thisClass for the right oType!
GameObjType.setCustomClassForGameObjType(AbilityObj, o_abilityGObj);
///////
// file: js_src/gameobj/ability/AbilityObjElephant.js
///////

var thisClass = AbilityObjSpear;
var superClass = AbilityObj;
thisClass.prototype = Object.create(superClass.prototype);
thisClass.prototype.constructor = thisClass;
thisClass.superClass = superClass;
AbilityObj.prototype.victimID = 0;
AbilityObjSpear.prototype.updateZ = function () {
    this.effect_flying ? this.z = 100000 : 0 == this.victimID && (this.z = 1100);
};
AbilityObjSpear.prototype.customDraw = function (_0x423c5e) {
    ctx.save();
    if (0 == this.specType) {
        if (_0x423c5e = getLoadedImg('skins/bigfoot/spear.png')) {
            ctx.save();
            var _0xd67ac0 = 2 * this.rad;
            ctx.rotate(this.angle + toRadians(90));
            ctx.drawImage(_0x423c5e, -_0xd67ac0 / 2, -_0xd67ac0 / 2, _0xd67ac0, 4 * _0xd67ac0);
            ctx.restore();
        }
    } else if (3 == this.specType) {
        ctx.save();
        if (_0x423c5e = getLoadedImg('skins/bigfoot/spear2.png')) _0xd67ac0 = 2 * this.rad, ctx.rotate(this.angle + toRadians(90)), ctx.drawImage(_0x423c5e, -_0xd67ac0 / 2, -_0xd67ac0 / 2, _0xd67ac0, 4 * _0xd67ac0);
        ctx.restore();
    } else if (_0x423c5e = getLoadedImg('skins/bigfoot/arm' + (this.specType + (1 == this.specType2 ? '1' : '')) + '.png')) {
  
      var _0x24150b = Math.min(1, (timestamp - this.spawnTime) / 200),
            _0xd67ac0 = -clamp((timestamp - this.spawnTime) / 300, 0, 1) * toRadians(90);
        ctx.rotate(this.angle + _0xd67ac0 * (1 == this.specType ? 1 : -1));
      var ae_0xd67ac0 = 2 * this.rad;  
      var _0xd67ac0 = 1.5 * -this.rad,
            _0x41fc4a = 2 * _0xd67ac0,
            _0x24150b = 2 * _0xd67ac0 * _0x24150b;
        ctx.drawImage(_0x423c5e, ae_0xd67ac0/2, ae_0xd67ac0 /2, _0x41fc4a, _0x24150b);
    }
    ctx.restore();
};
AbilityObjSpear.prototype.effect_flying = true;
AbilityObjSpear.prototype.readCustomData_onNewlyVisible = function (_0x4e70ff) {
    AbilityObjSpear.superClass.prototype.readCustomData_onNewlyVisible.call(this, _0x4e70ff);
};
AbilityObjSpear.prototype.readCustomData_onUpdate = function (_0x304c65) {
    AbilityObjSpear.superClass.prototype.readCustomData_onUpdate.call(this, _0x304c65);
    this.victimID = _0x304c65.readUInt32();
    this.effect_flying = 1 == _0x304c65.readUInt8();
    0x0 != this.victimID && gameObjsByID[this.victimID] && (this.z = gameObjsByID[this.victimID].z + 1);
};

function AbilityObjSpear() {
    AbilityObjSpear.superClass.call(this);
    AbilityObjSpear.prototype.easeAngleChanges = true;
}
window.AbilityObjSpear = AbilityObjSpear;
GameObjType.setCustomClassForGameObjType(AbilityObjSpear, o_abilityGObj, ability_spear);
///////
// file: js_src/gameobj/ability/AbilityObjElephant.js
///////

var thisClass = AbilityObjElephant;
var superClass = AbilityObj;
thisClass.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
thisClass.prototype.constructor = thisClass;
thisClass.superClass = superClass; //'class' var

//subclassable part of draw()
AbilityObjElephant.prototype.customDraw = function(batchDrawOutline) {
  ctx.save();
  var oldA = ctx.globalAlpha;

  ctx.globalAlpha = 0.05 * oldA;
  drawCircle(0, 0, this.rad, "#E4E7C8");

  ctx.globalAlpha = 1.0 * oldA;
  var skinFolder = "img";
  if (_gameMode.isHalloween) skinFolder = "skins/zombie/ability_skins";


  var theImg = getLoadedImg(skinFolder + "/ability_elephantTrunkSmack.png");
  if (theImg) {
    //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

    var rotfac0to1 = clamp((timestamp - this.spawnTime) / 300.0, 0.0, 1.0); //delay rotate animation a bit
    var extraRotate = -(-0.5 + rotfac0to1) * toRadians(90.0); //spin animation

    //clip to sliwly show the claw
    var rad = this.rad * 0.6;
    ctx.rotate(this.angle + extraRotate);
    var imX = 0,
      imY = this.rad;
    var imW = rad * 2.0 * 0.7,
      imH = rad * 2.0; // * fac0to1;
    var imAnchorX = 0.75,
      imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

    ctx.drawImage(
      theImg,
      imX + imW * -imAnchorX,
      imY + imH * -imAnchorY,
      imW,
      imH
    );

    //console.log("drawing banana");
  }

  ctx.restore();
};

//override this to read in custom spawn data
AbilityObjElephant.prototype.readCustomData_onNewlyVisible = function(msg) {
  AbilityObjElephant.superClass.prototype.readCustomData_onNewlyVisible.call(
    this,
    msg
  );

  //console.log("reading ELE ONNEWLYVIS a=" + toDegrees(this.angle));
};

AbilityObjElephant.prototype.readCustomData_onUpdate = function(msg) {
  AbilityObjElephant.superClass.prototype.readCustomData_onUpdate.call(
    this,
    msg
  ); //call superclass version of this method

 // console.log("reading ELE ONUPDATE a=" + toDegrees(this.angle));
};

function AbilityObjElephant() {
  AbilityObjElephant.superClass.call(this); //call superclass init method (if needed, or write a new one below)

  // console.log(
  //   "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AbilityObjElephant constructor run"
  // );
}

window.AbilityObjElephant = AbilityObjElephant; //make class global!

//add this class as a thisClass for the right oType!
GameObjType.setCustomClassForGameObjType(
  AbilityObjElephant,
  o_abilityGObj,
  ability_elephantTrunkSmack
);

//subclassed animals


///////
// file: js_src/gameobj/animal/Animal.js
///////

//thisClass! inherit prototype/properties from superclass
//global Animal;
var thisClass = Animal;
var superClass = GameObj;
thisClass.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
thisClass.prototype.constructor = thisClass;
thisClass.superClass = superClass; //'class' var

Animal.prototype.animalType = a_mouse;
Animal.prototype.animalSpecies = 0; // if ani has different skill set will use this var to show them
Animal.prototype.nickName = "";
Animal.prototype.oldnickName = "";
Animal.prototype.skinImgName = null; //eg. mouse.png
Animal.prototype.skinNotLoadedColor = "#75ce67"; //draw color when no skin is yet loaded

Animal.prototype.flag_lowWat = false;
Animal.prototype.flag_tailBitten = false;
Animal.prototype.flag_underWater = false;
Animal.prototype.flag_eff_stunned = false;
Animal.prototype.flag_eff_frozen = false;
Animal.prototype.flag_eff_shocked = false;
Animal.prototype.flag_eff_shivering = false;

Animal.prototype.flag_usingAbility = false;
Animal.prototype.flag_eff_invincible = false;
Animal.prototype.flag_eff_healing = Animal.prototype.flag_eff_poison = Animal.prototype.flag_eff_bleeding = false;
Animal.prototype.flag_eff_hot = false;

Animal.prototype.flag_iceSliding = false;
Animal.prototype.underwaterA = 0.0; //for fading animal under water
Animal.prototype.nickNameA = 0.0;
Animal.prototype.nickTXTcolor = "#FFFFFF";
Animal.prototype.bleedingA = 0.0;
Animal.prototype.stunA = 0.0; //for fading animal under water
Animal.prototype.shockedEffA = 0.0;
Animal.prototype.frozenEffA  = Animal.prototype.onFireEffA = Animal.prototype.effA_healing = Animal.prototype.effA_hot = 0.0;
Animal.prototype.effA_poison = Animal.prototype.effA_bleeding = Animal.prototype.effA_stunk = 0.0;
Animal.prototype.effA_constricted = Animal.prototype.effA_slimed = Animal.prototype.effA_webStuck = 0.0; //for fading animal under water
Animal.prototype.objs = [];

Animal.prototype.nameA = 0.0;
Animal.prototype.loadedSkinImg = null;
Animal.prototype.outlineW = null;
Animal.prototype.teamID = 0;
Animal.prototype.wins1v1 = 0;
Animal.prototype.birdNoAnimationFlyWingAngle = -0.2;
//name font size
Animal.prototype.setSkinScale = function () {
    this.skinRad = this.rad - this.outlineW;
    this.skinScale = 1.4705882352941;
};
Animal.prototype.getNameSize = function() {
  return 10.0; //Math.max(~~(.3 * this.size), 24)
};

Animal.prototype.setNick = function(a) {
  //if (this.nickName = a) {
  this.nickName = a;
   this.oldnickName = this.nickName
  if (null == this.nickTXT) {
   
    
    this.nickTXT = new CachedText(this.getNameSize(),  this.nickTXTcolor); //"#043400");
    this.nickTXT.strokeW = 1.5;
    this.nickTXT.multiLine = false;
    this.nickTXT.playername = true

    this.nickTXT.renderScale = 5.0; //render larger to undo 'zoom of 3x'
    this.nickTXT.setText(this.nickName);
  } else {
    this.nickTXT.setFontSize(this.getNameSize());
    this.nickTXT.setText(this.nickName);
 

  }
  
    
  //}
};

//drawing helpers
Animal.prototype.drawSharinganAtPos = function(x, y) {
  
            var theImg = getLoadedImg(
          "img/ability_kamuieye.png"
        );
                  //console.log(toDegrees(135))
        if (theImg) {
  var eyeRad = 4.5;
          ctx.save();
          ctx.rotate(toRadians(166));
          ctx.drawImage(theImg, -x, -y, eyeRad * 2, eyeRad * 2);
          //console.log("drawing banana");
          ctx.restore();
        }
};

Animal.prototype.drawEyeAtPos = function(x, y) {
  var eyeRad = 4.5;

  ctx.beginPath();
  ctx.arc(x, y, eyeRad, 0, Math.PI * 2); //white bg
  ctx.fillStyle = "black";
  //ctx.globalAlpha = 1;
  ctx.fill();

  //ctx.restore();

  ctx.beginPath();
  ctx.fillStyle = "white"; //"rgba(255,255,255,0.8)";
  var px = x - 2;
  var py = y - 1; //+ eyeRad * 0.41 * Math.sin(-this.angle + 3.29);
  ctx.arc(px, py, eyeRad * 0.22, 0, Math.PI * 2); //pupil
  //ctx.arc(x - 2, y - 1, eyeRad * 0.2, 0, Math.PI * 2); //pupil
  ctx.fill();
};
Animal.prototype.animalInfo = function() {
  var infoO = {};
  switch (this.animalType) {
    case a_snail:
      infoO.aniName = "Snail";
      infoO.aniDesc = "";
      infoO.upgradeText = "You're a super slow snail!";

      infoO.aniCol = "#fcc02b";
      infoO.skinName = "snail";
      break;
          case a_bigfoot:
            infoO.aniName = "The BigFoot";
            infoO.aniDesc = "";
            infoO.upgradeText= 'UPGRADED to ' + infoO.aniName + `! So it really exists... \n
 Right click/W to throw Spears. \n
Hold to make a fire (every 30s)`;
            infoO.aniCol = "#839eb5";
            infoO.skinName = "bigfoot/thebigfoot";
        break;
        case a_kingdragon:
            infoO.aniName = "King Dragon";
            infoO.aniDesc = "";
            infoO.upgradeText = "!\
You got firestream that burns your victim alive! Watch your tail and slap them hard.";

            infoO.aniCol = "black";
            infoO.skinName = "kingdragon/kingdragon";
            break;
          case a_scorpion:
            infoO.aniName = "Giant Scorpion";
            infoO.aniDesc = "";
            infoO.upgradeText = 'UPGRADED to ' + infoO.aniName + "\nSting and Shiver your prey to death.\n(Press W to Sting)";

            infoO.aniCol = "#fcc02b";
            infoO.skinName = "giantscorpion";
            break;
       case a_pterodactyl:
            infoO.aniName = "Pterodactyl";
            infoO.aniDesc = "";
            infoO.upgradeText = 'UPGRADED to ' + infoO.aniName + '\nFly and dive onto prey to pick it up.';

            infoO.aniCol = "#fcc02b";
            infoO.skinName = "pterodactyl";
            break;
         case a_lochness:
            infoO.aniName = "Loch Ness";
            infoO.aniDesc = "";
               infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Tear Apart your preys with your mouth!";

            infoO.aniCol = "#fcc02b";
            infoO.skinName = "lochness/lochness";
            break;
        case a_griffin:
            infoO.aniName = "Griffin";
            infoO.aniDesc = "";
          infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Catch Animals with your strong claws!";

            infoO.aniCol = "#22FF8A";
            infoO.skinName = "griffin";
            break;
        
                case a_finaldragon:
            infoO.aniName = "Final Dragon";
            infoO.aniDesc = "";
               infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Fly Tail Slap and fire stream! you're powerful!";

            infoO.aniCol = "#fcc02b";
            infoO.skinName = "lochness/lochness";
            break;
             case a_santa:
            infoO.aniName = "Santa";
            infoO.aniDesc = "";
                  infoO.upgradeText =
                "UPGRADED to " +
              infoO.aniName +
            "!\n Drop Gifts with S (random loots!)"
   
            infoO.aniCol = "#22FF8A";
            infoO.skinName = "eagle/eagle";
            break;
       
    
         
       case a_mouse:
            infoO.aniName = "Mouse";
            infoO.aniDesc = "dsdfsd";
            infoO.upgradeText = "UPGRADED to MOUSE!\n A tiny mouse...";
            infoO.aniCol = "#9BA9B9";
            infoO.skinName = "mouse";
            break;
    case a_rabbit:
            infoO.aniName = "Rabbit";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to RABBIT! \nPress W to burrow a hole to hide in!";
            infoO.aniCol = "#AA937E";
            infoO.skinName = "rabbit";
            break;
    case a_pig:
      infoO.aniName = "Pig";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to PIG! \nPress W to stink everyone!";
      infoO.aniCol = "#DD6BD4";
      infoO.skinName = "pig";
      break;
                /*case a_pig:
            infoO.aniName = "Pig";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to PIG! \nPress W to stink everyone!";
            infoO.aniCol = "#AA937E";
            infoO.skinName = "pig";
            
            
            
                  infoO.upgradeText =
        "UPGRADED to FOX! ,\n You can kick players out of hiding holes! (Press W when in one!)\n+ Hide in red berry bushes!";
            
            break;*/
    case a_fox:
      infoO.aniName = "Fox";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to FOX! ,\n You can block hiding holes to kick players out! (Press W when in one!)\n+ Hide in red berry bushes!";
      infoO.aniCol = "#FF9D43";
      infoO.skinName = "fox";
      break;
    case a_deer:
      infoO.aniName = "Deer";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to DEER! \nPress W to dig up food! \nDig in mud for better food!\n Hint:Check water areas for new food sources!";
      infoO.aniCol = "#C4773E";
      infoO.skinName = "deer";
      break;
    case a_mole:
      infoO.aniName = "Mole";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to MOLE!\n Hold W to dig underground!\nGo under anything, do surprise attacks!";
      infoO.aniCol = "#4C4A45";
      infoO.skinName = "mole";
      break;
    case a_zebra:
      infoO.aniName = "Zebra";
      infoO.aniDesc = "";
      infoO.upgradeText = "UPGRADED to ZEBRA! \nPress W to kick side ways!";
      infoO.aniCol = "#FFFFFF";
      infoO.skinName = "zebra";
      break;
    case a_lion:
      infoO.aniName = "Lion";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to LION!\n Press W to release a mighty ROAR (Rawr!)!";
      infoO.aniCol = "#f8c923";
      infoO.skinName = "lion";
      break;

    //case a_cheetah:
    //    infoO.aniName = "Cheetah";
    //    infoO.aniDesc = "";
    //    infoO.upgradeText = "UPGRADED to CHEETAH!\n Press W to get a speed boost! (Every 8 seconds)!";
    //    infoO.aniCol = "#CAC05B";
    //    infoO.skinName = "cheetah";
    //    break;
    case a_bear:
      infoO.aniName = "Bear";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to BEAR!\n Bears climb through green hills! (Press W to use your claw!)";
      infoO.aniCol = "#99591C";
      infoO.skinName = "bear";
      break;
    case a_croc:
      infoO.aniName = "Croc";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to CROCODILE!\n Press W to bite and drag around animals! \n+ (Now hide in water spots)+ Swim well in Mud, Lakes & Oceans!";
      infoO.aniCol = "#30F51C";
      infoO.skinName = "croc";
      break;
    case a_hippo:
      infoO.aniName = "Hippo";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to HIPPO!\nHippos are great swimmers, dominate the Lakes/Oceans/Mud!";
      infoO.aniCol = "#945A99";
      infoO.skinName = "hippo/0/hippo";
      break;
    case a_rhino:
      infoO.aniName = "Rhino";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to RHINO!\n Press W to CHARGE with your mighty horn!";
      infoO.aniCol = "#94a3a9";
      infoO.skinName = "rhino";
      break;
    case a_shrimp:
      infoO.aniName = "Shrimp";
      infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to SHRIMP!\n A mini shrimp...";
      infoO.aniCol = "#f88e37";
      infoO.skinName = "shrimp";
      break;
    case a_trout:
      infoO.aniName = "Trout";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to TROUT!\nHint: Hold Left-click to RUN! (Uses extra water)";
      infoO.aniCol = "#ac8686";
      infoO.skinName = "trout";
      break;
    case a_crab:
      infoO.aniName = "Crab";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to CRAB!\n Crabs can survive on dry land!\n (On land, Press W to go into your shell!)";
      infoO.aniCol = "#bf2408";
      infoO.skinName = "crab";
      break;
    case a_squid:
      infoO.aniName = "Squid";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to SQUID!\n Squids can use INK when injured (press W!) \n+ you can hide in plankton bushes!";
      infoO.aniCol = "#40dda4";
      infoO.skinName = "squid";
      break;
    case a_shark:
      infoO.aniName = "Shark";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to SHARK!\n A vicious predator of the oceans!";
      infoO.aniCol = "#999fc6";
      infoO.skinName = "shark";
      break;
    case a_seaHorse:
      infoO.aniName = "Sea-horse";
      infoO.aniDesc = "";
      infoO.upgradeText = "UPGRADED to SEA HORSE!\n An agile hunter!";
      infoO.aniCol = "#73BE2F";
      infoO.skinName = "seahorse";
      break;
    case a_jellyFish:
      infoO.aniName = "Jellyfish";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to JELLYFISH!\n A slowly-turning animal that can grow quite large!";
      infoO.aniCol = "#FDB9BA";
      infoO.skinName = "jellyfish";
      break;
    case a_turtle:
      infoO.aniName = "Turtle";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to TURTLE!\n Lives well on land & water! (On land, Press W to go into your shell!)";
      infoO.aniCol = "#502E1A";
      infoO.skinName = "turtle";
      break;
    case a_stingray:
      infoO.aniName = "Stringray";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to STINGRAY!\n Use electic shock (Release W key!) to shock animals! \n(Takes time to recharge)";
      infoO.aniCol = "#164336";
      infoO.skinName = "stingray";
      break;
    case a_kraken:
      infoO.aniName = "The Kraken";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to THE KRAKEN!\n Terrorize the oceans, and be feared by all!\n (Release W to use whirlpool ability!)";
      infoO.aniCol = "#64a034";
      infoO.skinName = "kraken";
      break;
    case a_pufferFish:
      infoO.aniName = "Pufferfish";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to PUFFERFISH!\n (Hold W to inflate- become spiky, and dangerous to touch!)";
      infoO.aniCol = "#6C5C2C";
      infoO.skinName = "pufferfish";
      break;
    case a_killerWhale:
      infoO.aniName = "Killer Whale";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Killer Whale! \nWhales blow out water when diving! (And sometimes other loot!)";
      infoO.aniCol = "#141414";
      infoO.skinName = "killerwhale";
      break;
    case a_swordfish:
      infoO.aniName = "Swordfish";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n (Press W to rush with your sharp nose!)";
      infoO.aniCol = "#689CD7";
      infoO.skinName = "swordfish";
      break;
    case a_gorilla:
      infoO.aniName = "Gorilla";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Gorillas are very fast on hills/trees!\n Press W to throw bananas! (from trees)";
      infoO.aniCol = "#323232";
      infoO.skinName = "gorilla";
      break;
    case a_octopus:
      infoO.aniName = "Octopus";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Octopus!\nHold W to use your 'Disguise' ability!\n(Hint: wait for prey to bite you- they get stunned!)";
      infoO.aniCol = "#ff8340";
      infoO.skinName = "octopus";
      break;
    case a_dragon:
      infoO.aniName = "Dragon";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n (You're amazing!) \nFly over everything, Hold W to shoot fire!";
      infoO.aniCol = "#22FF8A";
      infoO.skinName = "dragon/0/dragon";
      break;
    case a_blackDragon:
      infoO.aniName = "Black Dragon";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n " + infoO.aniName + "s drink lava instead of water! " + infoO.aniName + "s only heal on healing stones/lava!";
      infoO.aniCol = "black";
      infoO.skinName = "blackdragon/blackdragon";
      break;

    case a_giantSpider:
      infoO.aniName = "Giant Spider";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Place web around the game to catch prey!";
      infoO.aniCol = "black";
      infoO.skinName = "giantSpider";
      break;

    case a_cobra:
      infoO.aniName = "Cobra";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Hold W to Spit venom, and poison animals with your bite!";
      infoO.aniCol = "black";
      infoO.skinName = "cobra";
      break;

    case a_boaConstrictor:
      infoO.aniName = "Boa Constrictor";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Coil and suffocate other animals!";
      infoO.aniCol = "black";
      infoO.skinName = "boaConstrictor2";
      break;

    case a_trex:
      infoO.aniName = "T-REX";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        " The Dinosaur!\n This ancient dinosaur has powerful jaws that can drag prey around!!";
      infoO.aniCol = "#862A2A";
      infoO.skinName = "trex";
      break;

    case a_giraffe:
      infoO.aniName = "Giraffe";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Giraffe!\nGiraffe have huge legs and stomp anyone in their way!";
      infoO.aniCol = "#E9BD23";
      infoO.skinName = "giraffe";
      break;

       case a_tiger:
      infoO.aniName = "Tiger";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Tiger!\nTigers can launch an ambush attack (HOLD W to grow a bush)!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "tiger";
      break;
      
             case a_skink:
      infoO.aniName = "Skink";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Skink!\n Skins can press W to release your tail!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "skink";
      break;
      
                   case a_sloth:
      infoO.aniName = "Sloth";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Sloth!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "sloth";
      break;
      
                         case a_taver:
      infoO.aniName = "Tavershad";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Tavershad!\n Tee see e see aver wad? Eees waver havers ta TAVERSHOUT!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "taver";
      break;
      
                               case a_tornado:
      infoO.aniName = "Tornado";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Tornado!\n Suck animals in your whirlwind!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "tornado0";
      break;
      
                                       case a_minibd:
            infoO.aniName = "Baby Black Dragon";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Baby Black Dragon!";
            infoO.aniCol = "#FF9000";
        if (this.species == 0) {
           infoO.skinName = "cursedbd"; 
        } else {
            infoO.skinName = "blackdragonmini";
        }
            break;
      
                         case a_waterbear:
      infoO.aniName = "Tardigrade";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Tardigrade!\n Roll into a unstoppable ball and smash into your opponents!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "waterbear/water_bear";
      break;
      
      
                                    case a_beluga:
      infoO.aniName = "Beluga";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Beluga!\n Press W to click wildly stunning players for a bit";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "beluga";
      break;
      
                      case a_cachalot:
            infoO.aniName = "Cachalot";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Cachalot!\n Smash you head into players sending them flying!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "cachalot";
            break;
      
                                                    case a_tadpole:
            infoO.aniName = "Tadpole";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n A baby tadpole..."; 
            infoO.aniCol = "#FF9000";
            infoO.skinName = "tadpole";
            break;
      
                                                          case a_glaciermonster:
            infoO.aniName = "Glacier Monster";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n A fearsome, slow moving arctic animal that is faster in water and hills (10% slower)\n Ambush your prey and freeze them multiple times!\n If you miss youll stun yourself"; 
            infoO.aniCol = "#FF9000";
            infoO.skinName = "arcticsnake";
            break;
      
      
      
                                              case a_beaver:
            infoO.aniName = "Beaver";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Beaver!\n A animal adapted to land and ocean \n Spawn dams that block animals and water \n (Hint: Use on a river to overflow it and block prey from passing)";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "beaver";
            break;
      
      
                                      case a_lavacolossal:
            infoO.aniName = "Lava Colossial";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Lava Colossial ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "lavacolossal";
            break;
      
                              case a_bigfin:
            infoO.aniName = "Big Fin Squid";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Big Fin Squid!\n Press W to shoot out a tentacle that grabs and pulls animals!\n Press Q to shoot out another tentacle that latches and pulls you towards animals! ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "bigfin";
            break;
      
                                      case a_titanboa:
            let extrastart = ["Mighty", "Ancient", "Great", "Legendary", "The"];
            infoO.aniName = extrastart[Math.floor(Math.random() * extrastart.length)] + " Titanboa";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Titanboa";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "titanboa";
            break;
      
                                            case a_edgepi:
            let tonas = ["Tona Swona!", "Ohehehe!", "Ohehehe!", "Mona!", "The Hapona!"];
            infoO.aniName = "Edgepi\n" + tonas[Math.floor(Math.random() * tonas.length)];
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Edgepi Ohehehehe\n Frona Edgepiland Missisipi tona mona swona bigona friona, hapona ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "edgepi/0/edgepi";
            break;
                      
      
                                      case a_bigmouse:
            infoO.aniName = "Obese Mouse";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Obese Mouse!\n You are a BOSS! ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "boss/mouse";
            break;
                         case a_secretarybird:
      infoO.aniName = "Secretary Bird";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Tardigrade!\n Roll into a unstoppable ball and smash into your opponents!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "secretarybird/secretarybird";
      break;
      
      
                                                    case a_flock:
            infoO.aniName = "Flock";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Slug!\n Slugs can secreate a slimy mucus.";
            infoO.aniCol = "#5CAAD3";
            infoO.skinName = "flock";
            break;
      
                                              case a_slug:
            infoO.aniName = "Slug";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to Slug!\n Slugs can secreate a slimy mucus.";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "slug/0/slug";
            break;
      
                               case a_astraldragon:
      infoO.aniName = "Astral Dragon!";
      infoO.aniDesc = "";
     /* infoO.upgradeText =
        "UPGRADED to Astral Dragon!\n Astral Dragons can shoot a burning comet that explodes on impact! \n They can also fly high by pressing q and shoot stars at opponents! (15s cooldown)"; */
            infoO.upgradeText =
        "UPGRADED to Astral Dragon!\nA majestic space dragon. Unleash your inner powers and the will of ᚦᛖ ᛊᛖᚢᛖᚾᚦ ᛟᚾᛖ. \n Astral Dragons can shoot a burning comet that causes a mini supernova! \n They can also fly high by pressing q and shoot stars at opponents! (15s cooldown)";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "astraldragon";
      break;

		                                 case a_astraltrex:
      infoO.aniName = "Celestial Trex!";
      infoO.aniDesc = "";
     /* infoO.upgradeText =
        "UPGRADED to Astral Dragon!\n Astral Dragons can shoot a burning comet that explodes on impact! \n They can also fly high by pressing q and shoot stars at opponents! (15s cooldown)"; */
            infoO.upgradeText =
        "UPGRADED to Celestial Trex!\nA majestic space dragon. Unleash your inner powers and the will of ᚦᛖ ᛊᛖᚢᛖᚾᚦ ᛟᚾᛖ. \n Astral Dragons can shoot a burning comet that causes a mini supernova! \n They can also fly high by pressing q and shoot stars at opponents! (15s cooldown)";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "astraltrex/astraltrex";
      break;
      
                   case a_leopardseal:
      infoO.aniName = "Leopard Seal";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Leopard Seal!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "leopardseal";
      break;
      
    case a_eagle:
      infoO.aniName = "Eagle";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Eagle!\nEagles can fly up other animals in the air! !\n They can also fly high by double clicking!";
      infoO.aniCol = "#5b400d";
      infoO.skinName = "eagle";
      break;

    case a_arcticFox:
      infoO.aniName = "Arctic Fox";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n You can block hiding holes to kick players out! (Press W when in one!)\n+ Hide in red berry bushes!";
      infoO.aniCol = "#CFCFCF";
      infoO.skinName = "arctic/arcticfox";
      break;
    case a_arcticHare:
      infoO.aniName = "Arctic Hare";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n \nPress W to burrow a hole to hide in!";
      infoO.aniCol = "#D5D5D5";
      infoO.skinName = "arctic/arctichare";
      break;
    case a_yeti:
      infoO.aniName = "The Yeti!";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n So it really exists... \n Hold W to turn into snow, release W to freeeeeze!";
      infoO.aniCol = "#839eb5";
      infoO.skinName = "arctic/yeti";
      break;
    case a_chipmunk:
      infoO.aniName = "Chipmunk";
      infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n A little chipmunk..."; //A little "+infoO.aniName+"...";
      infoO.aniCol = "#A77C30";
      infoO.skinName = "arctic/chipmunk";
      break;

    case a_muskox:
      infoO.aniName = "Muskox";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Press W to charge with your horns! \nPlus move decently on ice!";
      infoO.aniCol = "#231f18";
      infoO.skinName = "arctic/muskox";
      break;
      
          case a_pondturtle:
      infoO.aniName = "Pond Turtle";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n You are a bottomfeeder, press W to suck up food and animals!";
      infoO.aniCol = "#231f18";
      infoO.skinName = "pondturtle/pondturtle";
      break;
      
                              case a_pike:
            infoO.aniName = "Pike";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Hold W to hide underwater and use a lotus as a bait animals and rush them! \nTip: You can eat your own lotus!";
            infoO.aniCol = "#231f18";
            infoO.skinName = "pike/pike";
            break;
      
      
                                                        case a_cakemonster:
            infoO.aniName = "Cake Monster";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can throw cakes that explodes!";
            infoO.aniCol = "#231f18";
            infoO.skinName = "cakemonster";
            break;
      
                                                                          case a_clownfish:
            infoO.aniName = "Clownfish";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n A small clownfish... \n You're immune to anemones!";
            infoO.aniCol = "#231f18";
            infoO.skinName = "clownfish";
            break;
      
                                                                         case a_searobin:
            infoO.aniName = "Sea Robin";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can open your fins to speed up and detect diving animals! \n(Hint: You can walk on land!)";
            infoO.aniCol = "#231f18";
            infoO.skinName = "searobin/searobin";
            break;
        
                                                                                  case a_cuttlefish:
            infoO.aniName = "Cuttlefish";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can open your fins to speed up and detect diving animals! \n(Hint: You can walk on land!)";
            infoO.aniCol = "#231f18";
            infoO.skinName = "cuttlefish/cuttlefish";
            break;
		  		                                                            case a_catfish:
            infoO.aniName = "Catfish";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can open your mouth and swallow animals!";
            infoO.aniCol = "#231f18";
            infoO.skinName = "catfish/catfish";
            break;
		    		                                                            case a_horseshoe:
            infoO.aniName = "Horseshoe Crab";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can block attacks at the front but watch out for your backside! \n(Hint: You can walk on land!) ";
            infoO.aniCol = "#231f18";
            infoO.skinName = "horseshoecrab";
            break;

		    		    		                                                            case a_easterbunny:
            infoO.aniName = "Easter Bunny";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Press w to lay a fake egg and press Q to do a giant hop. ";
            infoO.aniCol = "#231f18";
            infoO.skinName = "easterbunny";
            break;

		  		    		                                                            case a_testsnake:
            infoO.aniName = "Death Worm";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n You can block attacks at the front but watch out for your backside! \n(Hint: You can walk on land!) ";
            infoO.aniCol = "#231f18";
            infoO.skinName = "testsnake/testsnake";
            break;
		  
		  		            case a_obd:
            infoO.aniName = "Black Dragon";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n " + infoO.aniName + "s drink lava instead of water! " + infoO.aniName + "s only heal on healing stones/lava!";
            infoO.aniCol = "black";
            infoO.skinName = "obd/1/obd";
            break;
      
                                    case a_manatee:
            infoO.aniName = "Manatee";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Press W to charge with your horns! \nPlus move decently on ice!";
            infoO.aniCol = "#231f18";
            infoO.skinName = "manatee";
            break;
      
                      case a_pengu:
            infoO.aniName = "Galapagos Penguin";
            infoO.aniDesc = "";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Left-click to run!\n (HOLD W to slide FAST on ice)!";
            infoO.aniCol = "#FFFFFF";
            infoO.skinName = "arctic/penguin/3/penguin";
            break;
    case a_penguin:
      infoO.aniName = "Penguin";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Left-click to run!\n (HOLD W to slide FAST on ice)!";
      infoO.aniCol = "#FFFFFF";
      infoO.skinName = "arctic/penguin";
      break;
    case a_polarBear:
      infoO.aniName = "Polar Bear";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Polar bears can climb hills! \n+ They're amazing swimmers!";
      infoO.aniCol = "#e4e4e4";
      infoO.skinName = "arctic/polarbear";
      break;
    case a_seal:
      infoO.aniName = "Seal";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Seals can slide on ice (Hold W) + can climb hills (rocks too!)";
      infoO.aniCol = "#cfcfcf";
      infoO.skinName = "arctic/seal";
      break;
    case a_snowLeopard:
      infoO.aniName = "Snow leopard";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Press W to get a speed boost! (Every 8 seconds)!";
      infoO.aniCol = "#cfcfcf";
      infoO.skinName = "arctic/snowleopard";
      break;
    case a_walrus:
      infoO.aniName = "Walrus";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n You can slide on ice (Hold W) + can climb hills (rocks too!)";
      infoO.aniCol = "#633838";
      infoO.skinName = "arctic/walrus";
      break;
    case a_reindeer:
      infoO.aniName = "Reindeer";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Press W to dig up food! \n Your sharp hooves let you turn very well on ice!";
      infoO.aniCol = "#a68976";
      infoO.skinName = "arctic/reindeer";
      break;
    case a_wolf:
      infoO.aniName = "Wolf";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Wolf paws turn very well on ice!\n Press W to howl!";
      infoO.aniCol = "#6B6B6B";
      infoO.skinName = "arctic/wolf/0";
      break;
    case a_wolverine:
      infoO.aniName = "Wolverine";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Press W to Let out a Powerful GROWL! (Knocks back prey!)";
      infoO.aniCol = "#843A0F";
      infoO.skinName = "arctic/wolverine";
      break;
    case a_mammoth:
      infoO.aniName = "Mammoth";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Press W to roll snowballs with your trunk!\n The bigger the snowball gets, the longer the freeze!";
      infoO.aniCol = "#9d4717";
      infoO.skinName = "arctic/mammoth";
      break;
    case a_donkey:
      infoO.aniName = "Donkey";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Press W to Kick any animal behind you";
      infoO.aniCol = "#8c7c64";
      infoO.skinName = "donkey/0/donkey";
      break;
    /* NEW ANIMALS */
    case a_sabertoothTiger:
      infoO.aniName = "Sabertooth Tiger";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Sabertooth Tiger!\nSabertooth Tigers are great swimmers, dominate the Lakes/Oceans/Mud!";
      infoO.aniCol = "#945A99";
      infoO.skinName = "sabertoothtiger";
      break;
    case a_elephant:
      infoO.aniName = "Elephant";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Use your long trunk to attack and eat food!";
      infoO.aniCol = "#945A99";
      infoO.skinName = "elephant";
      break;
      
      case a_cassowary:
      infoO.aniName = "Cassowary";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Hold W to charge up a kick, the longer you hold, the more powerful it is!";
      infoO.aniCol = "#000000";
      infoO.skinName = "cassowary/cassowary";
      break;
      
      case a_flamingo:
      infoO.aniName = "Flamingo";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Hold W in water to search for food underwater.\n (Tip: Any nearby underwater animals will get surfaced by the flamingo!)";
      infoO.aniCol = "#000000";
      infoO.skinName = "flamingo/flamingo";
      break;
      
      case a_peacock:
      infoO.aniName = "Peacock";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n Hold W to hypnotize prey: Prey gets pulled in, predators get pushed!\n Hint: Start the ability on a hill to fly!";
      infoO.aniCol = "#000000";
      infoO.skinName = "peacock";
      break;

    case a_blueWhale:
      infoO.aniName = "Blue Whale";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Blue Whale!\n Smash with your powerful tail!";
      infoO.aniCol = "#945A99";
      infoO.skinName = "bluewhale";
      break;

    // case a_duck:
    //   infoO.aniName = "Duck";
    //   infoO.aniDesc = "";
    //   infoO.upgradeText = "UPGRADED to a DUCK!";
    //   infoO.aniCol = "#FF9000";
    //   infoO.skinName = "duck";
    //   break;
    // case a_duckling:
    //   infoO.aniName = "Duckling";
    //   infoO.aniDesc = "";
    //   infoO.upgradeText = "UPGRADED to a DUCK!";
    //   infoO.aniCol = "#FF9000";
    //   infoO.skinName = "duckling";
    //   break;

    case a_hedgehog:
      infoO.aniName = "Hedgehog";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Hedgehog!\n (Hold W to become spiky, and dangerous to touch!)";
      infoO.aniCol = "#5b400d";
      infoO.skinName = "hedgehog";
      break;

    case a_kingCrab:
      infoO.aniName = "Karkinos";
      infoO.aniDesc = "";
      infoO.upgradeText = "UPGRADED to a KARKINOS!\n Smash with your powerful claws!";
      infoO.aniCol = "#971f0e";
      infoO.skinName = "kingcrab";
      break;
    case a_lemming:
      infoO.aniName = "Lemming";
      infoO.aniDesc = "";
      infoO.upgradeText = "A little Lemming... (A snow mouse!)"; //A little "+infoO.aniName+"...";
      infoO.aniCol = "#A77C30";
      infoO.skinName = "arctic/lemming";
      break;

    case a_frog:
      infoO.aniName = "Frog";
      infoO.aniDesc = "";
      infoO.upgradeText = "UPGRADED to Frog!!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "frog/frog";

      break;

    case a_ostrich:
      infoO.aniName = "Ostrich";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Ostrich! Lay eggs to hatch babies! \nCommand babies by placing your crosshair (right-click/W)-\n They can attack prey!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "ostrich/ostrich";

      break;
    case a_pelican:
      infoO.aniName = "Pelican";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Pelican! \nPick up water (and prey!) in your mouth,\nfly, and drop water on prey! (press W again)";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "pelican/pelican";

      break;
    case a_falcon:
      infoO.aniName = "Falcon";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Falcon! \nFly, and do a powerful dive attack! Aim it well.";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "falcon/0/falcon";

      break;
  case a_thunderbird:

            infoO.aniName = "The Thunderbird!";
            infoO.aniDesc = "";
       infoO.upgradeText = "UPGRADED to Thunderbird! \nFly, and do a powerful thunderous dive attack!\nWhen flying stay still to blend with the sky!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "thunderbird/thunderbird";

            break;
    case a_snowyOwl:
      infoO.aniName = "Snowy Owl";
      infoO.aniDesc = "";
      infoO.upgradeText =
        "UPGRADED to Snowy Owl!\n Aim the crosshair, \n right click/W when it's on top of prey, to attack!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "snowyowl/snowyowl";

      break;

    case a_ostrichBaby:
      infoO.aniName = "Baby Ostrich";
      infoO.aniDesc = "";
      infoO.upgradeText = "UPGRADED to Baby Ostrich!!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "ostrich/ostrich-baby";

      break;
    case a_phoenix:
      infoO.aniName = "Phoenix";
      infoO.upgradeText =
        "UPGRADED to Phoenix!\nCreate powerful fire tornados to burn your enemies alive!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "phoenix/";
      break;

    case a_seaMonster:
      infoO.aniName = "Sea Monster";
      infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Become a massive whirlpool and bite and attack your prey";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "monsters/seamonster";
      break;
    case a_landMonster:
      infoO.aniName = "Land Monster";
      infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Create Sink holes to trap prey and press Q to Fly High!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "landmonster";
      break;
        case a_iceMonster:
            infoO.aniName = "Ice Monster";
            infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Use powerful ice shards to freeze your prey!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "monsters/icemonster/icemonster";
            break;
    case a_dinoMonster:
      infoO.aniName = "Dino Monster";
      infoO.upgradeText = "UPGRADED to Dino Monster!\nPlease use the W key or the right-click button to unleash a powerful attack on your target\n with the same force as two T-Rexes. To launch your target into the air,\n simply release the W key or right-click.";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "dinomonster";
      break;
    case a_pigeon:
      infoO.aniName = "Pigeon";
      infoO.upgradeText =
        "UPGRADED to Pigeon!\nHold right click (or W) to fly!\n";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "pigeon/pigeon";
      break;
    case a_toucan:
      infoO.aniName = "Toucan";
      infoO.upgradeText =
        "UPGRADED to Toucan!\nHold right click (or W) to fly!(HINT: Start flying from a fruit tree or bush to throw fruit upon landing!)";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "toucan/toucan";

      break;
      
    case a_menhir:
      infoO.aniName = "Menhir";
      infoO.upgradeText =
        "UPGRADED to Menhir!\nMen Hir Hir Hir!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "menhir";

      break;
      
      case a_crackedhir:
      infoO.aniName = "Menhir";
      infoO.upgradeText =
        "UPGRADED to Cracked Menhir!\nYou exploded too hard but luckly you survived! ";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "crackedmenhir";

      break;
      
      case a_alligator:
            infoO.aniName = "Alligator";
            infoO.upgradeText = "UPGRADED to Alligator!\nSlap your tail on foes attacking you and thrash animals beneath the water's surface. ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "alligator";
            break;
      
      case a_eel:
            infoO.aniName = "Electric Eel";
            infoO.upgradeText = "UPGRADED to Electric Eel!\nUtilize the potential of electricity to generate a colossal electric aura! ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "eel";
            break;
      
      
            case a_stegosaurus:
            infoO.aniName = "Stegosaurus";
            infoO.upgradeText = "UPGRADED to Stegosaurus !\nSlap your opponents with the force of your tail!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "stegosaurus";
            break;
      
    case a_amalga:
            infoO.aniName = "Amalgamate";
            infoO.upgradeText = "UPGRADED to Amalgamate!\nYou're Amazing!. ";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "Amalga";
            break;

                  case a_capybara:
            infoO.aniName = "Capybara";
            infoO.upgradeText = "UPGRADED to Capybara !\nShoot Mandarin oranges that stuns with huge knockback!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "capybara";
            break;
      
                        case a_qilin:
            infoO.aniName = "Qilin";
            infoO.upgradeText = "UPGRADED to Qilin! \n You're amazing!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "qilin";
            break;
      

                        case a_gaur:
            infoO.aniName = "Gaur";
            infoO.upgradeText = "UPGRADED to Gaur! \nGaur is an extremely powerful animal that can kick, and use its horns to battle their opponent.";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "gaur/0/gaur";
            break;
      
            case a_sheep:
            infoO.aniName = "Sheep";
            infoO.upgradeText = "UPGRADED to Sheep !\nBaaah!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "sheep/0/sheep";
            break;
      
      
                case a_tortise:
            infoO.aniName = "Tortoise";
            infoO.upgradeText = "UPGRADED to Tortoise !\nSmash your foes with your tough shell!";
            infoO.aniCol = "#FF9000";
            infoO.skinName = "tortise/tortise";
            break;
      
       case a_topdragon:
      infoO.aniName = "EvilSprit";
      infoO.upgradeText =
        "UPGRADED to EvilSprit!\nYou're amazing!";
      infoO.aniCol = "#FF9000";
      infoO.skinName = "EvilSprit";

      break;

    default:
      infoO.aniName = "(Animal)";
      infoO.aniDesc = "";
      infoO.aniCol = "#000000";
      infoO.upgradeText = "UPGRADED!";
  }

  return infoO;
};

// load animal skin into a var that can be used later
Animal.prototype.loadAnimalSkinImg = function() {
  //get skin name

    
        var skinName = this.getSkinName();

  //grab/load skin
  this.loadedSkinImg = null;
  if (skinName && !options_noImages) {
          this.loadedSkinImg = getLoadedImg("./skins/" + skinName + ".png");
    }

   

  
};
//override GameObj method (in prototype!)

Animal.prototype.preLoad = function () {};
     Animal.prototype.shakeOffsetX = 0;
    Animal.prototype.shakeOffsetY = 0;
Animal.prototype.shiverF = 0.02;
Animal.prototype.customDraw = function(batchDrawOutline) {
  
  this.preLoad();

  var infoO = this.animalInfo(); //infoForAnimalType(this.animalType);
  var aniCol = infoO.aniCol;
  this.skinImgName = infoO.skinName;
  var tailLen = this.rad * 0.1;
  this.skinNotLoadedColor = aniCol;

  switch (this.animalType) {
    case a_pufferFish:
    case a_muskox:
    case a_swordfish:
    case a_turtle:
    case a_croc:
      tailLen = this.rad * 0.16;
      break;
  }

  this.loadAnimalSkinImg();

  ctx.save();
  ctx.rotate(this.angle);

  var rShift = 0;
  var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
  var period = 2.5;
  var rshiftAm = 0.7;
  rShift = rshiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

  //honeybee sting effect
  if (this.flag_eff_wobbling) {
    var wobble = getAnimFrame(tSinceSpawn, 1.25, 0.3, 2);
    this.rad += wobble;
  }

 
  //apply opacity from underwater effect
  var meplayer = gameObjsByID[myPlayerID];
  var idealOp =
    this.flag_underWater ||
    (this.flag_usingAbility &&
      ((this.animalType == a_mole || this.animalType == a_testsnake) ||

        this.isTransforming&& this.animalType == a_yeti || this.flag_stealth))
      ? 0.0
      : 1.0;
if (meplayer && meplayer.animalType == a_searobin && meplayer.flag_usingAbility && this.flag_underWater && meplayer != this) {
  idealOp = 0.6
}
  // specialy invisiblity for tiger
  if (this.flag_stealth) {
    if (this.animalType == a_seaHorse) idealOp = 0.0;
    // seahorse completely hides
    else idealOp = 0.2;
  }
  /*
     if (this.flag_ingenjutsu && this.id == myPlayerID ) {
const style = "html {-webkit-filter: invert(100%); -moz-filter: invert(100%); -o-filter: invert(100%); -ms-filter: invert(100%); }";
const head = document.getElementsByTagName("head")[0];
  const styleTag = document.createElement("style");

 
  styleTag.type = "text/css";
  if (styleTag.styleSheet) {
    styleTag.styleSheet.cssText = style;
  } else {   
    styleTag.appendChild(document.createTextNode(style));
  }
  head.appendChild(styleTag);
  this.genjutsuchange = 1



     } else {

  const style = "html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }";
   const head = document.getElementsByTagName("head")[0];
  const styleTag = document.createElement("style");
 

 
  styleTag.type = "text/css";
  if (styleTag.styleSheet) {
    styleTag.styleSheet.cssText = style;
  } else {
    styleTag.appendChild(document.createTextNode(style));
  }
  head.appendChild(styleTag);
               
         this.genjutsuchange = 0
     }
  */
  /* 
  
       if (this.flag_ingenjutsu && this.id == myPlayerID ) {
     //fun things with players invis
        
       (function () {
  const style = "html {-webkit-filter: invert(100%); -moz-filter: invert(100%); -o-filter: invert(100%); -ms-filter: invert(100%); }";
  const head = document.getElementsByTagName("head")[0];
  const styleTag = document.createElement("style");
 

 
  styleTag.type = "text/css";
  if (styleTag.styleSheet) {
    styleTag.styleSheet.cssText = style;
  } else {   
    styleTag.appendChild(document.createTextNode(style));
  }
  head.appendChild(styleTag);
}());

       

  } else {
        if (this.flag_ingenjutsu && this.id != myPlayerID ) {

        } else {
          
           (function () {
  const style = "html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }";
  const head = document.getElementsByTagName("head")[0];
  const styleTag = document.createElement("style");
 

 
  styleTag.type = "text/css";
  if (styleTag.styleSheet) {
    styleTag.styleSheet.cssText = style;
  } else {
    styleTag.appendChild(document.createTextNode(style));
  }
  head.appendChild(styleTag);
}());

        }
  }
  */ 

  
                      if (this.id == myPlayerID ) {
  
       if (!this.flag_kamui && this.kamuifilterswap != 0) {

this.kamuifilterswap = 0

  }
}
  
  
                  if (this.id == myPlayerID ) {
  
       if (this.flag_kamui && this.kamuifilterswap != 1) {
  var sound_click = getLazyLoadAudio("audio/kamui.mp3");
  if (sound_click) {
    try {
      sound_click.play();
    } catch (err) {}
  }
         
this.kamuifilterswap = 1

  }
}
  
  

  


                if (this.id == myPlayerID ) {
  
       if (this.flag_ingenjutsu && this.filterswap != 1) {
     //fun things with players invis

this.filterswap = 1

  var sound_click = getLazyLoadAudio("audio/mangekyo_sharingan.mp3");
  if (sound_click) {
    try {
      sound_click.play();
    } catch (err) {}
  }


                     style = "html {-webkit-filter: contrast(2) invert(100%); -moz-filter: contrast(2) invert(100%); -o-filter: contrast(2) invert(100%); -ms-filter: contrast(2) invert(100%); }";
   head = document.getElementsByTagName("head")[0];
   styleTag = document.createElement("style");
 


  styleTag.type = "text/css";
  if (styleTag.styleSheet) {
    styleTag.styleSheet.cssText = style;
  } else {
    styleTag.appendChild(document.createTextNode(style));
  }
  head.appendChild(styleTag); 





 
       

  } else {

  }
}
                if (this.id == myPlayerID ) {
       if (!this.flag_ingenjutsu && this.filterswap != 0) {
         this.filterswap = 0
                style = "html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }";
   head = document.getElementsByTagName("head")[0];
   styleTag = document.createElement("style");
 


  styleTag.type = "text/css";
  if (styleTag.styleSheet) {
    styleTag.styleSheet.cssText = style;
  } else {
    styleTag.appendChild(document.createTextNode(style));
  }
  head.appendChild(styleTag); 
            
       } 
                }
  
        var myPlayer23 = gameObjsByID[myPlayerID];

         if (myPlayer23) {

           if (this.flag_ingenjutsu && myPlayer23.flag_ingenjutsu) {
             if (!this.flag_oldinvisible) {
              this.flag_invisible = false
             }
           } else if (!this.flag_ingenjutsu && !myPlayer23.flag_ingenjutsu) {
             if (!this.flag_oldinvisible) {
              this.flag_invisible = false
             }
           } else {
              this.flag_invisible = true
           }
         } 
  
     if (this.flag_invisible && this.id == myPlayerID ) {
     //fun things with players invis

       
 ctx.globalAlpha = 0.5
  } else {
        if (this.flag_invisible && this.id != myPlayerID ) {
          ctx.globalAlpha = 0
        } else {
 
        }
  }
  
  if (this.flag_flying && this.id != myPlayerID ) { //fun things with players invis
    idealOp = 0.6;
  }

 if(this.animalType == a_thunderbird){
 
   if(this.flag_flying&&idealOp > this.transparancy / 100)
idealOp = this.transparancy / 100;
}   
  
   if(this.animalType == a_tiger){
 
   if(idealOp > this.transparancy / 100)
idealOp = this.transparancy / 100;
}  
  this.underwaterA += (idealOp - this.underwaterA) * 0.1;
  ctx.globalAlpha *= this.underwaterA;

  //flash when invincible
  if (this.flag_eff_invincible) {
    var period = 1.0; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.5 * (p_max - p_min);
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
        );
  }

  //animal under-skin outline (without stroke- optimized)
  this.outlineW = 2.0 + rShift;
if (this.rad < 20) {
  this.outlineW = (2.0 + rShift) * this.rad / 20
}
  if (
    !(
      this.dead ||
      this.flag_underWater ||
      ((this.animalType == a_mole || this.animalType == a_testsnake) && this.flag_usingAbility)
    )
  )
    if (gameMode == gameMode_teamMode && this.teamID != 0) {
      var teamColor = _gameMode.teamColors[this.teamID];
      /*
    if (this.teamID == 1) teamColor = "#ff0000";
    else if (this.teamID == 2) teamColor = "#00ff00";
    else if (this.teamID == 3) teamColor = "#0000ff";
    */
      ctx.save();
      ctx.globalAlpha = idealOp;
      drawCircle(0, 0, this.rad + 2, teamColor);
      ctx.restore();
    }
  var outlineCol = this.getOutlineColor();
  if (
    !(
    this.flag_flying || this.flag_isGrabbed||
 
   
      (this.animalType == a_tornado || options_lowGraphics &&
        !(outlineCol == col_edibleOutline || outlineCol == col_dangerOutline))
    )
  ) {
    //dont draw plain outlines!
    var originalglobalA = ctx.globalAlpha
          if (this.animalType == a_tadpole) {
    ctx.globalAlpha = originalglobalA/2;
      }
    drawCircle(0, 0, this.rad, outlineCol);
              if (this.animalType == a_tadpole) {
    ctx.globalAlpha = originalglobalA;
      }
    //if(outlineCol==col_dangerOutline)
  } else this.outlineW = 0;

  //draw tail
  if (
    this.animalType != a_rabbit &&
        this.animalType != a_tornado &&
    this.animalType != a_mouse &&
    this.animalType != a_crab
  ) {
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var period = 5.0;
    var shiftAm = 4.0;
    var tailAShift =
      shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

    var oWidSc = this.outlineW * 2.5; //scale with rad
    var tailW = 25.0; //angle width
    //tailLen = this.rad * 0.08; //angle width
    var pF = Math.PI / 180.0;

    //tail background (stroke)


        if (this.flag_eff_shivering) {
            var _0x333d1a = (timestamp - this.spawnTime) / 1000,
                _0x2b42c6 = this.rad * this.shiverF;
            this.shakeOffsetX = _0x2b42c6 * Math.sin(2 * Math.PI / 0.1 * _0x333d1a);
            _0x2b42c6 = this.rad * this.shiverF;
            this.shakeOffsetY = _0x2b42c6 * Math.sin(2 * Math.PI / 0.05 * _0x333d1a);
            ctx.translate(-this.shakeOffsetX, -this.shakeOffsetY);
        }

    if (this.flag_tailBitten) {
      ctx.fillStyle = col_dangerOutline;
    } else {
      var _thisAniType = this.animalType;
      
      if (tailBiteAniTypes[_thisAniType - 1] > 0 && this.id != myPlayerID) {
        ctx.fillStyle = col_edibleOutline; //edible
      } else {
        ctx.fillStyle = outlineCol;
      }
    }

    if (
      !(options_lowGraphics && ctx.fillStyle != col_outline_land) &&
      !this.flag_flying
    ) {
      //no plain tails

      
      ctx.beginPath();
      ctx.moveTo(
        (this.rad - this.outlineW + 1) *
          Math.cos((270 + tailW / 2.0 + oWidSc) * pF),
        (this.rad - this.outlineW + 1) * Math.sin((270 + tailW / 2.0) * pF)
      ); //bottom of tail
      ctx.lineTo(
        (this.rad - this.outlineW + 1) *
          Math.cos((270 - tailW / 2.0 - oWidSc) * pF),
        (this.rad - this.outlineW + 1) * Math.sin((270 - tailW / 2.0) * pF)
      ); //bottom of tail
      ctx.lineTo(
        (this.rad + tailLen + this.outlineW) *
          Math.cos((270 + tailAShift) * pF),
        (this.rad + tailLen + this.outlineW) * Math.sin((270 + tailAShift) * pF)
      ); //point
      ctx.lineTo(
        (this.rad - this.outlineW + 1) *
          Math.cos((270 + tailW / 2.0 + oWidSc) * pF),
        (this.rad - this.outlineW + 1) * Math.sin((270 + tailW / 2.0) * pF)
      ); //connect to start
      ctx.fill();

    }

    //tail inner drawing
    if (!options_lowGraphics) {
      if (!this.loadedSkinImg || this.flag_tailBitten) {
        ctx.fillStyle = this.flag_tailBitten ? col_dangerOutline : aniCol; //tail color
        ctx.beginPath();
        ctx.moveTo(
          (this.rad - this.outlineW) * Math.cos((270 + tailW / 2.0) * pF),
          (this.rad - this.outlineW) * Math.sin((270 + tailW / 2.0) * pF)
        ); //bottom of tail
        ctx.lineTo(
          (this.rad - this.outlineW) * Math.cos((270 - tailW / 2.0) * pF),
          (this.rad - this.outlineW) * Math.sin((270 - tailW / 2.0) * pF)
        ); //bottom of tail
        ctx.lineTo(
          (this.rad + tailLen) * Math.cos((270 + tailAShift) * pF),
          (this.rad + tailLen) * Math.sin((270 + tailAShift) * pF)
        ); //point
        ctx.lineTo(
          (this.rad - this.outlineW) * Math.cos((270 + tailW / 2.0) * pF),
          (this.rad - this.outlineW) * Math.sin((270 + tailW / 2.0) * pF)
        ); //connect to start
        ctx.fill();
      }
    }
  }

  this.drawUnderSkinImgOutline();
  this.drawUnderSkinImg();
  this.drawSkinImg();
  this.drawOnTopOfSkinImg();
  

  ctx.restore(); //done rotate/ opacity

  this.drawTopEffects();

  //low water drop
  if (this.flag_lowWat) {
    var period = 1.2; //periodic func with time
    var p_min = 0.2,
      p_max = 0.8; //set these!
    var amp = 0.5 * (p_max - p_min);
    var flashA =
      p_min +
      amp +
      amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

    ctx.save();
    ctx.globalAlpha = flashA;
    ctx.fillStyle =
      this.animalType == a_blackDragon || this.animalType == a_phoenix|| this.animalType == a_landMonster|| this.animalType == a_kingdragon || this.animalType == a_minibd
        ? col_lava
        : col_wat1;
 if(this.animalType == a_pterodactyl){
   ctx.fillStyle = "#ff894b"
 }
    ctx.beginPath();
    //sweat bottom
    ctx.arc(0, this.rad + 5, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  //player name text
  this.drawNickName(idealOp);

  this.drawCustomUIForAni();
  //ctx.restore();
};

Animal.prototype.drawCustomUIForAni = function() {
  if (gameMode == gameMode_teamMode && _gameMode) _gameMode.drawPlayerUI(this);
};

Animal.prototype.hasMultipleSpecies = function() {
  return false;
};

//first draw
Animal.prototype.drawNickName = function(idealOp) {
  var nameOpIdeal = idealOp;
  this.nickNameA += (nameOpIdeal - this.nickNameA) * 0.1;

  if (this.nickName && this.nickTXT && !options_noNames && !this.flag_invisible) {
  
    ctx.save();
    //player name text- without caching
    //ctx.lineWidth = 1;
    /*ictx.textAlign = "center";
                ctx.textBaseline = "middle"; //vertical center
                if (!options_lowGraphics) {
                    ctx.shadowOffsetX = 1;
                    ctx.shadowOffsetY = 1;
                    ctx.shadowColor = "black"
                }
                ctx.fillStyle = "white"
        */

    if (this.dead) ctx.globalAlpha *= 1 - this.moveUpdF;
    else ctx.globalAlpha = 1;
    ctx.globalAlpha *= this.nickNameA; //name alpha

    //draw cached name
    this.nickTXT.setText(this.oldnickName);
    this.nickTXT.x = 0;
    this.nickTXT.y = this.rad + 9;
    this.nickTXT.draw();
    


  if (options_SeeIDS) {
    this.nickTXT.setText("ID:" + this.id);
    this.nickTXT.x = 0;
    this.nickTXT.y = this.rad + 25;
    this.nickTXT.draw();
  }
 
        ctx.restore();
  }
};

//first draw
Animal.prototype.drawUnderSkinImgOutline = function() {
  //underwater bubbles/ effects

  if (
    this.flag_underWater ||
    (this.flag_usingAbility && (this.animalType == a_mole || this.animalType == a_testsnake))
  ) {
    ctx.save();
    ctx.globalAlpha = 1.0 - this.underwaterA; //bubbles appear as animal fades

    this.drawWhenUnderwater();
    ctx.restore();
  }

  if (this.flag_eff_stunk) {
    ctx.save();
    var period = 1.0; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.5 * (p_max - p_min);
    var a =
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
        );

    ctx.globalAlpha *= a;
    var effectRad = 2.6;
    drawCircle(0, 0, this.rad + effectRad * a, "brown");

    ctx.restore();
  }

  //ice sliding effect
  if (this.flag_iceSliding) {
    //var fac0to1 = (timestamp - this.spawnTime) % 1000.0/1000.0;
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;

    var period = 0.75;
    var shiftAm = 1.0;
    var moveA = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

    /*var waveMoveTms=1.0*1000; //ms to one full movement
        var fac0to1 = (timestamp - this.spawnTime) % waveMoveTms /waveMoveTms;
        var waveX= x + dist * (fac0to1);*/

    var theA = ctx.globalAlpha;
    ctx.globalAlpha *= 0.8 - 0.2 * moveA;
    drawCircle(0, this.rad * 0.3, this.rad * (0.9 + 0.15 * moveA), "#7BB7BB");
    drawCircle(0, -this.rad * 0.3, this.rad * (1.05 + 0.1 * moveA), "#7BB7BB");
    //console.log("drawing ice slide");
    ctx.globalAlpha = theA;
  }

  if (
    this.flag_usingAbility &&
    (this.animalType == a_deer ||
      /*this.animalType == a_zebra || */ this.animalType == a_reindeer)
  ) {
    //console.log("dig");
    //digging ability (bg circle)
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;

    var period = 1.5;
    var shiftAm = 1.0;
    var moveA = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

    var theA = ctx.globalAlpha;
    ctx.globalAlpha *= 0.8; //- 0.2 * moveA;
    drawCircle(0, this.rad * 0.3, this.rad * (0.9 + 0.12 * moveA), "#7F582B");
    drawCircle(0, -this.rad * 0.3, this.rad * (1.05 + 0.09 * moveA), "#7F582B");
    ctx.globalAlpha = theA;
  }
  //frozen effect (extra white outline!)
  
  var idealOp = this.flag_eff_frozen || this.flag_cold ? 1.0 : 0.0;
  this.frozenEffA += (idealOp - this.frozenEffA) * 0.1;

  if (this.frozenEffA > 0.01) {
    var theA = ctx.globalAlpha;
    ctx.globalAlpha *= this.frozenEffA;
    var effectRad = 1.6;
    drawCircle(0, 0, this.rad + effectRad * this.frozenEffA, "white");

    ctx.globalAlpha = theA; //reset Alpha
  }

  
  
   idealOp = this.flag_eff_shocked || this.flag_eff_shocked ? 1.0 : 0.0;
  this.shockedEffA += (idealOp - this.shockedEffA) * 0.1;

  if (this.shockedEffA > 0.01) {
    var theA = ctx.globalAlpha;
    ctx.globalAlpha *= this.shockedEffA;
    var effectRad = 1.6;
    drawCircle(0, 0, this.rad + effectRad * this.shockedEffA, "yellow");

    ctx.globalAlpha = theA; //reset Alpha
  }
  
  //healing purple outline 'glow'
  var idealOp = this.flag_eff_healing ? 1.0 : 0.0;
  this.effA_healing += (idealOp - this.effA_healing) * 0.1;
  if (this.effA_healing > 0.01) {
    ctx.save();
    ctx.globalAlpha *= this.effA_healing;
    var effectRad = 2.6;
    drawCircle(0, 0, this.rad + effectRad * this.effA_healing, "purple");

    ctx.restore();
  }


  var idealOp = this.flag_eff_hot ? 1.0 : 0.0;
  this.effA_hot += (idealOp - this.effA_hot) * 0.1;
  if (this.effA_hot > 0.01) {
    ctx.save();
    //effect also flashes
    var period = 1.2; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.5 * (p_max - p_min);
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
        );

    var effectRad = 2.6;
    drawCircle(
      0,
      0,
      this.rad + effectRad * this.effA_hot,
      "rgba(249, 212, 77, 0.5)"
    );

    ctx.restore();
  }
  //POISON outline 'glow'
  var idealOp = this.flag_eff_poison ? 1.0 : 0.0;
  this.effA_poison += (idealOp - this.effA_poison) * 0.1;
  if (this.effA_poison > 0.01) {
    ctx.save();

    //effect also flashes
    var period = 1.2; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.5 * (p_max - p_min);
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
        );

    ctx.globalAlpha *= this.effA_poison;
    var effectRad = 2.6;
    drawCircle(0, 0, this.rad + effectRad * this.effA_poison, "#7FF600");

    ctx.restore();
  }
  
  


  //BLEEDING outline 'glow'

  var idealOp = this.flag_eff_bleeding || this.flag_eff_wobbling ? 1.0 : 0.0;
  this.effA_bleeding += (idealOp - this.effA_bleeding) * 0.1;
  if (this.effA_bleeding > 0.01) {
    ctx.save();

    //effect also flashes
    var period = 1.2; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.5 * (p_max - p_min);
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
        );

    ctx.globalAlpha *= this.effA_bleeding;
    var effectRad = 2.6;
    var color = this.flag_eff_wobbling ? "brown" : "red";
    drawCircle(0, 0, this.rad + effectRad * this.effA_bleeding, color);

    ctx.restore();
  }

  var idealOp = this.flag_eff_slimed ? 1.0 : 0.0;
  this.effA_slimed += (idealOp - this.effA_slimed) * 0.1;
  if (this.effA_slimed > 0.01) {
    ctx.save();

    //effect also flashes
    var period = 1.2; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.5 * (p_max - p_min);
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
        );

    ctx.globalAlpha *= this.effA_slimed;
    var effectRad = 2.6;
    drawCircle(0, 0, this.rad + effectRad * this.effA_slimed, "grey");

    ctx.restore();
  }
};

Animal.prototype.drawUnderSkinImg = function() {};

//draws when underwater! (eg. draw shark fin)
Animal.prototype.drawWhenUnderwater = function() {
  var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
  var period = 1.5;
  var shiftAm = 1.0;
  var moveA = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

  //if(this.animalType!=a_shark){
  //var oldA=ctx.globalAlpha;
  //ctx.globalAlpha *= 0.5;

  if (this.animalType == a_croc) ctx.globalAlpha *= 0.3;
  var diveColor = this.flag_underWater ? "#4E71C3" : "#7E6A35";
  
  
  

  
  if (this.animalType == a_phoenix) diveColor = "#f9d43b";
if (this.flag_inReef) diveColor = "#54B4D1";
  ctx.fillStyle = diveColor;
  var bubRad = this.flag_underWater ? this.rad * 0.15 : this.rad * 0.1;
  if (this.animalType != a_tadpole) {
  ctx.beginPath(); //top left, right
  ctx.arc(
    this.rad * -0.35,
    this.rad * -0.33,
    Math.max(0, bubRad + moveA),
    0,
    Math.PI * 2
  );
  ctx.fill();
  ctx.beginPath();
  ctx.arc(
    this.rad * 0.35,
    this.rad * -0.32,
    Math.max(0, bubRad - moveA),
    0,
    Math.PI * 2
  );
  ctx.fill();

  ctx.beginPath(); //bottom 2
  ctx.arc(
    this.rad * 0.35,
    this.rad * 0.36,
    Math.max(0, bubRad + moveA),
    0,
    Math.PI * 2
  );
  ctx.fill();
  ctx.beginPath();
  ctx.arc(
    this.rad * -0.35,
    this.rad * 0.35,
    Math.max(0, bubRad - moveA),
    0,
    Math.PI * 2
  );
  ctx.fill();
  }
  //}

  //shark fin

  if (this.animalType == a_shark) {
    ctx.globalAlpha = 1.0 - this.underwaterA;
    ctx.fillStyle = "#73799b";

    ctx.beginPath();
    //var px = this.rad * -0.008; //middle of horn circle
    var rad = this.rad;
    var py = rad * 0.25; //0.68; //692;
    ctx.moveTo(rad * -0.07, py); //bottom L
    //if()
    ctx.lineTo(0, py - rad * 0.5); //peak of horn (up)
    //ctx.lineTo(px - rad * 0.5, py - 12); //curve point in horn
    ctx.lineTo(rad * 0.35, py); //bottom right
    ctx.closePath();
    ctx.fill();
  } else if (this.animalType == a_killerWhale) {
    //blowhole
    drawCircle(0, this.rad * 0.2, this.rad * 0.12, "#4D4D4D");
  } else if (this.animalType == a_blueWhale) {
    //blowhole
    drawCircle(0, this.rad * 0.45, this.rad * 0.08, "#202A65");
  } else if (this.animalType == a_kingCrab) {
    var frame = getAnimFrame(tSinceSpawn, 1, 1, 1);

    ctx.save();

    ctx.rotate(toRadians(40));
    ctx.scale(1, 2); //B32E10
    ctx.globalAlpha = 0.08;
    drawCircle(
      this.rad * 1,
      this.rad * 0.2,
      this.rad * 0.1 + this.rad * 0.1 * frame,
      "#B32E10"
    );
    ctx.globalAlpha = 0.2;
    drawCircle(this.rad * 1, this.rad * 0.2, this.rad * 0.15, "#B32E10");

    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 1;
    ctx.rotate(toRadians(-40));
    ctx.scale(1, 2);
    ctx.globalAlpha = 0.08;
    drawCircle(
      this.rad * -1,
      this.rad * 0.2,
      this.rad * 0.1 + this.rad * 0.1 * -frame,
      "#B32E10"
    );
    ctx.globalAlpha = 0.2;
    drawCircle(this.rad * -1, this.rad * 0.2, this.rad * 0.15, "#B32E10");
    ctx.restore();
  } else if (this.animalType == a_kraken) {
      if( this.animalSpecies == 0){
    ctx.globalAlpha = 1.0 - this.underwaterA;
    drawCircle(this.rad * 0.4, this.rad * 0.75, this.rad * 0.12, "#598b30");
    drawCircle(this.rad * 0.65, this.rad * 0.55, this.rad * 0.1, "#64a034");
    drawCircle(this.rad * -0.4, this.rad * 0.75, this.rad * 0.12, "#64a034");
    drawCircle(this.rad * -0.65, this.rad * 0.55, this.rad * 0.1, "#598b30");
      }
        if( this.animalSpecies == 1){
    ctx.globalAlpha = 1.0 - this.underwaterA;
    drawCircle(this.rad * 0.4, this.rad * 0.75, this.rad * 0.12, "#45DFC7");
    drawCircle(this.rad * 0.65, this.rad * 0.55, this.rad * 0.1, "#36DAD2");
    drawCircle(this.rad * -0.4, this.rad * 0.75, this.rad * 0.12, "#36DAD2");
    drawCircle(this.rad * -0.65, this.rad * 0.55, this.rad * 0.1, "#45DFC7");
      }
        if( this.animalSpecies == 2){
    ctx.globalAlpha = 1.0 - this.underwaterA;
    drawCircle(this.rad * 0.4, this.rad * 0.75, this.rad * 0.12, "#FFBD25");
    drawCircle(this.rad * 0.65, this.rad * 0.55, this.rad * 0.1, "#F9C438");
    drawCircle(this.rad * -0.4, this.rad * 0.75, this.rad * 0.12, "#F9C438");
    drawCircle(this.rad * -0.65, this.rad * 0.55, this.rad * 0.1, "#FFBD25");
      }
           if( this.animalSpecies == 3){
    ctx.globalAlpha = 1.0 - this.underwaterA;
    drawCircle(this.rad * 0.4, this.rad * 0.75, this.rad * 0.12, "#838383");
    drawCircle(this.rad * 0.65, this.rad * 0.55, this.rad * 0.1, "#555555");
    drawCircle(this.rad * -0.4, this.rad * 0.75, this.rad * 0.12, "#555555");
    drawCircle(this.rad * -0.65, this.rad * 0.55, this.rad * 0.1, "#838383");
      }
    
               if( this.animalSpecies == 4){
    ctx.globalAlpha = 1.0 - this.underwaterA;
    drawCircle(this.rad * 0.4, this.rad * 0.75, this.rad * 0.12, "#00FF3C");
    drawCircle(this.rad * 0.65, this.rad * 0.55, this.rad * 0.1, "#007BFF");
    drawCircle(this.rad * -0.4, this.rad * 0.75, this.rad * 0.12, "#007BFF");
    drawCircle(this.rad * -0.65, this.rad * 0.55, this.rad * 0.1, "#00FF3C");
      }
  } else if (this.animalType == a_trex) {
    ctx.save();
    ctx.globalAlpha = 0.2;
    ctx.scale(1, 2);
    drawCircle(0, this.rad * 0.24, this.rad * 0.08, "#202A65");
    drawCircle(0, this.rad * -0.02, this.rad * 0.06, "#202A65");
    drawCircle(0, this.rad * -0.28, this.rad * 0.05, "#202A65");
    drawCircle(0, this.rad * -0.54, this.rad * 0.04, "#202A65");
    ctx.restore();
      } else if (this.animalType == a_tadpole) {
        ctx.save();
    ctx.globalAlpha = 0.2;
    ctx.scale(1, 1.5);
    drawCircle(0, 0, this.rad * 0.5, "#3D4420");
    drawCircle(0, this.rad * -0.6, this.rad * 0.3, "#475023");
    ctx.restore();

  }
};

Animal.prototype.skinRad = 0;
Animal.prototype.skinScale = 0;
 
//just draw the circle, aside from all kinds of specific effects
Animal.prototype.basicDrawSkinImg = function() {
  var iScale = 500 / 340.0; //scale up ps image to fit (to remove blank space)
  var rad = this.rad - this.outlineW;
  this.skinRad = rad;
  this.skinScale = iScale;


  if (this.loadedSkinImg) {
    if ((this.animalType == a_trex || this._animalType == a_trex) && this.specType != 200) { //animal x and y set mark20
      overSizeOffset = rad / 2;
      ctx.drawImage(
        this.loadedSkinImg,
        -rad - overSizeOffset,
        -rad - overSizeOffset,
        2 * rad * iScale,
        2 * rad * (iScale * 1.2)
      );
                            } else if (this.animalType == a_searobin && this.flag_usingAbility) {
                                var iScale = 750 / 340.0; //scale up ps image to fit (to remove blank space)
                                         ctx.drawImage(
        this.loadedSkinImg,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
                      } else if (this.animalType == a_astraltrex || this._animalType == a_astraltrex) { 
      overSizeOffset = rad / 2;
      ctx.drawImage(
        this.loadedSkinImg,
        -rad - overSizeOffset,
        -rad - overSizeOffset,
        2 * rad * iScale,
        2 * rad * (iScale * 1.2)
      ); 
	                          } else if (this.animalType == a_cachalot || this._animalType == a_cachalot) { 
      overSizeOffset = rad / 2;
      ctx.drawImage(
        this.loadedSkinImg,
        -rad - overSizeOffset,
        -rad - overSizeOffset,
        2 * rad * iScale,
        2 * rad * (iScale * 1.2)
      );   
                } else if (this.animalType == a_secretarybird || this._animalType == a_secretarybird) { 
      rad *= 0.95
      overSizeOffsetX = rad / 2.10;
      overSizeOffsetY = rad / 1.175;
      ctx.drawImage(
        this.loadedSkinImg,
        -rad - overSizeOffsetX,
        -rad - overSizeOffsetY,
        2 * rad * iScale,
        2 * rad * (iScale * 1.2)
      );
                            } else if (this.animalType == a_cakemonster || this._animalType == a_cakemonster) { 
                               iScale = 750 / 340.0;
                                    overSizeOffset = rad / 2;
      ctx.drawImage(
        this.loadedSkinImg,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * (iScale)
      );
    /*  iScale = 750 / 340.0; //scale up ps image to fit (to remove blank space)
      ctx.drawImage(
        this.loadedSkinImg,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      ); */
          } else if (this.animalType == a_qilin || this._animalType == a_qilin) { 
      overSizeOffsetX = rad / 2.05;
      overSizeOffsetY = rad / 1.75;
      ctx.drawImage(
        this.loadedSkinImg,
        -rad - overSizeOffsetX,
        -rad - overSizeOffsetY,
        2 * rad * iScale,
        2 * rad * (iScale * 1.2)
      );
                    } else if (this.animalType == a_slug || this._animalType == a_slug) { 
      overSizeOffsetX = rad / 2.12;
      overSizeOffsetY = rad / 1.4;
      ctx.drawImage(
        this.loadedSkinImg,
        -rad - overSizeOffsetX,
        -rad - overSizeOffsetY,
        2 * rad * iScale,
        2 * rad * (iScale * 1.2)
      );
              } else if (this.animalType == a_skink || this._animalType == a_skink) { 
      overSizeOffsetX = rad / 2.0;
      overSizeOffsetY = rad / 0.83;
      ctx.drawImage(
        this.loadedSkinImg,
        -rad - overSizeOffsetX,
        -rad - overSizeOffsetY,
        2 * rad * iScale,
        2 * rad * (iScale * 1.2)
      );
   } else if (this.animalType == a_tornado || this._animalType == a_tornado) { 
    this.z = 10001;

          var rad = this.rad;

          var rps = 60 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation1 = fac0to1 * 2 * Math.PI;

          var rps = 15 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation2 = fac0to1 * 2 * Math.PI;
     
               var rps = 5 / 60;
          var rotationTms = 1000 / rps; //ms to one full movement- t=dist * v
          var fac0to1 =
            ((timestamp - this.spawnTime) % rotationTms) / rotationTms;
          var rotation3 = fac0to1 * 2 * Math.PI;

          ctx.save();
          ctx.rotate(rotation1);
          //ctx.drawImage(tornado, -rad, -rad, 2 * rad, 2 * rad);

          var oldA = ctx.globalAlpha;
          ctx.globalAlpha = 1 * oldA;
          //var rad = Math.max(0, this.rad - 30);

          var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
          var period = 2.2;
          var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
          var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);


                    var rad = this.rad * 1.2
     
               ctx.globalAlpha = 0.4 * oldA;
               ctx.rotate(rotation2);
           ctx.drawImage(
        this.loadedSkinImg,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
     
               var rad = this.rad * 1.4
               ctx.globalAlpha = 0.1 * oldA;
                    ctx.rotate(rotation3);
           ctx.drawImage(
        this.loadedSkinImg,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
                    var rad = this.rad
                                   ctx.globalAlpha = 1
      ctx.drawImage(
        this.loadedSkinImg,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
     


                  ctx.restore();
        } else if ((this.animalType == a_dragon || this._animalType == a_dragon) && 1 != 1) {
          


           ctx.drawImage(
        this.loadedSkinImg,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
          
                                var theImg = getLoadedImg(
          "img/ability_kamuieye.png"
        );
                  //console.log(toDegrees(135))
        if (theImg) {
    var eyeS = Math.max(this.rad / 25.0); //make eyes bigger for bigger animals
    ctx.scale(eyeS, eyeS);
  var eyeRad = 3;

                      var rad2 = Math.max(49, this.rad/2 + 49)
           ctx.drawImage(
        theImg,
        -rad  + (0.51 * rad2) * iScale,
        -rad  + (0.835 * rad2) * iScale,
        2 * eyeRad * iScale,
        2 * eyeRad * iScale
      );
        }
          
    } else {
      
      ctx.drawImage(
        this.loadedSkinImg,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
      
    } 
  }
  //not loaded yet- draw plain color circle
  else {
    //drawCircle(0,0,this.rad, col);
    ctx.fillStyle = this.skinNotLoadedColor;
    //var oldA=ctx.alpha;
    //ctx.alpha*=0.5;

    ctx.beginPath();
    ctx.arc(0, 0, Math.max(0, this.rad - this.outlineW), 0, Math.PI * 2);
    ctx.fill();

    //ctx.alpha=oldA; //draw faded color
  }
  

  
};

//draw image for the animal skin (along with extra images on it, eg wings)
Animal.prototype.drawSkinImg = function() {
  var rad = this.rad - this.outlineW;

  this.basicDrawSkinImg(); //just draw the image

  // custom animations or skin overlays
  this.drawSkinCustomization();
  
};

Animal.prototype.drawSkinCustomization = function() {
   /* var rad = this.rad - this.outlineW;
          var birthdayHat = getLoadedImg("img/birthdayhat.png");
  if (this.animalType == a_taver) {
            birthdayHat = getLoadedImg("img/duncecap.png");
  }
    if (((this.animalType != a_eagle && this._animalType != a_eagle) || this.animalSpecies != 2) && this.flag_flying) {
                        ctx.drawImage(
        birthdayHat,
        -rad * 500 / 340.0,
        -rad * 500 / 340.0 * 0.8,
        2 * rad * 500 / 340.0,
        2 * rad * 500 / 340.0
      );
  } else {
                    ctx.drawImage(
        birthdayHat,
        -rad * 500 / 340.0,
        -rad * 500 / 340.0,
        2 * rad * 500 / 340.0,
        2 * rad * 500 / 340.0
      );
  }
    if (this.animalType == a_searobin && this.flag_usingAbility) {
              var fins = getLoadedImg("skins/searobin/fins1.png");
              var imX = 0,
          imY = this.rad;
        var imW = this.rad * 2.0 * 0.62,
          imH = this.rad * 1.25; // * fac0to1;
        var imAnchorX = 0.8,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          fins,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );
    }
    */
};

Animal.prototype.drawOnTopOfSkinImg = function() {//womp
  //image-free drawing
  if (!this.loadedSkinImg) {
    //animal eyes

    ctx.save();
    var eyeS = Math.max(1.0, this.rad / 25.0); //make eyes bigger for bigger animals
    ctx.scale(eyeS, eyeS);
    this.drawEyeAtPos(6.0, this.rad * 0.32);
    this.drawEyeAtPos(-6.0, this.rad * 0.32);
    ctx.restore();
  }



  if (this.animalType == a_dragon && this.animalSpecies == 14) {
        var eyeS = Math.max(1.0, this.rad / 25.0); //make eyes bigger for bigger animals
    ctx.scale(eyeS, eyeS);
    //this.drawSharinganAtPos(-6.0, this.rad * 0.32);//right eye
  }
  
  //skin enchancements
  if (this.animalType == a_rhino) {
    ctx.fillStyle = "#E5CF79";

    ctx.beginPath();
    //var px = this.rad * -0.008; //middle of horn circle
    var rad = this.rad - this.outlineW;
    var py = rad * 1.0; //0.68; //692;
    ctx.moveTo(rad * -0.16, py); //bottom L
    //if()

    ctx.lineTo(0, rad * (this.flag_usingAbility ? 1.41 : 0.7)); //peak of horn (up)
    //ctx.lineTo(px - rad * 0.5, py - 12); //curve point in horn
    ctx.lineTo(rad * 0.153, py); //bottom right
    ctx.closePath();
    ctx.fill();
  }
  


};

//top layer, NOT ROTATED
Animal.prototype.drawTopEffects = function() {
  //stun effect
    if (this.animalType == a_giantSpider) {
    ctx.save();

    var fac0to1 = (timestamp - this.spawnTime) % 1000.0/1000.0;
    var period = 0.75;
    var shiftAm = 1.0;
    var moveA = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);
    var x = 100
    var waveMoveTms=1.0*1000; //ms to one full movement
        var fac0to1 = (timestamp - this.spawnTime) % waveMoveTms /waveMoveTms;
        var waveX= x + this.rad * 2  * (fac0to1);

    var theA = 1;
    ctx.globalAlpha *= 0.8 - 0.2 * moveA;
    drawCircle(
      this.rad * 0.15,
      -this.rad * 1.27,
      this.rad * (0.1 + 0.05 * moveA),
      "#efefef"
    );
    drawCircle(
      -this.rad * 0.15,
      -this.rad * 1.27,
      this.rad * (0.1 - 0.05 * moveA),
      "#efefef"
    );
    drawCircle(0, -this.rad * 0.3, this.rad * (1.05 + 0.1 * moveA), "#7BB7BB");
    ctx.globalAlpha = 100;
    ctx.restore();
  }
  var idealOp = this.flag_eff_stunned ? 1.0 : 0.0;
  this.stunA += (idealOp - this.stunA) * 0.1;
  if (this.stunA > 0.01) {
    ctx.save();
    var spinPer = 2.5; //spin around every X s
    var spinRot = (timestamp % (spinPer * 1000.0)) / (spinPer * 1000.0); //gets number from 0-1
    ctx.rotate(spinRot * (2 * Math.PI));

    ctx.globalAlpha *= this.stunA; //bubbles appear as animal fades

    var bubRad = this.rad * 0.2;

    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var period = 1.0;
    var shiftAm = 0.5 + bubRad * 0.07;
    var moveA = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

    ctx.fillStyle = "#F3D444";
    ctx.beginPath(); //top left, right
    ctx.arc(
      this.rad * -0.22,
      this.rad * -0.22,
      Math.max(0, bubRad + moveA),
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.arc(
      this.rad * 0.22,
      this.rad * -0.22,
      Math.max(0, bubRad - moveA),
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.beginPath(); //bottom 2
    ctx.arc(
      this.rad * 0.22,
      this.rad * 0.22,
      Math.max(0, bubRad + moveA),
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.arc(
      this.rad * -0.22,
      this.rad * 0.22,
      Math.max(0, bubRad - moveA),
      0,
      Math.PI * 2
    );
    ctx.fill();

    ctx.restore();
  }
  //on fire glow

  var idealOp = this.flag_eff_onFire ? 1.0 : 0.0;
  this.onFireEffA += (idealOp - this.onFireEffA) * 0.1;
  if (this.onFireEffA > 0.01) {
    //glow stronger/weaker like a fire
    var period = 1.0; //periodic func with time
    var p_min = 0.15,
      p_max = 0.4; //set these!
    var amp = 0.5 * (p_max - p_min);
    var flashA =
      p_min +
      amp +
      amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

    ctx.save();
    ctx.globalAlpha *= flashA * this.onFireEffA;
    drawCircle(0, 0, Math.max(0, this.rad), "orange");
    ctx.restore();

    if (!options_lowGraphics) {
      //glow stronger/weaker like a fire
      var period = 1.0; //periodic func with time
      var p_min = 0.5,
        p_max = 1.0; //set these!
      var amp = 0.5 * (p_max - p_min);
      var moveA =
        p_min +
        amp +
        amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

      var imNum = Math.trunc(timestamp / 100) % 5;
      var imNum2 = Math.trunc(timestamp / 150) % 5;
      //var theImg = getLoadedImg(imNum == 1 ? "img/fire.png" : "img/fire2.png");
      var theImg = getLoadedImg("img/fire/0/" + imNum + ".png");
      var theImg2 = getLoadedImg("img/fire/0/" + imNum2 + ".png");

      //var imNum = Math.trunc(timestamp / 300) % 2;

      //var theImg = getLoadedImg(imNum == 1 ? "img/fire.png" : "img/fire2.png");
      //var theImg2 = getLoadedImg(imNum == 0 ? "img/fire.png" : "img/fire2.png");
      if (theImg || theImg2) {
        var imX = 0 - this.rad * 0.3,
          imY = this.rad * 0.2 - this.rad * 0.3;
        var imW = (this.rad * 1.0 * (2.0 + moveA * 2.0)) / 3.0,
          imH = this.rad * 1.0 * moveA;
        var imAnchorX = 0.5,
          imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.save();
        if (theImg) {
          ctx.globalAlpha *= this.onFireEffA * moveA;
          ctx.drawImage(
            theImg,
            imX + imW * -imAnchorX,
            imY + imH * -imAnchorY,
            imW,
            imH
          );
        }
        if (theImg2) {
          ctx.globalAlpha *= this.onFireEffA * moveA;
          ctx.drawImage(
            theImg2,
            imX + this.rad * 0.5 + imW * -imAnchorX,
            imY + this.rad * 0.5 + imH * -imAnchorY,
            imW,
            imH
          );
        }
        ctx.restore();
      }
    } else {
      var period = 1.0; //periodic func with time
      var p_min = 0.5,
        p_max = 1.0; //set these!
      var amp = 0.5 * (p_max - p_min);
      var moveA =
        p_min +
        amp +
        amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

      var theImg = getLoadedImg("img/fire/0/0.png");
      if (theImg) {
        var imX = 0 - this.rad * 0.3,
          imY = this.rad * 0.2 - this.rad * 0.3;
        var imW = (this.rad * 1.0 * (2.0 + moveA * 2.0)) / 3.0,
          imH = this.rad * 1.0 * moveA;
        var imAnchorX = 0.5,
          imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.save();

        ctx.globalAlpha *= this.onFireEffA * moveA;
        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.globalAlpha *= this.onFireEffA * moveA;
        ctx.drawImage(
          theImg,
          imX + this.rad * 0.5 + imW * -imAnchorX,
          imY + this.rad * 0.5 + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }
    }
  }

  /// alkdjflkdjfsd

/*
  
      if (this.shockedEffA > 0.01 &&  this.flag_eff_shocked) {
    ctx.save();
    var spinPer = 7; //spin around every X s
    var spinRot = (timestamp % (spinPer * 1000.0)) / (spinPer * 1000.0); //gets number from 0-1
    ctx.rotate(spinRot * (2 * Math.PI));

    ctx.globalAlpha *= this.shockedEffA; //bubbles appear as animal fades

    var bubRad = this.rad * 0.2;
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var period = 1.0;
    var shiftAm = 0.5 + bubRad * 0.07;
    var moveA = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

    ctx.fillStyle = "yellow";
        

        
    var bubSpread = this.rad * 0.27; //spread in a square
    ctx.beginPath(); //top left, right
        
        
        
    ctx.arc(
      -bubSpread,
      -bubSpread,
      Math.max(0, bubRad + moveA),
      0,
      Math.PI * 2
    );
    
      
            

        
    ctx.fill();
    ctx.beginPath();
    ctx.arc(bubSpread, -bubSpread, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath(); //bottom 2
    ctx.arc(bubSpread, bubSpread, Math.max(0, bubRad + moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(-bubSpread, bubSpread, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();
        

       ctx.beginPath();
                ctx.rotate(0);
                                ctx.strokeStyle = "yellow";
        var px = this.rad * (1 - (2 * Math.random()));
        var py = this.rad * (1 - (2 * Math.random()));
        var boltSz = this.rad * 0.2;
        ctx.moveTo(px, py);
        ctx.lineTo(px - boltSz * 0.4, py + boltSz);
        ctx.lineTo(px + boltSz * 0.4, py + boltSz * 0.7);
        ctx.lineTo(px + boltSz * 0.4 * 0.5, py + boltSz * 2);
        ctx.lineWidth = 3.0;
        ctx.stroke(); 
        

        
    ctx.restore();
  }
  
    if (this.shockedEffA > 0.01) {
    ctx.save();
    var effectN = 0.3;
    ctx.globalAlpha *= effectN * this.shockedEffA;

    drawCircle(0, 0, Math.max(0, this.rad - this.outlineW), "yellow");
    ctx.restore();
  }
 */
  
  /*
      if (this.shockedEffA > 0.01 && this.flag_eff_shocked) {
    ctx.save();
    var spinPer = 7.0; //spin around every X s
    var spinRot = (timestamp % (spinPer * 1000.0)) / (spinPer * 1000.0); //gets number from 0-1
    ctx.rotate(spinRot * (2 * Math.PI));

    ctx.globalAlpha *= this.shockedEffA; //bubbles appear as animal fades

    var bubRad = this.rad * 0.2;
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var period = 1.0;
    var shiftAm = 0.5 + bubRad * 0.07;
    var moveA = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

    ctx.fillStyle = "white";
    var bubSpread = this.rad * 0.27; //spread in a square
    ctx.beginPath(); //top left, right
    ctx.arc(
      -bubSpread,
      -bubSpread,
      Math.max(0, bubRad + moveA),
      0,
      Math.PI * 2
    );
      
      
    ctx.fill();
    ctx.beginPath();
    ctx.arc(bubSpread, -bubSpread, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath(); //bottom 2
    ctx.arc(bubSpread, bubSpread, Math.max(0, bubRad + moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(-bubSpread, bubSpread, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  //draw skin

  //frozen white glow
  if (this.shockedEffA > 0.01) {
    ctx.save();
    var effectN = 0.3;
    ctx.globalAlpha *= effectN * this.shockedEffA;

    drawCircle(0, 0, Math.max(0, this.rad - this.outlineW), "white");
    ctx.restore();
  } */
  
  
    
  if (this.shockedEffA > 0.01 && this.flag_eff_shocked) {
    ctx.save();
    var spinPer = 7.0; //spin around every X s
    var spinRot = (timestamp % (spinPer * 1000.0)) / (spinPer * 1000.0); //gets number from 0-1
    ctx.rotate(spinRot * (2 * Math.PI));

    ctx.globalAlpha *= this.shockedEffA; //bubbles appear as animal fades

    var bubRad = this.rad * 0.2;
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var period = 1.0;
    var shiftAm = 0.5 + bubRad * 0.07;
    var moveA = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);
       ctx.beginPath();
                ctx.rotate(0);
                                ctx.strokeStyle = "yellow";
        var px = this.rad * (1 - (2 * Math.random()));
        var py = this.rad * (1 - (2 * Math.random()));
        var boltSz = this.rad * 0.2;
        ctx.moveTo(px, py);
      if (Math.random() > 0.85) {
        ctx.lineTo(px - boltSz * 0.4, py + boltSz);
        ctx.lineTo(px + boltSz * 0.4, py + boltSz * 0.7);
        ctx.lineTo(px + boltSz * 0.4 * 0.5, py + boltSz * 2);
      }
        ctx.lineWidth = 3.0;
        ctx.stroke(); 
          ctx.rotate(spinRot * (2 * Math.PI));
    ctx.fillStyle = "yellow";
    var bubSpread = this.rad * 0.27; //spread in a square
    ctx.beginPath(); //top left, right
    ctx.arc(
      -bubSpread,
      -bubSpread,
      Math.max(0, bubRad + moveA),
      0,
      Math.PI * 2
    );
      
      
    ctx.fill();
    ctx.beginPath();
    ctx.arc(bubSpread, -bubSpread, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath(); //bottom 2
    ctx.arc(bubSpread, bubSpread, Math.max(0, bubRad + moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(-bubSpread, bubSpread, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  //draw skin

  //frozen white glow
  if (this.shockedEffA > 0.01) {
    ctx.save();
    var effectN = 0.3;
    ctx.globalAlpha *= effectN * this.shockedEffA;

    drawCircle(0, 0, Math.max(0, this.rad - this.outlineW), "yellow");
    ctx.restore();
  }
  

  //frozen effect 2 (circles)
 if (this.frozenEffA > 0.01 && this.flag_eff_frozen) {
    ctx.save();
    var spinPer = 7.0; //spin around every X s
    var spinRot = (timestamp % (spinPer * 1000.0)) / (spinPer * 1000.0); //gets number from 0-1
    ctx.rotate(spinRot * (2 * Math.PI));

    ctx.globalAlpha *= this.frozenEffA; //bubbles appear as animal fades

    var bubRad = this.rad * 0.2;
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var period = 1.0;
    var shiftAm = 0.5 + bubRad * 0.07;
    var moveA = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

    ctx.fillStyle = "white";
    var bubSpread = this.rad * 0.27; //spread in a square
    ctx.beginPath(); //top left, right
    ctx.arc(
      -bubSpread,
      -bubSpread,
      Math.max(0, bubRad + moveA),
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.arc(bubSpread, -bubSpread, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath(); //bottom 2
    ctx.arc(bubSpread, bubSpread, Math.max(0, bubRad + moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(-bubSpread, bubSpread, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  //draw skin

  //frozen white glow
  if (this.frozenEffA > 0.01) {
    ctx.save();
    var effectN = 0.3;
    ctx.globalAlpha *= effectN * this.frozenEffA;

    drawCircle(0, 0, Math.max(0, this.rad - this.outlineW), "white");
    ctx.restore();
  }
  

  //healing effect purple 'glow'
  if (this.effA_healing > 0.01) {
    ctx.save();
    var effectN = 0.3;
    ctx.globalAlpha *= effectN * this.effA_healing;

    drawCircle(0, 0, Math.max(0, this.rad - this.outlineW), "#ef24ed");
    ctx.restore();
  }
 

  //healing effect purple 'glow'
  if (this.effA_hot > 0.01) {
    ctx.save();
    var effectN = 0.3;
    //effect also flashes
    var period = 1.2; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.5 * (p_max - p_min);
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
        );

    drawCircle(
      0,
      0,
      Math.max(0, this.rad - this.outlineW),
      "rgba(249, 212, 77, 0.3)"
    );
    ctx.restore();
  }
  //POISON green 'glow'
  if (this.effA_poison > 0.01) {
    ctx.save();
    var effectN = 0.3;
    ctx.globalAlpha *= effectN * this.effA_poison;

    //effect also flashes
    var period = 1.2; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.5 * (p_max - p_min);
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
        );

    drawCircle(0, 0, Math.max(0, this.rad - this.outlineW), "#9FDA00");
    ctx.restore();
  }
 

  var idealOp = this.flag_eff_bleeding ? 0.8 : 0.0;
  this.effA_bleeding += (idealOp - this.effA_bleeding) * 0.1;
  if (this.effA_bleeding > 0.01) {
    ctx.save();

    //effect also flashes
    var period = 1.2; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.3 * (p_max - p_min);
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
        );

    ctx.globalAlpha *= this.effA_bleeding;
    var effectRad = -2.6;
    drawCircle(0, 0, this.rad + effectRad * this.effA_bleeding, "red");

    ctx.restore();
  }

  var idealOp = this.flag_eff_slimed ? 0.8 : 0.0;
  this.effA_slimed += (idealOp - this.effA_slimed) * 0.1;
  if (this.effA_slimed > 0.01) {
    ctx.save();

    //effect also flashes
    var period = 1.2; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.3 * (p_max - p_min);
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
        );

    ctx.globalAlpha *= this.effA_slimed;
    var effectRad = -2.6;
    drawCircle(0, 0, this.rad + effectRad * this.effA_slimed, "grey");

    ctx.restore();
  }

  var idealOp = this.flag_eff_stunk ? 0.8 : 0.0;
  this.effA_stunk += (idealOp - this.effA_stunk) * 0.1;
  if (this.effA_stunk > 0.01) {
    ctx.save();

    //effect also flashes
    var period = 1.2; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.3 * (p_max - p_min);
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
        );

    ctx.globalAlpha *= this.effA_stunk;
    var effectRad = -2.6;
    drawCircle(0, 0, this.rad + effectRad * this.effA_stunk, "brown");

    ctx.restore();
  }

  //ice sliding effect


  //web stuck
  var idealOp = this.flag_webStuck ? 1.0 : 0.0;
  this.effA_webStuck += (idealOp - this.effA_webStuck) * 0.02;

  if (this.effA_webStuck > 0.01) {
    ctx.save();
    var effectN = 0.9;
    ctx.globalAlpha *= effectN * this.effA_webStuck;

    var theImg = getLoadedImg("img/spiderWeb_stuck.png");
    if (theImg) {
      var rad = this.rad * 1.3;
      //ctx.rotate(-this.angle); //undo rotation
      ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
      //console.log("drawing banana");
    }
    ctx.restore();
  }

  //constrict
  var idealOp = this.flag_constricted ? 1.0 : 0.0;
  this.effA_constricted += (idealOp - this.effA_constricted) * 0.04;

  if (this.effA_constricted > 0.01) {
    ctx.save();
    var effectN = 0.9;
    ctx.globalAlpha *= effectN * this.effA_constricted;

    var skinFolder = "img";
   
    var theImg = getLoadedImg(skinFolder + "/constrict.png");
    if (theImg) {
      var rad = this.rad * 1.3;
      ctx.rotate(this.angle); //undo rotation
      ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
      //console.log("drawing banana");
    }
    ctx.restore();
  }
};
 
//returns the name of the main skin img to draw
Animal.prototype.getSkinName = function() {
  var skinName = this.skinImgName;
  
    

  
  switch (this.animalType) {
    // add a 2 for using ability
              
  
    case a_pondturtle:
            var skinFolder = "";
        if (this.specType2 == 1 || this.specType2 == 7) {
              skinName = skinFolder + skinName + "2";
            }
            break;
    case a_pufferFish:
    case a_muskox:
    case a_astraltrex:
    case a_swordfish:
    case a_turtle:
    case a_searobin:
    case a_pike:
    case a_crab:
    case a_snail:
    case a_cobra:
    case a_titanboa:
    case a_boaConstrictor:
    case a_hedgehog:
          case a_gaur:
      var skinFolder = "";
      
      if (this.flag_usingAbility) skinName = skinFolder + skinName + "2";
      

      break;
		  
          case a_catfish:
      var skinFolder = "";
      if (this.specType != 0) skinName = skinFolder + skinName + this.specType;
		        break;
		            case a_testsnake:
      var skinFolder = "";
      if (this.specType2 == 1) skinName = skinFolder + skinName + 2;
		        break;
      
    case a_cuttlefish:
                  var skinFolder = "";
      var imgType = Math.ceil(((timestamp - this.spawnTime) % 1000)/500);
	     if (imgType == 0) {
		imgType = 1
		  }
            if (this.flag_usingAbility) skinName = skinFolder + skinName + imgType;
            break;
      
      
      /*
          case a_pelican:
            skinName = skinName + (this.specType == 0 ? "" : this.specType);
            break;
          case a_eagle:
            skinName = skinName + (this.specType == 0 ? "" : this.specType);
            break;

          case a_frog:
            if (this.flag_usingAbility && !this.flag_underWater)
              skinName = skinName + "2";
            break;

          case a_ostrich:
            if (this.specType == 1)
              skinName = "baby_ostrich";
            break; */

                
          
      
    case a_tiger:
      this.z = this.z * 2; // above hill but under the trees
      if (this.flag_usingAbility && this.specType == 2)
        skinName = skinName + "4";
      break;
  }

  if (this.flag_flying && !this.flag_isGrabbed) {
    if (this.animalType == a_duck || this.animalType == a_blackDragon)
      skinName = "flying_" + skinName;
  }
  
  
  
  if (this.flag_flying && !this.flag_isGrabbed) {
    if (this.animalType == a_topdragon)
      skinName = "flying_" + skinName;
  }

      if (this.specType == 200) {
        let sessiontype = this.specType - 200
              skinName = "session/"+ sessiontype + "/" + skinName;
      }
      
   if (this.flag_usingAbility) {
    if (this.animalType == a_cassowary)
      skinName  = "cassowary/cassowary1";
  }
  
     if (this.flag_usingAbility) {
    if (this.animalType == a_tortise)
      skinName  = "tortise/tortise2";
  }
  
     if (this.flag_flying && !this.flag_isGrabbed) {
    if (this.animalType == a_sheep)
      skinName  = "sheep/" + this.animalSpecies + "/sheep2";
  }

  
  if (this.flag_usingAbility) {
    if (this.animalType == a_flamingo)
      skinName  = "flamingo/flamingo2";
     

    
    
  }
  

  
      if (this.flag_flying && !this.flag_isGrabbed) {
    if (this.animalType == a_pelican)
      skinName = "pelican/pelican1";
  }
  
 
  

//mark3000
  
  
    if (this.flag_kicking) {
       if (this.animalType == a_cassowary)
      skinName  = "cassowary/cassowary2";
}
            

  return skinName;
};
  

Animal.prototype.setObjTypes = function(oType, secondaryType) {
  this.oType = oType;
  this.animalType = secondaryType; //secondaryType can be different for eg.
};

//override this to read in custom spawn data
Animal.prototype.readCustomData_onNewlyVisible = function(msg) {
  Animal.superClass.prototype.readCustomData_onNewlyVisible.call(this, msg);

  //read custom data here!
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //var animtype = msg.readUInt8();
//  console.log(msg)
  var nickName = msg.readString();
  // read which speices is this animal
  this.animalSpecies = msg.readUInt8();
  if (gameMode == gameMode_teamMode) this.teamID = msg.readUInt8();
   var nw_colorname = msg.readUInt8();
  switch(nw_colorname) {
   case 1:
      {
        this.nickTXTcolor = '#FFFFFF'
        
      }
      break;
    case 2:
      {
        this.nickTXTcolor = '#FB3900'
        
      }
      break;
       case 3:
      {
        this.nickTXTcolor = '#7D00CF'
        
      }
       break;
       case 4:
      {
        this.nickTXTcolor = '#00FFF0'
        
      }
       break;
        case 5:
      {
        this.nickTXTcolor = '#11ff00'
        
      }
      break;
      case 6:
      {
        this.nickTXTcolor = '#ffec00'

      }

      break;
        case 7:
      {
        this.nickTXTcolor = '#9300ff'

      }

      break;
        case 8:
      {
        this.nickTXTcolor = '#ff00fb'

      }

      break;
        case 9:
      {
        this.nickTXTcolor = '#00ff93'

      }

      break;
        case 10:
      {
        this.nickTXTcolor = '#ff003a'

      }

      break;
        case 11:
      {
        this.nickTXTcolor = '#000000'

      }

      
      break;
  }
  //this.animalType = animtype; //animal type
  this.setNick(nickName ? nickName : "Unnamed Animal");

  //console.log("Animal custom data read, id "+this.id+", animalType "+animtype);
};

Animal.prototype.readCustomData_onUpdate = function(msg) {
  Animal.superClass.prototype.readCustomData_onUpdate.call(this, msg); //call superclass version of this method

  //console.log("Animal custom data update read, id "+this.id);

  //if (this.oType == o_animal) {

  this.specType = msg.readUInt8();
  this.specType2 = msg.readUInt8();

  var lookAng = msg.readUInt8() * 2.0;
  this.currentangle = lookAng;
 // console.log("angle2: " + lookAng);
  var goalAngle = toRadians(lookAng + 90); //90 offset due to client drawing setup  heree

  var myangle = toDegrees(this.angle ) - 90
  
  
  this.angleDelta = distBetweenAngles(this.angle, goalAngle);
  this.oAngle = this.angle;
  if (this.firstPosUpd) {
    //on freshly spawned animals ,instantly set angle
    this.oAngle = this.angle = goalAngle;
    this.angleDelta = 0;
  }
  //console.log(this.specType, this.specType2, lookAng)
  var aniFlags = []
  //console.log(this.specType, this.specType2, lookAng)
    aniFlags= Array.apply(null, new Array(50)).map(
            Number.prototype.valueOf,
            0
          );
        var cnt = msg.readUInt8() 

for (var J = 0; J < cnt; J++) {
  var newflag = msg.readUInt8()  
  aniFlags.push(newflag) //mark as true (dangerous)

}
 
  this.curBiome = 0;
  if(aniFlags.includes(1)){this.curBiome = 1} else if(aniFlags.includes(2)){this.curBiome = 2}else if(aniFlags.includes(25)){this.curBiome = 3 }
  this.flag_lowWat = aniFlags.includes(3)
  this.flag_inHomeBiome = aniFlags.includes(4)
  this.flag_underWater = aniFlags.includes(5)
  this.flag_eff_invincible = aniFlags.includes(6)
  this.flag_usingAbility = aniFlags.includes(7)
  this.flag_tailBitten = aniFlags.includes(8)
  this.flag_eff_stunned = aniFlags.includes(9)
  this.flag_iceSliding = aniFlags.includes(10)
  this.flag_eff_frozen = aniFlags.includes(11)
  this.flag_eff_onFire = aniFlags.includes(12)
  this.flag_eff_healing = aniFlags.includes(13)
  this.flag_eff_poison = aniFlags.includes(14)
  this.flag_constricted = aniFlags.includes(15)//good for boa ability
  this.flag_webStuck = aniFlags.includes(16)
  this.flag_stealth = aniFlags.includes(17)
  this.flag_eff_bleeding = aniFlags.includes(18)
  this.flag_flying = aniFlags.includes(19)
  this.flag_isGrabbed = aniFlags.includes(20)
  this.flag_eff_aniInClaws = aniFlags.includes(21)
  this.flag_eff_stunk = aniFlags.includes(22)
  this.flag_cold = aniFlags.includes(23)
  this.flag_inWater = aniFlags.includes(24)
  this.flag_inLava = aniFlags.includes(25)
  this.flag_canClimbHill = aniFlags.includes(26)
  this.flag_isDevMode = aniFlags.includes(27)
  this.flag_eff_slimed = aniFlags.includes(28)
  this.flag_eff_wobbling = aniFlags.includes(29)
  this.flag_eff_hot = aniFlags.includes(30)
 this.flag_inDesert = aniFlags.includes(31)
  this.flag_kicking = aniFlags.includes(32)
    this.flag_eff_healing = aniFlags.includes(13)
   
    this.flag_can1v1 =  aniFlags.includes(32)
 
    this.flag_isInArena = aniFlags.includes(33)
     this.isAbility1v1Active = aniFlags.includes(34)
  this.flag_eff_shivering = aniFlags.includes(35)
  this.flag_shock = aniFlags.includes(36)
  this.flag_inJungle = aniFlags.includes(37)
    this.flag_inTree = aniFlags.includes(38)
  this.flag_oldeagle = aniFlags.includes(39)
    this.flag_inColdOcean = aniFlags.includes(41)
      this.flag_invisible = aniFlags.includes(42)
  this.flag_oldinvisible = aniFlags.includes(42)
        this.flag_SeeID = aniFlags.includes(43)
         this.flag_ingenjutsu = aniFlags.includes(44)
           this.flag_indeepsea = aniFlags.includes(45)
    this.flag_eff_shocked = aniFlags.includes(46)
      this.flag_kamui = aniFlags.includes(47)
    this.flag_DevMode = aniFlags.includes(48)
      this.flag_inReef = aniFlags.includes(49)
	this.flag_swallowed = aniFlags.includes(50)
        this.wins1v1 = msg.readUInt8();

    if (this.isAbility1v1Active && this.flag_can1v1) {
      var wins = "\n(wins:" + this.wins1v1 + ")";
      this.nickTXT.setText(this.nickName + wins);
      this.winsAddedInNick = true;
    } else if (this.winsAddedInNick) {
      this.winsAddedInNick = false;
      this.nickTXT.setText(this.nickName);
    
  }
  //}
};
Animal.prototype.winsAddedInNick = true;
Animal.prototype.currentangle = 0;
function Animal(oType, secondaryType) {
  Animal.superClass.call(this, o_animal); //call superclass init method (if needed, or write a new one below)

  this.animalType = secondaryType; //works for manually created objs
  //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Animal constructor run, id "+this.id);
 
}

window.Animal = Animal; //make class global!


//add this class as a thisClass for the right oType!
GameObjType.setCustomClassForGameObjType(Animal, o_animal);




///////
// file: js_src/gameobj/SpiderWeb.js
///////


var superClass = GameObj;
Lake.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Lake.prototype.constructor = Lake;
Lake.superClass=superClass; //'class' var


Lake.prototype.updateZ = function() {
  if (this.specType != 2) {
    this.z = -157;
  } else {
        this.z = -157.01;
  }
}

Lake.prototype.readCustomData_onUpdate = function(msg) {

  this.LakeDirt = msg.readUInt8();

}


//custom data for this class (must be matched by server-side write of this data!)
var mix = 0
//override draw (things like other effects are drawn seperately)
Lake.prototype.customDraw = function(batchDrawOutline){
        ctx.save();
        if (!options_lowGraphics) ctx.rotate(this.rPer * 2 * Math.PI);

        var rShift = 0;
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 4.0;
        var shiftAm = 5.5;
        rShift = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);
        //sand 'outline'
        var strokeW = 4;
  if (this.specType == 1) {
        ctx.fillStyle = "#74512D";
  } else {
        ctx.fillStyle = col_ocean_sand;
  }
  if (this.specType != 2) {
        ctx.beginPath();
        ctx.arc(0, 0, this.rad, 0, Math.PI * 2);
        ctx.fill(); 
}

        //ctx.fillStyle = "#73602A"; //98803A";
        var  bushBgCol = col_wat2;
        switch (this.curBiome) {
          case biome_jungle:
            bushBgCol = "#37936F";
            break;
          case biome_arctic:
            bushBgCol = "#8da0d6";
            break;
          default:

        }

mix += (this.LakeDirt/100 - mix) * 0.03;
          var red1 = 55;
          var red2 = 14;
          var blue1 = 111;
          var blue2 = 66;
          var green1 = 147;
          var green2 = 99;
  /*
          var R = red1*mix+red2*(1-mix)
          var G = green1*mix+green2*(1-mix)
          var B = blue1*mix+blue2*(1-mix)
           */
     var R = red1 + (red2 - red1)*mix
     var G = green1 + (green2 - green1)*mix
     var B = blue1 + (blue2 - blue1)*mix
     if (this.specType == 1) {
            bushBgCol = "rgb("+R+", "+G+", "+B+")";
          }
                     
        if (this.curBiome == biome_arctic) ctx.fillStyle = "#8da0d6";
        else ctx.fillStyle = bushBgCol; //98803A";
        //ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(0, 0, Math.max(0, this.rad - strokeW + rShift), 0, Math.PI * 2);
        ctx.fill();

        if (!options_lowGraphics) {
          ctx.beginPath(); //top right
          ctx.arc(
            this.rad * 0.45,
            -this.rad * 0.45 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom right
          ctx.arc(
            this.rad * 0.5,
            this.rad * 0.5 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.4 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath(); //bottom left
          ctx.arc(
            -this.rad * 0.55 * 0.707,
            +this.rad * 0.55 * 0.707 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.5 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();
          ctx.beginPath();
          ctx.arc(
            -this.rad * 0.75,
            -this.rad * 0.35 + 15.0 * this.rPer,
            Math.max(0, this.rad * 0.3 + rShift),
            0,
            2 * Math.PI
          );
          ctx.fill();

          ctx.beginPath();
          ctx.arc(this.rad + 10 * this.rPer, 50 * this.rPer, 8, 0, 2 * Math.PI);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(
            this.rad - 20 * this.rPer,
            50 * this.rPer,
            10,
            0,
            2 * Math.PI
          );
          ctx.fill();
        }

        ctx.restore();
}

//custom data for this class (must be matched by server-side write of this data!)

Lake.prototype.readCustomData_onNewlyVisible = function(msg) {

  this.LakeDirt = msg.readUInt8();
}

function Lake(){
  Lake.superClass.call(this, o_lake);

  this.LakeDirt=0;

  //set vars for this class
  //this.doesDrawEffectScale=true;
  //this.drawEffectScale_Slow=true;

}
window.Lake=Lake;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Lake, o_lake);


var superClass = GameObj;
Sandbox.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Sandbox.prototype.constructor = Sandbox;
Sandbox.superClass = superClass; //'class' var
Sandbox.prototype.r = 0;
Sandbox.prototype.updateZ = function () {
    this.z = 100002; // above everything
};

Sandbox.prototype.setTitle = function () {
    var txt = "SANDBOX\nARENA";


    var fontSize = this.rad * 0.07;
    if (null == this.timerTxt) {
        this.timerTxt = new CachedText(fontSize, "#FFFFFF"); //"#043400");
        this.timerTxt.strokeW = 2;
        this.timerTxt.multiLine = true;
        this.timerTxt.renderScale = 5.0; //render larger to undo 'zoom of 3x'
        this.timerTxt.setText(txt);
    } else {
        this.timerTxt.setFontSize(fontSize);
        this.timerTxt.setText(txt);
    }

    this.timerTxt.x = 0;
    this.timerTxt.y = -this.rad * 0.9;
    this.timerTxt.draw();

};


Sandbox.prototype.customDraw = function (batchDrawOutline) {
    //this.arenaRadUpdate();
    ctx.save();
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.arc(0, 0, this.rad + 2, 0, 2 * Math.PI, false);
    ctx.arc(0, 0, this.rad, 0, 2 * Math.PI, true);
    ctx.fillStyle = "#32ff00";
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.095;

    ctx.beginPath();
    ctx.arc(0, 0, this.rad, 0, 2 * Math.PI, false);
    ctx.arc(0, 0, this.rad, 0, 2 * Math.PI, true);
    ctx.fillStyle = "red";
    ctx.closePath();
    ctx.fill();
    // ctx.globalAlpha = 0.15;
    // ctx.strokeStyle = "red";
    // ctx.stroke();
    ctx.restore();
    ctx.save();
    var angleDelta = 1.0;
    var dChange = angleDelta * 0.1; //* a;
    this.r += dChange;

    ctx.rotate(toRadians(-this.r));
    this.setTitle();
    ctx.restore();

};



function Sandbox() {
    Sandbox.superClass.call(this, o_sandbox);
}

window.Sandbox = Sandbox; //make class global!
GameObjType.setCustomClassForGameObjType(Sandbox, o_sandbox);


var superClass = GameObj;
SpiderWeb.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
SpiderWeb.prototype.constructor = SpiderWeb;
SpiderWeb.superClass=superClass; //'class' var


SpiderWeb.prototype.updateZ = function() {
    this.z = 1002;
}

//custom data for this class (must be matched by server-side write of this data!)
SpiderWeb.prototype.readCustomData_onUpdate = function(msg) {

  this.webTransparency = this.specType = msg.readUInt8();

}

//override draw (things like other effects are drawn seperately)
SpiderWeb.prototype.customDraw = function(batchDrawOutline){
  ctx.save();

  ctx.globalAlpha *= (this.specType / 100.0) * 0.9; //web opacity param


  var theImg = getLoadedImg("img/spiderWeb.png");
  if (theImg) {
    var rad = this.rad;
    ctx.rotate(this.rPer * Math.PI * 2.0);
    ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
  }
  ctx.restore();
}

//custom data for this class (must be matched by server-side write of this data!)
SpiderWeb.prototype.readCustomData_onNewlyVisible = function(msg) {

  this.webTransparency = this.specType = msg.readUInt8();
}

function SpiderWeb(){
  SpiderWeb.superClass.call(this, o_spiderWeb);

  this.webTransparency=0;

  //set vars for this class
  this.doesDrawEffectScale=true;
  this.drawEffectScale_Slow=true;

}
window.SpiderWeb=SpiderWeb;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(SpiderWeb, o_spiderWeb);










///////
// file: js_src/gameobj/animal/Kingdragon.js
///////







/*

var superClass = Animal;
AstralDragon.prototype = Object.create(superClass.prototype);
AstralDragon.prototype.constructor = AstralDragon;
AstralDragon.superClass = superClass;
AstralDragon.prototype.updateZ = function () {
    this.z = 10000;
};
AstralDragon.prototype.canUseTailslap = true;
AstralDragon.prototype.tailState = 0;
AstralDragon.prototype.getSkinName = function () {
  
    return 'kingdragon/'+this.animalSpecies +'/kingdragon_body';
};
AstralDragon.prototype.readCustomData_onNewlyVisible = function (_0x103094) {
    AstralDragon.superClass.prototype.readCustomData_onNewlyVisible.call(this, _0x103094);
    this.readInfo(_0x103094);
};
AstralDragon.prototype.readInfo = function (msg) {
    this.lava = msg.readUInt8();
    this.canUseTailslap = msg.readUInt8();
    this.tailState = 1;
};
AstralDragon.prototype.readCustomData_onUpdate = function (msg) {
    AstralDragon.superClass.prototype.readCustomData_onUpdate.call(this, msg);
    this.readInfo(msg);
};
AstralDragon.prototype.leftWingAnim = null;
AstralDragon.prototype.flapAngleDiff = 3;
AstralDragon.prototype.flapAngle = 3;
AstralDragon.prototype.flapF = 0.1;
AstralDragon.prototype.flapDur = 2;
AstralDragon.prototype.sF = 0.02;
AstralDragon.prototype.drawWings = function () {
    null == this.leftWingAnim && (this.leftWingAnim = new _0x1abe2b(this, this.flapDur, _0x1abe2b.wave,{
            'v1': 0x5
        },true), this.leftWingAnim.keepLastFrame = true, this.leftWingAnim.loop = true, this.leftWingAnim.onFrameEntered = function (_0x1596df) {
        this.forObj.frame1 = _0x1596df;
    });
    null != this.leftWingAnim && this.leftWingAnim.run();
    var _0x1b9acd = this.rad - this.outlineW,
        _0x2103bb = this.frame1 * this.sF * _0x1b9acd,
        _0x57c54 = -(-this.flapF + this.frame1) * toRadians(this.flapAngle),
        _0x5051cd = 1.4705882352941,
        _0x303fb8 = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/left_wing.png'),
        _0x13450c = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/right_wing.png');
    _0x303fb8 && _0x13450c && (ctx.save(), ctx.rotate(toRadians(this.flapAngleDiff) + _0x57c54),
              ctx.drawImage(_0x303fb8, -_0x1b9acd * _0x5051cd, -_0x1b9acd * _0x5051cd + _0x2103bb, 2 * _0x1b9acd * _0x5051cd, 2 * _0x1b9acd * _0x5051cd+ 1.5 *_0x2103bb),
                               ctx.restore(),
                               ctx.save(),
                               ctx.rotate(-(toRadians(this.flapAngleDiff) + _0x57c54)),
                               ctx.drawImage(_0x13450c, -_0x1b9acd * _0x5051cd, -_0x1b9acd * _0x5051cd + _0x2103bb, 2 * _0x1b9acd * _0x5051cd, 2 * _0x1b9acd * _0x5051cd+ 1.5 * _0x2103bb), 
                               ctx.restore(), 
                               4 == this.animalSpecies && (_0x303fb8 = getAnimFrame((timestamp - this.spawnTime) / 1000, 5, 1, 1), 
                                                           ctx.save(), 
                                                           ctx.globalAlpha = Math.max(0, _0x303fb8),
                                                           _0x303fb8 = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/left_wing_tips.png'),
                                                           _0x13450c = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/right_wing_tips.png'),
                                                           _0x303fb8 && _0x13450c && (ctx.save(), ctx.rotate(toRadians(this.flapAngleDiff) + _0x57c54),
                                                            ctx.drawImage(_0x303fb8, -_0x1b9acd * _0x5051cd, -_0x1b9acd * _0x5051cd + _0x2103bb, 2 * _0x1b9acd * _0x5051cd, 2 * _0x1b9acd * _0x5051cd +1.5 * _0x2103bb),
                                                                                      ctx.restore(), ctx.save(), ctx.rotate(-(toRadians(this.flapAngleDiff) + _0x57c54)), ctx.drawImage(_0x13450c, -_0x1b9acd * _0x5051cd, -_0x1b9acd * _0x5051cd + _0x2103bb, 2 * _0x1b9acd * _0x5051cd, 2 * _0x1b9acd * _0x5051cd+ 1.5 * _0x2103bb), ctx.restore()), ctx.restore()));
    _0x303fb8 = 100;
    if (50 > _0x303fb8) {
        var _0x303fb8 = _0x303fb8 / 50,
            _0x13450c = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/left_wing1.png'),
            _0x67aef9 = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/right_wing2.png');
        _0x13450c && _0x67aef9 && (ctx.save(), ctx.globalAlpha = 1 - _0x303fb8, ctx.save(), ctx.rotate(toRadians(this.flapAngleDiff) + _0x57c54)
                                   , ctx.drawImage(_0x13450c, -_0x1b9acd * _0x5051cd, -_0x1b9acd * _0x5051cd + _0x2103bb, 2 * _0x1b9acd * _0x5051cd, 2 * _0x1b9acd * _0x5051cd+ 1.5 * _0x2103bb)
                                   , ctx.restore(), ctx.save(), ctx.rotate(-(toRadians(this.flapAngleDiff) + _0x57c54)), 
                                   ctx.drawImage(_0x67aef9, -_0x1b9acd * _0x5051cd, -_0x1b9acd * _0x5051cd + _0x2103bb, 2 * _0x1b9acd * _0x5051cd, 2 * _0x1b9acd * _0x5051cd+ 1.5 * _0x2103bb), 
                                   ctx.restore(), ctx.restore());
    }
};
AstralDragon.prototype.drawSkinCustomization = function () {


    this.drawWings();
};
AstralDragon.prototype.getSkinName = function () {
        return './kingdragon/' + this.animalSpecies + '/kingdragon_body';
    };

AstralDragon.prototype.animalInfo = function () {
     infoO = {};
  
             switch (this.animalSpecies) {
        case 0:
            infoO.aniName = 'King Dragon';
            break;
        case 1:
            infoO.aniName = 'Golden King Dragon';
            break;
        case 2:
            infoO.aniName = 'King Ripper';
            break;
        case 3:
            infoO.aniName = 'King Stan';
            break;
        case 4:
            infoO.aniName = 'King Shah';
            break;
                  case 5:
            infoO.aniName = 'Queen Scarlet';
            break;
                         case 6:
            infoO.aniName = 'Queen Celeste';
            break;
                             case 69:
            infoO.aniName = 'King Crimson';
            break;
                               case 200:
            infoO.aniName = 'Queen Flame';
            break;
        }
            infoO.aniDesc = "";
            infoO.upgradeText ='UPGRADED to ' + infoO.aniName +  "\nYou got firestream that burns your victim alive! Watch your tail and slap them hard.";
            infoO.aniCol = "black";
            infoO.skinName = this.getSkinName();
          
    return infoO;
};

function AstralDragon() {
    AstralDragon.superClass.call(this, o_animal);
}
window.AstralDragon = AstralDragon;
GameObjType.setCustomClassForGameObjType(AstralDragon, o_animal, a_astraldragon); */


///////
// file: js_src/gameobj/animal/Kingdragon.js
///////
var superClass = Animal;
KingDragon.prototype = Object.create(superClass.prototype);
KingDragon.prototype.constructor = KingDragon;
KingDragon.superClass = superClass;
KingDragon.prototype.updateZ = function () {
    this.z = 10000;
};
KingDragon.prototype.canUseTailslap = true;
KingDragon.prototype.tailState = 0;
KingDragon.prototype.getSkinName = function () {
  
    return 'kingdragon/'+this.animalSpecies +'/kingdragon_body';
};
KingDragon.prototype.readCustomData_onNewlyVisible = function (_0x103094) {
    KingDragon.superClass.prototype.readCustomData_onNewlyVisible.call(this, _0x103094);
    this.readInfo(_0x103094);
};
KingDragon.prototype.readInfo = function (msg) {
    this.lava = msg.readUInt8();
    this.canUseTailslap = msg.readUInt8();
    this.tailState = msg.readUInt16() / 100;
};
KingDragon.prototype.readCustomData_onUpdate = function (msg) {
    KingDragon.superClass.prototype.readCustomData_onUpdate.call(this, msg);
    this.readInfo(msg);
};
KingDragon.prototype.leftWingAnim = null;
KingDragon.prototype.flapAngleDiff = 3;
KingDragon.prototype.flapAngle = 3;
KingDragon.prototype.flapF = 0.1;
KingDragon.prototype.flapDur = 2;
KingDragon.prototype.sF = 0.02;
KingDragon.prototype.drawWings = function () {
  
  if (this.flag_flying) {
KingDragon.prototype.flapAngleDiff = 20;
KingDragon.prototype.flapAngle = 40;
  } else {
KingDragon.prototype.flapAngleDiff = 3;
KingDragon.prototype.flapAngle = 3;
  }
  
    null == this.leftWingAnim && (this.leftWingAnim = new _0x1abe2b(this, this.flapDur, _0x1abe2b.wave,{
            'v1': 0x5
        },true), this.leftWingAnim.keepLastFrame = true, this.leftWingAnim.loop = true, this.leftWingAnim.onFrameEntered = function (_0x1596df) {
        this.forObj.frame1 = _0x1596df;
    });
    null != this.leftWingAnim && this.leftWingAnim.run();
    var _0x1b9acd = this.rad - this.outlineW,
        _0x2103bb = this.frame1 * this.sF * _0x1b9acd,
        _0x57c54 = -(-this.flapF + this.frame1) * toRadians(this.flapAngle),
        _0x5051cd = 1.4705882352941,
        _0x303fb8 = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/left_wing.png'),
        _0x13450c = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/right_wing.png');
    _0x303fb8 && _0x13450c && (ctx.save(), ctx.rotate(toRadians(this.flapAngleDiff) + _0x57c54),
              ctx.drawImage(_0x303fb8, -_0x1b9acd * _0x5051cd, -_0x1b9acd * _0x5051cd + _0x2103bb, 2 * _0x1b9acd * _0x5051cd, 2 * _0x1b9acd * _0x5051cd+ 1.5 *_0x2103bb),
                               ctx.restore(),
                               ctx.save(),
                               ctx.rotate(-(toRadians(this.flapAngleDiff) + _0x57c54)),
                               ctx.drawImage(_0x13450c, -_0x1b9acd * _0x5051cd, -_0x1b9acd * _0x5051cd + _0x2103bb, 2 * _0x1b9acd * _0x5051cd, 2 * _0x1b9acd * _0x5051cd+ 1.5 * _0x2103bb), 
                               ctx.restore(), 
                               4 == this.animalSpecies && (_0x303fb8 = getAnimFrame((timestamp - this.spawnTime) / 1000, 5, 1, 1), 
                                                           ctx.save(), 
                                                           ctx.globalAlpha = Math.max(0, _0x303fb8),
                                                           _0x303fb8 = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/left_wing_tips.png'),
                                                           _0x13450c = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/right_wing_tips.png'),
                                                           _0x303fb8 && _0x13450c && (ctx.save(), ctx.rotate(toRadians(this.flapAngleDiff) + _0x57c54),
                                                            ctx.drawImage(_0x303fb8, -_0x1b9acd * _0x5051cd, -_0x1b9acd * _0x5051cd + _0x2103bb, 2 * _0x1b9acd * _0x5051cd, 2 * _0x1b9acd * _0x5051cd +1.5 * _0x2103bb),
                                                                                      ctx.restore(), ctx.save(), ctx.rotate(-(toRadians(this.flapAngleDiff) + _0x57c54)), ctx.drawImage(_0x13450c, -_0x1b9acd * _0x5051cd, -_0x1b9acd * _0x5051cd + _0x2103bb, 2 * _0x1b9acd * _0x5051cd, 2 * _0x1b9acd * _0x5051cd+ 1.5 * _0x2103bb), ctx.restore()), ctx.restore()));
    _0x303fb8 = this.lava;
    if (50 > _0x303fb8) {
        var _0x303fb8 = _0x303fb8 / 50,
            _0x13450c = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/left_wing1.png'),
            _0x67aef9 = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/right_wing2.png');
        _0x13450c && _0x67aef9 && (ctx.save(), ctx.globalAlpha = 1 - _0x303fb8, ctx.save(), ctx.rotate(toRadians(this.flapAngleDiff) + _0x57c54)
                                   , ctx.drawImage(_0x13450c, -_0x1b9acd * _0x5051cd, -_0x1b9acd * _0x5051cd + _0x2103bb, 2 * _0x1b9acd * _0x5051cd, 2 * _0x1b9acd * _0x5051cd+ 1.5 * _0x2103bb)
                                   , ctx.restore(), ctx.save(), ctx.rotate(-(toRadians(this.flapAngleDiff) + _0x57c54)), 
                                   ctx.drawImage(_0x67aef9, -_0x1b9acd * _0x5051cd, -_0x1b9acd * _0x5051cd + _0x2103bb, 2 * _0x1b9acd * _0x5051cd, 2 * _0x1b9acd * _0x5051cd+ 1.5 * _0x2103bb), 
                                   ctx.restore(), ctx.restore());
    }
};
KingDragon.prototype.drawSkinCustomization = function () {
    var _0x3659ec = 1.4705882352941,
        _0x10a292 = getAnimFrame((timestamp - this.spawnTime) / 1000, 5, 1, 1),
        _0x3fb426 = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/nostrils.png');
    if (_0x3fb426) {
        ctx.save();
        ctx.globalAlpha = this.lava / 100 * Math.max(0, _0x10a292);
        var _0x445d4d = this.rad - this.outlineW;
        ctx.drawImage(_0x3fb426, -_0x445d4d * _0x3659ec, -_0x445d4d * _0x3659ec, 2 * _0x445d4d * _0x3659ec, 2 * _0x445d4d * _0x3659ec);
        ctx.restore();
    }
    if (this.canUseTailslap) {
        if (_0x3fb426 = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/bone2.png')) ctx.save(), ctx.globalAlpha = Math.max(0.3, _0x10a292), _0x445d4d = this.rad - this.outlineW, ctx.drawImage(_0x3fb426, -_0x445d4d * _0x3659ec, -_0x445d4d * _0x3659ec, 2 * _0x445d4d * _0x3659ec, 2 * _0x445d4d * _0x3659ec), ctx.restore();
    } else {
        if (_0x10a292 = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/bone1.png')) ctx.save(), ctx.globalAlpha = 1, _0x445d4d = this.rad - this.outlineW, ctx.drawImage(_0x10a292, -_0x445d4d * _0x3659ec, -_0x445d4d * _0x3659ec, 2 * _0x445d4d * _0x3659ec, 2 * _0x445d4d * _0x3659ec), ctx.restore();
        _0x10a292 = 0;
        0xb > this.tailState && 5 < this.tailState ? _0x10a292 = (this.tailState - 5) / 6 : 3 >= this.tailState && (_0x10a292 = this.tailState / 3);
        _0x3fb426 = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/bone3.png');
        0xb > this.tailState && _0x3fb426 && (ctx.save(), ctx.globalAlpha = 5 < this.tailState ? 1 - _0x10a292 : 1, _0x445d4d = this.rad - this.outlineW, ctx.drawImage(_0x3fb426, -_0x445d4d * _0x3659ec, -_0x445d4d * _0x3659ec, 2 * _0x445d4d * _0x3659ec, 2 * _0x445d4d * _0x3659ec), ctx.restore());
        _0x3fb426 = getLoadedImg('skins/kingdragon/'+this.animalSpecies +'/bone2.png');
        0x3 > this.tailState && _0x3fb426 && (ctx.save(), ctx.globalAlpha = 1 - _0x10a292, _0x445d4d = this.rad - this.outlineW, ctx.drawImage(_0x3fb426, -_0x445d4d * _0x3659ec, -_0x445d4d * _0x3659ec, 2 * _0x445d4d * _0x3659ec, 2 * _0x445d4d * _0x3659ec), ctx.restore());
    }
    this.drawWings();
};
KingDragon.prototype.getSkinName = function () {
        return './kingdragon/' + this.animalSpecies + '/kingdragon_body';
    };
KingDragon.prototype.drawLowWaterDrop = function () {
    if (this.flag_lowWat) {
        var _0x27f437 = 0.5 * (0.6),
            _0x27f437 = 0.2 + _0x27f437 + _0x27f437 * Math.sin(2 * Math.PI / 1.2 * (timestamp / 1000));
        ctx.save();
        ctx.globalAlpha = _0x27f437;
        ctx.fillStyle = _0x5a9265;
        ctx.beginPath();
        ctx.arc(0, this.rad + 5, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }
};

KingDragon.prototype.animalInfo = function () {
     infoO = {};
  
             switch (this.animalSpecies) {
        case 0:
            infoO.aniName = 'King Dragon';
            break;
        case 1:
            infoO.aniName = 'Golden King Dragon';
            break;
        case 2:
            infoO.aniName = 'King Ripper';
            break;
        case 3:
            infoO.aniName = 'King Stan';
            break;
        case 4:
            infoO.aniName = 'King Shah';
            break;
                  case 5:
            infoO.aniName = 'Queen Scarlet';
            break;
                         case 6:
            infoO.aniName = 'Queen Celeste';
            break;
                             case 69:
            infoO.aniName = 'King Crimson';
            break;
                               case 200:
            infoO.aniName = 'Queen Flame';
            break;
        }
            infoO.aniDesc = "";
            infoO.upgradeText ='UPGRADED to ' + infoO.aniName +  "\nYou got firestream that burns your victim alive! Watch your tail and slap them hard.";
            infoO.aniCol = "black";
            infoO.skinName = this.getSkinName();
          
    return infoO;
};

function KingDragon() {
    this.lava = 0;
    KingDragon.superClass.call(this, o_animal);
}
window.KingDragon = KingDragon;
GameObjType.setCustomClassForGameObjType(KingDragon, o_animal, a_kingdragon);
///////
// file: js_src/gameobj/animal/Octopus.js
///////
var superClass = Animal;
Octopus.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Octopus.prototype.constructor = Octopus;
Octopus.superClass = superClass; //'class' var

//example of custom Z
/*Octopus.prototype.updateZ = function() {
    this.z = 1002;
}*/

//custom data for this class (must be matched by server-side write of this data!)
Octopus.prototype.readCustomData_onNewlyVisible = function (msg) {
    Octopus.superClass.prototype.readCustomData_onNewlyVisible.call(this, msg); //call super
    //
}

//custom data for this class (must be matched by server-side write of this data!)
Octopus.prototype.readCustomData_onUpdate = function (msg) {
    Octopus.superClass.prototype.readCustomData_onUpdate.call(this, msg); //call super

   /* if (this.flag_usingAbility) {
        var isAnim = msg.readUInt8() > 0;
        var objOrAniT = msg.readUInt16();
        //console.log(objOrAniT);
        //check if it changed
        if (this.octoIsAnimal != isAnim || this.octoDisguiseObjT != objOrAniT || this.octoDrawObj == null) {

            //needs to update inner obj that draws the disguise animal/food item
            var theObjT = isAnim ? o_animal : objOrAniT;
            var theAniT = isAnim ? objOrAniT : null;
            //console.log("octo disguised as obj T "+theObjT+" aniT "+theAniT+" isAni? "+isAnim+" tPassed "+objOrAniT);


            //makes sure the correct subclass is used as well:)
            var octoObj = GameObjType.createGameObjOfOType(theObjT, theAniT);
            if (isAnim) //animals need aniType set explicitely
                octoObj.animalType = theAniT;
            //this obj will stay at x/y 0,0
            octoObj.oRad = this.oRad;
            octoObj.nRad = this.nRad;
            octoObj.curBiome = this.curBiome;// biome_ocean;

            this.octoDrawObj = octoObj;
        }
        this.octoIsAnimal = isAnim;
        this.octoDisguiseObjT = objOrAniT;

    }*/

} 

//Octopus drawing (split into methods since animals are more complex)

//lowest, under the green/red outline (draw first)
Octopus.prototype.drawUnderSkinImgOutline = function () {
    Octopus.superClass.prototype.drawUnderSkinImgOutline.call(this);
}
//drawn right before skin image
Octopus.prototype.drawUnderSkinImg = function () {
    Octopus.superClass.prototype.drawUnderSkinImg.call(this);
    //eg. draw frog legs image that will be UNDER the skin
}
Octopus.prototype.drawOnTopOfSkinImg = function () {
    Octopus.superClass.prototype.drawOnTopOfSkinImg.call(this); //call super to draw eg. glow effects
    //eg. draw yeti snowball, octopus


    //octopus effect
   /* if (this.flag_usingAbility) {

        ctx.save();
        ctx.globalAlpha = 1.0 - this.underwaterA;

        //for certain obj types, set a fixed rad size
        if (this.octoDisguiseObjT == o_bigMushroom) {
            //this.octoDrawObj.type=a_shrimp;
            this.octoDrawObj.nRad = 25.0;
        } else if (this.octoDisguiseObjT == o_plankton) {
            //this.octoDrawObj.type=a_shrimp;
            this.octoDrawObj.nRad = 17.0;
        } else if (this.octoDisguiseObjT == o_healingStone) {
            //this.octoDrawObj.type=a_shrimp;
            this.octoDrawObj.nRad = 15.0;
        }
        else
            this.octoDrawObj.nRad = this.rad;

        if (this.octoDisguiseObjT == o_hill) {
            console.log("Octo is hill now!");
        }

        this.octoDrawObj.draw();

        ctx.restore();
    } */
}
Octopus.prototype.drawWhenUnderwater = function () {
    Octopus.superClass.prototype.drawWhenUnderwater.call(this);
    //draw shark fin, etc

    //drawCircle(0, this.rad * 0.2, this.rad * 0.12, "blue");
}

//custom class variables
Octopus.prototype.octoDisguiseObjT = 0;
Octopus.prototype.octoIsAnimal = false;
//custom data for this class (must be matched by server-side write of this data!)
Octopus.prototype.drawHealthBar = function () {
    if (this.flag_usingAbility) {

        if (this.octoIsAnimal) {
            Octopus.superClass.prototype.drawNickName.call(this, 1);
            this.octoDrawObj.curBiome = this.curBiome;// biome_ocean;
            this.hpPer_n = 2;
            this.hpPer = 25;
            this.hpBarA = 1;
        }
        else
            return;
    }

    ctx.save();
    //ease vars
    var hpBarA_n = (timestamp < this.hpBarTimeoutT ? 1.0 : 0.0);
    this.hpBarA += (hpBarA_n - this.hpBarA) * 0.04;


    if (this.hpBarA > 0.001) {
        this.hpPer += (this.hpPer_n - this.hpPer) * 0.1;

        //draw bar
        var eyeS = Math.max(1.0, this.rad / 25.0);
        var barW = 20.0 * eyeS,
          barH = 5 * eyeS;
        var bx = 0,
          by = -this.rad - 10 * eyeS;
        ctx.globalAlpha *= this.hpBarA; //bar bg
        ctx.fillStyle = "rgba(0,0,0,0.35)";
        ctx.fillRect(bx - barW / 2, by - barH / 2, barW, barH);

        //ctx.globalAlpha = this.hpBarA * f;
        ctx.fillStyle = "#16D729"; //bar fill
        var width = barW * (this.hpPer / 100.0)
        if (this.flag_usingAbility && this.octoIsAnimal)
            width = barW * (25 / 100.0)


        ctx.fillRect(bx - barW / 2, by - barH / 2, width, barH);
    }
    ctx.restore(); //restore from fade
}

//set custom skin name
Octopus.prototype.getSkinName = function () {
    return "octopus";// without .png (/skins/ * .png)
}


function Octopus() {
    Octopus.superClass.call(this, o_animal);

}
window.Octopus = Octopus;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Octopus, o_animal, a_octopus);
///////
// file: js_src/gameobj/animal/scorpion.js
///////
var superClass = Animal;
GiantScorpion.prototype = Object.create(superClass.prototype);
GiantScorpion.prototype.constructor = GiantScorpion;
GiantScorpion.superClass = superClass;
GiantScorpion.prototype.updateZ = function () { 
    this.z = this.flag_underWater ? -100 : this.flag_isInArena ? this.z = 1000 : this.flag_inTree ? this.z = 1301 + this.rad : this.z =(1050 + this.rad);
};
GiantScorpion.prototype.animalInfo = function () {
        var InfoO = {};
        switch (this.animalSpecies) {
        case 0:
            InfoO.aniName = 'Giant Scorpion';
            break;
        case 1:
            InfoO.aniName = 'Golden Scorpion';
            break;
        case 2:
            InfoO.aniName = 'Carnelian Scorpion';
        }
      
    
        InfoO.aniCol = '#FF9000';
        InfoO.skinName = 'desert/' + this.animalSpecies+ '/scorpion';
        InfoO.upgradeText = 'UPGRADED to ' + InfoO.aniName + "\nSting and Shiver your prey to death.\n(Press W to Sting)";
        return InfoO;
    };

    GiantScorpion.prototype.getSkinName = function () {
        var _0x403b22 = '/desert/giantscorpion/' + this.animalSpecies +'/scorpion';
        return _0x403b22 += 0 == this.specType ? '' : this.specType;
    };
    GiantScorpion.prototype.stingerScaleF = 0.7;
    GiantScorpion.prototype.stingerOffsetY = -0.6;
    GiantScorpion.prototype.poison = 50;
    GiantScorpion.prototype.clawAnimation = null;
    GiantScorpion.prototype.stingAnimation = null;
    GiantScorpion.prototype.stingerTailNormal = null;
    GiantScorpion.prototype.stingerTail = null;
    GiantScorpion.prototype.stingerAttack = null;
    GiantScorpion.prototype.stingerAttackFull = null;
    GiantScorpion.prototype.stingerNormal = null;
    GiantScorpion.prototype.stingerNormalFull = null;
    GiantScorpion.prototype.isUsingAbility = true;
    GiantScorpion.prototype.drawSkinCustomization = function () {
         if ((this.specType2 != 1)&& !this.flag_underWater && null != this.stingerTailNormal && null != this.stingerNormalFull) {
         
            var _0x58c1e0 = this.skinScale * this.stingerScaleF,
                _0x24402d = this.skinRad,
                _0x2a5db0 = (timestamp - this.spawnTime) / 1000,
                _0x1946d3 = getAnimFrame(_0x2a5db0, 1.5, 3, 2),
                _0x2f7996 = getAnimFrame(_0x2a5db0, 1.5, 1, 2);
            ctx.save();
            _0x24402d = this.rad - 0.5 * _0x1946d3;
            ctx.drawImage(this.stingerTailNormal, -_0x24402d * _0x58c1e0, (-_0x24402d + _0x24402d * this.stingerOffsetY) * _0x58c1e0 + _0x1946d3 * -_0x2f7996, 2 * _0x24402d * _0x58c1e0, 2 * _0x24402d * _0x58c1e0);
            _0x2a5db0 = (timestamp - this.spawnTime) / 1000;
            _0x2a5db0 = getAnimFrame(_0x2a5db0, 5, 1, 1);
            ctx.globalAlpha = Math.max(0, _0x2a5db0) * Math.max(0, this.poison / 100);
            ctx.drawImage(this.stingerNormalFull, -_0x24402d * _0x58c1e0, (-_0x24402d + _0x24402d * this.stingerOffsetY) * _0x58c1e0 + _0x1946d3 * -_0x2f7996, 2 * _0x24402d * _0x58c1e0, 2 * _0x24402d * _0x58c1e0);
            ctx.restore();
        }
        this.flag_usingAbility || (this.stingAnimation = this.clawAnimation = null, this.isUsingAbility = true);
        !this.isUsingAbility  && (this.isUsingAbility = true, this.stingAnimation = null);
               this.isUsingAbility && this.specType2 == 1 && (null == this.stingAnimation &&(this.stingAnimation = new _0x1abe2b(this, 1, _0x1abe2b.bow, {
            'v1': 0x5
        },false), this.stingAnimation.onFrameEntered = function (_0x8bc96b) {
                 if(this.forObj.flag_usingAbility ){
            ctx.save();
            var _0x1a77d1 = this.forObj.skinScale * this.forObj.stingerScaleF ,
                _0x38dd8a = this.forObj.rad;
     
            ctx.drawImage(this.forObj.stingerTailAttack, -_0x38dd8a * _0x1a77d1, (-_0x38dd8a + _0x38dd8a * this.forObj.stingerOffsetY) * _0x1a77d1, 2 * _0x38dd8a * _0x1a77d1, 2 * (_0x38dd8a + _0x38dd8a * _0x8bc96b) * _0x1a77d1);
            ctx.drawImage(this.forObj.stingerTail, -_0x38dd8a * _0x1a77d1, (-_0x38dd8a + _0x38dd8a * _0x8bc96b) * _0x1a77d1, 2 * _0x38dd8a * _0x1a77d1, 2 * _0x38dd8a * _0x1a77d1);
            ctx.drawImage(this.forObj.stingerAttack, -_0x38dd8a * _0x1a77d1, (-_0x38dd8a + _0x38dd8a * _0x8bc96b) * _0x1a77d1, 2 * _0x38dd8a * _0x1a77d1, 2 * _0x38dd8a * _0x1a77d1);
            var _0x41a28e = getAnimFrame((timestamp - this.spawnTime) / 1000, 5, 1, 1);
            ctx.globalAlpha = Math.max(0, _0x41a28e) * Math.max(0, this.poison / 100);
            ctx.drawImage(this.forObj.stingerAttackFull, -_0x38dd8a * _0x1a77d1, (-_0x38dd8a + _0x38dd8a * _0x8bc96b) * _0x1a77d1, 2 * _0x38dd8a * _0x1a77d1, 2 * _0x38dd8a * _0x1a77d1);
          
            ctx.restore();
                 }
        }), this.stingAnimation && this.stingAnimation.run());
       
     
    };
    GiantScorpion.prototype.tailOffsetY = -0.25;
    GiantScorpion.prototype.tailScaleF = 1.2;
    var _0x3043fd = 4,
        _0x12842c = 0.1;
    GiantScorpion.prototype.drawUnderSkinImg = function () {
        var _0x42919b = getLoadedImg('skins/desert/giantscorpion/' + this.animalSpecies +'/tail_back.png');
        if (_0x42919b) {
            var _0x3f3c13 = 0;
            this.stingAnimation && 0.5 > this.stingAnimation.frame && (_0x3f3c13 = 0.3 * -this.stingAnimation.frame);
            var _0x5ce8b1 = this.skinScale * this.tailScaleF,
                _0x3ba07b = this.skinRad;
            ctx.drawImage(_0x42919b, -_0x3ba07b * _0x5ce8b1, (-_0x3ba07b + _0x3ba07b * this.tailOffsetY) * _0x5ce8b1, 2 * _0x3ba07b * _0x5ce8b1, 2 * (_0x3ba07b + _0x3ba07b * _0x3f3c13) * _0x5ce8b1);
        }
        this.flag_usingAbility && !this.flag_underWater && (null == this.clawAnimation && (this.clawAnimation = new _0x1abe2b(this, 0.9, _0x1abe2b.bow, {
            'v1': _0x3043fd
        },false), this.clawAnimation.keepLastFrame = true, this.clawAnimation.onFrameEntered = function (_0x1dd836) {
            var _0x3f3c13 = 0;
            0.5 > _0x1dd836 && (_0x3f3c13 = -_0x1dd836);
            _0x1dd836 = 'skins/desert/giantscorpion/' + this.forObj.animalSpecies +'/arms.png';
           if(this.forObj.flag_eff_aniInClaws) _0x1dd836 = 'skins/desert/giantscorpion/' + this.forObj.animalSpecies +'/arms-grabbed.png';
            if (_0x1dd836 = getLoadedImg(_0x1dd836)) {
             
                var _0x5ce8b1 = this.forObj.skinScale * this.forObj.tailScaleF,
                    _0x3ba07b = this.forObj.skinRad;
                !this.hasStopped && 0.75 > this.timePassed ? (_0x12842c = _0x3f3c13, ctx.drawImage(_0x1dd836, -_0x3ba07b * _0x5ce8b1, (-_0x3ba07b + _0x3ba07b * _0x3f3c13) * _0x5ce8b1, 2 * _0x3ba07b * _0x5ce8b1, 2 * _0x3ba07b * _0x5ce8b1)) : ctx.drawImage(_0x1dd836, -_0x3ba07b * _0x5ce8b1, (-_0x3ba07b + _0x3ba07b * _0x12842c) * _0x5ce8b1, 2 * _0x3ba07b * _0x5ce8b1, 2 * _0x3ba07b * _0x5ce8b1);
            }
        }), null != this.clawAnimation && this.clawAnimation.run());
    };
    GiantScorpion.prototype.readCustomData_onNewlyVisible = function (_0x3bc81a) {
        GiantScorpion.superClass.prototype.readCustomData_onNewlyVisible.call(this, _0x3bc81a);
        this.readInfo(_0x3bc81a);
    };
    GiantScorpion.prototype.readCustomData_onUpdate = function (_0x3417c5) {
        GiantScorpion.superClass.prototype.readCustomData_onUpdate.call(this, _0x3417c5);
        this.readInfo(_0x3417c5);
    };
    GiantScorpion.prototype.readInfo = function (_0x1edc87) {
      this.poison = _0x1edc87.readUInt8();
 
    };
    GiantScorpion.prototype.preLoad = function () {
        getLoadedImg('skins/desert/giantscorpion/' + this.animalSpecies +'/scorpion1.png');
        this.stingerTailNormal = getLoadedImg('skins/desert/giantscorpion/' + this.animalSpecies +'/stinger_normal.png');
        this.stingerTail = getLoadedImg('skins/desert/giantscorpion/' + this.animalSpecies +'/stinger_tail.png');
        this.stingerTailAttack = getLoadedImg('skins/desert/giantscorpion/' + this.animalSpecies +'/attack_tail.png');
        this.stingerAttack = getLoadedImg('skins/desert/giantscorpion/' + this.animalSpecies +'/attack_stinger_dull.png');
        this.stingerAttackFull = getLoadedImg('skins/desert/giantscorpion/' + this.animalSpecies +'/attack_stinger_full.png');
        this.stingerNormal = getLoadedImg('skins/desert/giantscorpion/' + this.animalSpecies +'/normal_stinger_dull.png');
        this.stingerNormalFull = getLoadedImg('skins/desert/giantscorpion/' + this.animalSpecies +'/normal_stinger_full.png');
    };
    function GiantScorpion() {
        GiantScorpion.superClass.call(this, o_animal);
    }

    window.GiantScorpion = GiantScorpion;
    GameObjType.setCustomClassForGameObjType(GiantScorpion, o_animal, a_scorpion);
///////
// file: js_src/gameobj/animal/pterodactyl.js
///////
Pterodactyl.prototype = Object.create(superClass.prototype);
Pterodactyl.prototype.constructor = Pterodactyl;
Pterodactyl.superClass = superClass;
Pterodactyl.prototype.animalInfo = function () {
    var infoO = {};
   switch (this.animalSpecies) {
     case 0:
            infoO.aniName = 'Pterodactyl';
            break;
        case 1:
            infoO.aniName = 'Golden Pterodactyl';
            break;
        case 2:
            infoO.aniName = 'Emerald Pterodactyl';
       break;
           case 12:
            infoO.aniName = 'Blue Pterodactyl';
       break;
        }

    infoO.aniCol = '#FF9000';
    infoO.skinName =  'desert/pterodactyl';
    infoO.upgradeText = 'UPGRADED to ' + infoO.aniName + '\nFly and dive onto prey to pick it up.';
    return infoO;
};
Pterodactyl.prototype.getHead = function (_0x29679c, _0x4adc58) {
    return 'skins/desert'+ '/' + _0x29679c + '/'+ this.animalSpecies + '/' + _0x29679c + '_head.png';
};
Pterodactyl.prototype.getSkinName = function () {
          var _0x528bd8 ='desert/pterodactyl/' + this.animalSpecies + '/pterodactyl';
        return _0x528bd8 = 4 == this.specType ? _0x528bd8 + '4' : _0x528bd8 + (0 == this.specType ? '' : 1);
};
Pterodactyl.prototype.getWing = function (_0x4ac10e, _0x26897e) {
    this.flag_flying || (_0x26897e = _0x26897e + '' + _0x26897e);
    return 'skins/desert'+ '/' + _0x4ac10e + '/' + this.animalSpecies + '/' + _0x4ac10e + '_wing' + _0x26897e + '_nohand.png';
};
Pterodactyl.prototype.getWingBone = function (_0x204a7c, _0x47cdee) {
    this.flag_flying || (_0x47cdee = _0x47cdee + '' + _0x47cdee);
    return 'skins/desert'+ '/' + _0x204a7c + '/' + this.animalSpecies + '/' + _0x204a7c + '_wing' + _0x47cdee + '_bones.png';
};
Pterodactyl.prototype.getHand = function (_0x10826f, _0x5416bc) {
    this.flag_flying || (_0x5416bc = _0x5416bc + '' + _0x5416bc);
    this.isGliding && (_0x5416bc += '3');
    return 'skins/desert' + '/' + _0x10826f + '/'+ this.animalSpecies + '/' + _0x10826f + '_hand' + _0x5416bc + '.png';
};
Pterodactyl.prototype.biteStart = 0;
Pterodactyl.prototype.flaps = 0;
Pterodactyl.prototype.flapsMod = 5;
Pterodactyl.prototype.countFlap = true;
Pterodactyl.prototype.canFlap = !options_lowGraphics;
Pterodactyl.prototype.resumeFlapT = 0;
Pterodactyl.prototype.lastFlapFrame = 0;
Pterodactyl.prototype.flapSpeed = 1;
Pterodactyl.prototype.flapAmount = 0.2;
Pterodactyl.prototype.r = 22.5;
Pterodactyl.prototype.ax = 0;
Pterodactyl.prototype.ay = 1;
Pterodactyl.prototype.ww = 4;
Pterodactyl.prototype.wh = 2.5;
Pterodactyl.prototype.ax2 = 1;
Pterodactyl.prototype.rf = -2;
Pterodactyl.prototype.erf = 11.5;
Pterodactyl.prototype.erf_gliding = 30;
Pterodactyl.prototype.lx = -0.05;
Pterodactyl.prototype.famt = 0.5;
Pterodactyl.prototype.yf = 0.15;
Pterodactyl.prototype.xf = -0.2;
Pterodactyl.prototype.legScale = 1.15;
Pterodactyl.prototype.handPerc = 0.9;
Pterodactyl.prototype.handWF = 0;
Pterodactyl.prototype.set = true;
Pterodactyl.prototype.wOffset = 0.1;
Pterodactyl.prototype.headF = 0.5;
Pterodactyl.prototype.headFDisp = -0.6;
Pterodactyl.prototype.headScale = 0.8;
Pterodactyl.prototype.headX = 0.225;
Pterodactyl.prototype.drawLegs = function () {
    var _0x2eed07 = 1.4705882352941,
        _0x4afd81 = this.flag_eff_aniInClaws ? 'legs2' : 'legs';
    if (_0x4afd81 = getLoadedImg('skins/desert/pterodactyl/'+ this.animalSpecies + '/'+ _0x4afd81 + '.png')) {
        ctx.save();
        var _0x219321 = this.rad,
            _0x2eed07 = _0x2eed07 * this.legScale;
        ctx.drawImage(_0x4afd81, -_0x219321 * _0x2eed07, (-_0x219321 + _0x219321 * this.lx) * _0x2eed07, 2 * _0x219321 * _0x2eed07, 2 * _0x219321 * _0x2eed07);
        ctx.restore();
    }
};
Pterodactyl.prototype.drawUnderSkinImg = function () {
    this.flag_usingAbility && (this.drawWing(this.frame, 1), this.drawWing(this.frame, 2));
    2 == this.specType && this.drawLegs();
};
Pterodactyl.prototype.drawSkinCustomization = function () {

    if (this.flag_usingAbility) {
        this.drawBone(this.frame, 1);
        this.drawBone(this.frame, 2);
        this.drawHand(this.frame, 1);
        this.drawHand(this.frame, 2);
        var _0x2e5ee9 = 1.4705882352941,
            _0x1dbcf1 = this.getHead('pterodactyl', true);
        if (_0x1dbcf1 = getLoadedImg(_0x1dbcf1)) {
            ctx.save();
            var _0x2e5ee9 = _0x2e5ee9 + -(0.1 * this.headF) * this.frame,
                _0x5b7869 = this.rad;
            ctx.drawImage(_0x1dbcf1, -_0x5b7869 * _0x2e5ee9, (-_0x5b7869 + _0x5b7869 * (0.3 + this.frame / 10 * this.headFDisp) + this.headF * this.frame) * _0x2e5ee9, 2 * _0x5b7869 * _0x2e5ee9, 2 * _0x5b7869 * _0x2e5ee9);
            ctx.restore();
        }
    } else if (_0x1dbcf1 = this.getHead('pterodactyl', true), _0x1dbcf1 = getLoadedImg(_0x1dbcf1)) _0x2e5ee9 = 1.4705882352941 * this.headScale, ctx.save(), _0x5b7869 = this.rad, ctx.drawImage(_0x1dbcf1, -_0x5b7869 * _0x2e5ee9, (-_0x5b7869 + _0x5b7869 * this.headX) * _0x2e5ee9, 2 * _0x5b7869 * _0x2e5ee9, 2 * _0x5b7869 * _0x2e5ee9), ctx.restore();
};
Pterodactyl.prototype.drawWing = function (_0x4f5a63, _0x5c300b) {
  
    var _0x2a359f = 1 == _0x5c300b ? 1 : -1,
        _0x2bd995 = getLoadedImg(this.getWing('pterodactyl', _0x5c300b));
    if (_0x2bd995) {
        var _0x22b0c1 = -(-0.2 + _0x4f5a63) * toRadians(_0x2a359f * this.r),
            _0x15f848 = 0.8 * this.rad,
            _0x1f5264 = this.rad,
            _0x67c3e0 = _0x15f848 * this.ww,
            _0x15f848 = _0x15f848 * this.wh,
            _0x13ccc2 = 1 == _0x5c300b ? this.ax : this.ax2,
            _0x24e8b9 = this.ay + this.yf * _0x4f5a63;
        ctx.save();
        _0x22b0c1 *= this.rf;
        ctx.rotate(toRadians(_0x2a359f * (this.isGliding ? this.erf_gliding : this.erf)) + _0x22b0c1);
        ctx.drawImage(_0x2bd995, 0 + _0x67c3e0 * -_0x13ccc2 + _0x4f5a63 * _0x67c3e0 * _0x2a359f * this.wOffset, _0x1f5264 + _0x15f848 * -_0x24e8b9, _0x67c3e0, _0x15f848);
        ctx.restore();
    }
};
Pterodactyl.prototype.drawBone = function (_0xf1fb52, _0x48a7e2) {
    var _0x50e10e = getLoadedImg(this.getWingBone('pterodactyl', _0x48a7e2)),
        _0x152838 = 1 == _0x48a7e2 ? 1 : -1;
    if (_0x50e10e) {
        var _0x24b193 = -(-0.2 + _0xf1fb52) * toRadians(_0x152838 * this.r),
            _0x22a484 = 0.8 * this.rad,
            _0x3f0bc9 = this.rad,
            _0x5a7c64 = _0x22a484 * this.ww,
            _0x22a484 = _0x22a484 * this.wh,
            _0x815a56 = 1 == _0x48a7e2 ? this.ax : this.ax2,
            _0x32ba27 = this.ay + this.yf * _0xf1fb52;
        ctx.save();
        _0x24b193 *= this.rf;
        ctx.rotate(toRadians(_0x152838 * (this.isGliding ? this.erf_gliding : this.erf)) + _0x24b193);
        ctx.drawImage(_0x50e10e, 0 + _0x5a7c64 * -_0x815a56 + _0xf1fb52 * _0x5a7c64 * _0x152838 * this.wOffset, _0x3f0bc9 + _0x22a484 * -_0x32ba27, _0x5a7c64, _0x22a484);
        ctx.restore();
    }
};
var _0x152b10 = 0;
Pterodactyl.prototype.drawHand = function (_0x8ffe97, _0x50fe2f) {
    var _0x551de1 = 1 == _0x50fe2f ? 1 : -1,
        _0x48325e = getLoadedImg(this.getHand('pterodactyl', _0x50fe2f));
    if (_0x48325e) {
        var _0x503254 = -(-0.2 + _0x8ffe97) * toRadians(_0x551de1 * this.r),
            _0x5026b3 = 0.8 * this.rad,
            _0x1b2913 = this.rad,
            _0x149abd = _0x5026b3 * this.ww,
            _0x5026b3 = _0x5026b3 * this.wh + (this.flag_flying ? 0 : this.wh * _0x152b10),
            _0x21ac92 = (1 == _0x551de1 ? this.ax : this.ax2) + _0x551de1 * this.xf * _0x8ffe97,
            _0x5e2ae9 = this.ay + this.yf * _0x8ffe97,
            _0x503254 = _0x503254 * this.rf,
            _0x28cd2b = this.isGliding ? this.erf_gliding : this.erf;
        ctx.save();
        this.drawImage(_0x48325e, 0 + _0x149abd * -_0x21ac92, _0x1b2913 + _0x5026b3 * -_0x5e2ae9, _0x149abd + _0x149abd * _0x551de1 * this.handWF, _0x5026b3, toRadians(_0x551de1 * _0x28cd2b) + _0x503254);
        ctx.restore();
    }
};
Pterodactyl.prototype.frame = 0;
Pterodactyl.prototype.lastFlapFrame = 0;
Pterodactyl.prototype.getFrame = function () {

   if( this.flag_flying && timestamp > this.resumeFlapT && (this.canFlap = true));
    var _0x2b4955 = (timestamp - this.spawnTime) / 1000,
        _0x2b4955 = !options_lowGraphics && this.canFlap ? getAnimFrame(_0x2b4955, this.flapSpeed, this.flapAmount * this.handPerc, 2) : this.birdNoAnimationFlyWingAngle;

    if (this.flag_flying && 0 > _0x2b4955 && this.countFlap && timestamp > this.resumeFlapT )  {
      if(this.isGliding){
  this.flaps = 0
}
      this.countFlap = false, 
      this.flaps++;
 
     if(this.flaps % this.flapsMod == 0){
      this.lastFlapFrame = _0x2b4955, 
      this.canFlap = false,
      this.resumeFlapT = timestamp + 1500;
     }
    }else{
  if(0 < _0x2b4955 && !this.countFlap)    (this.countFlap = true);
    }
  
  
    if(!this.canFlap)  _0x2b4955 = this.lastFlapFrame;
  else this.lastFlapFrame = _0x2b4955 ;
    return _0x2b4955;
};
Pterodactyl.prototype.beforeCustomDraw = function () {
    this.flag_usingAbility && (this.flag_flying || this.set ? this.flag_flying && this.set && (this.set = true, this.r = 22.5, this.erf = 11.5, this.ww = 4.5) : (this.set = true, this.r = 11.25, this.erf = 5.75, this.ww = 3.5), this.flapAmount = this.isGliding ? 0 : this.famt, this.frame = this.getFrame());
};
Pterodactyl.prototype.updateZ = function () {
 if(!this.flag_flying){
  this.z = 1000 + this.rad;
 }else{
   this.z = 15005 + this.rad;
 }
};
Pterodactyl.prototype.isGliding = true;
Pterodactyl.prototype.readCustomData_onNewlyVisible = function (msg) {
    Pterodactyl.superClass.prototype.readCustomData_onNewlyVisible.call(this, msg);
    this.readInfo(msg);
};
Pterodactyl.prototype.readCustomData_onUpdate = function (msg) {
    Pterodactyl.superClass.prototype.readCustomData_onUpdate.call(this, msg);
    this.readInfo(msg);
};
Pterodactyl.prototype.readInfo = function (msg) {
   this.isGliding = 1 == msg.readUInt8();
};

function Pterodactyl() {
    Pterodactyl.superClass.call(this, o_animal);
}
window.Pterodactyl = Pterodactyl;
GameObjType.setCustomClassForGameObjType(Pterodactyl, o_animal, a_pterodactyl);
///////
// file: js_src/gameobj/animal/bigfoot.js
///////
Bigfoot.prototype = Object.create(superClass.prototype);
Bigfoot.prototype.constructor = Bigfoot;
Bigfoot.superClass = superClass;
Bigfoot.prototype.animalInfo = function () {
    var _0x1e5890 = {
        'aniName': 'The BigFoot',
        'skinName': 'bigfoot/thebigfoot',
        'aniDesc': ''
    };
    _0x1e5890.upgradeText = 'UPGRADED to ' + _0x1e5890.aniName + `! So it really exists... 
 Right click/W to throw Spears. 
Hold to make a fire (every 30s)`;
    _0x1e5890.aniCol = '#839eb5';
    return _0x1e5890;
};
Bigfoot.prototype.getAbilityInfo = function (_0x4f532b) {
    return {
        'abilName': `Throw Spear\
 (Hold for fire!)`,
        'abilImg': 'skins/bigfoot/ability.png'
    };
};
Bigfoot.prototype.getSkinName = function () {
    var _0x21b754;
    _0x21b754 = 'bigfoot/';
    return _0x21b754 = this.flag_underWater ? _0x21b754 + 'thebigfoot' : _0x21b754 + 'bigfoot';
};
Bigfoot.prototype.drawUnderSkinTail = function (_0x55fbcc) {
    this.isCamouflage || Bigfoot.superClass.prototype.drawUnderSkinTail.call(this, _0x55fbcc);
};

Bigfoot.prototype.isTransforming = true;
Bigfoot.prototype.isCamouflage = true;
Bigfoot.prototype.carrotAlpha = 0;
Bigfoot.prototype.getIdealOpacity = function () {
    return this.flag_underWater || this.flag_usingAbility && this.isTransforming || this.isCamouflage ? 0 : 1;
};
Bigfoot.prototype.biteStart = 0;
Bigfoot.prototype.flapAmount = 3;
Bigfoot.prototype.flapDur = 1.5;
Bigfoot.prototype.roarStartT = -500;
Bigfoot.prototype.spearThrow = function () {
    ctx.save();
    var _0x579217 = getLoadedImg('skins/bigfoot/arm21.png');
    if (_0x579217) {
        var _0xb1f6b5 = Math.min(1, (timestamp - this.biteStart) / 200),
            _0x32a744 = -clamp((timestamp - this.biteStart) / 300, 0, 1) * toRadians(90);
        ctx.rotate(this.angle + _0x32a744);
        var _0x32a744 = 1.75 * -this.rad,
            _0x5a871d = 2 * _0x32a744,
            _0xb1f6b5 = 2 * _0x32a744 * _0xb1f6b5;
        ctx.drawImage(_0x579217, this.rad / 1.7 * _0x5a871d, this.rad + -0.8 * _0xb1f6b5 + _0x32a744, _0x5a871d, _0xb1f6b5);
    }
    ctx.restore();
};
Bigfoot.prototype.drawSkinCustomization = function () {
    this.flag_underWater || (this.setSkinScale(), this.flag_usingAbility || (this.biteStart = 0), 0x0 != this.id && this.spearInHand ? this.spearHandAnimation(0) : this.leftHandAnimation(0), this.rightHandAnimation(0), this.bigfootHead(0), this.flag_usingAbility || this.flag_inHidingHole || this.oogaBoogaAnimation(0));
};
Bigfoot.prototype.oogaBoogaNextT = +new Date() +15000;
Bigfoot.prototype.oogaBoogaFrame = 0;
Bigfoot.prototype.oogaBoogaFrameT = 0;
Bigfoot.prototype.oogaBoogaAnimation = function (_0x416072) {
    timestamp > this.oogaBoogaNextT && (timestamp > this.oogaBoogaFrameT && (this.oogaBoogaFrameT = timestamp + 300, this.oogaBoogaFrame += 1, 1 == this.oogaBoogaFrame ? this.gotChat('OOGA!') : 3 == this.oogaBoogaFrame && this.gotChat('BOOGA!')), 4 < this.oogaBoogaFrame && (this.oogaBoogaFrame = 0, this.oogaBoogaNextT = +new Date() + 15000));
    if (0 < this.oogaBoogaFrame) {
        _0x416072 = 1.4705882352941;
        var _0x5e66b4 = getLoadedImg('skins/bigfoot/mouth' + this.oogaBoogaFrame + '.png');
        if (_0x5e66b4) {
            ctx.save();
            var _0x2321b1 = this.rad;
            ctx.drawImage(_0x5e66b4, -_0x2321b1 * _0x416072, (-_0x2321b1 + 0 * _0x2321b1) * _0x416072, 2 * _0x2321b1 * _0x416072, 2 * _0x2321b1 * _0x416072);
            ctx.restore();
        }
    }
};
Bigfoot.prototype.spearInHand = true;
Bigfoot.prototype.canCreateFire = true;
Bigfoot.prototype.readCustomData_onUpdate = function (_0x508108) {
    Bigfoot.superClass.prototype.readCustomData_onUpdate.call(this, _0x508108);
    this.spearInHand = 1 == _0x508108.readUInt8();
    this.canCreateFire = 1 == _0x508108.readUInt8();
};
Bigfoot.prototype.readCustomData_onNewlyVisible = function (_0x3e7886) {
    Bigfoot.superClass.prototype.readCustomData_onNewlyVisible.call(this, _0x3e7886);
};
var _0x21286e = 0.84,
    _0x429324 = 0.47,
    _0x35932c = 45,
    _0x4c4312 = -30,
    _0x8a441a = 1.3,
    _0x57bed6 = 1.5,
    _0x4bd1bd = 0.3;
Bigfoot.prototype.bigfootHead = function (_0x6b80a5) {
    _0x6b80a5 = 0;
    var _0x5095f8 = 1.4705882352941,
        _0x450bb2 = this.flag_usingAbility ? 'head2' : 'head';
    this.flag_usingAbility || (_0x6b80a5 = 0);
    if (_0x450bb2 = getLoadedImg('skins/bigfoot/' + _0x450bb2 + '.png')) {
        ctx.save();
        var _0x1fbab2 = this.rad;
        ctx.drawImage(_0x450bb2, -_0x1fbab2 * _0x5095f8, (-_0x1fbab2 + _0x1fbab2 * _0x6b80a5) * _0x5095f8, 2 * _0x1fbab2 * _0x5095f8, 2 * _0x1fbab2 * _0x5095f8);
        ctx.restore();
    }
};
Bigfoot.prototype.spearHandAnimation = function (_0x11c623) {
    var _0x58599c = (timestamp - this.spawnTime) / 1000,
        _0x58599c = getAnimFrame(_0x58599c, _0x57bed6, _0x4bd1bd, 2),
        _0x2ed9c5 = getLoadedImg('skins/bigfoot/arm2.png');
    if (_0x2ed9c5) {
        ctx.save();
        _0x11c623 = -(-0.2 + _0x58599c) * toRadians(_0x35932c);
        var _0x1dbe08 = this.rad * _0x8a441a;
        ctx.rotate(toRadians(_0x4c4312) + _0x11c623);
        _0x11c623 = this.rad;
        var _0x3c4cf3 = 2 * _0x1dbe08,
            _0x1dbe08 = 2 * _0x1dbe08,
            _0x433d7a = _0x429324,
            _0x45b0e5 = _0x21286e;
        ctx.drawImage(_0x2ed9c5, 0 + _0x3c4cf3 * -_0x433d7a, _0x11c623 + _0x1dbe08 * -_0x45b0e5, _0x3c4cf3, _0x1dbe08);
        this.canCreateFire && (_0x2ed9c5 = getLoadedImg('skins/bigfoot/arm2-fire.png')) && (_0x58599c = (timestamp - this.spawnTime) / 1000, _0x58599c = getAnimFrame(_0x58599c, 5, 1, 1), ctx.globalAlpha = Math.max(0, _0x58599c), ctx.drawImage(_0x2ed9c5, 0 + _0x3c4cf3 * -_0x433d7a, _0x11c623 + _0x1dbe08 * -_0x45b0e5, _0x3c4cf3, _0x1dbe08));
        ctx.restore();
    }
};
Bigfoot.prototype.rightHandAnimation = function (_0x1b64dd) {
    var _0x4e432d = getAnimFrame((timestamp - this.spawnTime) / 1000, _0x57bed6, _0x4bd1bd, 2);
    if (_0x1b64dd = getLoadedImg('skins/bigfoot/arm1.png')) {
        ctx.save();
        var _0x1ddbe6 = -_0x4e432d * toRadians(-10),
            _0x4e432d = this.rad * _0x8a441a;
        ctx.rotate(toRadians(-5) + _0x1ddbe6);
        _0x1ddbe6 = 2 * _0x4e432d;
        _0x4e432d *= 2;
        ctx.drawImage(_0x1b64dd, -0.55 * _0x1ddbe6, this.rad + -0.85 * _0x4e432d, _0x1ddbe6, _0x4e432d);
        ctx.restore();
    }
};
Bigfoot.prototype.leftHandAnimation = function (_0x3e895b) {
    var _0x5e6af1 = getAnimFrame((timestamp - this.spawnTime) / 1000, _0x57bed6, _0x4bd1bd, 2);
    if (_0x3e895b = getLoadedImg('skins/bigfoot/arm21.png')) {
        ctx.save();
        var _0x38240d = -_0x5e6af1 * toRadians(-10),
            _0x5e6af1 = this.rad * _0x8a441a;
        ctx.rotate(toRadians(-5) + _0x38240d);
        _0x38240d = 2 * _0x5e6af1;
        _0x5e6af1 *= 2;
        ctx.drawImage(_0x3e895b, -0.47 * _0x38240d, this.rad + -0.8 * _0x5e6af1, _0x38240d, _0x5e6af1);
        ctx.restore();
    }
};

function Bigfoot() {
    Bigfoot.superClass.call(this, o_animal);
    this.oogaBoogaNextT = +new Date() + 15000;
}
window.BigFoot = Bigfoot;
GameObjType.setCustomClassForGameObjType(Bigfoot, o_animal, a_bigfoot);

///////
// file: js_src/gameobj/animal/santa.js
///////










var superClass = Animal;
AstralTrex.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
AstralTrex.prototype.constructor = AstralTrex;
AstralTrex.superClass = superClass; //'class' var

AstralTrex.prototype.updateZ = function () {
  this.z = this.flag_underWater ? -100 : this.flag_flying ? this.z = 10001 : this.flag_isInArena ? this.z = 1000 : this.flag_inTree ? this.z = 1301 + this.rad : this.z =(1010 + this.rad);
};







AstralTrex.prototype.drawOnTopOfSkinImg = function() {



  var skins = "skins";
  

  var iScale = 500 / 340.0;
  {


var max = 10
var max2 =-3

if (this.flag_flying) {
max = 45
max2 = -10
}
      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
 var frame =  getAnimFrame(tSinceSpawn,2.1, .4, 1.5);
    
             var theRim = getLoadedImg(
        skins + "/astraltrex/" + "/rim" + ".png"
      );
      if (theRim) {
                        var period = 8.0; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.5 * (p_max - p_min);
      if  (!this.flag_underWater && !this.flag_eff_invincible) {
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
      );
      }
        ctx.save();
        var rad = this.rad;
     var overSizeOffset = rad / 2;
      ctx.drawImage(
          theRim,
        -rad - overSizeOffset,
        -rad - overSizeOffset,
        2 * rad * iScale,
        2 * rad * (iScale * 1.2)
      );
        ctx.restore();
      }
    
                    if  (!this.flag_underWater && !this.flag_eff_invincible) {
                    ctx.globalAlpha = 0.5;
          }
    

    if (this.flag_invisible && this.id == myPlayerID) {
      
                          ctx.globalAlpha = 0.5
    } else {
         if (this.flag_invisible && this.id != myPlayerID) {
                          ctx.globalAlpha = 0;
    } else {
                         if  (!this.flag_underWater && !this.flag_eff_invincible) {
                    ctx.globalAlpha = 1;
          } 

    }

    }

    




 

  };

};
function AstralTrex() {
  AstralTrex.superClass.call(this, o_animal);
}
window.AstralTrex = AstralTrex;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(AstralTrex, o_animal, a_astraltrex)








var superClass = Animal;
AstralDragon.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
AstralDragon.prototype.constructor = AstralDragon;
AstralDragon.superClass = superClass; //'class' var

AstralDragon.prototype.updateZ = function () {
  this.z = this.flag_underWater ? -100 : this.flag_flying ? this.z = 10001 : this.flag_isInArena ? this.z = 1000 : this.flag_inTree ? this.z = 1301 + this.rad : this.z =(1010 + this.rad);
};




AstralDragon.prototype.getSkinName = function() {
  var skin =
    "astraldragon/astraldragon_body"




  return skin;
};


AstralDragon.prototype.drawOnTopOfSkinImg = function() {



  var skins = "skins";
  

  var iScale = 500 / 340.0;
  {


var max = 10
var max2 =-3

if (this.flag_flying) {
max = 45
max2 = -10
}
      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
 var frame =  getAnimFrame(tSinceSpawn,2.1, .4, 1.5);
    
             var theRim = getLoadedImg(
        skins + "/astraldragon/" + "/astraldragon_rim" + ".png"
      );
      if (theRim) {
                        var period = 8.0; //periodic func with time
    var p_min = 0.3,
      p_max = 1.0;
    var amp = 0.5 * (p_max - p_min);
      if  (!this.flag_underWater && !this.flag_eff_invincible) {
    ctx.globalAlpha *=
      p_min +
      amp +
      amp *
        Math.sin(
          ((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0)
      );
      }
        ctx.save();
        var rad = this.rad;
        ctx.drawImage(
          theRim,
          -rad * iScale,
          -rad * iScale * 0.99,
          2 * rad * iScale,
          2 * rad * iScale 
        );
        ctx.restore();
      }
    
                    if  (!this.flag_underWater && !this.flag_eff_invincible) {
                    ctx.globalAlpha = 0.5;
          }
    

    if (this.flag_invisible && this.id == myPlayerID) {
      
                          ctx.globalAlpha = 0.5
    } else {
         if (this.flag_invisible && this.id != myPlayerID) {
                          ctx.globalAlpha = 0;
    } else {
                         if  (!this.flag_underWater && !this.flag_eff_invincible) {
                    ctx.globalAlpha = 1;
          } 

    }

    }

      var theImg = getLoadedImg(
       skins + "/astraldragon/right_wing.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(frame) * toRadians(max); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad - this.outlineW;
        
        ctx.rotate(toRadians(max2) + extraRotate);
 
        ctx.drawImage(
        theImg,
      -rad * iScale,
      -rad * iScale,
      2 * rad * iScale,
      2 * rad * iScale
        );

        ctx.restore();
      }
    


      var theImg = getLoadedImg(
        skins + "/astraldragon/left_wing.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(frame) * toRadians(-max); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad - this.outlineW;
        ctx.rotate(toRadians(-max2) + extraRotate);
    
        ctx.drawImage(
         theImg,
      -rad * iScale,
      -rad * iScale,
      2 * rad * iScale,
      2 * rad * iScale
        );

        ctx.restore();
      }
    
     var theHead = getLoadedImg(
        skins + "/astraldragon/" + "/astraldragon_head" + this.specType + ".png"
      );
    
    if (this.flag_flying) {
      theHead = getLoadedImg(
        skins + "/astraldragon/" + "/astraldragon_head" + 1 + ".png"
      );
      if (theHead) {
        ctx.save();
        var rad = this.rad;
        ctx.drawImage(
          theHead,
          -rad * iScale,
          (-rad + rad * 0.1) * iScale * 1.1,
          2 * rad * iScale,
          2 * rad * iScale 
        );
        ctx.restore();
      }
    } else {
      if (theHead) {
        ctx.save();
        var rad = this.rad;
        ctx.drawImage(
          theHead,
          -rad * iScale,
          (-rad + rad * 0.1) * iScale * 1.2,
          2 * rad * iScale,
          2 * rad * iScale 
        );
        ctx.restore();
      }
    }


 

  };

};
function AstralDragon() {
  AstralDragon.superClass.call(this, o_animal);
}
window.AstralDragon = AstralDragon;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(AstralDragon, o_animal, a_astraldragon);


///////
// file: js_src/gameobj/animal/Santa.js
///////

var superClass = Animal;
IceMonster.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
IceMonster.prototype.constructor = IceMonster;
IceMonster.superClass = superClass; //'class' var
IceMonster.prototype.readCustomData_onNewlyVisible = function (msg) {
        IceMonster.superClass.prototype.readCustomData_onNewlyVisible.call(this, msg);
        this.readInfo(msg);
    };
    IceMonster.prototype.readCustomData_onUpdate = function (msg) {
        IceMonster.superClass.prototype.readCustomData_onUpdate.call(this, msg);
        this.readInfo(msg);
    };
    IceMonster.prototype.readInfo = function (msg) {
      
                var _0xa9f163 = msg.readUInt8();
                this.crystals = [];
                for (i = 0; i < _0xa9f163  ; i++) {
                 
                    var _0x125caf = msg.readInt16() / 100;
                    var _0x18dd56 = msg.readInt16() / 100;
                    var _0x150bb5 = msg.readUInt16() / 100;
                    var _0x2adfbc = msg.readUInt16() / 100;
               
                    this.crystals.push({
                        'x': _0x125caf,
                        'y': _0x18dd56,
                        'nRad': _0x150bb5,
                        'oRad': _0x150bb5,
                        'rad': _0x150bb5,
                        'angle': _0x2adfbc
                    });
                   
          };
    };
 
IceMonster.prototype.drawOnTopOfSkinImg = function() {

 var _0x32e153 = this.rad - this.outlineW;
 
    for (i = 0; i < this.crystals.length; i++) {
            
      
            var _0x28cda7 = this.crystals[i];
            if (_0x28cda7.nRad == 0) continue;
            _0x28cda7.rad += (_0x28cda7.nRad - _0x28cda7.rad) * 0.01;
            var _0x537db5 = _0x28cda7['x'] * _0x32e153;
            var _0x3c54ff = _0x28cda7['y'] * _0x32e153;
            var _0x43b339 = _0x28cda7.angle;
            var _0x5a7f6a = _0x28cda7.rad;
            ctx.save();
            ctx.translate(_0x537db5, _0x3c54ff);
            ctx.globalAlpha = 1;
            ctx.rotate(toRadians(_0x43b339));
            var _0xb06102 = getLoadedImg('skins/monsters/icemonster/crystal.png');
            if (_0xb06102) {
                ctx.drawImage(_0xb06102, -_0x5a7f6a, -_0x5a7f6a * 2, _0x5a7f6a * 2, _0x5a7f6a * 2);
            }
            ctx.restore();
        
    }
};
function IceMonster() {
     this.crystals = [];
  IceMonster.superClass.call(this, o_animal);
}
window.IceMonster = IceMonster;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(IceMonster, o_animal, a_iceMonster);


///////
// file: js_src/gameobj/animal/Santa.js
///////

var superClass = Animal;
Santa.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Santa.prototype.constructor = Santa;
Santa.superClass = superClass; //'class' var

 Santa.prototype.getSkinName = function() {
  var skin =
    "santa/" +
    "/eagle" +
    (this.specType == 0 ? "" : this.specType);

if (this.flag_flying && !this.flag_isGrabbed&&this.flag_usingAbility) {
var skin ="santa/flying_eagle"
};

  return skin;
};

Santa.prototype.drawUnderSkinImg = function() {
  if (!this.flag_usingAbility) return;

  var skins = "skins";
  

  var iScale = 500 / 340.0;
  {  
      var n = (timestamp - this.spawnTime) / 1000.0;
     var l = getAnimFrame(n, .9, .3, 2)
    if (this.flag_flying && !this.flag_isGrabbed) {
    if (i = getLoadedImg( skins + "/santa/" + "/eagle_wing1.png")) ctx.save(), r = -(-.2 + l) * toRadians(90), s = .8 * this.rad, ctx.rotate(r), r = this.rad, h = 1.4 * s, o = 2 * s, ctx.drawImage(i, 0 + .2 * h, r + -1.2 * o, h, o), ctx.restore();
if (i = getLoadedImg( skins + "/santa/" + "/eagle_wing2.png")) ctx.save(), r = -(-.2 + l) * toRadians(-90), s = .8 * this.rad, ctx.rotate(r), r = this.rad, h = 1.4 * s, o = 2 * s, ctx.drawImage(i, 0 + -1.2 * h, r + -1.2 * o, h, o), ctx.restore();
  }
};
};
function Santa() {
  Santa.superClass.call(this, o_animal);
}
window.Santa = Santa;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Santa, o_animal, a_santa);


///////
// file: js_src/gameobj/animal/Eagle.js
///////

var superClass = Animal;
Eagle.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Eagle.prototype.constructor = Eagle;
Eagle.superClass = superClass; //'class' var

 
Eagle.prototype.animalInfo = function() {
  var infoO = {};

  var extras = "";
  switch (this.animalSpecies) {
    case 0:
      infoO.aniName = "Bald Eagle";
      break;
    case 1:
      infoO.aniName = "Golden Eagle";
      extras = "(Can even pick predators!)";
      break;
          case 2:
      infoO.aniName = "Eagle";
      extras = "";
      break;
  }
  infoO.aniCol = "#5b400d";
  infoO.upgradeText =
    "UPGRADED to " +
    infoO.aniName +
    "!\nEagles can fly up other animals in the air! !\n" +
    extras;

  infoO.skinName =
    "eagle/" +
    this.animalSpecies +
    "/eagle" +
    (this.specType == 0 ? "" : this.specType);
  return infoO;
};

Eagle.prototype.drawSkinCustomization = function() {
 // if (!this.flag_usingAbility) return;

  var skins = "skins";
  

  

  var iScale = 500 / 340.0;
  {
    if (this.flag_flying && !this.flag_isGrabbed && !this.flag_oldeagle) {
      ctx.save();
//
      
      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame = !options_lowGraphics
        ? getAnimFrame(tSinceSpawn, 0.9, 0.3, 2)
        : this.birdNoAnimationFlyWingAngle;
      var theImg = getLoadedImg(
        skins + "/eagle/" + this.animalSpecies + "/eagle_wing1.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(90.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(45) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.62,
          imH = rad * 2.5; // * fac0to1;
        var imAnchorX = 0.2,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      
      
      
      var theImg = getLoadedImg(
        skins + "/eagle/" + this.animalSpecies + "/eagle_wing2.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(-90.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(-45) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.62,
          imH = rad * 2.5; // * fac0to1;
        var imAnchorX = 0.8,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      ctx.restore();
    } else if (this.specType == 1 && !this.flag_oldeagle) {
      // attack animation
      ctx.save();

      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame = !options_lowGraphics
        ? getAnimFrame(tSinceSpawn, 0.7, 0.3, 2)
        : 0;
      var theImg = getLoadedImg(
        skins + "/eagle/" + this.animalSpecies + "/eagle_wing1.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(45.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(15) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.8,
          imH = rad * 2.2; // * fac0to1;
        var imAnchorX = 0,
          imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      var theImg = getLoadedImg(
        skins + "/eagle/" + this.animalSpecies + "/eagle_wing2.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(-45.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(-15) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.8,
          imH = rad * 2.2; // * fac0to1;
        var imAnchorX = 1,
          imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      ctx.restore();
    }
    

        Eagle.prototype.drawUnderSkinImg = function() {
        if (this.flag_flying && !this.flag_isGrabbed && this.flag_oldeagle) { //OLD EAGLE FLY
          
      ctx.save();
          //getLoadedImg( skins + "/eagle/" + "/eagle_wing1.png")) ctx.save(), r = -(-.2 + l) * toRadians(90), s = .8 * this.rad, ctx.rotate(r), r = this.rad, h = 1.4 * s, o = 2 * s, ctx.drawImage(i, 0 + .2 * h, r + -1.2 * o, h, o), ctx.restore();
     var n = (timestamp - this.spawnTime) / 1000.0;
     var l = getAnimFrame(n, .9, .3, 2)    
     var r = -(-.2 + l) * toRadians(90)
     var s = .8 * this.rad
     var r = this.rad
     var h = 1.4 * s
     var o = 2 * s
     
     
     
          
      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame = !options_lowGraphics
        ? getAnimFrame(tSinceSpawn, 0.9, 0.3, 2)
        : this.birdNoAnimationFlyWingAngle;
      var theImg = getLoadedImg(
        skins + "/eagle/" + this.animalSpecies + "/eagle_wing1.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(90.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 1;
        ctx.rotate(toRadians(40) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.62,
          imH = rad * 1.5; // * fac0to1;
        var imAnchorX = 0.2,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      var theImg = getLoadedImg(
        skins + "/eagle/" + this.animalSpecies + "/eagle_wing2.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(-90.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 1;
        ctx.rotate(toRadians(-40) + extraRotate);
        var imX = 0,
          imY = this.rad;
         var imW = rad * 2.0 * 0.62,
          imH = rad * 1.5; // * fac0to1;
        var imAnchorX = 0.8,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)
//ctx.drawImage(i, 0 + .2 * h, r + -1.2 * o, h, o), ctx.restore();
        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      ctx.restore();
    } else if (this.specType == 100089) {
      // attack animation
      ctx.save();

      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame = !options_lowGraphics
        ? getAnimFrame(tSinceSpawn, 0.7, 0.3, 2)
        : 0;
      var theImg = getLoadedImg(
        skins + "/eagle/" + this.animalSpecies + "/eagle_wing2.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(45.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(15) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.8,
          imH = rad * 2.2; // * fac0to1;
        var imAnchorX = 0,
          imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      var theImg = getLoadedImg(
        skins + "/eagle/" + this.animalSpecies + "/eagle_wing1.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(-45.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(-15) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.8,
          imH = rad * 2.2; // * fac0to1;
        var imAnchorX = 1,
          imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      ctx.restore();
    }
        };

    
    
    //console.log(this.specType)
    if (this.flag_flying && !this.flag_isGrabbed && this.animalSpecies != 2|| this.specType == 1 && this.animalSpecies != 2) {
      var head = "eagle_head" + (this.specType == 1 ? "2" : "");

      var theHead = getLoadedImg(
        skins + "/eagle/" + this.animalSpecies + "/" + head + ".png"
      );
      if (theHead) {
        ctx.save();
        var rad = this.rad;
        ctx.drawImage(
          theHead,
          -rad * iScale,
          (-rad + rad * 0.1) * iScale,
          2 * rad * iScale,
          2 * rad * iScale
        );
        ctx.restore();
      }
    }
  }
};

function Eagle() {
  Eagle.superClass.call(this, o_animal);
}
window.Eagle = Eagle;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Eagle, o_animal, a_eagle);


///////
// file: js_src/gameobj/animal/Ostrich.js
///////

var superClass = Animal;
SBird.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
SBird.prototype.constructor = SBird;
SBird.superClass = superClass; //'class' var
SBird.prototype.updateZ = function() {
  this.z = this.flag_underWater ? -100 : this.flag_flying ? this.z = 10001 : this.flag_isInArena ? this.z = 1000 : this.flag_inTree ? this.z = 1301 + this.rad : this.z =(1010 + this.rad);
};
 
SBird.prototype.animalInfo = function() {
  var infoO = {};

  var extras = "";

  infoO.aniName = "Secretary Bird";
  infoO.aniCol = "#5b400d";
  infoO.upgradeText = "UPGRADED to Secretary Bird!\n A glass cannon which flys and rapidly strikes animals below!"
if (this.specType == 0 && !this.flag_flying) {
  infoO.skinName =
    "secretarybird/" +
    "secretarybird" 
} else {
  infoO.skinName =
    "secretarybird/" +
    "secretarybird2" 
}
  return infoO;
};



SBird.prototype.drawSkinCustomization = function() {
 // if (!this.flag_usingAbility) return;

  var skins = "skins";
  

  

  var iScale = 500 / 340.0;
  {
    
    
          SBird.prototype.drawUnderSkinImg = function() {
        if (this.flag_flying && !this.flag_isGrabbed && this.specType != 1 && this.specType != 2) {
          var theImg = getLoadedImg(
        skins + "/secretarybird/" +  "/legs.png"
      );
      
            if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(90.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
var iScale = 500 / 340.0
      ctx.drawImage(
        theImg,
        -rad * iScale,
        -rad * 1.75 * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );

        ctx.restore();
       }
        }
        

        if (this.specType == 1 || this.specType == 2)  {
                    var theImg = getLoadedImg(
        skins + "/secretarybird/" +  "/leg"+ this.specType +".png"
      );
          
                      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(90.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
var iScale = 500 / 340.0
      ctx.drawImage(
        theImg,
        -rad * iScale,
        0,
        2 * rad * iScale,
        2 * rad * iScale
      );

        ctx.restore();
       }
          
        }
      };
    
    
    if (this.flag_flying && !this.flag_isGrabbed && !this.flag_oldeagle && this.specType != 1 && this.specType != 2) {
      ctx.save();
//
      
      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame = !options_lowGraphics
        ? getAnimFrame(tSinceSpawn, 0.9, 0.3, 2)
        : this.birdNoAnimationFlyWingAngle;
      var theImg = getLoadedImg(
        skins + "/secretarybird/" +  "/secretarybird_wing1.png"
      );
      

      
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(90.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(30) + extraRotate);
        var imX = this.rad/10,
          imY = this.rad*1.2;
        var imW = rad * 2.0 * 0.62,
          imH = rad * 2.2; // * fac0to1;
        var imAnchorX = 0.2,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }


      
      var theImg = getLoadedImg(
        skins + "/secretarybird/" +  "/secretarybird_wing2.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(-90.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(-30) + extraRotate);
        var imX = -this.rad/10,
          imY = this.rad*1.2;
        var imW = rad * 2.0 * 0.62,
          imH = rad * 2.2;// * fac0to1;
        var imAnchorX = 0.8,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      ctx.restore();
    } else if (this.specType == 1 || this.specType == 2) {
      // attack animation
      ctx.save();

      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame = !options_lowGraphics
        ? getAnimFrame(tSinceSpawn, 0.7, 0.3, 2)
        : 0;
      var theImg = getLoadedImg(
        skins + "/secretarybird/" +  "/secretarybird_wing1.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(45.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(15) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.62,
          imH = rad * 2.2; // * fac0to1;
        var imAnchorX = 0,
          imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      var theImg = getLoadedImg(
        skins + "/secretarybird/" +  "/secretarybird_wing2.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(-45.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(-15) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.62,
          imH = rad * 2.2; // * fac0to1;
        var imAnchorX = 1,
          imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      ctx.restore();
    }
    


    
    
    //console.log(this.specType)
    if (this.flag_flying && !this.flag_isGrabbed || (this.specType == 1 || this.specType == 2)) {
      var head = "secretarybird/secretarybird_head"

      var theHead = getLoadedImg(
        skins + "/secretarybird/secretarybird_head.png"
      );
      if (theHead) {
        ctx.save();
        var rad = this.rad * 0.8;
        ctx.drawImage(
          theHead,
          -rad * iScale,
          (-rad + rad * 0.1) * iScale * 0.9,
          2 * rad * iScale,
          2 * rad * iScale
        );
        ctx.restore();
      }
    }
  }
};

function SBird() {
 SBird.superClass.call(this, o_animal);
}
window.SBird = SBird;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(SBird, o_animal, a_secretarybird);















var superClass = Animal;
Phoenix.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Phoenix.prototype.constructor = Phoenix;
Phoenix.superClass = superClass; //'class' var
Phoenix.prototype.updateZ = function() {
  this.z = this.flag_underWater ? -100 : this.flag_flying ? this.z = 10001 : this.flag_isInArena ? this.z = 1000 : this.flag_inTree ? this.z = 1301 + this.rad : this.z =(1010 + this.rad);
};
 
Phoenix.prototype.animalInfo = function() {
  var infoO = {};

  var extras = "";
  
if (this.animalSpecies == 1) {
  infoO.aniName = "ROAMS PHOENIX";
  infoO.aniCol = "#5b400d";
  infoO.upgradeText = "UPGRADED to ROAMS PIHGEBNOX!\nOGM ROMS.IO I LOVE ROAMS.IO!@$(@U#)OU$RLEHFV!"
  } else if (this.animalSpecies == 3) {
    infoO.aniName = "Astral Phoenix";
  infoO.aniCol = "#5c308b";
  infoO.upgradeText = "You have upgraded to an flamboyant and amazing animal!\nDominate the world and unleash your will!"
} else {
  infoO.aniName = "Phoenix";
  infoO.aniCol = "#5b400d";
  infoO.upgradeText = "UPGRADED to Phoenix!\nCreate powerful fire tornados to burn your enemies alive!"
}
if (this.specType == 0 && !this.flag_flying) {
  infoO.skinName =
    "phoenix/" + this.animalSpecies +
    "/phoenix" 
} else {
  infoO.skinName =
    "phoenix/" + this.animalSpecies +
    "/phoenix_flying" 
}
  return infoO;
};




Phoenix.prototype.drawUnderSkinImg = function() {
      if (3 != this.animalSpecies) {
      return;
    }
  this.hasSpawnedYet = +new Date();
      let angle = 0
          var period = 3; //periodic func with time
    var p_min = 0,
      p_max = 1;
    var amp = 0.5 * (p_max - p_min);
            var period2 = 500; //periodic func with time
    var p_min2 = 0,
      p_max2 = 36000;
    var amp2 = 0.5 * (p_max2 - p_min2);

  
      let colors = [["#6B00C1", "#6000AD"], ['#8F00FF', "#7200CB"], ["#C100FF", "#9900CA"], ["#EC00FF", "#C000D0"], ["#9C2ADA", '#8222B6'], ["#DA2AD2", "#B824B1"]];
      this.currentParticles = [];
      for (var i = 0; i < 5; i++) {
        let maincolor = colors[Math.floor(Math.random() * colors.length)];
        this.currentParticles.push({
          'dist': 0,
          'x': 0,
          'y': 0,
          'angle': angle,
          'rad': this.rad/10,
          'color': "#6B00C1",
          'strokeColor': maincolor[1],
          'alpha': 0x0
        });
         angle += 360/7
      }

        for (var m in this.currentParticles) {
                      //this.currentParticles[m].x = (Math.random() - 0.5) * this.rad * 2
                      //this.currentParticles[m].y = (Math.random() - 0.5) * this.rad * 2
     var change2 = 1 * p_min2 + amp2 + amp2 * Math.sin(((2.0 * Math.PI) / period2) * ((timestamp - this.spawnTime) / 1000.0));
     this.currentParticles[m].angle -= 1 * change2/360
                      this.currentParticles[m].x = Math.sin(1 * this.currentParticles[m].angle)
                      this.currentParticles[m].y = Math.cos(1 * this.currentParticles[m].angle)
     var change = 1 * p_min + amp + amp * Math.sin(((2.0 * Math.PI) / period) * ((timestamp - this.spawnTime) / 1000.0));
          console.log("PARTICLEX : "+ this.currentParticles[m].x)
          drawCircle(this.currentParticles[m].x * this.rad * 2 * change , this.currentParticles[m].y * this.rad * 2 * change, this.currentParticles[m].rad, this.currentParticles[m].color);
        } 
 
    
};




Phoenix.prototype.drawSkinCustomization = function() {
 // if (!this.flag_usingAbility) return;

  var skins = "skins";
  

  

  var iScale = 500 / 340.0;
  {
    if (this.flag_flying && !this.flag_isGrabbed && !this.flag_oldeagle) {
      ctx.save();
//
      
      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame = !options_lowGraphics
        ? getAnimFrame(tSinceSpawn, 0.9, 0.3, 2)
        : this.birdNoAnimationFlyWingAngle;
      var theImg = getLoadedImg(
        skins + "/phoenix/" +  this.animalSpecies + "/phoenix_wing1.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(60.0); //spin animation

        //clip to sliwly show the claw
     /*   var rad = this.rad * 0.8;
        ctx.rotate(toRadians(30) + extraRotate);
        var imX = this.rad/10,
          imY = this.rad*1.2;
        var imW = rad * 2.0 * 0.8,
          imH = rad * 2.2; // * fac0to1;
        var imAnchorX = 0.2,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
          ); */

        
        
        if (this.animalSpecies == 1 || this.animalSpecies == 3) {
        frame = !options_lowGraphics
        ? getAnimFrame(tSinceSpawn, 0.5, 0.4, 1.5)
        : this.birdNoAnimationFlyWingAngle;
                  var extraRotate = -(-0.2 + frame) * toRadians(45.0);
                          ctx.rotate(toRadians(15) + extraRotate);
        var imX = 0;
        var imY = 1.4 * this.rad;
        var imW = 1.5 * 0.8 * this.rad;
        var imH = 2.3 *  0.8 * this.rad;
        var imAnchorX = -0.05;
        var imAnchorY = 1.6;
        ctx.drawImage(theImg, imX + imW * -imAnchorX, imY + imH * -imAnchorY, imW, imH);
        } else {
                  var extraRotate = -(-0.2 + frame) * toRadians(60.0); //spin animation
                          ctx.rotate(toRadians(30) + extraRotate);
           var rad = this.rad * 0.8;
        var imX = this.rad/10,
          imY = this.rad*1.2;
      /*  var imW = rad * 2.0 * 0.8,
          imH = rad * 2.2; // * fac0to1; */
                var imW = 1.5 * 0.8 * this.rad;
        var imH = 2.3 *  0.8 * this.rad;
        var imAnchorX = 0.2,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );
        }
        
        

        ctx.restore();
      }

      
      
      
      var theImg = getLoadedImg(
        skins + "/phoenix/" +  this.animalSpecies + "/phoenix_wing2.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);

        if (this.animalSpecies == 1 || this.animalSpecies == 3) {
        frame = !options_lowGraphics
        ? getAnimFrame(tSinceSpawn, 0.5, 0.4, 1.5)
        : this.birdNoAnimationFlyWingAngle;

        var imX = 0;
        var imY = 1.4 * this.rad;
        var imW = 1.5 * 0.8 * this.rad;
        var imH = 2.3 *  0.8 * this.rad;
        var imAnchorX = 1.05;
        var imAnchorY = 1.6;
                            var extraRotate = -(-0.2 + frame) * toRadians(-45.0);
                          ctx.rotate(toRadians(-15) + extraRotate);
        ctx.drawImage(theImg, imX + imW * -imAnchorX, imY + imH * -imAnchorY, imW, imH);
        } else {
       var extraRotate = -(-0.2 + frame) * toRadians(-60.0); //spin animation
        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(-30) + extraRotate);
        var imX = -this.rad/10,
          imY = this.rad*1.2;
      /*  var imW = rad * 2.0 * 0.8,
          imH = rad * 2.2; // * fac0to1; */
                var imW = 1.5 * 0.8 * this.rad;
        var imH = 2.3 *  0.8 * this.rad;
        var imAnchorX = 0.8,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );
        }
        ctx.restore();
      }

      ctx.restore();
    } else if (this.specType == 1 && !this.flag_oldeagle) {
      // attack animation
      ctx.save();

      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame = !options_lowGraphics
        ? getAnimFrame(tSinceSpawn, 0.7, 0.3, 2)
        : 0;
      var theImg = getLoadedImg(
        skins + "/phoenix/" +  this.animalSpecies + "/phoenix_wing1.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(45.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(15) + extraRotate);
        var imX = 0,
          imY = this.rad;
      /*  var imW = rad * 2.0 * 0.8,
          imH = rad * 2.2; // * fac0to1; */
                var imW = 1.5 * 0.8 * this.rad;
        var imH = 2.3 *  0.8 * this.rad;
        
        var imAnchorX = 0,
          imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      var theImg = getLoadedImg(
        skins + "/phoenix/" +  this.animalSpecies + "/phoenix_wing2.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(-45.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(-15) + extraRotate);
        var imX = 0,
          imY = this.rad;
      /*  var imW = rad * 2.0 * 0.8,
          imH = rad * 2.2; // * fac0to1; */
                var imW = 1.5 * 0.8 * this.rad;
        var imH = 2.3 *  0.8 * this.rad;
        var imAnchorX = 1,
          imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      ctx.restore();
    }
    


    
    
    //console.log(this.specType)
    if (this.flag_flying && !this.flag_isGrabbed && this.animalSpecies != 2|| this.specType == 1 && this.animalSpecies != 2) {
      var head = "phoenix/phoenix_head"

      var theHead = getLoadedImg(
        skins + "/phoenix/" + this.animalSpecies + "/phoenix_head.png"
      );
      if (theHead) {
        ctx.save();
        var rad = this.rad;
        ctx.drawImage(
          theHead,
          -rad * iScale,
          (-rad + rad * 0.1) * iScale,
          2 * rad * iScale,
          2 * rad * iScale
        );
        ctx.restore();
      }
    }
  }
};



function Phoenix() {
 Phoenix.superClass.call(this, o_animal);
}
window.Phoenix = Phoenix;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Phoenix, o_animal, a_phoenix);
















var superClass = Animal;
Ostrich.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Ostrich.prototype.constructor = Ostrich;
Ostrich.superClass=superClass; //'class' var

//example of custom Z
/*Ostrich.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name
Ostrich.prototype.getSkinName = function() {
  return "ostrich/ostrich";
}

function Ostrich(){
    Ostrich.superClass.call(this, o_animal);

}
window.Ostrich=Ostrich;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Ostrich, o_animal, a_ostrich);


///////
// file: js_src/gameobj/animal/OstrichBaby.js
///////


var superClass = Animal;
OstrichBaby.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
OstrichBaby.prototype.constructor = OstrichBaby;
OstrichBaby.superClass=superClass; //'class' var

//example of custom Z
/*OstrichBaby.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name
OstrichBaby.prototype.getSkinName = function() {
  return "ostrich/ostrich-baby";
}







function OstrichBaby(){
    OstrichBaby.superClass.call(this, o_animal);

}


window.OstrichBaby=OstrichBaby;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(OstrichBaby, o_animal, a_ostrichBaby);


///////
// file: js_src/gameobj/animal/Falcon.js
///////

var Falcon = Falcon;
var superClass = Animal;
Falcon.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Falcon.prototype.constructor = Falcon;
Falcon.superClass = superClass; //'class' var

//example of custom Z
/*Falcon.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name
Falcon.prototype.getSkinName = function() {
  return (
    "falcon/"
    +
    this.animalSpecies
    +"/falcon" +
    (this.specType == 0 || this.specType == undefined ? "" : this.specType)
  );
};

Falcon.prototype.drawSkinCustomization = function() {
  if (!this.flag_usingAbility) return;
  var skins = "skins";
  
  var iScale = 500 / 340.0;
  if (this.flag_flying && !this.flag_isGrabbed && this.specType == 1) {
    ctx.save();

    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.7, 0.4, 2)
      : this.birdNoAnimationFlyWingAngle;
    var theImg = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(80.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(25) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.65,
        imH = rad * 2.5; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(-80.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(-25) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.65,
        imH = rad * 2.5; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  } else if (this.flag_flying && this.specType == 2) {
    // dive animation
    ctx.save();

    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.7, 0.3, 2)
      : 0;
    var theImg = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + 0) * toRadians(25.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + 0) * toRadians(-25.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  } else if (this.flag_flying && this.specType == 3) {
    // attack animation
    ctx.save();

    //falcon_attack
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.5, 0.4, 2)
      : 0;
    var theImg = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(45.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(15) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 1,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(-45.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(-15) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 1,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  }

  if (this.specType != 0 && this.specType != undefined) {
    var theHead = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_head.png");
    if (theHead) {
      ctx.save();
      var rad = this.rad * (this.specType == 3 ? 1.2 : 1);
      var yDist = rad * 0.2;
      if (this.specType == 3) yDist = rad * -0.15;
      ctx.drawImage(
        theHead,
        -rad * iScale,
        (-rad + yDist) * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
      ctx.restore();
    }
  }
};

function Falcon() {
  Falcon.superClass.call(this, o_animal);
}
window.Falcon = Falcon;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Falcon, o_animal, a_falcon);

var Falcon = Falcon;
var superClass = Animal;
Falcon.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Falcon.prototype.constructor = Falcon;
Falcon.superClass = superClass; //'class' var

//example of custom Z
/*Falcon.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name
Falcon.prototype.getSkinName = function() {
  return (
    "falcon/"
    +
    this.animalSpecies
    +"/falcon" +
    (this.specType == 0 || this.specType == undefined ? "" : this.specType)
  );
};

Falcon.prototype.drawSkinCustomization = function() {
  if (!this.flag_usingAbility) return;
  var skins = "skins";
  
  var iScale = 500 / 340.0;
  if (this.flag_flying && !this.flag_isGrabbed && this.specType == 1) {
    ctx.save();

    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.7, 0.4, 2)
      : this.birdNoAnimationFlyWingAngle;
    var theImg = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(80.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(25) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.65,
        imH = rad * 2.5; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(-80.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(-25) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.65,
        imH = rad * 2.5; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  } else if (this.flag_flying && this.specType == 2) {
    // dive animation
    ctx.save();

    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.7, 0.3, 2)
      : 0;
    var theImg = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + 0) * toRadians(25.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + 0) * toRadians(-25.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  } else if (this.flag_flying && this.specType == 3) {
    // attack animation
    ctx.save();

    //falcon_attack
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.5, 0.4, 2)
      : 0;
    var theImg = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(45.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(15) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 1,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(-45.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(-15) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 1,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  }

  if (this.specType != 0 && this.specType != undefined) {
    var theHead = getLoadedImg(skins + "/falcon/"+this.animalSpecies + "/falcon_head.png");
    if (theHead) {
      ctx.save();
      var rad = this.rad * (this.specType == 3 ? 1.2 : 1);
      var yDist = rad * 0.2;
      if (this.specType == 3) yDist = rad * -0.15;
      ctx.drawImage(
        theHead,
        -rad * iScale,
        (-rad + yDist) * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
      ctx.restore();
    }
  }
};

function Falcon() {
  Falcon.superClass.call(this, o_animal);
}
window.Falcon = Falcon;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Falcon, o_animal, a_falcon);


///////
// file: js_src/gameobj/animal/Thunderbird.js
///////

var Thunderbird = Thunderbird;
var superClass = Animal;
Thunderbird.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Thunderbird.prototype.constructor = Thunderbird;
Thunderbird.superClass = superClass; //'class' var
Thunderbird.prototype.transparancy = 100;
//example of custom Z
/*Thunderbird.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name

Thunderbird.prototype.getSkinName = function() {
  return (
    "thunderbird/thunderbird" +
    (this.specType == 0 || this.specType == undefined ? "" : this.specType)
  );
};

Thunderbird.prototype.drawSkinCustomization = function() {
  if (!this.flag_usingAbility) return;

  
  var skins = "skins";
  
  var iScale = 500 / 340.0;
  if (this.flag_flying && !this.flag_isGrabbed && this.specType == 1) {
    ctx.save();

    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.7, 0.4, 2)
      : this.birdNoAnimationFlyWingAngle;
    var theImg = getLoadedImg(skins + "/thunderbird/thunderbird_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(80.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(25) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.65,
        imH = rad * 2.5; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/thunderbird/thunderbird_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(-80.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(-25) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.65,
        imH = rad * 2.5; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  } else if (this.flag_flying && this.specType == 2) {
    // dive animation
    ctx.save();

    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.7, 0.3, 2)
      : 0;
    var theImg = getLoadedImg(skins + "/thunderbird/thunderbird_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + 0) * toRadians(25.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/thunderbird/thunderbird_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + 0) * toRadians(-25.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  } else if (this.flag_flying && this.specType == 3) {
    // attack animation
    ctx.save();

    //Thunderbird_attack
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.5, 0.4, 2)
      : 0;
    var theImg = getLoadedImg(skins + "/thunderbird/thunderbird_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(45.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(15) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 1,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/thunderbird/thunderbird_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(-45.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(-15) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 1,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  }

  if (this.specType != 0 && this.specType != undefined) {
    var theHead = getLoadedImg(skins + "/thunderbird/thunderbird_head"+( (this.specType == 3||this.specType == 2)? "1":"")+ ".png");
    if (theHead) {
      ctx.save();
      var rad = this.rad * (this.specType == 3 ? 1.2 : 1);
      var yDist = rad * 0.2;
      if (this.specType == 3) yDist = rad * -0.15;
      ctx.drawImage(
        theHead,
        -rad * iScale,
        (-rad + yDist) * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
      ctx.restore();
    }
  }
};
 Thunderbird.prototype.readCustomData_onNewlyVisible = function (msg) {
        Thunderbird.superClass.prototype.readCustomData_onNewlyVisible.call(this, msg);
        this.readInfo(msg);
    };
    Thunderbird.prototype.readCustomData_onUpdate = function (msg) {
        Thunderbird.superClass.prototype.readCustomData_onUpdate.call(this, msg);
        this.readInfo(msg);
    };
    Thunderbird.prototype.readInfo = function (msg) {
      this.transparancy = msg.readUInt8();
 
    };
function Thunderbird() {
  Thunderbird.superClass.call(this, o_animal);
}
window.Thunderbird = Thunderbird;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Thunderbird, o_animal, a_thunderbird);

///////
// file: js_src/gameobj/animal/SnowyOwl.js
///////

var superClass = Animal;
SnowyOwl.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
SnowyOwl.prototype.constructor = SnowyOwl;
SnowyOwl.superClass = superClass; //'class' var

//example of custom Z
/*SnowyOwl.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name
SnowyOwl.prototype.getSkinName = function() {
  return "snowyowl/snowyowl" + (this.specType == 0 ? "" : this.specType);
};

SnowyOwl.prototype.drawSkinCustomization = function() {
  if (!this.flag_usingAbility) return;

  var skins = "skins";
  
  var iScale = 500 / 340.0;
  if (this.flag_flying && !this.flag_isGrabbed && this.specType == 1) {
    ctx.save();

    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.7, 0.4, 2)
      : this.birdNoAnimationFlyWingAngle;
    var theImg = getLoadedImg(skins + "/snowyowl/snowyowl_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(80.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(25) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.65,
        imH = rad * 2.5; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/snowyowl/snowyowl_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(-80.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(-25) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.65,
        imH = rad * 2.5; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  } else if (this.flag_flying && this.specType == 2) {
    // dive animation
    //console.log("snowyowl dive...");
    ctx.save();

    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.7, 0.3, 2)
      : 0;
    var theImg = getLoadedImg(skins + "/snowyowl/snowyowl_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(45.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(15) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/snowyowl/snowyowl_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(-45.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(-15) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  } else if (this.flag_flying && this.specType == 3) {
    // attack animation
    ctx.save();

    //console.log("snowyowl attacking...");
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.5, 0.5, 2)
      : 0;
    var theImg = getLoadedImg(skins + "/snowyowl/snowyowl_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(45.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(25) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/snowyowl/snowyowl_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(-45.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(-25) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  }

  if (this.specType != 0 && this.specType != undefined) {
    var theHead = getLoadedImg(skins + "/snowyowl/snowyowl_head.png");
    if (theHead) {
      ctx.save();
      var rad = this.rad * 0.8;
      ctx.drawImage(
        theHead,
        -rad * iScale,
        (-rad + rad * 0.1) * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
      ctx.restore();
    }
  }
};

function SnowyOwl() {
  SnowyOwl.superClass.call(this, o_animal);
}
window.SnowyOwl = SnowyOwl;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(SnowyOwl, o_animal, a_snowyOwl);


///////
// file: js_src/gameobj/animal/Pelican.js
///////

var Pelican = Pelican;
var superClass = Animal;
Pelican.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Pelican.prototype.constructor = Pelican;
Pelican.superClass = superClass; //'class' var

//example of custom Z
/*Pelican.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name
Pelican.prototype.getSkinName = function() {
  return "pelican/pelican" + (this.specType == 0 ? "" : this.specType);
};

Pelican.prototype.drawSkinCustomization = function() {
  if (!this.flag_usingAbility) return;

  var iScale = 500 / 340.0; //scale up ps image to fit (to remove blank space)
  var rad = this.rad - this.outlineW;

  
  var skins = "skins";
   
  if (this.flag_flying) {
    var wingType = "";

    wingType = "pelican";

    ctx.save();

    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.9, 0.3, 2)
      : this.birdNoAnimationFlyWingAngle;
    var theImg = getLoadedImg(skins + "/pelican/pelican_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(90.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(45) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.6,
        imH = rad * 2.3; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/pelican/pelican_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(-90.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(-45) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.6,
        imH = rad * 2.3; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }
    ctx.restore();
  } else if (this.specType == 1) {
    var wingType = "";
    wingType = "pelican";

    ctx.save();

    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = !options_lowGraphics
      ? getAnimFrame(tSinceSpawn, 0.9, 0.3, 2)
      : 0;
    var theImg = getLoadedImg(skins + "/pelican/pelican_wing11.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(45.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(45) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg(skins + "/pelican/pelican_wing21.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(-45.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(-45) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }
    
    
    var pelican_head = "pelican_head" + (this.specType == 3 ? "2" : "");

    var theHead = getLoadedImg(skins + "/pelican/" + pelican_head + ".png");
    if (theHead) {
      ctx.save();
      var rad = this.rad * 1;
      var ydist = -this.rad * 0.3;
      ctx.drawImage(
        theHead,
        -rad * iScale,
        -rad + ydist * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
      ctx.restore();
    }
    
    
    ctx.restore();
  }

    if (this.flag_flying && !this.flag_isGrabbed) {
    if (this.specType == 2) {
      var waterbag = skins + "/pelican/ability_pelican.png";
      var bag = getLoadedImg(waterbag);
      if (bag) {
        ctx.save();
        ctx.rotate(toRadians(180));
        var rad = this.rad * 0.3;
        var ydist = this.rad * 1;
        ctx.drawImage(
          bag,
          -rad * iScale,
          -rad - ydist * iScale,
          2 * rad * iScale,
          2 * rad * iScale
        );
        ctx.restore();
      }
    }

    var pelican_head = "pelican_head" + (this.specType == 3 ? "2" : "");

    var theHead = getLoadedImg(skins + "/pelican/" + pelican_head + ".png");
    if (theHead) {
      ctx.save();
      var rad = this.rad * 1;
      var ydist = -this.rad * 0.3;
      ctx.drawImage(
        theHead,
        -rad * iScale,
        -rad + ydist * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
      ctx.restore();
    }
  }
};
function Pelican() {
  Pelican.superClass.call(this, o_animal);
}
window.Pelican = Pelican;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Pelican, o_animal, a_pelican);


///////
// file: js_src/gameobj/animal/Frog.js
///////


var superClass = Animal;
Frog.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Frog.prototype.constructor = Frog;
Frog.superClass=superClass; //'class' var

//example of custom Z
Frog.prototype.updateZ = function() {
	this.z = 1003 + this.rad;
}

//set custom skin name
Frog.prototype.getSkinName = function() {
	var suffix = "";
	if (this.flag_usingAbility && !this.flag_underWater )
          suffix = "2";
    return "frog/frog" + suffix;
}

Frog.prototype.drawUnderSkinImg = function() {
	if (this.flag_usingAbility && !this.flag_underWater) {
    var rad = this.rad - this.outlineW;
    var iScale = 500 / 340.0;
    var froglegs = getLoadedImg("./skins/frog/frogLegs.png");
    if (froglegs)
      ctx.drawImage(froglegs, -rad * iScale, (-rad - rad) * iScale, 2 * rad * iScale, 2 * rad * iScale);
	}
}

Frog.prototype.drawWhenUnderwater = function() {

    ctx.save();
    ctx.globalAlpha = 0.2;
    ctx.scale(1, 1.5);
    drawCircle(0, 0, this.rad * 0.5, "#598b30");
    drawCircle(0, this.rad * -0.6, this.rad * 0.3, "#64a034");
    ctx.restore();

}
function Frog(){
    Frog.superClass.call(this, o_animal);

}
window.Frog=Frog;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Frog, o_animal, a_frog);


///////
// file: js_src/gameobj/animal/Duck.js
///////

var thisClass = Duck;
var superClass = Animal;
thisClass.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
thisClass.prototype.constructor = thisClass;
thisClass.superClass = superClass; //'class' var

//example of custom Z
/*thisClass.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name
thisClass.prototype.isAttacking = false;
thisClass.prototype.getSkinName = function() {
  //return "duck/duck_" + this.specType;
  
  var skin = "duck/" + this.animalSpecies + "/duck" + (this.flag_flying? "1" : ""); //1
  return skin;
};

thisClass.prototype.drawSkinCustomization = function() {
  var iScale = 500 / 340.0;
  if (this.isAttacking && this.animalSpecies == 2) {
    var wingType = "";

    wingType = "duck";

    ctx.save();

    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = getAnimFrame(tSinceSpawn, 0.5, 0.3, 2);
    var theImg = getLoadedImg("skins/duck/2/duck_wing1.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(15.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(15) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 0,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }
    

    var theImg = getLoadedImg("skins/duck/2/duck_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.2 + frame) * toRadians(-15.0); //spin animation

      //clip to sliwly show the claw
      var rad = this.rad * 0.8;
      ctx.rotate(toRadians(-15) + extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.7,
        imH = rad * 2.2; // * fac0to1;
      var imAnchorX = 1,
        imAnchorY = 1.5; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theHead = getLoadedImg("skins/duck/2/head_duck.png");
    if (theHead) {
        ctx.save();
        var rad = this.rad * 1;
        var ydist = -this.rad * 0.1;
        ctx.drawImage(theHead, -rad * iScale, (-rad) + ydist * iScale, 2 * rad * iScale, 2 * rad * iScale);
        ctx.restore();

    }

    ctx.restore();
  }
  
  
};

function Duck() {
  superClass.call(this, o_animal);
}
window.Duck = Duck;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Duck, o_animal, a_duck);


///////
// file: js_src/gameobj/animal/Duckling.js
///////


var superClass = Animal;
Duckling.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Duckling.prototype.constructor = Duckling;
Duckling.superClass=superClass; //'class' var

//example of custom Z
/*Duckling.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name
Duckling.prototype.getSkinName = function() {
  return "duck/duckling";
}
function Duckling(){
    Duckling.superClass.call(this, o_animal);

}
window.Duckling=Duckling;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Duckling, o_animal, a_duckling);


///////
// file: js_src/gameobj/animal/BlackDragon.js
///////

var superClass = Animal;
BlackDragon.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
BlackDragon.prototype.constructor = BlackDragon;
BlackDragon.superClass = superClass; //'class' var



//example of custom Z
BlackDragon.prototype.updateZ = function() {
  this.z = 1500 + this.rad;
};



BlackDragon.prototype.getSkinName = function() {
  var skin =
    "blackdragon/" +
    this.animalSpecies +
    "/blackdragon" +
    (this.specType == 0 ? "" : this.specType);

if ( this.flag_flying && !this.flag_isGrabbed&& this.flag_usingAbility) {
var skin ="flying_blackdragon"

};

  return skin;
};



BlackDragon.prototype.animalInfo = function () {
     infoO = {};
  
             switch (this.animalSpecies) {
        case 0:
            infoO.aniName = 'Black Dragon';
            break;
         case 1:
            infoO.aniName = 'Golden Black Dragon';
            break;
        case 2:
            infoO.aniName = 'Azure Bringer';
                 break;
        case 3:
            infoO.aniName = 'Devastator';
        }
  infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "!\n " + infoO.aniName + "s drink lava instead of water! " + infoO.aniName + "s only heal on healing stones/lava!";
      infoO.aniCol = "black";
      infoO.skinName = this.getSkinName();
    return infoO;
}
  
  
  BlackDragon.prototype.drawSkinCustomization = function() {

  var lava = this.lava; //waterBarPerc_n;
  var minLowLava = 50;
  //console.log("lava: " + lava)


  if (!this.flag_usingAbility) return;

  if (this.flag_flying && !this.flag_isGrabbed) {
    ctx.save();
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
    var frame = getAnimFrame(tSinceSpawn, 2.1, 0.4, 1.5);
    var frameW = getAnimFrame(tSinceSpawn, 2.1, -8, 1.5);
    var frameY = getAnimFrame(tSinceSpawn, 2.1, 0.4, 1.5);
    var frameY2 = getAnimFrame(tSinceSpawn, 2.1, 0.3, 1.5);
    var theImg = getLoadedImg("img/blackdragon_wing1.png");
    var rad = this.rad * 0.6;
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      var extraRotate = -(-0.3 + frame) * toRadians(90.0); //spin animation

      //clip to sliwly show the claw

      ctx.rotate(extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.8,
        imH = rad * 2.0 + 5 * frameW; // * fac0to1;
      var imAnchorX = -0.65; //+   frameY/3
      imAnchorY = 1.75 - (frameY + frameY / 4 - frameY2); //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    var theImg = getLoadedImg("img/blackdragon_wing2.png");
    if (theImg) {
      ctx.save();
      //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

      //console.log("getAnimFrame:" + frame);
      var extraRotate = -(-0.3 + frame) * toRadians(-90.0); //spin animation

      //clip to sliwly show the claw

      ctx.rotate(extraRotate);
      var imX = 0,
        imY = this.rad;
      var imW = rad * 2.0 * 0.8,
        imH = rad * 2.0 + 5 * frameW;
      var imAnchorX = 1.65; //-   frameY/2
      imAnchorY = 1.75 - (frameY + frameY / 4) + frameY2; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }

    ctx.restore();
  }
  };
BlackDragon.prototype.readCustomData_onNewlyVisible = function (msg) {
  BlackDragon.superClass.prototype.readCustomData_onNewlyVisible.call(
    this,
    msg
  ); //call superclass version of this method
  this.lava = msg.readUInt8();
};

BlackDragon.prototype.readCustomData_onUpdate = function (msg) {
  BlackDragon.superClass.prototype.readCustomData_onUpdate.call(this, msg); //call superclass version of this method
  this.lava = msg.readUInt8();
};
function BlackDragon() {
  this.lava = 0;
  BlackDragon.superClass.call(this, o_animal);
}
window.BlackDragon = BlackDragon;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(BlackDragon, o_animal, a_blackDragon);



var Dragon = Dragon;
var superClass = Animal;
Dragon.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Dragon.prototype.constructor = Dragon;
Dragon.superClass = superClass; //'class' var






Dragon.prototype.getSkinName = function() {
    var skin =
    "dragon/" +
    this.animalSpecies +
    "/dragon" +
    (this.specType == 0 ? "" : this.specType);
        if (this.specType == 200) {
        let sessiontype = this.specType - 200
              skin = "session/"+ sessiontype + "/dragon";
      }
  return skin;
};

function Dragon() {
  Dragon.superClass.call(this, o_animal);
}
window.Dragon = Dragon;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Dragon, o_animal, a_dragon);



var Tardigrade = Tardigrade;
var superClass = Animal;
Tardigrade.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Tardigrade.prototype.constructor = Tardigrade;
Tardigrade.superClass = superClass; //'class' var

Tardigrade.prototype.getSkinName = function() {
  var skin =
    "waterbear/" +
          this.animalSpecies +
    "/water_bear_" + this.specType
    


  return skin;
};

function Tardigrade() {
  Tardigrade.superClass.call(this, o_animal);
}
window.Tardigrade = Tardigrade;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Tardigrade, o_animal, a_waterbear);

var Tornado = Tornado;
var superClass = Animal;
Tornado.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Tornado.prototype.constructor = Tornado;
Tornado.superClass = superClass; //'class' var

Tornado.prototype.getSkinName = function() {
  var skin =
    "tornado/" +
    "tornado" +
    this.curBiome
if (this.curBiome == 4) {
  skin =
    "tornado/" +
    "tornado3"
}


  if (this.curBiome == 7 || this.curBiome == 6 || this.curBiome == 1) {
  skin =
    "tornado/" +
    "tornado1"
}
  
  if (this.curBiome != 1 && this.curBiome != 2 && this.curBiome != 3 && this.curBiome != 4 && this.curBiome != 5  && this.curBiome != 6 && this.curBiome != 7) {
  skin =
    "tornado/" +
    "tornado0"
}

    if (this.flag_inJungle) {
  skin =
    "tornado/" +
    "tornado5"
}

  
  return skin;
};

function Tornado() {
  Tornado.superClass.call(this, o_animal);
}
window.Tornado = Tornado;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Tornado, o_animal, a_tornado);


var Hippo = Hippo;
var superClass = Animal;
Hippo.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Hippo.prototype.constructor = Hippo;
Hippo.superClass = superClass; //'class' var

Hippo.prototype.getSkinName = function() {
  var skin =
    "hippo/" +
    this.animalSpecies +
    "/hippo" +
    (this.specType == 0 ? "" : this.specType);


  return skin;
};

function Hippo() {
  Hippo.superClass.call(this, o_animal);
}
window.Hippo = Hippo;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Hippo, o_animal, a_hippo);



var Penguin = Penguin;
var superClass = Animal;
Penguin.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Penguin.prototype.constructor = Penguin;
Penguin.superClass = superClass; //'class' var


Penguin.prototype.animalInfo = function() {
  var infoO = {};

  var extras = "";
  switch (this.animalSpecies) {
    case 0:
      infoO.aniName = "Emperor Penguin";
      break;
    case 1:
      infoO.aniName = "Emperor Ice Penguin";
      extras = "(Freeze your opponent and spawn ice EVERYWHERE!)";
      break;
          case 2:
      infoO.aniName = "Emperor Lava Penguin";
      extras = "(Use a firey dash that scorches animals alive, spawn lava pools on your wake.)";
      break;
      
                case 2:
      infoO.aniName = "Emperor Lava Penguin";
      extras = "(Use a firey dash that scorches animals alive, spawn lava pools on your wake.)";
      break;

                      case 3:
      infoO.aniName = "Galapagos Penguin";
      extras = "(Use a firey dash that scorches animals alive, spawn lava pools on your wake.)";
      break;
      
  }
  infoO.aniCol = "#FFFFFF";
  if (this.animalSpecies != 3) {
  infoO.upgradeText =
        "UPGRADED to " +
        infoO.aniName +
        "! Press W to slide and knock opponents! \n" + 
    extras;
  } else {
      infoO.upgradeText = "UPGRADED to " + infoO.aniName +"!\n Left-click to run! \n (HOLD W to slide FAST on ice)!"
  }
  infoO.skinName =
    "arctic/penguin/" +
    this.animalSpecies +
    "/penguin" +
    (this.flag_usingAbility == 0 ? "" : 2);
  return infoO;
};

Penguin.prototype.getSkinName = function() {
  var skin =
    "arctic/penguin/" +
    this.animalSpecies +
    "/penguin" +
    (this.flag_usingAbility == 0 ? "" : 2);


  return skin;
};

function Penguin() {
  Penguin.superClass.call(this, o_animal);
}
window.Penguin = Penguin;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Penguin, o_animal, a_penguin);


var Wolf = Wolf;
var superClass = Animal;
Wolf.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Wolf.prototype.constructor = Wolf;
Wolf.superClass = superClass; //'class' var

Wolf.prototype.animalInfo = function() {
  var infoO = {};

  var extras = "";
  switch (this.animalSpecies) {
    case 0:
      infoO.aniName = "Wolf";
      break;
    case 1:
      infoO.aniName = "Coyote";
      extras = "/n(Can live on land & stuns instead of freeze!)";
      break;
          case 2:
      infoO.aniName = "Black Wolf";
      extras = "";
      break;
  }
  infoO.aniCol = "#5b400d";
  infoO.upgradeText =
  "UPGRADED to " + infoO.aniName + "!\n Wolf paws turn very well on ice!\n Press W to howl" +
    extras;

  infoO.skinName =
    "arctic/wolf/" +
    this.animalSpecies
  return infoO;
};

Wolf.prototype.getSkinName = function() {
  var skin =
    "arctic/wolf/" +
    this.animalSpecies


  return skin;
};

function Wolf() {
  Wolf.superClass.call(this, o_animal);
}
window.Wolf = Wolf;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Wolf, o_animal, a_wolf);



var MiniBD = MiniBD;
var superClass = Animal;
MiniBD.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
MiniBD.prototype.constructor = MiniBD;
MiniBD.superClass = superClass; //'class' var

MiniBD.prototype.getSkinName = function() {

if (this.animalSpecies == 1) {
    var skin = "cursedbd"
} else {
    var skin = "blackdragonmini"
}


  return skin;
};

MiniBD.prototype.drawWhenUnderwater = function () {
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0
    var period = 1.5;
    var shiftAm = 1.0;
    var moveA = shiftAm * Math.sin((2.0 * Math.PI) / period * tSinceSpawn);


    var diveColor =  "#f9d43b";
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = diveColor;
    var bubRad = (this.flag_underWater) ? this.rad * 0.15 : this.rad * 0.1;
    ctx.beginPath(); //top left, right
    ctx.arc(this.rad * -0.35, this.rad * -0.33, Math.max(0, bubRad + moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.rad * 0.35, this.rad * -0.32, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath(); //bottom 2
    ctx.arc(this.rad * 0.35, this.rad * 0.36, Math.max(0, bubRad + moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.rad * -0.35, this.rad * 0.35, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();
   
}

function MiniBD() {
  MiniBD.superClass.call(this, o_animal);
}
window.MiniBD = MiniBD;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(MiniBD, o_animal, a_minibd);

var EasterBunny = EasterBunny;
var superClass = Animal;
EasterBunny.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
EasterBunny.prototype.constructor = EasterBunny;
EasterBunny.superClass = superClass; //'class' var

EasterBunny.prototype.drawUnderSkinImg = function() {
  if (!this.flag_flying || this.flag_isGrabbed) return;

  var rad = this.rad - this.outlineW;
  var iScale = 500 / 340.0;
  var tongue = getLoadedImg("skins/easterrabbit/leg0.png");

  var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
  var frame = options_lowGraphics ? 0 : getAnimFrame(tSinceSpawn, -1, 6, -1);
  var yOffset = options_lowGraphics ? 0 : 0;
  if (tongue) {
    ctx.drawImage(
      tongue,
      -rad * iScale,
      -(rad + yOffset + frame) * iScale,
      2 * rad * iScale,
      2 * rad * iScale
    );
  }



rad = this.rad - this.outlineW;
  iScale = 500 / 340.0;
  tongue = getLoadedImg("skins/easterrabbit/leg1.png");

  var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
  var frame = options_lowGraphics ? 0 : getAnimFrame(tSinceSpawn, -1, 6, -1);
  var yOffset = options_lowGraphics ? 0 : 0;
  if (tongue) {
    ctx.drawImage(
      tongue,
      -rad * iScale,
      -(rad + yOffset - frame) * iScale,
      2 * rad * iScale,
      2 * rad * iScale
    );
  }
	
};
function EasterBunny() {
  EasterBunny.superClass.call(this, o_animal);
}
window.EasterBunny = EasterBunny;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(EasterBunny, o_animal, a_easterbunny);

var Sheep = Sheep;
var superClass = Animal;
Sheep.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Sheep.prototype.constructor = Sheep;
Sheep.superClass = superClass; //'class' var

Sheep.prototype.getSkinName = function() {
if (this.flag_flying && !this.flag_isGrabbed) {
  var skin =
    "sheep/" +
    this.animalSpecies +
    "/sheep2" +
    (this.specType == 0 ? "" : this.specType);
} else {
    var skin =
    "sheep/" +
    this.animalSpecies +
    "/sheep" +
    (this.specType == 0 ? "" : this.specType);
}


  return skin;
};

function Sheep() {
  Sheep.superClass.call(this, o_animal);
}
window.Sheep = Sheep;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Sheep, o_animal, a_sheep);



var Donkey = Donkey;
var superClass = Animal;
Donkey.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Donkey.prototype.constructor = Donkey;
Donkey.superClass = superClass; //'class' var

Donkey.prototype.getSkinName = function() {
  var skin =
    "donkey/" +
    this.animalSpecies +
    "/donkey" +
    (this.specType == 0 ? "" : this.specType);


  return skin;
};

function Donkey() {
  Donkey.superClass.call(this, o_animal);
}
window.Donkey = Donkey;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Donkey, o_animal, a_donkey);


var Kraken = Kraken;
var superClass = Animal;
Kraken.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Kraken.prototype.constructor = Kraken;
Kraken.superClass = superClass; //'class' var

 
 Kraken.prototype.animalInfo = function() {
  var infoO = {};

  var extras = "";
  switch (this.animalSpecies) {
    case 0:
      infoO.aniName = "Kraken";
      break;
          case 1:
      infoO.aniName = "Kraken";
      break;
    case 2:
      infoO.aniName = "Chromatic Kraken";
            extras = "\n(Made in 2080!)";
      break;
          case 3:
      infoO.aniName = "Golden Kraken";
      extras = "\n(Golden!)";
      break;
                case 4:
      infoO.aniName = "Nightmare Kraken";
      extras = "\nThe dreams of 𝕲𝖗𝖔𝖓𝖌𝖚𝖑𝖚𝖘)";
      break;
                      case 5:
      infoO.aniName = "𝕲𝖗𝖔𝖓𝖌𝖚𝖑𝖚𝖘, 𝕰𝖆𝖙𝖊𝖗 𝕺𝖋 𝖂𝖔𝖗𝖑𝖉𝖘";
      extras = "";
      break; 
       
  }
  infoO.aniCol = "#5b400d";
   if (this.animalSpecies == 4) {
  infoO.upgradeText =
        "\u0627\u0644\u0622\u0646 \u0623\u0635\u0628\u062D\u062A \u062C\u0631\u0648\u0646\u062C\u060C \u0622\u0643\u0644 \u0627\u0644\u0639\u0648\u0627\u0644\u0645.\n\n\u062C\u0631\u0648\u0646\u062C \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u062F\u0645 \u0628\u0623\u0643\u0645\u0644\u0647. \u0625\u0646\u0647\u0627 \u0645\u0644\u0643\u0643."+
    extras;
   } else {
       infoO.upgradeText =
        "UPGRADED to THE KRAKEN!\n Terrorize the oceans, and be feared by all!\n (Release W to use whirlpool ability!)"+
    extras;
   }
  infoO.skinName =
    "kraken/" +
    this.animalSpecies +
    "/kraken" +
    (this.specType == 0 ? "" : this.specType);
  return infoO;
};


Kraken.prototype.getSkinName = function() {
  var skin =
    "kraken/" +
    this.animalSpecies +
    "/kraken" +
    (this.specType == 0 ? "" : this.specType);


  return skin;
};

function Kraken() {
  Kraken.superClass.call(this, o_animal);
}
window.Kraken = Kraken;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Kraken, o_animal, a_kraken);


var superClass = GameObj;
KrakenSpec.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
KrakenSpec.prototype.constructor = KrakenSpec;
KrakenSpec.superClass = superClass; //'class' var


KrakenSpec.prototype.updateZ = function () {
    this.z = -101;
}


//override draw (things like other effects are drawn seperately)
KrakenSpec.prototype.customDraw = function (batchDrawOutline) {
   ctx.save();
        var oldA = ctx.globalAlpha;
        ctx.globalAlpha = 0.5 * oldA;
        var rad = Math.max(0, this.rad - 30);

        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 2.2;
        var xShift = 6.5 * Math.cos(((2.0 * Math.PI) / period) * tSinceSpawn);
        var yShift = 6.5 * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);


        ctx.globalAlpha = 0.4 * oldA;
     
        drawCircle(0, 0, rad, "#2CAAC4");

        ctx.globalAlpha = 0.7 * oldA;
        if (!options_lowGraphics) {
   
drawCircle( 0 + xShift / 2 - this.rPer, 0 + yShift / 2 - this.rPer,Math.max(0, rad - 6),
           "#2D93B0"
   
          );
        
        drawCircle(
          0 + xShift / 4.5 + this.rPer,
          1 + yShift / 1.5,
          Math.max(0, rad - 14),
         
         "#29A0BA",
        
        );

        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, rad - 38.5 + yShift / 5),
          
           "#2B8CAA"
         
        );
        drawCircle(
          0 + xShift / 1.5 - this.rPer * 2,
          yShift,
          Math.max(0, rad - 54.5 + yShift / 11),
         "#28829E"
          
          
        );
}

        ctx.restore();
}



function KrakenSpec() {
    KrakenSpec.superClass.call(this, o_spiderWeb);

    this.webTransparency = 0;

    //set vars for this class
    this.doesDrawEffectScale = true;
    this.drawEffectScale_Slow = true;

}
window.KrakenSpec = KrakenSpec;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(KrakenSpec, ability_krakenSpec);




var Yeti = Yeti;
var superClass = Animal;
Yeti.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Yeti.prototype.constructor = Yeti;
Yeti.prototype.isTransforming = true
Yeti.superClass = superClass; //'class' var


Yeti.prototype.getSkinName = function() {
  var skin =
    "arctic/yeti/" +
    this.animalSpecies +
    "/yeti" +
    (this.specType == 0 ? "" : this.specType);


  return skin;
};

Yeti.prototype.animalInfo = function () {
    var _0x1958a5 = {};
    switch (this.animalSpecies) {
    case 0:
        _0x1958a5.aniName = 'The Yeti!';
        break;
    case 1:
        _0x1958a5.aniName = 'Golden Yeti!';
        break;
    case 2:
        _0x1958a5.aniName = 'Emerald Yeti!';
        break;
    case 3:
        _0x1958a5.aniName = 'Aqua Yeti';
    }
    _0x1958a5.skinName = 'arctic/yeti/' + this.animalSpecies + '/yeti';
    _0x1958a5.aniDesc = '';
    _0x1958a5.upgradeText = 'UPGRADED to ' + _0x1958a5.aniName + `!\n
 So it really exists... \n
 Hold W to turn into snow, release W to freeeeeze!`;
    _0x1958a5.aniCol = '#839eb5';
    return _0x1958a5;
};
Yeti.prototype.biteStart = 0;
Yeti.prototype.flapAmount = 3;
Yeti.prototype.flapDur = 1.5;
Yeti.prototype.roarStartT = -500;
Yeti.prototype.drawSkinCustomization = function () {
    if (this.flag_usingAbility && this.isTransforming) {
        if (this.isTransforming) {
            ctx.save();
            ctx.globalAlpha = 1;
            var _0x2760d8 = getLoadedImg('img/snowball.png');
            if (_0x2760d8) {
                var _0x52f2a5 = this.rad;
              Yeti.prototype.flapAmount = 3 * _0x52f2a5 / 40;
                ctx.rotate(this.rPer * Math.PI * 2);
                ctx.drawImage(_0x2760d8, -_0x52f2a5, -_0x52f2a5, 2 * _0x52f2a5, 2 * _0x52f2a5);
            } else this.drawOutlinedCircle('', 'white');
            ctx.restore();
        }
    } else if (4 != this.animalSpecies)
        if (this.flag_usingAbility) {
            if (0 == this.biteStart && (this.biteStart = timestamp + this.roarStartT), 0 != this.specType && void 0 != this.specType) {
                var _0x2760d8 = getLoadedImg('skins/arctic/yeti/' + this.animalSpecies + '/yeti_head1.png'),
                    _0x52f2a5 = (timestamp - this.biteStart) / 1000,
                    _0x4c3138 = 1.07 * this.skinScale;
                if (_0x2760d8) {
                    var _0x585de4;
                    _0x585de4 = this.flapAmount - (1 == this.animalSpecies ? 0.5 : 0);
                    _0x585de4 = options_lowGraphics ? this.flapAmount : getAnimFrame(_0x52f2a5, this.flapDur, _0x585de4, 2);
                    ctx.save();
                    _0x52f2a5 = this.rad;
                    ctx.drawImage(_0x2760d8, -_0x52f2a5 * _0x4c3138, (-_0x52f2a5 + 0.1 * _0x52f2a5) * _0x4c3138 - _0x585de4, 2 * _0x52f2a5 * _0x4c3138, 2 * _0x52f2a5 * _0x4c3138);
                    ctx.restore();
                }
            }
        } else this.biteStart = 0;
};

Yeti.prototype.readCustomData_onUpdate = function (_0x441063) {
    Yeti.superClass.prototype.readCustomData_onUpdate.call(this, _0x441063);
    this.isTransforming = 1 == _0x441063.readUInt8();
};
Yeti.prototype.readCustomData_onNewlyVisible = function (_0x36c899) {
    Yeti.superClass.prototype.readCustomData_onNewlyVisible.call(this, _0x36c899);
    this.isTransforming = 1 == _0x36c899.readUInt8();
};
function Yeti() {
  Yeti.superClass.call(this, o_animal);
}
window.Yeti = Yeti;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Yeti, o_animal, a_yeti);



var Kingcrab = Kingcrab;
var superClass = Animal;
Kingcrab.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Kingcrab.prototype.constructor = Kingcrab;
Kingcrab.superClass = superClass; //'class' var


Kingcrab.prototype.getSkinName = function() {
  var skin =
    "kingcrab" +
  
    (this.specType == 0 ? "" : this.specType);


  return skin;
};

function Kingcrab() {
  Kingcrab.superClass.call(this, o_animal);
}
window.Kingcrab = Kingcrab;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Kingcrab, o_animal, a_kingCrab);

///////
// file: js_src/gameobj/animal/Honeybee.js
///////

var Honeybee = Honeybee;
var superClass = Animal;
Honeybee.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Honeybee.prototype.constructor = Honeybee;
Honeybee.superClass = superClass; //'class' var

//example of custom Z
/*Pelican.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name
Honeybee.prototype.getSkinName = function() {
  return (
    "/honeybee/honeybee" +
    (this.specType == 0 || this.specType == undefined ? "" : this.specType)
  );
};

Honeybee.prototype.drawSkinCustomization = function() {
  ctx.save();

  var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
  var frame = !options_lowGraphics ? getAnimFrame(tSinceSpawn, 0.2, 0.3, 2) : 0;
  var frame2 = !options_lowGraphics
    ? getAnimFrame(tSinceSpawn, 0.2, 0.3, 2)
    : 0;

  var rad = this.rad * 0.6;
  var rotAng = 30;
  var rotFrame = 2;
  var fixedAng = 20;

  var theImg = getLoadedImg("skins/honeybee/honeybee_wing2.png");
  if (theImg) {
    ctx.save();
    //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

    //console.log("getAnimFrame:" + frame);
    var extraRotate = -(-rotFrame + frame2) * toRadians(-(rotAng - 5)); //spin animation

    //clip to sliwly show the claw
    ctx.globalAlpha = 0.6;
    ctx.rotate(toRadians(-fixedAng + 10) + extraRotate);
    var imX = 0,
      imY = this.rad;
    var imW = rad * 2.0 * 0.7,
      imH = rad * 2.3; // * fac0to1;
    var imAnchorX = 0.5,
      imAnchorY = 1.6; //top-left= 0,0, bottom-right=1,1 (canvas coords)

    ctx.drawImage(
      theImg,
      imX + imW * -imAnchorX,
      imY + imH * -imAnchorY,
      imW,
      imH
    );

    ctx.restore();
  }

  var theImg = getLoadedImg("skins/honeybee/honeybee_wing1.png");
  if (theImg) {
    ctx.save();
    //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

    //console.log("getAnimFrame:" + frame);
    var extraRotate = -(-rotFrame + frame2) * toRadians(rotAng - 5); //spin animation

    //clip to sliwly show the claw
    ctx.globalAlpha = 0.6;
    ctx.rotate(toRadians(fixedAng - 10) + extraRotate);
    var imX = 0,
      imY = this.rad;
    var imW = rad * 2.3 * 0.7,
      imH = rad * 2.3; // * fac0to1;
    var imAnchorX = 0.5,
      imAnchorY = 1.6; //top-left= 0,0, bottom-right=1,1 (canvas coords)

    ctx.drawImage(
      theImg,
      imX + imW * -imAnchorX,
      imY + imH * -imAnchorY,
      imW,
      imH
    );

    ctx.restore();
  }
  var theImg = getLoadedImg("skins/honeybee/honeybee_wing1.png");
  if (theImg) {
    ctx.save();
    //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

    //console.log("getAnimFrame:" + frame);
    var extraRotate = -(-rotFrame + frame) * toRadians(rotAng); //spin animation

    //clip to sliwly show the claw
    ctx.globalAlpha = 0.5;
    ctx.rotate(toRadians(fixedAng) + extraRotate);
    var imX = 0,
      imY = this.rad;
    var imW = rad * 2.0 * 0.7,
      imH = rad * 2.3; // * fac0to1;
    var imAnchorX = 0.5,
      imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

    ctx.drawImage(
      theImg,
      imX + imW * -imAnchorX,
      imY + imH * -imAnchorY,
      imW,
      imH
    );

    ctx.restore();
  }

  var theImg = getLoadedImg("skins/honeybee/honeybee_wing2.png");
  if (theImg) {
    ctx.save();
    //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

    //console.log("getAnimFrame:" + frame);
    var extraRotate = -(-rotFrame + frame) * toRadians(-rotAng); //spin animation

    //clip to sliwly show the claw
    ctx.globalAlpha = 0.5;
    ctx.rotate(toRadians(-fixedAng) + extraRotate);
    var imX = 0,
      imY = this.rad;
    var imW = rad * 2.0 * 0.7,
      imH = rad * 2.3; // * fac0to1;
    var imAnchorX = 0.5,
      imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

    ctx.drawImage(
      theImg,
      imX + imW * -imAnchorX,
      imY + imH * -imAnchorY,
      imW,
      imH
    );

    ctx.restore();
  }

  ctx.restore();
};
function Honeybee() {
  Honeybee.superClass.call(this, o_animal);
}
window.Honeybee = Honeybee;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Honeybee, o_animal, a_honeyBee);


///////
// file: js_src/gameobj/animal/Phoenix.js
///////
/*
var Phoenix = Phoenix;
var superClass = Animal;
Phoenix.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Phoenix.prototype.constructor = Phoenix;
Phoenix.superClass = superClass; //'class' var


Phoenix.prototype.updateZ = function() {
  this.z = 1007;
};

//set custom skin name
Phoenix.prototype.getSkinName = function() {
  return (
    "/phoenix/phoenix" +
    (this.specType == 0 || this.specType == undefined ? "" : this.specType)
  );
};

//draw image for the animal skin (along with extra images on it, eg wings)
Phoenix.prototype.drawSkinImg = function() {
   /*
  if (!options_lowGraphics) {
    var iScale = 500 / 340.0; //scale up ps image to fit (to remove blank space)
    var rad = this.rad - this.outlineW;

    var phoenix_body = getLoadedImg("./skins/phoenix/phoenix_body.png");
    var phoenix_head = getLoadedImg("./skins/phoenix/phoenix_head.png");

    var tail_num = Math.trunc(timestamp / 166) % 6;

    var tailmid = getLoadedImg(
      "./skins/phoenix/tail_mid/tail_mid_" + tail_num + ".png"
    );
    if (tailmid)
      ctx.drawImage(
        tailmid,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );

    var tail_num = Math.trunc(timestamp / 166) % 6;
    var tail_num2 = Math.trunc(timestamp / 250) % 6;

    var tail = getLoadedImg("./skins/phoenix/tail/tail_" + tail_num + ".png");
    var tail_flipped = getLoadedImg(
      "./skins/phoenix/tail_flipped/tail_" + tail_num2 + ".png"
    );

    if (tail)
      ctx.drawImage(
        tail,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
    if (tail_flipped)
      ctx.drawImage(
        tail_flipped,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );

    if (phoenix_body)
      ctx.drawImage(
        phoenix_body,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );

    var flame_orange = Math.trunc(timestamp / 125) % 8;
    var flame_yellow = Math.trunc(timestamp / 150) % 8;
    var wing_flame_orange = getLoadedImg(
      "./skins/phoenix/wing_flame_orange/wing_flame_orange_" +
        flame_orange +
        ".png"
    );
    var wing_flame_yellow = getLoadedImg(
      "./skins/phoenix/wing_flame_yellow/wing_flame_yellow_" +
        flame_yellow +
        ".png"
    );

    if (wing_flame_orange)
      ctx.drawImage(
        wing_flame_orange,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
    if (wing_flame_yellow)
      ctx.drawImage(
        wing_flame_yellow,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );

    var wing_flame_orange1 = getLoadedImg(
      "./skins/phoenix/wing_flame_orange_flipped/wing_flame_orange_" +
        flame_orange +
        ".png"
    );
    var wing_flame_yellow1 = getLoadedImg(
      "./skins/phoenix/wing_flame_yellow_flipped/wing_flame_yellow_" +
        flame_yellow +
        ".png"
    );

    if (wing_flame_orange1)
      ctx.drawImage(
        wing_flame_orange1,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
    if (wing_flame_yellow1)
      ctx.drawImage(
        wing_flame_yellow1,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );

    if (phoenix_head)
      ctx.drawImage(
        phoenix_head,
        -rad * iScale,
        -rad * iScale,
        2 * rad * iScale,
        2 * rad * iScale
      );
  } else {
    Phoenix.superClass.prototype.drawSkinImg.call(this);
  }
  
    this.basicDrawSkinImg(); //just draw the image

    // custom animations or skin overlays
    this.drawSkinCustomization();
    
  Phoenix.superClass.prototype.drawSkinImg.call(this);
      this.basicDrawSkinImg(); //just draw the image

    // custom animations or skin overlays
    this.drawSkinCustomization();
};

Phoenix.prototype.drawWhenUnderwater = function() {
  var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
  var period = 1.5;
  var shiftAm = 1.0;
  var moveA = shiftAm * Math.sin(((2.0 * Math.PI) / period) * tSinceSpawn);

  var diveColor = "#f9d43b";
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = diveColor;
  var bubRad = this.flag_underWater ? this.rad * 0.15 : this.rad * 0.1;
  ctx.beginPath(); //top left, right
  ctx.arc(
    this.rad * -0.35,
    this.rad * -0.33,
    Math.max(0, bubRad + moveA),
    0,
    Math.PI * 2
  );
  ctx.fill();
  ctx.beginPath();
  ctx.arc(
    this.rad * 0.35,
    this.rad * -0.32,
    Math.max(0, bubRad - moveA),
    0,
    Math.PI * 2
  );
  ctx.fill();

  ctx.beginPath(); //bottom 2
  ctx.arc(
    this.rad * 0.35,
    this.rad * 0.36,
    Math.max(0, bubRad + moveA),
    0,
    Math.PI * 2
  );
  ctx.fill();
  ctx.beginPath();
  ctx.arc(
    this.rad * -0.35,
    this.rad * 0.35,
    Math.max(0, bubRad - moveA),
    0,
    Math.PI * 2
  );
  ctx.fill();
};
function Phoenix() {
  Phoenix.superClass.call(this, o_animal);
}
window.Phoenix = Phoenix;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Phoenix, o_animal, a_phoenix);
*/
// monster update


///////
// file: js_src/gameobj/animal/SeaMonster.js
///////

var SeaMonster = SeaMonster;
var superClass = Animal;
SeaMonster.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
SeaMonster.prototype.constructor = SeaMonster;
SeaMonster.superClass = superClass; //'class' var

//set custom skin name
SeaMonster.prototype.getSkinName = function () {
    return "monsters/seamonster";
}


SeaMonster.prototype.drawWhenUnderwater = function () {
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0
    var period = 1.5;
    var shiftAm = 1.0;
    var moveA = shiftAm * Math.sin((2.0 * Math.PI) / period * tSinceSpawn);

    var diveColor =  "white";
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = diveColor;
    var bubRad = (this.flag_underWater) ? this.rad * 0.15 : this.rad * 0.1;
    ctx.beginPath(); //top left, right
    ctx.arc(this.rad * -0.35, this.rad * -0.33, Math.max(0, bubRad + moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.rad * 0.35, this.rad * -0.32, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath(); //bottom 2
    ctx.arc(this.rad * 0.35, this.rad * 0.36, Math.max(0, bubRad + moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.rad * -0.35, this.rad * 0.35, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();


    var diveImg = getLoadedImg("img/seamonster-dive.png");
    if (diveImg) {
        var iScale = 500 / 340.0;

        ctx.save();
        ctx.globalAlpha = 0.4;
        var rad = this.rad;
        ctx.drawImage(diveImg, -rad * iScale, (-rad + rad * 0.4) * iScale, 2 * rad * iScale, 2 * rad * iScale);

        ctx.restore();
    }
   
}
function SeaMonster() {
    SeaMonster.superClass.call(this, o_animal);

}
window.SeaMonster = SeaMonster;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(SeaMonster, o_animal, a_seaMonster);




var lochness = lochness;
var superClass = Animal;
lochness.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
lochness.prototype.constructor = lochness;
lochness.superClass = superClass; //'class' var

//set custom skin name
lochness.prototype.getSkinName = function () {
    return "lochness/lochness";
}


lochness.prototype.drawWhenUnderwater = function () {
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0
    var period = 1.5;
    var shiftAm = 1.0;
    var moveA = shiftAm * Math.sin((2.0 * Math.PI) / period * tSinceSpawn);

    var diveColor =  "#2762FF";
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = diveColor;
    var bubRad = (this.flag_underWater) ? this.rad * 0.15 : this.rad * 0.1;
    ctx.beginPath(); //top left, right
    ctx.arc(this.rad * -0.35, this.rad * -0.33, Math.max(0, bubRad + moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.rad * 0.35, this.rad * -0.32, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath(); //bottom 2
    ctx.arc(this.rad * 0.35, this.rad * 0.36, Math.max(0, bubRad + moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.rad * -0.35, this.rad * 0.35, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();


    var diveImg = getLoadedImg("skins/lochness/lochness-dive.png");
    if (diveImg) {
        var iScale = 500 / 340.0;

        ctx.save();
        ctx.globalAlpha = 0.4;
        var rad = this.rad;
        ctx.drawImage(diveImg, -rad * iScale, (-rad + rad * 0.4) * iScale, 2 * rad * iScale, 2 * rad * iScale);

        ctx.restore();
    }
   
}
function lochness() {
    lochness.superClass.call(this, o_animal);

}
window.lochness = lochness;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(lochness, o_animal, a_lochness);

///////
// file: js_src/gameobj/animal/LandMonster.js
///////

var LandMonster = LandMonster;
var superClass = Animal;
LandMonster.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
LandMonster.prototype.constructor = LandMonster;
LandMonster.superClass = superClass; //'class' var

//set custom skin name
LandMonster.prototype.getSkinName = function () {
if (this.flag_flying && !this.flag_isGrabbed&& this.flag_usingAbility) {
         skin ="monsters/landmonster/" + this.animalSpecies + "/flying_landmonster"
 } else {
        skin ="monsters/landmonster/" + this.animalSpecies + "/landmonster"
   }
    
    return skin
}


LandMonster.prototype.drawWhenUnderwater = function () {
    var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0
    var period = 1.5;
    var shiftAm = 1.0;
    var moveA = shiftAm * Math.sin((2.0 * Math.PI) / period * tSinceSpawn);


    var diveColor =  "#f9d43b";
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = diveColor;
    var bubRad = (this.flag_underWater) ? this.rad * 0.15 : this.rad * 0.1;
    ctx.beginPath(); //top left, right
    ctx.arc(this.rad * -0.35, this.rad * -0.33, Math.max(0, bubRad + moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.rad * 0.35, this.rad * -0.32, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath(); //bottom 2
    ctx.arc(this.rad * 0.35, this.rad * 0.36, Math.max(0, bubRad + moveA), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.rad * -0.35, this.rad * 0.35, Math.max(0, bubRad - moveA), 0, Math.PI * 2);
    ctx.fill();
   
}
LandMonster.prototype.drawSkinCustomization = function() {
if (this.flag_flying && !this.flag_isGrabbed&& this.flag_usingAbility) {
       ctx.save();
   var iScale = 500 / 340.0;
      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame =  getAnimFrame(tSinceSpawn,2.1, .4, 1.5);
      var frame2 = getAnimFrame(tSinceSpawn, 2.1, -8, 1.5);
      var trueG = getAnimFrame(tSinceSpawn, 2.1, .4, 1.5);
          var trueF = getAnimFrame(tSinceSpawn, 2.1, .3, 1.5);
              var trueS = this.rad * 0.6
      var theImg = getLoadedImg(
   "skins/monsters/landmonster/" + this.animalSpecies + "/wing_r1.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.3 + frame) * toRadians(80.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad 
        ctx.rotate(extraRotate);
        var imX = 0,
          imY = this.rad;
          var imW = 1.6 * trueS
         imH = 2 * trueS + 5 ;
        var imAnchorX = 1.6 * trueS,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          0 + 0.65 * imAnchorX,
          imY + imH * -(1.75 - (trueG + trueG / 4 - trueF)),
          imW,
          imH
        );

        ctx.restore();
      }

      var theImg = getLoadedImg(
       "skins/monsters/landmonster/" + this.animalSpecies + "/wing_l1.png"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.3 + frame) * toRadians(-80.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad
        ctx.rotate(extraRotate);
        var imX = 0,
          imY = this.rad;
       var imW = 1.6 * trueS
          imH = 2 * trueS + 5 
        var imAnchorX = 1.6 * trueS,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          0 + -1.65 * imAnchorX,
          imY + imH * -(1.75 - (trueG + trueG / 4) + trueF),
        imW,
          imH
        );

        ctx.restore();
      }

      ctx.restore();

  }
      
   
  };
function LandMonster() {
    LandMonster.superClass.call(this, o_animal);

}
window.LandMonster = LandMonster;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(LandMonster, o_animal, a_landMonster);


///////
// file: js_src/gameobj/SinkHole.js
///////


var superClass = GameObj;
SinkHole.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
SinkHole.prototype.constructor = SinkHole;
SinkHole.superClass = superClass; //'class' var


SinkHole.prototype.updateZ = function () {
    this.z = -101;
}


//override draw (things like other effects are drawn seperately)
SinkHole.prototype.customDraw = function (batchDrawOutline) {
    ctx.save();
     this.curBiome = this.specType
  console.log(this.curBiome )
    if (this.curBiome == 0||this.curBiome == 2) {
        this.drawOutlinedCircle("", "#9F8641");
        //drawCircle(0, 0, this.rad, "#9F8641");

        //drawCircle(0 + this.rPer, 1, Math.max(0, this.rad * 0.9), "black");
        //ctx.globalAlpha = 0.6;
        drawCircle(0 + this.rPer, 1, Math.max(0, this.rad * 0.9), "#5C4E28");
        ctx.globalAlpha = 0.7;
        drawCircle(0 - this.rPer, 1, Math.max(0, this.rad * 0.75), "#40371D");
        ctx.globalAlpha = 0.9;
        drawCircle(0 - this.rPer, 1, Math.max(0, this.rad * 0.6), "#40371D");
        ctx.globalAlpha = 0.5;
       
    }

    else if(this.curBiome == 1){
        
        var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 1.2;
        var xShift = 2.5 * Math.cos((2.0 * Math.PI) / period * (tSinceSpawn));
        var yShift = 2.5 * Math.sin((2.0 * Math.PI) / period * (tSinceSpawn));


        this.drawOutlinedCircle("", "#2CAAC4");

        drawCircle(0 + xShift / 4.5 + this.rPer, 1 + yShift / 1.5, Math.max(0, this.rad - 14), "#29A0BA");
        drawCircle(0 + xShift / 1.5 - this.rPer * 2, yShift, Math.max(0, this.rad - 18.5 + yShift / 5), "#2B8CAA");
        drawCircle(0 + xShift / 1.5 - this.rPer * 2, yShift, Math.max(0, this.rad - 24.5 + yShift / 11), "#28829E");
        /*
        this.drawOutlinedCircle("", "#9F8641");
        //drawCircle(0, 0, this.rad, "#9F8641");

       
            drawCircle(0 - this.rPer, 0 - this.rPer, Math.max(0, this.rad - 7), "#7E6A35");
       

        drawCircle(0 + this.rPer, 1, Math.max(0, this.rad - 14), "#5C4E28");

        drawCircle(0 - this.rPer * 2 - 3, 1, Math.max(0, this.rad - 18.5), "#40371D");*/
    }else if(this.curBiome == 3){
 var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
        var period = 1.2;
        var xShift = 2.5 * Math.cos((2.0 * Math.PI) / period * (tSinceSpawn));
        var yShift = 2.5 * Math.sin((2.0 * Math.PI) / period * (tSinceSpawn));


        this.drawOutlinedCircle("", "#FF6704");

        drawCircle(0 + xShift / 4.5 + this.rPer, 1 + yShift / 1.5, Math.max(0, this.rad - 14), "#FF4900");
        drawCircle(0 + xShift / 1.5 - this.rPer * 2, yShift, Math.max(0, this.rad - 18.5 + yShift / 5), "#E94300");
        drawCircle(0 + xShift / 1.5 - this.rPer * 2, yShift, Math.max(0, this.rad - 24.5 + yShift / 11), "#E93500");
    }
    ctx.restore();
}



function SinkHole() {
    SinkHole.superClass.call(this, o_spiderWeb);

    this.webTransparency = 0;

    //set vars for this class
    this.doesDrawEffectScale = true;
    this.drawEffectScale_Slow = true;

}
window.SinkHole = SinkHole;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(SinkHole, o_sinkHole);
// birds update 2


///////
// file: js_src/gameobj/animal/Pigeon.js
///////

var Pigeon = Pigeon;
var superClass = Animal;
Pigeon.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Pigeon.prototype.constructor = Pigeon;
Pigeon.superClass = superClass; //'class' var

////example of custom Z
//Pigeon.prototype.updateZ = function () {
//    this.z = 1000 + this.rad;
//    //if (this.flag_flying || this.flag_climbingHill)
//    //    this.z = 1000 + this.rad;
//}

Pigeon.prototype.animalInfo = function() {
  var infoO = {};

  switch (this.animalSpecies) {
    case 0:
      infoO.aniName = "Pigeon";
      break;
    case 1:
      infoO.aniName = "Rare White Dove";
      infoO.upgradeText += "\n(Doves fly faster!)";
      break;
  }
  infoO.aniCol = "#FF9000";
  infoO.skinName = "pigeon/" + this.animalSpecies + "/pigeon";
  infoO.upgradeText =
    "UPGRADED to " + infoO.aniName + "!\nHold W to fly around. ";
  return infoO;
};

//set custom skin name
Pigeon.prototype.getSkinName = function() {
  var skin = "pigeon/" + this.animalSpecies + "/pigeon";
  //if (!options_lowGraphics)
  skin += this.specType == 0 ? "" : this.specType;
    if (this.flag_flying && !this.flag_isGrabbed) {
    var skin = "pigeon/" + this.animalSpecies + "/pigeon1";
  //if (!options_lowGraphics)
  skin += this.specType == 0 ? "" : this.specType;
};
  return skin;
};

Pigeon.prototype.drawSkinCustomization = function() {
//  if (!this.flag_usingAbility) return;

  var skins = "skins";
   
  //if (!options_lowGraphics)
  {
    var iScale = 500 / 340.0;

    if (this.flag_flying && !this.flag_isGrabbed) {
      ctx.save();

      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame = !options_lowGraphics
        ? getAnimFrame(tSinceSpawn, 0.5, 0.3, 2)
        : this.birdNoAnimationFlyWingAngle;
      var theImg = getLoadedImg(
        skins + "/pigeon/" + this.animalSpecies + "/pigeon_wing1.png?a=1"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(90.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(45) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.62,
          imH = rad * 2.5; // * fac0to1;
        var imAnchorX = 0.2,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      var theImg = getLoadedImg(
        skins + "/pigeon/" + this.animalSpecies + "/pigeon_wing2.png?a=1"
      );
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(-90.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(-45) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.62,
          imH = rad * 2.5; // * fac0to1;
        var imAnchorX = 0.8,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      ctx.restore();
    }

    //console.log(this.specType)
    if (this.flag_flying && !this.flag_isGrabbed) {
      var theHead = getLoadedImg(
        skins + "/pigeon/" + this.animalSpecies + "/pigeon_head.png"
      );
      if (theHead) {
        ctx.save();
        var rad = this.rad;
        ctx.drawImage(
          theHead,
          -rad * iScale,
          (-rad + rad * 0.1) * iScale,
          2 * rad * iScale,
          2 * rad * iScale
        );
        ctx.restore();
      }
    }
  }
};

function Pigeon() {
  Pigeon.superClass.call(this, o_animal);
}
window.Pigeon = Pigeon;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Pigeon, o_animal, a_pigeon);


///////
// file: js_src/gameobj/animal/Toucan.js
///////

var Toucan = Toucan;
var superClass = Animal;
Toucan.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Toucan.prototype.constructor = Toucan;
Toucan.superClass = superClass; //'class' var

Toucan.prototype.animalInfo = function() {
  var infoO = {};
  /*
    switch (this.animalSpecies) {
        case 0:
            infoO.aniName = "Toco Toucan";
            break;
        case 1:
            infoO.aniName = "Choco Toucan";
            break;
        case 2:
            infoO.aniName = "Keel-Billed Toucan";
            break;
        case 3:
            infoO.aniName = "Fiery-Billed Toucan";
            break;
    }
    */

  if (this.animalSpecies == 4) infoO.aniName = "rare Lava Toucan";
  else infoO.aniName = "Toucan";

  infoO.upgradeText =
    "UPGRADED to " +
    infoO.aniName +
    "!\nHold right click (or W) to fly!\n(HINT: Start flying from a fruit tree or bush to throw fruit upon landing!)";
  infoO.aniCol = "#FF9000";
  infoO.skinName = "toucan/" + this.animalSpecies + "/toucan";
  return infoO;
};

////example of custom Z
//Toucan.prototype.updateZ = function () {
//    this.z = 1000 + this.rad;
//    //if (this.flag_flying || this.flag_climbingHill)
//    //    this.z = 10001 + this.rad;
//}

//set custom skin name
Toucan.prototype.getSkinName = function() {
  var skin =
    "toucan/" +
    this.animalSpecies +
    "/toucan" +
    (this.specType == 0 ? "" : this.specType);

if (this.flag_flying && !this.flag_isGrabbed) {

      var skin =
    "toucan/" +
    this.animalSpecies +
    "/toucan1" +
    (this.specType == 0 ? "" : this.specType);
}

  return skin;
};

Toucan.prototype.drawSkinCustomization = function() {
 // if (!this.flag_usingAbility) return;

  var iScale = 500 / 340.0;
  {
    if (this.flag_flying && !this.flag_isGrabbed) {
      ctx.save();





      var wings = this.animalSpecies == 5 ? "skins/toucan/5/" : "skins/toucan/";
      if (this.animalSpecies == 5) {
            var head = this.animalSpecies == 5 ? "skins/toucan/5/" : "skins/toucan/";
      }
            if (this.animalSpecies == 4) {
            var head = this.animalSpecies == 4 ? "skins/toucan/4/" : "skins/toucan/";
      }
            if (this.animalSpecies == 3) {
            var head = this.animalSpecies == 3 ? "skins/toucan/3/" : "skins/toucan/";
      }
            if (this.animalSpecies == 2) {
            var head = this.animalSpecies == 2 ? "skins/toucan/2/" : "skins/toucan/";
      }
            if (this.animalSpecies == 1) {
            var head = this.animalSpecies == 1 ? "skins/toucan/1/" : "skins/toucan/";
      }
            if (this.animalSpecies == 0) {
            var head = this.animalSpecies == 0 ? "skins/toucan/0/" : "skins/toucan/";
      }
      
      var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
      var frame = !options_lowGraphics
        ? getAnimFrame(tSinceSpawn, 0.5, 0.3, 2)
        : this.birdNoAnimationFlyWingAngle;
      var theImg = getLoadedImg(wings + "toucan_wing1.png");
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(80.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(45) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.62,
          imH = rad * 2.5; // * fac0to1;
        var imAnchorX = 0.2,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }
      
      
      var theHead = getLoadedImg(head + "toucan_head.png?a=1"); //HEAD
      if (theHead) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(-90.0); //spin animation

        //clip to sliwly show the claw

        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.62,
          imH = rad * 2.5; // * fac0to1;
        var imAnchorX = 0.8,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        var rad = this.rad;
        ctx.drawImage(
          theHead,
          -rad * iScale,
          (-rad + rad * 0.1) * iScale,
          2 * rad * iScale,
          2 * rad * iScale
        );

        ctx.restore();
      }

      
      var theImg = getLoadedImg(wings + "toucan_wing2.png?a=1");
      if (theImg) {
        ctx.save();
        //var fac0to1 = Math.min(1.0, (timestamp - this.spawnTime) / 300.0);

        //console.log("getAnimFrame:" + frame);
        var extraRotate = -(-0.2 + frame) * toRadians(-80.0); //spin animation

        //clip to sliwly show the claw
        var rad = this.rad * 0.8;
        ctx.rotate(toRadians(-45) + extraRotate);
        var imX = 0,
          imY = this.rad;
        var imW = rad * 2.0 * 0.62,
          imH = rad * 2.5; // * fac0to1;
        var imAnchorX = 0.8,
          imAnchorY = 1.7; //top-left= 0,0, bottom-right=1,1 (canvas coords)

        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );

        ctx.restore();
      }

      ctx.restore();

  }
};
    }

    //console.log(this.specType)


function Toucan() {
  Toucan.superClass.call(this, o_animal);
}
window.Toucan = Toucan;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Toucan, o_animal, a_toucan);




///////
// file: js_src/gameobj/animal/Tiger.js
///////


var Tiger = Tiger;
var superClass = Animal;
Tiger.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Tiger.prototype.constructor = Tiger;
Tiger.superClass = superClass; //'class' var
Tiger.prototype.transparancy = 100;

Tiger.prototype.animalInfo = function () {
    var infoO = {};
    switch (this.animalSpecies) {
        case 0:
            infoO.aniName = "Tiger";
            break;
        case 1:
            infoO.aniName = "rare White Tiger";
            break;
   
    }
    infoO.aniName = "Tiger";
    infoO.aniDesc = "";
    infoO.upgradeText = "UPGRADED to " + infoO.aniName + "!\n Tigers can launch an ambush attack (HOLD W to grow a bush)!";
    infoO.aniCol = "#FF9000";
    infoO.skinName = "tiger/" + this.animalSpecies + "/tiger";
    return infoO;
}

//set custom skin namea
Tiger.prototype.getSkinName = function () {
    return "tiger/" + this.animalSpecies + "/tiger" + (this.specType == 0 ? "" : this.specType);
}
Tiger.prototype.readCustomData_onNewlyVisible = function (msg) {
        Tiger.superClass.prototype.readCustomData_onNewlyVisible.call(this, msg);
        this.readInfo(msg);
    };
Tiger.prototype.readCustomData_onUpdate = function (msg) {
        Tiger.superClass.prototype.readCustomData_onUpdate.call(this, msg);
        this.readInfo(msg);
    };
Tiger.prototype.readInfo = function (msg) {
      this.transparancy = msg.readUInt8();
    };
function Tiger() {
    Tiger.superClass.call(this, o_animal);

}
window.Tiger = Tiger;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Tiger, o_animal, a_tiger);


///////
// file: js_src/gameobj/animal/BoaConstrictor.js
///////

var superClass = Animal;
TitanBoa.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
TitanBoa.prototype.constructor = TitanBoa;
TitanBoa.superClass = superClass; //'class' var

//example of custom Z
/*BoaConstrictor.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name
TitanBoa.prototype.getSkinName = function() {
  return "titanboa" + (this.flag_usingAbility ? "2" : "");
};

TitanBoa.prototype.drawUnderSkinImg = function() {
  if (this.flag_usingAbility) return;

  var rad = this.rad - this.outlineW;
  var iScale = 500 / 340.0;
  var tongue = getLoadedImg("skins/boa/tongue.png");

  var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
  var frame = options_lowGraphics ? 0 : getAnimFrame(tSinceSpawn, 0.5, 3, 0.5);
  var yOffset = options_lowGraphics ? 0 : 5;
  if (tongue) {
    ctx.drawImage(
      tongue,
      -rad * iScale,
      -(rad + yOffset + frame) * iScale,
      2 * rad * iScale,
      2 * rad * iScale
    );
  }
};

function TitanBoa() {
  TitanBoa.superClass.call(this, o_animal);
}
window.TitanBoa = TitanBoa;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(
  TitanBoa,
  o_animal,
  a_titanboa
);


var superClass = Animal;
BoaConstrictor.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
BoaConstrictor.prototype.constructor = BoaConstrictor;
BoaConstrictor.superClass = superClass; //'class' var

//example of custom Z
/*BoaConstrictor.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name
BoaConstrictor.prototype.getSkinName = function() {
  return "boaConstrictor" + (this.flag_usingAbility ? "2" : "");
};

BoaConstrictor.prototype.drawUnderSkinImg = function() {
  if (this.flag_usingAbility) return;

  var rad = this.rad - this.outlineW;
  var iScale = 500 / 340.0;
  var tongue = getLoadedImg("skins/boa/tongue.png");

  var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
  var frame = options_lowGraphics ? 0 : getAnimFrame(tSinceSpawn, 0.5, 5, 0.5);
  var yOffset = options_lowGraphics ? 0 : 5;
  if (tongue) {
    ctx.drawImage(
      tongue,
      -rad * iScale,
      -(rad + yOffset + frame) * iScale,
      2 * rad * iScale,
      2 * rad * iScale
    );
  }
};

function BoaConstrictor() {
  BoaConstrictor.superClass.call(this, o_animal);
}
window.BoaConstrictor = BoaConstrictor;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(
  BoaConstrictor,
  o_animal,
  a_boaConstrictor
);


///////
// file: js_src/gameobj/animal/Cobra.js
///////

var superClass = Animal;
Cobra.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Cobra.prototype.constructor = Cobra;
Cobra.superClass = superClass; //'class' var

//example of custom Z
/*Cobra.prototype.updateZ = function() {
    this.z = 1002;
}*/

//set custom skin name
Cobra.prototype.getSkinName = function() {
  return "cobra" + (this.flag_usingAbility ? "2" : "");
};

Cobra.prototype.drawUnderSkinImg = function() {
   if(this.flag_usingAbility)
   return;
  var rad = this.rad - this.outlineW;
  var iScale = 500 / 340.0;
  var tongue = getLoadedImg("skins/boa/tongue.png");
 
  var tSinceSpawn = (timestamp - this.spawnTime) / 1000.0;
  var frame = options_lowGraphics ? 0 : getAnimFrame(tSinceSpawn, 0.5, 5, 0.5);
  var yOffset = options_lowGraphics ? 0 : 5;
  if (tongue) {
    ctx.drawImage(
        tongue,
      -rad * iScale,
      -((rad+yOffset) + frame ) * iScale,
      2 * rad * iScale,
      2 * rad * iScale
    );
  }
};

function Cobra() {
  Cobra.superClass.call(this, o_animal);
}
window.Cobra = Cobra;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(
  Cobra,
  o_animal,
  a_cobra
);
// custom objects


///////
// file: js_src/gameobj/Fire.js
///////

var Fire = Fire;
var superClass = GameObj;
Fire.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Fire.prototype.constructor = Fire;
Fire.superClass = superClass; //'class' var

Fire.prototype.updateZ = function() {
  this.z = 1005;
};
//override draw (things like other effects are drawn seperately)
Fire.prototype.customDraw = function(batchDrawOutline) {
  if (!options_lowGraphics) {
    var period = 1.0; //periodic func with time
    var p_min = 0.15,
      p_max = 0.8; //set these!
    var amp = 0.5 * (p_max - p_min);
    var flashA =
      p_min +
      amp +
      amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

    ctx.save();
    ctx.globalAlpha *= flashA;
    // drawCircle(0, 0, Math.max(0, this.rad), "#F6EA65");
    ctx.restore();

    //glow stronger/weaker like a fire
    var period = 1.0; //periodic func with time
    var p_min = 0.85,
      p_max = 1.0; //set these!
    var amp = 0.5 * (p_max - p_min);
    var moveA =
      p_min +
      amp +
      amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

    var imNum = Math.trunc(timestamp / 120) % 5;
	  if (this.specType == 32) {
this.doesDrawEffectScale = this.drawEffectScale_Slow = false
    imNum = Math.trunc(timestamp / 300) % 2;
	  }
    var theImg = getLoadedImg("img/fire/"+this.specType+"/" + imNum + ".png");
    if (theImg) {
      var imX = 0,
        imY = this.rad * 0.4;
      var imW = (this.rad * 2.0 * (2.0 + moveA * 2.0)) / 3.0,
        imH = this.rad * 2 * moveA;
      var imAnchorX = 0.5,
        imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.save();

      ctx.globalAlpha *= this.onFireEffA * moveA;
      ctx.rotate(this.angle);
      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }
  } else {
    // low graphics
    var period = 1.0; //periodic func with time
    var p_min = 0.85,
      p_max = 1.0; //set these!
    var amp = 0.5 * (p_max - p_min);
    var moveA =
      p_min +
      amp +
      amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

    var imNum = Math.trunc(timestamp / 120) % 5;
	  if (this.specType == 32) {
    imNum = Math.trunc(timestamp / 300) % 2;
	  }
    var theImg = getLoadedImg("img/fire/"+this.specType+"/0.png");
    if (theImg) {
      var imX = 0,
        imY = this.rad * 0.4;
      var imW = (this.rad * 2.0 * (2.0 + moveA * 2.0)) / 3.0,
        imH = this.rad * 2 * moveA;
      var imAnchorX = 0.5,
        imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.save();

      //ctx.globalAlpha *= this.onFireEffA * moveA;
      ctx.rotate(this.angle);
      ctx.drawImage(
        theImg,
        imX + imW * -imAnchorX,
        imY + imH * -imAnchorY,
        imW,
        imH
      );

      ctx.restore();
    }
  }
};

function Fire() {
  Fire.superClass.call(this, o_fire);

  this.webTransparency = 0;

  //set vars for this class
  this.doesDrawEffectScale = true;
  this.drawEffectScale_Slow = true;
}
window.Fire = Fire;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Fire, o_fire);


///////
// file: js_src/gameobj/FireBall.js
///////





var superClass = GameObj;
FireBall.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
FireBall.prototype.constructor = FireBall;
FireBall.superClass = superClass; //'class' var

FireBall.prototype.updateZ = function() {
  this.z = 1005;
};
//override draw (things like other effects are drawn seperately)

FireBall.prototype.customDraw = function(batchDrawOutline) {
  //DEBUG

  if (!options_lowGraphics) {
    //on fire glow

    //glow stronger/weaker like a fire
    var period = 1.0; //periodic func with time
    var p_min = 0.15,
      p_max = 0.8; //set these!
    var amp = 0.5 * (p_max - p_min);
    var flashA =
      p_min +
      amp +
      amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

    ctx.save();
    {
      ctx.globalAlpha *= flashA;
      // drawCircle(0, 0, Math.max(0, this.rad), "#F6EA65");
    }
    ctx.restore();
    //glow stronger/weaker like a fire
    var period = 1.0; //periodic func with time
    var p_min = 0.85,
      p_max = 1.0; //set these!
    var amp = 0.5 * (p_max - p_min);
    var moveA =
      p_min +
      amp +
      amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

    var imNum = Math.trunc(timestamp / 120) % 5;
	  if (this.specType == 32) {
		  this.doesDrawEffectScale = this.drawEffectScale_Slow = false
    imNum = Math.trunc(timestamp / 300) % 2;
	  }
    //console.log("fire: " + imNum);
    //mope/img/fireball/10/
    //astral123
    //var theImg = getLoadedImg(imNum == 1 ? "img/fire.png" : "img/fire2.png");
     

      var theImg = getLoadedImg("img/fireball/"+this.specType +"/"+ imNum + ".png");

    if (theImg) {
      var imX = 0,
        imY = this.rad * 0.4;
      var imW = (this.rad * 2.0 * (2.0 + moveA * 2.0)) / 3.0,
        imH = this.rad * 3.5 * moveA;
      var imAnchorX = 0.5,
        imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.save();
      {
        ctx.globalAlpha *= this.onFireEffA * moveA;
        ctx.rotate(this.angle);
        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );
      }
      ctx.restore();
    } else {
      //console.log("not found: " + imNum)
    }
  } else {
    console.log("its low graphic!");

    var theImg = getLoadedImg("img/fireball/"+this.specType+"/0.png");

    if (theImg) {
      var period = 1.0; //periodic func with time
      var p_min = 0.85,
        p_max = 1.0; //set these!
      var amp = 0.5 * (p_max - p_min);
      var moveA =
        p_min +
        amp +
        amp * Math.sin(((2.0 * Math.PI) / period) * (timestamp / 1000.0));

      var imX = 0,
        imY = this.rad * 0.4;
      var imW = (this.rad * 2.0 * (2.0 + moveA * 2.0)) / 3.0,
        imH = this.rad * 3.5 * moveA;
      var imAnchorX = 0.5,
        imAnchorY = 0.95; //top-left= 0,0, bottom-right=1,1 (canvas coords)

      ctx.save();
      {
        ctx.rotate(this.angle);
        ctx.drawImage(
          theImg,
          imX + imW * -imAnchorX,
          imY + imH * -imAnchorY,
          imW,
          imH
        );
      }
      ctx.restore();
    }
  }
};


function FireBall() {
  FireBall.superClass.call(this, o_fireBall);
}

window.FireBall = FireBall;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(FireBall, o_fireBall);

//battle royal update



///////
// file: js_src/gameobj/AnimalCarcass.js
///////


var superClass = GameObj;
AnimalCarcass.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
AnimalCarcass.prototype.constructor = AnimalCarcass;
AnimalCarcass.superClass = superClass; //'class' var
AnimalCarcass.prototype.nickName = "mope.io";
AnimalCarcass.prototype.fadeAway = false;
AnimalCarcass.prototype.webTransparency = 100;
AnimalCarcass.prototype.carcassType = 0;
// if an object has to be manually drawn by the interface then set this to true 
//AnimalCarcass.prototype.customInterfaceDraw = false;
// do not animate radius on spawning
AnimalCarcass.prototype.updateZ = function () {
    this.z = -153 + this.rad;
}

AnimalCarcass.prototype.getNameSize = function () {
    return 6.0; //Math.max(~~(.3 * this.size), 24)
};

AnimalCarcass.prototype.setNick = function (a) {
    //if (this.nickName = a) {
    this.nickName = a;
    if (null == this.nickTXT) {

        this.nickTXT = new CachedText(this.getNameSize(), "#FFFFFF"); //"#043400");
        this.nickTXT.strokeW = 1.5;

        this.nickTXT.renderScale = 5.0; //render larger to undo 'zoom of 3x'
        this.nickTXT.setText(this.nickName);
    } else {
        this.nickTXT.setFontSize(this.getNameSize());
        this.nickTXT.setText(this.nickName);
    }
    //}
};



AnimalCarcass.prototype.customDraw = function (batchDrawOutline) {
    ctx.save();


    var nameIdealOp = 0.3;
    if (this.fadeAway) {
        var opacity = this.webTransparency / 100;
        ctx.globalAlpha = opacity;
        nameIdealOp = Math.min(nameIdealOp, opacity);
    }
    else
        ctx.globalAlpha = 0.8;

    var theImg = getLoadedImg("img/carcass/" + this.carcassType + ".png");
    if (theImg) {
        var rad = this.rad;
        ctx.rotate(this.angle);

        //ctx.shadowOffsetX = 2;
        //ctx.shadowOffsetY = 2;
        //ctx.shadowColor = "black";
        //ctx.shadowBlur = 10;
        ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
    }

    ctx.restore();
    this.drawNickName(nameIdealOp);
}

AnimalCarcass.prototype.drawNickName = function (idealOp) {
    if (this.nickName && this.nickTXT && !options_noNames) {
        ctx.save();
        ctx.globalAlpha = idealOp; //name alpha
        //draw cached name
        this.nickTXT.x = 0;
        this.nickTXT.y = this.rad;
        this.nickTXT.draw();

        ctx.restore();
    }
}

AnimalCarcass.prototype.readCustomData_onNewlyVisible = function (msg) {
    var nickName = msg.readString();
    this.carcassType = msg.readUInt8();
    this.fadeAway = msg.readUInt8() == 1;
    if (this.fadeAway)
        this.webTransparency = msg.readUInt16();
    this.setNick((nickName) ? nickName : "mope2.io/1v1");
}
//custom data for this class (must be matched by server-side write of this data!)
AnimalCarcass.prototype.readCustomData_onUpdate = function (msg) {
    if (this.fadeAway)
        this.webTransparency = msg.readUInt16();
}

function AnimalCarcass() {
    AnimalCarcass.superClass.call(this, o_animalCarcass);

    this.shrinkedRad = 0;
    //this.n_shrinkedRad=0; //smooth animation- set this var

    //console.log("class was spawned!");
}
window.AnimalCarcass = AnimalCarcass;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(AnimalCarcass, o_animalCarcass);


///////
// file: js_src/gameobj/Chilli.js
///////


var superClass = GameObj;
Chilli.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
Chilli.prototype.constructor = Chilli;
Chilli.superClass = superClass; 
Chilli.prototype.chilliType = 0;
Chilli.prototype.updateZ = function () {
    this.z = -153;
}

Chilli.prototype.customDraw = function (batchDrawOutline) {
    ctx.save();
    var theImg = getLoadedImg("img/chilli/" + this.chilliType + "/chilli" + (this.isEdibleOutlined() ? "_e" : "") + ".png");
    if (theImg) {
        var rad = this.rad;
        ctx.rotate(this.angle);
        ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
    }
    ctx.restore();
}

Chilli.prototype.readCustomData_onNewlyVisible = function (msg) {
    this.chilliType = msg.readUInt8();
}

function Chilli() {
    Chilli.superClass.call(this, o_chilli);
    this.doesDrawEffectScale = true;
}
window.Chilli = Chilli;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(Chilli, o_chilli);


///////
// file: js_src/gameobj/animal/BigCat.js
///////

var BigCat = BigCat;
var superClass = Animal;
BigCat.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
BigCat.prototype.constructor = BigCat;
BigCat.superClass = superClass; //'class' var
//var hasSkinDrawn = false;
//BigCat.prototype.bodySpots = [];
//set custom skin name

BigCat.prototype.objSkinSpotsCanvas = null;
BigCat.prototype.getSkinName = function () {
    return this.animalInfo().skinName;
}

BigCat.prototype.animalInfo = function () {
    var infoO = {};

    var skin = "";
    switch (this.animalSpecies) {
        case 0:
            infoO.aniName = "Cheetah";
            infoO.upgradeText = "UPGRADED to Cheetah!\n Press W to get a speed boost!";
            skin = "cheetah";
            break;
        case 1:
            infoO.aniName = "Jaguar";
            infoO.upgradeText = "UPGRADED to JAGUAR!\n Press W to get a speed boost!\n(Jaguars can climb hills!)";
            skin = "jaguar";
            break;
        case 2:
            infoO.aniName = "Leopard";
            infoO.upgradeText = "UPGRADED to LEOPARD!\n Press W to get a speed boost!\n(Leopards can dive longer)";
            skin = "leopard";
            break;
        case 3:
            infoO.aniName = "Black Panther";
            infoO.upgradeText = "UPGRADED to BigCat!\n Press W to get a speed boost!\n(Black Panthers are fast on mud)";
            skin = "blackpanther";
            break;
    }


    infoO.aniCol = "#CAC05B";
    infoO.skinName = "bigcat/" + skin;
    return infoO;
}


function BigCat() {
    BigCat.superClass.call(this, o_animal);
  
}



window.BigCat = BigCat;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(BigCat, o_animal, a_bigCat);

//interface controls


///////
// file: js_src/interface/InterfaceButton.js
///////


//button that appears in animal choice interface
function InterfaceButton(x, y, w, h, txt, fontSize, color, strokecolor) {
  //button gets resized on draw (due to varying screen size)
  var pr = interfS;
  this.x = x;
  this.y = y;
  this.w = w; //width of pressable region
  this.h = h;
  this.label = txt;
  this.font = Number(fontSize) ? Number(fontSize) : 30;
  this.isVisible = true;
  this.hoverColor = "#16932A";
  this.defaultColor = "#0aa633";
	if (color) {
  this.hoverColor = this.defaultColor = color;
	}
  this.alpha = 1;
  this.txtAlpha = 1;
  this.ctx = ctx;
  //this.text = infoForAnimalType(aniT).aniName;//isOcean ? "Ocean Animal" : "Land Animal";
  this.buttonTXT = new CachedText(12.0, "white");
  this.buttonTXT.renderScale = 1.5;

  this.isHighLighted = false; //highlight if mouse goes on it
  this.showLabeleOnHover = false;
  this.textShadow = false;
  this.buttonScaleF = 1.0; //scale primary button
 
  //this.touchMarginEx=20.0;
  this.strokeWidth = 4 * pr;

  //used to check clicks
  this.testPosHitsButton = function(posX, posY) {
    posX = posX;
    posY = posY;
    var min_x = this.x; // - this.w / 2;
    var max_x = this.x + this.w; // / 2;
    var min_y = this.y; // - this.h / 2;
    var max_y = this.y + this.h; // / 2;

    if (posX < min_x || posX > max_x)
      //outside x bounds
      return false;
    if (posY < min_y || posY > max_y) {
      //outside y bounds
      return false;
    } else return true;

    //if (posX > min_x || posX < max_x)
    //    return true;

    //if (posY > min_y || posY < max_y) {
    //    return true;
    //} else
    //    return false;
  };
  (this.setPosAndSize = function(newX, newY, newW, newH, anchorX, anchorY) {
    this.w = newW;
    this.h = newH;
    //set middle x/y based on anchorX/anchorY -(0,0) is top-left corner
    this.x = newX + newW * (0.5 - anchorX);
    this.y = newY + newH * (0.5 - anchorY);
  }),
    (this.draw = function() {
      //draw button bg square
      if (!this.isVisible) return;
      this.update();
      this.ctx.save();
      this.ctx.translate(this.x, this.y);
      this.ctx.scale(this.buttonScaleF, this.buttonScaleF);
      var origA = this.alpha;

      //console.log("drawing button at "+this.x,this.y);

      //bg square
      //  ctx.globalAlpha = origA * 0.75;
      this.ctx.fillStyle = this.defaultColor;
      this.ctx.strokeStyle = "#116c17";
	    if (strokecolor) {
      this.ctx.strokeStyle = strokecolor;
	    }
      this.ctx.lineWidth = this.strokeWidth;
      this.roundRect(0, 0, this.w, this.h, 5, true, true);
      //  ctx.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
      //draw highlight
      if (this.isHighLighted) {
        this.ctx.fillStyle = this.hoverColor;
        //    ctx.globalAlpha = origA * 0.2;
        //  ctx.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
        this.roundRect(0, 0, this.w, this.h, 5, true, false);
      }

      if (!this.showLabeleOnHover) {
        this.ctx.globalAlpha = this.txtAlpha;
        this.drawText(this.w / 2, this.h / 2);
      } else if (this.isHighLighted && this.showLabeleOnHover) {
        this.drawTextOnHowever();
      }
      //ctx.font = 23 * interfS + "px Arial";
      //ctx.fillText(this.text, 0, -this.h *0.5 * 0.75);
      //}
      this.ctx.restore();
      this.onAfterDraw();
      // add to mopeButtonList
    });

  this.drawTextOnHowever = function() {
    this.drawText(this.w / 2, this.h / 2);
  };

  this.drawText = function(x, y) {
    this.buttonTXT.setText(this.label);
    this.buttonTXT.strokeW = this.isHighLighted && !this.textShadow ? 0 : 1;
    this.buttonTXT.setFontSize(this.font);
    this.buttonTXT.x = x;
    this.buttonTXT.y = y; //-this.h;// / 2);// * 0.75;
    this.buttonTXT.draw();
  };

  /**
   * Draws a rounded rectangle using the current state of the canvas.
   * If you omit the last three params, it will draw a rectangle
   * outline with a 5 pixel border radius
   * @param {Number} x The top left x coordinate
   * @param {Number} y The top left y coordinate
   * @param {Number} width The width of the rectangle
   * @param {Number} height The height of the rectangle
   * @param {Number} [radius = 5] The corner radius; It can also be an object
   *                 to specify different radii for corners
   * @param {Number} [radius.tl = 0] Top left
   * @param {Number} [radius.tr = 0] Top right
   * @param {Number} [radius.br = 0] Bottom right
   * @param {Number} [radius.bl = 0] Bottom left
   * @param {Boolean} [fill = false] Whether to fill the rectangle.
   * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
   */
  this.roundRect = function(x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == "undefined") {
      stroke = true;
    }
    if (typeof radius === "undefined") {
      radius = 5;
    }
    if (typeof radius === "number") {
      radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
      var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }
    this.ctx.globalAlpha = this.alpha;
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(x + radius.tl, y);
    this.ctx.lineTo(x + width - radius.tr, y);
    this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    this.ctx.lineTo(x + width, y + height - radius.br);
    this.ctx.quadraticCurveTo(
      x + width,
      y + height,
      x + width - radius.br,
      y + height
    );
    this.ctx.lineTo(x + radius.bl, y + height);
    this.ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    this.ctx.lineTo(x, y + radius.tl);
    this.ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    this.ctx.closePath();
    if (fill) this.ctx.fill();
    if (stroke) this.ctx.stroke();
  };

  /* OVERRIDABLE METHODS*/
  this.onClick = function() {
    // override this method to perform custom action
  };

  this.onMouseMove = function() {
    // override this method to perform custom action
  };

  this.update = function() {
    // override this method to dynamically update button x/y;
  };

  this.onInterfaceReset = function() {
    // call this method when interface is reset
    log(this.label + ".onInterfaceReset");
  };

  /**
   * Override this method to do custom drawing immediately after draw is finished.
   */
  this.onAfterDraw = function() {};
}
window.InterfaceButton = InterfaceButton;


///////
// file: js_src/interface/GameMode.js
///////

GameMode.prototype = {
    mode: 0,
    state: 0,
    myPlayer: null,
}
GameMode.prototype.chatAllowed = true;
GameMode.prototype.isHalloween = false;
GameMode.prototype.stamp = 0;

GameMode.prototype.interface = function () {

}
GameMode.prototype.drawMap = function () {

}
GameMode.prototype.interfaceReset = function () {

}
GameMode.prototype.main = function (msg) {
    // read all messages related to this new game mode
}

GameMode.prototype.onInit = function (msg) {

}
GameMode.prototype.drawCustomObjs = function (customInterfaceObjList) {

}

GameMode.prototype.worldUpdate = function (msg) {

}

GameMode.prototype.setPlayer = function () {

    this.myPlayer = gameObjsByID[myPlayerID];
}


function GameMode() {

}

window.GameMode = GameMode;


///////
// file: js_src/interface/GameMode_FreeForAll.js
///////

var superClass = GameMode;
FreeForAll.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
FreeForAll.prototype.constructor = FreeForAll;
FreeForAll.superClass = superClass;
FreeForAll.prototype.safeArea = null;

function FreeForAll(_mode) {
  this.mode = _mode;
  this.stamp = +new Date();
  this.chatAllowed = true;
  
  this.createInterfaceButtons();
}

FreeForAll.prototype.wastedPopups = [];
FreeForAll.prototype.playerDisplayNum = 0;
FreeForAll.prototype.setServerPlayerCount = function() {
  if (this.playerDisplayNum == 0)
    playersOnlTXT.setText(numberWithCommas(nPlayersAlive ) + " Playing!");
  else playersOnlTXT.setText(numberWithCommas(nPlayersViewing) + " Spectating!");

  this.playerDisplayNum = this.playerDisplayNum == 0 ? 1 : 0;
};
FreeForAll.prototype.interface = function() {
  // call anything that needs to be displayed on screen
  // eg. player count, messages as well as end screen.

  if (this.state == -1 || this.mode != gameMode) return;

  if (serverCon_aliveInAGame) {
    //console.log("interface drawn:");
    //DRAW: xp plus popups
    for (var k = this.wastedPopups.length - 1; k >= 0; k--) {
      //iterate backwards to allow removing
      var anItem = this.wastedPopups[k];
      anItem.draw();
      if (anItem.timedOut) this.wastedPopups.splice(k, 1); //remove timed out item
    }
  }

  if (this.endScreenCanvas != null) {
    this.endScreenCanvas.width &&
      ctx.drawImage(
        this.endScreenCanvas,
        canvasW / 2 - this.endScreenCanvas.width / 2,
        15 * pixelRat,
        this.endScreenCanvas.width,
        this.endScreenCanvas.height
      );
    if (!serverCon_aliveInAGame || isGhost) setSiteMenuVisible(true);
  }

  this.drawInterfaceButtons();
};

FreeForAll.prototype.interfaceReset = function() {
  //console.log("reseting interface");
  this.endScreenCanvas = null;
  this.dangerCircleMiniMapCanvas = null;
  this.wastedPopups = [];
  this.lastWastedPopupT = 0;
  this.playercount = 0;
  this.safeArea = null;

  if (this.interfaceButtons) {
    for (var i = 0; i < this.interfaceButtons.length; i++) {
      var aBut = this.interfaceButtons[i];
      aBut.onInterfaceReset();
    }
  }
  this.interfaceButtons = [];
};

FreeForAll.prototype.onInit = function() {};

FreeForAll.prototype.playercount = 0;

FreeForAll.prototype.setPlayerCount = function(count) {
  this.playercount = count;
};

FreeForAll.prototype.showPlayerCount = function() {
  ctx.save();
  var bx = canvasW / 2; // * interfS;
  var barH = 50 * interfS;
  var barW = 300 * interfS;
  ctx.globalAlpha = 0.35;
  ctx.fillStyle = "black"; //bar bg
  var by = 30 * interfS;

  ctx.fillRect(bx - barW / 2, by, barW, barH); //bg
  ctx.globalAlpha = 1;
  ctx.fillStyle = "white";
  ctx.font = 30.0 * interfS + "px Arial";
  ctx.lineWidth = 1;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle"; //vertical center
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.shadowColor = "black";
  by += 25 * interfS;

  var msg = " player";
  if (this.playercount > 1) msg += "s";

  if (this.state == battleRoyal_inProgress) msg += " alive!";
  else if (
    this.state == battleRoyal_waitingForPlayers ||
    this.state == battleRoyal_ready
  )
    msg += " joined";

  ctx.fillText(this.playercount + msg, bx, by);
  ctx.restore();
};

FreeForAll.prototype.lbCanvas = null;

FreeForAll.prototype.leaderboard = function(lbData) {
  if (this.lbCanvas == null) this.lbCanvas = document.createElement("canvas");
  //log(lbData);
  if (lbData) {
    var ctx_ = this.lbCanvas.getContext("2d");
    var boardLength = 55;
    var nameH = 22;
    boardLength = boardLength + nameH * lbData.length;
    this.lbCanvas.width = 270;
    this.lbCanvas.height = boardLength;

    ctx_.globalAlpha = 0.2;
    ctx_.fillStyle = "#000000";
    ctx_.fillRect(0, 0, this.lbCanvas.width, this.lbCanvas.height);

    ctx_.globalAlpha = 1;
    ctx_.fillStyle = "#FFFFFF";
    var str = curServer.name; //"Top Players";
    ctx_.font = "24px Arial";
    if (!options_lowGraphics) {
      ctx_.shadowOffsetX = 1;
      ctx_.shadowOffsetY = 1;
    }
    ctx_.shadowColor = "black";
    ctx_.fillText(
      str,
      this.lbCanvas.width / 2 - ctx_.measureText(str).width / 2,
      40
    );
    var rank;

    ctx_.textAlign = "left";
    //ctx_.textBaseline = "middle"; //vertical center

    for (ctx_.font = "17px Arial", rank = 0; rank < lbData.length; ++rank) {
      str = options_noNames ? "" : lbData[rank].name || "mope2.io/1v1";
      str += " (" + formatNumK(lbData[rank].xp) + ")";
      // log(str);
      ctx_.fillStyle = "#FFFFFF";
      ctx_.fillText(str, 15, 65 + nameH * rank);
    }
  }
};
FreeForAll.prototype.drawLeaderboard = function() {
  if (serverCon_aliveInAGame) {
    if (lbCanvas) {
      lbCanvas.width &&
        ctx.drawImage(
          lbCanvas,
          10 * pixelRat,
          28 * pixelRat,
          lbCanvas.width * interfS,
          lbCanvas.height * interfS
        );
    }
  }
};
FreeForAll.prototype.btnPlayAgain = null;

FreeForAll.prototype.showStats = true;
FreeForAll.prototype.interfaceButtons = [];
FreeForAll.prototype.createInterfaceButtons = function() {
  //log("calling : createInterfaceButtons ");
  this.interfaceButtons = [];
  /*
    this.btnPlayAgain = new InterfaceButton(0, 0, 80, 80, "Play Again!", 20);
    this.btnPlayAgain.showLabeleOnHover = true;
    this.btnPlayAgain.textShadow = true;
    this.btnPlayAgain.drawTextOnHowever = function () {
        this.drawText(this.w / 2, -this.h / 3);
    }

    this.btnPlayAgain.onClick = function () {
        joinGame(false);
    }
    this.btnPlayAgain.onMouseMove = function () {
    }
    this.btnPlayAgain.update = function () {
        this.x = (canvasW / 2) + 5;
        this.y = canvasH * 0.90;//(canvasH / 2) - 250;
    }


    this.btnPlayAgain.onInterfaceReset = function () {
        this.isVisible = false;
    }

    this.btnPlayAgain.onAfterDraw = function () {
        var theImg = getLoadedImg("img/icons/replay.png");
        if (theImg) {
            ctx.save();

            var iw = (this.w * 0.80);
            var pad = (this.w - iw) / 2;
            ctx.drawImage(theImg, this.x + pad, this.y + pad, iw, iw);
            ctx.restore();
        }
    }
    this.btnPlayAgain.isVisible = false;
    this.interfaceButtons.push(this.btnPlayAgain); // only add this button if drawn;
    */
};

FreeForAll.prototype.drawInterfaceButtons = function() {
  //this.btnPlayAgain.isVisible = isGhost;
  if (this.interfaceButtons) {
    for (var i = 0; i < this.interfaceButtons.length; i++) {
      var aBut = this.interfaceButtons[i];
      if (aBut.isVisible) {
        aBut.draw();
      }
    }
  }
};

FreeForAll.prototype.onResize = function() {
  this.drawInterfaceButtons();
};

FreeForAll.prototype.readPlayerStats = function(msg) {
  var stats = [];
  //stats.totalPlayers = msg.readUInt16();
  stats.rank = msg.readUInt16();
  stats.timeAlive = msg.readUInt16(); // in seconds
  stats.totalKills = msg.readUInt16();
  stats.topRank = msg.readUInt16();
  stats.maxXP = msg.readUInt32();
  stats.killedBy = msg.readString();
  return stats;
  //playerData[0].wins = topPlayerWins;
};

FreeForAll.prototype.playerInfo = function(msg) {
  if (isGhost && !serverCon_spectatingInAGame) {
    var stats = this.readPlayerStats(msg);
    this.buildEndScreenHTML(stats);
    //this.buildEndScreen(null, stats);
  } else if (!isGhost) {
    this.endScreenCanvas = null;
  }
};

FreeForAll.prototype.worldUpdate = function(msg) {
 
};
 

FreeForAll.prototype.drawMap = function() {
   
};
FreeForAll.prototype.pieChartCanvas = null;
FreeForAll.prototype.teamColors = {
  0: "white",
  1: "#B6CF40"
};
 

FreeForAll.prototype.endScreenDisplayed = false;
FreeForAll.prototype.buildEndScreenHTML = function(data) {
  if (this.endScreenDisplayed) return;
  this.endScreenDisplayed = true;
  //refreshBannerAds();

  var html = "";
  html += "<div class='msg'>YOU WERE #" + data.rank + "</div>";
  html += "<div class='row'>";
  html += "<div class='label'>Killed by:</div>";
  html += "<div class='value2'>" + data.killedBy + "</div>";
  html += "</div>";
  html += "<div class='row'>";
  html += "<div class='col1'>";
  html += "<div class='label'>Time alive:</div>";
  html += "<div class='value'>" + secToTime(data.timeAlive) + "</div>";
  html += "</div>";
  html += "<div class='col2'>";
  html += "<div class='label'>Total kills:</div>";
  html += "<div class='value'>" + data.totalKills + "</div>";
  html += "</div>";
  html += "</div>";
  html += "<div class='row'>";
  html += "<div class='col1'>";
  html += "<div class='label'>Top rank:</div>";
  html += "<div class='value'>" + data.topRank + "</div>";
  html += "</div>";
  html += "<div class='col2'>";
  html += "<div class='label'>Max xp:</div>";
  html += "<div class='value'>" + formatNumK(data.maxXP) + "</div>";
  html += "</div>";
  html += "</div>";
  html += "<div style='clear:both;'></div>";
  html += "<div class='btnDiv'>";
  //html += "<button id='btnContinue' class='btn'>Continue</button>";
  html +=
    "<button id='btnMopeOptions' class='btn'>      CONTINUE      </button>";
  html += "</div>";
  html += "<div style='clear:both;'></div>";
  var endScreen = document.getElementById("endScreen");
  if (endScreen) {
    endScreen.innerHTML = html;
    endScreen.style.display = "block";
    var mopeMenu = document.getElementById("mopeMenu");
    /*var btnContinue = document.getElementById("btnContinue");
    var btnMopeOptions = document.getElementById("btnMopeOptions");
    btnContinue.onclick = onClickContinue;*/
    btnMopeOptions.onclick = onClickShowMenu;

    //document.getElementById("mopeMenu").style.display = "none";
    document.getElementById("moneyRectangle").style.marginTop = "55px";
  }
  if (!serverCon_aliveInAGame || isGhost) {
    document.getElementById("startMenuWrapper").style.display = "block";
    /*document.getElementById("updatesDiv").style.display = "none";
    document.getElementById("mopeMenu").style.display = "none";
    document.getElementById("appsDiv").style.display = "none";
    if(document.getElementById("moneyRectangle")!=null)
    document.getElementById("moneyRectangle").style.marginTop = "55px";*/
  }
};

FreeForAll.prototype.endScreenCanvas = null;
FreeForAll.prototype.buildEndScreen = function(playerData, stats) {
  if (this.endScreenCanvas == null)
    this.endScreenCanvas = document.createElement("canvas");

  if (this.endScreenCanvas == null) return;

  var ctx_ = this.endScreenCanvas.getContext("2d");
  var boardLength = 55;
  var nameH = 40;
  var pad = 5;

  var borad_height = 240;
  var borad_width = 420;

  boardLength = borad_height + pad * 2;
  this.endScreenCanvas.width = borad_width + pad * 2;
  this.endScreenCanvas.height = boardLength;
  ctx_.globalAlpha = 0.2;
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(0, 0, this.endScreenCanvas.width, this.endScreenCanvas.height);
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(
    pad,
    pad,
    this.endScreenCanvas.width - pad * 2,
    this.endScreenCanvas.height - pad * 2
  );
  var y = pad;
  ctx_.globalAlpha = 1;
  ctx_.fillStyle = "#FFFFFF";
  ctx_.font = "30px Arial";

  y += 55;

  var str = "Final Stats"; //"Top Players";
  ctx_.font = "30px Arial";
  ctx_.fillText(
    str,
    this.endScreenCanvas.width / 2 - ctx_.measureText(str).width / 2,
    y
  );

  ctx_.font = "20px Arial";
  y += 45;
  str = "You were #" + stats.rank; // + " out of " + stats.totalPlayers + " players";
  ctx_.fillText(
    str,
    this.endScreenCanvas.width / 2 - ctx_.measureText(str).width / 2,
    y
  );

  y += 40;
  var result = secToTime(stats.timeAlive);

  var x = pad + 15;

  drawLabelValueOn(ctx_, "Killed by", stats.killedBy, x, y);
  y += 40;
  drawLabelValueOn(ctx_, "Time Alive", secToTime(stats.timeAlive), x, y);
  x += 210;
  drawLabelValueOn(ctx_, "Total Kills", stats.totalKills, x, y);
  y += 40;
  x = pad + 15;
  drawLabelValueOn(ctx_, "Top rank", stats.topRank, x, y);
  x += 210;
  drawLabelValueOn(ctx_, "Max XP", formatNumK(stats.maxXP), x, y);

  y += 50;
  /*
    this.btnPlayAgain.update = function () {
        this.x = canvasW / 2 - this.w / 2;
        this.y = canvasH * 0.4 + boardLength;
    }
*/
};

FreeForAll.prototype.lastWastedPopupT = 0;
FreeForAll.prototype.onPlayerWasted = function(wastedName) {
  if ((timestamp - this.lastWastedPopupT) / 1000.0 > 0.7) {
    //over 0.5s since last popup
    this.lastWastedPopupT = timestamp;
    var newPop = new TextPopup(wastedName + " wasted!", 40, "red", 1500);
    this.wastedPopups.push(newPop);
  }
};

window.FreeForAll = FreeForAll;

////////// util function


///////
// file: js_src/interface/GameMode_TeamMode.js
///////

var superClass = GameMode;
TeamMode.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
TeamMode.prototype.constructor = TeamMode;
TeamMode.superClass = superClass;
TeamMode.prototype.safeArea = null;
TeamMode.prototype.teamColors = {
  0: "#cccccc",
  1: "#ffff00",
  2: "#01effc",
  3: "#bb00ff"
};
function TeamMode() {
  this.mode = gameMode_teamMode;
  this.createInterfaceButtons();
}

TeamMode.prototype.wastedPopups = [];
TeamMode.prototype.playerDisplayNum = 0;
TeamMode.prototype.setServerPlayerCount = function() {
  if (this.playerDisplayNum == 0)
    playersOnlTXT.setText(numberWithCommas(nPlayers) + " mopers");
  else playersOnlTXT.setText(numberWithCommas(nPlayersViewing) + " on server");

  this.playerDisplayNum = this.playerDisplayNum == 0 ? 1 : 0;
};

TeamMode.prototype.main = function(msg) {
  var teamMode_msgType = msg.readUInt8();
  // console.log("teamMode_msgType :" + teamMode_msgType);
  switch (teamMode_msgType) {
    case 54: // Msg_1v1Mode_YouWon
      {
        var youWon = msg.readString();
        this.buildYouWon(youWon, 15);
      }
      break;
    // case 55: // Msg_1v1Mode_topperInfo
    //   {
    //     this.top1v1_isHistoric = msg.readUInt8() == 1;
    //     this.top1v1_wins = msg.readUInt16();
    //     this.top1v1_name = msg.readString();
    //     this.buildTopperInfo();
    //   }
    //   break;

  }
};
TeamMode.prototype.canvasYouWon = null;
TeamMode.prototype.canvasYouWonEndT = 0;

TeamMode.prototype.topperInfoX = 10 * pixelRat;
TeamMode.prototype.topperInfoY = 15 * pixelRat;
TeamMode.prototype.top1v1_wins = "";
TeamMode.prototype.top1v1_name = "";

TeamMode.prototype.topperInfoTxt = null;
TeamMode.prototype.buildTopperInfo = function() {
  var name = "" + this.top1v1_name;
  if (name.lenght == 0) name = "mope2.io/1v1";

  var txt =
    (this.top1v1_isHistoric ? " ALL TIME " : "") +
    "1v1 Pro: " +
    name +
    " (wins: " +
    this.top1v1_wins +
    ")";
  if (null == this.topperInfoTxt) {
    this.topperInfoTxt = new CachedText(20, "#FFFFFF"); //"#043400");
    this.topperInfoTxt.strokeW = 2;
    this.topperInfoTxt.multiLine = true;
    this.topperInfoTxt.renderScale = 2.0; //render larger to undo 'zoom of 3x'
    this.topperInfoTxt.setText(txt);
    this.topperInfoTxt.setPos = function(nw, nx) {
      this.x += nw / 2;
    };
  } else {
    this.topperInfoTxt.setFontSize(20);
    this.topperInfoTxt.setText(txt);
    this.topperInfoTxt.setPos = function(nw, nx) {
      this.x += nw / 2;
    };
  }
};
TeamMode.prototype.buildYouWon = function(msg, dur) {
  this.canvasYouWonEndT = +new Date() + dur * 1000;
  if (this.canvasYouWon == null)
    this.canvasYouWon = document.createElement("canvas");

  if (this.canvasYouWon == null) return;

  var ctx_ = this.canvasYouWon.getContext("2d");
  var boardLength = 55;
  var nameH = 40;
  var pad = 5;

  var borad_height = 130;
  var borad_width = 420;

  boardLength = borad_height + pad * 2;
  this.canvasYouWon.width = borad_width + pad * 2;
  this.canvasYouWon.height = boardLength;

  ctx_.globalAlpha = 0.2;
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(0, 0, this.canvasYouWon.width, this.canvasYouWon.height);
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(
    pad,
    pad,
    this.canvasYouWon.width - pad * 2,
    this.canvasYouWon.height - pad * 2
  );
  var y = pad;
  ctx_.globalAlpha = 1;
  ctx_.fillStyle = "#FFFFFF";
  ctx_.font = "30px Arial";

  y += 55;

  var str = "YOU WON"; //"Top Players";
  ctx_.font = "30px Arial";
  ctx_.fillText(
    str,
    this.canvasYouWon.width / 2 - ctx_.measureText(str).width / 2,
    y
  );
  y += 45;
  ctx_.font = "20px Arial";
  ctx_.fillText(
    msg,
    this.canvasYouWon.width / 2 - ctx_.measureText(msg).width / 2,
    y
  );
};

TeamMode.prototype.interface = function() {
  // call anything that needs to be displayed on screen
  // eg. player count, messages as well as end screen.

  if (this.state == -1 || this.mode != gameMode) return;

  if (serverCon_aliveInAGame) {
    //DRAW: xp plus popups
    for (var k = this.wastedPopups.length - 1; k >= 0; k--) {
      //iterate backwards to allow removing
      var anItem = this.wastedPopups[k];
      anItem.draw();
      if (anItem.timedOut) this.wastedPopups.splice(k, 1); //remove timed out item
    }
  }
  /*
  //this.endScreenCanvas = null;
  var stats = [];
  //stats.totalPlayers = msg.readUInt16();
  stats.rank = 1;
  stats.timeAlive = 1;
  stats.totalKills = 1;
  stats.topRank = 1;
  stats.maxXP = 1;
  stats.killedBy = 1;
  this.buildEndScreen(null, stats);
  */

  if (this.endScreenCanvas != null) {
    this.endScreenCanvas.width &&
      ctx.drawImage(
        this.endScreenCanvas,
        canvasW / 2 - this.endScreenCanvas.width / 2,
        15 * pixelRat,
        this.endScreenCanvas.width,
        this.endScreenCanvas.height
      );
    if (!serverCon_aliveInAGame || isGhost) setSiteMenuVisible(true);
  }

  // if (this.inviteScreenCanvas != null) {
  //   this.inviteScreenCanvas.width &&
  //     ctx.drawImage(
  //       this.inviteScreenCanvas,
  //       canvasW / 2 - this.inviteScreenCanvas.width / 2,
  //       this.screenPos,
  //       this.inviteScreenCanvas.width,
  //       this.inviteScreenCanvas.height
  //     );
  // }

  if (this.canvasYouWonEndT > +new Date()) {
    if (this.canvasYouWon != null) {
      this.canvasYouWon.width &&
        ctx.drawImage(
          this.canvasYouWon,
          canvasW / 2 - this.canvasYouWon.width / 2,
          canvasH * 0.2,
          this.canvasYouWon.width,
          this.canvasYouWon.height
        );
    }
  }
  if (serverCon_aliveInAGame) {
    // if (this.topperInfoTxt != null) {
    //   this.topperInfoTxt.x = this.topperInfoX;
    //   this.topperInfoTxt.y = this.topperInfoY;
    //   this.topperInfoTxt.draw();
    // }

    if (this.pieChartCanvas != null) {
      this.pieChartCanvas.width &&
        ctx.drawImage(
          this.pieChartCanvas,
          20 * pixelRat,
          20 * pixelRat,
          this.pieChartCanvas.width,
          this.pieChartCanvas.height
        );
    }

    if (isInBonusRound) {
      this.setBonusRoundTimer(
        "Bonus Round\n" + Math.round(bonusRoundDur) + "s"
      );
      if (this.bonusRoundTimer != null) {
        this.bonusRoundTimer.x = canvasW / 2;
        this.bonusRoundTimer.y = canvasH * 0.1;
        this.bonusRoundTimer.draw();
      }
    }
  }
  this.drawInterfaceButtons();
};

TeamMode.prototype.drawMap = function() {
  this.buildPieChart();

  this.drawTeamPlayers();
  this.drawStonesOnMiniMap();

  this.buildInviteScreen();
};

TeamMode.prototype.interfaceReset = function() {
  //console.log("reseting interface");
  this.endScreenCanvas = null;
  this.dangerCircleMiniMapCanvas = null;
  this.wastedPopups = [];
  this.lastWastedPopupT = 0;
  this.playercount = 0;
  this.safeArea = null;

  if (this.interfaceButtons) {
    for (var i = 0; i < this.interfaceButtons.length; i++) {
      var aBut = this.interfaceButtons[i];
      aBut.onInterfaceReset();
    }
  }
  this.interfaceButtons = [];
};

TeamMode.prototype.onInit = function() {};

TeamMode.prototype.playercount = 0;

TeamMode.prototype.setPlayerCount = function(count) {
  this.playercount = count;
};

TeamMode.prototype.showPlayerCount = function() {
  ctx.save();
  var bx = canvasW / 2; // * interfS;
  var barH = 50 * interfS;
  var barW = 300 * interfS;
  ctx.globalAlpha = 0.35;
  ctx.fillStyle = "black"; //bar bg
  var by = 30 * interfS;

  ctx.fillRect(bx - barW / 2, by, barW, barH); //bg
  ctx.globalAlpha = 1;
  ctx.fillStyle = "white";
  ctx.font = 30.0 * interfS + "px Arial";
  ctx.lineWidth = 1;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle"; //vertical center
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.shadowColor = "black";
  by += 25 * interfS;

  var msg = " player";
  if (this.playercount > 1) msg += "s";

  if (this.state == battleRoyal_inProgress) msg += " alive!";
  else if (
    this.state == battleRoyal_waitingForPlayers ||
    this.state == battleRoyal_ready
  )
    msg += " joined";

  ctx.fillText(this.playercount + msg, bx, by);
  ctx.restore();
};

TeamMode.prototype.lbCanvas = null;

TeamMode.prototype.leaderboard = function(lbData) {};
TeamMode.prototype.drawLeaderboard = function() {
  if (this.stonesCanvas) {
    //log("drawing leaderboard");
    ctx.drawImage(
      this.stonesCanvas,
      10 * pixelRat,
      200 * pixelRat,
      this.stonesCanvas.width * interfS,
      this.stonesCanvas.height * interfS
    );
  }
};
TeamMode.prototype.btnPlayAgain = null;

TeamMode.prototype.showStats = true;
TeamMode.prototype.interfaceButtons = [];
TeamMode.prototype.createInterfaceButtons = function() {
  //log("calling : createInterfaceButtons ");
  this.interfaceButtons = [];
  /*
  this.btnPlayAgain = new InterfaceButton(0, 0, 80, 80, "Play Again!", 20);
  this.btnPlayAgain.showLabeleOnHover = true;
  this.btnPlayAgain.textShadow = true;
  this.btnPlayAgain.drawTextOnHowever = function() {
    this.drawText(this.w / 2, -this.h / 3);
  };

  this.btnPlayAgain.onClick = function() {
    joinGame(false);
  };
  this.btnPlayAgain.onMouseMove = function() {};
  this.btnPlayAgain.update = function() {
    this.x = canvasW / 2 + 5;
    this.y = canvasH * 0.9; //(canvasH / 2) - 250;
  };

  this.btnPlayAgain.onInterfaceReset = function() {
    this.isVisible = false;
  };

  this.btnPlayAgain.onAfterDraw = function() {
    var theImg = getLoadedImg("img/icons/replay.png");
    if (theImg) {
      ctx.save();

      var iw = this.w * 0.8;
      var pad = (this.w - iw) / 2;
      ctx.drawImage(theImg, this.x + pad, this.y + pad, iw, iw);
      ctx.restore();
    }
  };
  this.btnPlayAgain.isVisible = false;
  this.interfaceButtons.push(this.btnPlayAgain); // only add this button if drawn;
  */

  // this.btn1v1 = new InterfaceButton(0, 0, 60, 60, "Invite for 1v1", 30);
  // this.btn1v1.showLabeleOnHover = true;
  // this.btn1v1.textShadow = true;
  // this.btn1v1.drawTextOnHowever = function() {
  //   this.drawText(this.w / 2, this.h + this.h / 2);
  // };

  // this.btn1v1.onClick = function() {
  //   if (!this.clicked && !isGhost) {
  //     this.clicked = true;
  //     this.isHighLighted = false;
  //     var mes = new MsgWriter(2);
  //     mes.writeUInt8(52); // Msg_1v1Mode_invitePlayer;
  //     mes.writeUInt8(0); //1=down, 0=up
  //     wsSendMsg(mes);
  //   }
  // };
  // this.btn1v1.onMouseMove = function() {};
  // this.btn1v1.update = function() {
  //   this.x = canvasW / 2 - this.w / 2;
  //   this.y = 5 + this.h / 2; //(canvasH / 2) - 250;
  // };

  // this.btn1v1.onInterfaceReset = function() {
  //   this.isVisible = true;
  // };

  // this.btn1v1.onAfterDraw = function() {
  //   var theImg = getLoadedImg("img/icons/1v1.png");
  //   if (theImg) {
  //     ctx.save();

  //     var iw = this.w * 0.8;
  //     var pad = (this.w - iw) / 2;
  //     ctx.drawImage(theImg, this.x + pad, this.y + pad, iw, iw);
  //     ctx.restore();
  //   }
  // };
  // this.btn1v1.isVisible = show1v1Button;
  // this.interfaceButtons.push(this.btn1v1);
};

TeamMode.prototype.drawInterfaceButtons = function() {
  // this.btnPlayAgain.isVisible = isGhost;
/*
  this.removeExpiredRequestButtons();
  this.btn1v1.isVisible = !isGhost && show1v1Button;
  if (this.btn1v1.isVisible) {
    this.btn1v1.clicked = false;
  }
  */
  if (this.interfaceButtons) {
    for (var i = 0; i < this.interfaceButtons.length; i++) {
      var aBut = this.interfaceButtons[i];
      if (aBut.isVisible) {
        aBut.draw();
      }
    }
  }
};

TeamMode.prototype.removeExpiredRequestButtons = function() {
  for (d = 0; d < this.interfaceButtons.length; d++) {
    var aBut = this.interfaceButtons[d];

    if (aBut.reqID !== undefined) {
      var activeRequest = true;
      var found = false;
      for (r = 0; r < player1v1Requests.length; r++) {
        var req = player1v1Requests[r];
        if (req.id == aBut.reqID) {
          found = true;
          break;
        }
      }

      if (!found) activeRequest = false;

      if (!activeRequest || isInArena) {
        log("removing button");
        var tmp = this.interfaceButtons.indexOf(aBut);
        if (-1 != tmp) {
          this.interfaceButtons.splice(tmp, 1);
        }
      }
    }
  }
};

TeamMode.prototype.onResize = function() {
  this.drawInterfaceButtons();
};

TeamMode.prototype.readPlayerStats = function(msg) {
  var stats = [];
  //stats.totalPlayers = msg.readUInt16();
  stats.rank = msg.readUInt16();
  stats.timeAlive = msg.readUInt16(); // in seconds
  stats.totalKills = msg.readUInt16();
  stats.topRank = msg.readUInt16();
  stats.maxXP = msg.readUInt32();
  stats.killedBy = msg.readString();
  return stats;
};

TeamMode.prototype.playerInfo = function(msg) {
  if (isGhost && !serverCon_spectatingInAGame) {
    var stats = this.readPlayerStats(msg);
    ;
    //    this.buildEndScreen(null, stats);
    this.buildEndScreenHTML(stats);
  } else if (!isGhost) {
    this.endScreenCanvas = null;
  }
};
TeamMode.prototype.worldUpdate = function(msg) {
  // read teams info
  this.team1 = msg.readUInt16();
  this.team2 = msg.readUInt16();
  this.team3 = msg.readUInt16();

  this.teamPlayerCount = msg.readUInt16();

  this.teamPlayers = [];
  for (i = 0; i < this.teamPlayerCount; i++) {
    var x = msg.readUInt16() / 4.0;
    var y = msg.readUInt16() / 4.0;
    var r = msg.readUInt16() / 10.0;
    this.teamPlayers.push({ x: x, y: y, rad: r });
  }

  this.totalStones = msg.readUInt8();
  this.teamStones = [];
  for (i = 0; i < this.totalStones; i++) {
    var _teamID = msg.readUInt8();
    var x = msg.readUInt16() / 4.0;
    var y = msg.readUInt16() / 4.0;
    var r = msg.readUInt16() / 10.0;
    this.teamStones.push({ teamID: _teamID, x: x, y: y, rad: r });
  }

  //this.teamTotal = this.team1 + this.team2 + this.team3;
};
thisClass.prototype.bonusRoundTimer = null;
TeamMode.prototype.pieChartCanvas = null;

TeamMode.prototype.setBonusRoundTimer = function(a) {
  var txt = "" + a;
  if (null == this.bonusRoundTimer) {
    this.bonusRoundTimer = new CachedText(40, "#FFFFFF"); //"#043400");
    this.bonusRoundTimer.strokeW = 2;
    this.bonusRoundTimer.multiLine = true;
    this.bonusRoundTimer.renderScale = 5.0; //render larger to undo 'zoom of 3x'
    this.bonusRoundTimer.setText(txt);
  } else {
    this.bonusRoundTimer.setFontSize(40);
    this.bonusRoundTimer.setText(txt);
  }
};

TeamMode.prototype.buildPieChart = function() {
  if (this.pieChartCanvas == null)
    this.pieChartCanvas = document.createElement("canvas");

  if (this.pieChartCanvas == null) return;

  var ctx_ = this.pieChartCanvas.getContext("2d");

  var data = {
    1: this.team1,
    2: this.team2,
    3: this.team3
  };

  var myPiechart = new Piechart({
    pad: 30,
    canvas: this.pieChartCanvas,
    data: data,
    colors: this.teamColors
  });

  var boardLength = 55;
  var nameH = 40;
  var pad = 5;

  var borad_height = 200;
  var borad_width = 200;

  boardLength = borad_height + pad * 2;
  this.pieChartCanvas.width = borad_width + pad * 2;
  this.pieChartCanvas.height = boardLength;
  myPiechart.draw();

  ctx_.globalAlpha = 0.2;

  var y = pad;
  ctx_.globalAlpha = 0.5;
  ctx_.fillStyle = "white";
  ctx_.font = "20px Arial";
  var y = 200;
  str = curServer.name; // + " out of " + stats.totalPlayers + " players";
  ctx_.fillText(
    str,
    this.pieChartCanvas.width / 2 - ctx_.measureText(str).width / 2 - 15,
    y
  );
};
TeamMode.prototype.inviteScreenCanvas = null;

TeamMode.prototype.endScreenCanvas = null;
TeamMode.prototype.endScreenDisplayed = false;
TeamMode.prototype.buildEndScreenHTML = function(data) {
  if (this.endScreenDisplayed) return;
  this.endScreenDisplayed = true;
  //refreshBannerAds();

  var html = "";
  html += "<div class='msg'>YOU WERE #" + data.rank + "</div>";
  html += "<div class='row'>";
  html += "<div class='label'>Killed by:</div>";
  html += "<div class='value2'>" + data.killedBy + "</div>";
  html += "</div>";
  html += "<div class='row'>";
  html += "<div class='col1'>";
  html += "<div class='label'>Time alive:</div>";
  html += "<div class='value'>" + secToTime(data.timeAlive) + "</div>";
  html += "</div>";
  html += "<div class='col2'>";
  html += "<div class='label'>Total kills:</div>";
  html += "<div class='value'>" + data.totalKills + "</div>";
  html += "</div>";
  html += "</div>";
  html += "<div class='row'>";
  html += "<div class='col1'>";
  html += "<div class='label'>Top rank:</div>";
  html += "<div class='value'>" + data.topRank + "</div>";
  html += "</div>";
  html += "<div class='col2'>";
  html += "<div class='label'>Max xp:</div>";
  html += "<div class='value'>" + formatNumK(data.maxXP) + "</div>";
  html += "</div>";
  html += "</div>";
  html += "<div style='clear:both;'></div>";
  html += "<div class='btnDiv'>";
  //html += "<button id='btnContinue' class='btn'>Play Again</button>";
  html += "<button id='btnContinue' class='btn'>CONTINUE</button>";
  html += "</div>";
  html += "<div style='clear:both;'></div>";
  var endScreen = document.getElementById("endScreen");
  if (endScreen) {
    endScreen.innerHTML = html;
    endScreen.style.display = "block";
    //var btnContinue = document.getElementById("btnContinue");
    var btnContinue = document.getElementById("btnContinue");
    //btnContinue.onclick = onClickContinue;
    btnContinue.onclick = onClickShowMenu;
  }

  if (!serverCon_aliveInAGame) {
    setSiteMenuVisible(true);
    //document.getElementById("startMenuWrapper").style.display = "block";

  }
};

TeamMode.prototype.buildEndScreen = function(playerData, stats) {
  if (this.endScreenCanvas == null)
    this.endScreenCanvas = document.createElement("canvas");

  if (this.endScreenCanvas == null) return;

  var ctx_ = this.endScreenCanvas.getContext("2d");
  var boardLength = 55;
  var nameH = 40;
  var pad = 5;

  var borad_height = 240;
  var borad_width = 420;

  boardLength = borad_height + pad * 2;
  this.endScreenCanvas.width = borad_width + pad * 2;
  this.endScreenCanvas.height = boardLength;
  ctx_.globalAlpha = 0.2;
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(0, 0, this.endScreenCanvas.width, this.endScreenCanvas.height);
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(
    pad,
    pad,
    this.endScreenCanvas.width - pad * 2,
    this.endScreenCanvas.height - pad * 2
  );
  var y = pad;
  ctx_.globalAlpha = 1;
  ctx_.fillStyle = "#FFFFFF";
  ctx_.font = "30px Arial";

  y += 55;

  var str = "YOU DIED!"; //"Top Players";
  ctx_.font = "30px Arial";
  ctx_.fillText(
    str,
    this.endScreenCanvas.width / 2 - ctx_.measureText(str).width / 2,
    y
  );

  ctx_.font = "20px Arial";
  y += 45;
  str = "You were #" + stats.rank; // + " out of " + stats.totalPlayers + " players";
  ctx_.fillText(
    str,
    this.endScreenCanvas.width / 2 - ctx_.measureText(str).width / 2,
    y
  );

  y += 40;
  var result = secToTime(stats.timeAlive);

  var x = pad + 15;

  drawLabelValueOn(ctx_, "Killed by", stats.killedBy, x, y);
  y += 40;
  drawLabelValueOn(ctx_, "Time Alive", result, x, y);
  x += 210;
  drawLabelValueOn(ctx_, "Total Kills", stats.totalKills, x, y);
  y += 40;
  x = pad + 15;
  drawLabelValueOn(ctx_, "Top rank", stats.topRank, x, y);
  x += 210;
  drawLabelValueOn(ctx_, "Max XP", formatNumK(stats.maxXP), x, y);

  y += 50;
  /*
  this.btnPlayAgain.update = function() {
    this.x = canvasW / 2 - this.w / 2;
    this.y = canvasH * 0.4 + boardLength;
  };
  */
};
TeamMode.prototype.buildInviteScreen = function() {
  // player1v1Requests = [];
  // for (i = 0; i < 1; i++) {
  //   var id = i;
  //   var fromPlayer = "test " + (i + 1);
  //   var reqDur = 10000;
  //   player1v1Requests.push({
  //     id: id,
  //     requestee: fromPlayer,
  //     aniType: 1,
  //     wins: 1,
  //     teamID: 1,
  //     rank: 1,
  //     dur: reqDur
  //   });
  // }

  if (player1v1Requests.length == 0) {
    this.inviteScreenCanvas = null;
    return;
  }

  if (this.inviteScreenCanvas == null)
    this.inviteScreenCanvas = document.createElement("canvas");

  if (this.inviteScreenCanvas == null) return;

  var ctx_ = this.inviteScreenCanvas.getContext("2d");
  var boardLength = 55;
  var nameH = 40;
  var pad = 5;

  var borad_height = 200 + player1v1Requests.length * 80;
  var borad_width = 420;

  boardLength = borad_height + pad * 2;
  this.inviteScreenCanvas.width = borad_width + pad * 2;
  this.inviteScreenCanvas.height = boardLength;
  var screenPos = 150;
  this.screenPos = screenPos;
  ctx_.globalAlpha = 0.2;
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(
    0,
    0,
    this.inviteScreenCanvas.width,
    this.inviteScreenCanvas.height
  );
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(
    pad,
    pad,
    this.inviteScreenCanvas.width - pad * 2,
    this.inviteScreenCanvas.height - pad * 2
  );
  var y = pad;
  ctx_.globalAlpha = 1;
  ctx_.fillStyle = "#FFFFFF";
  ctx_.font = "30px Arial";

  y += 55;

  var str = "1v1 REQUEST"; //"Top Players";
  ctx_.font = "30px Arial";
  ctx_.fillText(
    str,
    this.inviteScreenCanvas.width / 2 - ctx_.measureText(str).width / 2,
    y
  );

  //screenPos -= boardLength / 2;
  // screenPos += 40;
  screenPos = 100;
  var btnY = 0;
  for (r = 0; r < player1v1Requests.length; r++) {
    var req = player1v1Requests[r];
    ctx_.save();
    ctx_.fillStyle = "red";
    ctx_.globalAlpha = 0.5;
    ctx_.fillRect(this.inviteScreenCanvas.width - 60, 10, 50, 50);
    ctx_.restore();
    ctx_.save();
    str = "" + req.dur;
    ctx_.font = "30px Arial";
    ctx_.fillText(
      str,
      this.inviteScreenCanvas.width - 35 - ctx_.measureText(str).width / 2,
      45
    );
    ctx_.restore();
    ctx_.font = "20px Arial";

    str = req.requestee + " invites you for 1v1 ";
    ctx_.fillText(
      str,
      this.inviteScreenCanvas.width / 2 - ctx_.measureText(str).width / 2,
      screenPos
    );

    var x = pad + 15;
    y = screenPos + 40;
    drawLabelValueOn(ctx_, "Animal", "", x, y);

    var aniInfo = infoForAnimalType(req.aniType);
    var theImg = getLoadedImg("./skins/" + aniInfo.skinName + ".png");

    if (theImg) {
      ctx_.save();
      ctx_.drawImage(theImg, x + 130, y - 30, 50, 50);
      ctx_.restore();
    }

    x += 210;
    drawLabelValueOn(ctx_, "1v1 Wins", req.wins, x, y);
    y += 40;
    x = pad + 15;
    drawLabelValueOn(ctx_, "Team", "", x, y);

    ctx_.save();
    var cx = x + 155;
    var cy = y - 10 / 2;
    ctx_.fillStyle = this.teamColors[req.teamID];
    ctx_.beginPath();
    ctx_.arc(cx, cy, 10, 0, Math.PI * 2);
    ctx_.fill();

    ctx_.restore();

    x += 210;
    drawLabelValueOn(ctx_, "Rank", req.rank, x, y);
    screenPos += 100;
    var btnAccept = this.create1v1RequestButton(req, "Accept");
    //420 / 2;
    btnAccept.yPos = screenPos;
    btnAccept.update = function() {
      this.x = canvasW / 2 - 140;
      this.y = _gameMode.screenPos + this.yPos + 10;
    };

    var btnReject = this.create1v1RequestButton(req, "Reject");
    btnReject.yPos = screenPos;
    btnReject.update = function() {
      this.x = canvasW / 2 - 40;
      this.y = _gameMode.screenPos + this.yPos + 10;
    };

    var btnIgnore = this.create1v1RequestButton(req, "Ignore");
    btnIgnore.yPos = screenPos;
    btnIgnore.update = function() {
      this.x = canvasW / 2 + 60;
      this.y = _gameMode.screenPos + this.yPos + 10;
    };

    screenPos += 80;
  }
};

TeamMode.prototype.create1v1RequestButton = function(req, label) {
  var hasFound = false;
  for (i = 0; i < this.interfaceButtons.length; i++) {
    btn = this.interfaceButtons[i];
    if (btn.reqID == req.id && btn.label == label) {
      hasFound = true;
      return btn;
    }
  }

  if (hasFound) return;

  var btn = new InterfaceButton(0, 0, 80, 40, label, 20);
  btn.reqID = req.id;
  btn.reqAction = btn.onClick = function() {
    this.isHighLighted = false;
    var actionType = 0;
    switch (this.label) {
      case "Accept":
        actionType = 1;
        break;
      case "Reject":
        actionType = 0;
        break;
      case "Ignore":
        actionType = 2;
        break;
    }
    var mes = new MsgWriter(3);
    mes.writeUInt8(53); // Msg_1v1Mode_RequestAction;
    mes.writeUInt8(actionType); //1=accept, 0=reject,2=ignore
    mes.writeUInt8(this.reqID);
    wsSendMsg(mes);
	      removeExpiredRequestButtons();
  };
  btn.onInterfaceReset = function() {
    this.isVisible = true;
  };

  btn.isVisible = true;
  this.interfaceButtons.push(btn);

  return btn;
};

TeamMode.prototype.lastWastedPopupT = 0;
TeamMode.prototype.onPlayerWasted = function(wastedName) {
  if ((timestamp - this.lastWastedPopupT) / 1000.0 > 0.7) {
    //over 0.5s since last popup
    this.lastWastedPopupT = timestamp;
    var newPop = new TextPopup(wastedName + " wasted!", 40, "red", 1500);
    this.wastedPopups.push(newPop);
  }
};

var Piechart = function(options) {
  this.options = options;
  this.radius = options.radius;
  this.pad = options.pad;
  this.canvas = options.canvas;
  this._ctx = this.canvas.getContext("2d");
  this.colors = options.colors;
  this.radius = Math.min(this.canvas.width / 2, this.canvas.height / 2);
  this.draw = function() {
    var total_value = 0;
    var color_index = 0;

    this._ctx.save();
    this._ctx.globalAlpha = 0.3;
    this.drawCircle(
      this.canvas.width / 2 - this.pad / 2,
      this.canvas.height / 2 - this.pad / 2,
      this.radius - this.pad,
      "white"
    );
    this._ctx.restore();

    for (var categ in this.options.data) {
      var val = this.options.data[categ];
      total_value += val;
    }
    var start_angle = 0;

    for (categ in this.options.data) {
      this._ctx.save();
      this._ctx.lineWidth = 4;
      this._ctx.strokeStyle = "white";
      this._ctx.globalAlpha = 0.3;
      var rf = 0;
      if (teamID == categ) {
        this._ctx.globalAlpha = 0.6;
        rf = 8;
      }
      val = this.options.data[categ];
      var slice_angle = (2 * Math.PI * val) / total_value;

      this.drawPieSlice(
        this.canvas.width / 2 - this.pad / 2,
        this.canvas.height / 2 - this.pad / 2,
        this.radius - this.pad,
        start_angle,
        start_angle + slice_angle,
        this.colors[categ],
        rf
      );
      this._ctx.restore();

      start_angle += slice_angle;
      color_index++;
    }
  };

  this.drawPieSlice = function(
    centerX,
    centerY,
    radius,
    startAngle,
    endAngle,
    color,
    rf
  ) {
    this._ctx.fillStyle = color;
    this._ctx.beginPath();
    this._ctx.moveTo(centerX, centerY);
    this._ctx.arc(centerX, centerY, radius + rf, startAngle, endAngle);
    this._ctx.closePath();
    this._ctx.fill();
    if (rf > 0) this._ctx.stroke();
  };

  this.drawCircle = function(centerX, centerY, radius, color) {
    this._ctx.fillStyle = color;
    this._ctx.beginPath();
    this._ctx.moveTo(centerX, centerY);
    this._ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    this._ctx.closePath();
    this._ctx.fill();
  };
};
TeamMode.prototype.drawStonesOnMiniMap = function() {
  if (this.teamStones) {
    for (t = 0; t < this.teamStones.length; t++) {
      var stone = this.teamStones[t];
      var _teamColor = this.teamColors[stone.teamID];
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "white";
      ctx.fillStyle = _teamColor;

      var x =
        canvasW -
        (10 * pixelRat + miniMapCanvas.width * interfS) +
        (stone.x * (miniMapCanvas.width * interfS)) / gameW;
      var y =
        10 * pixelRat + (stone.y * (miniMapCanvas.height * interfS)) / gameH;
      //ctx.arc(x, y, plR * radF, 0, 2 * Math.PI);

      // ctx.rect(x, y, 5, 5);
      drawPlayerOnMiniMap(stone, _teamColor, 1.25);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
    // draw stones on left corner:
  }
  this.drawStoneCounts();
};
TeamMode.prototype.stonesCanvas = null;
TeamMode.prototype.drawStoneCounts = function() {
  var y = 10;
  var stone1 = 0;
  var stone2 = 0;
  var stone3 = 0;
  if (this.teamStones)
    for (t = 0; t < this.teamStones.length; t++) {
      var stone = this.teamStones[t];
      switch (stone.teamID) {
        case 1:
          stone1++;
          break;
        case 2:
          stone2++;
          break;
        case 3:
          stone3++;
          break;
      }
    }

  if (this.stonesCanvas == null)
    this.stonesCanvas = document.createElement("canvas");

  if (this.stonesCanvas) {
    var ctx_ = this.stonesCanvas.getContext("2d");
    this.stonesCanvas.width = 300;
    this.stonesCanvas.height = 300;
    ctx_.font = "30px Arial";
    this.drawStoneCount(ctx_, 1, stone1, y);
    this.drawStoneCount(ctx_, 2, stone2, y + 50);
    this.drawStoneCount(ctx_, 3, stone3, y + 100);
  }
};

TeamMode.prototype.playerUI = [];
TeamMode.prototype.drawPlayerUI = function(ani) {};
TeamMode.prototype.drawStoneCount = function(ctx_, team, count, y) {
  ctx_.save();
  ctx_.globalAlpha = 0.5;
  var theImg = getLoadedImg("img/teamStone/stone" + team + ".png");
  if (theImg) {
    var rad = this.rad;
    ctx_.drawImage(theImg, 10, y, 40, 40);
    y += 50;
    ctx_.fillStyle = "black";
    ctx_.fillText(count + "", 60, y - 18);
  }
  ctx_.restore();
  // ctx_.save();
  // var x = 0;
  // var y = 0;
  // ctx_.beginPath();
  // ctx_.rotate(toRadians(50));
  // ctx_.moveTo(x, y);
  // ctx_.lineTo(x, y+50);
  // ctx_.lineTo(x + 50, y+ 50);
  // ctx_.closePath();
  // ctx_.fill();
  // ctx_.stroke();
  // ctx_.restore();
};

TeamMode.prototype.drawTeamPlayers = function() {
  if (this.teamPlayers) {
    var teamColor = this.teamColors[teamID];
    for (t = 0; t < this.teamPlayers.length; t++) {
      drawPlayerOnMiniMap(this.teamPlayers[t], teamColor, 1.0);
    }
  }
};

window.TeamMode = TeamMode;


///////
// file: js_src/gameobj/TeamStone.js
///////


var superClass = GameObj;
TeamStone.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
TeamStone.prototype.constructor = TeamStone;
TeamStone.superClass=superClass; //'class' var


TeamStone.prototype.updateZ = function() {
    this.z = 1002;
}


//override draw (things like other effects are drawn seperately)
TeamStone.prototype.customDraw = function(batchDrawOutline){
  ctx.save();

  ctx.globalAlpha = 1;


  var theImg = getLoadedImg("img/teamStone/stone" + this.teamID + ".png");
  if (theImg) {
    var rad = this.rad;
    ctx.rotate(this.rPer * Math.PI * 2.0);
    ctx.drawImage(theImg, -rad, -rad, 2 * rad, 2 * rad);
  }
  ctx.restore();
}
//custom data for this class (must be matched by server-side write of this data!)
TeamStone.prototype.readCustomData_onUpdate = function(msg) {
  this.teamID = msg.readUInt8();
}

//custom data for this class (must be matched by server-side write of this data!)
TeamStone.prototype.readCustomData_onNewlyVisible = function(msg) {
  this.teamID = msg.readUInt8();
}

function TeamStone(){
  TeamStone.superClass.call(this, o_teamStone);

  this.teamID =0;

  //set vars for this class
  this.doesDrawEffectScale=true;
  this.drawEffectScale_Slow=true;

}
window.TeamStone=TeamStone;
//add this file as a class! (make sure to call require!)
GameObjType.setCustomClassForGameObjType(TeamStone, o_teamStone);

///////
// file:  firewood .js
///////
var superClass = GameObj;

FireWood.prototype = Object.create(superClass.prototype);
FireWood.prototype.constructor = FireWood;
FireWood.superClass = superClass;
FireWood.prototype.updateZ = function () {
    this.z = this.rad;
};
FireWood.prototype.customDraw = function (_0xdc5c58) {
    ctx.save();
    _0xdc5c58 = 2.2 * this.rad;
    var _0x455c61 = getLoadedImg('skins/bigfoot/firewood.png');
    _0x455c61 && ctx.drawImage(_0x455c61, -_0xdc5c58 / 2, -_0xdc5c58 / 2, _0xdc5c58, _0xdc5c58);
    ctx.restore();
};


function FireWood() {
    FireWood.superClass.call(this, o_firewood);
}
window.FireWood = FireWood;
GameObjType.setCustomClassForGameObjType(FireWood, o_firewood);
///////
// file: js_src/gameobj/ability/AbilityObj1v1Arena.js
///////

var thisClass = AbilityObj1v1Arena;
var superClass = AbilityObj;
thisClass.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
thisClass.prototype.constructor = thisClass;
thisClass.superClass = superClass; //'class' var
thisClass.prototype.arenaState = 0;
thisClass.prototype.fightNumber = 0;
thisClass.prototype.timer = 0;
thisClass.prototype.timerTxt = null;
thisClass.prototype.p1Name = null;
thisClass.prototype.p2Name = null;
thisClass.prototype.p1Bites = 0;
thisClass.prototype.p2Bites = 0;
thisClass.prototype.arenaRad = 0;
thisClass.prototype.isCountdownTimer = true;
thisClass.prototype.p1ID = 0;
thisClass.prototype.p2ID = 0;
AbilityObj1v1Arena.prototype.setTimer = function(a) {
	if (this.specType2 != 1) {
  var txt =
    (this.isCountdownTimer ? "" : "FIGHT #" + this.fightNumber + "\nTIME\n") +
    "" +
    a;
  var fontSize = 16;
  if (this.isCountdownTimer) fontSize = Number(a) ? 30 : 16;
  if (null == this.timerTxt) {
    this.timerTxt = new CachedText(fontSize, "#FFFFFF"); //"#043400");
    this.timerTxt.strokeW = 2;
    this.timerTxt.multiLine = true;
    this.timerTxt.renderScale = 5.0; //render larger to undo 'zoom of 3x'
    this.timerTxt.setText(txt);
  } else {
    this.timerTxt.setFontSize(fontSize);
    this.timerTxt.setText(txt);

  }
	}
};

AbilityObj1v1Arena.prototype.setP1 = function(a) {
		if (this.specType2 != 1) {
  var txt = "" + a;

  if (null == this.p1Name) {
    this.p1Name = new CachedText(12, "#FFFFFF"); //"#043400");
    this.p1Name.strokeW = 2;
    this.p1Name.multiLine = true;
    this.p1Name.renderScale = 2.0; //render larger to undo 'zoom of 3x'
    this.p1Name.setText(txt);
  } else {
    this.p1Name.setFontSize(12);
    this.p1Name.setText(txt);
  }
		}
};

AbilityObj1v1Arena.prototype.setP2 = function(a) {
		if (this.specType2 != 1) {
  var txt = "" + a;
  if (null == this.p2Name) {
    this.p2Name = new CachedText(12, "#FFFFFF"); //"#043400");
    this.p2Name.strokeW = 2;
    this.p2Name.multiLine = true;
    this.p2Name.renderScale = 2.0; //render larger to undo 'zoom of 3x'
    this.p2Name.setText(txt);
  } else {
    this.p2Name.setFontSize(12);
    this.p2Name.setText(txt);
  }
		}
};
var ar1 = 2;
var ar2 = 2;
AbilityObj1v1Arena.prototype.updateZ = function() {
  this.z = 100002; // above everything
};
var rotateImg = 45;
//subclassable part of draw()
AbilityObj1v1Arena.prototype.customDraw = function(batchDrawOutline) {
  this.arenaRadUpdate();

  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.arc(0, 0, this.rad + 2, 0, 2 * Math.PI, false);
  ctx.arc(0, 0, this.rad, 0, 2 * Math.PI, true);
  ctx.fillStyle = "#FF1616";
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.095;

  ctx.beginPath();
  ctx.arc(0, 0, this.rad, 0, 2 * Math.PI, false);
  ctx.arc(0, 0, this.arenaRad, 0, 2 * Math.PI, true);
  ctx.fillStyle = "#FF4242";
  ctx.closePath();
  ctx.fill();
  // ctx.globalAlpha = 0.15;
  // ctx.strokeStyle = "red";
  // ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.arc(0, 0, this.arenaRad, 0, 2 * Math.PI, false);
  ctx.arc(0, 0, this.arenaRad - 2, 0, 2 * Math.PI, true);
  ctx.fillStyle = "#FF0000";
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  if (this.timerTxt != null)
    if (this.arenaState == 0) {
      this.timerTxt.x = 0;
      this.timerTxt.y = 0;
      this.timerTxt.draw();
    } else if (this.arenaState == 1) {
      this.timerTxt.x = 0;
      this.timerTxt.y = -this.rad * 0.8;
      this.timerTxt.draw();
    } else if (this.arenaState == 2) {
      this.timerTxt.x = 0;
      this.timerTxt.y = 0;
      this.timerTxt.draw();
    }

  if (this.p1Name != null) {
    this.p1Name.x = -this.rad / 2;
    this.p1Name.y = -this.rad * 0.7;
    this.p1Name.draw();

    // var aniInfo = infoForAnimalType(this.p1Animal);
    // var aniSkin = "./skins/" + aniInfo.skinName + ".png";
    // var theImg = getLoadedImg(aniSkin);
    // if (theImg) {
    //   log(aniSkin);
    //   ctx.save();
    //   ctx.rotate(rotateImg);
    //   ctx.drawImage(theImg, -this.rad, -this.rad*0.8, 50, 50);
    //   ctx.restore();
    // }
  }

  if (this.p2Name != null) {
    this.p2Name.x = this.rad / 2;
    this.p2Name.y = -this.rad * 0.7;
    this.p2Name.draw();
  }

  if (
    myPlayerID != 0 &&
    (this.p1ID == myPlayerID || this.p2ID == myPlayerID) &&
    this.arenaState == 0
  ) {
    /*if (!this.hasAdLoaded) {
      this.hasAdLoaded = true;
      document.getElementById("startMenuWrapper").style.display = "block";
      document.getElementById("updates").style.display = "none";
      document.getElementById("startMenu").style.display = "none";
      document.getElementById("rightSide").style.display = "none";
      refreshBannerAds();

      setTimeout(function() {
        document.getElementById("startMenuWrapper").style.display = "none";
        document.getElementById("startMenu").style.display = "block";
        document.getElementById("rightSide").style.display = "block";
      }, 23000);
    }*/
  }
  // else {
  //   if (
  //     myPlayerID != 0 &&
  //     (this.p1ID == myPlayerID || this.p2ID == myPlayerID) &&
  //     this.arenaState == 1
  //   ) {
  //     if (this.hasAdLoaded) {
  //       this.hasAdLoaded = false;
  //       document.getElementById("startMenuWrapper").style.display = "none";
  //     }
  //   }
  // }
};
AbilityObj1v1Arena.prototype.hasAdLoaded = false;

//override this to read in custom spawn data
AbilityObj1v1Arena.prototype.readCustomData_onNewlyVisible = function(msg) {
  AbilityObj1v1Arena.superClass.prototype.readCustomData_onNewlyVisible.call(
    this,
    msg
  );
  this.p1ID = msg.readUInt32();
  this.p2ID = msg.readUInt32();
  this.p1 = msg.readString();
  this.p2 = msg.readString();
  this.p1Wins = msg.readUInt8();
  this.p2Wins = msg.readUInt8();
  //this.p1Animal = msg.readUInt8();
  //this.p2Animal = msg.readUInt8();

  this.setNames();

  this.arenaState = msg.readUInt8();
  // if (this.arenaState == 0) {
  //   this.timer = msg.readUInt16() / 100.0;

  //   if (this.timer < 11) this.updateTimer();
  // }
  var rad = msg.readUInt16();
  this.oArenaRad = this.arenaRad;
  this.nArenaRad = rad;
};

AbilityObj1v1Arena.prototype.arenaRadUpdate = function() {
  var a = (timestamp - this.updateTime) / 1000 / lerpI;
  a = 0 > a ? 0 : 1.0 < a ? 1.0 : a; //clamp from 0-1

  //if(this.oType==o_abilityGObj)
  //console.log("(dead? "+this.dead+") a= "+a+"x="+this.x+" nx "+this.nx+" ox "+this.ox);

  this.arenaRad += (this.nArenaRad - this.arenaRad) * 0.1; //a * (this.nRad - this.oRad) + this.oRad;;
};

AbilityObj1v1Arena.prototype.readCustomData_onUpdate = function(msg) {
  AbilityObj1v1Arena.superClass.prototype.readCustomData_onUpdate.call(
    this,
    msg
  ); //call superclass version of this method

  this.arenaState = msg.readUInt8();
  this.fightNumber = msg.readUInt16();
  var rad = msg.readUInt16();
  this.oArenaRad = this.arenaRad;
  this.nArenaRad = rad;
  this.p1Bites = msg.readUInt16();
  this.p2Bites = msg.readUInt16();

  if (this.arenaState == 0) {
    this.timer = msg.readUInt16() / 100.0;
    this.isCountdownTimer = true;
    if (this.timer < 23) this.updateTimer();
  } else if (this.arenaState == 1) {
    this.timer = msg.readUInt16() / 100.0;
    this.isCountdownTimer = false;
    this.updateTimer();
  } else if (this.arenaState == 2) {
    this.winner = msg.readUInt8();
    this.winBonus = msg.readUInt32();
    this.winnerMsg = msg.readString();

    this.displayEndScreen();
  }
  this.setNames();
};
AbilityObj1v1Arena.prototype.endScreenState = -1;
AbilityObj1v1Arena.prototype.endScreenChangeT = 0;

AbilityObj1v1Arena.prototype.displayEndScreen = function() {
		if (this.specType2 != 1) {
  if (timestamp >= this.endScreenChangeT) {
    this.endScreenState++;
    this.endScreenChangeT = timestamp + 3000;
  }

  if (this.timerTxt != null) {
    if (this.endScreenState == 0) {
      this.timerTxt.setFontSize(40);
      this.timerTxt.setText("\nKO!");
    } else if (this.endScreenState == 1) {
      this.timerTxt.setFontSize(20);
      this.timerTxt.setText(this.winnerName + "\nWON!");
    } else if (this.endScreenState == 2) {
      this.timerTxt.setFontSize(20);
      this.timerTxt.setText(
        this.winnerMsg + "\nWIN BONUS: " + formatNumK(this.winBonus)
      );
    }
  }
		}
};
AbilityObj1v1Arena.prototype.challenger = null;
AbilityObj1v1Arena.prototype.opponent = null;

AbilityObj1v1Arena.prototype.setNames = function() {
		if (this.specType2 != 1) {
  var name1 = "" + this.p1;
  if (name1.length == 0) name1 = "mope2.io/1v1";
  var name2 = "" + this.p2;
  if (name2.length == 0) name2 = "mope2.io/1v1";

  var wins1 = "\n(wins: " + this.p1Wins + ")";
  var wins2 = "\n(wins: " + this.p2Wins + ")";
  var bites1 = "\nbites: " + this.p1Bites;
  var bites2 = "\nbites: " + this.p2Bites;

  if (this.arenaState < 2) {
    this.challenger = name1 + wins1;
    this.opponent = name2 + wins2;
    this.setP1(name1 + wins1 + bites1);
    this.setP2(name2 + wins2 + bites2);
  } else if (this.arenaState == 2) {
    if (this.winner == 1) {
      this.winnerName = name1;
      this.setP1(name1 + wins1 + bites1);
      this.p2Name = null;
    } else if (this.winner == 2) {
      this.winnerName = name2;
      this.setP2(name2 + wins2 + bites2);
      this.p1Name = null;
    }
  }
		}
};

AbilityObj1v1Arena.prototype.updateTimer = function() {
  this.timer = Math.round(this.timer);

  var txt = this.timer;
  if (this.isCountdownTimer)
    switch (this.timer) {
      case 23:
        txt = "";
        break;
      case 22:
      case 21:
        txt = "WELCOME TO 1V1 ARENA";
        break;
      case 20:
      case 19:
        txt = "FIGHT #" + this.fightNumber;
        break;
      case 18:
      case 17:
        txt = "CHALLENGER";
        break;
      case 16:
      case 15:
        txt = this.challenger;
        break;
      case 14:
      case 13:
        txt = "OPPONENT";
        break;
      case 12:
      case 11:
        txt = this.opponent;
        break;
      case 2:
        txt = "ROUND 1";
        break;
      case 1:
        txt = "GET SET";
        break;
      case 0:
        txt = "FIGHT";
        break;
    }
  this.setTimer(txt);
};

function AbilityObj1v1Arena() {
  AbilityObj1v1Arena.superClass.call(this); //call superclass init method (if needed, or write a new one below)
  this.hasAdLoaded = false;
}

window.AbilityObj1v1Arena = AbilityObj1v1Arena; //make class global!

//add this class as a thisClass for the right oType!
GameObjType.setCustomClassForGameObjType(
  AbilityObj1v1Arena,
  o_abilityGObj,
  ability_1v1Arena
);








///////
// file: js_src/gameobj/ability/AbilityObjGoalScored.js
///////

var thisClass = AbilityObjGoalScored;
var superClass = AbilityObj;
thisClass.prototype = Object.create(superClass.prototype); //properly inherit prototype of superclass
thisClass.prototype.constructor = thisClass;
thisClass.superClass = superClass; //'class' var
thisClass.prototype.alltimeGoals = 0;
thisClass.prototype.xpGained = 0;
thisClass.prototype.goalScorer = "";
thisClass.prototype.timerTxt = null;
thisClass.prototype.timer = 0;
AbilityObjGoalScored.prototype.updateZ = function() {
  this.z = 100002; // above everything
};
AbilityObjGoalScored.prototype.customDraw = function(batchDrawOutline) {
  this.updateTimer();

  // drawCircle(0, 0, this.rad, "#ff9000");

  if (this.timer > 3) {
    ctx.save();
    var oldA = ctx.globalAlpha;
    ctx.globalAlpha = 0.25 * oldA;
    ctx.beginPath();
    ctx.arc(0, 0, this.rad, 0, 2 * Math.PI, false);
    ctx.arc(0, 0, this.rad - 20, 0, 2 * Math.PI, true);
    ctx.fillStyle = "#ff9000";
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
  if (this.timerTxt != null) {
    this.timerTxt.x = 0;
    this.timerTxt.y = -this.rad;
    this.timerTxt.draw();
  }
};
//override this to read in custom spawn data
AbilityObjGoalScored.prototype.readCustomData_onNewlyVisible = function(msg) {
  AbilityObjGoalScored.superClass.prototype.readCustomData_onNewlyVisible.call(
    this,
    msg
  );
  this.alltimeGoals = msg.readUInt16();
  this.goalScorer = msg.readString();
  this.timer = msg.readUInt16() / 100.0;
};

AbilityObjGoalScored.prototype.readCustomData_onUpdate = function(msg) {
  AbilityObjGoalScored.superClass.prototype.readCustomData_onUpdate.call(
    this,
    msg
  ); //call superclass version of this method

  this.timer = msg.readUInt16() / 100.0;
};

AbilityObjGoalScored.prototype.setTimer = function(a) {
  var txt = a;
  var fontSize = 16;
  if (null == this.timerTxt) {
    this.timerTxt = new CachedText(fontSize, "#ffd800");
    this.timerTxt.strokeW = 2;
    this.timerTxt.multiLine = true;
    this.timerTxt.renderScale = 3.0; //render larger to undo 'zoom of 3x'
    this.timerTxt.setText(txt);
  } else {
    this.timerTxt.setFontSize(fontSize);
    this.timerTxt.setText(txt);
  }
};

AbilityObjGoalScored.prototype.updateTimer = function() {
  this.timer = Math.round(this.timer);

  var txt = this.timer;

  switch (this.timer) {
    case 10:
    case 9:
    case 8:
      txt = "GOAAAAAL!!!";
      break;

    case 7:
    case 6:
    case 5:
      txt = this.goalScorer;
      break;
    case 4:
    case 3:
    case 2:
    case 1:
      txt = "GOAL #" + this.alltimeGoals;
      break;
    default:
      txt = "";
      break;
  }
  this.setTimer(txt);
};

function AbilityObjGoalScored() {
  AbilityObjGoalScored.superClass.call(this); //call superclass init method (if needed, or write a new one below)
  this.hasAdLoaded = false;
}

window.AbilityObjGoalScored = AbilityObjGoalScored; //make class global!

//add this class as a thisClass for the right oType!
GameObjType.setCustomClassForGameObjType(
  AbilityObjGoalScored,
  o_abilityGObj,
  ability_goalScored
);

//define basic classes

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//GAME OBJECTS DEFs
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function aniChoiceButtonClicked(aBut) {
  //console.log("choice: animal " + aBut.aniT + " selected: ");

  //play sound (if not muted)
  var sound_click = getLazyLoadAudio("audio/click.mp3");
  if (sound_click) {
    try {
      sound_click.play();
    } catch (err) {}
  }

  //tell server about chosen animal
  newMsg = new MsgWriter(3);
  newMsg.writeUInt8(24);//msgType MsgGameSelectAnimal
  
  newMsg.writeUInt8(aniChoice_choiceButtons.indexOf(aBut)); //msgType generatekey
  wsSendMsg(newMsg);

  //join game (if needed)
  if (aniChoice_joinGameAfter) {
    //console.log("chosen spawn animal, joining game...");
    //clear edible types (before spawn)
    clearedTypesSinceSpawnRequest = false;

    //joinGame(false);
  }

  //close choice interface
  aniChoice_isOpen = false;
  aniChoice_joinGameAfter = false;
}

//helper to read msgData ArrayBuffer
function MsgReader(msgArrBuf) {
  this.data = msgArrBuf;
  this.offset = 0;

  this.readUInt8 = function() {
    var val = this.data.getUint8(this.offset);
    this.offset += 1;
    return val;
  };
  this.readUInt16 = function() {
    try {
      var val = this.data.getUint16(this.offset, false); //false for big endian
      this.offset += 2;
      return val;
    } catch (err) {
      return 0;
    }
  };
  this.readInt16 = function() {
    try {
      var val = this.data.getInt16(this.offset, false); //false for big endian
      this.offset += 2;
      return val;
    } catch (err) {
      return 0;
    }
  };
  this.readUInt32 = function() {
    var val = this.data.getUint32(this.offset, false); //false for big endian

    this.offset += 4;
    return val;
  };
  this.readString = function() {
    var len = this.readUInt16();
	//console.log("string length: " + len + "off: " + this.offset);
    var text = "",
      aByte;

    for (var ind = 0; ind < len; ind++) {
		try{
      aByte = this.readUInt8();
      if (ind != len - 1)
        //1 less to rid of null terminator
        text += String.fromCharCode(aByte);
		}catch(e){
			console.log("tryed: " + this.offset)
		}
    }
    return decode_utf8(text);
  };
  //reads in X bytes as an obj
  this.readMsgReaderBitsGroup = function() {};
  this.readBitGroup = function() {
    return new MsgReaderBitsGroup(this);
  };
}

function MsgWriter(msgSize) {
  this.len = 0;
  this.dataView = new DataView(new ArrayBuffer(msgSize));

  this.writeUInt8 = function(val) {
    this.dataView.setUint8(this.len, val);
    this.len += 1;
  };
  this.writeUInt16 = function(val) {
    this.dataView.setUint16(this.len, val, false);
    this.len += 2;
  };
  this.writeInt16 = function(val) {
    this.dataView.setInt16(this.len, val, false);
    this.len += 2;
  };
  this.writeUInt32 = function(val) {
    this.dataView.setUint32(this.len, val, false);
    this.len += 4;
  };
  this.writeString = function(val) {
    val = encode_utf8(val);
    len = val.length;
    this.writeUInt16(val.length);
    for (var ind = 0; ind < len; ind++) {
      this.writeUInt8(val.charCodeAt(ind));
    }
  };
}

//
function MsgReaderBitsGroup(msg) {
  this.bytesArray = new Uint8Array(20); //up to 20 bytes (increase later if needed)
  this.bytesLen = 0;

  this.rBitIndex = 1; //which bit/byte is currently being read
  this.rByteIndex = 0;

  //get the next bit from bytes array
  this.getBool = function() {
    var currentByte = this.bytesArray[this.rByteIndex];
    //console.log("Reading bit "+this.rBitIndex+", byte "+this.rByteIndex);
//	console.log("readBool = bit_get(" + currentByte + ", " + this.rBitIndex + ") > 0;");
    var readBool = bit_get(currentByte, this.rBitIndex) > 0;

    this.rBitIndex += 1;
    if (this.rBitIndex > 7) {
      //go to next byte
      this.rBitIndex = 1; //not 0, as 0 is used for length flag
      this.rByteIndex += 1;
    }
	//console.log(this)
    return readBool;
  };
  //reads 2 bits, returns a number 0-3
  this.getInt0to3 = function() {
    return this.getIntWithXBits(2);
  };
  this.getIntWithXBits = function(nBits) {
    var result = 0;
    for (var i = 0; i < nBits; i++) {
      var aBitVal = this.getBool();
      result = bit_set(result, i, aBitVal);
    }
    return result;
  };

  this.byteToStr = function(theByte) {
    var byteStr = "";
    for (var h = 0; h < 8; h++) byteStr += bit_get(theByte, h) > 0 ? "1" : "0";
    return byteStr;
  };

  //assumes next thing in message is bitsGroup, reads correct number of bytes in

  var hasNextByte = true;
  do {
    var readByte = msg.readUInt8();
    //console.log("Read byte " + this.byteToStr(readByte));
    this.bytesArray[this.bytesLen++] = readByte;
    hasNextByte = bit_get(readByte, 0) > 0;
  } while (hasNextByte);
}

//websocket
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//start loading music/sounds (based on options)
getLazyLoadAudio("audio/click.mp3"); //load click sound!

onResize(); //set vars of canvas size
gameReset();

function handleWsMessage(msgArrBuf) {
  var msg = new MsgReader(msgArrBuf);

  //console.log("msg of size in bytes:  " + msgArrBuf.byteLength);
  //bytesLastSec += msgArrBuf.byteLength;
  var msgType = msg.readUInt8();

  //console.log("msg type is " + msgType);

  switch (msgType) {
    case 1:
      {
        // first connect

        gameMode = msg.readUInt8(); // first set game mode!
        gameState = msg.readUInt8(); // first set game state!

        // set game mode interface hooks only on first connect!
        //if (typeof window.gameMode_setInterfaceFuncs === 'function')
        //    window.gameMode_setInterfaceFuncs();

        setGameMode();

        nPlayers = msg.readUInt16();
        playersOnlTXT.setText(numberWithCommas(nPlayers) + " Players");

        serverVer = msg.readUInt16();
        if (serverVer > gamever) {
          //refresh to get latest client
          setTimeout(function() {
            //disable warning
            if (!isMobileApp) window.onbeforeunload = null;
            console.log("Old client (ver " + gamever + "/" + serverVer + ")");
            alert(
              "oldmopesandbox has been UPDATED! You need to refresh to get the latest version of the game! (If this keeps appearing, hold SHIFT when pressing refresh!)"
            );
            window.location.reload(true); //true causes HARD refresh
          }, 1500);
          return;
        }
        if (serverVer < gamever) {
          console.log("Old server version detected!");
        }

        onConnectedToGameServer();
      }
      break;
    case 3: //MsgNewGameRoom
      {
        console.log("Joined new game room!");
        var spectating = msg.readUInt8() == 1;
        serverCon_aliveInAGame = !spectating; //spectating isont alive
        serverCon_spectatingInAGame = spectating;

        gameW = msg.readUInt16();
        gameH = msg.readUInt16();
        gameMode = msg.readUInt8();

        camx = camx_o = camx_n = msg.readUInt16() / 4.0;
        camy = camy_o = camy_n = msg.readUInt16() / 4.0;
        camzoom_n = msg.readUInt16() / 1000.0;

        camzoom = camzoom_n * 1.2;

        //read minimap
        //if (!spectating) {

        generateMinimap(msg);
		
        //reset game nodes (messages will soon come in with new ones)
        gameReset();

        onConnectedAndJoinedGameServer();
    	



      }
      
      
      
      
  //NORMAL INFO IS DOWN.
      break;
    case 6:
      {
        //MsgPlayerAliveInGame

        console.log("You spawned ingame!");
        //var spawnedYet = msg.readUInt8();

        //instantSetCamNextUpd=true;

        serverCon_aliveInAGame = true;

        //player spawned as an animal, play sound effect
        /*if(!spectating){
             setSiteMenuVisible(false);
           }*/

        //change music (only play once)
        changeMusicTo(gameMusicURL);

        if (!isMobileApp)
          window.onbeforeunload = function(e) {
            return "You're alive in a game, close mope.io?";
          };
      }
      break;
      case 12:
      {
        console.log("Recieved code detection");
        var codes =  msg.readString();
     
        var msgLen = 9 + encode_utf8(codes).length + 5;
        var mes = new MsgWriter(msgLen);
        mes.writeUInt8(12); //MSGTYPE join GAME
        mes.writeString(codes);
        wsSendMsg(mes)
      }
      break
    case 2:
      {
        // game join response
        var joinResponse = msg.readUInt8();
        var spectating = msg.readUInt8();
        console.log("MsgRequestJoinAGame: server response " + joinResponse);

        //joinResponse == 100: choose ocean vs land! (seperate message coming next!)
        /*if (joinResponse == 100) {
               }*/
        if (
          joinResponse == 2 &&
          joinRequest_before_BR_started &&
          serverCon_aliveInAGame
        ) {
          joinResponse = 1;
        }
        if (joinResponse == 1) {
          //successful game join! hide interface!
          console.log("Successfuly joined gameroom!");

          if (!spectating)
            //if joined as non-spectator, hide menu now
            setSiteMenuVisible(false);

          //update vars for showing video ads
          gamesPlayedThisSession += 1;
          gamesPlayedSinceLastAd += 1;
          if (window.localStorage) {
            //save
            try {
              window.localStorage.setItem(
                "gamesSinceAd",
                gamesPlayedSinceLastAd
              );
            } catch (err) {} //no localStorage
          }

          var serverRespDisplay = document.getElementById("serverResponse");

          serverRespDisplay.style.display = "none";
          serverRespDisplay.style.opacity = 0.0;
          serverRespDisplay.textContent = "";
        } else {
          /*var numPlayers = msg.readUInt1t16();
                   var maxPlayers = msg.readUInt16();*/
          /* joinResponse 0|1|2
                   0= full
                   1 = success
                   2 = battle in progress
                   */
          var serverRespDisplay = document.getElementById("serverResponse");

          if (joinResponse == 0) {
            //joined party!
            serverRespDisplay.style.display = "block";
            serverRespDisplay.style.opacity = 1.0;
            serverRespDisplay.textContent = "Error: Server is full!";

            // log(xpLab.textContent);
          } else if (joinResponse == 2) {
            setSiteMenuVisible(true);
            //joined party!
            serverRespDisplay.style.display = "block";
            serverRespDisplay.style.opacity = 1.0;
            serverRespDisplay.textContent = "Game already in progress!";
            // log(xpLab.textContent);
            } else if (joinResponse == 3) {
          setSiteMenuVisible(false);
          //joined party!
          serverRespDisplay.style.display = "none";
          serverRespDisplay.style.opacity = 1.0;
          serverRespDisplay.textContent = "Already ingame";
          // log(xpLab.textContent);
        } else if (joinResponse == 4) {
          setSiteMenuVisible(false);
          //joined party!
          serverRespDisplay.style.display = "none";
          serverRespDisplay.style.opacity = 1.0;
          serverRespDisplay.textContent = "Game is starting & cleaning";
          // log(xpLab.textContent);
        } 
          /*
          document.getElementById("onconnectDiv").style.visibility = "visible";
          var serverRn = curServer;

          setTimeout(function() {
            //restart if no server change
            if (!serverCon_aliveInAGame && curServer == serverRn) {
              connectFailsCount = 100; //force server change
              gameServerConnect(curServer);
            }
          }, 10000);
          */
        }
      }
      break;
    case 24: //animal choice MsgGameSelectAnimal
      {
        console.log("Animal choice appeared!");
        var msgKind = msg.readUInt8();
        if (msgKind == 5) {
          //hide interface, timed out
          aniChoice_isOpen = false;
        }

        if (msgKind == 0 || msgKind == 1) {
          //show interface
          var joinGameAfterChoice = msgKind == 1; //1=choosing spawn (client will try to join game after sending this)
          var timeoutS = msg.readUInt8();
          var numAnis = msg.readUInt8();

          aniChoice_isOpen = true;
          aniChoice_A = 0.0;
          aniChoice_choiceButtons = [];
          aniChoice_joinGameAfter = joinGameAfterChoice;
          aniChoice_startT = +new Date();
          aniChoice_timeOutT = aniChoice_startT + 1000 * timeoutS;
_0x2af9ee = aniChoice_startT + 1000 * timeoutS;
          //read ani types info

          for (var i = 0; i < numAnis; i++) {
            var anAniT = msg.readUInt8();
            var biomeNum = msg.readUInt8();
            var species = msg.readUInt8();
            // var _teamID = msg.readUInt8();
            //create buttons for each ani (they are positioned later, due to possible screen re-size)
            var aButton = new AniChoiceButton(//mark324
              0,
              0,
              100,
              100,
              anAniT,
              biomeNum,
              species
// animalcol           
                   );
            aButton.teamID = teamID;
            aniChoice_choiceButtons.push(aButton);
          }
        }

        //hide screen text
        screenTextEndT = +new Date();
      }
      break;
    case 8: //leaderboard update
      //var numRoomPlayers = msg.readUInt8();
      var ownRank = msg.readUInt16();
      var numLBPlayers = msg.readUInt8();
      //console.log("Leaderboard update: myrank "+ownRank+" roomPlayers "+numRoomPlayers);

      lbData = [];
      for (i = 0; i < numLBPlayers; ++i) {
        var o = {
          rank: msg.readUInt16(),
          name: msg.readString(),
          score: msg.readUInt32()
        };
        lbData.push(o);
      }
      updateLeaderBoard(lbData, 0, ownRank);

      break;
      case 7:
        var aServIp = num2dotIP(msg.readUInt32());
        console.log()
        var aServNumPl = msg.readUInt16();
        var gameMode = msg.readUInt8();
        var BR_waitingForPlayers = msg.readUInt8();
            for (var j = 0; j < gameServersList.length; j++) {
        if (gameServersList[j].ip == aServIp||"localhost") {
        var theServ = gameServersList[j];
        if (aServNumPl == 60000){
          // 60000 players recieved = offline server
          theServ.playersCount = -1;

        }else
        theServ.playersCount = aServNumPl;

        theServ.gameMode = gameMode;
        //console.log("--matched server " + theServ.ip + " gameMode " + gameMode + " "+theServ.playersCount+ "players ");
        theServ.BR_waitingForPlayers = BR_waitingForPlayers;

        matchF = true;
        //console.log("Match found for server");
        //console.log(aServNumPl + " in server " + gameServersList[j].name);
        break;
      }
            }
            updateRegionsList();
  updateServersList(); //update options shown
  updateGmModeButtons();
      break;
    case 10:
      {
        // server stats update
        nPlayers = msg.readUInt16();
        nPlayersViewing = msg.readUInt16();
        nPlayersAlive = msg.readUInt16();

        if (_gameMode != null) _gameMode.setServerPlayerCount();
        else {
          if (showPlaersOnServer)
            playersOnlTXT.setText(
              numberWithCommas(nPlayersViewing) + " Spectating!"
            );
          else playersOnlTXT.setText(numberWithCommas(nPlayersAlive) + " Playing!");
          showPlaersOnServer = !showPlaersOnServer;
        }
        // pshowPlaersOnServerlayersOnlTXT.setText(numberWithCommas(nPlayers) + " players");
        //log("viewing players: " + nPlayersViewing);
        //log("alive players: " + nPlayersAlive);
        //document.getElementByById('pOnline').innerHTML = pStr + " players online";
      }
      break;

    case 18: //your animal upgraded
       {
        var aniT = msg.readUInt8();
        var aniTSpecies = msg.readUInt8();
        var upgradeType = msg.readUInt8();
        var wasDowngrade = upgradeType == 0;

        myPlayerID = msg.readUInt32();//player's animal object ID updates
        xpNextAni = msg.readUInt32();
        lastxp = msg.readUInt32();
        var newAniT = GameObjType.createGameObjOfOType(o_animal, aniT);
        newAniT.animalType = aniT; //aniT isnt set automatically for all classes
        newAniT.animalSpecies = aniTSpecies;
        var aniInfoO = newAniT.animalInfo(); // infoForAnimalType(aniT);

        if (upgradeType != 2) {
          screenText = wasDowngrade
            ? "You downgraded to " +
            aniInfoO.aniName +
            "! \nDont lose too much xp!"
            : aniInfoO.upgradeText;
          screenTextCol = "white";
          screenTextEndT = +new Date() + 9000;
        }
        //clear out OLD types
        if (!clearedTypesSinceSpawnRequest) {
          clearedTypesSinceSpawnRequest = true;

          dangerAniTypes = Array.apply(null, new Array(100)).map(
            Number.prototype.valueOf,
            0
          );
          edibAniTypes = Array.apply(null, new Array(100)).map(
            Number.prototype.valueOf,
            0
          );
          tailBiteAniTypes = Array.apply(null, new Array(100)).map(
            Number.prototype.valueOf,
            0
          );
          edibleObjTypes = Array.apply(null, new Array(100)).map(
            Number.prototype.valueOf,
            0
          );
        }

        //read dangerous types
        dangerAniTypes = Array.apply(null, new Array(100)).map(
          Number.prototype.valueOf,
          0
        ); //reset
        var cnt = msg.readUInt8();
        for (var J = 0; J < cnt; J++) {
          dangerAniTypes[msg.readUInt8() - 1] = 1; //mark as true (dangerous)
        }
        var old_edibAniTypes = edibAniTypes;
        edibAniTypes = Array.apply(null, new Array(100)).map(
          Number.prototype.valueOf,
          0
        ); //reset
        var cnt = msg.readUInt8();
        for (var J = 0; J < cnt; J++) {
          var aType = msg.readUInt8();
          //console.log("animal type now edible: "+aType);
          edibAniTypes[aType - 1] = 1; //mark as true (dangerous)
         
        }
        tailBiteAniTypes = Array.apply(null, new Array(100)).map(
          Number.prototype.valueOf,
          0
        ); //reset
        var cnt = msg.readUInt8();
        for (var J = 0; J < cnt; J++) {
          tailBiteAniTypes[msg.readUInt8() - 1] = 1; //mark as true (dangerous)
        }
        var old_edibleObjTypes = edibleObjTypes;
        edibleObjTypes = Array.apply(null, new Array(100)).map(
          Number.prototype.valueOf,
          0
        ); //reset
        var cnt = msg.readUInt8();
        for (var J = 0; J < cnt; J++) {
          edibleObjTypes[msg.readUInt8() - 1] = 1; //mark a/mark aass true (dangerous)
        }

        //generate instructions
         //list of GameObjs that are newly edible
              
           
        /// if not battle royal then show
                  //screenIns_objsEdible = [];
                for (t = 0; t < edibleObjTypes.length; t++){
 0   < edibleObjTypes[t] && 0 == old_edibleObjTypes[t] && (
    
 
     anO = GameObjType.createGameObjOfOType( t + 1, 0),
  anO.x = anO.ox = anO.nx = 0,
  anO.y = anO.oy = anO.ny = 0,
  anO.rad=anO.oRad=anO.nRad= 25
//screenIns_objsEdible.push(anO)
 )

 };  
 for (t = 0; t < edibAniTypes.length; t++){
 0   < edibAniTypes[t] && 0 == old_edibAniTypes[t] && (
    
 
     anO = GameObjType.createGameObjOfOType(o_animal, t + 1),
  anO.x = anO.ox = anO.nx = 0,
  anO.y = anO.oy = anO.ny = 0,
  anO.rad=anO.oRad=anO.nRad= 25
  //screenIns_objsEdible.push(anO)
 )

 };
            
        screenIns_drawNewPlayerIns = aniT == a_mouse || aniT == a_shrimp; //draw basic instutions (eat green outlined, avoid red)

        screenIns_EndT = +new Date() + 9000;
        screenIns_A = 0.0;
 if (0 < screenIns_objsEdible.length) {
 for ($s = 1.2, e = 35 * Math.max(0, screenIns_objsEdible.length - 1),
  Qs = e + 20, t = 0; t < screenIns_objsEdible.length; t++) r = screenIns_objsEdible[t], 
  r.x = r.ox = r.nx = 0 - e / 2 + t / Math.max(1, screenIns_objsEdible.length - 1) * e,
   r.y = r.oy = r.ny = 0, r.nRad = 15;
 }
        if (_gameMode != null) _gameMode.setPlayer();
      }
      break;
    case 31: // battle royal msg
      {
        //MsgYouDied  (you died)
        //battleRoyal_serverMessages(msg);
        if (_gameMode != null) _gameMode.main(msg);
      }
      break;
      
 
    case 14:
      {
     
        //MsgYouDied  (you died)
 
        log("@@@@@@@@@@@@@ Player died");
        var deathR = msg.readUInt8();
        var respawnXp = msg.readUInt32();

        if (_gameMode != null) _gameMode.interfaceReset();

        endScreenCanvas = null;
        serverCon_aliveInAGame = false;
        serverCon_spectatingInAGame = true;

        isInArena = false;
        //var respawnXp = msg.readUInt32();
        aniChoice_isOpen = false;
        resetAfk();

        /*
                var stats = readPlayerStats(msg);

                buildEndScreen(stats); */
        /*var wasKillerPl=msg.readUInt8()>0;
                if(wasKillerPl){

                }*/

        // serverCon_aliveInAGame = false;
        //serverCon_spectatingInAGame = true;
        if (deathR == 1) {
          screenText =
            "Oh no, You were eaten! \n Watch out for red-circled players!";
          screenTextCol = "#F1C34C";
          screenTextEndT = +new Date() + 3500;
        } else if (deathR == 2) {
          //tailbite
          screenText = "Oh no, You died from a tail-bite!\n Watch your tail!";
          screenTextCol = "#F1C34C";
          screenTextEndT = +new Date() + 3500;
        } else if (deathR == 4) {
          //thirst
          screenText = "You died of thirst :( Don't let your water run out!";
          screenTextCol = "#F1C34C";
          screenTextEndT = +new Date() + 3500;
        } else if (deathR == 13) {
          //fire
          screenText = "You died from burning! (Get to water when on fire!)";
          screenTextCol = "#F1C34C";
          screenTextEndT = +new Date() + 3500;
        } else if (deathR == 24) {
          // dmgType_battleRoyal_won
          screenText = "You upgraded to monster!!";
          respawnXp = 0;
          screenTextFontSize = 50;
          screenTextCol = "#4AE05E";
            screenTextEndT = +new Date() + 3500;
        } else {
          //default
          screenText = "You died! Watch your health!";
          screenTextCol = "#F1C34C";
          screenTextEndT = +new Date() + 3500;
        }
        
        //console.log("died msg");

        //clear choice interface
        aniChoice_isOpen = false;

        resetAfk(); //dont dc on game end, assume game end is activity

        //refresh banner ad on death
        refreshBannerAds();

        window.setTimeout(function() {
          //show game menu

          if (!serverCon_aliveInAGame) {
            //if didn't press enter to respawn yet

            showMobileAd();

            //show game menu
            //if (gameMode != gameMode_battleRoyal) /// if battle royal then dont show the start button
            //    document.getElementById('startMenuWrapper').style.display = "block";
            setSiteMenuVisible(true);

            //$("#startMenuWrapper").fadeIn(1000);
            //document.getElementById("nickInput").focus();

            //change music back to menu
            //changeMusicTo(menuMusicURL);

            //show text + hide fb if needed
            respawnMsgText =
              respawnXp > 0
                ? "You'll spawn with +" + formatNumK(respawnXp) + " XP!"
                : "";
            respawnMsgA = 0.0;
            var xpLab = document.getElementById("spawnXpLabel");
            xpLab.style.opacity = 0;
            if (respawnMsgText) {
              setTimeout(function() {
                if (!serverCon_aliveInAGame) {
                  //if didnt restart yet
                  xpLab.style.display = "block";
                  xpLab.style.opacity = 1.0;
                  //document.getElementById("spawnXpLabel").style.marginTop = "10px";
          
                }
              }, 1000);
            }
            document.getElementById(
              "spawnXpLabel"
            ).textContent = respawnMsgText;
            //document.getElementById('twitBut').style.display = (respawnMsgText) ? "none" : "block";

            //disable warning
            if (!isMobileApp) window.onbeforeunload = null;
             
          }
        }, 2000);
      
      }
      break;
    case 4:
      {
        // world update

        worldUpdate(msg);
      }
      break;

    case 19:
      {
        // chat
        var id = msg.readUInt32();
        var chatAnim = gameObjsByID[id];
        if (chatAnim) {
          var chatText = msg.readString();
          //console.log("got chat");

          chatAnim.gotChat(chatText);
          
        }
      }
      break;


       case 61: //battleroyalmessages
      {
        var brType = msg.readUInt8();


	      
        switch (brType) {
            
          case 1://br timer
            {
		    

  if (inviteScreenCanvas == null)
    inviteScreenCanvas = document.createElement("canvas");
  if (inviteScreenCanvas == null) return;
  var ctx_ = inviteScreenCanvas.getContext("2d");
  var boardLength = 55;
  var nameH = 40;
  var pad = 5;

  var borad_height = 280;
  var borad_width = 420;
		      boardLength = borad_height;
  inviteScreenCanvas.width = borad_width;
  inviteScreenCanvas.height = boardLength;

		            ctx_.save();
  ctx_.globalAlpha = 0.35;
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(brtimerx, 0, inviteScreenCanvas.width, inviteScreenCanvas.height);
        ctx_.restore();

		    		    console.log(ctx)
              screenText = "Ouch! Your tail got bitten!";
               screenTextCol = "white"; //default color for event
            screenTextFontSize = 25;
        screenTextEndT = timestamp + 3500.0;
            }
            break;

	}
      }
      break;
		  
		  
    case 23: //MsgPersonalGameEvent
      {
        var evType = msg.readUInt8();
        //ignore if dead (dont overwrite message!)
        if (!serverCon_aliveInAGame) return;
        screenTextFontSize = 25;
        screenTextEndT = timestamp + 3500.0;
        screenTextCol = "white"; //default color for event

        switch (evType) {
                                                                                                                   case 249:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "purple"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;
            
                                                                                                       case 250:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "blue"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;
            
                                                                                           case 251:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "green"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;
            
                                                                               case 252:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "yellow"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;

            
                                                                   case 253:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "orange"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;

                                                       case 254:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "red"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;
            
          case 255:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "white"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;
            
            /*
            
                               case 256:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "red"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;
            

            
                               case 257:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "orange"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;
            
                                           case 258:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "yellow"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;
            
                                                       case 259:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "green"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;
        
                                                                   case 260:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "blue"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;
            
                                                                               case 261:
            {
              //custom msg
              screenText = msg.readString();

                screenTextCol = "purple"; //default color for event
            screenTextFontSize = 25;
            }
            
            break;*/
            
          case 2:
            {
              //your player got bitten
              screenText = "Ouch! Your tail got bitten!";
               screenTextCol = "white"; //default color for event
            screenTextFontSize = 25;
            }
            break;
          
        }
      }
      break;
    case 35:
      var which =  msg.readUInt8();
      var time = msg.readUInt32();
        console.log(which,time)
      if(which == 1){
      button_w.abil_rechargeTotalT =  time;
        button_w.abil_rechargeEndT =  Date.now() +  time;
       
      }else{
        
      button_w_mini.abil_rechargeTotalT =  time;
      button_w_mini.abil_rechargeEndT =  Date.now()  + time;
        console.log(time)
      }
      
      
      
      break;
    case 36:
      {  
        abil_dive_isMain =  msg.readUInt8();
        abil_dive_recharging=  msg.readUInt8() ;
        abil_recharging=  msg.readUInt8();

     
      //dive is main ability!
      button_w_mini.abil_usable =  msg.readUInt8();
      button_w_mini.abil_recharging = abil_dive_recharging;
      button_w_mini.abil_possible =  msg.readUInt8();
      button_w_mini.abil_active =  msg.readUInt8();
      button_w_mini.abil_Type =  msg.readUInt8();

      
      
      button_w.abil_usable =  msg.readUInt8();
      button_w.abil_recharging = abil_recharging;
      button_w.abil_possible =  msg.readUInt8();
      button_w.abil_active =  msg.readUInt8();
      button_w.abil_Type =  msg.readUInt8();
        
      //button_w.qabil_Type =  msg.readUInt8();
      //set correct recharging vars for both buttons
    
       
  
      

   
      }
  break;
      
  
    case 50: {
      log("disconnected from AFK!");
      dcedFromAfk = true;
      break;
    }
    case 51: // team mode messages
      {
        if (_gameMode != null) _gameMode.main(msg);
      }
      break;
 case 51: // team mode messages
      {
        if (_gameMode != null) _gameMode.main(msg);
      }
      break;
  case 52:
      {
	      player1v1Requests = [0]
        let req = {};
        req.id = msg.readUInt32()
        req.requestee =  msg.readString();
         req.aniType  =  msg.readUInt8();
        req.wins =  msg.readUInt32();
        req.rank  =  msg.readUInt16();
         req.dur  =  msg.readUInt16();
     
        console.log(req.requestee)
            player1v1Requests.push({
      id: req.id,
      requestee: req.requestee,
      aniType: req.aniType,
      wins: req.wins,
      teamID: 0,
      rank: req.rank,
      dur: req.dur
    });
player1v1Requests.shift();
 buildInviteScreen() 
      }
      break;
		  
    case 53:
      {
       var sound = msg.readString();
var sound_click = getLazyLoadAudio("audio/" + sound + ".mp3");
  if (sound_click) {
    try {
      sound_click.play();
    } catch (err) {}
  }
      }	
      
    case 57:
      {
        player1v1Requests = []
      }
      break;
    case 55: // Msg_1v1Mode_topperInfo
      {
        //top1v1_isSoccer = msg.readUInt8() == 1;
        top1v1_isHistoric = msg.readUInt8() == 1;
        top1v1_wins = msg.readUInt32();
        top1v1_name = msg.readString();



        if (top1v1_isHistoric) top1v1_since = msg.readString();

          buildTopperInfo();
      }
      break;
    case 58: // Msg_customScreenTextFont
      {
        var fontS = msg.readUInt8();
        var msg = msg.readString();

        screenTextEndT = timestamp + 3500.0;
        screenTextCol = "yellow"; //default color for event
        screenText = msg;
        screenTextFontSize = fontS;
      }
      break;
    case 59: // Msg_goalScored
      {
        // var holeX = msg.readUInt16() / 4.0;
        var goalNum = msg.readUInt16();
        var xpGain = msg.readUInt32();
        var scorer = msg.readString();

        screenTextEndT = timestamp + 3500.0;
        screenTextCol = "white"; //default color for event
        screenText =
          "GOAAAL!\n#" + goalNum + "\n\nBONUS XP: " + formatNumK(xpGain);
        screenTextFontSize = 50;
      }
      break;

     
    case 60: // Msg_goalScoredByOther
      {
        var scoredGoal = msg.readString();
        screenTextEndT = timestamp + 3500.0;
        screenTextCol = "white"; //default color for event
        screenText = scoredGoal + "\nSCORED A GOAL!";
        screenTextFontSize = 40;
      }
      break;
   
    case 56: // spectate mode
      {
        //a change in 'spectate mode'- due to pressing the SPECTATE button
        var isSpectateEnabled = msg.readUInt8() == 1;
        if (isSpectateEnabled) {
          console.log("spectate mode enabled!");
          setSiteMenuVisible(false);
          isSpectateMode = true;

          screenTextEndT = timestamp + 3500.0;
          screenTextCol = "white"; //default color for event
          screenText = "SPECTATE MODE";
          screenTextFontSize = 50;

          //create
          if (_gameMode != null) {
            if (homeButton == null) {
              homeButton = new InterfaceButton(0, 0, 120, 50, "BACK", 30);
              homeButton.update = function() {
                this.x = canvasW / 2 - this.w / 2;
                this.y = canvasH * 0.1; //(canvasH / 2) - 250;
              };
              homeButton.visible = true;
              homeButton.onClick = function() {
                //send message to toggle on/off spectate mode
                var mes = new MsgWriter(1);
                mes.writeUInt8(56); // spectateMode
                wsSendMsg(mes);

                setSiteMenuVisible(true);
                //findAndConnectToNearestServer();
              };

              _gameMode.interfaceButtons.push(homeButton);
            }
            var xpLab = document.getElementById("spawnXpLabel");
            xpLab.style.display = "none";
          }
        } else {
          console.log("spectate mode turned off");
          isSpectateMode = false;
          setSiteMenuVisible(true);

          //remove existing home button
          if (homeButton != null) {
            var homeBtn = _gameMode.interfaceButtons.indexOf(homeButton);
            if (homeBtn != -1) {
              _gameMode.interfaceButtons.splice(homeBtn, 1);
            }
            //homeButton.visible = false;
            homeButton = null;
          }
        }
      }
      break;
  }
}

function wsSendMsg(a) {
  ws.send(a.dataView.buffer);
}

function wsIsOpen() {
  return null != ws && ws.readyState == ws.OPEN;
}

function worldUpdate(msg) {
  timestamp = +new Date();
  //console.log("UPD: " + (timestamp - lastUpdT) + " ms ");
  lastUpdT = timestamp;

  worldUpd_readPlayerInfoMessage(msg);

  //console.log("new update--------");

  //FULL info for NEWLY visible objects
  var cnt = msg.readUInt16();
  //  console.log("0: " + cnt)
  //console.log(cnt + " new objects");
  for (var J = 0; J < cnt; J++) {
    //create GameObj with correct subclass for newlyVisible
    var theObj = GameObjType.newlyVis_createGameObjFromMsg(msg);
    var id = theObj.id;
    //read basic data, then
    //theObj.worldUpd_readMsgNewlyVisible(msg);

    //add new gameObj to client

    //bug FIX: may re-see dying object that's not yet removed from list (remove it)
    var delO = gameObjsByID[id]; //delete possible dying object from game
    delete gameObjsByID[id];
    var tmp = gameObjs.indexOf(delO); //remove from game arrays
    if (-1 != tmp) {
      gameObjs.splice(tmp, 1);
    }

    //add to game
    gameObjsByID[id] = theObj;
    gameObjs.push(theObj);

    //theObj.worldUpd_readNewlyVisibleObjMessage(msg);
  }

  // UPDATE info for visible objs(that need upd)
  cnt = msg.readUInt16();
  //console.log("1: " + cnt)
  //console.log(cnt + " visible objects");
  for (var K = 0; K < cnt; K++) {
    var id = msg.readUInt32();

    var theObj = gameObjsByID[id];
    if (theObj) {
      //console.log("Updating obj "+theObj);
      theObj.worldUpd_readMsgUpdate(msg);
    } else {
      console.log("Error: Updated GameObj id " + id + " doesn't exist!");
    }
  }

  //removed Objects
  cnt = msg.readUInt16();
 // console.log("2: " + cnt)
  //console.log(cnt + " dead objects");
  for (var L = 0; L < cnt; L++) {
    //  var deadidPlusFlag = msg.readUInt32();
    var deadid = msg.readUInt32(); //bit_get(deadidPlusFlag, 32)
    var theObj = gameObjsByID[deadid];

    if (theObj) {
      theObj.worldUpd_readMsgRemovedObj(msg);
    } else {
      console.log("Error: Removed GameObj id " + id + " doesn't exist!");
    }
  }

  // read safe area info here
  if (_gameMode != null) _gameMode.worldUpdate(msg);
}//end world update

//read player info (eg. like camera, interface #s)
function worldUpd_readPlayerInfoMessage(msg) {
  camx_o = camx;
  camy_o = camy;
  camx_n = msg.readUInt16() / 4.0;
  camy_n = msg.readUInt16() / 4.0;
  camzoom_n = msg.readUInt16() / 1000.0;
  isDevMode = msg.readUInt8(); //water/air/lava bar %
//  if (gameMode == "none BOYEEEEE") teamID = msg.readUInt8();

  if (instantSetCamNextUpd) {
    instantSetCamNextUpd = false;
    camx = camx_n;
    camy = camy_n;
    camzoom = camzoom_n;
  }

/*
  var flags = msg.readUInt8();

  var specator = bit_get(flags, 0);
  var abil_possible = bit_get(flags, 1); //animal ability possible

  var abil_dive_possible = bit_get(flags, 2); //dive possible (in water)
  abil_dive_isMain = bit_get(flags, 3);
  isAirBar = bit_get(flags, 7);

  if (!specator) {
    //animal ability
    var abil_usable = (abil_recharging = abil_active = false);
    var abil_type = ability_none;
    if (abil_possible) {
      //animal ability vars
      abil_usable = bit_get(flags, 4);
      abil_recharging = bit_get(flags, 5);
      abil_active = bit_get(flags, 6);

      abil_type = msg.readUInt8();
    }

    //dive ability
    var abil_dive_usable = (abil_dive_recharging = abil_dive_active = false);
    if (abil_dive_possible) {
      var diveFlags = msg.readUInt8();
      abil_dive_usable = bit_get(diveFlags, 0);
      abil_dive_recharging = bit_get(diveFlags, 1);
      abil_dive_active = bit_get(diveFlags, 2);
    }

    if (abil_dive_isMain) {
      //dive is main ability!
      button_w_mini.abil_usable = abil_usable;
      button_w_mini.abil_recharging = abil_recharging;
      button_w_mini.abil_possible = abil_possible;
      button_w_mini.abil_active = abil_active;
      button_w_mini.abil_Type = abil_type;

      button_w.abil_usable = abil_dive_usable;
      button_w.abil_recharging = abil_dive_recharging;
      button_w.abil_possible = abil_dive_possible;
      button_w.abil_active = abil_dive_active;
      button_w.abil_Type = ability_dive;
      //set correct recharging vars for both buttons
      if (abil_dive_recharging) {
        button_w.abil_rechargeTotalT = abil_dive_rechargeTotalT;
        button_w.abil_rechargeEndT = abil_dive_rechargeEndT;
      }
      if (abil_recharging) {
        button_w_mini.abil_rechargeTotalT = abil_rechargeTotalT;
        button_w_mini.abil_rechargeEndT = abil_rechargeEndT;
      }
    } else {
      //regular ability main
      button_w.abil_usable = abil_usable;
      button_w.abil_recharging = abil_recharging;
      button_w.abil_possible = abil_possible;
      button_w.abil_active = abil_active;
      button_w.abil_Type = abil_type;

      button_w_mini.abil_usable = abil_dive_usable;
      button_w_mini.abil_recharging = abil_dive_recharging;
      button_w_mini.abil_possible = abil_dive_possible;
      button_w_mini.abil_active = abil_dive_active;
      button_w_mini.abil_Type = ability_dive;

      //set correct recharging vars for both buttons
      if (abil_recharging) {
        button_w.abil_rechargeTotalT = abil_rechargeTotalT;
        button_w.abil_rechargeEndT = abil_rechargeEndT;
      }
      if (abil_dive_recharging) {
        button_w_mini.abil_rechargeTotalT = abil_dive_rechargeTotalT;
        button_w_mini.abil_rechargeEndT = abil_dive_rechargeEndT;
      }
    }




      // && gameMode == gameMode_teamMode)
      var aniFlags = msg.readBitGroup();
      can1v1 = aniFlags.getBool();

          if (aniTier >= 14) {
can1v1 = true
      } else {
can1v1 = false
      }
      if (can1v1) {
        show1v1Button = aniFlags.getBool();
        isInArena = aniFlags.getBool();
      if (aniTier >= 14) {
show1v1Button = true
      } else {
show1v1Button = false
      }
        //show1v1Button = msg.readUInt8() == 1;
      }

      if (can1v1)
        if (isInArena) {
          aniChoice_isOpen = false;
          player1v1Requests = [];
        } else {
          player1v1ArenaWins = msg.readUInt8();
          var count1v1 = msg.readUInt8();
          player1v1Requests = [];
          if (count1v1 > 0) {
            for (i = 0; i < count1v1; i++) {
              var id = msg.readUInt8();
              var fromPlayer = msg.readString();
              var aniType = msg.readUInt8();
              var totalWins = msg.readUInt8();
              var _teamID = msg.readUInt8();
              var rank = msg.readUInt8();
              var kills = msg.readUInt8();
              var reqDur = msg.readUInt16() / 100;
              var new1v1Req = {
                id: id,
                requestee: fromPlayer,
                aniType: aniType,
                wins: totalWins,
                teamID: _teamID,
                rank: rank,
                kills: kills,
                dur: reqDur
              };
              player1v1Requests.push(new1v1Req);
            }
          }
        }
*/
      waterBarPerc_n = msg.readUInt8(); //water/air/lava bar %
      pressureBarPerc_n = msg.readUInt8();
      animalBarType = msg.readUInt8(); // new bar type
      var newXP = msg.readUInt32();
      var aniTier = msg.readUInt32();
   	if (aniTier >= 14) {
      can1v1 = true
	} else {
      can1v1 = false
	}
      xp = newXP;
         interface_onXPAmountUpdate(newXP, xp); //for XP popup
      var aa2aa2 = xp - lastxp
      var aa2aa21 = xpNextAni - lastxp
      xpPer_n = msg.readUInt8();
      xpPer_n = aa2aa2/aa2aa21 * 100
      if (xpPer_n < 0) {
        xpPer_n = 0
      }
        if (xpPer_n > 100) {
        xpPer_n = 100
      }
var abil_Type = msg.readUInt8();
  //}
}

function readPlayerStats(msg) {
  var stats = [];
  //stats.totalPlayers = msg.readUInt16();
  stats.rank = msg.readUInt16();
  stats.topRank = msg.readUInt16();
  stats.timeAlive = msg.readUInt16(); // in seconds
  stats.totalKills = msg.readUInt16();
  //stats.totalWins = msg.readUInt16();
  stats.maxXP = msg.readUInt32();
  /*
    stats.nextRespawnStartXP = msg.readUInt32();
    stats.nextRespawnBoostTimeoutT = msg.readUInt32();
    stats.lastDieAnimalType = msg.readUInt16();
    */
  return stats;
  //playerData[0].wins = topPlayerWins;
}

var endScreenCanvas = null;
var endScreenY = 0;
function buildEndScreen(stats) {
  endScreenY = canvasH * 0.6;
  if (endScreenCanvas == null)
    endScreenCanvas = document.createElement("canvas");

  var ctx_ = endScreenCanvas.getContext("2d");
  var boardLength = 55;
  var nameH = 40;
  var pad = 5;

  var borad_height = 200;
  var borad_width = 420;

  boardLength = borad_height + pad * 2;
  endScreenCanvas.width = borad_width + pad * 2;
  endScreenCanvas.height = boardLength;
  ctx_.globalAlpha = 0.2;
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(0, 0, endScreenCanvas.width, endScreenCanvas.height);
  ctx_.fillStyle = "#000000";
  ctx_.fillRect(
    pad,
    pad,
    endScreenCanvas.width - pad * 2,
    endScreenCanvas.height - pad * 2
  );
  var y = 55 + pad;

  ctx_.globalAlpha = 1;
  ctx_.fillStyle = "#FFFFFF";
  ctx_.font = "30px Arial";

  var str = "YOU DIED!"; //"Top Players";
  ctx_.font = "30px Arial";
  ctx_.fillText(
    str,
    endScreenCanvas.width / 2 - ctx_.measureText(str).width / 2,
    y
  );

  ctx_.font = "20px Arial";
  y += 45;
  str = "You were #" + stats.rank; // + " out of " + stats.totalPlayers + " players";
  ctx_.fillText(
    str,
    endScreenCanvas.width / 2 - ctx_.measureText(str).width / 2,
    y
  );

  y += 40;
  var result = secToTime(stats.timeAlive);

  var x = pad + 15;
  drawLabelValueOn(ctx_, "Time Alive", result, x, y);
  x += 210;
  drawLabelValueOn(ctx_, "Total Kills", stats.totalKills, x, y);
  y += 40;
  x = pad + 15;
  drawLabelValueOn(ctx_, "Top rank", stats.topRank, x, y);
  x += 210;
  drawLabelValueOn(ctx_, "Max XP", formatNumK(stats.maxXP), x, y);
}

//curRelX, curRelY are the current obj's translated pos (if drawing within GameObj, otherwise, 0,0 for global)
function fillGrid(x1, y1, x2, y2, curRelX, curRelY) {
  if (options_lowGraphics) return;
  //console.log(ctx.shadowBlur);

  ctx.save();

  //culling: only draw part of grid that's visible on-screen!
  //calc edge x/ys of screen, limit grid to be within screen
  var oldFillW = x2 - x1;
  var oldFillH = y2 - y1; //for grid to move around
  var testBuffer = 0;
  var scrHalfW = canvasW / 2 / camzoom; //(canvasW/pixelRat)/2; //in game coords
  var scrHalfH = canvasH / 2 / camzoom;
  x1 = Math.max(x1, camx - scrHalfW - curRelX + testBuffer); //convert to local obj coords
  y1 = Math.max(y1, camy - scrHalfH - curRelY + testBuffer);
  x2 = Math.min(x2, camx + scrHalfW - curRelX - testBuffer);
  y2 = Math.min(y2, camy + scrHalfH - curRelY - testBuffer);

  ctx.strokeStyle = "black"; //showDarkTheme ? ""#AAAAAAA" : "#000000";
  //  ctx.lineWidth=2.0;
  ctx.globalAlpha = 0.055;

  //ctx.scale(camzoom, camzoom);
  var gSize = 30; //size of squares
  var fillW = x2 - x1; //canvasW / camzoom,
  fillH = y2 - y1; //canvasH / camzoom;

  for (
    var dx = -0.5 + x1 + ((oldFillW - x1) % gSize);
    dx < x1 + fillW;
    dx += gSize
  ) {
    //console.log("drawing v line: x:"+dx);
    ctx.beginPath();
    ctx.moveTo(dx, y1);
    ctx.lineTo(dx, y1 + fillH);
    ctx.stroke();
  }
  for (
    dy = -0.5 + y1 + ((oldFillH - y1) % gSize);
    dy < y1 + fillH;
    dy += gSize
  ) {
    ctx.beginPath();
    ctx.moveTo(x1, dy);
    ctx.lineTo(x1 + fillW, dy);
    ctx.stroke();
  }
  ctx.restore();
}

function drawGameObjects() {
  //console.log("Drawing game objects");
  var objsToDraw = gameObjs.slice();

  //pull out/organize certain objs that are batch-drawn
  var batchedObjTypes = [o_hill, o_rockHill, o_lavaLake, o_bog, o_safeArea];
  var batchedObjGroupsByOType = {};
  for (var i = 0; i < batchedObjTypes.length; i++) {
    var newBatchO = new GameObjBatchDraw();
    batchedObjGroupsByOType[batchedObjTypes[i]] = newBatchO;
    objsToDraw.push(newBatchO); //add as a special 'gameObj' that draws inner objs as a batch
  }

  //sort objs for batching (pull out objs from normal draw, add into GameObjBatchDraw obj)
  for (d = objsToDraw.length - 1; d >= 0; d--) {
    //iterate backwards to allow removing
    var anObj = objsToDraw[d];

    for (e = 0; e < batchedObjTypes.length; e++) {
      var aBatchedT = batchedObjTypes[e];
      //console.log("vs kind: "+aProp);
      if (aBatchedT == anObj.oType && !(anObj instanceof GameObjBatchDraw)) {
        //add to matching GameObjBatchDraw obj, to be drawn in correct order
        batchedObjGroupsByOType[aBatchedT].addBatchedObj(anObj);
        //remove from draw array
        objsToDraw.splice(d, 1);
        break;
      }
    }
  }
  //console.log("Drawing objs: "+objsToDraw);

  //sort game objects (for drawing)
  remGameObjs = []; //objs to delete this loop
  for (d = 0; d < objsToDraw.length; d++) {
    objsToDraw[d].updateZ();
  }
  objsToDraw.sort(function(a, b) {
    return a.z == b.z ? a.id - b.id : a.z - b.z;
  });

  var customInterfaceObjList = [];
  for (d = 0; d < objsToDraw.length; d++) {
    var anObj = objsToDraw[d];
    if (anObj.customInterfaceDraw) customInterfaceObjList.push(anObj);
    else anObj.draw();
  }

  if (_gameMode != null) _gameMode.drawCustomObjs(customInterfaceObjList);
  /*
    if (typeof gameMode_interfaceDrawCustomObjects === "function")
        gameMode_interfaceDrawCustomObjects()
        */
  //draw (top Z) animal chat
  if (!options_noNames)
    for (d = 0; d < objsToDraw.length; d++) {
      if (typeof objsToDraw[d].chatLines != "undefined")
        //gameObjs[d].oType == o_animal || gameObjs[d].oType == o_hidingHole || gameObjs[d].oType == o_bigHidingHole)
        objsToDraw[d].drawChat();
    }

  //trackAnimals();

  //remove deleted objs from draw list
  for (d = 0; d < remGameObjs.length; d++) {
    var delO = remGameObjs[d];
    if (gameObjsByID.hasOwnProperty(delO.id)) delete gameObjsByID[delO.id];
    //remove from array
    var tmp = gameObjs.indexOf(delO);
    if (-1 != tmp) {
      gameObjs.splice(tmp, 1);
    }
    //console.log("fully delete obj " + delO.id);
  }

  //updateSnowFlakes();
  //drawSnowFlakes();
  return objsToDraw;
}

var testTime = +new Date();

function drawGame(currentTime) {
  timestamp = +new Date();

  window.requestAnimationFrame(drawGame);

  /*ctx.watch("globalAlpha", function(prop,oldval,newval){
        //Your code
        console.log("@@@changed op to "+newval);
        var err = new Error();
        console.log(err.stack);
        console.log("/@@@");
        return newval;
    });

    console.log("----------------------------> start op "+ctx.globalAlpha);

    var native = ctx.restore;

    ctx.restore = function(){
        console.log('restoring...');
        native.apply(ctx, arguments);
        console.log('op now '+ctx.globalAlpha);
    };*/

  /*ctx.watch("restore", function(prop,oldval,newval){
        //Your code
        console.log("@@@restored op to "+ctx.globalAlpha);
        var err = new Error();
        console.log(err.stack);
        console.log("/@@@");
        return newval;
    });*/

  //firefox bug fix
  if (ctx.globalAlpha != 1.0) {
    ctx.setTransform(1, 0, 0, 1, 0, 0); //resets transform
    ctx.globalAlpha = 1.0;
  }

  ctx.clearRect(0, 0, canvasW, canvasH);

  //interpolate cam (much smoother with interp vs. 1/X ease)
  var lerpICam = 0.2; //lerpI; //ag@r is 0.125.125 @ 2 25fps
  var a = (timestamp - lastUpdT) / 1000 / lerpICam;
  a = 0 > a ? 0 : 1.0 < a ? 1.0 : a; //clamp from 0-1
  camx = a * (camx_n - camx_o) + camx_o; //* 0.1
  camy = a * (camy_n - camy_o) + camy_o; //+= (camy_n - camy) * 0.1;*/
  camzoom = (25 * camzoom + camzoom_n) / 26.0;

  calcMouseCoords(); //keep mouse pos updates as camera moves

  /////////////////draw camera-scaled game!
  ctx.save();
  var xMid = canvasW / 2.0; //scale canvas for camera pos
  var yMid = canvasH / 2.0;
  ctx.translate(
    xMid * (1.0 - camzoom) + (xMid - camx) * camzoom,
    yMid * (1.0 - camzoom) + (yMid - camy) * camzoom
  );
  ctx.scale(camzoom, camzoom);

  //draw game bounds rectagles
  ctx.save();
  if (serverFirstConnected) {
  var wid = 10;
    wid = 600;
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = col_outline_land;
    ctx.fillRect(0, 0 - wid, gameW, wid); //top
    ctx.fillRect(0, gameH, gameW, wid); //bottom

    ctx.fillRect(-wid, -wid, wid, gameH + 2 * wid); //left
    ctx.fillRect(gameW, -wid, wid, gameH + 2 * wid); //right
    //ctx.fillRect(0, gameH, gameW , wid); //bottom

    //if(snow) createSnow();
  } else {
    //camx-canvasW/camzoom, camy-canvasH/camzoom, camx+canvasW/camzoom, camy+canvasH/camzoom;
    //console.log(camx+", "+camy);
  fillGrid(
      gameXForScreenX(0),
      gameYForScreenY(0),
      gameXForScreenX(canvasW),
      gameYForScreenY(canvasH),
      0,
      0
    );
  }
  ctx.restore();

  //console.log("NEW DRAW@@@@@@@@@@@@@@@@@@@@@@@@@@");

  drawGameObjects();
  ctx.restore(); // DONE CAMERA DRAWING

  if (serverCon_aliveInAGame) {
    //draw pre-rendeded LeaderBoard
    drawLeaderboard();

    drawMinimap();

    // here draw custom objects on screen if there are any (based on game mode)
    //if (typeof window.gameMode_drawMap === "function") {
    //    //draw danger area on minimap see game mode interface
    //    window.gameMode_drawMap();
    //}

    if (_gameMode != null) {
      //draw danger area on minimap see game mode interface
      _gameMode.drawMap();
    }
  }

  //draw interfaces

  drawGameInterface();
  drawScreenText();
  drawGamePlay();
  if (serverCon_aliveInAGame) displayPlayerStats();
  //draw ad loading txt (when video ad is loading)
  if (videoAdShowLoading) {
    videoAdShowLoadingTXT.setFontSize(28 * interfS);
    //playersOnlTXT.getRenderedCanvas(); //render for latest height!
    videoAdShowLoadingTXT.x = canvasW / 2;
    videoAdShowLoadingTXT.y = canvasH * 0.2;
    //custom draw (space it)
    if (videoAdStartedPlaying)
      videoAdShowLoadingTXT.setText("Game starting after ad...");
    else videoAdShowLoadingTXT.setText("Connecting to game...");

    videoAdShowLoadingTXT.draw();

    //draw loading image
    if (!videoAdStartedPlaying) {
      var loadingX = canvasW / 2;
      var loadingY = canvasH * 0.25 + 120.0 * interfS;
      var theImg = getLoadedImg("skins/mouse.png");
      if (theImg) {
        ctx.save();
        ctx.translate(loadingX, loadingY);

        var rad = this.rad;
        var rotF = (timestamp % 800) / 800.0;
        var imageW = 150;
        ctx.rotate(rotF * Math.PI * 2.0);
        ctx.drawImage(theImg, -imageW / 2, -imageW / 2, imageW, imageW);
        //console.log("drawing banana");

        ctx.restore();
      }
    }
  }

  //draw players online
  if (windowW > 370.0 && !serverCon_aliveInAGame) {
    //ctx.save();
    /*ctx.font = (15.0 * interfS) + "px Arial";
        ctx.lineWidth = 1;
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom"; //vertical center
        if (!options_lowGraphics) {
            ctx.shadowOffsetX = 1;
            ctx.shadowOffsetY = 1;
            ctx.shadowColor = "black";
        }
        ctx.fillStyle = "white";
        ctx.fillText(plOnlineStr, canvasW - 5, canvasH - 2);*/

    //playersOnlTXT.setText(abilityInfo.abilName);

    //draw fps
    if (options_lowGraphics) {
      var tAfterDraw = (fps_framesCount += 1);
      if (timestamp - fps_timeStart > 1000) {
        fps_timeStart = +new Date();
        //fpsText = fps_framesCount + " fps";

        playersOnlTXT.setText(fps_framesCount + " fps");
        fps_framesCount = 0;
        //console.log("fps: (avg. " + (1000 * fps_totalFramesDone / (timestamp - fps_startTime)) + ")");
      }
      fps_totalFramesDone += 1;
      //ctx.fillText(fpsText, canvasW - 5, canvasH - 45);
    }

    //ctx.restore();
  }
  showPlayerCount();

  //count fps
}

var playerCountX = canvasW - 150;
var playerCountY = 0;

function showPlayerCount() {
  playersOnlTXT.setFontSize(18 * interfS);

  /*
    ctx.drawImage(miniMapCanvas, canvasW - (10 * pixelRat + miniMapCanvas.width * interfS), , minimapW * interfS, minimapH * interfS);
   */

  if (serverCon_aliveInAGame) {
    playerCountX = canvasW - (20 + playersOnlTXT.width) / 2;
    playerCountY = (minimapH + 25 * pixelRat) * interfS;
  } else {
    playerCountX = canvasW - 5 - playersOnlTXT.width / 2;
    playerCountY = canvasH - 2 - playersOnlTXT.height / 2;
  }

  playersOnlTXT.x = playerCountX;
  playersOnlTXT.y = playerCountY;
  //playersOnlTXT.x = canvasW - 5 - (playersOnlTXT.width / 2);
  //playersOnlTXT.y = canvasH - 2 - (playersOnlTXT.height / 2);
  //custom draw (space it)
  playersOnlTXT.draw();
}
if (window.requestAnimationFrame) {
  window.requestAnimationFrame(drawGame);
} else {
  //older browsers
  setInterval(draw, 1e3 / 60);
}

//  setInterval(updateSnowFlakes, 1E3 / 50);

//joins a game (same as connecting)
var lastJoinTryT = 0;

function joinGame(isSpectator) {
	
  //console.log("===>> @@@@@@ Join game called!");
  if (!wsIsOpen())
    // || serverCon_aliveInAGame) //cant respawn if not dead!
    return;
  //prevent accidental double-joining game
  /*if(!isSpectator){
     var tNow=+new Date();
     if(tNow-lastJoinTryT<100.0)
       return;
     lastJoinTryT=tNow;
   }*/
  const urlParams = new URLSearchParams(window.location.search);
  const developerKey = urlParams.get("devcode");
  if (developerKey != null) {
  let msg = new MsgWriter(500)
msg.writeUInt8(99)
msg.writeString(developerKey)
wsSendMsg(msg)
  }
    let msg2 = new MsgWriter(500)
msg2.writeUInt8(98)
msg2.writeString(sessiontoken)
wsSendMsg(msg2) 
  
  playerName = nickInput.value.replace(/(<([^>]+)>)/gi, "").substring(0, 20);
  //measure msg length
  //if (KTestingModeON)
  var url = new URL(window.location.href);
  var nick = url.searchParams.get("nick");
  
  if (nick && nick.length > 0) {
    nick = "#" + nick + "$";
    playerName = nick;
  }
  // ?
 
  var msgLen = 9 + encode_utf8(playerName).length + 1 + encode_utf8(developerKey).length + 5;
  var mes = new MsgWriter(msgLen);
  mes.writeUInt8(2); //MSGTYPE join GAME
  mes.writeString(playerName);
  mes.writeUInt16(canvasW); //client size (w, h)
  mes.writeUInt16(canvasH);
  mes.writeUInt8(isSpectator ? 1 : 0);
  //mes.writeString(developerKey);
  wsSendMsg(mes);


  if (nick && nick.length > 0) playerName = "mope2.io/1v1";
  //save name locally
  if (!isSpectator) {
    //dont save name if it's blank
    if (window.localStorage) {
      try {
        window.localStorage.setItem("nick", playerName + "");
      } catch (err) {} //no localStorage
    }
  }
  //save types request
  //clearedTypesSinceSpawnRequest=false;

  /*for (var i = 0; i < window.localStorage.length; i++) {
       console.log("[" + window.localStorage.key(i) + "] :" + window.localStorage.getItem(window.localStorage.key(i)));
   }*/
}

//INTERFACE

function onVideoAdPlaying() {
  /**
   * If battle royal mode, then ensure spawn of the player in game if video ad is playing and battle started before joing of this player
   * this message will ensure current player to  join in the battle
   */
  //  if (gameMode == gameMode_battleRoyal && gameState != battleRoyal_inProgress) {
  var mes = new MsgWriter(2);
  mes.writeUInt8(57); //Msg_isViewingVideoAd
  wsSendMsg(mes);
  //  }
}

function playPressed() {
	console.log("play pressed")
   
  

  
  var theDom = document.getElementById("optionsDiv");
  theDom.style.display = "none";

  if (isSpectateMode) return;
  resetAfk();

  //play sound (if not muted)
  var sound_click = getLazyLoadAudio("audio/click.mp3");
  if (sound_click) {
    try {
    //  sound_click.play();
    } catch (err) {}
  }
  
  console.log(serverConnected)

  if (videoAdIsPlaying || !serverConnected)
    //block early press enter to restart (when ad playing, but technically not ingame)
    return;

  //show ad if needed

  if (shouldShowVideoAd()) {
    playVideoAd();
  } else {
    //not showing an ad

    joinGame(false); //true=spectate only
  }
}

document.getElementById("startButton").onclick = playPressed;


document.getElementById("btnSpectate").onclick = function() {
 
  
  if (!isSpectateMode) {
    //send message to toggle on/off spectate mode
    var mes = new MsgWriter(1);
    mes.writeUInt8(56); // spectateMode
    wsSendMsg(mes);
  }
};

/*document.getElementById("brButton").onclick = function() {
  //play sound (if not muted)
  var sound_click = getLazyLoadAudio("audio/click.mp3");
  if (sound_click) {
    try {
      sound_click.play();
    } catch (err) {}
  }

  //will get best BR server, will auto-join it when it is gotten
  masterServer_getBestBRServer(
    //callback func (once gets a reply from master server!)
    function(bestServerIP, noValidServer) {
      if (!noValidServer) gameServerConnectForIP(bestServerIP, true);
      else console.log("No valid BR server is available!");
    }
  );
};*/

var chatOpen = false;
var ESC_down = false;

document.onkeydown = function(ev) {
  resetAfk();

  //console.log("key down");
  var key = ev.keyCode || ev.which;
  //console.log("key down " + key);

  if (!chatOpen && serverCon_aliveInAGame) {
    switch (key) {
      case 32:
        {
          //SPACE- left click
          ev.preventDefault();
          controlsPressEvent(cNum_leftClick, true); //1= left click
        }
        break;
      case 81:
        {
          //Q- right click
          ev.preventDefault();
          controlsPressEvent(cNum_keyQ, true); //1= left click
        }
        break;
      case 87:
        {
          //W- right click
          ev.preventDefault();
          controlsPressEvent(cNum_rightClick, true); //1= left click
        }
        break;

      case 83:
        {
          //S
          ev.preventDefault();
          controlsPressEvent(cNum_watershoot, true); //1= left click
        }
        break;

      case 27:
        {
          //ESC to stay still
          if (KTestingModeON || isDevMode) {
            ev.preventDefault();
            ESC_down = !ESC_down;

            showScreenTextWithDur(
              "Movement Lock (ESC KEY): " + (ESC_down ? "ON" : "OFF"),
              2500
                
            );
            screenTextCol = "white"; //default color for event
            screenTextFontSize = 25;
          }
        }
        break;
      case 69:
        {
          ev.preventDefault();
          controlsPressEvent(cNum_keyE, true); //1= left click
        }
        break;
      case 68:
        {
          ev.preventDefault();
          controlsPressEvent(cNum_keyD, true); //1= left click
        }
        break;
    }
  }
};
document.onkeyup = function(ev) {
  //console.log("key up");
  var key = ev.keyCode || ev.which;
  //console.log("key up " + key);

  //enable pressing enter to play
  if (key == 13) {
    if (!serverCon_aliveInAGame && !aniChoice_isOpen) {
      document.getElementById("startButton").click();
      return;
    }

    if (aniChoice_isOpen) {
      //enter to choose default animal (on spawning or upgrading)
      aniChoiceButtonClicked(aniChoice_choiceButtons[0]);
      return;
    }
  }

  if (serverCon_aliveInAGame) {
    var key = ev.keyCode || ev.which;
    //console.log("up " + key);
    //console.log("typed; " + document.getElementById("chatinput").value);
    //enter (can be during chat)

    if (key == 13) {
      //open chat
      toggleChatOpen();
      return;
    }

    if (!chatOpen && serverCon_aliveInAGame) {
      switch (key) {
        case 32:
          {
            //space to run
            ev.preventDefault();
            controlsPressEvent(cNum_leftClick, false); //1= left click
          }
          break;
      case 81:
        {
          //Q- right click
          ev.preventDefault();
          controlsPressEvent(cNum_keyQ, false); //1= left click
        }
        break;
        case 87:
          {
            //sW
            ev.preventDefault();
            controlsPressEvent(cNum_rightClick, false); //1= left click
          }
          break;

        case 38:
          {
            //up arrow
            ev.preventDefault();
            controlsPressEvent(cNum_SBupgrade, false); //1= left click
          }
          break;

        case 40:
          {
            //down arrow
            ev.preventDefault();
            controlsPressEvent(cNum_SBdowngrade, false); //1= left click
          }
          break;
        case 69:
          {
            //W- right click
            ev.preventDefault();
            controlsPressEvent(cNum_keyE, false); //1= left click
          }
          break;
        case 68:
          {
            //W- right click
            ev.preventDefault();
            controlsPressEvent(cNum_keyD, false); //1= left click
          }
          break;
      }
    }
  }
};

//smart-toggle show/hide chat (sends chat on hide)
function toggleChatOpen() {
  if (!isDevMode) if (_gameMode != null && !_gameMode.chatAllowed) return;
  var chatInp = document.getElementById("chatinput");

  if (!chatOpen && serverCon_aliveInAGame) {
    //console.log("opening chatbox");
    //open chat
    chatInp.style.visibility = "visible";
    chatInp.focus();
    chatOpen = true;

    //set onclose block
    chatInp.onblur = function() {
      if (chatOpen)
        //close/send on blur
        toggleChatOpen();
    };
  } else if (chatOpen) {
    //close chat + send!
    //console.log("closing chatbox");
    var chatTxt = chatInp.value + "";
    chatOpen = false;
    chatInp.style.visibility = "hidden";
    chatInp.blur(); //dont call onblur this time!

    if (chatTxt.length > 0 && serverCon_aliveInAGame && !this.flag_invisible) {
      console.log("chatted: " + chatTxt);
               console.log(this.flag_DevMode);

      //chatTxt = chatTxt.substring(0, 35)
      
      //send chat msg
      newMsg = new MsgWriter(3 + encode_utf8(chatTxt).length);
      newMsg.writeUInt8(19); //chat msg
      newMsg.writeString(chatTxt);
      wsSendMsg(newMsg);
    }
    chatInp.value = "";

    //chatInp.onblur = null; //reset onblur
  }
}

window.onresize = onResize;

var windowW = 100;
var windowH = 100; //fast to get
function onResize() {
  windowW = window.innerWidth; //these seem to be very costly on android
  windowH = window.innerHeight;

  buildInviteScreen();

  if (isMobileAppIOS) {
    //bug fix for mobile safari
    windowW = document.body.clientWidth;
    windowH = document.body.clientHeight;
  }
  //console.log("ClientH "+document.body.clientHeight+" vs windowH "+window.innerHeight);

  pixelRat = window.devicePixelRatio;
  //window.scrollTo(0, 0);
  canvasW = windowW * pixelRat;
  canvasH = windowH * pixelRat;

  //console.log("window resized to " + canvasW + "," + canvasH);
  canvas.width = canvasW;
  canvas.height = canvasH;
  canvas.style.width = windowW + "px";
  canvas.style.height = windowH + "px";

  //interface scale factor
  //interfS = Math.max(canvasW / (1920 * 0.7), canvasH / (1080 * 0.7));
  //console.log("interface scale factor 1) "+interfS);
  //interfS = Math.min(1.0, Math.max(0.4, interfS));
  interfS = 0.85 * pixelRat * Math.max(windowW / 1920, windowH / 1080);
  //console.log("interface scale factor 2) "+interfS+" pixelRat "+pixelRat);
  /*if (Math.min(windowW, windowH) < 700) {
       interfS *= Math.min(windowW, windowH)/700; //shirk interface further on tiny screens
   }*/

  //move chat area to middle of screen
  var chatInp = document.getElementById("chatinput");
  chatInp.style.marginTop = windowH / 2 - 50 + "px";
 //reposition buttons (in ORDER!)
  var buttonF = isTouchEnabled && windowH < 500 ? 1.4 : 1.0; //bigger buttons on small mobile screens
  button_run.w = button_run.h = 200 * interfS * buttonF;
  button_w.w = button_w.h = 200 * interfS * buttonF;
  button_w_mini.w = button_w_mini.h = 200 * interfS * buttonF;
    button_w_q.w = button_w_q.h = 200 * interfS * buttonF;

  button_chat.w = 60 * pixelRat * buttonF;
  button_chat.h = 30 * pixelRat * buttonF;

  //resize buttons (in ORDER!)
  button_run.x = 25 * pixelRat * buttonF + button_run.w / 2; //set left border
  button_run.y = canvasH - (40 * pixelRat + button_run.w / 2); //from bottom of button
  if (options_leftHanded) {
    button_run.x = canvasW - button_run.x;
  }
  //console.log("left handed? "+options_leftHanded);

  button_w.x = button_run.x; //set left border
  if (!isTouchEnabled) {
    button_w.y = button_run.y; //lower W when touch is disabled (as run button isnt available without touch)
  } else
   button_w.y =
      button_run.y -
      (10 * pixelRat * buttonF + button_w.w / 2 + button_run.w / 2); //above button 'runbutton'
  button_w_mini.x = button_run.x;
  button_w_mini.y =
    button_w.y -
    (10 * pixelRat * buttonF + button_w_mini.w / 2 + button_w.w / 2);
  
    button_w_q.x = button_run.x;
  button_w_q.y =
    button_w.y -
    (10 * pixelRat * buttonF + button_w_q.w / 2 + button_w.w / 2);

  button_chat.x = Math.min(
    canvasW / 2.0 + 100 * pixelRat * buttonF,
    canvasW * 0.8
  ); //canvasW / 2; //on middle-top
  button_chat.y = 15 * pixelRat + button_chat.h / 2;

  

  
  button_sKey.setPosAndSize(
    button_chat.x - (button_chat.w / 2 + 10 * pixelRat * buttonF),
    button_chat.y,
    60 * pixelRat * buttonF,
    30 * pixelRat * buttonF,
    1.0,
    0.5
  );
button_q.setPosAndSize(
    button_run.x + button_w.w + 10 * pixelRat * buttonF,
    button_run.y - 15,
    60 * pixelRat * buttonF,
    30 * pixelRat * buttonF,
    0.5,
    0.0
  );

  

      button_q.w = button_q.h = 200 * interfS * buttonF;
  
  button_SBdowngrade.setPosAndSize(
    button_sKey.x,
    button_sKey.y + button_sKey.h / 2 + 10 * pixelRat * buttonF,
    60 * pixelRat * buttonF,
    30 * pixelRat * buttonF,
    0.5,
    0.0
  );
  
    button_SBupgrade.setPosAndSize(
    button_sKey.x + 105,
    button_sKey.y + button_sKey.h / 2 + 10 * pixelRat * buttonF,
    60 * pixelRat * buttonF,
    30 * pixelRat * buttonF,
    0.5,
    0.0
  );
  
  //update visibility of buttons
  for (var k = 0; k < allTouchButtons.length; k++) {
    var aTouchBut = allTouchButtons[k];
    aTouchBut.visible = isTouchEnabled; //buttons only show up when touch on
    //console.log("touchenabled "+isTouchEnabled);
  }
  button_w.visible = true;
 button_q.visible = true;
  button_w_mini.visible = true; //always drawn

  button_sKey.visible = button_sKey.touchEnabled = isTouchEnabled;
  button_SBdowngrade.visible = button_SBdowngrade.touchEnabled =
    isTouchEnabled && KTestingModeON;

  //send message about resize
  if (wsIsOpen()) {
    mes = new MsgWriter(5);
    mes.writeUInt8(17);
    mes.writeUInt16(canvasW); //client size (w, h)
    mes.writeUInt16(canvasH);
    wsSendMsg(mes);
  }

  if (_gameMode != null) _gameMode.onResize();
}

//game control was pressed/released (could be by key press, mouse, etc)
//key stands for action button
var cNum_leftClick = 1,
  cNum_rightClick = 2,
  cNum_SBupgrade = 3,
  cNum_SBdowngrade = 4,
  cNum_watershoot = 5,
  cNum_keyD = 6,
  cNum_keyE = 7;
  cNum_keyQ = 8;

function controlsPressEvent(cNum, isNowPressed) {
  switch (cNum) {
    case cNum_leftClick:
      {
        //clicked left
        if (controls_leftClicked != isNowPressed)
          if (wsIsOpen() && serverCon_aliveInAGame) {
            //key changed
            if (isNowPressed) sendMouseCoords(); //send mouse coords for accurate water shooting
            var mes = new MsgWriter(2);
            mes.writeUInt8(21); //MSGTYPE sendLeftClick
            mes.writeUInt8(isNowPressed ? 1 : 0); //1=down, 0=up
            wsSendMsg(mes);
          }
        controls_leftClicked = isNowPressed;
      }
      break;
      
          case cNum_rightClick:
      {
        //clicked left
        if (controls_rightClicked != isNowPressed)
          if (wsIsOpen() && serverCon_aliveInAGame) {
            //key changed
            if (isNowPressed) sendMouseCoords(); //send mouse coords for accurate water shooting
            var mes = new MsgWriter(2);
            mes.writeUInt8(20); //MSGTYPE 20 =right, 21=left
            mes.writeUInt8(isNowPressed ? 1 : 0); //1=down, 0=up
            wsSendMsg(mes);
            //  console.log("RIGHT click DOWN sent");
          }
        controls_rightClicked = isNowPressed;
      }
      break;

    case cNum_keyQ:
      {
           if (cNum_keyQused != isNowPressed)
        if (serverCon_aliveInAGame) {
          var mes = new MsgWriter(2);
          mes.writeUInt8(45);
          mes.writeUInt8(isNowPressed ? 1 : 0); //1=down, 0=up
          wsSendMsg(mes);
          
          cNum_keyQused = isNowPressed
        }
      }
      break;

    case cNum_SBupgrade:
      {
        if ((KTestingModeON || isDevMode) && serverCon_aliveInAGame) {
          var mes = new MsgWriter(1);
          mes.writeUInt8(26);
          wsSendMsg(mes);
        }
      }
      break;
    case cNum_SBdowngrade:
      {
        if ((KTestingModeON || isDevMode) && serverCon_aliveInAGame) {
          var mes = new MsgWriter(1);
          mes.writeUInt8(27);
          wsSendMsg(mes);
        }
      }
      break;
    case cNum_watershoot:
      {
        if (serverCon_aliveInAGame) {
          var mes = new MsgWriter(1);
          mes.writeUInt8(28);
          
          wsSendMsg(mes);
        }
      }

      break;

    case cNum_keyD:
      {
           if (cNum_keyDused != isNowPressed)
        if (serverCon_aliveInAGame) {
          var mes = new MsgWriter(2);
          mes.writeUInt8(30);
          mes.writeUInt8(isNowPressed ? 1 : 0); //1=down, 0=up
          wsSendMsg(mes);
          
          cNum_keyDused = isNowPressed
        }
      }
      break;
    case cNum_keyE:
      {
          if (cNum_keyEused != isNowPressed)
        if (serverCon_aliveInAGame) {
          var mes = new MsgWriter(2);
          mes.writeUInt8(29);
          mes.writeUInt8(isNowPressed ? 1 : 0); //1=down, 0=up
          wsSendMsg(mes);
          
          cNum_keyEused = isNowPressed
        }
      }
      break;
  }
}

//mobile zoom lock
canvas.addEventListener("gesturestart", function(e) {
  //console.log("gesture start!");
  e.preventDefault();
});

function unpressAllTouchButtons() {
  for (var k = 0; k < allTouchButtons.length; k++) {
    var aTouchBut = allTouchButtons[k];
    /*if(aTouchBut.pressed){
           console.log("Button with text "+aTouchBut.buttonTXT+" already PRESSED by touch ID "+aTouchBut.pressedTouchID);
       }*/
    aTouchBut.pressed = false;
    aTouchBut.pressedTouchID = -1;
  }
  joyStickOpen = false; //clear joystick
}

canvas.ontouchstart = function(e) {
  resetAfk();

  //joystick bug fix attempt:
  var currentTouches = e.touches;
  if (currentTouches.length == 1) {
    //if one new touch, clear all buttons!
    console.log("Resetting all buttons (joytick bug fix)");
    unpressAllTouchButtons();
  }

  if (!serverCon_aliveInAGame) {
    //ignore new touches if not in a game
    return;
  }

  //test if a touch pressed button (s)
  for (var i = 0; i < e.changedTouches.length; i++) {
    var touch = e.changedTouches[i];
    //console.log("touch id " + touch.identifier);

    for (var k = 0; k < allTouchButtons.length; k++) {
      var aTouchBut = allTouchButtons[k];

      var newPressed = aTouchBut.testPosHitsButton(
        touch.clientX * pixelRat,
        touch.clientY * pixelRat
      );
      if (newPressed && !aTouchBut.pressed && aTouchBut.touchEnabled) {
        e.preventDefault(); //stop mouse click
        aTouchBut.pressed = true;
        aTouchBut.pressedTouchID = touch.identifier;

        aTouchBut.onButtonTouchStart(); //run button's custom touch event
        return; //only one button can get 'pressed' per touch
      }
    }
  }

  //joystick (if no button pressed)
  if (!options_noJoystick)
    if (!joyStickOpen) {
      //e.preventDefault(); //stop mouse click
      //console.log("joystick start");
      var touch = e.changedTouches[0];

      joyStickOpen = true;
      joystickStartX = touch.clientX * pixelRat;
      joystickStartY = touch.clientY * pixelRat;
      joystickTipX = joystickStartX;
      joystickTipY = joystickStartY;
      joysickTouchID = touch.identifier;
      return;
      //continue;
    }

  //if no buttons touched, place mouse here (tap controls)
  //console.log("touch start");
  rawMouseX = e.touches[0].clientX * pixelRat;
  rawMouseY = e.touches[0].clientY * pixelRat;
  calcMouseCoords();
};

//great guide https://bencentra.com/code/2014/12/05/html5-canvas-touch-events.html
canvas.ontouchmove = function(e) {
  //
  //console.log("touch move!");

  resetAfk();
  //prevent pinch to zoom!
  e.preventDefault();
  //}

  //console.log("touch changed: " + e.changedTouches.length);
  for (var i = 0; i < e.changedTouches.length; i++) {
    var touch = e.changedTouches[i];

    if (touch.identifier == button_w.pressedTouchID) {
      //enable sliding down finger to run button when holding W
      if (button_run.pressedTouchID == -1) {
        var newPressed = button_run.testPosHitsButton(
          touch.clientX * pixelRat,
          touch.clientY * pixelRat
        );
        var oldPressed = button_run.pressed;
        button_run.pressed = newPressed;
        if (newPressed && !oldPressed) {
          controlsPressEvent(cNum_leftClick, true); //just pressed it
        } else if (!newPressed && oldPressed) {
          controlsPressEvent(cNum_leftClick, false); //just pressed it
        }
      }
      continue;
    }
    //ignore movement that started from buttons (unless can slide the touch)
    /*if (touch.identifier != button_w.pressedTouchID && ) {
           continue;
       }*/

    //moved joystick
    if (!options_noJoystick) {
      if (joyStickOpen && touch.identifier == joysickTouchID) {
        var dx = touch.clientX * pixelRat - joystickStartX; //joystick vars are in window coords
        var dy = touch.clientY * pixelRat - joystickStartY;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0) {
          var normal_x = dx / dist;
          var normal_y = dy / dist;
          var distFrac = Math.min(1.0, dist / (joystickRad * pixelRat));

          var adjustedFrac = Math.pow(distFrac, 3);
          if (adjustedFrac < 0.1) adjustedFrac = 0.0;
          var moveDist = 300.0 * pixelRat * adjustedFrac;
          //console.log("joystick moving BY frac " + distFrac + "" + normal_x + " " + normal_y)

          //update arrow angle
          var arrowA = Math.atan2(normal_y, normal_x);
          joystickDirArrowAngle_nDelta = distBetweenAngles(
            joystickDirArrowAngle,
            arrowA
          );
          joystickDistF_n = distFrac;

          joystickTipX =
            joystickStartX + joystickRad * pixelRat * normal_x * distFrac;
          joystickTipY =
            joystickStartY + joystickRad * pixelRat * normal_y * distFrac;

          //add joystick vector (in dir) to camera pos (game coords) (assumed to be = player pos)
          //assume middle of screen=camera pos

          (rawMouseX = canvasW / 2 + normal_x * moveDist),
            (rawMouseY = canvasH / 2 + normal_y * moveDist);
          calcMouseCoords();
          //console.log("camera at " + camx + "," + camy + "  joystick moving to " + rawMouseX + "," + rawMouseY)
        }
        //return; //only process first touch
      }
    } else {
      //no joystick
      rawMouseX = touch.clientX * pixelRat;
      rawMouseY = touch.clientY * pixelRat;
      calcMouseCoords();
    }
  }
};
canvas.ontouchend = function(e) {
  //console.log("touch end!");
  //test if any touch STILL ON pressed buttons

  //if (isTouchEnabled && serverCon_aliveInAGame) {
  //e.preventDefault(); //prevent making mouse click?

  for (var i = 0; i < e.changedTouches.length; i++) {
    var touch = e.changedTouches[i];

    if (joyStickOpen && touch.identifier == joysickTouchID) {
      //closed joyStick
      joyStickOpen = false;
      joysickTouchID = -1;
      continue;
    }

    for (var k = 0; k < allTouchButtons.length; k++) {
      var aTouchBut = allTouchButtons[k];
      if (
        aTouchBut.pressed &&
        aTouchBut.pressedTouchID == touch.identifier &&
        aTouchBut.touchEnabled
      ) {
        //e.preventDefault(); //stop mouse click
        aTouchBut.pressed = false;
        aTouchBut.pressedTouchID = -1;

        if (serverCon_aliveInAGame) aTouchBut.onButtonTouchEnd(); //run button's custom touch event (if in game)

        return; //only one button can get 'released' per touch
      }
    }
  }
};
canvas.ontouchcancel = function(e) {
  //e.preventDefault();
  console.log("touch cancel");
  canvas.ontouchend(e);
};
canvas.ontouchleave = function(e) {
  //e.preventDefault();
  console.log("touch leave");
};

canvas.onmousemove = function(event) {
  //update mouse position
  rawMouseX = event.clientX * pixelRat;
  rawMouseY = event.clientY * pixelRat;
  calcMouseCoords();

  //console.log("mouse move")
  if (!dcedFromAfk)
    //moving mouse doesn't make you rejoin, must click!
    resetAfk();

  //check highlighted buttons
  if (aniChoice_isOpen && timestamp - aniChoice_startT > 650) {
    for (var i = 0; i < aniChoice_choiceButtons.length; i++) {
      var aBut = aniChoice_choiceButtons[i];
      aBut.isHighLighted = aBut.testPosHitsButton(rawMouseX, rawMouseY);
    }
  }

  if (_gameMode != null && _gameMode.interfaceButtons) {
    for (var i = 0; i < _gameMode.interfaceButtons.length; i++) {
      var aBut = _gameMode.interfaceButtons[i];
      if (aBut.isVisible)
        if (aBut.testPosHitsButton(rawMouseX, rawMouseY)) {
          aBut.isHighLighted = true;
          aBut.onMouseMove();
        } else {
          aBut.isHighLighted = false;
        }
    }
  }
  event.preventDefault();
};

canvas.onmousedown = function(event) {
  //console.log("Mouse down");
  resetAfk();
  if (event.which == 1) {
    //LEFT click
    controlsPressEvent(cNum_leftClick, true);
  }

  if (event.which == 3) {
    //RIGHT CLICK
    controlsPressEvent(cNum_rightClick, true);
  }
  //console.log("!!!!!!!!!!!!!!!!!!CLICK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  event.preventDefault();
};
canvas.onmouseup = function(event) {
  //console.log("Mouse up");
  if (event.which == 1) {
    //released left click
    controlsPressEvent(cNum_leftClick, false);

    //check clicked button
    if (aniChoice_isOpen && timestamp - aniChoice_startT > 650) {
      rawMouseX = event.clientX * pixelRat;
      rawMouseY = event.clientY * pixelRat;

      for (var i = 0; i < aniChoice_choiceButtons.length; i++) {
        var aBut = aniChoice_choiceButtons[i];
        if (aBut.testPosHitsButton(rawMouseX, rawMouseY)) {
          aniChoiceButtonClicked(aBut);
          break;
        }
      }
    }
    //button was clicked

    // mope button was clicked
    if (_gameMode != null && _gameMode.interfaceButtons) {
      rawMouseX = event.clientX * pixelRat;
      rawMouseY = event.clientY * pixelRat;

      for (var i = 0; i < _gameMode.interfaceButtons.length; i++) {
        var aBut = _gameMode.interfaceButtons[i];
        if (aBut.isVisible && aBut.testPosHitsButton(rawMouseX, rawMouseY)) {
          aBut.onClick();
          break;
        }
      }
    }
  }
  if (event.which == 3) {
    //RIGHT CLICK
    controlsPressEvent(cNum_rightClick, false);
  }

  event.preventDefault();
  //console.log("prev");
};
//deselected canvas
canvas.onblur = function(event) {
  //'release' all controls
  controlsPressEvent(cNum_leftClick, false);
  controlsPressEvent(cNum_rightClick, false);
};
window.onfocus = function(event) {
  resetAfk();
  //console.log("reset afk");
};

//mouse left the canvas
window.onmouseout = function(evt) {
  if (evt.toElement == null && evt.relatedTarget == null) {
    //'release' all controls
    controlsPressEvent(cNum_leftClick, false);
    controlsPressEvent(cNum_rightClick, false);
  }
};
//diable right click menu
document.oncontextmenu = document.body.oncontextmenu = function() {
  return !serverCon_aliveInAGame;
};

//calc mouse coords in game (based on zoom/cam pos)
function calcMouseCoords() {
  var xMid = canvasW / 2;
  var yMid = canvasH / 2;

  //var game0x = (xMid - camx * camzoom);  (diff from 0x, then just scale mouse diff)
  gameMouseX = (rawMouseX - (xMid - camx * camzoom)) / camzoom; // + (rawMouseX)
  gameMouseY = (rawMouseY - (yMid - camy * camzoom)) / camzoom; //(rawMouseY) / camzoom;
}

function screenXForGameX(gameX) {
  return gameX * camzoom + (canvasW / 2 - camx * camzoom);
}

function screenYForGameY(gameY) {
  return gameY * camzoom + (canvasH / 2 - camy * camzoom);
}

function gameXForScreenX(sX) {
  return (sX - (canvasW / 2 - camx * camzoom)) / camzoom;
}

function gameYForScreenY(sY) {
  return (sY - (canvasH / 2 - camy * camzoom)) / camzoom;
}

//var lastMouseSendT=+new Date();
function sendMouseCoords() {
  //ESC keeps player still
  if (ESC_down) {
    var myPlayer = gameObjsByID[myPlayerID];
    if (myPlayer) {
      gameMouseX = myPlayer.x;
      gameMouseY = myPlayer.y + 2;
    } else {
      return; //dont send coords if in hiding hole
      //gameMouseX=camx;
      //gameMouseY=camy;
   
    
    }
  }

  if (wsIsOpen() && serverCon_aliveInAGame) {
    if (
      Math.abs(lastMouseX - gameMouseX) > 0.1 ||
      Math.abs(lastMouseY - gameMouseY) > 0.1
    ) {
      lastMouseX = gameMouseX; //last sent pos
      lastMouseY = gameMouseY;
      
      
      
      mes = new MsgWriter(7);
      mes.writeUInt8(5); //MSGTYPE
      mes.writeInt16(gameMouseX); // - (myPlayer ? myPlayer.x : camx)); //client size (w, h)
      mes.writeInt16(gameMouseY); // - (myPlayer ? myPlayer.y : camy));
      //mes.writeUInt8(mwDelta == 1 ? 1 : 0); // - (myPlayer ? myPlayer.y : camy));
      mes.writeInt16(mwd); // - (myPlayer ? myPlayer.y : camy));
      
      //console.log("sending mouse");
      wsSendMsg(mes);
      //console.log("sent mouse");
 
      
      
      
    }
  }
}
//on page load
setInterval(sendMouseCoords, 20);

resetAfk = function() {
  //log("@@@@@ afk reset now");
  afkTimeStart = +new Date();
  if (dcedFromAfk) {
    //back to computer now!
    dcedFromAfk = false; //prevent continuous reloading
    if (!isMobileApp) window.onbeforeunload = null;
    document.getElementById("connecting").style.visibility = "visible";
    window.location.reload(); //true causes HARD refresh
  }
};
//start afk counter
setInterval(function() {
  var tNow = +new Date();
  var afkT = tNow - afkTimeStart;
  var maxAfkMins = serverCon_aliveInAGame ? 2400 : 10; //in a game, afking doesnt matter
  //log("@@@@ afk for " + (afkT) + " ms");
  //log("@@@@ afk for " + ((afkT/1000)/60) + " m");
  if (afkT > 60000 * maxAfkMins && !dcedFromAfk && serverConnected) {
    console.log("Disconnected for afk...");
    dcedFromAfk = true;
    if (wsIsOpen()) {
      //if lost connection, dont dc twice (on reopening tab)
      ws.close();
    }
    //show some kind of popup?
  }

  //check
}, 5000);

//reset vars after connecting to new game
function gameReset() {
  onResize(); //fix possible screen size problems
  teamID = 0;
  gameObjsByID = {};
  gameObjs = [];
  t = [];
  remGameObjs = [];
  screenTextFontSize = 25;
  //pressureBarPerc_n = pressureBarPerc = 0;
  waterBarPerc_n = waterBarPerc = 0;
  xpPer_n = xpPer = xp = 0;
  //reset leaderboard
  lbCanvas = null;
  isSpectateMode = false;
  homeButton = null;

  respawnMsgText = "";
  var xpLab = document.getElementById("spawnXpLabel");
  xpLab.style.display = respawnMsgText ? "block" : "none";
  xpLab.textContent = respawnMsgText;

  //reset touch buttons
  for (var k = 0; k < allTouchButtons.length; k++) {
    var aTouchBut = allTouchButtons[k];
    aTouchBut.pressed = false; //buttons only show up when touch on
  }
  joyStickOpen = false;

  //reset choice interface
  aniChoice_isOpen = false;
  aniChoice_A = 0.0;
  aniChoice_choiceButtons = []; //buttons to be rendered
  aniChoice_joinGameAfter = false;
 _0x16dc71 = 0,
    _0x2af9ee = 0;
  //reset xp popups
  plusXpPopups = [];
  plusCOINSPopups = [];
  lastPopupXPAm = 0;
  lastPopupCoinsAm = 0
  lastPopupT = 0;
  lastPopupC = 0;


  isInArena = false;
  isAbility1v1Active = false;
  player1v1ArenaWins = 0;
  player1v1Requests = [];
  //if (btn1v1 != null) btn1v1.isVisible = false;
  btnEGG = null;
	  btnEGG1 = null;
	  btnEGG2 = null;
	  btnEGG3 = null;
	
  btn1v1 = null;
  isInBonusRound = false;
  bonusRoundDur = 0;
  eggID = 0;
  isDevMode = false;
  endScreenCanvas = null;

  // call interface reset for any game mode if defined
  // handy when there are on screen display that need to be cleared;
  //if (typeof window.gameMode_interfaceReset === "function")
  //    window.gameMode_interfaceReset();
  /*
   if (_gameMode != null)
       _gameMode.interfaceReset();
   */
  //document.getElementById('startButton').style.opacity = 0.5;
  //this can get sent before new game, so dont reset
  //dangerAniTypes = Array.apply(null, new Array(50)).map(Number.prototype.valueOf,0);

  // since game is rest so need to set game mode again
  setGameMode();
}

window.onload = function() {
  //load last saved index
  //udpForServIndex();

  onResize();

  if (window.localStorage) {
    var inp = document.getElementById("nickInput");
    inp.value = window.localStorage.getItem("nick");
    //select nickname
    inp.setSelectionRange(0, inp.value.length);
    if (!isTouchEnabled)
      //dont make keyboard glitches
      inp.focus();
  }
};
//mouse wheel
if (canvas.addEventListener) {
  // IE9, Chrome, Safari, Opera
  canvas.addEventListener("mousewheel", MouseWheelHandler, false);
  // Firefox
  canvas.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
// IE 6/7/8
else canvas.attachEvent("onmousewheel", MouseWheelHandler);
var mwd = 0;
var mwDelta = 1;

function MouseWheelHandler(e) {
  // cross-browser wheel delta
  var e = window.event || e; // old IE support

  var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

  mwDelta = delta;

  if (delta == 1) mwd += 1;
  else mwd -= 1;

  if (mwd > 100) mwd = 100;
  else if (mwd < -100) mwd = -100;
}

///////////////// set game mode functions
var _gameMode = null;

function setGameMode() {
  //resetMenu();
  console.log("setting game mode interface:");
  hideEndScreen();
  if (_gameMode != null) _gameMode.interfaceReset();

  _gameMode = null;
  if (
    gameMode == gameMode_FFA ||
    gameMode == gameMode_troll
  ) {
    _gameMode = new FreeForAll(gameMode);
    _gameMode.state = gameState;
  } else if (gameMode == gameMode_teamMode) {
    _gameMode = new TeamMode();
    _gameMode.state = gameState;
  }
}

/* ---------------- start of arrow functions ---------------- */

function GetPointAtAngleForDistance(p, d, a) {
  var forX = p.x + d * Math.cos(a);
  var forY = p.y + d * Math.sin(a);

  return {
    x: forX,
    y: forY
  };
}

function drawTriangle(x, y, degrees, color, alpha) {
  // first save the untranslated/unrotated context
  ctx.save();
  ctx.globalAlpha = alpha;

  ctx.beginPath();

  //ctx.translate(x-(s/4), y-(s/4));
  ctx.translate(x, y);
  //degress += Math.PI;
  ctx.rotate(degrees); // * Math.PI / 180);

  ctx.moveTo(-5, -5);
  ctx.lineTo(-5, 5);
  ctx.lineTo(5, 5);

  ctx.lineWidth = 1.5;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  //ctx.fill();
  ctx.stroke();

  // restore the context to its untranslated/unrotated state
  ctx.restore();
}

function trackAnimals() {
  //return; //TESTING OFF

  var player = gameObjsByID[myPlayerID];
  if (player)
    for (d = 0; d < gameObjs.length; d++) {
      var animal = gameObjs[d];
      if (player.id != animal.id) {
        if (animal.oType === o_animal) {
          //#EF3C31
          var linecolor = animal.getOutlineColor();
          //console.log("linecolor: " + linecolor);
          var track = false;
          if (linecolor == col_dangerOutline || linecolor == col_edibleOutline)
            track = true;
          if (track) drawArrow(player, animal, linecolor);
        }
      }
    }
}

function getDistance(p1, p2) {
  var a = p1.x - p2.x;
  var b = p1.y - p2.y;

  var c = Math.sqrt(a * a + b * b);

  return c;
}

function drawArrow(src, dest, color) {
  //log("Drawing arrow");
  var xMid = canvasW / 2;
  var yMid = canvasH / 2;
  var angle = angleAimingBetweenPoints(dest.x, dest.y, src.x, src.y);

  var srcScreenX = screenXForGameX(dest.x);
  var srcScreenY = screenYForGameY(dest.y);
  var srcScreenRad = dest.rad * camzoom;
  //console.log("screen pos "+srcScreenX+","+srcScreenY);
  //all in screen coords
  var distFromXScreenEdge = Math.min(
    Math.abs(srcScreenX - srcScreenRad - 0),
    Math.abs(srcScreenX + srcScreenRad - canvasW)
  );
  var distFromYScreenEdge = Math.min(
    Math.abs(srcScreenY - srcScreenRad - 0),
    Math.abs(srcScreenY + srcScreenRad - canvasH)
  );
  //console.log("x dist "+distFromXScreenEdge+", y "+distFromYScreenEdge);

  var atDistance = -50 - src.rad; // from the animal mid.
  var point = GetPointAtAngleForDistance(
    {
      x: src.x,
      y: src.y
    },
    atDistance,
    angle
  );
  var distance = getDistance(
    {
      x: point.x,
      y: point.y
    },
    {
      x: dest.x,
      y: dest.y
    }
  );
  
  //angle += Math.PI
  angle += toRadians(45);

  var alpha = 1;
  var size = 20; // size of the triangle
  drawTriangle(point.x, point.y, angle, color, alpha);
}

function resetMenu() {
  /*document.getElementById("updates").style.display = "block";
  document.getElementById("startMenu").style.display = "block";
  document.getElementById("rightSide").style.display = "block";*/
  setSiteMenuVisible(true);
}



/*
     FILE ARCHIVED ON 19:37:27 Oct 10, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:04:56 Oct 16, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 50.164
  CDXLines.iter: 30.214 (3)
  exclusion.robots.policy: 0.467
  exclusion.robots: 0.487
  PetaboxLoader3.resolve: 28.78
  captures_list: 151.463
  PetaboxLoader3.datanode: 121.51 (4)
  LoadShardBlock: 114.787 (3)
  esindex: 0.018
  RedisCDXSource: .121
*/
