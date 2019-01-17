/* global describe, it, expect, beforeEach */

'use strict'

describe("Bike", () => {

  it("instance of Bike can be stored as a variable", () => {
    var bike = new Bike();
    expect(bike instanceof Bike).toBe(true);
  });

});
