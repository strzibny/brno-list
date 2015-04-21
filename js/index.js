var indexTemplate,
    compileIndexTemplate,
    listTemplate,
    compileListTemplate,
    data,
    filteredData
    context = {};

function prepareIndex() {
    
    // register template helpers
    Handlebars.registerHelper("isOpenNow", function(openingHours) {
        var openTemplate = new Handlebars.SafeString($("#place-info-open").html());
        var closedTemplate = new Handlebars.SafeString($("#place-info-closed").html());
        
        return isOpenNow(openingHours) ? openTemplate : closedTemplate;
    });
    
    Handlebars.registerHelper("openingHoursToday", function(openingHours) {
        var openingHoursDayTemplate = Handlebars.compile($("#opening-hours-today").html());
        
        var context = {};
        context.today = getShortDayNameByOrder(new Date().getDay());;
        context.openingHours = openingHours[context.today];
        
        return new Handlebars.SafeString(openingHoursDayTemplate(context));
    });
    
    Handlebars.registerPartial("opening-hours", $("#opening-hours-partial").html());
    
    indexTemplate = $("#index-template").html();  
    compileIndexTemplate = Handlebars.compile(indexTemplate);  
    
    listTemplate = $("#list-template").html();
    compileListTemplate = Handlebars.compile(listTemplate);
    
    // load places from JSON file and put them in the page
    $.getJSON("data/places.json", function(receivedData) {
        data = filteredData = receivedData;
        renderIndex();
    });    
}    

function renderIndex() {
    $("#page-placeholder").html(compileIndexTemplate());
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
    $("#list-placeholder").html(compileListTemplate(context));
}