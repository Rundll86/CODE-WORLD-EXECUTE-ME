import { People } from "./people";

export class World {
    simulateStart() { };
    execute(people: People) { };
    showStatus(people: People): { name: string, race: string } {
        return { name: "", race: "" };
    };
    async timeTravel(me: People, you: People, time: Date) { };
};