$(document).ready(function() {
    // load places from JSON file and put them in the page via templates
    $.getJSON("places.json", function(data) {
        var template = $("#place-template").html();  
        var compileTemplate = Handlebars.compile(template);  
 
        $(document.body).append(compileTemplate(data));
    });
});
