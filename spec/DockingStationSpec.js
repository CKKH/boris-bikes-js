describe("DockingStation", () => {

  it("instance of DockingStation can be stored as a variable", () => {
    var dockingStationOne = new DockingStation();
    expect(dockingStationOne instanceof DockingStation).toBe(true);
  });

  it("reponds to the .dockedBikes method", () => {
    var dockingStationOne = new DockingStation();
    expect(dockingStationOne.dockedBikes()).toBeDefined();
  });

});
