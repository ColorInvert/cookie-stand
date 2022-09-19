'use strict';





//GLOBALS

let salesSection = document.getElementById();
let hours =['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM']
let dailyTotal = 0

//HELPER FUNCTIONS/UTILITIES


// ? body of function grabbed from MDN 
function randomValue(min, max) {
  Math.floor(Math.random() * (max - min + 1) + min);
}

//OBJECT LITERALS

let Seattle = {
  City: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSale: 6.3,
  render: function() {
    // **** DOM MANIPULATION ****
  
    salesSection.appendChild(articleElem);
  
    let articleElem = document.createElement('article');
  
    let h2Elem = document.createElement('h2');
    h2Elem.textContent this.City;
    articleElem.appendChild(h2Elem);
  
  
  
  
  
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

Seattle.render()