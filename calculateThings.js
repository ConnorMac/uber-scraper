var data = require('./tripdata.json');

var total = 0;
var dates = [];

data.forEach(function(trip, key) {
  var price = Number(trip.price.replace(/[A-z]/g, ''));
  var date = new Date(trip.date.replace(/[A-z]/g, ''));
  var dateTimeString = (date.getMonth()+1) + ' - ' + date.getFullYear();
  if(dates[dateTimeString]) {
    dates[dateTimeString].spent += price
  } else {
    dates[dateTimeString] = {
      spent: price
    }
  }
  if(price!=NaN) {
    total += price;
  }
});

console.log(dates);
console.log('TOTAL SPENT: ' + total);
// console.log(parseInt(data[0].price));