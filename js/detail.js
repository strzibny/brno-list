var detailTemplate,
    compileDetailTemplate;

function prepareDetail(id) {
    detailTemplate = $("#detail-template").html();  
    compileDetailTemplate = Handlebars.compile(detailTemplate);  
    
    renderDetail(id);
}

function renderDetail(id) {
    $("#page-placeholder").html(compileDetailTemplate());
}