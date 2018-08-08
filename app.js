'use strict';
//global variables
var storeHours = ['','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

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

  //starting i at 2 to account for empty string in the beginning
  // and total string at the end
  for(var i=2; i<storeHours.length; i++) {
    var hourlyCookieTotal = Math.ceil(this.cookiesPerHour());
    this.totalCookiesDay += hourlyCookieTotal;
    this.cookieTotal[i] = hourlyCookieTotal;
    var hourlySalesData = document.createElement('td');
    hourlySalesData.textContent = hourlyCookieTotal;
    storeRow.appendChild(hourlySalesData);
  }
  //console.log(this.cookieTotal);
  var totalCookiesDay = document.createElement('td');
  totalCookiesDay.textContent = this.totalCookiesDay;
  storeRow.appendChild(totalCookiesDay);
  //console.log(this.totalCookiesDay);

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

// display at bottom of table
//not aligned correctly but it is displaying the totals per hour
function allStoresHourlySales() {
  var allCookiesPerHour = 0;
  var allCookiePerHourData = [];
  var grandTotalSales = 0;

  for(var k = 2; k < storeHours.length; k++) {
    allCookiesPerHour += firstAndPike.cookieTotal[k];
    allCookiesPerHour += seaTacAirport.cookieTotal[k];
    allCookiesPerHour += seattleCenter.cookieTotal[k];
    allCookiesPerHour += capitolHill.cookieTotal[k];
    allCookiesPerHour += alki.cookieTotal[k];
    allCookiePerHourData.push(allCookiesPerHour);
    allCookiesPerHour = 0;
  }
  for(var m = 0; m < allCookiePerHourData.length; m++) {
    var salesTotalData = document.createElement('td');
    salesTotalData.textContent = allCookiePerHourData[m];
    document.getElementById('all-stores-sales-per-hour').appendChild(salesTotalData);
    grandTotalSales += allCookiePerHourData[m];
  }
  allCookiePerHourData.push(grandTotalSales);
  var allSalesTotalData = document.createElement('td');
  allSalesTotalData.textContent = grandTotalSales;
  document.getElementById('all-stores-sales-per-hour').appendChild(allSalesTotalData);

  //console.log(grandTotalSales);
  //console.log(allCookiePerHourData);
}

// //when user submits a form, display in table
var formElt = document.getElementById('store-form');
formElt.addEventListener('submit', function(e) {
  e.preventDefault(); //don't do default behavior
  console.log('form submitted');
  var storeCreatedFromForm = new Store(e.target.name.value, e.target.minCust.value, e.target.maxCust.value, e.target.avgSale.value);
});

// var formElt = document.getElementById('person form');
// formElt.addEventListener('submit', function(e) {  //setting up for submission
//   e.preventDefault(); //don't do default behavior
//   //do console log to make sure it's Sworking
//   var personCreateForm = nre personalbar(e.target.name.value, ...); //reach into dom page to pull out the values entered on the form
//   personCreateForm.addinfo(); //values entered into form

// });

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
allStoresHourlySales();
