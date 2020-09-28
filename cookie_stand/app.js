//'use strict';
/* Store Hours array: 06:00 - 19:00 (applies to all stores) */
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

/* Random number generator */

// arguments: minCust is the minimum customers/hr; maxCust is the maximum customers/hr
// for each store; invoke with numbers or variables -- getRandomNum(Store.minCustHour, Store.maxCustHour)
function getRandomNum(minCust, maxCust){
    // generate random number Math.floor(Math.random() * (b - a) + a)
    // 
    var randomNum = Math.floor(Math.random() * (maxCust - minCust) + minCust);  
    // uncomment to see values
    // console.log(randomNum);
    return randomNum; // return the value
} // end getRandomNum


var storeLocations = [];
/*  This is the constructor function for creating new Stores
    Invocation example: 
    var SaltLake = new Store('Salt Lake City', 24, 50, 5.2);
*/
function Store(storeName, minCustHour, maxCustHour, avgSalePerCust) {
    this.storeName = storeName;         // name of city/store (string)
    this.soldPerHour = [];              // empty array for storing number of cookies sold per hour (number)
    this.dailyTotal = 0;                // total of all sales (number)
    this.minCustHour = minCustHour;     // minimum customers per hour (number)
    this.maxCustHour = maxCustHour;     // maximum customers per hour (number)
    this.avgSalePerCust = avgSalePerCust;     // average number of cookies bought per customer

    /*  Calculate the number of cookies sold for each hour
        Uses getRandomNum() function to generate the customers for each given hour
        and multiplies it by the number of cookies bought by each customer
    */
    for (var i = 0; i < hours.length; i ++) {
        // Generate the random number of customers for each hour
        var customersPerHour = getRandomNum(this.minCustHour, this.maxCustHour);
        // Multiply customers per hour by the number of cookies sold per customer
        var cookiesPerHour = Math.floor(customersPerHour * this.avgSalePerCust);
        // push() the value into the empty this.soldPerHour array[]
        this.soldPerHour.push(cookiesPerHour);
    }  // end for()
    
    /*  Calculate the daily total of all cookies sold, based on cookies sold per hour
        added up for each hour that the store is open.
        Incrementally adds '+=' each hour, starting with 6am, and ending with 7pm
    */
    for (var i = 0; i < hours.length; i++) {
        // daily total sum increases with each loop iteration, using += operator
        // this.soldPerHour[i]: i = the array index, which increases by one for each loop iteration
        this.dailyTotal += this.soldPerHour[i];
    } // end for()
} // end of Store()

/*  Test it by creating a new store and display the object, sales per hour, and hours
    NOTE: uncomment to debug, but re-comment afterward
*/
var saltLake = new Store("Salt Lake City", 24, 60, 5.5);
console.log(saltLake);                      // outputs all store information
// console.log(hours.length);                  // should output '14'
//console.log(saltLake.soldPerHour.length);   // should output '14'

/* Create the main stores per the assignment */
// each is a new instance of the Store() function
var seattle = new Store('Seattle', 23,65,6.3);
var tokyo   = new Store('Tokyo', 3,24,1.2);
var dubai   = new Store('Dubai', 11,38,3.7);
var paris   = new Store('Paris', 20,38,2.3);
var lima    = new Store('Lima', 2,16,4.6);

// /* Empty array for storing the store names/loctions */
// var storeNames = [];
// /* push() the stores into the storeName[] array */
// storeNames.push(seattle);
// /* uncomment to view the stores (for debugging); recomment when done */
// console.log('store names: ' + storeNames);

// /* ----- DOM and table creation functions -----------------------------------*/

// /* Target salesTable ID on sales.html to create the table */
// var salesTable = document.getElementById('storeTables');
// /*  createHeader function generates the headers for the table 
//     including headers for the hours[] array in the for() loop below
// */
// function createHeader () {
//     var headerTR = document.createElement('tr'); // creates <tr></tr> elements
//     var headerTH = document.createElement('th'); // creates <th></th> elements
//     headerTH.textContent = 'Store Names:';       // adds 'Store Names:' as header text
//     headerTR.appendChild(headerTH);              // append <th> to the table 
//     salesTable.appendChild(headerTR);            // append <tr> to the table
//     /*  Create table headers for each hour that the store is open 
//         Iterates through the array, and creates a header for each hour
//     */
//     for (var i = 0; i < hours.length; i++) {
//         var hoursTH = document.createElement('th'); // creates <th></th> elements for each hour
//         hoursTH.textContent = hours[i];             // header title will be the hour of the day
//         headerTR.appendChild(hoursTH);              // append to sales.html table
//     }
//     var totalTH = document.createElement('th');     // creates <th></th> element
//     totalTH.textContent = 'Total Sales:';           // adds 'Total Sales:' as header text
//     headerTR.appendChild(totalTH);                  // append to sales.html table
// }

