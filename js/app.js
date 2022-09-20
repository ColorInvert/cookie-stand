'use strict';


//GLOBALS

let salesSection = document.getElementById('sales-data');

console.dir(salesSection);

let listableSales = ['6AM: ', '7AM: ', '8AM: ', '9AM: ', '10AM: ', '11AM: ', '12PM: ', '1PM: ', '1PM: ', '2PM: ', '3PM: ', '4PM: ', '5PM: ', '6PM: ', '7PM: '];

let storefronts = [];

// CONSTRUCTOR

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

// CONSTRUCT OBJECTS

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





// PROTOTYPE METHODS


StoreLocation.prototype.getCustomers = function () {
  console.log('PING!');
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

StoreLocation.prototype.render = function () {
  // **** DOM ****
  let articleElem = document.createElement('article');
  salesSection.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.City;
  articleElem.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for (let i = 0; i < this.hoursOfOperation + 1; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = this.listableSales[i];
    ulElem.appendChild(liElem);
  }
  let tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'Good with Cats';
  row1.appendChild(th1Elem);

  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Good with Dogs';
  row1.appendChild(th2Elem);

  let th3Elem = document.createElement('th');
  th3Elem.textContent = 'Good with People';
  row1.appendChild(th3Elem);

  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);

  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.isGoodWithCats;
  row2.appendChild(td1Elem);

  let td2Elem = document.createElement('td');
  td2Elem.textContent = this.isGoodWithDogs;
  row2.appendChild(td2Elem);

  let td3Elem = document.createElement('td');
  td3Elem.textContent = this.isGoodWithPeople;
  row2.appendChild(td3Elem);

};

StoreLocation.prototype.sayHi = function () {
  console.log('Hi!');
};





//! EXECUTE PROTOTYPE METHODS

storefronts[0].sayHi();
storefronts[0].getCustomers();
storefronts[0].getSales();
storefronts[0].getListableSales();




//HELPER FUNCTIONS/UTILITIES


