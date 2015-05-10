// Detail page

function renderDetail(slug) {    
    var venues = $.grep(Data.venues, function(element, index) {
        if (element.slug) {
            return element.slug.toLowerCase() === slug;
        }
        
        return false;
    });
    
    $("#page-placeholder").html(Templates.compileDetailTemplate(venues[0]));
}