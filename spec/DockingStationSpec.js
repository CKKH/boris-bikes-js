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

  it("stores a bike in it's array after .dock(bike) called", () => {
    var bike = new Bike();
    dockingStationOne.dock(bike);
    expect(dockingStationOne.dockedBikes()).toContain(bike);
  });

});