// ? body of function grabbed from MDN
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//OBJECT LITERALS
/*
let Seattle = {
  city: 'Seattle',
  hoursOfOperation: 15,
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSale: 6.3,
  dailyTotal: 0,
  hourlyCustomers: [],
  hourlySales: [],
  listableSales: [],

  getCustomers: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.hourlyCustomers[i] = randomInt(this.minCust, this.maxCust);
    }
  },

  getSales: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.hourlySales[i] = this.hourlyCustomers[i] * this.avgCookiesPerSale;
      this.hourlySales[i] = this.hourlySales[i].toFixed(0);
      this.dailyTotal += Number(this.hourlySales[i]);
    }
  },

  getListableSales: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.listableSales[i] = listableSales[i] + this.hourlySales[i] + ' cookies';
    }
    this.listableSales.push('Total: ' + this.dailyTotal + ' cookies');
  },

  render: function () {

    // **** DOM ****
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.City;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hoursOfOperation + 1; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.listableSales[i];
      ulElem.appendChild(liElem);
    }
  }
};


let Tokyo = {
  City: 'Tokyo',
  hoursOfOperation: 15,
  minCust: 3,
  maxCust: 24,
  avgCookiesPerSale: 1.2,
  dailyTotal: 0,
  hourlyCustomers: [],
  hourlySales: [],
  listableSales: [],

  getCustomers: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.hourlyCustomers[i] = randomInt(this.minCust, this.maxCust);
    }
  },

  getSales: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.hourlySales[i] = this.hourlyCustomers[i] * this.avgCookiesPerSale;
      this.hourlySales[i] = this.hourlySales[i].toFixed(0);
      this.dailyTotal += Number(this.hourlySales[i]);
    }
  },

  getListableSales: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.listableSales[i] = listableSales[i] + this.hourlySales[i] + ' cookies';
    }
    this.listableSales.push('Total: ' + this.dailyTotal + ' cookies');
  },

  render: function () {

    // **** DOM ****
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.City;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hoursOfOperation + 1; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.listableSales[i];
      ulElem.appendChild(liElem);
    }
  }
};

let Dubai = {
  City: 'Dubai',
  hoursOfOperation: 15,
  minCust: 11,
  maxCust: 38,
  avgCookiesPerSale: 3.7,
  dailyTotal: 0,
  hourlyCustomers: [],
  hourlySales: [],
  listableSales: [],

  getCustomers: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.hourlyCustomers[i] = randomInt(this.minCust, this.maxCust);
    }
  },

  getSales: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.hourlySales[i] = this.hourlyCustomers[i] * this.avgCookiesPerSale;
      this.hourlySales[i] = this.hourlySales[i].toFixed(0);
      this.dailyTotal += Number(this.hourlySales[i]);
    }
  },

  getListableSales: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.listableSales[i] = listableSales[i] + this.hourlySales[i] + ' cookies';
    }
    this.listableSales.push('Total: ' + this.dailyTotal + ' cookies');
  },

  render: function () {

    // **** DOM ****
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.City;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hoursOfOperation + 1; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.listableSales[i];
      ulElem.appendChild(liElem);
    }
  }
};

let Paris = {
  City: 'Paris',
  hoursOfOperation: 15,
  minCust: 20,
  maxCust: 38,
  avgCookiesPerSale: 2.3,
  dailyTotal: 0,
  hourlyCustomers: [],
  hourlySales: [],
  listableSales: [],

  getCustomers: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.hourlyCustomers[i] = randomInt(this.minCust, this.maxCust);
    }
  },

  getSales: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.hourlySales[i] = this.hourlyCustomers[i] * this.avgCookiesPerSale;
      this.hourlySales[i] = this.hourlySales[i].toFixed(0);
      this.dailyTotal += Number(this.hourlySales[i]);
    }
  },

  getListableSales: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.listableSales[i] = listableSales[i] + this.hourlySales[i] + ' cookies';
    }
    this.listableSales.push('Total: ' + this.dailyTotal + ' cookies');
  },

  render: function () {

    // **** DOM ****
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.City;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hoursOfOperation + 1; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.listableSales[i];
      ulElem.appendChild(liElem);
    }
  }
};

let Lima = {
  City: 'Lima',
  hoursOfOperation: 15,
  minCust: 2,
  maxCust: 16,
  avgCookiesPerSale: 4.6,
  dailyTotal: 0,
  hourlyCustomers: [],
  hourlySales: [],
  listableSales: [],

  getCustomers: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.hourlyCustomers[i] = randomInt(this.minCust, this.maxCust);
    }
  },

  getSales: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.hourlySales[i] = this.hourlyCustomers[i] * this.avgCookiesPerSale;
      this.hourlySales[i] = this.hourlySales[i].toFixed(0);
      this.dailyTotal += Number(this.hourlySales[i]);
    }
  },

  getListableSales: function () {
    for (let i = 0; i < this.hoursOfOperation; i++) {
      this.listableSales[i] = listableSales[i] + this.hourlySales[i] + ' cookies';
    }
    this.listableSales.push('Total: ' + this.dailyTotal + ' cookies');
  },

  render: function () {

    // **** DOM ****
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.City;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < this.hoursOfOperation + 1; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = this.listableSales[i];
      ulElem.appendChild(liElem);
    }
  }
};
*/




// EXECUTABLE CODE
// Seattle.getCustomers();
// Seattle.getSales();
// Seattle.getListableSales();
// Seattle.render();

// Tokyo.getCustomers();
// Tokyo.getSales();
// Tokyo.getListableSales();
// Tokyo.render();

// Dubai.getCustomers();
// Dubai.getSales();
// Dubai.getListableSales();
// Dubai.render();

// Paris.getCustomers();
// Paris.getSales();
// Paris.getListableSales();
// Paris.render();

// Lima.getCustomers();
// Lima.getSales();
// Lima.getListableSales();
// Lima.render();
