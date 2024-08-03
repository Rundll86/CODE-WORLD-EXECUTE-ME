import { inputController } from "./input";
import { People } from "./people";
import { World } from "./world";

declare var datas: any[];
declare var aSetOfPoints: People;
declare var aCircle: People;
declare var aSineWave: People;
var me = new People();
var you = new People();
me.fillIn(datas);
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
    me.switchTo("AC");
    me.switchTo("DC");
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
    if (!Number.isNaN(me.feelingIndex)) {

    };
});