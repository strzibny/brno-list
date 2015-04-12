var indexTemplate,
    compileIndexTemplate,
    data,
    filteredData;

function prepareIndex() {
    
    // register template helpers
    Handlebars.registerHelper("isOpenNow", function(openingHours) {
        var openTemplate = new Handlebars.SafeString($("#place-info-open").html());
        var closedTemplate = new Handlebars.SafeString($("#place-info-closed").html());
        
        return isOpenNow(openingHours) ? openTemplate : closedTemplate;
    });
    
    Handlebars.registerPartial("opening-hours", $("#opening-hours-partial").html());
    
    indexTemplate = $("#place-template").html();  
    compileIndexTemplate = Handlebars.compile(indexTemplate);  
    
    // load places from JSON file and put them in the page
    $.getJSON("data/places.json", function(receivedData) {
        data = filteredData = receivedData;
        renderIndex();
    });    
    
}    

// filters list based on search term
$("#search").on("input", function() {
    filteredData = $.grep(data, function(element, index) {
        return element.name.toLowerCase().indexOf($("#search").val().toLowerCase()) >= 0;
    });
    renderIndex();
});

// re-renders list of places
function renderIndex() {
    $("#places-placeholder").html(compileIndexTemplate(filteredData));
}
