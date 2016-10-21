describe("HipsterCoffee", function() {

  var hipsterCoffee;

  beforeEach(function() {
    hipsterCoffee = new HipsterCoffee();
  });

  it("has an address", function() {
    expect(hipsterCoffee._shopDetails.address).toEqual("123 Lakeside Way");
  });

  it("has a phone number", function() {
    expect(hipsterCoffee._shopDetails.phone).toEqual("16503600708");
  });

  it("has a list of prices", function() {
    expect(this._shopDetails.prices).toEqual([
      {
        "Cafe Latte": 4.75,
        "Flat White": 4.75,
        "Cappucino": 3.85,
        "Single Espresso": 2.05,
        "Double Espresso": 3.75,
        "Americano": 3.75,
        "Cortado": 4.55,
        "Tea": 3.65,
        "Choc Mudcake": 6.40,
        "Choc Mousse": 8.20,
        "Affogato": 14.80,
        "Tiramisu": 11.40,
        "Blueberry Muffin": 4.05,
        "Chocolate Chip Muffin": 4.05,
        "Muffin Of The Day": 4.55
      }
    ]);
  });

});
