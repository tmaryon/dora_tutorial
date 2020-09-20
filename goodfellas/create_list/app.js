/* --- createElement and appendChild Tutorial ---/
* A guide to using getElementById() to target
* an element on your html page, then use 
* createElement() and appendChild() to add        
* content to the web page                   --- */

/* Define variables */
    // get the list by ID
    var myList = document.getElementById('myList');
/* Time & Sales Arrays */
    var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm']; // length is number of elements in array
    var salesNums = [45, 56, 77, 92, 102, 131, 102, 151]; // length is the number of elements in array
// /* Create h2 with city name */
    // create new h2
    var newH2 = document.createElement('h2');
    // define the text for new h2
    newH2.textContent = 'Seattle';
    console.log(newH2);
    // add the h2 to myList (adds to the html file)
    myList.appendChild(newH2);

/* create the list of times & cookies sold */
    for (var i = 0; i < timeArray.length; i++) {
        // define & create the li
        var newLi = document.createElement('li');
        // define the text for new li
        newLi.textContent = timeArray[i] + ': ' + ' ' + salesNums[i] + ' cookies sold!';
        // add the new li to myList
        myList.appendChild(newLi);
    }

/* add up the total for all of the hours */
    var totalCookies = 0;
    for(var j = 0; j < salesNums.length; j++) {
        totalCookies += salesNums[j];  
    }
    var total = document.createElement('li');
    total.textContent = "total: " + totalCookies + " cookies";
    myList.appendChild(total);

/*- End of file (EOF) -*/