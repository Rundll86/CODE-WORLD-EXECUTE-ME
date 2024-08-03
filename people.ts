export class People {
    get limitation(): People {
        return new People;
    };
    get feelingIndex(): number {
        return NaN;
    };
    canSee: boolean = false;
    satisfaction: People | null = null;
    fillIn(...parameters: any[]) { };
    initialize() { };
    getDimensions(): { height: number } {
        return {
            height: 200
        };
    };
    getCircumferrence(): number {
        return NaN;
    };
    sitOn(args: number[]) { };
    getTagents(): number[] { return []; };
    isApproach(nun: number): boolean { return true; };
    switchTo(arg: "AC" | "DC") { };
    unite(people: People) { };
    simulate(num: number): boolean[] { return []; };
};