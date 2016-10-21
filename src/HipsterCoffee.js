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

}

  HipsterCoffee.prototype = {

    get_price: function(item,quantity) {
      return (this._shopDetails.prices[0][item] * quantity);
    }

    // add_to_basket: function(item, quantity) {
    //   // find out price (item price * quantity)
    //   // push item and quantity into basket
    //   this._shopDetails.prices[0][item]
    //   this._basket.push(item);
    //   // this._shopDetails.prices[0]
    // },
    //
    // view_basket: function() {
    //   return this._basket;
    // }

  };
