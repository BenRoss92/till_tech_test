function HipsterCoffee() {
  this._shopDetails = {
    "shopName": "The Coffee Connection",
    "address": "123 Lakeside Way",
    "phone": "16503600708",
    "prices": [
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
    ]
  };

  this._basket = [];
  this._price = [];

}

  HipsterCoffee.prototype = {

    getPrice: function(item,quantity) {
      return (this._shopDetails.prices[0][item] * quantity);
    },

    addToBasket: function(item, quantity) {
      var price = this._shopDetails.prices[0][item] * quantity;
      this._basket.push([item, price]);
    },

    viewBasket: function() {
      return this._basket;
    },

    total: function() {
      var sum = 0;
      for (var i = 0; i < (this._basket).length; i++) {
        sum += this._basket[i][1];
      }
      return sum;
    }

  };
