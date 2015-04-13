(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    };
    
    // define router
    App.Router = Backbone.Router.extend({
        
        routes: {
            "": "index",
            "detail/:id": "detail"
        },
        
        index: function() {
            prepareIndex();
        },
        
        detail: function(id) {
            prepareDetail(id);
        }
    });
    
    new App.Router();
    Backbone.history.start();
})();