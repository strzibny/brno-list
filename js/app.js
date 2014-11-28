$(document).ready(function() {
    // load places from JSON file and put them in the page via templates
    $.getJSON("places.json", function(data) {
        Handlebars.registerHelper("isOpenNow", function(openingHours) {
            var openTemplate = new Handlebars.SafeString($("#place-info-open").html());
            var closedTemplate = new Handlebars.SafeString($("#place-info-closed").html());

            return isOpenNow(openingHours) ? openTemplate : closedTemplate;
        });

        Handlebars.registerPartial("opening-hours", $("#opening-hours-partial").html());

        var template = $("#place-template").html();  
        var compileTemplate = Handlebars.compile(template);  
 
        $(document.body).append(compileTemplate(data));
    });
});
