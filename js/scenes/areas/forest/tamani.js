/**
 * Converted by matraia on 10/6/16.
 */

TamaniScene = [];

//---------
// Tamani Combat Information
//---------

//Tamani Description
function Tamani() {
    //Names and References
    this.a = "";
    this.name = "Tamani";
    this.refName = this.name
    //this.imageName = "tamani";
    this.long = "She keeps her arms folded across her " + TamaniScene.tamaniChest() + " and glares at you.  The little thing is only about four feet tall, with pink and black dyed hair cut into a cute little 'do.  The greenish-gray skin of her breasts bulges out around her arms, supported by a few leather straps, amplifying her cleavage.  Her cunt lips are pierced multiple times, inflamed, and slightly parted.  There really isn't any clothing on her to hide them, just more of the ever-present straps wrapping around her thighs."; //TODO Fix Desc.
    // this.plural = false;
    this.createVagina(false, VAGINA_WETNESS_DROOLING, VAGINA_LOOSENESS_NORMAL);
    this.createStatusEffect(StatusEffects.BonusVCapacity, 55, 0, 0, 0);
    this.createBreastRow(Appearance.breastCupInverse("E"));
    this.ass.analLooseness = ANAL_LOOSENESS_TIGHT;
    this.ass.analWetness = ANAL_WETNESS_DRY;
    this.createStatusEffect(StatusEffects.BonusACapacity,40,0,0,0);
    this.tallness = 40;
    this.hipRating = HIP_RATING_AMPLE+2;
    this.buttRating = BUTT_RATING_LARGE;
    this.skinTone = "greenish gray";
    this.hairColor = "pink and black";
    this.hairLength = 16;
    this.str = 32;
    this.tou = 43;
    this.spe = 55;
    this.inte = 62;
    this.lib = 65;
    this.sens = 65;
    this.cor = 50;
    this.weapon.equipmentName = "fists";
    this.weapon.verb="tiny punch";
    this.armor.equipmentName = "leather straps";
    this.bonusHP = 40;
    this.lust = 40;
    this.lustVuln = 0.9;
    //this.temperment = TEMPERMENT_RANDOM_GRAPPLES; // TODO Get Grapple Temperment Properly Coded
    this.level = 4;
    this.gems = rand(25) + 5;
    this.clearDrops();
    this.addDrop(Items.Consumables.GoblinAle, 25);
    this.addDrop(Items.Consumables.LustDraft, 5);
    this.addDrop(Items.Consumables.HairDyePink, 5);
    this.addDrop(Items.Consumables.HairDyeBlue, 5);
    this.addDrop(Items.Consumables.HairDyeOrange, 5);
    this.addDrop(Items.Consumables.HairDyePurple, 5);
    this.addDrop(Items.Consumables.IncubiDraft, 5);
    this.addDrop(Items.Consumables.Reducto, 5);
    //this.addDrop(Item.Consumables., 5); //TODO Add Large Blue Egg

    this.victory = TamaniScene.tamaniWin;
    this.defeat = TamaniScene.tamaniLoss;
}
Tamani.prototype = new Creature();
Tamani.prototype.constructor = Tamani;


//COMBAT AI
Tamani.prototype.doAI = function() {
    switch (rand(4)) {
        case 0:
            Tamani.tamaniTeaseAttack(); // If her hypnosis attack succeeds, this will divert to her special tease attack.
            break;
        case 1:
            Goblin.goblinDrugAttack(); // Tamani is an extension of Goblin in the original code. Let's see if we can just refer to this attack and not cause a problem.
            break;
        case 2:
            Tamani.tamaniHypnoTease(); // She really likes the hypnosis thing.
            break;
        default:
            this.attack();
    }
    combatRoundOver();
};


Tamani.tamaniTeaseAttack = function() {
    if (gameFlags[TAMANI_TIMES_HYPNOTIZED] > 0) {
        Tamani.tamaniHypnoTease();
    }
    else Goblin.goblinTeaseAttack();
};

