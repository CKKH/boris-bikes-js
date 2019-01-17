describe("DockingStation", () => {

  beforeEach( () => {
    dockingStationOne = new DockingStation();
    bike = jasmine.createSpy('bike')
  });

  it("instance of DockingStation can be stored as a variable", () => {
    expect(dockingStationOne instanceof DockingStation).toBe(true);
  });

  it("returns an array of docked bikes when .dockedBikes called", () => {
    expect(dockingStationOne.dockedBikes()).toEqual([]);
  });

  it("stores a bike in it's array after .dock(bike) called", () => {
    dockingStationOne.dock(bike);
    expect(dockingStationOne.dockedBikes()).toContain(bike);
  });

  it("responds to the .release(bike) method", () => {
    expect(dockingStationOne.release(bike)).toBeDefined();
  });

  it("releases a docked bike from it's array after .release(bike) called", () => {
    dockingStationOne.dock(bike);
    dockingStationOne.release(bike);
    expect(dockingStationOne.dockedBikes()).not.toContain(bike);
  });

});
