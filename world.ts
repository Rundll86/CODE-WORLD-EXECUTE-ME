import { People } from "./people";

export class World {
    simulation: any;
    godList: any[] = [];
    simulateStart() { };
    execute(people: People) { };
    showStatus(people: People): { name: string, race: string } {
        return { name: "", race: "" };
    };
    erase(something: string) {
        return {
            by(people: People) { }
        };
    };
    async timeTravel(me: People, you: People, time: Date) { };
};