var context = {};

function renderIndex() {
    $("#page-placeholder").html(Templates.compileIndexTemplate());
    $("#search").val(Data.searchTerm);
    $("#search").on("input", function() {
        Data.searchTerm = $("#search").val();
        Data.filteredVenues = $.grep(Data.venues, function(element, index) {
            return element.name.toLowerCase().indexOf(Data.searchTerm.toLowerCase()) >= 0;
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