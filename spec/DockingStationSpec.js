/* global describe, it, expect, beforeEach */

'use strict'

describe("DockingStation", () => {
  let dockingStationOne;
  let bike;

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

  it("releases a docked bike from it's array after .release(bike) called", () => {
    dockingStationOne.dock(bike);
    dockingStationOne.release(bike);
    expect(dockingStationOne.dockedBikes()).not.toContain(bike);
  });

  it("raises error if .release(bike) called when dockingStation empty", () => {
    var error = "Cannot release bike: dockingStation empty"
    expect(function() { dockingStationOne.release(bike) }).toThrow(new Error(error));
  });

});
