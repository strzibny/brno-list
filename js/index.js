var data,
    filteredData
    context = {};

function prepareIndex() {
    
    // load places from JSON file and put them in the page
    $.getJSON("data/places.json", function(receivedData) {
        data = filteredData = receivedData;
        renderIndex();
    });    
}    

function renderIndex() {
    $("#page-placeholder").html(Templates.compileIndexTemplate());
    $("#search").on("input", function() {
        filteredData = $.grep(data, function(element, index) {
            return element.name.toLowerCase().indexOf($("#search").val().toLowerCase()) >= 0;
        });
        renderList();
    });
    renderList();
}

// re-renders list of places
function renderList() {
    context.venues = filteredData;
    $("#list-placeholder").html(Templates.compileListTemplate(context));
}