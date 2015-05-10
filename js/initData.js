// Data initialization from data/places.json

(function() {
    window.Data = window.Data || {};
    
    // change to async to load data before page render
    $.ajaxSetup({
        async: false
    });
    
    // load places from JSON file and put them in the page
    $.getJSON("data/places.json", function(loadedData) {
        Data.venues = Data.filteredVenues = loadedData;
    });
})();