// /*  PROTOTYPE function for rendering/creating the table in sales.html 
//     NOTE: no arguments required
// */

// Store.prototype.makeTable = function() { // .body
//     var tableTR = document.createElement('tr'); // creates <tr></tr> elements 
//     salesTable.appendChild(tableTR);            // append rows to sales.html table
//     /* Create row entries for each store name */
//     var tableTD = document.createElement('td'); // creates <td></td> elements
//     tableTD.textContent = this.storeName;       // adds the store name as the <td>
//     tableTR.appendChild(tableTD);               // append data to the rows in sales.html
    
//     //Created the Hours by looping through the hours array and rendering hourlySales
//     /*  Loop through all of the stores contained in the storeNames[] array */
//     for (var i = 0; i < hours.length; i++) {          // loops a number of times equal to the # of hours
//         var hoursTD = document.createElement('td');   // creates <td></td> elements
//         hoursTD.textContent = this.hourlySales[i];
//         tableTR.appendChild(hoursTD);
//         console.log(hoursTD);
//     }
    
//     /*
//         Place the daily total <td> at the end of the row for each company 
//     */
//     var totalTD = document.createElement('td'); // creates <td></td> element
//     totalTD.textContent = this.dailyTotal;      // add the this.dailyTotal to the table
//     tableTR.appendChild(totalTD);               // append to the table on sales.html
// }

// /* Create the FOOTER for the sales table in sales.html */
// function createFooter () {
//     var footerTR = document.createElement('tr');
//     var footerTH = document.createElement('th');
//     footerTH.textContent = 'Hourly Totals';
//     footerTR.appendChild(footerTH);
    
//     var footerTotal = 0;
//     var totalSalesByHr  = 0;
//     /* for() loop generates totals for all  */
//     for (var row = 0; row < hours.length; row++) {
//         totalSalesByHr = 0;        
//         for (var column = 0; column < storeLocations.length; column++) {
//             totalSalesByHr += storeLocations[column].hourlySales[row];
//             footerTotal += storeLocations[column].hourlySales[row];
//         }

//         var totalHours = document.createElement('th');
//         totalHours.textContent = totalSalesByHr;
//         footerTR.appendChild(totalHours);
//     }

//     var footerTotalSales = document.createElement('th');
//     footerTotalSales.textContent = footerTotal;
//     footerTR.appendChild(footerTotalSales);
//     salesTable.appendChild(footerTR);
// }

// /* Main &&  */
// console.log('Store Locations (main): ' + storeLocations);
// function renderTable(){
//     salesTable.innerHTML = null;
//     createHeader();
//     // for() loop through 
//     for (var i = 0; i < storeLocations.length; i++) {
//         storeLocations[i].makeTable();
//     }
//     createFooter();
// }  
// renderTable();

// /* ADD NEW STORE using the button in your html file */
// /*  Target the form on the DOM (sales.html) */
// var storeForm = document.getElementById('newStore');
// /*  Add an event listener to form that executes the createNewStore() function 
//     when the button is clicked or the enter key is pressed ('submit')
//     The second argument doesn't need to be invoked with '()' after it
// */
// console.log(storeForm);
// storeForm.addEventListener('submit', createNewStore); // leave () off of the function inside of addEventListener

// /*  createNewStore generates a new store, based on the values in the form */
// function createNewStore(event) {
//     event.preventDefault();     // prevents values from disappearing from form when clicked/submitted
//     var name  = (event.target.storeName.value);                      // get the new store name (string)
//     var minCust =  parseInt(event.target.minimumCustomer.value);     // get the new store min customers per hour
//     var maxCust =  parseInt(event.target.maxmumCustomer.value);      // get the new store max customers per hour
//     var avgSaleCust =  parseInt(event.target.averageCustomer.value); // get the new average cookie sale per customer
//     /* The next line creates the new store */
//     var newStoreName = new Store(storeName, minCustHour, maxCustHour, avgSaleCust);
//     /* Uncomment the next line to debug, recomment when finished */
//     // console.log(newStoreName);
//     newStoreName.makeTable();
//     createNewStore();
// }
// createNewStore();

