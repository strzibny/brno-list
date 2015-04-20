var detailTemplate,
    compileDetailTemplate,
    data;

function prepareDetail(slug) {
    detailTemplate = $("#detail-template").html();  
    compileDetailTemplate = Handlebars.compile(detailTemplate);  
    
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
    
    $("#page-placeholder").html(compileDetailTemplate(venues[0]));
}