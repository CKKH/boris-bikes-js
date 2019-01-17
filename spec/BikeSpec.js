describe("Bike", () => {

  it("instance of Bike can be stored as a variable", () => {
    var bike = Bike.new();
    expect(bike instanceof Bike).toBe(true);
  });

});
