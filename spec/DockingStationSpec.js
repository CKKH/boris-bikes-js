describe("DockingStation", () => {

  beforeEach( () => {
    dockingStationOne = new DockingStation();
  });

  it("instance of DockingStation can be stored as a variable", () => {
    expect(dockingStationOne instanceof DockingStation).toBe(true);
  });

  it("returns an array of docked bikes when .dockedBikes called", () => {
    expect(dockingStationOne.dockedBikes()).toEqual([]);
  });

  it("responds to the .dock(bike) method", () => {
    var bike = new Bike();
    expect(dockingStationOne.dock(bike)).toBeDefined();
  });

});
