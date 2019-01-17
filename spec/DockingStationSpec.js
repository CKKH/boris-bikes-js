describe("DockingStation", () => {

  beforeEach( () => {
    dockingStationOne = new DockingStation();
  });

  it("instance of DockingStation can be stored as a variable", () => {
    expect(dockingStationOne instanceof DockingStation).toBe(true);
  });

  it("reponds to the .dockedBikes method", () => {
    expect(dockingStationOne.dockedBikes()).toBeDefined();
  });

  it("returns an array of docked bikes when .dockedBikes called", () => {
    expect(dockingStationOne.dockedBikes()).toEqual([]);
  });

});
