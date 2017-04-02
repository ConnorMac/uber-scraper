// ----- COPY A PASTE THIS FIRST ------ //
var tripData = [];

var count = 0;
while(count <=30) {
  count++;
  getTrips(count);
}

//TODO: add promises
function getTrips(count) {
    $.ajax({
      url: "https://riders.uber.com/trips?state=WcgqTGlVzL2lKB8M3bMY9x-OM_l1patqg0qt4VRGTW4%3D&page="+count,
      context: document.body
    }).done(function(response) {
      // Get dom nodes
      var html = $.parseHTML(response);
      // console.log($.each.())
      if($(html).find('#trips-table .trip-expand__origin').length > 0) {
        $.each($(html).find('#trips-table .trip-expand__origin'), function( index, value ) {
          console.log(value);
          relevantData = {
            date: $(value).find('td:nth-of-type(2)').text(),
            price: $(value).find('td:nth-of-type(4)').text()
          };
          tripData.push(relevantData);
        });
      } else {
        console.log('Done scraping');
      }
    }).fail(function() {
        scrape = false;
    });
}
// ----- --------------------------- ------ //

// ----- COPY A PASTE THIS SECOND AFTER AJAX CALLS ------ //
// Create console function to download file - so we will download the json of our uber data
(function(console){

console.save = function(data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
})(console)
console.save(tripData, 'tripdata.json');
// ----- --------------------------- ------ //


// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

