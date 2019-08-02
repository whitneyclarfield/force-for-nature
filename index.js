//global variables
console.log("linked");
var button = $("button");
var zipCode = $(".zip").val();
var events = {90292 : ["Nothin' But Sand Beach Cleanup: Saturday, August 17 10am - 12pm. ", "CA-wide coastal cleanup: Saturday, September 21 9-12. ", "SoCal 350 general meeting: Sunday, August 18 3-5. ", "email Ted Lieu for more ways to take action against climate change at info@tedlieu.com  P.O. Box 1309 Torrance, CA 90505. "]};
var container = $(".container");

//function Calls
button.on("click", printEvents);
console.log(button);

console.log(events);

//function declarations
function printEvents(){
// container.append(events[zipCode]);
// access & store the array that is stored within the events object
//  object.key
// iterate over the array (for loop) and append everything
  // container.append(`<p>HI</p>`)
  eventInfo = events[90292];
  for (var i = 0; i < eventInfo.length; i++) {
    container.append(eventInfo[i]);
  }
}
