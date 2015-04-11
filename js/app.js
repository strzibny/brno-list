var template,
    compileTemplate,
    data,
    filteredData;

$(document).ready(function() {
    
    // register template helpers
    Handlebars.registerHelper("isOpenNow", function(openingHours) {
        var openTemplate = new Handlebars.SafeString($("#place-info-open").html());
        var closedTemplate = new Handlebars.SafeString($("#place-info-closed").html());
        
        return isOpenNow(openingHours) ? openTemplate : closedTemplate;
    });
    
    Handlebars.registerPartial("opening-hours", $("#opening-hours-partial").html());
    
    template = $("#place-template").html();  
    compileTemplate = Handlebars.compile(template);  
    
    // load places from JSON file and put them in the page
    $.getJSON("data/places.json", function(receivedData) {
        data = filteredData = receivedData;
        render();
    });    
    
});

// filters list based on search term
$("#search").on("input", function() {
    filteredData = $.grep(data, function(element, index) {
        return element.name.toLowerCase().indexOf($("#search").val().toLowerCase()) >= 0;
    });
    render();
});

// re-renders list of places
function render() {
    $("#places-placeholder").html(compileTemplate(filteredData));
}
