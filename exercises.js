//CONFIG OPTIONS:
var showLabels = false;
var showUglySolutions = false;
var showPrettySolutions = true;

// QUESTION ONE
// Show me how to calculate the average price of all items. Please console.log the average.
// The output should be "The average price is $23.63"

    //UGLY
  if (showUglySolutions) {
    if (showLabels) { console.log("###---Q1: UGLY----------------------------###"); }
    console.log("The average price is $" + Math.round( ((etsyItems.reduce(function(a, i) { return a + i.price; }, 0) / etsyItems.length) * 100)) / 100);
  }
    //PRETTY
  if (showPrettySolutions) {
    if (showLabels) { console.log("###---Q1: PRETTY--------------------------###"); }
    var totalPrice = etsyItems.reduce(function(accumulator, currentItem) {
      return accumulator + currentItem.price;
    }, 0);
    var totalItems = etsyItems.length;
      // I use Math.round() here to trim to 2 decimal places.
      // Nothing on Etsy costs 0.3333333 cents.
    var averagePrice = Math.round( (totalPrice / totalItems) * 100) / 100;
    console.log("The average price is $" + averagePrice);
}
// QUESTION TWO
// Show me how to get an array of items that cost between $14.00 and $18.00 USD
// The output should be the three objects, which will look something like:
//
// "Items that cost between $14.00 USD and $18.00 USD:"
// [
//   {
//      title: "1970s Coors Banquet Glass Beer Pitcher",
//      ...
//   },
//   {
//      title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//      ...
//   },
//   {
//      title: "Hand Painted Colorful Feather Glass",
//      ...
//   }
// ]

    //UGLY
  if (showUglySolutions) {
    if (showLabels) { console.log("###---Q2: UGLY----------------------------###"); }
    console.log("Items that cost between $14.00 USD and $18.00 USD:");
    console.log(etsyItems.filter(function(i){ return (i.price > 14) && (i.price < 18); }));
  }
    //PRETTY
  if (showPrettySolutions) {
    if (showLabels) { console.log("###---Q2: PRETTY--------------------------###"); }
    var itemsInPriceRange = etsyItems.filter(function(currentItem) {
      if (currentItem.price > 14 && currentItem.price < 18) {
        return currentItem;
      }
    });

    console.log("Items that cost between $14.00 USD and $18.00 USD:");
    console.log(itemsInPriceRange);
  }
// QUESTION THREE
// Show me how find the item with a "GBP" curreny code and print its name and price. Please console.log the one you find.
// The output should be "1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18"

    //UGLY
  if (showUglySolutions) {
    if (showLabels) { console.log("###---Q3: UGLY----------------------------###"); }
    var gbpObj = etsyItems.filter(function(i){ return (i.currency_code.toLowerCase() === "gbp"); })[0];
    console.log(gbpObj.title + " costs £" + gbpObj.price);
  }
    //PRETTY
  if (showPrettySolutions) {
    if (showLabels) { console.log("###---Q3: PRETTY--------------------------###"); }
    var itemSoldInPounds = etsyItems.filter(function(currentItem) {
      if (currentItem.currency_code === "gbp" || currentItem.currency_code === "GBP") {
        return currentItem;
      }
    });
      // I have to use "[0]" here because ".filter()" returns an ARRAY and I just want the OBJECT.
      // "[0]" returns the first item from the ARRAY - in this case, the only item there.
    console.log(itemSoldInPounds[0].title + " costs £" + itemSoldInPounds[0].price);
  }
// QUESTION FOUR
// Show me how to find which items are made of wood. Please console.log the ones you find.
// The output should be:
//
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

  //UGLY
if (showUglySolutions) {
  if (showLabels) { console.log("###---Q4: UGLY----------------------------###"); }
  etsyItems.filter(function(i) { return i.materials.indexOf('wood') > -1; }).forEach(function(i){console.log(i.title); });
}
  //PRETTY
if (showPrettySolutions) {
  if (showLabels) { console.log("###---Q4: PRETTY--------------------------###"); }
      Array.prototype.contains = function(item) { return this.indexOf(item) > -1; };
      // This is a simple way to add a ".contains()" method to your arrays.
      // Example:
      //   [1, 2, 3, 4].contains(3) == true;
      //   [1, 2, 3, 4].contains(5) == false;
      // This is SUPER bad practice but I'm going for pretty, not pro here.


  var itemsMadeOfWood = etsyItems.filter(function(currentItem) {
    if (currentItem.materials.contains('wood') === true) {
      return currentItem;
    }
  });

  itemsMadeOfWood.forEach(function(currentItem) {
    console.log(currentItem.title);
  });
}
// QUESTION FIVE
// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
//
// The output should be:
// Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
// wall mount bottle opener
// wedding
// man cave
// christmas gift
// guy gift
// fathers day
// home bar
// beer
// bar
//
//
// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
// glass
// sandblast cabinet
// vinyl
// beer glass
// pint glass
// etched pint glass
// etched glass
// etched beer glass
// 16 oz pint
// beer gift
// etched harry potter glass
// the three broomsticks glass
// personalized harry potter glass

  //UGLY
if (showUglySolutions) {
  if (showLabels) { console.log("###---Q5: UGLY----------------------------###"); }
  var multiMats = etsyItems.filter(function(i) { return i.materials.length > 7; });
  multiMats.forEach(function(i) {
    console.log(i.title + " has " + i.materials.length + " materials:");
    i.materials.forEach(function(m) { console.log(m); });
  });
}
  //PRETTY
if (showPrettySolutions) {
  if (showLabels) { console.log("###---Q5: PRETTY--------------------------###"); }
  var multipleMaterialItems = etsyItems.filter(function(currentItem) {
    if (currentItem.materials.length >= 8) {
      return currentItem;
    }
  });

  multipleMaterialItems.forEach(function(currentItem) {
    title = currentItem.title;
    materialCount = currentItem.materials.length;
    materials = currentItem.materials;

    console.log(title + " has " + materialCount + " materials");
    materials.forEach(function(material){
      console.log(material);
    });
  });
}
// QUESTION 6
// Show me how to calculate how many items were made by their sellers
// The output should be "18 were made by their sellers"

  //UGLY
if (showUglySolutions) {
  if (showLabels) { console.log("###---Q6: UGLY----------------------------###"); }
  console.log(etsyItems.filter(function(i){ return i.who_made === "i_did"; }).length + " were made by their sellers");
}
  //PRETTY
if (showPrettySolutions) {
  if (showLabels) { console.log("###---Q6: PRETTY--------------------------###"); }
  var itemsMadeBySellers = etsyItems.filter(function(currentItem) {
    if (currentItem.who_made === "i_did") {
      return currentItem;
    }
  });

  var numOfSelfmadeItems = itemsMadeBySellers.length;

  console.log(numOfSelfmadeItems + " were made by their sellers");
}
