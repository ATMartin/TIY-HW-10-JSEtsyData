// QUESTION ONE
// Show me how to calculate the average price of all items. Please console.log the average.
// The output should be "The average price is $23.63"
    console.log("The average price is $" + etsyItems.reduce(function(acc, item) { return acc + item.price; }, 0));


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
    console.log("Items that cost between $14.00 USD and $18.00 USD:");
    console.log(etsyItems.filter(function(item){ return (item.price > 14) && (item.price < 18); }));

// QUESTION THREE
// Show me how find the item with a "GBP" curreny code and print its name and price. Please console.log the one you find.
// The output should be "1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18"
    var gbpObj = etsyItems.filter(function(item){ return (item.currency_code.toLowerCase() === "gbp"); })[0];
    console.log(gbpObj.title + " costs £" + gbpObj.price);

// QUESTION FOUR
// Show me how to find which items are made of wood. Please console.log the ones you find.
// The output should be:
//
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
  etsyItems.filter(function(item) { return item.materials.indexOf('wood') > -1; }).forEach(function(item){console.log(item.title); });

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
var multiMats = etsyItems.filter(function(item) { return item.materials.length > 7; });
multiMats.forEach(function(item) {
  console.log(item.title + " has " + item.materials.length + " materials:");
  item.materials.forEach(function(mat) { console.log(mat); });
});

// QUESTION 6
// Show me how to calculate how many items were made by their sellers
// The output should be "18 were made by their sellers"
console.log(etsyItems.filter(function(item){ return item.who_made === "i_did"; }).length + " were made by their sellers");
