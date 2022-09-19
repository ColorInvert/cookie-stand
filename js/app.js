'use strict';





//GLOBALS

let salesSection = document.getElementById('sales-data');

console.dir(salesSection);

//let hoursOfOperation = 15;

//let hourlyCustomers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

//let hourlySales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

let listableSales = ['6AM: ', '7AM: ', '8AM: ', '9AM: ', '10AM: ', '11AM: ', '12PM: ', '1PM: ', '1PM: ', '2PM: ', '3PM: ', '4PM: ', '5PM: ', '6PM: ', '7PM: '];

//let dailyTotal = 0;

//HELPER FUNCTIONS/UTILITIES


// ? body of function grabbed from MDN
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//OBJECT LITERALS

let Seattle = {
  City: 'Seattle',
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





//EXECUTABLE CODE
Seattle.getCustomers();
Seattle.getSales();
Seattle.getListableSales();
Seattle.render();

Tokyo.getCustomers();
Tokyo.getSales();
Tokyo.getListableSales();
Tokyo.render();

Dubai.getCustomers();
Dubai.getSales();
Dubai.getListableSales();
Dubai.render();

Paris.getCustomers();
Paris.getSales();
Paris.getListableSales();
Paris.render();

Lima.getCustomers();
Lima.getSales();
Lima.getListableSales();
Lima.render();
