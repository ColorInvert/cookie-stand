'use strict';


//* GLOBALS

let salesSection = document.getElementById('sales-data');

console.dir(salesSection);

let openHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm',];

let storefronts = [];

let tableReference = '';
//* CONSTRUCTOR

function StoreLocation(city, minCust, maxCust, avgCookiesPerSale) {
  this.city = city;
  this.hoursOfOperation = 15;
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
console.log(storefronts);





// function renderAll() {
//   for (let i = 0; i < storefronts.length; i++) {


//   }

// }





//* PROTOTYPE METHODS


StoreLocation.prototype.getCustomers = function () {
  for (let i = 0; i < this.hoursOfOperation; i++) {
    this.hourlyCustomers[i] = randomInt(this.minCust, this.maxCust);
  }
};

StoreLocation.prototype.getSales = function () {
  for (let i = 0; i < this.hoursOfOperation; i++) {
    this.hourlySales[i] = this.hourlyCustomers[i] * this.avgCookiesPerSale;
    this.hourlySales[i] = this.hourlySales[i].toFixed(0);
    this.dailyTotal += Number(this.hourlySales[i]);
  }
};

StoreLocation.prototype.getListableSales = function () {
  for (let i = 0; i < this.hoursOfOperation; i++) {
    this.listableSales[i] = listableSales[i] + this.hourlySales[i] + ' cookies';
  }
  this.listableSales.push('Total: ' + this.dailyTotal + ' cookies');

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


//? also gets the reference for the table just created
function deployTableHeader() {
  let articleElem = document.createElement('article');
  salesSection.appendChild(articleElem);

  let tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  // let tableHeader = document.createElement('th');
  // tableElem.appendChild(tableHeader);

  let tableHeader = document.createElement('th');
  tableElem.appendChild(tableHeader);
  tableHeader.textContent = 'Don\'t look at me!';
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
/*
function deployTableRow() {
  let tableElem = tableReference;
  for (let i = 0; i < storefronts.length; i++) {
    let tableRow = document.createElement('tr');
    tableElem.appendChild(tableRow);

    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = storefronts[currentTableRow].city;
    
    for (let i = 0; i < openHours.length; i++) {
      tableData = document.createElement('td');
      tableData.textContent = storefronts[currentTableRow].hourlySales[i];
      tableRow.appendChild(tableData);
    }
    tableData = document.createElement('td');
    tableData.textContent = storefronts[i].dailyTotal;
    tableRow.appendChild(tableData);
    currentTableRow++;
  }
}
*/
// StoreLocation.prototype.render = function () {
//   // **** DOM ****
//   let articleElem = document.createElement('article');
//   salesSection.appendChild(articleElem);

//   let h2Elem = document.createElement('h2');
//   h2Elem.textContent = this.City;
//   articleElem.appendChild(h2Elem);

//   let ulElem = document.createElement('ul');
//   articleElem.appendChild(ulElem);

//   for (let i = 0; i < this.hoursOfOperation + 1; i++) {
//     let liElem = document.createElement('li');
//     liElem.textContent = this.listableSales[i];
//     ulElem.appendChild(liElem);
//   }
//   let tableElem = document.createElement('table');
//   articleElem.appendChild(tableElem);

//   let row1 = document.createElement('tr');
//   tableElem.appendChild(row1);

//   let th1Elem = document.createElement('th');
//   th1Elem.textContent = 'Good with Cats';
//   row1.appendChild(th1Elem);

//   let th2Elem = document.createElement('th');
//   th2Elem.textContent = 'Good with Dogs';
//   row1.appendChild(th2Elem);

//   let th3Elem = document.createElement('th');
//   th3Elem.textContent = 'Good with People';
//   row1.appendChild(th3Elem);

//   let row2 = document.createElement('tr');
//   tableElem.appendChild(row2);

//   let td1Elem = document.createElement('td');
//   td1Elem.textContent = this.isGoodWithCats;
//   row2.appendChild(td1Elem);

//   let td2Elem = document.createElement('td');
//   td2Elem.textContent = this.isGoodWithDogs;
//   row2.appendChild(td2Elem);

//   let td3Elem = document.createElement('td');
//   td3Elem.textContent = this.isGoodWithPeople;
//   row2.appendChild(td3Elem);

// };

let articleElem = document.createElement('article');
salesSection.appendChild(articleElem);



//? EXECUTE SETUP FUNCTIONS
deployTableHeader();
//! EXECUTE PROTOTYPE METHODS
for (let i = 0; i < storefronts.length; i++) {
  storefronts[i].getCustomers();
  storefronts[i].getSales();
  storefronts[i].renderRow();
  //storefronts[i].getListableSales();
  //storefronts[i].render();
}


//deployTableRow();

//* HELPER FUNCTIONS/UTILITIES


// ? body of function grabbed from MDN
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//* OBJECT LITERALS


//!Dom render function kept for reference
// render: function () {

//   // **** DOM ****
//   let articleElem = document.createElement('article');
//   salesSection.appendChild(articleElem);

//   let h2Elem = document.createElement('h2');
//   h2Elem.textContent = this.City;
//   articleElem.appendChild(h2Elem);

//   let ulElem = document.createElement('ul');
//   articleElem.appendChild(ulElem);

//   for (let i = 0; i < this.hoursOfOperation + 1; i++) {
//     let liElem = document.createElement('li');
//     liElem.textContent = this.listableSales[i];
//     ulElem.appendChild(liElem);
//   }
// }

//* EXECUTABLE CODE