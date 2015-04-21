var detailTemplate,
    compileDetailTemplate,
    data;

function prepareDetail(slug) {
    
    // register template helpers
    Handlebars.registerHelper("isOpenNow", function(openingHours) {
        var openTemplate = new Handlebars.SafeString($("#place-info-open").html());
        var closedTemplate = new Handlebars.SafeString($("#place-info-closed").html());
        
        return isOpenNow(openingHours) ? openTemplate : closedTemplate;
    });
    
    Handlebars.registerPartial("opening-hours", $("#opening-hours-partial").html());
    
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