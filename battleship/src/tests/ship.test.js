import main from "..";
import { getShip,shoot,getBoard } from "..";
it("checks if ships are being placed",() => {
    expect(main([0,0],"x",5,"ship1")).toBe("ship1");
});
it("checks if the gameboard and ships are being placed",() => {
    expect(getShip([0,0],"x",6,"ship1")).toBe(6);
});
it("should throw an error when the placement of ship is out of board",() => {
    expect(()=>{main([8,0],"x",5,"ship1")}).toThrow();
});

it("Fires at a cord and check if it hit any ship",()=>{
    expect(shoot([0,2])).toBeTruthy();
});
it("Fires at a cord and check if it hit any ship",()=>{
    expect(shoot([0,2])).toBeFalsy();
});

it("checks for the modified map",() => {
    const dummy = new Map();
    dummy.set("00", "ship1");
    dummy.set("01", "ship1");
    dummy.set("03", "ship1");
    dummy.set("04", "ship1");
    
    expect(getBoard()).toEqual(dummy);
})