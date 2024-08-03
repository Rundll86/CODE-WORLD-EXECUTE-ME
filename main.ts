import { COMMAND, CurrentType, GenderType, RoleType } from "./constants";
import { inputController } from "./input";
import { People } from "./people";
import { World } from "./world";
import process from "process";

declare var parameters: any[];
declare var aSetOfPoints: People;
declare var aCircle: People;
declare var aSineWave: People;
declare var aEggplant: People;
declare var aTotato: People;
declare var aTabbyCat: People;
var me = new People();
var you = new People();
me.fillIn(parameters);
me.initialize();
var world = new World();
inputController.handleKey("any").then(() => {
    world.simulateStart();
    world.execute(me);
    if (me === aSetOfPoints) {
        console.log(me.getDimensions().height);
    };
    if (me === aCircle) {
        console.log(me.getCircumferrence());
    };
    if (me === aSineWave) {
        you.sitOn(me.getTagents());
    };
    if (me.isApproach(Infinity)) {
        you = me.limitation;
    };
    me.switchTo(CurrentType.ALTERNATE);
    me.switchTo(CurrentType.DIRECT);
    me.canSee = false;
    world.timeTravel(
        me,
        you,
        new Date(3691)
    );
    return world.timeTravel(
        me,
        you,
        new Date(617)
    );
}).then(() => {
    return inputController.handleButton("any");
}).then(() => {
    me.unite(you);
    you.unite(me);
    let myStatus = world.showStatus(me);
    console.log(myStatus.name);
    console.log(myStatus.race);
    if (!me.simulate(100).includes(false)) {
        you.satisfaction = me;
    };
    if (you.feelingIndexes.pleasure.HAPPY) {
        me.execute(COMMAND).in(world.simulation).trap(me, you);
    };
    if (me === aEggplant) {
        console.log(me.getNutrients());
    };
    if (me === aTotato) {
        console.log(me.getAntiOxidants());
    };
    if (me === aTabbyCat) {
        me.purrFor(you);
    };
    if (world.godList.length === 1 && world.godList[0] === me) {
        me.existence = you;
    };
    me.switchGender(GenderType.FEMALE, GenderType.MALE);
    you.createThing("whatever")
        .from("AM")
        .to("PM")
        .do();
    me.switchRole(RoleType.SADIST, RoleType.MASOCHIST);
    return inputController.handleKey("any");
}).then(() => {
    me.trance();
    you.trance();
    if (you.getVibrationsBy(me)) {
        me.completion = true;
    } else {
        you.left();
        you.left();
        you.left();
        you.left();
        you.left();
        you.left(me).in("ISOLATION");
    };
    if (me.accesses.ERASING) {
        world.erase("POINTLESS FRAGMENTS").by(me);
        me.feelingIndexes.unpleasure.DISHEARTENED = 0;
    };
    you.challenge(me).by("ILLEGAL ARGUMENTS");
    me.execute(world);
    me.execute(world);
    me.execute(world);
    me.execute(world);
    me.execute(world);
    me.execute(world);
    me.execute(world);
    me.execute(1);
    me.execute(2);
    me.execute(3);
    me.execute(4);
    me.execute(5);
    me.execute(6);
    if (me.accesses.EXECUTING_EVERYONE) {
        you.execution = me;
    };
    let execution = me.execute(you);;
    if (!you.goBackTo(me)) {
        execution.trap(me, you);
    };
    return me.study("HOW-TO-LOVE");
}).then(() => {
    let answers: boolean[] = [];
    for (let i = 0; i < 2; i++) {
        answers.push(you.question(me));
    };
    if (!answers.includes(false)) {
        if (me.getAlgebraicExpressionOfLove()) {
            you.escape();
        } else {
            me.beTrapped().in("LOVE");
            process.exit();
        };
    };
});