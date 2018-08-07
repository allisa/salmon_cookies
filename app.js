'use strict';

var firstAndPike = {
  name: 'pike-data',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  randCust: randomCustPerHour,
  cookiesPerHour: cookiesPerHour,
  cookieTotal: [],
  totalCookiesData: storeCookieSales,
  totalCookiesDay: 0,
};
var seaTacAirport = {
  name: 'seatac-data',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  randCust: randomCustPerHour,
  cookiesPerHour: cookiesPerHour,
  cookieTotal: [],
  totalCookiesData: storeCookieSales,
  totalCookiesDay: 0
};
var seattleCenter = {
  name: 'center-data',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  randCust: randomCustPerHour,
  cookiesPerHour: cookiesPerHour,
  cookieTotal: [],
  totalCookiesData: storeCookieSales,
  totalCookiesDay: 0
};
var capitolHill = {
  name: 'cap-data',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  randCust: randomCustPerHour,
  cookiesPerHour: cookiesPerHour,
  cookieTotal: [],
  totalCookiesData: storeCookieSales,
  totalCookiesDay: 0
};
var alki = {
  name: 'alki-data',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  randCust: randomCustPerHour,
  cookiesPerHour: cookiesPerHour,
  cookieTotal: [],
  totalCookiesData: storeCookieSales,
  totalCookiesDay: 0
};
function randomCustPerHour() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}
function cookiesPerHour () {
  return (this.randCust() * this.avgCookieSale);
}
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function storeCookieSales() {
  for(var i=0; i<storeHours.length; i++) {
    var hourlyCookieTotal = Math.ceil(this.cookiesPerHour());
    var formatingValue = storeHours[i] + ': ' + hourlyCookieTotal + ' cookies';
    this.cookieTotal[i] = formatingValue;
    this.totalCookiesDay += hourlyCookieTotal;
    var storeRevenue = document.getElementById(this.name);
    var storeEl = document.createElement('li');
    storeEl.textContent = formatingValue;
    storeRevenue.appendChild(storeEl);
  }
  storeEl.innerText = 'Total: ' + this.totalCookiesDay + ' cookies';
}

firstAndPike.totalCookiesData();
seaTacAirport.totalCookiesData();
seattleCenter.totalCookiesData();
capitolHill.totalCookiesData();
alki.totalCookiesData();