Tamani.tamaniHypnoTease = function() {
    var selector = rand(3);
    if (selector == 0) outputText("Tamani smiles and shifts her leather straps, pulling one into the puffy gash that is her vagina.  She groans out loud, sliding the studded leather band into her outer lips and sawing it along her clit.  Her whole body blushes as she pulls it free, running a fingertip up the now wet strip of leather, \"<i>Mmm, can't you see how much my pussy needs a man inside it?  Be a good husband and fuck Tamani full!  You know you want to.</i>\"<br><br>", false);
    if (selector == 1) outputText("Tamani saunters up to you, sliding her fingers down to each side of her pussy and spreading them.  Your eyes are drawn to her honeyed tunnel, unable to look away she gets closer.  She whispers, \"<i>Your cock knows what it needs.  Just be a good husband and obey your dick, it KNOWS how badly you need mistress's pussy.</i>\"<br><br>", false);
    if (selector == 2) outputText("Tamani turns around and bends down, pressing her hands into the dirt as she kicks her legs apart.  Your stare open-mouthed at her bouncy ass-cheeks and the tantalizingly wet entrance of her slit.  She smirks and offers, \"<i>You've cum so many times inside me, why resist when you can give in and feel that pleasure again today?  Come on husband, don't make Tamani beg...</i>\"<br><br>", false);

    //Low Hypnosis
    if (gameFlags[TAMANI_TIMES_HYPNOTIZED] < 5) {
        selector = rand(3);
        if (selector == 0) outputText("You reluctantly pull your stare away from the heavenly entrance between her legs.  There's an urge to walk over to her and plunge yourself inside her over and over, but you dismiss it.", false);
        if (selector == 1) outputText("You find it hard to pull your gaze from her inviting twat, but you manage.  You shake your head, clearing away thoughts of fertilizing your wife.  Her rhetoric must be getting to you.", false);
        if (selector == 2) outputText("No matter the case, her actions shifted a fair bit of your blood-flow to your groin.", false);
    }
    //Medium Hypnosis
    else if (gameFlags[TAMANI_TIMES_HYPNOTIZED] < 10) {
        selector = rand(2);
        if (selector == 0) {
            outputText("With effort you manage to wrench your eyes away from the inviting folds of Tamani's vagina.  ", false);
            if (player.totalCocks() > 1) outputText("Each of y", false);
            else outputText("Y", false);
            outputText("our " + player.multiCockDescriptLight(), false);
            if (player.lust > 80) outputText(" drips pre-cum", false);
            else if (player.lust > 40) outputText(" grows harder", false);
            else outputText(" hardens", false);
            outputText(" from the sexual sight, and you feel a compulsion to rush to your wife and take her on the spot.  Obviously she's not really your wife, but after so many fuckings it kind of makes sense to think of her that way.", false);
            if (player.lust < 70) outputText("  Still, you don't want to fuck her right now!", false);
        }
        else {
            outputText("Struggling, you pull your eyes back into your head and away from Tamani's gorgeous slit.  You shudder, feeling ", false);
            if (player.totalCocks () > 1) outputText("each of ", false);
            outputText("your " + player.multiCockDescriptLight(), false);
            if (player.lust <= 41) outputText(" thicken perceptibly", false);
            else if (player.lust <= 81) outputText(" twitch eagerly", false);
            else outputText("drip pre-cum", false);
            outputText(", responding to the overly sensual goblin's body.  You start to approach her, but stop yourself, realizing you were about to pick up your wife and fuck her on the spot.  You know she's not really your wife, but you have a hard time thinking of her as anything else, save for maybe your mistress.", false);
            if (player.lust < 70) outputText("  Regardless, you're resolute in your desire not to fuck her right now!", false);
        }
    }
    //High Hypnosis
    else {
        selector = rand(2);
        if (selector == 0) {
            outputText("You barely manage to step yourself from lunging forward to bury your mouth between your mistress's legs.  Hard and trembling between your legs, ", false);
            if (player.totalCocks() > 1) outputText("each of ", false);
            outputText("your " + player.multiCockDescriptLight() + " aches with need.  You battle with the compulsion to kneel before your short, stacked mistress and perform your duties as her breeder husband.", false);
        }
        else {
            outputText("You wrench your gaze from the juicy mound before you with great difficulty.  The desire to submit to your wife and fuck her on the spot rages through your body, melting your resistance into liquid lust and pooling it in your groin.  ", false);
            if (player.totalCocks() > 1) outputText("Each of y", false);
            else outputText("Y", false);
            outputText("our " + player.multiCockDescriptLight() + " pulses and dribbles pre-cum, aching to do its duty and fire load after load into Tamani's perfect pussy.", false);
        }
    }
    if (gameFlags[TAMANI_TIMES_HYPNOTIZED] == undefined) gameFlags[TAMANI_TIMES_HYPNOTIZED] = 0; // Kludge for save fix.
    player.changeLust((rand(player.lib/5)) + 3 + gameFlags[TAMANI_TIMES_HYPNOTIZED]);
    gameFlags[TAMANI_TIMES_HYPNOTIZED]++; //TODO Test this for balance. May have to put an upper limit or else Tamani could instantly win in a long game.
};

TamaniScene.tamaniWin = function() {
    clearOutput();
    if (monster.HP <= 0) {
        outputText("Tamani is defeated!");
    }
    else {
        outputText("Tamani gives up on defeating you and starts masturbating!");
    }
    TamaniScene.tamaniVictoryMenu();
};

TamaniScene.tamaniLoss = function() {
    if (player.HP <= 0) {
        if (player.totalCocks() > 0) {
            if (rand(2) == 0) TamaniScene.tamaniSexLost();
            else TamaniScene.tamaniSexLetHer();
        }else {
            outputText("Tamani sighs as you begin to lose consciousness, \"<i>You dummy, why'd you get rid of the fun parts?</i>\"", true);
            cleanupAfterCombat();
        }
    } else {
        if (player.totalCocks() > 0) {
            //hypnoslut loss scene
            if (gameFlags[TAMANI_TIMES_HYPNOTIZED] > 19 && rand(2) == 0) {
                TamaniScene.getRapedByTamaniYouHypnoSlut();
            } else if (rand(2) == 0) TamaniScene.tamaniSexLost();
            else TamaniScene.tamaniSexLetHer();
        } else {
            outputText("You give into your lusts and masturbate, but Tamani doesn't seem to care.  She kicks and punches you over and over, screaming, \"<i>You dummy, why'd you get rid of the fun parts?</i>\"", true);
            player.HP = 0; // Beats you up
            cleanupAfterCombat();
        }
    }
}


TamaniScene.tamaniChest = function() {
 outputText("chest");
 return;
};