var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};
//when you know the specefic property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
console.log(penCount);
// alternative system
//when you know the specefic property name, use index notation to get the property value
var penCount2 = shoppingCart["pen"];
console.log(penCount2);
//if you want to show the objects keys and values to an array form then you need to do this
var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);
// console.log(shoppingCart);

var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

//set property values
console.log(shoppingCart);
shoppingCart.mouse = 15;
console.log(shoppingCart);
// --------------------------- another way to change/set values
shoppingCart["mouse"] = 30;
console.log(shoppingCart);
// -------------------------------another way
shoppingCart[propertyName] = 90;
console.log(shoppingCart);
