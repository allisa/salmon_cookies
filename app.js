'use strict';
//global variables
var storeHours = ['','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//set-up constructor to build stores
function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookieTotal = [];
  this.totalCookiesDay = 0;
}
Store.prototype.randomCustPerHour = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};
Store.prototype.cookiesPerHour = function() {
  return (this.randomCustPerHour() * this.avgCookieSale);
};
Store.prototype.storeCookieSales = function() {
  var storeRow = document.createElement('tr');
  var storeLocation = document.createElement('th');
  storeLocation.textContent = this.name;
  storeRow.appendChild(storeLocation);

  for(var i=1; i<storeHours.length; i++) {
    var hourlyCookieTotal = Math.ceil(this.cookiesPerHour());
    var hourlySalesData = document.createElement('td');
    hourlySalesData.textContent = hourlyCookieTotal;
    storeRow.appendChild(hourlySalesData);
  }
  document.getElementById('location-sales').appendChild(storeRow);
};


function storeHrs() {
  var hoursRow = document.createElement('tr');
  for( var j = 0; j < storeHours.length; j++) {
    var hours = document.createElement('td');
    hours.textContent = storeHours[j];
    hoursRow.appendChild(hours);
  }
  document.getElementById('store-hours').appendChild(hoursRow);
}

//need the total for the cookies sold for each store at every hour
//display at bottom of table
// function allStoresHourlySales() {
//   var salesTotalRow = document.createElement('tr');
//   for(var k = 1; k < storeHours.length; k++) {
//     var allCookiesPerHour = reduce(cookiesPerHour[k]);
//   }


var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

storeHrs();
firstAndPike.storeCookieSales();
seaTacAirport.storeCookieSales();
seattleCenter.storeCookieSales();
capitolHill.storeCookieSales();
alki.storeCookieSales();