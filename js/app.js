'use strict';





//GLOBALS

let salesSection = document.getElementById('sales-data');

console.dir(salesSection);

let hoursOfOperation = 15;

let hourlyCustomers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

let hourlySales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

let listableSales = ['6AM: ', '7AM: ', '8AM: ', '9AM: ', '10AM: ', '11AM: ', '12PM: ', '1PM: ', '1PM: ', '2PM: ', '3PM: ', '4PM: ', '5PM: ', '6PM: ', '7PM: '];

let dailyTotal = 0;

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
  hourlyCustomers: [],
  hourlySales: [],
  listableSales: [],
  getCustomers: function () {
    for (let i = 0; i < hoursOfOperation; i++) {
      hourlyCustomers[i] = randomInt(this.minCust, this.maxCust);
    }

  },

  getSales: function () {
    for (let i = 0; i < hoursOfOperation; i++) {
      hourlySales[i] = hourlyCustomers[i] * this.avgCookiesPerSale;
      hourlySales[i] = hourlySales[i].toFixed(0);
      dailyTotal += Number(hourlySales[i]);

    }

  },

  getListableSales: function () {
    for (let i = 0; i < hoursOfOperation; i++) {
      listableSales[i] = listableSales[i] + hourlySales[i] + ' cookies';

    }
    listableSales.push('Total: ' + dailyTotal + ' cookies');
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
      liElem.textContent = listableSales[i];
      ulElem.appendChild(liElem);
      console.log(listableSales);

    }
  }
};


let Tokyo = {
  City: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiesPerSale: 1.2,
};

let Dubai = {
  City: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiesPerSale: 3.7,
};

let Paris = {
  City: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookiesPerSale: 2.3,
};

let Lima = {
  City: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookiesPerSale: 4.6,
};





//EXECUTABLE CODE
Seattle.getCustomers();
Seattle.getSales();
Seattle.getListableSales();
Seattle.render();
