// Handlebars template initialization

(function() {
    window.Templates = window.Templates || {};
        
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

    Handlebars.registerHelper("listTags", function(tags) {
        var tagsTemplate = Handlebars.compile($("#tags").html());
        
        var context = {};
        context.tags = [];
    
        var tagsToProcess = tags.split(',');
        
        _.each(tagsToProcess, function(element, index, list) {
            context.tags.push(element.trim());
        });
        
        return new Handlebars.SafeString(tagsTemplate(context));
    });

    // register partials

    Handlebars.registerPartial("opening-hours", $("#opening-hours-partial").html());

    // compile templates

    Templates.indexTemplate = $("#index-template").html();  
    Templates.compileIndexTemplate = Handlebars.compile(Templates.indexTemplate);  

    Templates.listTemplate = $("#list-template").html();
    Templates.compileListTemplate = Handlebars.compile(Templates.listTemplate);

    Templates.detailTemplate = $("#detail-template").html();  
    Templates.compileDetailTemplate = Handlebars.compile(Templates.detailTemplate);  
    
})();
