'use strict';


//* GLOBAL VARIABLES

let salesSection = document.getElementById('sales-data');

console.dir(salesSection);

let openHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm',];

let storefronts = [];

let storeTotals = [];

let totalTotal = 0;

let tableReference = '';

let newLocationForm = document.getElementById('new-Location-Form');

//* CONSTRUCTOR

function StoreLocation(city, minCust, maxCust, avgCookiesPerSale) {
  this.city = city;
  this.hoursOfOperation = 14;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.dailyTotal = 0;
  this.hourlyCustomers = [];
  this.hourlySales = [];
  this.listableSales = [];
  storefronts.push(this);

}


//* CONSTRUCT OBJECTS

new StoreLocation('Seattle', 23, 65, 6.3);
new StoreLocation('Tokyo', 3, 24, 1.2);
new StoreLocation('Dubai', 11, 38, 3.7);
new StoreLocation('Paris', 20, 38, 2.3);
new StoreLocation('Lima', 2, 16, 4.6);


//* PROTOTYPE METHODS

StoreLocation.prototype.getCustomers = function () {
  for (let i = 0; i < this.hoursOfOperation; i++) {
    this.hourlyCustomers[i] = randomInt(this.minCust, this.maxCust);
  }
};

StoreLocation.prototype.getSales = function () {
  for (let i = 0; i < this.hoursOfOperation; i++) {
    this.hourlySales[i] = this.hourlyCustomers[i] * this.avgCookiesPerSale;
    this.hourlySales[i] = Math.floor(this.hourlySales[i]);
    this.dailyTotal += Number(this.hourlySales[i]);

  }

};

StoreLocation.prototype.renderRow = function () {
  let tableElem = tableReference;

  let tableRow = document.createElement('tr');
  tableElem.appendChild(tableRow);

  let tableData = document.createElement('td');
  tableRow.appendChild(tableData);
  tableData.textContent = this.city;

  for (let i = 0; i < openHours.length; i++) {
    tableData = document.createElement('td');
    tableData.textContent = this.hourlySales[i];
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.dailyTotal;
  tableRow.appendChild(tableData);
};


//? Creates the header for the table, and also grabs and globally stores a reference to the table we just created so it can be navigated to by the renderRow prototypes.

function deployTableHeader() {
  let articleElem = document.createElement('article');
  salesSection.appendChild(articleElem);

  let tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  let tableHeader = document.createElement('th');
  tableElem.appendChild(tableHeader);
  tableHeader.textContent = '     ';

  for (let i = 0; i < openHours.length; i++) {
    let tableHeader = document.createElement('th');
    tableElem.appendChild(tableHeader);
    tableHeader.textContent = openHours[i];
  }

  tableHeader = document.createElement('th');
  tableElem.appendChild(tableHeader);
  tableHeader.textContent = 'Daily Location Total';
  return tableReference = tableElem;
}

function getStoreTotals() {

  //?initializes the storeTotals array before iterating, to prevent the array from ballooning in size when this function is re-called for the addition of a new city into the chart.
  storeTotals.length = 0;

  for (let i = 0; i < openHours.length; i++) { //slow loop, hours of OP
    let hourlyTotal = 0;
    for (let j = 0; j < storefronts.length; j++) {
      hourlyTotal += Number(storefronts[j].hourlySales[i]);



    }
    storeTotals.push(hourlyTotal);

  }
}




//?Create footer of table, a totals across stores for each hour.

function deployStoreTotals() {
  let tableElem = tableReference;

  let tableRow = document.createElement('tr');
  tableRow.setAttribute('id', 'Totals');
  tableElem.appendChild(tableRow);

  let tableData = document.createElement('td');
  tableData.textContent = 'Totals';
  tableRow.appendChild(tableData);
  for (let i = 0; i < openHours.length; i++) {
    tableData = document.createElement('td');
    tableData.textContent = storeTotals[i];
    tableRow.appendChild(tableData);
  }

  //? Make final entry, a total of totals.
  for (let i = 0; i < storeTotals.length; i++) {
    totalTotal += storeTotals[i];
  }
  tableData = document.createElement('td');
  tableData.textContent = totalTotal;
  tableRow.appendChild(tableData);
}

//* HANDLING OF NEW CITY SUBMIT BUTTON FOR TABLE
function handleSubmit(event) {

  //* Prevent normal behavior of the event firing and inject custom behavior
  event.preventDefault();

  //* get the data of our forms
  let newLocCity = event.target.cityName.value;
  let newLocMin = Number(event.target.minCust.value);
  let newLocMax = Number(event.target.maxCust.value);
  let newLocAvg = Number(event.target.avgSale.value);

  //*Turn this data into a new store
  let newStore = new StoreLocation(newLocCity, newLocMin, newLocMax, newLocAvg);


  //*destroy the Totals row of the Table
  const element = document.getElementById('Totals');
  element.remove();
  newStore.getCustomers();
  newStore.getSales();
  newStore.renderRow();
  getStoreTotals();
  deployStoreTotals();
}


//? EXECUTE SETUP FUNCTIONS

deployTableHeader();


//! EXECUTE PROTOTYPE METHODS

for (let i = 0; i < storefronts.length; i++) {
  storefronts[i].getCustomers();
  storefronts[i].getSales();
  storefronts[i].renderRow();
}

//! EXECUTE FOOTER FUNCTIONS
getStoreTotals();
deployStoreTotals();


//! EVENT LISTENER FOR FORM SUBMIT BUTTON
newLocationForm.addEventListener('submit', handleSubmit);


//* HELPER FUNCTIONS/UTILITIES

// ? body of function grabbed from MDN
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


