var data;

function prepareDetail(slug) {
    
    // load places from JSON file
    $.getJSON("data/places.json", function(receivedData) {
        data = receivedData;
        renderDetail(slug);
    });
}

function renderDetail(slug) {    
    var venues = $.grep(data, function(element, index) {
        if (element.slug) {
            return element.slug.toLowerCase() === slug;
        }
        
        return false;
    });
    
    $("#page-placeholder").html(Templates.compileDetailTemplate(venues[0]));
}