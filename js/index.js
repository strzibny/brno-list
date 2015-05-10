// Index page

var context = {};

function renderIndex() {
    $("#page-placeholder").html(Templates.compileIndexTemplate());
    $("#search").val(Data.searchTerm);
    $("#search").on("input", function() {
        Data.searchTerm = $("#search").val().toLowerCase();
        Data.filteredVenues = $.grep(Data.venues, function(element, index) {
            var match = false;
            var searchIn = ["name", "tags", "description"];
            
            _.each(searchIn, function(elem, index, list) {
                if (element[elem] && 
                    element[elem].toLowerCase().indexOf(Data.searchTerm) >= 0) {
                    match = true;
                }
            });
            
            return match;
        });
        renderList();
    });
    renderList();
}

// re-renders list of places
function renderList() {
    context.venues = Data.filteredVenues;
    $("#list-placeholder").html(Templates.compileListTemplate(context));
}