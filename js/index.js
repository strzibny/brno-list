var context = {};

function prepareIndex() {
    renderIndex();
}    

function renderIndex() {
    $("#page-placeholder").html(Templates.compileIndexTemplate());
    $("#search").on("input", function() {
        Data.filteredVenues = $.grep(Data.venues, function(element, index) {
            return element.name.toLowerCase().indexOf($("#search").val().toLowerCase()) >= 0;
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