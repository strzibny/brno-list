// Backbone router initialization

(function() {
    window.App = {
        Router: {}
    };
    
    // define router
    App.Router = Backbone.Router.extend({        
        routes: {
            "": "index",
            "detail/:id": "detail"
        },
        
        index: function() {
            renderIndex();
        },
        
        detail: function(slug) {
            renderDetail(slug);
        }
    });
    
    new App.Router();
    Backbone.history.start();
})();